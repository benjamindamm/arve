# Icons: Quellen und Prüfhilfe

Gezielt für Quellenauswertung, Metriken, Textalternativen und tatsächliche Nachweise nutzen. Die folgenden externen Quellen wurden am 23.11.2026 gelesen. Sie wählen keine Bibliothek und setzen keine neue lokale Regel in Kraft.

## Bedeutung vor technischem Attribut

Gelesen: [WAI – An alt Decision Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/). Die Entscheidungshilfe unterscheidet Funktion, beitragende Information, redundanten Inhalt und Dekoration im jeweiligen Kontext. Sie behandelt insbesondere das `alt`-Attribut von `img` und deckt ausdrücklich nicht alle Fälle ab.

Für den Skill folgt daraus: zuerst die Rolle im Produkt erklären, danach den passenden Plattformmechanismus auswählen. Das Schema nicht als pauschale `alt`-Anweisung auf Inline-SVG oder native Symbole übertragen. Bei einer Iconaktion ist der Zweck des Bedienelements entscheidend; bei informativem Material die gleichwertige Aussage. Redundante Wiederholung und notwendige zusätzliche Bedeutung unterscheiden.

Ein Name im Markup ist noch kein beobachteter zugänglicher Name. Ein zugänglicher Name belegt seinerseits keine visuelle Verständlichkeit. Wenn konkrete technische oder normative Detailregeln benötigt werden, die passende Primärquelle zur tatsächlichen Implementierung und ihrem Stand lesen. Tooltip, Benennung und sichtbare Beschriftung nicht gleichsetzen. Kontrast- und Zielgrössenwerte nur mit gewählter Quelle, Scope und Ausnahmen anwenden; keine pauschale Zahl für jedes dekorative Zeichen.

## Zeichenfläche, Grösse und Strich

Als **Bibliotheksbeispiel**, nicht als Voreinstellung gelesen: [Lucide React – Sizing](https://lucide.dev/guide/react/basics/sizing) und [Stroke width](https://lucide.dev/guide/react/basics/stroke-width). Die Dokumentation nennt einen Grössendefault von 24 × 24 und einen Strichdefault von 2. Sie unterscheidet skalierende Striche und die Option einer konstanten Strichdarstellung. Projektversion und tatsächliche Konfiguration können davon abweichen.

Deshalb auseinanderhalten:

- Koordinatensystem/Zeichenfläche und darin gezeichneter Umriss.
- Ausgegebene Breite/Höhe samt Einheit und tatsächlicher sichtbarer Form.
- Strichwert in der Quelldarstellung gegenüber gerendertem Strich nach Skalierung.
- Geometrische Zentrierung gegenüber optischer Ausrichtung zu Schrift oder Nachbarzeichen.
- Sichtbares Icon gegenüber tatsächlich aktiver Fläche, Fokus und Nachbarzielen.

Ein Zahlenwert allein beantwortet nicht alle fünf Fragen. Bei anderer Bibliothek deren eigene Konstruktionsmerkmale und Ressourcen lesen. Gefüllte, gerasterte oder native Zeichen nicht nach einer fremden SVG-Strichregel beurteilen.

## Herkunft, Katalog und Übergabe

Gewählte Quelle, Version, Originalkennung und tatsächlich vorhandene Ressourcen festhalten. Lokale Auswahl und Lizenz-/Änderungshinweise zusammen nachvollziehbar machen. Keine Nutzungsrechte aus einer blossen Ähnlichkeit oder dem Vorhandensein einer Datei ableiten. Eine eigene schematische Probe braucht keine erfundene externe Herkunft.

Bei grosser Bibliothek reicht ein auflösbarer Referenzkatalog plus Auswahl- und Anwendungsregeln besser als eine Kopie aller Dateien. Designressource, ausführbare Komponente und Asset können verschiedene Kennungen besitzen; die Verbindung muss bei der konkreten Aufgabe auffindbar sein. Semantische IDs nur ergänzen, wenn sie einen tatsächlichen Bezug erleichtern. Aktuelle und abgelöste Zuordnungen unterscheiden.

## Aussagekraft von Prüfungen

| Nachweis | Was er begrenzt zeigt | Was er nicht bestätigt |
| --- | --- | --- |
| Geladener Export/Originalasset | Quelle, vorhandenes Zeichen und definierte Parameter | Systemweite Freigabe oder tatsächliches Rendering |
| Probe in Ausgabegrösse | Darstellung in dieser Umgebung und Kombination | Universelle Erkennbarkeit oder Begriffsverständnis |
| Markierte Box/aktive Fläche | Beabsichtigte oder gemessene Geometrie | Tatsächliche Aktivierbarkeit der gesamten Fläche |
| Zugänglicher Name und Zustand geprüft | Bezeichnung/Zustand in der geprüften Umgebung | Verständlichkeit für sehende Nutzer oder jedes Hilfsmittel |
| Reale Aktivierung und Tastaturprüfung | Funktion/Fokus im tatsächlich geprüften Umfang | Vollständige Komponentenkonformität |
| Redaktionelle Auswahl nach Kapitel | Ob die Anleitung die benötigten Entscheidungen trägt | Beobachtete Nutzungsqualität |

Bei Gestaltungsproben die Bedeutung im Kontext ansehen, nicht nur Pixel zählen. Relevante Grössen, Ausrichtung, lange Labels, Hintergrund und Zustände gezielt prüfen. Screenshots dienen der sichtbaren Prüfung; Ressourcenausfall, Name und reale Bedienung benötigen andere Beobachtungen. Sprach-, Richtungs- und Plattformprüfungen auf den tatsächlich vereinbarten Umfang begrenzen.

## Verständliche Darstellung

Auswahl, Motiv, Bedeutung und zugehöriger Wert direkt verbinden. Eine Regel pro Vergleich sichtbar machen; ergänzende Bilder zeigen danach den Zusammenhang. Bei kleinen Icons kann ein Detailausschnitt helfen, die Originalgrösse muss erkennbar bleiben. Relevante Alternativen statt beliebiger Symbolmengen zeigen.

Auf Mobil prüfen, ob Zeichen, Beschriftung und Erläuterung ohne langes Hin- und Herscrollen zusammen verständlich bleiben. Werte nicht nach einer beschrifteten Galerie nochmals vollständig aufzählen. Herkunft und Prüfgrenzen auffindbar halten, ohne jede Probe mit identischen Vorbehalten zu verlängern. Ein Beispiel ohne alle Varianten ist zulässig, wenn die fachliche Entscheidung damit erklärt wird.
