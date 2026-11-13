import '@angular/compiler'
import { Component, createComponent, signal } from '@angular/core'
import { createApplication } from '@angular/platform-browser'
import { BrnCheckbox } from '@spartan-ng/brain/checkbox'
import { BrnInput } from '@spartan-ng/brain/input'
import { BrnSwitch } from '@spartan-ng/brain/switch'

export type Control = 'spartan-input' | 'spartan-checkbox' | 'spartan-switch'

let nextId = 0
class ControlExample {
  readonly id = 'spartan-control-' + ++nextId
  readonly kind = signal<Control>('spartan-input')
  readonly label = signal('')
  readonly disabled = signal(false)
}

const ControlDemo = Component({
  selector: 'spartan-control-demo',
  imports: [BrnCheckbox, BrnInput, BrnSwitch],
  template: `
    <div class="demo-stage">
      @switch (kind()) {
        @case ('spartan-input') {
          <div class="spartan-input-demo">
            <label [attr.for]="id">{{ label() }}</label>
            <input brnInput [id]="id" [disabled]="disabled()" type="text" />
          </div>
        }
        @case ('spartan-checkbox') {
          <div class="spartan-toggle-demo">
            <brn-checkbox [aria-labelledby]="id" [disabled]="disabled()" />
            <span [id]="id">{{ label() }}</span>
          </div>
        }
        @case ('spartan-switch') {
          <div class="spartan-toggle-demo">
            <brn-switch [aria-labelledby]="id" [disabled]="disabled()" />
            <span [id]="id">{{ label() }}</span>
          </div>
        }
      }
    </div>
    <div class="demo-controls">
      <label><input type="checkbox" [checked]="disabled()" (change)="disabled.set(!disabled())" /> Deaktiviert</label>
    </div>
  `,
})(ControlExample) ?? ControlExample

export async function mountControlDemo(hostElement: HTMLElement, kind: Control, label: string) {
  const app = await createApplication()
  try {
    const component = createComponent(ControlDemo, { environmentInjector: app.injector, hostElement })
    component.instance.kind.set(kind)
    component.instance.label.set(label)
    app.attachView(component.hostView)
    component.changeDetectorRef.detectChanges()
    return () => app.destroy()
  } catch (error) {
    app.destroy()
    throw error
  }
}
