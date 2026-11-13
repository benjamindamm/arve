import '@angular/compiler'
import { Component, createComponent, signal } from '@angular/core'
import { BrnButton } from '@spartan-ng/brain/button'
import { createApplication } from '@angular/platform-browser'

class ButtonExample {
  readonly variant = signal('default')
  readonly label = signal('Rechnung herunterladen')
  readonly disabled = signal(false)
  readonly activated = signal(false)

  selectVariant(event: Event) {
    this.variant.set((event.target as HTMLSelectElement).value)
    this.activated.set(false)
  }
}

const ButtonDemoComponent = Component({
  selector: 'spartan-button-demo',
  imports: [BrnButton],
  template: `
    <div class="demo-stage">
      <button type="button" brnButton class="system-button" [class.outline]="variant() === 'outline'" [disabled]="disabled()" (click)="activated.set(true)">
        {{ label() }}
      </button>
      <p class="demo-status" role="status">{{ activated() ? 'Beispielaktion ausgelöst.' : '' }}</p>
    </div>
    <div class="demo-controls">
      <label for="button-variant">Variante</label>
      <select id="button-variant" [value]="variant()" (change)="selectVariant($event)">
        <option value="default">Default</option>
        <option value="outline">Outline</option>
      </select>
      <label><input type="checkbox" [checked]="disabled()" (change)="disabled.set(!disabled()); activated.set(false)" /> Deaktiviert</label>
    </div>
  `,
})(ButtonExample) ?? ButtonExample

export async function mountButtonDemo(hostElement: HTMLElement, label: string, initialVariant: 'default' | 'outline') {
  const app = await createApplication()
  try {
    const component = createComponent(ButtonDemoComponent, { environmentInjector: app.injector, hostElement })
    component.instance.label.set(label)
    component.instance.variant.set(initialVariant)
    app.attachView(component.hostView)
    component.changeDetectorRef.detectChanges()
    return () => app.destroy()
  } catch (error) {
    app.destroy()
    throw error
  }
}
