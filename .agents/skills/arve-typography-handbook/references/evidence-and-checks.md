# Typografie: Quellen und Prüfungen einordnen

Gezielt lesen, wenn eine Anforderung, Beispielskala oder ein behaupteter Test eingeordnet werden muss. Stand der hier genannten Online-Sichtung: 23.11.2026. Aktuelle Bibliotheksdokumentation und eingefrorene lokale Exporte sind unterschiedliche Quellenstände. Vor einer späteren Nutzung veränderlicher Angaben den gewählten Stand prüfen.

## Beispiel, lokale Entscheidung und externe Anforderung

- Ein publiziertes Bibliotheksbeispiel belegt sein eigenes Rezept, keine universelle Skala. Eine lokale Designentscheidung kann es übernehmen, abwandeln oder eine andere Grundlage wählen; Geltung und Herkunft festhalten.
- Eine Empfehlung wie eine bevorzugte Lesetextbreite oder Basisschriftgrösse ist nicht allein deshalb normativ, weil sie verbreitet ist. Ohne tatsächliche Festlegung keine pauschale Mindestgrösse oder Pflicht-Zeichenzahl einführen.
- Ein CSS-Wert, vorhandene Schriftdatei, Rechnergebnis und beobachtetes Verhalten sind unterschiedliche Belege. Benenne, was gelesen, berechnet oder tatsächlich ausprobiert wurde.

## Web: Textvergrösserung

Gelesen: [W3C Understanding SC 1.4.4](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html).

Wenn diese Anforderung für das Zielsystem gewählt ist, ihren Anwendungsbereich und ihre Ausnahmen festhalten: Text kann bis 200 % vergrössert werden, ohne Inhalt oder Funktion zu verlieren. Skalierungsmechanismen und mögliche Zwischenstufen berücksichtigen. Eine lokale CSS-Demo mit verdoppelter Schriftgrösse ist dafür kein vollständiger Produktnachweis.

Als Prüfnotiz Zielseite/Version, Browser, Mechanismus, Ausgangseinstellung, Vergrösserung und beobachtete Inhalte/Aktionen dokumentieren. Erwartetes Verhalten und tatsächliches Ergebnis getrennt führen. Native Textpräferenzen benötigen eine eigene Plattformbetrachtung.

## Web: Reflow

Gelesen: [W3C Understanding SC 1.4.10](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html).

Bei gewählter Anforderung gilt für vertikal scrollende Inhalte eine Breite entsprechend 320 CSS-Pixeln, bei horizontal scrollenden Inhalten eine Höhe entsprechend 256 CSS-Pixeln; die Quelle nennt Ausnahmen für Inhalte, deren Verwendung oder Bedeutung zweidimensionale Anordnung benötigt. Keine pauschale Ausnahme für jeden Inhalt einer Datentabelle ableiten.

Viewport, Zoom und Scrollrichtungen festhalten. Weniger Platz und grössere Schrift können das Layout verändern; prüfen, ob Informationen und Funktionen erreichbar bleiben. Ein schmaler Screenshot allein bestätigt weder Reflow noch alle Zoomstufen. Die Typografieseite erklärt Textfolgen, das Layout dokumentiert die Anordnung.

## Web: anpassbare Textabstände

Gelesen: [W3C Understanding SC 1.4.12](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html).

Die Quelle behandelt unterstützende Auszeichnungssprachen sowie sprach-/schriftabhängige Ausnahmen. Bei gewählter Anforderung dürfen gleichzeitig gesetzte Anpassungen keinen Inhalts-/Funktionsverlust verursachen: Zeilenhöhe mindestens 1,5 × Schriftgrösse, Abstand nach Absätzen mindestens 2 ×, Zeichenabstand mindestens 0,12 ×, Wortabstand mindestens 0,16 ×. Dies sind Anpassungsbedingungen, keine vorgeschriebene normale Darstellung.

Prüftext, tatsächlich veränderte Eigenschaften und erwartetes Ergebnis dokumentieren. Abgeschnittenen Text und unerreichbare Aktionen konkret prüfen; wo Informationen gekürzt werden, den erreichbaren vollständigen Inhalt berücksichtigen. Ein Schalter für Zeilenhöhe allein deckt die gemeinsame Änderung nicht ab.

## Schriften und Zeichen prüfen

Nur für benötigte Ressourcen vertiefen: Welche Familie, Version und Schnitte/Achsen sind tatsächlich verfügbar? Ist die verwendete Datei an dieser Stelle geladen, und welche Schrift liefert die benötigten Zeichen? Wie unterscheiden sich Ersatzschrift und Primärschrift bei realem Inhalt?

Ein Schriftname im CSS ist eine Auswahlabsicht. Eine geladene Fontressource oder vorhandene Datei genügt nicht als Beleg für jede Textstelle und jedes Zeichen. Umgebungsabhängige Beobachtungen entsprechend begrenzen. Bei fehlendem Zugang bleibt eine Prüfung offen; weder Screenshot noch ungeprüfte Familienangabe als Nachweis vollständiger Sprachunterstützung ausgeben.

Für bereitgestellte Dateien die Quelle und dokumentierten Nutzungsbedingungen referenzieren, ohne daraus eine eigene rechtliche Freigabe abzuleiten. Bei Systemschriften ist keine erfundene Download-/Selfhosting-Anleitung nötig.

## Native Plattformen und Lokalisierung

Webregeln nicht ungeprüft in iOS-/Android-Rezepte übertragen. Gemeinsame Textrollen lassen sich plattformspezifischen Stilen zuordnen; Grössen, Einheiten, Skalierung und semantische Eigenschaften benötigen eigene Quellen und Prüfungen. Bei tatsächlichem nativen Auftrag die passende aktuelle Originaldokumentation und lokalen Ressourcen hinzunehmen.

Sprachen und Schriftsysteme unterscheiden. Für eine geplante Sprache reichen Schriftfamilienname und lateinischer Beispieltext nicht als Abdeckungsnachweis. Zeichen, Schreibrichtung, Umbruch, Zahlen und erforderliche Schnitte anhand des gewählten Umfangs betrachten. Regionale Formatentscheidungen gehören zum Content Design.

## Aktuelle shadcn-Referenz

Am 23.11.2026 führte der Aufruf der bisherigen Typography-Dokumentation zur [Typeset-Dokumentation](https://ui.shadcn.com/docs/typeset). Gelesen wurden deren Beschreibung und Abschnitte zu Prinzipien, Presets, Anpassung und Grenzen. Die Quelle beschreibt kontextbezogene Prosa-Presets und getrennte Einstellungen für Textgrösse, Zeilenrhythmus und Blockabstände. Diese Presets sind kein Beleg für die Typografie aller UI-Komponenten oder für eine organisationsweit angenommene Schrift.

Ein bestehender Arve-Export kann eine ältere Bibliotheksrevision referenzieren. Ein aktueller Online-Stand aktualisiert diese Bindung nicht. Vorhandene lokale Angaben wie ein Inputrezept separat lesen und ihren Komponenten-Scope erhalten. Neue Quellen nur ausdrücklich als weiteren Stand hinzunehmen; keine stillschweigende Migration von Contracts oder Fontdateien.
