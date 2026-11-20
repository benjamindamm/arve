# Laufzeitwiederherstellung während der Seitenschleife

20. November 2026. Der Lauf bleibt aktiv. Die letzten zwei Veröffentlichungsprozesse für Button und Input reagierten bereits vor Payload-Initialisierung nicht mehr und wurden zusammen mit der eigenen Entwicklungsinstanz beendet. Die neue Instanz wird gestartet. Datenbank-/MCP-Rückleseprüfung muss vor erneuter Veröffentlichung klären, ob ein Stand übernommen wurde; unveröffentlichte Quelländerungen gelten nicht als abgeschlossen.

`komponenten-auswahl` ist veröffentlicht und über MCP abgeglichen. Desktopprüfung vollständig, schmale Prüfung und vollständiger Linkzielnachweis wegen hostweiter Zeitüberschreitungen offen. Nicht als fertig zählen.

Button und Input sind als Quelländerungen reviewbar. Registrierung ist vorbereitet; Livezustand und Browserprüfung bleiben offen. Andere Anwendungsprozesse und Benutzerdaten wurden nicht beendet oder zurückgesetzt. Nur die eigenen Projekt-PIDs aus der Prozessliste wurden beendet. Der PostgreSQL-Diagnoseaufruf ist lesend.

Wiederherstellung abgeschlossen: alte Vorschauinstanz nach festhängender Beendigung gezielt beendet, neuer Server gestartet. PostgreSQL-Diagnose ohne offene Transaktionen. Rendererregister auf bedarfsgesteuerte Imports umgestellt, statt alle Renderer statisch zu laden. Button und Input danach seriell veröffentlicht und vollständig zwischen Release/CMS/MCP abgeglichen. Typecheck erfolgreich. Die unterbrochenen vorigen Prozesse hatten keinen dieser neuen Stände übernommen; die regulären Versionsguards bestanden beim Wiederholungslauf.

Nachprüfung abgeschlossen: Button, Input und Komponentenauswahl sind nach Wiederherstellung veröffentlicht, mit CMS/MCP abgeglichen und durch ihre jeweiligen Seitenagenten bei 1440×1000 und 390×844 geprüft. Die oben als offen dokumentierten Wiederherstellungspunkte sind damit erledigt; Einzelberichte stehen unter `pages/`.
