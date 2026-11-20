# shadcn-Startseite · Änderung vom 20.11.2026

Ausgangsbefund im Browser bestätigt: grosses Intro, Ankersprung und acht ähnlich gewichtete Bereichskarten, ohne unmittelbare Gestaltungsaufgabe.

Geändert: kompakter Titel mit einem Erklärungssatz; vier direkte Aufgaben für Seitentypen, Seitenlayouts, Patterns und Komponenten. Danach zwei konkrete Einstiege mit schematischen Vorschauen: statische Projektvorlagen und Formularzustände. Ergänzende Regeln stehen als kurze Linkliste darunter. Der unvollständige Stand von Seitenlayouts und Bearbeiten/Erstellen wird direkt am Einstieg und konkret am Seitenende benannt. Verlinkt werden nur Einträge aus dem veröffentlichten Seitenbaum.

Umsetzung ausschliesslich in der Systemhomepage-Route und `src/docs/shadcn-home.tsx` / `src/docs/shadcn-home.css`. Andere Systeme behalten die bisherige generische Ansicht. Bestehende Änderungen und Forschungsberichte wurden bewahrt; keine CMS-/Contract-/Datenbankänderungen.

Geprüft: BrowserOS neo, Desktop 1440 × 1000 sowie mobil 390 × 844. Initialansicht, Beispielbereich und unterer Regelbereich visuell angesehen: einspaltige mobile Aufgaben, passende Textumbrüche, keine sichtbar abgeschnittenen Inhalte. Vier Aufgabenlinks im veröffentlichten Browserbaum geprüft; vorhandene Zielinhalte von Layoutübersicht, Patternübersicht und Projektvorlagen gelesen. `npm run typecheck` nach der letzten Änderung erfolgreich. Keine allgemeine Funktions- oder Barrierefreiheitsfreigabe.

URL: http://127.0.0.1:3010/systems/shadcn
