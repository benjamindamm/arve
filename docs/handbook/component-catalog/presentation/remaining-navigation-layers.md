# Navigation und Ebenen · Vergleichsabbildungen

Bibliothek `shadcn`, Export `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`. Quelle ist der importierte Base-UI-Snapshot (Quellcommit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3`), keine Radixannahme. Bibliotheksstatus bleibt draft. Komponentenstatus wird nicht geändert.

Alle Bilder sind nichtbedienbare Illustrationen. Beschreibungen stammen aus demselben reinen Datenhelper wie die gerenderten Vergleiche. Beispieltexte und Kontextflächen sind redaktionell. Die Quellen wurden als UTF-8 gelesen; Hashes kennzeichnen Dateiintegrität, keine Laufzeitfreigabe.

## breadcrumb

Komponentenstatus im Snapshot: `complete`. SCXML-IDs: `active`, `removed`.

- Hierarchie und Auslassung: Keine eigene Variantenachse im CEM. Zwei belegte Kompositionen aus stories.json; die Auslassung ist dekorativ und öffnet kein Menü. Gezeigt: hierarchy, ellipsis.
- Linkrückmeldung im selben Pfad: SCXML führt active/removed. Hover und Fokus sind CSS-Merkmale eines Vorfahrenlinks; keine zusätzlichen Ablaufzustände. Gezeigt: base, hover, focus.

Paketrelative Quellen (SHA-256):

- `library/components/breadcrumb/component.json` · `2995b2d9c001d714a177717a53541f5f7713c9ff22627ee791d5bfa6ba6526a6`
- `library/components/breadcrumb/interface.json` · `99aee41b4b04d52485e41f5c33fd92ec81b241f68ca4b520f00634708f20a518`
- `library/components/breadcrumb/layout.css` · `04f859d59cdf5143d2676730312022402f812be95d65abdad26f100f6ff02dcc`
- `library/components/breadcrumb/behavior.scxml` · `6c87eb84f4f65a186644b6c59905dfc093b9a1484ec2ca11463528a9430fd51d`
- `library/components/breadcrumb/accessibility.html` · `2c29497ac02b6869b0cabebd56cb7b52ec8438a12f725b8eccef22ad0e27f268`
- `library/components/breadcrumb/stories.json` · `cbdf7b137b1a3d68268dfe62f2ea2bc810393991f27433b2bb9b095341effaae`
- `library/components/breadcrumb/ux.json` · `28d65517f9a759f3561c1a07b5c689adca25d7dfb2e5f3d96e9e6de2e69a3fbf`

## navigation-menu

Komponentenstatus im Snapshot: `complete`. SCXML-IDs: `active`.

- Navigation mit Zielvorschau: Keine eigene CEM-Variantenachse. Kanonische Website-Navigation mit echter Linkhierarchie; die gezeigten Ziele sind redaktionelle Beispieldaten. Gezeigt: canonical.
- Geschlossen, offen und Rückmeldung: SCXML führt active mit offenem Element als Wert. Geschlossen/offen sind Wertprojektionen aus den Stories; Fokus und disabled sind zusätzliche CSS-/HTML-Merkmale. Gezeigt: closed, open, focus, disabled.

Paketrelative Quellen (SHA-256):

- `library/components/navigation-menu/component.json` · `688d54e10cc162e41af7587b586d6ac98a6b67d6fb21e6099b00407b36540b18`
- `library/components/navigation-menu/interface.json` · `5a8e904df8dafe64b010e854b51d0ae40d6c6064e34de8b60399113636d44b5b`
- `library/components/navigation-menu/layout.css` · `92e7cfc5ad4c6e1c54ec82522ff59e7216c50fdc0b166ac5377bc24c50e2c6fb`
- `library/components/navigation-menu/behavior.scxml` · `4cd942b7649915e37517441bf62d938e794ba0e8eaf8c9b6b400c87233e82a6f`
- `library/components/navigation-menu/accessibility.html` · `166e9bffa186d9e7e507a2f7bd1bfb1bd27ba03e54ca8175c5f41c5934728989`
- `library/components/navigation-menu/stories.json` · `3065d70b6c1a4690eebdba5912b57521bb257a8fb649411bb5b616d66c7553d9`
- `library/components/navigation-menu/ux.json` · `5a4cb7989ece9f3052e843d61165235f265e80c7669ce827380df1a98e4a0f0c`

## menubar

Komponentenstatus im Snapshot: `complete`. SCXML-IDs: `active`, `closed`, `opening`, `expanded`, `closing`.

- Befehle und Einstellungen: Item variant=default|destructive ist eine CEM-Achse. Checkbox/Radio und inset sind eigene Teile bzw. Eigenschaften. Shortcuttext registriert keine Tastenkombination. Gezeigt: default, destructive, settings.
- Befehlsleiste im Kontext: SCXML unterscheidet closed, opening, expanded und closing. Hier sind die stabilen Ansichten geschlossen/expanded dargestellt; Highlight und deaktivierte Einträge kommen aus CSS/HTML. Keine Interaktionssimulation. Gezeigt: closed, expanded, highlight, submenu.

Paketrelative Quellen (SHA-256):

- `library/components/menubar/component.json` · `c3fd7e853c3ffd0b453f25e8ec7428e73fd7c157e941bce4e9d6fa1fb4a33330`
- `library/components/menubar/interface.json` · `b94a886b27d588e52c7190102cb32a27737d440389a1d099babd726d41cfb364`
- `library/components/menubar/layout.css` · `34be87ef7b56806f5d29cee0241110bd634016673b6f3357aa9ed66dee836b6e`
- `library/components/menubar/behavior.scxml` · `6ff3cdfd8b80a722450c90ac8e01edb01be0b67efceb21df630c47b45c471fae`
- `library/components/menubar/accessibility.html` · `863e92c96555f5b2d53053988dab255a9a552d72d6b88bcd53a72ffd3f430aee`
- `library/components/menubar/stories.json` · `a4d4101efa22e786384b02ab4f5b1aa25d9bdb6f4882df375dbfd74545dbe159`
- `library/components/menubar/ux.json` · `45071b7c8bff2e132e930f09cbd0613cc0888f5f8b4208e3ed444a2204162102`

## dropdown-menu

Komponentenstatus im Snapshot: `complete`. SCXML-IDs: `active`, `closed`, `opening`, `expanded`, `closing`.

- Befehle und Einstellungen: Item variant=default|destructive ist eine CEM-Achse. Checkbox/Radio und inset sind eigene Teile bzw. Eigenschaften. Shortcuttext registriert keine Tastenkombination. Gezeigt: default, destructive, settings.
- Aktionsmenü im Kontext: SCXML unterscheidet closed, opening, expanded und closing. Hier sind die stabilen Ansichten geschlossen/expanded dargestellt; Highlight und deaktivierte Einträge kommen aus CSS/HTML. Keine Interaktionssimulation. Gezeigt: closed, expanded, highlight, submenu.

Paketrelative Quellen (SHA-256):

- `library/components/dropdown-menu/component.json` · `3f365286fecffb7e6ae20ca6809b3e25c8a1e4ae19398c460fda65f2cb470c57`
- `library/components/dropdown-menu/interface.json` · `ff2f702d7e9073e92df142467b2085beb261f3b227bfb7791bc43500181c9498`
- `library/components/dropdown-menu/layout.css` · `dc45af567d959c5a410810cd40d4796eb5d3b9d8e26cc0ee2f7358d6caec2509`
- `library/components/dropdown-menu/behavior.scxml` · `112f6ad48fe4dfc8e331738d14b92c5567b0b7f89375677e98119215e17868dc`
- `library/components/dropdown-menu/accessibility.html` · `c8e2a352667a5e1583e379c6ecef415d7595f05d95a9ccaf0734cc472bdc4476`
- `library/components/dropdown-menu/stories.json` · `f8d5142b350f9e375362d69e3d254823d2b84aca7bf5ad28397649389dc16a2b`
- `library/components/dropdown-menu/ux.json` · `74027d05835a48e6ab4bed98dcc2e15ef88acf99bad33c5beb61e6531ae967fc`

## context-menu

Komponentenstatus im Snapshot: `complete`. SCXML-IDs: `active`, `closed`, `opening`, `expanded`, `closing`.

- Befehle und Einstellungen: Item variant=default|destructive ist eine CEM-Achse. Checkbox/Radio und inset sind eigene Teile bzw. Eigenschaften. Shortcuttext registriert keine Tastenkombination. Die sichtbare Aktionenalternative ist eine bewusst ergänzte DropdownMenu-Komposition; ein normaler Linksklick auf die Kontextfläche öffnet kein ContextMenu. Gezeigt: default, destructive, settings.
- Kontextmenü im Kontext: SCXML unterscheidet closed, opening, expanded und closing. Hier sind die stabilen Ansichten geschlossen/expanded dargestellt; Highlight und deaktivierte Einträge kommen aus CSS/HTML. Keine Interaktionssimulation. Gezeigt: closed, expanded, highlight, submenu.

Paketrelative Quellen (SHA-256):

- `library/components/context-menu/component.json` · `13493ed0e6a01229ae9a77feeda4d7fb6757134af97a4f4afca2d5bf579548c9`
- `library/components/context-menu/interface.json` · `3ed04a9bfa1bd5963f312ded868a0cf62bceef50795162062c251e7855d61ec8`
- `library/components/context-menu/layout.css` · `9e1b17f568ea9d0f02915ec3457fb7dc57c21cb24d627f61206e858c14e00e12`
- `library/components/context-menu/behavior.scxml` · `72cc03afee39d0a236777538e8d7f5f44253bc8c5b6cdcbd03c6ff3c7ed571d4`
- `library/components/context-menu/accessibility.html` · `1dc34937123fb472f4a207c780c7bc9d5fb70c49e5974b62b51176fdc0d58ea6`
- `library/components/context-menu/stories.json` · `3cb6b6c44cce9f2dc38216b850415e8467a679023ed263f9013a0d51fb359ee1`
- `library/components/context-menu/ux.json` · `7006aba5494a237ebb3776577e3df619f36a73874d809a578c4cb999e541ce85`

## command

Komponentenstatus im Snapshot: `complete`. SCXML-IDs: `active`.

- Inline und Dialogpalette: Keine eigene CEM-Variantenachse. CommandDialog ist eine belegte Dialogkomposition; Suche, Highlight und tatsächliche Ausführung sind getrennt. Gezeigt: inline, dialog.
- Suchwert und Highlight: SCXML führt active mit query/value. Diese Ansichten sind Wertbeispiele aus den Stories und CSS-Highlight, keine zusätzlichen Ablaufzustände. Gezeigt: initial, filtered, empty, focus.

Paketrelative Quellen (SHA-256):

- `library/components/command/component.json` · `e7af65d735ec201f686d6c027fc9993b28d0c6e7cc9fe15d510b34120ba7013d`
- `library/components/command/interface.json` · `4f40914663efae2568065ed8cb3ede1a56853c98524c17950fc51cea6359300a`
- `library/components/command/layout.css` · `7f35050d5978c3379e4787e8a15e256209800667123c6c99c926dd5a0f648e28`
- `library/components/command/behavior.scxml` · `ed43c459e6f32c9036b5eba2932df549724be80e5bd388d54580d4501bf60c3d`
- `library/components/command/accessibility.html` · `798a2035c8ff08a23038ca669ae82b9e9be32573a0c5fda400ad3f5cb5d2cf5c`
- `library/components/command/stories.json` · `8dd8e4406e8377dbc9e5355850fbd0e49224939bc845695b86bb4fba16dac801`
- `library/components/command/ux.json` · `2c818fa67cd712c82cdffa48dd4026f6e234282f9c2436a7ab5e786d252a85f6`

## sidebar

Komponentenstatus im Snapshot: `complete`. SCXML-IDs: `active`.

- Drei Rahmen für dieselbe Navigation: CEM: variant=sidebar|floating|inset. Verkürzte Bühnen zeigen die Rahmenbeziehung; reale Desktopbreite ist 16 rem, Iconbreite 3 rem, mobil 18 rem. Gezeigt: sidebar, floating, inset.
- Zusammenklappen ist eine eigene Achse: CEM: collapsible=offcanvas|icon|none. Statische Ausschnitte; offcanvas-CSS allein garantiert keine Fokusentfernung. Gezeigt: offcanvas, icon, none.
- Menüaktionen und Unterziele: SidebarMenuButton hat eigene variant=default|outline und size=sm|default|lg. Unterziele haben size=sm|md. Diese Teilachsen ändern weder die Sidebarbreite noch den aktiven Seitenwert. Gezeigt: menu-default, menu-outline, menu-sm, menu-lg, sub-sm, sub-md.
- Desktop und mobile Öffnung: SCXML führt active; desktop open und openMobile sind voneinander unabhängige Werte. Mobil gilt nach Clienterkennung innerWidth < 768. Die Werte werden nicht automatisch synchronisiert. Gezeigt: expanded, collapsed, mobile-closed, mobile-open.

Paketrelative Quellen (SHA-256):

- `library/components/sidebar/component.json` · `d9f950bac4d005ff3c51a5b3f2f8e09ddb380e8b7b8aeb427f390c955dd91568`
- `library/components/sidebar/interface.json` · `ef5a6b0bc4431bd4471468ec85385fb8ee2505fbc3cfdd2788e2bb67acac7957`
- `library/components/sidebar/layout.css` · `65601155e10833a749b01e980b4ad71d5b62b5fcefed2a85691da0c10a03c2d1`
- `library/components/sidebar/behavior.scxml` · `2ea4cc2e658f0fb0a7bd07719c76705f56c338d15ea9a63d1457ef6a77d4584d`
- `library/components/sidebar/accessibility.html` · `9adb9ec03ad202e7b0efc6c2c7f2d501ec27918a531197548569ce2cf4df445b`
- `library/components/sidebar/stories.json` · `d1cf55e59ab994eccd413e0d5aab0830563bd01aba48a68cba3b2eaa7a1c627e`
- `library/components/sidebar/ux.json` · `9f15a010311e5aa8554875624f4625f24541c4c618127eda56eeb3ba6baacc36`

## tabs

Komponentenstatus im Snapshot: `complete`. SCXML-IDs: `active`.

- Fläche oder Linie: TabsList variant=default|line ist eine belegte CEM-Layoutachse. Triggerhöhe 25 px; identische Beispielinhalte in beiden Ansichten. Gezeigt: default, line.
- Auswahl und Fokus trennen: Die SCXML-Auswahl ist value; manuelle Aktivierung ist der Standard (activateOnFocus=false). Fokus kann auf einem anderen Tab liegen als die aktive Inhaltsfläche. Gezeigt: summary, details, focus, disabled.

Paketrelative Quellen (SHA-256):

- `library/components/tabs/component.json` · `8c2ba18eb203320ce994710ef7b363cd1fa11dd78e84b9c1dc652908cbac66c1`
- `library/components/tabs/interface.json` · `4c72008b3027f2711f80dcb5540985e3ec44ed4042c437b51fc216e5d2c0066f`
- `library/components/tabs/layout.css` · `2a086e3f17650910a3beb3a64f747ab35ca18049a1e84bbbcc9f69976e26cff1`
- `library/components/tabs/behavior.scxml` · `e42281a4d971ccb2bad0d547b8901e5356d0bf05d937bee3838a12e0b44020f3`
- `library/components/tabs/accessibility.html` · `2583d0744551aaa6aaccd866eda0ef3111acdd8bc6b37e711ba0826304b777ed`
- `library/components/tabs/stories.json` · `8fa62f700af1e2e8a327fd70cf213df327b8a772f7eb7b804124a3542cb9b916`
- `library/components/tabs/ux.json` · `3435b276a5f6aba31329c0b2957bc29c76d27c591d8b4c4b5c1143b972a7bc2a`

## pagination

Komponentenstatus im Snapshot: `complete`. SCXML-IDs: `active`, `removed`.

- Aktuelle Seite im Seitenpfad: Keine eigene Variantenachse. isActive setzt die Outlineansicht und aria-current; Seitenanzahl und Zielberechnung gehören dem Aufrufer. Nummern sind Beispieldaten. Gezeigt: middle.
- Grenzen durch Komposition: SCXML führt active/removed und keine berechnete Seitenmaschine. Die Stories lassen die jeweils nicht verfügbare Grenzaktion weg; keine zusätzliche Deaktivierungsoption. Gezeigt: first, middle, last.

Paketrelative Quellen (SHA-256):

- `library/components/pagination/component.json` · `32908785c5807c2e36ff5ec78edfc3e175f7ba7d73ff87bd71745e8ac2465d91`
- `library/components/pagination/interface.json` · `19ecf70a8458f14ae624fe7885c80b6c64f41631884cbf6943c40949dad4f7d1`
- `library/components/pagination/layout.css` · `d13ba0e4ddd80369e4fff735f08c484e126a0afb6c6ae2c65cabe553bf5da125`
- `library/components/pagination/behavior.scxml` · `048c609e7057822c044fb5f25179260ac3f6f5ba59dbaaa83eb8283051c6ef4d`
- `library/components/pagination/accessibility.html` · `02e17364bf5f6ee74a3985084a1af878ca56a6b171719241d1a4acb923b9e675`
- `library/components/pagination/stories.json` · `6d5f83cd83ee6c791126a1677b85cc0a4ecdec39694aadcfbeba50aa0e6def84`
- `library/components/pagination/ux.json` · `1784f6fbcc014d1fe8ba5be9d0ea1f02c9f7667e8cc7855e383c00fc05f04906`

## accordion

Komponentenstatus im Snapshot: `complete`. SCXML-IDs: `control`, `ready`.

- Eine oder mehrere offene Sektionen: multiple=false|true ist eine Verhaltensoption, keine visuelle Variante. Die Beispiele projizieren zulässige value-Arrays mit denselben Sektionen. Gezeigt: single, multiple.
- Wert und Rückmeldung: SCXML führt control/ready mit value-Array. Offen/geschlossen sind Wertprojektionen; Hover, Fokus und disabled sind zusätzliche CSS-/HTML-Merkmale. Gezeigt: collapsed, expanded, focus, disabled.

Paketrelative Quellen (SHA-256):

- `library/components/accordion/component.json` · `c6d85d60dd2c2e4ca88d95e4dc8732b65095cb1be537da6adf67c4c61d3908f7`
- `library/components/accordion/interface.json` · `7305ce94ddff764da078eb1095651d03156ed819f97964a98a36268629a5e1e9`
- `library/components/accordion/layout.css` · `714f46c187f2b5c7f9cc7c6bdda381f79e369df522cee26936ccc709b4198a6e`
- `library/components/accordion/behavior.scxml` · `5bcd500d4d8b0ee3809950ac4f270602720827eeb89f03ed259e4a867ce79ba5`
- `library/components/accordion/accessibility.html` · `a10cead7b05a31e4e1a8dcaa1209ba51b23ab0ec1410939e25e7f2b92c8bcdab`
- `library/components/accordion/stories.json` · `6610f236da15f247d01d4d7c2052c28333c92d4aaf0a593901a34683b339b29c`
- `library/components/accordion/ux.json` · `30da89a2d2b03f0b200dc3ce60ed2dd7c4285115ee0be27853bcb700f9fbba10`

## collapsible

Komponentenstatus im Snapshot: `complete`. SCXML-IDs: `control`, `closed`, `expanded`.

- Eine Offenlegung: Keine eigene CEM-Variantenachse. Ein Trigger gehört zu genau einem Zusatzpanel; die Zusatzinformationen sind redaktionell. Gezeigt: canonical.
- Geschlossen und erweitert: SCXML: closed/expanded unter control. Fokus und disabled kommen aus CSS/HTML. Ein einfaches Collapsible schliesst nicht durch Escape oder Aussenklick. Gezeigt: closed, expanded, focus, disabled.

Paketrelative Quellen (SHA-256):

- `library/components/collapsible/component.json` · `63be6fd1734b7761f32dc65576eedeee95bf1e4dde5e89b0e11c2f166770c990`
- `library/components/collapsible/interface.json` · `74fe43f8a510d785a4e8d9fe44a08413f7fef3628d05da3476f08701a4f7b7db`
- `library/components/collapsible/layout.css` · `6540fa6c3cb12a758cc637e4a1d03984f6e270365921dbb791b33fe585035214`
- `library/components/collapsible/behavior.scxml` · `87dd35ba25774534c14d729370ce2e54a73e2266e0e9a5da9eead8f09aff6b87`
- `library/components/collapsible/accessibility.html` · `18d82e8626be2436be6d310ae36b74cc26d5c640fc78bfd98e55e37fa3f5fb82`
- `library/components/collapsible/stories.json` · `02c589312e44af853acb1f80b6b8877da21cea72c5f1e76f8c86eceea326539f`
- `library/components/collapsible/ux.json` · `193fadb758c86633857f375e2042d771bfc63d3d62d271a29055f77db155f26d`

## scroll-area

Komponentenstatus im Snapshot: `complete`. SCXML-IDs: `active`.

- Inhalt bestimmt die Scrollachsen: ScrollBar orientation ist eine Teiloption, keine neue Rootvariante. Statische Ausschnitte zeigen vertikalen und zweiachsigen Overflow; die Bühnenhöhe ist redaktionell auf 176 px gekürzt (Contract: 288 px). Gezeigt: vertical, both.
- Overflow und Fokus: SCXML führt active mit x/y und Overflowwerten. Diese Bilder sind Inhalts-/CSS-Projektionen; weder Dragging noch tatsächliches Scrollen wird geprüft. Gezeigt: overflow, fits, focus.

Paketrelative Quellen (SHA-256):

- `library/components/scroll-area/component.json` · `8ac55af192adebe52160833ca2819518b7fd8047c283d87726e262524aedc6b1`
- `library/components/scroll-area/interface.json` · `d65733b8b3c7aa642c92a93e1c8ce4c11ba3534d715ce5b369ec075608b24385`
- `library/components/scroll-area/layout.css` · `a32b0ecdf8b7d7e6eb0480b45644bd6af6aa50fe51763c2b5b30c11e1ae0a810`
- `library/components/scroll-area/behavior.scxml` · `7cd1769945098b3271f8298e41d958ec3e745ac260eb619719a3946678339a59`
- `library/components/scroll-area/accessibility.html` · `88c149b0d1b0d19b95fe780a29bee2d33c4d81260a87efbbc247dcf761522d06`
- `library/components/scroll-area/stories.json` · `2fe2c6158e3aa39f56522cb913e02723fb28a9cf8c552be48e297116f717d651`
- `library/components/scroll-area/ux.json` · `c5deb1f90318a5fd5ccac36712f4aba9447b2e2eae6286db6934602533b5f54c`

## dialog

Komponentenstatus im Snapshot: `complete`. SCXML-IDs: `control`, `closed`, `opening`, `expanded`, `closing`.

- Zentrierte Aufgabe: Keine eigene Variantenachse. showCloseButton ist eine Kompositionsoption. Der Contract sieht maximal 448 px, 16 px Padding und 14 px Radius vor; die Bühne begrenzt nur die verfügbare Breite. Gezeigt: canonical.
- Stabile Ansichten des Lebenszyklus: SCXML: closed → opening → expanded → closing. Hier sind nur die stabilen Endansichten abgebildet; Bewegung, Fokusführung und Callback-Abbruch bleiben ungeprüft. Schliessen bestätigt keine Anwendungsaktion. Gezeigt: closed, expanded.

Paketrelative Quellen (SHA-256):

- `library/components/dialog/component.json` · `ecd431b4f2bc87937df2fa6983cebce8c977de96427617c670e702a059d3274d`
- `library/components/dialog/interface.json` · `28f93606144ae0737aee8afe18cf6b9f1bb6f24b24dcdfca0e153c86d993bc19`
- `library/components/dialog/layout.css` · `26e16ad2c2752e67403aa7f822c3f739a41dd716fe03491ffa3cafeebf1c2692`
- `library/components/dialog/behavior.scxml` · `674f5054fce6baee987ff95b0dc4221947ec6d633f89a5ec3bb16bb8f39ec543`
- `library/components/dialog/accessibility.html` · `7c3c4b6559aabdff7e0ef14d62cc336355f44b691d3968d8c4f8e3a07c43800f`
- `library/components/dialog/stories.json` · `cc0bba2fa6d47c406791ac7d8548fa3600f8bd487fce669d3bb972dadaf87265`
- `library/components/dialog/ux.json` · `77203c1aa81359f36bd754fd4e322ed886a52bf00e9e96c68594139f88dbe45e`

## alert-dialog

Komponentenstatus im Snapshot: `complete`. SCXML-IDs: `control`, `closed`, `opening`, `expanded`, `closing`.

- Zwei Dialoggrössen: Content size=default|sm; sm hat maximal 320 px. Beide Ansichten werden durch die Vergleichsbühne begrenzt. Beispielhandlung und Mediakachel sind redaktionell. Gezeigt: default, sm.
- Stabile Ansichten des Lebenszyklus: SCXML: closed → opening → expanded → closing. Hier sind nur die stabilen Endansichten abgebildet; Bewegung, Fokusführung und Callback-Abbruch bleiben ungeprüft. Action ist ein gewöhnlicher Button und schliesst nicht automatisch; Cancel ist die Close-Komposition. Aussenklick wird ignoriert. Gezeigt: closed, expanded.

Paketrelative Quellen (SHA-256):

- `library/components/alert-dialog/component.json` · `346e1f740ea44d635a2a7dadd7dd21c87c01869f52b6a6391c227c36b6f91deb`
- `library/components/alert-dialog/interface.json` · `9f55fea40e0e7300ab8e48c9938db02c8772324e7fb992e309436aa383f2b680`
- `library/components/alert-dialog/layout.css` · `402a8f7ab36a7599bf49ee88ac6430f8d4a040d9aaa22245d04f60e449b1b5a6`
- `library/components/alert-dialog/behavior.scxml` · `f60af4eab293f5487697900484741479948093cfb010551dbbdcb1a74a4acf09`
- `library/components/alert-dialog/accessibility.html` · `7c6492b125b86f8779154ea5329b7e7095767f3ec20d280e66d1f2598e0c1bb3`
- `library/components/alert-dialog/stories.json` · `ff927707b4a177bec6da085011e27584cb83275dfc131127dabf1888f40f634a`
- `library/components/alert-dialog/ux.json` · `56c26b8c898761b949c0c14fc63460a5ef2175b11178d510f87591be0150b7cc`

## drawer

Komponentenstatus im Snapshot: `complete`. SCXML-IDs: `control`, `closed`, `opening`, `expanded`, `closing`.

- Vier Wischrichtungen: swipeDirection=down|up|right|left bestimmt die zugehörige Kante. Die Bühnen zeigen kompakte Ausschnitte, keine realen Viewports. Wischhandle ist ausdrücklich zugeschaltet; Standard showSwipeHandle=false. Gezeigt: down, up, right, left.
- Stabile Ansichten des Lebenszyklus: SCXML: closed → opening → expanded → closing. Hier sind nur die stabilen Endansichten abgebildet; Bewegung, Fokusführung und Callback-Abbruch bleiben ungeprüft. Ein Snap-Punktwechsel ist keine Schliessung; Wischlogik ist hier nicht simuliert. Gezeigt: closed, expanded.

Paketrelative Quellen (SHA-256):

- `library/components/drawer/component.json` · `84f6c2f777b5a7401bf17ad1b11b50318a6d1b532e57aed83dc63c85a75259ed`
- `library/components/drawer/interface.json` · `eb19930d31b6801cc1ad41683b838d5be8519c834b2d4d94db29866aa650297f`
- `library/components/drawer/layout.css` · `f76e4834d86e94115bab02d61efb4e54ddba1f9a79493f5dc6d9d025cf0bfe25`
- `library/components/drawer/behavior.scxml` · `cf1b60ffa0fa2f3ae00dbf41330b15b9689c46d567255503c0631cd35261b7e1`
- `library/components/drawer/accessibility.html` · `a139cf59e372c487d883a646503ac9774c6b986312b1732b31f4d1fe9fb20ee2`
- `library/components/drawer/stories.json` · `91998b1d995ad224c905a34ea3fd5ed51b9cbe4db69a9f999ae4afdad6e53de4`
- `library/components/drawer/ux.json` · `0307545dc1614c37fa6fa58f330ca38743ed2d27c22cb4b3d510800a036b2d5a`

## sheet

Komponentenstatus im Snapshot: `complete`. SCXML-IDs: `control`, `closed`, `opening`, `expanded`, `closing`.

- Vier Seiten: Content side=top|right|bottom|left; Standard right. Sheet ist eine Dialogkomposition. Kompakte Bühnen machen die Kanten sichtbar; Seitenmaximalbreite im Contract: 384 px. Gezeigt: top, right, bottom, left.
- Stabile Ansichten des Lebenszyklus: SCXML: closed → opening → expanded → closing. Hier sind nur die stabilen Endansichten abgebildet; Bewegung, Fokusführung und Callback-Abbruch bleiben ungeprüft. Die gewählte Kante ändert weder Modalität noch Abschlussregeln. Gezeigt: closed, expanded.

Paketrelative Quellen (SHA-256):

- `library/components/sheet/component.json` · `f1651dbb9f74be13f9feb051b8bccfa9f79b673926e4f87ccc3ebc285faa1ed8`
- `library/components/sheet/interface.json` · `0b82e2de1aed04d0b335681e26a19368a445538e92e76e3f99c7371d6535b333`
- `library/components/sheet/layout.css` · `92b21de36016178b2989586612427bacfb9646ea2338409847d339515950fbc0`
- `library/components/sheet/behavior.scxml` · `5924092553962fe5b8aa717c7f963a4f5aa461a673639848f952df84a3e39013`
- `library/components/sheet/accessibility.html` · `868fd707b8109371dd150af9f6d60e070379ec02c6602dd7ec88dc96947d1a8d`
- `library/components/sheet/stories.json` · `ce655d1d5055e653e201cf16be73cc8bfe6858addceed077339fe3baea62c67f`
- `library/components/sheet/ux.json` · `023c9fcf2e88bf14a08f75808cce8e573d510a4a045e41028fab2db55daa86f4`

## popover

Komponentenstatus im Snapshot: `complete`. SCXML-IDs: `control`, `closed`, `opening`, `expanded`, `closing`.

- Vier Positionierungen: Content side ist eine Positionierungsoption, keine semantische Variante. Standard bottom/center mit 4 px Abstand. Kein exportierter PopoverClose; das Beispiel nennt nur eine caller-eigene Abschlussaktion. Seitliche Ansichten sind auf schmalen Bühnen als kompakte Geometrieausschnitte begrenzt; Kollisionsberechnung wird nicht simuliert. Gezeigt: top, right, bottom, left.
- Auslöser und sichtbare Ergänzung: SCXML: closed, opening, expanded und closing. Stabile Ansichten; keine Animation oder Interaktionsprüfung. Standard modal=false; Interaktion und Fokusführung bleiben eine Aufgabe der echten Primitive. Gezeigt: closed, expanded.

Paketrelative Quellen (SHA-256):

- `library/components/popover/component.json` · `9580c68e2e7499a8fb9bc6cea405d478ef99a6b60bb7fb6c9e3e5c2d588cfbb5`
- `library/components/popover/interface.json` · `65ed3ca8dd049666e85560d839c9c812a2000a5f319f09ccaa0129cef528529a`
- `library/components/popover/layout.css` · `dae9abd2fcb2c6c7cc71881bf95e3f25ab290f5e137cf8ba6c8798dff0bff085`
- `library/components/popover/behavior.scxml` · `bfa6019eba16765d2bf5059548fe3070c843bf95859bca5e731771df7042c809`
- `library/components/popover/accessibility.html` · `82a9900c7d8e692a0d8b12722d5124603a7dda24a451e8261e71235d857ba7fb`
- `library/components/popover/stories.json` · `9d19277fcc0a42cec56cb01eaffa55b34e45d8343125cf396ae5d3e2452cb042`
- `library/components/popover/ux.json` · `d2683d3ad7bef262d9921eec9083ee347695c5ff8ff58e05c09a3da0df848974`

## hover-card

Komponentenstatus im Snapshot: `complete`. SCXML-IDs: `control`, `closed`, `opening`, `expanded`, `closing`, `waiting`.

- Vier Positionierungen: Content side ist eine Positionierungsoption, keine semantische Variante. Standard bottom/center, 4 px sideOffset und 4 px alignOffset. Trigger ist ein navigierbarer Link; das Preview ist ein div, kein Dialog. Seitliche Ansichten sind auf schmalen Bühnen als kompakte Geometrieausschnitte begrenzt; Kollisionsberechnung wird nicht simuliert. Gezeigt: top, right, bottom, left.
- Auslöser und sichtbare Ergänzung: SCXML: closed, opening, expanded und closing sowie waiting. Stabile Ansichten; keine Animation oder Interaktionsprüfung. waiting bildet die Verzögerung ab (Quelle: 600 ms Öffnen, 300 ms Schliessen); dieses statische Bild zeigt keinen Timer. Gezeigt: closed, expanded.

Paketrelative Quellen (SHA-256):

- `library/components/hover-card/component.json` · `58ff0b4659c367293956fee536d1c762ce69a5d9956df12965041e90a477c46f`
- `library/components/hover-card/interface.json` · `f429cde745c965f3b72b24f1f9d4c6453dc7dceefcbfd3e8f9f0f4e2ca216412`
- `library/components/hover-card/layout.css` · `d6d86285c6409041ad36e8ca6fe333b054cb55cb38cf2a5233d3d816950fe298`
- `library/components/hover-card/behavior.scxml` · `76e1e5a6f576e18a87bab023d9c8097a306b183404d1bdaa62135c383b38f41f`
- `library/components/hover-card/accessibility.html` · `94f8ff143cf35c71838cddab9ebf6a1a212cc87fbcc129aa6865d3b6df1008e1`
- `library/components/hover-card/stories.json` · `2886cabe8dec8e6b1cde1d33840e5319d527b0b2647a0e7d9d5f57eb07881375`
- `library/components/hover-card/ux.json` · `e61210f75719371f65306ffb9bd8aa9dbe810ebb82a867062d1e68048d36327d`

## tooltip

Komponentenstatus im Snapshot: `complete`. SCXML-IDs: `control`, `closed`, `opening`, `expanded`, `closing`, `waiting`.

- Vier Positionierungen: Content side ist eine Positionierungsoption, keine semantische Variante. Standard top/center mit 4 px Abstand. Dunkle visuelle Zusatzhilfe; der Pfeil ist dekorativ. Erforderliche Hilfe bleibt als Text sichtbar. Seitliche Ansichten sind auf schmalen Bühnen als kompakte Geometrieausschnitte begrenzt; Kollisionsberechnung wird nicht simuliert. Gezeigt: top, right, bottom, left.
- Auslöser und sichtbare Ergänzung: SCXML: closed, opening, expanded und closing sowie waiting. Stabile Ansichten; keine Animation oder Interaktionsprüfung. waiting kann Hoververzögerung abbilden; Providerstandard delay=0. Fokus öffnet ohne Hoververzögerung. Das visuelle Popup ersetzt keinen zugänglichen Namen. Gezeigt: closed, expanded.

Paketrelative Quellen (SHA-256):

- `library/components/tooltip/component.json` · `61e723d535d897c9bc2afaa7fe8986ea90da3f54af793a1709a3e00269939165`
- `library/components/tooltip/interface.json` · `a5c402ab774930407000e4833f081b285d202e4b0897cb1855632b2884d17c5e`
- `library/components/tooltip/layout.css` · `5728691a447f441ddf4a94aeb7a7f711f363edeb9d3c0355713436c39e5bfb04`
- `library/components/tooltip/behavior.scxml` · `41151792a8136dac83842a6fa4c1d22133a91bef71a044bc0692b382079d13fd`
- `library/components/tooltip/accessibility.html` · `a996ed8547fb0045e90f65b2a1fd202a42dfbec2d268bbe15ea3a887ac4c06e7`
- `library/components/tooltip/stories.json` · `577812b42cf139d993e41174af1d9d56569918c28c67d694bbce77337eb18570`
- `library/components/tooltip/ux.json` · `ba17fea15f3cf6ef631374a33643c0fc6bf794f6af4cc6ca143b5e4b1a9e2445`

## Prüfgrenzen

API-/CSS-/SCXML-/HTML-/Stories-/UX-Lektüre ist durchgeführt. TypeScript-Prüfung `npm run typecheck` erfolgreich. Statische Figuren prüfen keine Tastatursteuerung, Screenreaderbeziehungen, Fokuswiederherstellung, Kollisionslogik, Modality, Gesten, Callback-Abbruch oder Animationen.

Gemeinsame Farbbasis und Geometrie: `library/tokens.css` SHA-256 `e181931cf68b623bfff7316135e3368edff17779e5b50950893e9470dd9f791a`.


## Ausgeführte Abnahme am 21. November 2026

- Reiner Datenhelper: 19 Komponenten, 40 Gruppen, 116 Vergleichsansichten. Fremde Komponente `button` liefert ein leeres Array. Beide Abschnitte werden je Komponente geliefert; Sidebar ergänzt zwei weitere Gruppen für Kollapsmodus und Teilgrössen.
- `npm run typecheck`: erfolgreich. Kein eigener Build ausgeführt, um den gemeinsamen Build nicht zu überlagern.
- BrowserOS neo, integrierte Portalrouten `http://127.0.0.1:3010/systems/shadcn/components/<slug>`, 390 × 844 CSS-Pixel: alle 19 Komponenten und ihre Vergleichsgruppen durch Browser-Screenshots visuell geprüft. Die Prüfung umfasst Figuren, Beschriftungen, Schriftlesbarkeit, Randpositionen, Untermenüs, Scrollausschnitte und Umbruch. Geschlossene Figuren sind bewusst niedriger als offene Ebenen.
- Breite Stichprobe bei 1440 × 1000 CSS-Pixel: Sidebar, Alert Dialog, Popover, Menubar, Drawer und Tooltip. Die zweispaltige Darstellung, Rahmenvarianten, Standard-/sm-Breite, vier Kanten und seitliche Popupgeometrie wurden visuell geprüft.
- Aus dieser Prüfung korrigiert: Inhaltsausschnitt der Sidebar liegt in der tatsächlichen Nachbarspalte; mobiles Sheet erhält ausreichend Höhe; Menubar-/Tabbeschriftung verwendet 14 px; seitliche Tooltip-/HoverCard-Flächen behalten Inhaltsbreite; das Kontextmenü zeigt seine ausdrücklich ergänzte Aktionenalternative. Sidebar, Tooltip und Kontextmenü wurden danach bei 390 px nochmals visuell geprüft.
- Illustrationen enthalten ausschliesslich statische Elemente, keine Links, Buttons, Eingaben oder Tabstopps. Die umgebenden Figuren liefern Titel und Erklärung; die gezeichneten Muster sind für assistive Technik ausgeblendet. Dies ist eine lokale Quellcodebeobachtung, keine allgemeine Accessibilityfreigabe.

Der enge Prüfumfang betrifft die neuen Vergleichsabbildungen. Contractstatus, Quellrevision, CMS-/Seitenpins und die fünf vorhandenen Vergleiche wurden durch diesen Bereich nicht geändert. Die vollständige gemeinsame Build- und Katalogprüfung liegt bei der Integration.
