import type { ComponentComparison, ComparisonSection } from '../component-comparison-data'

// Curated static German illustrations. Raw package fixtures are preserved unchanged.
const comparisons: Record<string, Record<ComparisonSection, ComponentComparison[]>> = {
  "combobox": {
    "variants": [
      {
        "id": "combobox-variants",
        "title": "Ein Ort oder mehrere",
        "description": "Wähle einen einzelnen Abholort oder zeige mehrere bestätigte Orte als Chips.",
        "layout": "wide",
        "items": [
          {
            "id": "single-selection",
            "title": "Ein Abholort",
            "description": "Bern ist bestätigt; die Liste ist geschlossen."
          },
          {
            "id": "multiple-chips",
            "title": "Mehrere Abholorte",
            "description": "Bestätigte Orte stehen als Chips im Feld."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/combobox/component.json",
            "sha256": "d2d083e60dac112e729b61d9966debf0deeab1d5938edcec402a27fb3320c2d5"
          },
          {
            "path": "library/components/combobox/interface.json",
            "sha256": "5de274838750a60ccba64377c1a70647f7cca5c9f55f1e1c1c99aadbf6e820e0"
          },
          {
            "path": "library/components/combobox/layout.css",
            "sha256": "b72a50cfe3fbf29fcdeda063a2baaeeb09435311983eae7b25f521172d89aab8"
          },
          {
            "path": "library/components/combobox/behavior.scxml",
            "sha256": "51d16d622e99746a14ed122dab6a5298ab52e72b093c20621dc583259e2b2933"
          },
          {
            "path": "library/components/combobox/accessibility.html",
            "sha256": "5671db460505f5cafe372de73aeff8262dda6f06949cd69b447f498a0b224e2e"
          },
          {
            "path": "library/components/combobox/stories.json",
            "sha256": "2f974173754e8ede225345b2f1cdffc205f7919b9d53c15fbc9aabb2e0c8aaea"
          },
          {
            "path": "library/components/combobox/ux.json",
            "sha256": "d2ee5a6c6a6be9eae57cb534a247aeb4f13b0b2250ca40a2d54c7076d49bd5d2"
          }
        ],
        "previewItems": [
          "single-selection",
          "multiple-chips"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Suchtext, Hervorhebung und bestätigte Auswahl bleiben getrennt. Mehrfachwerte erscheinen als Chips. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ],
    "states": [
      {
        "id": "combobox-states",
        "title": "Suchen und Auswählen",
        "description": "Eine Hervorhebung ist noch keine bestätigte Auswahl.",
        "layout": "wide",
        "items": [
          {
            "id": "closed",
            "title": "Noch kein Ort gewählt",
            "description": "Die Liste ist geschlossen."
          },
          {
            "id": "highlighted",
            "title": "Nur hervorgehoben",
            "description": "Basel hat den Listenfokus. Noch kein Ort ist bestätigt."
          },
          {
            "id": "selected-option",
            "title": "Bestätigte Auswahl",
            "description": "Bern ist gewählt; keine andere Option ist hervorgehoben."
          },
          {
            "id": "selected-clear",
            "title": "Bestätigt",
            "description": "Bern ist ausgewählt und kann gelöscht werden."
          },
          {
            "id": "empty",
            "title": "Kein Treffer",
            "description": "Die Suche findet keinen passenden Ort."
          },
          {
            "id": "error",
            "title": "Fehler",
            "description": "Der Text fordert eine gültige Ortsauswahl."
          },
          {
            "id": "readonly",
            "title": "Schreibgeschützt",
            "description": "Bern bleibt lesbar; eine Änderung ist gesperrt."
          },
          {
            "id": "disabled",
            "title": "Deaktiviert",
            "description": "Gleicher Wert; die Änderung ist gesperrt."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/combobox/component.json",
            "sha256": "d2d083e60dac112e729b61d9966debf0deeab1d5938edcec402a27fb3320c2d5"
          },
          {
            "path": "library/components/combobox/interface.json",
            "sha256": "5de274838750a60ccba64377c1a70647f7cca5c9f55f1e1c1c99aadbf6e820e0"
          },
          {
            "path": "library/components/combobox/layout.css",
            "sha256": "b72a50cfe3fbf29fcdeda063a2baaeeb09435311983eae7b25f521172d89aab8"
          },
          {
            "path": "library/components/combobox/behavior.scxml",
            "sha256": "51d16d622e99746a14ed122dab6a5298ab52e72b093c20621dc583259e2b2933"
          },
          {
            "path": "library/components/combobox/accessibility.html",
            "sha256": "5671db460505f5cafe372de73aeff8262dda6f06949cd69b447f498a0b224e2e"
          },
          {
            "path": "library/components/combobox/stories.json",
            "sha256": "2f974173754e8ede225345b2f1cdffc205f7919b9d53c15fbc9aabb2e0c8aaea"
          },
          {
            "path": "library/components/combobox/ux.json",
            "sha256": "d2ee5a6c6a6be9eae57cb534a247aeb4f13b0b2250ca40a2d54c7076d49bd5d2"
          }
        ],
        "previewItems": [
          "highlighted",
          "selected-option"
        ],
        "detailsLabel": "Weitere Auswahlzustände, Fehler und Sperren",
        "technicalNotes": "Suchtext, Hervorhebung und bestätigte Auswahl bleiben getrennt. Mehrfachwerte erscheinen als Chips. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ]
  },
  "select": {
    "variants": [
      {
        "id": "select-variants",
        "title": "Platzbedarf und Anzahl",
        "description": "Vergleiche die Feldhöhen für dieselbe Versandart.",
        "layout": "wide",
        "items": [
          {
            "id": "open",
            "title": "Standard",
            "description": "Standard im normalen Auswahlfeld."
          },
          {
            "id": "small",
            "title": "Kompakt · sm",
            "description": "Gleicher Inhalt in der kompakten Höhe."
          },
          {
            "id": "multiple",
            "title": "Mehrere Versandarten",
            "description": "Separate Konfiguration: Standard und Express als angebotene Versandarten."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/select/component.json",
            "sha256": "7e83ddaa8aa2e5be00bf09b4ddec44548399ff2aefae6df61fdc2d3d3b1f4483"
          },
          {
            "path": "library/components/select/interface.json",
            "sha256": "825058bdf98273c81efc2e30bdbbcf5fbab17b64e6e9ad944fe252a0a2d7e880"
          },
          {
            "path": "library/components/select/layout.css",
            "sha256": "2a3db26e915015ae4d7bf906c5ff0cbd34a413c63806483bdeb43fd877106b91"
          },
          {
            "path": "library/components/select/behavior.scxml",
            "sha256": "2dd72d4e77bd429890ae4ae862934b7aad50d6aece481cfc4c3df21f8c0c6791"
          },
          {
            "path": "library/components/select/accessibility.html",
            "sha256": "f7b6d83937fec6cbbbeb7608c778ce2ccd2c277e6533e26a482707336c73c936"
          },
          {
            "path": "library/components/select/stories.json",
            "sha256": "b52e98cc851e584593844aa82cec9345f5b5f997dbd76f3097ee7388edb3b3d1"
          },
          {
            "path": "library/components/select/ux.json",
            "sha256": "8479493d7f1aa4392b6ca8c782925fee42110f03cd183752322a16b3466f3ba1"
          }
        ],
        "previewItems": [
          "open",
          "small"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "sm/default sind Triggergrössen; Mehrfachwerte sind Arrays. Select besitzt kein Suchfeld. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ],
    "states": [
      {
        "id": "select-states",
        "title": "Auswahl und Bedienbarkeit",
        "description": "Die gewählte Versandart bleibt bei gesperrter Änderung sichtbar.",
        "layout": "wide",
        "items": [
          {
            "id": "closed",
            "title": "Geschlossen",
            "description": "Standard bleibt als bestätigte Auswahl sichtbar."
          },
          {
            "id": "highlighted",
            "title": "Option hervorgehoben",
            "description": "Express ist markiert; Standard bleibt gewählt."
          },
          {
            "id": "readonly",
            "title": "Schreibgeschützt",
            "description": "Die Auswahl bleibt lesbar; Änderungen sind gesperrt."
          },
          {
            "id": "disabled",
            "title": "Deaktiviert",
            "description": "Gleicher Wert; die Änderung ist gesperrt."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/select/component.json",
            "sha256": "7e83ddaa8aa2e5be00bf09b4ddec44548399ff2aefae6df61fdc2d3d3b1f4483"
          },
          {
            "path": "library/components/select/interface.json",
            "sha256": "825058bdf98273c81efc2e30bdbbcf5fbab17b64e6e9ad944fe252a0a2d7e880"
          },
          {
            "path": "library/components/select/layout.css",
            "sha256": "2a3db26e915015ae4d7bf906c5ff0cbd34a413c63806483bdeb43fd877106b91"
          },
          {
            "path": "library/components/select/behavior.scxml",
            "sha256": "2dd72d4e77bd429890ae4ae862934b7aad50d6aece481cfc4c3df21f8c0c6791"
          },
          {
            "path": "library/components/select/accessibility.html",
            "sha256": "f7b6d83937fec6cbbbeb7608c778ce2ccd2c277e6533e26a482707336c73c936"
          },
          {
            "path": "library/components/select/stories.json",
            "sha256": "b52e98cc851e584593844aa82cec9345f5b5f997dbd76f3097ee7388edb3b3d1"
          },
          {
            "path": "library/components/select/ux.json",
            "sha256": "8479493d7f1aa4392b6ca8c782925fee42110f03cd183752322a16b3466f3ba1"
          }
        ],
        "previewItems": [
          "closed",
          "highlighted"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "sm/default sind Triggergrössen; Mehrfachwerte sind Arrays. Select besitzt kein Suchfeld. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ]
  },
  "native-select": {
    "variants": [
      {
        "id": "native-select-variants",
        "title": "Native Auswahl",
        "description": "Wähle eine kompakte Feldhöhe oder eine Liste für mehrere Länder.",
        "layout": "compact",
        "items": [
          {
            "id": "native-single",
            "title": "Native Einfachauswahl",
            "description": "Eine native Einfachauswahl mit 36 px hoher Hülle."
          },
          {
            "id": "small",
            "title": "Kompakt · sm",
            "description": "Gleicher Inhalt in der kompakten Höhe."
          },
          {
            "id": "multiple",
            "title": "Mehrfachauswahl",
            "description": "Mehrere gewählte Einträge stehen in einer nativen Liste ohne Chevron."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/native-select/component.json",
            "sha256": "fa9f84bb54d4c5083fefded30d9c6f6772d9152c598bd46aae406321d57524cc"
          },
          {
            "path": "library/components/native-select/interface.json",
            "sha256": "5ae3b115578a82e2bfa4e13f1f834fb0d7d94a6f2253c6288f50664cec8f791f"
          },
          {
            "path": "library/components/native-select/layout.css",
            "sha256": "2c5b79064a8224992d7b4c13f54d9471354e641b5f09256f1b965dd0f2b7ff05"
          },
          {
            "path": "library/components/native-select/behavior.scxml",
            "sha256": "1838c95126022e066454d6c99fc2412cbd42bb16dffdc82a3b9b56a5e2507ce8"
          },
          {
            "path": "library/components/native-select/accessibility.html",
            "sha256": "aeafd02afca4b9ab0118db518b8bce938c9f6a148186e9b9d40c013d4ed90c7c"
          },
          {
            "path": "library/components/native-select/stories.json",
            "sha256": "6305dca08307d7b96003a6958c90b0a1d11de3abec49b58d04deaba7568e860c"
          },
          {
            "path": "library/components/native-select/ux.json",
            "sha256": "4f68d9b9703498974c4cd5eee33c85d28da84ee4da6bb662e1d08a646ef3d555"
          }
        ],
        "previewItems": [
          "native-single",
          "small"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "36/32 px hohe Hülle; die native Auswahlliste und Mehrfachauswahl bleiben plattformabhängig. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ],
    "states": [
      {
        "id": "native-select-states",
        "title": "Fokus, Fehler und Sperre",
        "description": "Die Beschriftung bleibt gleich; nur die Rückmeldung ändert sich.",
        "layout": "compact",
        "items": [
          {
            "id": "focused",
            "title": "Tastaturfokus",
            "description": "Der Ring kennzeichnet das aktuelle Eingabeziel."
          },
          {
            "id": "invalid",
            "title": "Ungültige Eingabe",
            "description": "Eine konkrete Korrektur steht beim Feld."
          },
          {
            "id": "disabled",
            "title": "Deaktiviert",
            "description": "Gleicher Wert; die Änderung ist gesperrt."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/native-select/component.json",
            "sha256": "fa9f84bb54d4c5083fefded30d9c6f6772d9152c598bd46aae406321d57524cc"
          },
          {
            "path": "library/components/native-select/interface.json",
            "sha256": "5ae3b115578a82e2bfa4e13f1f834fb0d7d94a6f2253c6288f50664cec8f791f"
          },
          {
            "path": "library/components/native-select/layout.css",
            "sha256": "2c5b79064a8224992d7b4c13f54d9471354e641b5f09256f1b965dd0f2b7ff05"
          },
          {
            "path": "library/components/native-select/behavior.scxml",
            "sha256": "1838c95126022e066454d6c99fc2412cbd42bb16dffdc82a3b9b56a5e2507ce8"
          },
          {
            "path": "library/components/native-select/accessibility.html",
            "sha256": "aeafd02afca4b9ab0118db518b8bce938c9f6a148186e9b9d40c013d4ed90c7c"
          },
          {
            "path": "library/components/native-select/stories.json",
            "sha256": "6305dca08307d7b96003a6958c90b0a1d11de3abec49b58d04deaba7568e860c"
          },
          {
            "path": "library/components/native-select/ux.json",
            "sha256": "4f68d9b9703498974c4cd5eee33c85d28da84ee4da6bb662e1d08a646ef3d555"
          }
        ],
        "previewItems": [
          "focused",
          "invalid"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "36/32 px hohe Hülle; die native Auswahlliste und Mehrfachauswahl bleiben plattformabhängig. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ]
  },
  "radio-group": {
    "variants": [
      {
        "id": "radio-group-variants",
        "title": "Eine Versandart wählen",
        "description": "Alle Optionen sind gleichzeitig sichtbar. Es kann genau eine gewählt sein.",
        "layout": "compact",
        "items": [
          {
            "id": "basic",
            "title": "Standard gewählt",
            "description": "Express bleibt als gleichzeitige Alternative sichtbar."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/radio-group/component.json",
            "sha256": "b243ded24b24159b928679cb52f6d64a4897ebfc630a561ca9fe3481baed641e"
          },
          {
            "path": "library/components/radio-group/interface.json",
            "sha256": "8dfbea5708630c5b3ed4fbc943d13ab6af34580b76ca332d07d3a11c19558a19"
          },
          {
            "path": "library/components/radio-group/layout.css",
            "sha256": "7bed32dd2739ae4136f457d0465c1f3390920e42e4bba071a0d41a1eb6ee665c"
          },
          {
            "path": "library/components/radio-group/behavior.scxml",
            "sha256": "8063cdbcdccae589333f0c8439e255b8f82f3701a10925b60396c5dc84f138e9"
          },
          {
            "path": "library/components/radio-group/accessibility.html",
            "sha256": "496edfbfb0db8863495d22290b91d1e1188a3555f01beca7e7e462443e292d5e"
          },
          {
            "path": "library/components/radio-group/stories.json",
            "sha256": "2ecbcdc3c509a4a1a0f2c4bf500c20b4cbf0cf7b4abea1af0dc2921700327539"
          },
          {
            "path": "library/components/radio-group/ux.json",
            "sha256": "28aecf82723168b873e5f2a7b23acb5700bd5f6bd9418363130cb5e4b0b827de"
          }
        ],
        "previewItems": [
          "basic"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Ein einzelner Auswahlwert; 16 px Radio mit 8 px Punkt. Fokus, Fehler und Sperre sind zusätzliche Merkmale. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ],
    "states": [
      {
        "id": "radio-group-states",
        "title": "Auswahl und Rückmeldung",
        "description": "Vergleiche die Versandart mit Fokus, Fehler oder gesperrter Änderung.",
        "layout": "compact",
        "items": [
          {
            "id": "pro",
            "title": "Express gewählt",
            "description": "Die Auswahl wechselt von Standard zu Express."
          },
          {
            "id": "focused",
            "title": "Tastaturfokus",
            "description": "Der Ring kennzeichnet das aktuelle Eingabeziel."
          },
          {
            "id": "error",
            "title": "Fehlerhinweis",
            "description": "Eine konkrete Korrektur steht beim Feld."
          },
          {
            "id": "readonly",
            "title": "Schreibgeschützt",
            "description": "Standard bleibt gewählt; Änderungen sind gesperrt."
          },
          {
            "id": "disabled",
            "title": "Deaktiviert",
            "description": "Gleicher Wert; die Änderung ist gesperrt."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/radio-group/component.json",
            "sha256": "b243ded24b24159b928679cb52f6d64a4897ebfc630a561ca9fe3481baed641e"
          },
          {
            "path": "library/components/radio-group/interface.json",
            "sha256": "8dfbea5708630c5b3ed4fbc943d13ab6af34580b76ca332d07d3a11c19558a19"
          },
          {
            "path": "library/components/radio-group/layout.css",
            "sha256": "7bed32dd2739ae4136f457d0465c1f3390920e42e4bba071a0d41a1eb6ee665c"
          },
          {
            "path": "library/components/radio-group/behavior.scxml",
            "sha256": "8063cdbcdccae589333f0c8439e255b8f82f3701a10925b60396c5dc84f138e9"
          },
          {
            "path": "library/components/radio-group/accessibility.html",
            "sha256": "496edfbfb0db8863495d22290b91d1e1188a3555f01beca7e7e462443e292d5e"
          },
          {
            "path": "library/components/radio-group/stories.json",
            "sha256": "2ecbcdc3c509a4a1a0f2c4bf500c20b4cbf0cf7b4abea1af0dc2921700327539"
          },
          {
            "path": "library/components/radio-group/ux.json",
            "sha256": "28aecf82723168b873e5f2a7b23acb5700bd5f6bd9418363130cb5e4b0b827de"
          }
        ],
        "previewItems": [
          "pro",
          "error"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Ein einzelner Auswahlwert; 16 px Radio mit 8 px Punkt. Fokus, Fehler und Sperre sind zusätzliche Merkmale. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ]
  },
  "toggle-group": {
    "variants": [
      {
        "id": "toggle-group-variants",
        "title": "Formatierungsleiste gestalten",
        "description": "Vergleiche Abstände, Umrandung und Grösse derselben Werkzeuge.",
        "layout": "wide",
        "items": [
          {
            "id": "single",
            "title": "Einfachauswahl",
            "description": "Verfügbare und gesperrte Formatoptionen mit standardmässigem Abstand."
          },
          {
            "id": "outline-connected",
            "title": "Umrandet und verbunden",
            "description": "Die Tasten teilen ihre Innenkanten."
          },
          {
            "id": "small",
            "title": "Kompakt · sm",
            "description": "Gleicher Inhalt in der kompakten Höhe."
          },
          {
            "id": "large",
            "title": "Gross · lg",
            "description": "Gleicher Inhalt mit mehr Höhe."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/toggle-group/component.json",
            "sha256": "523c9410386d22f429bd43a83d6bc08f55ca867516332ba0beaa20114adbaf7d"
          },
          {
            "path": "library/components/toggle-group/interface.json",
            "sha256": "6ec5f7e0eda59f6b09a12577790de455be038593f6360d0f9d5715e738237338"
          },
          {
            "path": "library/components/toggle-group/layout.css",
            "sha256": "2974d01a1ae9d97de6c256c8f8ca3b79b9ed3a4262c5243e678018fd6f769211"
          },
          {
            "path": "library/components/toggle-group/behavior.scxml",
            "sha256": "5ab81ea3bf29f9d7885c7f419f78aa911d813395dea656c0722195a4d0f2d11c"
          },
          {
            "path": "library/components/toggle-group/accessibility.html",
            "sha256": "0c2fa63b40e8f7d3a2ef51a3a4d9a376bab7da004408436cc300b2b9493c4011"
          },
          {
            "path": "library/components/toggle-group/stories.json",
            "sha256": "db15e674876d9adf53106db60d2367efe14ae4d66537c4ed8366fc65c4f5ea05"
          },
          {
            "path": "library/components/toggle-group/ux.json",
            "sha256": "b640988f41cd9aa4e04840e55989e5751d430cd1c4f18c22b9965ff0a0e0c741"
          }
        ],
        "previewItems": [
          "single",
          "outline-connected"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "default/outline und 28/32/36 px Höhe. Verbundene Outline nutzt spacing=0; Gruppenwert bleibt ein Array. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ],
    "states": [
      {
        "id": "toggle-group-states",
        "title": "Werkzeuge aktivieren",
        "description": "Eine gedrückte Taste zeigt ein aktives Format; mehrere Formate können zusammen gelten.",
        "layout": "wide",
        "items": [
          {
            "id": "pressed",
            "title": "Ein Format aktiv",
            "description": "Fett ist gedrückt, Kursiv bleibt ungewählt."
          },
          {
            "id": "multiple",
            "title": "Zwei Formate aktiv",
            "description": "Fett und Kursiv sind gleichzeitig gedrückt."
          },
          {
            "id": "focused",
            "title": "Tastaturfokus",
            "description": "Der Ring kennzeichnet das aktuelle Eingabeziel."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/toggle-group/component.json",
            "sha256": "523c9410386d22f429bd43a83d6bc08f55ca867516332ba0beaa20114adbaf7d"
          },
          {
            "path": "library/components/toggle-group/interface.json",
            "sha256": "6ec5f7e0eda59f6b09a12577790de455be038593f6360d0f9d5715e738237338"
          },
          {
            "path": "library/components/toggle-group/layout.css",
            "sha256": "2974d01a1ae9d97de6c256c8f8ca3b79b9ed3a4262c5243e678018fd6f769211"
          },
          {
            "path": "library/components/toggle-group/behavior.scxml",
            "sha256": "5ab81ea3bf29f9d7885c7f419f78aa911d813395dea656c0722195a4d0f2d11c"
          },
          {
            "path": "library/components/toggle-group/accessibility.html",
            "sha256": "0c2fa63b40e8f7d3a2ef51a3a4d9a376bab7da004408436cc300b2b9493c4011"
          },
          {
            "path": "library/components/toggle-group/stories.json",
            "sha256": "db15e674876d9adf53106db60d2367efe14ae4d66537c4ed8366fc65c4f5ea05"
          },
          {
            "path": "library/components/toggle-group/ux.json",
            "sha256": "b640988f41cd9aa4e04840e55989e5751d430cd1c4f18c22b9965ff0a0e0c741"
          }
        ],
        "previewItems": [
          "pressed",
          "multiple"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "default/outline und 28/32/36 px Höhe. Verbundene Outline nutzt spacing=0; Gruppenwert bleibt ein Array. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ]
  },
  "slider": {
    "variants": [
      {
        "id": "slider-variants",
        "title": "Wert oder Bereich",
        "description": "Ein Griff setzt die Lautstärke, zwei Griffe begrenzen einen Bereich.",
        "layout": "compact",
        "items": [
          {
            "id": "single",
            "title": "Einzelwert · 40 %",
            "description": "Ein Daumen markiert 40 % auf der horizontalen Schiene."
          },
          {
            "id": "range",
            "title": "Bereich · 20–80 %",
            "description": "Zwei Daumen begrenzen den ausgewählten Bereich von 20 bis 80 %."
          },
          {
            "id": "vertical",
            "title": "Vertikal",
            "description": "Die Schiene steht senkrecht; die Referenz wählt 160 px Ausdehnung."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/slider/component.json",
            "sha256": "9bcefe9319ab56e9b1502ffa2b27c6437785a81941bdc46889da5e6d6045f27e"
          },
          {
            "path": "library/components/slider/interface.json",
            "sha256": "ce0cd3575bf7b71e10b2c2abc4e320c494f2eb8d67cf64ed62865a8a56ed506a"
          },
          {
            "path": "library/components/slider/layout.css",
            "sha256": "b19370f2a0af75451da06829b19706803399e03f1c6f1a0c4619f34d2e72e61a"
          },
          {
            "path": "library/components/slider/behavior.scxml",
            "sha256": "17d090a2f4ddbbedfbc3e0045446a18d27cd1669bc7a35b4b386831c5040e158"
          },
          {
            "path": "library/components/slider/accessibility.html",
            "sha256": "143ee6b7d3093f2d173b98182884207ece0bfea4ad2ddef1db7caaa9f1d7e067"
          },
          {
            "path": "library/components/slider/stories.json",
            "sha256": "93fe48193658f80e8e1bd4d1816cee36fec3b943209f5d48f52ff7689cb33a4e"
          },
          {
            "path": "library/components/slider/ux.json",
            "sha256": "15d78d32c4ec811f7623e19f825e02138f105e2c19a5b8717eb139f13dab56c1"
          }
        ],
        "previewItems": [
          "single",
          "range"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "4 px Schiene und 12 px Daumen. Einzel-/Bereichswerte sind explizite Arrays; vertikale Ausdehnung ist eine Referenzentscheidung. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ],
    "states": [
      {
        "id": "slider-states",
        "title": "Fokus, Fehler und Sperre",
        "description": "Die Lautstärke bleibt bei 40 %; nur die Rückmeldung wechselt.",
        "layout": "compact",
        "items": [
          {
            "id": "focused",
            "title": "Tastaturfokus",
            "description": "Der Ring kennzeichnet das aktuelle Eingabeziel."
          },
          {
            "id": "error",
            "title": "Fehlerhinweis",
            "description": "Eine konkrete Korrektur steht beim Feld."
          },
          {
            "id": "disabled",
            "title": "Deaktiviert",
            "description": "Gleicher Wert; die Änderung ist gesperrt."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/slider/component.json",
            "sha256": "9bcefe9319ab56e9b1502ffa2b27c6437785a81941bdc46889da5e6d6045f27e"
          },
          {
            "path": "library/components/slider/interface.json",
            "sha256": "ce0cd3575bf7b71e10b2c2abc4e320c494f2eb8d67cf64ed62865a8a56ed506a"
          },
          {
            "path": "library/components/slider/layout.css",
            "sha256": "b19370f2a0af75451da06829b19706803399e03f1c6f1a0c4619f34d2e72e61a"
          },
          {
            "path": "library/components/slider/behavior.scxml",
            "sha256": "17d090a2f4ddbbedfbc3e0045446a18d27cd1669bc7a35b4b386831c5040e158"
          },
          {
            "path": "library/components/slider/accessibility.html",
            "sha256": "143ee6b7d3093f2d173b98182884207ece0bfea4ad2ddef1db7caaa9f1d7e067"
          },
          {
            "path": "library/components/slider/stories.json",
            "sha256": "93fe48193658f80e8e1bd4d1816cee36fec3b943209f5d48f52ff7689cb33a4e"
          },
          {
            "path": "library/components/slider/ux.json",
            "sha256": "15d78d32c4ec811f7623e19f825e02138f105e2c19a5b8717eb139f13dab56c1"
          }
        ],
        "previewItems": [
          "focused",
          "disabled"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "4 px Schiene und 12 px Daumen. Einzel-/Bereichswerte sind explizite Arrays; vertikale Ausdehnung ist eine Referenzentscheidung. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ]
  },
  "calendar": {
    "variants": [
      {
        "id": "calendar-variants",
        "title": "Einzeltermin, mehrere Termine oder Zeitraum",
        "description": "Drei Auswahlarten im gleichen Ausschnitt vom 8.–21. November 2026. Wähle passend zur Aufgabe.",
        "layout": "wide",
        "items": [
          {
            "id": "single-default",
            "title": "Einzeltermin",
            "description": "Für einen Liefertermin."
          },
          {
            "id": "multiple-example",
            "title": "Mehrere unabhängige Termine",
            "description": "Für einzelne Kurstage."
          },
          {
            "id": "range-start-middle-end",
            "title": "Zusammenhängender Zeitraum",
            "description": "Für eine zusammenhängende Abwesenheit."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/calendar/component.json",
            "sha256": "976392d425788547a1e9be260b56139c7642af5740034eed3b589ff2f1e0ef0b"
          },
          {
            "path": "library/components/calendar/interface.json",
            "sha256": "f426f40d6116df8584ea83bdad8dd86bc3b92db9e5f696e6bcc3bed9a423b8a5"
          },
          {
            "path": "library/components/calendar/layout.css",
            "sha256": "487a5ea3fa3fb7a8ee01b5a526a0934f675f4f82a3286b019f43f9b921a41aad"
          },
          {
            "path": "library/components/calendar/behavior.scxml",
            "sha256": "ceb825e03c615f30157f6ac6ccaf1707eec477966461a54f9a321cad123e4902"
          },
          {
            "path": "library/components/calendar/accessibility.html",
            "sha256": "ee1e0ae6dc914a7e0cc286e680067cb13085ff55120b4be46cd02520f8299812"
          },
          {
            "path": "library/components/calendar/stories.json",
            "sha256": "19d670a4fc0fe27157d453c40e966218eb988fdf5d148ad10f702457e9405e6c"
          },
          {
            "path": "library/components/calendar/ux.json",
            "sha256": "093ff1c948a2b9c0a7d517bd2640ce35db4af9f657ffe612a6f65f0a92cbb280"
          }
        ],
        "previewItems": [
          "single-default",
          "multiple-example",
          "range-start-middle-end"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Statische, redaktionell deutsch lokalisierte Bildübersicht im identischen Zweiwochenausschnitt (8.–21. November 2026) mit 38 px Tageszellen. single/multiple/range sind getrennte DayPicker-Auswahlmodi. Mehrfachauswahl ist ein redaktionelles Beispiel aus den belegten Auswahlmerkmalen; kein zusätzlicher Contract-Story-Nachweis. Die Range-Tage 14.–16. stammen aus der Range-Story. Alle Bilder behalten den gesperrten 13. und den heutigen 21. November als konstanten Kontext. Die Bilder belegen keinen ausgeführten Bedienablauf und keine Fokusreparatur."
      },
      {
        "id": "calendar-options",
        "title": "Dichte und Anzeigeoptionen",
        "description": "Dieselbe Einzeltermin-Auswahl bleibt bestehen; nur Dichte oder Anzeige ändern sich.",
        "layout": "wide",
        "items": [
          {
            "id": "single-default",
            "title": "Standard",
            "description": "38 px pro Tag · 12. November gewählt"
          },
          {
            "id": "compact",
            "title": "Kompakt",
            "description": "28 px pro Tag · gleicher Ausschnitt"
          },
          {
            "id": "large",
            "title": "Gross",
            "description": "48 px pro Tag · gleicher Ausschnitt"
          },
          {
            "id": "caption-dropdown",
            "title": "Monat direkt wählen",
            "description": "Die Monatsliste ersetzt den Monatstitel."
          },
          {
            "id": "week-numbers",
            "title": "Mit Kalenderwochen",
            "description": "Die zusätzliche Spalte hilft bei der Terminabsprache."
          },
          {
            "id": "noninteractive",
            "title": "Nur anzeigen",
            "description": "Darstellungsmodus ohne Tagesbuttons; keine Auswahlinteraktion."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/calendar/component.json",
            "sha256": "976392d425788547a1e9be260b56139c7642af5740034eed3b589ff2f1e0ef0b"
          },
          {
            "path": "library/components/calendar/interface.json",
            "sha256": "f426f40d6116df8584ea83bdad8dd86bc3b92db9e5f696e6bcc3bed9a423b8a5"
          },
          {
            "path": "library/components/calendar/layout.css",
            "sha256": "487a5ea3fa3fb7a8ee01b5a526a0934f675f4f82a3286b019f43f9b921a41aad"
          },
          {
            "path": "library/components/calendar/behavior.scxml",
            "sha256": "ceb825e03c615f30157f6ac6ccaf1707eec477966461a54f9a321cad123e4902"
          },
          {
            "path": "library/components/calendar/accessibility.html",
            "sha256": "ee1e0ae6dc914a7e0cc286e680067cb13085ff55120b4be46cd02520f8299812"
          },
          {
            "path": "library/components/calendar/stories.json",
            "sha256": "19d670a4fc0fe27157d453c40e966218eb988fdf5d148ad10f702457e9405e6c"
          },
          {
            "path": "library/components/calendar/ux.json",
            "sha256": "093ff1c948a2b9c0a7d517bd2640ce35db4af9f657ffe612a6f65f0a92cbb280"
          }
        ],
        "previewItems": [],
        "detailsLabel": "Dichte und Anzeige vergleichen",
        "technicalNotes": "28/38/48 px Tageszellen über caller data-calendar-size, keine neue öffentliche size-Prop. Standard, Kompakt und Gross zeigen denselben 12. November im gleichen Zweiwochenausschnitt. Monatsliste, Kalenderwochen und nichtinteraktiver Modus sind belegte Anzeigeoptionen. Grosse Kalender dürfen lokal horizontal scrollen. Statische, redaktionell lokalisierte Illustrationen; keine Bedienprüfung."
      }
    ],
    "states": [
      {
        "id": "calendar-states",
        "title": "Gesperrt, fokussiert oder ausgeblendet",
        "description": "Verfügbarkeit, Tastaturfokus und Sichtbarkeit sind unabhängig von der Auswahlart.",
        "layout": "wide",
        "items": [
          {
            "id": "disabled-date",
            "title": "Tag gesperrt",
            "description": "Der 13. November ist sichtbar und nicht wählbar; der 12. bleibt gewählt."
          },
          {
            "id": "day-keyboard-focus",
            "title": "Tastaturfokus",
            "description": "Der 19. November trägt den Fokus; ausgewählt bleibt der 12. November."
          },
          {
            "id": "hidden-date",
            "title": "Tag ausgeblendet",
            "description": "Der 18. November belegt Platz, bleibt aber unsichtbar."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/calendar/component.json",
            "sha256": "976392d425788547a1e9be260b56139c7642af5740034eed3b589ff2f1e0ef0b"
          },
          {
            "path": "library/components/calendar/interface.json",
            "sha256": "f426f40d6116df8584ea83bdad8dd86bc3b92db9e5f696e6bcc3bed9a423b8a5"
          },
          {
            "path": "library/components/calendar/layout.css",
            "sha256": "487a5ea3fa3fb7a8ee01b5a526a0934f675f4f82a3286b019f43f9b921a41aad"
          },
          {
            "path": "library/components/calendar/behavior.scxml",
            "sha256": "ceb825e03c615f30157f6ac6ccaf1707eec477966461a54f9a321cad123e4902"
          },
          {
            "path": "library/components/calendar/accessibility.html",
            "sha256": "ee1e0ae6dc914a7e0cc286e680067cb13085ff55120b4be46cd02520f8299812"
          },
          {
            "path": "library/components/calendar/stories.json",
            "sha256": "19d670a4fc0fe27157d453c40e966218eb988fdf5d148ad10f702457e9405e6c"
          },
          {
            "path": "library/components/calendar/ux.json",
            "sha256": "093ff1c948a2b9c0a7d517bd2640ce35db4af9f657ffe612a6f65f0a92cbb280"
          }
        ],
        "previewItems": [
          "disabled-date",
          "day-keyboard-focus"
        ],
        "detailsLabel": "Ausgeblendeten Tag vergleichen",
        "technicalNotes": "Statische, redaktionell lokalisierte Zweiwochenausschnitte. disabled und hidden sind getrennte DayPicker-Modifier, kein root-disabled. Der Fokusindikator illustriert den in layout.css belegten :focus-visible-Stil und die day-keyboard-focus-Story; er behauptet keine reparierte oder getestete Tastatursteuerung. Für die dokumentierte Referenzeinbindung ist der components.DayButton-Adapter mit angeschlossenem Ref erforderlich; der unveränderte Wrapper hat den dokumentierten Fokusfehler."
      }
    ]
  },
  "date-picker": {
    "variants": [
      {
        "id": "date-picker-variants",
        "title": "Datum im Feld wählen",
        "description": "Der geschlossene Kalender lässt Platz für den übrigen Inhalt.",
        "layout": "wide",
        "items": [
          {
            "id": "closed-empty",
            "title": "Ohne Datum",
            "description": "Das Feld fordert zur Terminwahl auf."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/date-picker/component.json",
            "sha256": "87474875a3c54e57f3afe5d953949ff57531439f63b3adbfb1ece58b2040ba46"
          },
          {
            "path": "library/components/date-picker/interface.json",
            "sha256": "597fd51a6d251ef07dda596271a8c0091509f5c5379bdc74a301bb51e086ffaa"
          },
          {
            "path": "library/components/date-picker/layout.css",
            "sha256": "daf2e7f30094eec08eca4f3e196f4d2769f7b586bd5873b2efda0495a7899f2b"
          },
          {
            "path": "library/components/date-picker/behavior.scxml",
            "sha256": "3f8320fdaa19a300f7e70ad3b7538e63b26aff58fac259e174e9127944217a35"
          },
          {
            "path": "library/components/date-picker/accessibility.html",
            "sha256": "c9272ba35574733a488b2edff4653a50e5cc534f3b5770c35c6b9d846df1d2d7"
          },
          {
            "path": "library/components/date-picker/stories.json",
            "sha256": "345bda357ad0d92402d439ce44d1abd2853ba487ea13102b72b26b762dc45e57"
          },
          {
            "path": "library/components/date-picker/ux.json",
            "sha256": "584cfa377aa10215176f822cda3a4c4902fd0c7e26c3135e72bd752b03985c02"
          }
        ],
        "previewItems": [
          "closed-empty"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Redaktionelle Caller-Komposition aus Button, Popover und Calendar. Die Auswahl schliesst das geöffnete Beispiel nicht automatisch. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Kalender zeigen nur den beschrifteten Zweiwochenausschnitt; Kalenderdatum und Anzeigeoptionen sind getrennt. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ],
    "states": [
      {
        "id": "date-picker-states",
        "title": "Datum und geöffnete Auswahl",
        "description": "Das gewählte Datum bleibt im Feld sichtbar; die Liste kann daneben offen bleiben.",
        "layout": "wide",
        "items": [
          {
            "id": "open-single",
            "title": "Kalender geöffnet",
            "description": "Der Ausschnitt zeigt denselben gewählten Termin."
          },
          {
            "id": "closed-selected",
            "title": "Datum gewählt",
            "description": "Das geschlossene Feld nennt den Termin."
          },
          {
            "id": "disabled-trigger",
            "title": "Deaktiviert",
            "description": "Das Feld sperrt das Öffnen des Kalenders."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/date-picker/component.json",
            "sha256": "87474875a3c54e57f3afe5d953949ff57531439f63b3adbfb1ece58b2040ba46"
          },
          {
            "path": "library/components/date-picker/interface.json",
            "sha256": "597fd51a6d251ef07dda596271a8c0091509f5c5379bdc74a301bb51e086ffaa"
          },
          {
            "path": "library/components/date-picker/layout.css",
            "sha256": "daf2e7f30094eec08eca4f3e196f4d2769f7b586bd5873b2efda0495a7899f2b"
          },
          {
            "path": "library/components/date-picker/behavior.scxml",
            "sha256": "3f8320fdaa19a300f7e70ad3b7538e63b26aff58fac259e174e9127944217a35"
          },
          {
            "path": "library/components/date-picker/accessibility.html",
            "sha256": "c9272ba35574733a488b2edff4653a50e5cc534f3b5770c35c6b9d846df1d2d7"
          },
          {
            "path": "library/components/date-picker/stories.json",
            "sha256": "345bda357ad0d92402d439ce44d1abd2853ba487ea13102b72b26b762dc45e57"
          },
          {
            "path": "library/components/date-picker/ux.json",
            "sha256": "584cfa377aa10215176f822cda3a4c4902fd0c7e26c3135e72bd752b03985c02"
          }
        ],
        "previewItems": [
          "closed-selected",
          "open-single"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Redaktionelle Caller-Komposition aus Button, Popover und Calendar. Die Auswahl schliesst das geöffnete Beispiel nicht automatisch. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Kalender zeigen nur den beschrifteten Zweiwochenausschnitt; Kalenderdatum und Anzeigeoptionen sind getrennt. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ]
  },
  "textarea": {
    "variants": [
      {
        "id": "textarea-variants",
        "title": "Mehrzeilige Projektnotizen",
        "description": "Kurze Absätze machen nächste Schritte leichter lesbar.",
        "layout": "wide",
        "items": [
          {
            "id": "filled",
            "title": "Ausgefüllt",
            "description": "Zwei Textzeilen zeigen den mehrzeiligen Eingabebereich."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/textarea/component.json",
            "sha256": "170e5775ddedf5bff7805ab5d85ac523c0902ab97b869fd0c1befe204d7c59b8"
          },
          {
            "path": "library/components/textarea/interface.json",
            "sha256": "5c82076b0506d48607e8377f09139ae5d36c846b51116ee5f5856e728a4bffda"
          },
          {
            "path": "library/components/textarea/layout.css",
            "sha256": "fd7379300467bf98380ba0616beda93c8691c50b8b2fb0662c4c3d81ad647bf0"
          },
          {
            "path": "library/components/textarea/behavior.scxml",
            "sha256": "5f286ece1f97fd040121df3e9d35967aa58ac90c39338748cc56e9e15d585d3c"
          },
          {
            "path": "library/components/textarea/accessibility.html",
            "sha256": "71947efd5ee9ac24190c7780ab22076ecb2ef50995cfcf7e07b1558ef8ea8c76"
          },
          {
            "path": "library/components/textarea/stories.json",
            "sha256": "83fa3ef9e07c34de61da3840bc79cc4e484a2bcf7d5478cba9699d8a46670a1e"
          },
          {
            "path": "library/components/textarea/ux.json",
            "sha256": "aa71504255fe2d2e3eec88b86f870928003f7f03edde1e9ca5fcd73dcee8cc6d"
          }
        ],
        "previewItems": [
          "filled"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Native mehrzeilige Eingabe mit 64 px Mindesthöhe und 10 px Ecken; readonly und disabled bleiben getrennt. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ],
    "states": [
      {
        "id": "textarea-states",
        "title": "Inhalt und Rückmeldung",
        "description": "Leer, fokussiert oder gesperrt: Label und Hilfe bleiben am selben Ort.",
        "layout": "wide",
        "items": [
          {
            "id": "empty",
            "title": "Leer",
            "description": "Noch keine Eingabe vorhanden."
          },
          {
            "id": "focused",
            "title": "Tastaturfokus",
            "description": "Der Ring kennzeichnet das aktuelle Eingabeziel."
          },
          {
            "id": "error",
            "title": "Fehlerhinweis",
            "description": "Eine konkrete Korrektur steht beim Feld."
          },
          {
            "id": "readonly",
            "title": "Schreibgeschützt",
            "description": "Gleicher Wert; er bleibt lesbar und kopierbar."
          },
          {
            "id": "disabled",
            "title": "Deaktiviert",
            "description": "Gleicher Wert; die Änderung ist gesperrt."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/textarea/component.json",
            "sha256": "170e5775ddedf5bff7805ab5d85ac523c0902ab97b869fd0c1befe204d7c59b8"
          },
          {
            "path": "library/components/textarea/interface.json",
            "sha256": "5c82076b0506d48607e8377f09139ae5d36c846b51116ee5f5856e728a4bffda"
          },
          {
            "path": "library/components/textarea/layout.css",
            "sha256": "fd7379300467bf98380ba0616beda93c8691c50b8b2fb0662c4c3d81ad647bf0"
          },
          {
            "path": "library/components/textarea/behavior.scxml",
            "sha256": "5f286ece1f97fd040121df3e9d35967aa58ac90c39338748cc56e9e15d585d3c"
          },
          {
            "path": "library/components/textarea/accessibility.html",
            "sha256": "71947efd5ee9ac24190c7780ab22076ecb2ef50995cfcf7e07b1558ef8ea8c76"
          },
          {
            "path": "library/components/textarea/stories.json",
            "sha256": "83fa3ef9e07c34de61da3840bc79cc4e484a2bcf7d5478cba9699d8a46670a1e"
          },
          {
            "path": "library/components/textarea/ux.json",
            "sha256": "aa71504255fe2d2e3eec88b86f870928003f7f03edde1e9ca5fcd73dcee8cc6d"
          }
        ],
        "previewItems": [
          "empty",
          "error"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Native mehrzeilige Eingabe mit 64 px Mindesthöhe und 10 px Ecken; readonly und disabled bleiben getrennt. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ]
  },
  "input-otp": {
    "variants": [
      {
        "id": "input-otp-variants",
        "title": "Code in sechs Stellen",
        "description": "Die Gruppierung hilft, den Bestätigungscode abzulesen.",
        "layout": "wide",
        "items": [
          {
            "id": "empty",
            "title": "Leer",
            "description": "Noch keine Eingabe vorhanden."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/input-otp/component.json",
            "sha256": "6ce8918b146e64a193acc3529140e91355611db744f5bd09d0f28b1c8ea3323b"
          },
          {
            "path": "library/components/input-otp/interface.json",
            "sha256": "058c4b9bc8aaf7f0a1a0e856766911cd618aa0f220ce6cc3bfa2985e7a6cc2df"
          },
          {
            "path": "library/components/input-otp/layout.css",
            "sha256": "5ae1dfb23caf3363515ee7f21a6cddc4946d18004f03ab3389c342169d63fa4a"
          },
          {
            "path": "library/components/input-otp/behavior.scxml",
            "sha256": "49d65f20717d3dd3280ddb3594105255f91535cac76f9217a314982c5482dee4"
          },
          {
            "path": "library/components/input-otp/accessibility.html",
            "sha256": "8e0375d4d6e0232dfadcb22102372fa49097964703a0e4469c8103d29b4516df"
          },
          {
            "path": "library/components/input-otp/stories.json",
            "sha256": "43a5197c2f4a34ee61450f7dd7cde9aa0cf94c855aea508058b5313e501031cb"
          },
          {
            "path": "library/components/input-otp/ux.json",
            "sha256": "1970c2738033c1aaf87ec720556dd8d7641bae1c2c0a84d8c95e495f5005dbd6"
          }
        ],
        "previewItems": [
          "empty"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Eine echte Eingabe hinter sechs dekorativen 36 px Slots. Der sechsstellige Zifferncode ist eine Caller-Vorgabe. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ],
    "states": [
      {
        "id": "input-otp-states",
        "title": "Eingabe und Gültigkeit",
        "description": "Ein vollständiger Code ist noch kein Nachweis einer erfolgreichen Prüfung.",
        "layout": "wide",
        "items": [
          {
            "id": "partial-active",
            "title": "Teilweise ausgefüllt",
            "description": "Zwei Ziffern und die Einfügemarke sind sichtbar."
          },
          {
            "id": "complete",
            "title": "Vollständig",
            "description": "Alle sechs Stellen sind mit Ziffern belegt."
          },
          {
            "id": "expired-error",
            "title": "Abgelaufen · Fehler",
            "description": "Der abgelaufene Code wird durch einen lesbaren Fehlerhinweis erklärt."
          },
          {
            "id": "disabled",
            "title": "Deaktiviert",
            "description": "Gleicher Wert; die Änderung ist gesperrt."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/input-otp/component.json",
            "sha256": "6ce8918b146e64a193acc3529140e91355611db744f5bd09d0f28b1c8ea3323b"
          },
          {
            "path": "library/components/input-otp/interface.json",
            "sha256": "058c4b9bc8aaf7f0a1a0e856766911cd618aa0f220ce6cc3bfa2985e7a6cc2df"
          },
          {
            "path": "library/components/input-otp/layout.css",
            "sha256": "5ae1dfb23caf3363515ee7f21a6cddc4946d18004f03ab3389c342169d63fa4a"
          },
          {
            "path": "library/components/input-otp/behavior.scxml",
            "sha256": "49d65f20717d3dd3280ddb3594105255f91535cac76f9217a314982c5482dee4"
          },
          {
            "path": "library/components/input-otp/accessibility.html",
            "sha256": "8e0375d4d6e0232dfadcb22102372fa49097964703a0e4469c8103d29b4516df"
          },
          {
            "path": "library/components/input-otp/stories.json",
            "sha256": "43a5197c2f4a34ee61450f7dd7cde9aa0cf94c855aea508058b5313e501031cb"
          },
          {
            "path": "library/components/input-otp/ux.json",
            "sha256": "1970c2738033c1aaf87ec720556dd8d7641bae1c2c0a84d8c95e495f5005dbd6"
          }
        ],
        "previewItems": [
          "partial-active",
          "complete"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Eine echte Eingabe hinter sechs dekorativen 36 px Slots. Der sechsstellige Zifferncode ist eine Caller-Vorgabe. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ]
  },
  "input-group": {
    "variants": [
      {
        "id": "input-group-variants",
        "title": "Zusätze am Eingabefeld",
        "description": "Positioniere einen Textzusatz vor, nach, über oder unter dem Feld.",
        "layout": "wide",
        "items": [
          {
            "id": "inline",
            "title": "Zusatz vorn",
            "description": "Suche steht vor derselben Eingabe."
          },
          {
            "id": "inline-end",
            "title": "Zusatz hinten",
            "description": "Suche steht hinter derselben Eingabe."
          },
          {
            "id": "textarea",
            "title": "Zusatz oben",
            "description": "Mehrzeiliger Inhalt mit Zusatz über der Eingabe."
          },
          {
            "id": "block-end",
            "title": "Zusatz unten",
            "description": "Zusatz unter derselben Eingabe."
          },
          {
            "id": "button-sm",
            "title": "Textaktion",
            "description": "Eine kompakte Aktion im Feld."
          },
          {
            "id": "button-icon-xs",
            "title": "Kleine Symbolaktion",
            "description": "24 px grosse Aktion im Feld."
          },
          {
            "id": "button-icon-sm",
            "title": "Symbolaktion",
            "description": "28 px grosse Aktion im Feld."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/input-group/component.json",
            "sha256": "5e578bad20952f229feca1ca15a0362d5d6ea4bb68f06de726705db91d6446cd"
          },
          {
            "path": "library/components/input-group/interface.json",
            "sha256": "74553106f06f0eeb8fbb90d840b92ecea7f98d4bd427d5023b52a7c8b1f829af"
          },
          {
            "path": "library/components/input-group/layout.css",
            "sha256": "c958857b4f1a29c64ed6d4b830a4b0d5d68c21b617ffd16718b28042502ee1ad"
          },
          {
            "path": "library/components/input-group/behavior.scxml",
            "sha256": "0780d6fcfcb50ad7759a19a4feb188f720f20124dbafd8883561731a2d6b0706"
          },
          {
            "path": "library/components/input-group/accessibility.html",
            "sha256": "5ce2160e780dafe6cb31fb13c2755998b537bc6a686d644b3cf95da78fbea8a9"
          },
          {
            "path": "library/components/input-group/stories.json",
            "sha256": "d83768b24c89dd8927995a500b11658b5eec5a17c645fc95803a7e7ddb0a71a8"
          },
          {
            "path": "library/components/input-group/ux.json",
            "sha256": "422a68ca94017ccfa2e021552706936c07ad7e2563b84f337cf619f7a4c83f03"
          }
        ],
        "previewItems": [
          "inline",
          "inline-end"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Vier Addon-Ausrichtungen und vier Aktionsgrössen; Fokus und Fehler stammen vom enthaltenen Eingabefeld. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ],
    "states": [
      {
        "id": "input-group-states",
        "title": "Fokus, Fehler und Sperre",
        "description": "Zusätze und Eingabe bleiben als eine Fläche erkennbar.",
        "layout": "wide",
        "items": [
          {
            "id": "focus",
            "title": "Tastaturfokus",
            "description": "Der Ring kennzeichnet das aktuelle Eingabeziel."
          },
          {
            "id": "invalid",
            "title": "Ungültige Eingabe",
            "description": "Eine konkrete Korrektur steht beim Feld."
          },
          {
            "id": "disabled",
            "title": "Deaktiviert",
            "description": "Gleicher Wert; die Änderung ist gesperrt."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/input-group/component.json",
            "sha256": "5e578bad20952f229feca1ca15a0362d5d6ea4bb68f06de726705db91d6446cd"
          },
          {
            "path": "library/components/input-group/interface.json",
            "sha256": "74553106f06f0eeb8fbb90d840b92ecea7f98d4bd427d5023b52a7c8b1f829af"
          },
          {
            "path": "library/components/input-group/layout.css",
            "sha256": "c958857b4f1a29c64ed6d4b830a4b0d5d68c21b617ffd16718b28042502ee1ad"
          },
          {
            "path": "library/components/input-group/behavior.scxml",
            "sha256": "0780d6fcfcb50ad7759a19a4feb188f720f20124dbafd8883561731a2d6b0706"
          },
          {
            "path": "library/components/input-group/accessibility.html",
            "sha256": "5ce2160e780dafe6cb31fb13c2755998b537bc6a686d644b3cf95da78fbea8a9"
          },
          {
            "path": "library/components/input-group/stories.json",
            "sha256": "d83768b24c89dd8927995a500b11658b5eec5a17c645fc95803a7e7ddb0a71a8"
          },
          {
            "path": "library/components/input-group/ux.json",
            "sha256": "422a68ca94017ccfa2e021552706936c07ad7e2563b84f337cf619f7a4c83f03"
          }
        ],
        "previewItems": [
          "focus",
          "invalid"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Vier Addon-Ausrichtungen und vier Aktionsgrössen; Fokus und Fehler stammen vom enthaltenen Eingabefeld. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ]
  },
  "field": {
    "variants": [
      {
        "id": "field-variants",
        "title": "Label und Eingabe anordnen",
        "description": "Vergleiche einen einzelnen Kontaktwert in vertikaler und horizontaler Anordnung.",
        "layout": "wide",
        "items": [
          {
            "id": "vertical",
            "title": "Vertikal",
            "description": "Label über dem Kontaktwert."
          },
          {
            "id": "horizontal",
            "title": "Horizontal",
            "description": "Label neben dem gleichen Kontaktwert."
          },
          {
            "id": "responsive",
            "title": "Passt sich dem Platz an",
            "description": "In schmalen Bereichen stehen Label und Feld untereinander."
          },
          {
            "id": "label-legend",
            "title": "Mit Gruppenüberschrift",
            "description": "Kontakt fasst das Feld als Gruppe zusammen."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/field/component.json",
            "sha256": "e4c1ebfe9175297fdefae4a02302a6ec5963ac1be9287a37102be3453d6307c6"
          },
          {
            "path": "library/components/field/interface.json",
            "sha256": "f74a802b6119da16301bbea937d05a91fc5e29c120bae0fd336f07721afbad04"
          },
          {
            "path": "library/components/field/layout.css",
            "sha256": "271b5f27c5a698593e4afbb34856e009875da6fb8acffe2d46fab5ced2b4c4d1"
          },
          {
            "path": "library/components/field/behavior.scxml",
            "sha256": "c49d2f90e8a64f695d0598b608d4e56e9638c1e0492f7b36f62fe0a428fbb9c7"
          },
          {
            "path": "library/components/field/accessibility.html",
            "sha256": "4eb6d6d88cb38da7dae4cbfb3723618edb7091f65b583ace7ca704ad552bbe90"
          },
          {
            "path": "library/components/field/stories.json",
            "sha256": "01d955533fb1e533abe570c3772309a2ab966f107f37bec2faf191fdb1cf3c5c"
          },
          {
            "path": "library/components/field/ux.json",
            "sha256": "1795fad95eff8188dbd161eccd9cb403a7e21c2e395bcef45edd726836ba29d9"
          },
          {
            "path": "library/components/input/component.json",
            "sha256": "8884e8fb31692d48ffc5653c83ebe572c969c94bccbc060129f58c78870fbad9"
          },
          {
            "path": "library/components/input/layout.css",
            "sha256": "552d3a1e30f3a1b7283eb6ac362acbc2cd0e9bf9916e7101c72ca3e75283b6b3"
          }
        ],
        "previewItems": [
          "vertical",
          "horizontal"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Präsentationskomposition: vertikal, horizontal und responsive. Labels, Validierung und gesperrte Eingaben gehören dem Caller. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ],
    "states": [
      {
        "id": "field-states",
        "title": "Fehler und Sperre trennen",
        "description": "Dasselbe Kontaktfeld zeigt einen Fehler oder ist deaktiviert. Eine Sperre ist kein Fehler.",
        "layout": "wide",
        "items": [
          {
            "id": "valid",
            "title": "Ohne Fehlerrückmeldung",
            "description": "Eingabe ohne eingeblendete Fehlermeldung."
          },
          {
            "id": "vertical-invalid-field",
            "title": "Fehler",
            "description": "Gleicher Wert mit Korrekturhinweis."
          },
          {
            "id": "error-list",
            "title": "Mehrere Korrekturhinweise",
            "description": "Zwei getrennte Anforderungen unter dem Feld."
          },
          {
            "id": "disabled-control",
            "title": "Deaktiviert",
            "description": "Gleicher Wert ohne Fehlermeldung; Eingabe gesperrt."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/field/component.json",
            "sha256": "e4c1ebfe9175297fdefae4a02302a6ec5963ac1be9287a37102be3453d6307c6"
          },
          {
            "path": "library/components/field/interface.json",
            "sha256": "f74a802b6119da16301bbea937d05a91fc5e29c120bae0fd336f07721afbad04"
          },
          {
            "path": "library/components/field/layout.css",
            "sha256": "271b5f27c5a698593e4afbb34856e009875da6fb8acffe2d46fab5ced2b4c4d1"
          },
          {
            "path": "library/components/field/behavior.scxml",
            "sha256": "c49d2f90e8a64f695d0598b608d4e56e9638c1e0492f7b36f62fe0a428fbb9c7"
          },
          {
            "path": "library/components/field/accessibility.html",
            "sha256": "4eb6d6d88cb38da7dae4cbfb3723618edb7091f65b583ace7ca704ad552bbe90"
          },
          {
            "path": "library/components/field/stories.json",
            "sha256": "01d955533fb1e533abe570c3772309a2ab966f107f37bec2faf191fdb1cf3c5c"
          },
          {
            "path": "library/components/field/ux.json",
            "sha256": "1795fad95eff8188dbd161eccd9cb403a7e21c2e395bcef45edd726836ba29d9"
          },
          {
            "path": "library/components/input/component.json",
            "sha256": "8884e8fb31692d48ffc5653c83ebe572c969c94bccbc060129f58c78870fbad9"
          },
          {
            "path": "library/components/input/layout.css",
            "sha256": "552d3a1e30f3a1b7283eb6ac362acbc2cd0e9bf9916e7101c72ca3e75283b6b3"
          }
        ],
        "previewItems": [
          "valid",
          "vertical-invalid-field",
          "disabled-control"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Präsentationskomposition: vertikal, horizontal und responsive. Labels, Validierung und gesperrte Eingaben gehören dem Caller. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ]
  },
  "label": {
    "variants": [
      {
        "id": "label-variants",
        "title": "Ein Feld eindeutig benennen",
        "description": "Label und gestaltetes Eingabefeld bleiben gleich. Die zweite Ansicht zeigt nur die Deaktivierung.",
        "layout": "compact",
        "items": [
          {
            "id": "named-input",
            "title": "Verfügbar",
            "description": "Projektname und Wert sind klar verbunden."
          },
          {
            "id": "disabled-host-field",
            "title": "Deaktiviert",
            "description": "Gleiche Beschriftung und gleicher Wert mit reduzierter Betonung."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/label/component.json",
            "sha256": "97c6699f51066f2bd7e3cc1de6bf75367512f15715feee5f1f3c15b2c8fb0ef6"
          },
          {
            "path": "library/components/label/interface.json",
            "sha256": "d43b63c0ac544ba2ca657adeffdb97b40d6807d94f896d9f32b7f718cae78414"
          },
          {
            "path": "library/components/label/layout.css",
            "sha256": "d6848c476d1a5c4cfe2bba11af327995d97dacb4236ce3f8411c31e7ac8ad033"
          },
          {
            "path": "library/components/label/behavior.scxml",
            "sha256": "ad69057857756b6f60d9e80b6655f79ac796dfcb6900e08e9675be80480239ed"
          },
          {
            "path": "library/components/label/accessibility.html",
            "sha256": "1114227fd4033de640871608b44f3c2af9d39f8b206150614e38cc87c0344839"
          },
          {
            "path": "library/components/label/stories.json",
            "sha256": "bd4fce950e7ec5519f0aabdbcba8b3d9efcb0fe5205950168454a13ac9b3c470"
          },
          {
            "path": "library/components/label/ux.json",
            "sha256": "826524e64c54d2a4e6824f3ff922386b7ae0ff93c7ddfa326b58ee8377292da7"
          },
          {
            "path": "library/components/input/component.json",
            "sha256": "8884e8fb31692d48ffc5653c83ebe572c969c94bccbc060129f58c78870fbad9"
          },
          {
            "path": "library/components/input/layout.css",
            "sha256": "552d3a1e30f3a1b7283eb6ac362acbc2cd0e9bf9916e7101c72ca3e75283b6b3"
          }
        ],
        "previewItems": [
          "named-input",
          "disabled-host-field"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Native Label-Komposition mit zugehörigem Feld; abgedunkelte Darstellung ist Caller-Kontext. Keine eigene Ablaufsteuerung. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ],
    "states": []
  },
  "questionnaire": {
    "variants": [
      {
        "id": "questionnaire-variants",
        "title": "Die passende Antwortform",
        "description": "Vergleiche den Antwortbereich als Einfachauswahl, Mehrfachauswahl oder Texteingabe.",
        "layout": "wide",
        "items": [
          {
            "id": "required-plan",
            "title": "Eine Antwort",
            "description": "Eine verfügbare Option ist erforderlich."
          },
          {
            "id": "selected-checkbox",
            "title": "Mehrere Antworten",
            "description": "Themen sind unabhängig wählbar; Überspringen bleibt möglich."
          },
          {
            "id": "contact-input",
            "title": "Texteingabe",
            "description": "Ein einzelnes E-Mail-Feld für den Bericht."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/questionnaire/component.json",
            "sha256": "57e6e06e7e4e76140496bb9cb67259ce39b1b6af237daf9741dcf9cdb33203f9"
          },
          {
            "path": "library/components/questionnaire/interface.json",
            "sha256": "e2254c34ae704ea3d4615aca1ea15b7d8e7791e08325233b1bd981819f62379a"
          },
          {
            "path": "library/components/questionnaire/layout.css",
            "sha256": "fa050a0e2411543cecb4e8cbb5e7ec370ccb137bd1256874675068706cac7eb8"
          },
          {
            "path": "library/components/questionnaire/behavior.scxml",
            "sha256": "fbcb6571a814c8ff4166a02b7b17b63404fc5c204c0e3b2f35bbcb8a94b413b7"
          },
          {
            "path": "library/components/questionnaire/accessibility.html",
            "sha256": "9738db284f4cdf49a42127730c19673ad459b22869bd7301012f5c5cdcba85ed"
          },
          {
            "path": "library/components/questionnaire/stories.json",
            "sha256": "e873645d2374f3c0c2157017e2ac79b002e489e25691fbdfe471e9ca7e18209c"
          },
          {
            "path": "library/components/questionnaire/ux.json",
            "sha256": "3de006d37925095a708959c4f45bf1c662bb1451d567a06f889119c9764fab58"
          }
        ],
        "previewItems": [
          "required-plan",
          "selected-checkbox"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Quellenbelegte Formularstufen: Einfachauswahl, Mehrfachauswahl und Texteingabe. Aktiver Schritt, Antworten und Validierung bleiben getrennt. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ],
    "states": [
      {
        "id": "questionnaire-states",
        "title": "Antwort und Korrektur",
        "description": "Vergleiche eine beantwortete Frage mit einer fehlenden oder ungültigen Antwort.",
        "layout": "wide",
        "items": [
          {
            "id": "selected-radio",
            "title": "Beantwortet",
            "description": "Kompakt ist gewählt; Weiter bleibt ein eigener Schritt."
          },
          {
            "id": "invalid-plan",
            "title": "Antwort fehlt",
            "description": "Die Frage bleibt sichtbar und fordert eine Auswahl."
          },
          {
            "id": "invalid-contact",
            "title": "E-Mail fehlt oder ist ungültig",
            "description": "Der Hinweis bleibt direkt bei der Kontaktadresse."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/questionnaire/component.json",
            "sha256": "57e6e06e7e4e76140496bb9cb67259ce39b1b6af237daf9741dcf9cdb33203f9"
          },
          {
            "path": "library/components/questionnaire/interface.json",
            "sha256": "e2254c34ae704ea3d4615aca1ea15b7d8e7791e08325233b1bd981819f62379a"
          },
          {
            "path": "library/components/questionnaire/layout.css",
            "sha256": "fa050a0e2411543cecb4e8cbb5e7ec370ccb137bd1256874675068706cac7eb8"
          },
          {
            "path": "library/components/questionnaire/behavior.scxml",
            "sha256": "fbcb6571a814c8ff4166a02b7b17b63404fc5c204c0e3b2f35bbcb8a94b413b7"
          },
          {
            "path": "library/components/questionnaire/accessibility.html",
            "sha256": "9738db284f4cdf49a42127730c19673ad459b22869bd7301012f5c5cdcba85ed"
          },
          {
            "path": "library/components/questionnaire/stories.json",
            "sha256": "e873645d2374f3c0c2157017e2ac79b002e489e25691fbdfe471e9ca7e18209c"
          },
          {
            "path": "library/components/questionnaire/ux.json",
            "sha256": "3de006d37925095a708959c4f45bf1c662bb1451d567a06f889119c9764fab58"
          }
        ],
        "previewItems": [
          "selected-radio",
          "invalid-plan"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Quellenbelegte Formularstufen: Einfachauswahl, Mehrfachauswahl und Texteingabe. Aktiver Schritt, Antworten und Validierung bleiben getrennt. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ]
  },
  "button-group": {
    "variants": [
      {
        "id": "button-group-variants",
        "title": "Verwandte Aktionen gruppieren",
        "description": "Ordne Speichern und Exportieren waagrecht oder senkrecht an.",
        "layout": "wide",
        "items": [
          {
            "id": "implicit-default",
            "title": "Horizontal · Standard",
            "description": "Verbunde Aktionen teilen ihre horizontalen Innenkanten."
          },
          {
            "id": "horizontal-with-text",
            "title": "Horizontal · Textzusatz",
            "description": "Ein Textzusatz und Aktionen bilden eine gemeinsame Gruppe."
          },
          {
            "id": "vertical",
            "title": "Vertikal",
            "description": "Die Aktionen stehen untereinander und teilen die waagerechten Innenkanten."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/button-group/component.json",
            "sha256": "dda8c3955ccd6894b438fe5ce7d73c65aad7d05a70ff82721f2ba1896cf07df2"
          },
          {
            "path": "library/components/button-group/interface.json",
            "sha256": "50d900b9db89691e3b0c13af075862a474f87fc9da0f375fa1af72a4be479921"
          },
          {
            "path": "library/components/button-group/layout.css",
            "sha256": "4f4e6f2358249fa33d50af96779d49225f8832a67574e6b848d442d439c89217"
          },
          {
            "path": "library/components/button-group/behavior.scxml",
            "sha256": "ef0bab0d4bf531654a89aa84045146206e7d4cddae32ba036675899a7ffd753e"
          },
          {
            "path": "library/components/button-group/accessibility.html",
            "sha256": "75a3c391e38d89a4500ba0d29a7d092910d4254d930417a281535f3a588b2e45"
          },
          {
            "path": "library/components/button-group/stories.json",
            "sha256": "af15e289d46bf9bc4ccdd638f7bbb0ceac50932adc02cca710abe9aa1e5f7cab"
          },
          {
            "path": "library/components/button-group/ux.json",
            "sha256": "24e4e806ae41ac039c9c4e59bc4c451d6c9074293a800918c69200767a1f6f07"
          }
        ],
        "previewItems": [
          "implicit-default",
          "vertical"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Horizontale oder vertikale Verbindung realer Buttons. Kein Gruppen-Auswahlwert; Sperre und Fokus betreffen die Kinder. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ],
    "states": [
      {
        "id": "button-group-states",
        "title": "Fokus und gesperrte Aktionen",
        "description": "Die Gruppe bleibt gleich; jede Aktion behält ihren eigenen Zustand.",
        "layout": "wide",
        "items": [
          {
            "id": "disabled-descendants",
            "title": "Aktionen deaktiviert",
            "description": "Beide Aktionen sind gesperrt und abgeblendet."
          },
          {
            "id": "focus",
            "title": "Tastaturfokus",
            "description": "Der Ring kennzeichnet das aktuelle Eingabeziel."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/button-group/component.json",
            "sha256": "dda8c3955ccd6894b438fe5ce7d73c65aad7d05a70ff82721f2ba1896cf07df2"
          },
          {
            "path": "library/components/button-group/interface.json",
            "sha256": "50d900b9db89691e3b0c13af075862a474f87fc9da0f375fa1af72a4be479921"
          },
          {
            "path": "library/components/button-group/layout.css",
            "sha256": "4f4e6f2358249fa33d50af96779d49225f8832a67574e6b848d442d439c89217"
          },
          {
            "path": "library/components/button-group/behavior.scxml",
            "sha256": "ef0bab0d4bf531654a89aa84045146206e7d4cddae32ba036675899a7ffd753e"
          },
          {
            "path": "library/components/button-group/accessibility.html",
            "sha256": "75a3c391e38d89a4500ba0d29a7d092910d4254d930417a281535f3a588b2e45"
          },
          {
            "path": "library/components/button-group/stories.json",
            "sha256": "af15e289d46bf9bc4ccdd638f7bbb0ceac50932adc02cca710abe9aa1e5f7cab"
          },
          {
            "path": "library/components/button-group/ux.json",
            "sha256": "24e4e806ae41ac039c9c4e59bc4c451d6c9074293a800918c69200767a1f6f07"
          }
        ],
        "previewItems": [
          "focus",
          "disabled-descendants"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Horizontale oder vertikale Verbindung realer Buttons. Kein Gruppen-Auswahlwert; Sperre und Fokus betreffen die Kinder. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ]
  },
  "kbd": {
    "variants": [
      {
        "id": "kbd-variants",
        "title": "Tastenkürzel lesbar zeigen",
        "description": "Eine Kombination besteht aus einzelnen Tastenkappen; lange Namen brauchen mehr Platz.",
        "layout": "compact",
        "items": [
          {
            "id": "shortcut-group",
            "title": "Tastenkombination",
            "description": "Strg und S gemeinsam drücken."
          },
          {
            "id": "single-key",
            "title": "Einzelne Taste",
            "description": "Die Eingabetaste wird allein gezeigt."
          },
          {
            "id": "long-key",
            "title": "Langer Name",
            "description": "Die Tastenkappe wächst mit dem Namen."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/kbd/component.json",
            "sha256": "df932f5d5b0f33a3df24db200757b0d4c5f6bc2eb5f53424dddcf7b6cbe6bbb7"
          },
          {
            "path": "library/components/kbd/interface.json",
            "sha256": "22124aa47366426257fe6dde0823e468f630f2fa503e62c4094ea437155823e0"
          },
          {
            "path": "library/components/kbd/layout.css",
            "sha256": "b9e14739e49dbc69b2b13e75f918e510ad3ac784c3ec1e0c088b1ec61ea676a1"
          },
          {
            "path": "library/components/kbd/behavior.scxml",
            "sha256": "113d5d329ad1faadea511c97ee5155c4baa6403050a5124b96dcfc7eaa6877fc"
          },
          {
            "path": "library/components/kbd/accessibility.html",
            "sha256": "57beb104ec39b57f9c146f77d04aa23f299f648166d350e57af8b56853706e20"
          },
          {
            "path": "library/components/kbd/stories.json",
            "sha256": "25b0d2c7322dc6e5ba667762c067ee98cc9579e0fdfc3cfb76366521e4cc4c34"
          },
          {
            "path": "library/components/kbd/ux.json",
            "sha256": "8d2cc84d0a353177833dd1bfff32c8dbc28449253c5bbf90ed5a024f7ceebb07"
          }
        ],
        "previewItems": [
          "shortcut-group",
          "single-key",
          "long-key"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Native kbd-Notation: 20 px Mindesthöhe, 6 px Ecken, 12/16 px Text. Keine eigene Ablaufsteuerung oder Shortcut-Ausführung. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ],
    "states": []
  },
  "alert": {
    "variants": [
      {
        "id": "alert-variants",
        "title": "Hinweise gewichten",
        "description": "Derselbe Verbindungsfehler erscheint neutral oder mit Fehlerbetonung.",
        "layout": "wide",
        "items": [
          {
            "id": "default",
            "title": "Standard",
            "description": "Titel und Erläuterung bilden einen Hinweis mit optionaler Aktion."
          },
          {
            "id": "destructive",
            "title": "Fehlerbetont",
            "description": "Gleicher Inhalt mit deutlicher Fehlerfarbe."
          },
          {
            "id": "without-icon-action",
            "title": "Ohne Symbol und Aktion",
            "description": "Titel und Erklärung nutzen die volle Breite."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/alert/component.json",
            "sha256": "8ac3c45f549d4db1d729d2b9665f8ce1343465f32e55b6574927d8755737c0d6"
          },
          {
            "path": "library/components/alert/interface.json",
            "sha256": "694386ab3d92c627adaf85c3b93a1aae2ebd940a09306df422d9781e7fe129a2"
          },
          {
            "path": "library/components/alert/layout.css",
            "sha256": "4de3771d7490590f28bf456036d5ae8327f7bd10af0ce94ce735de66b727bc5c"
          },
          {
            "path": "library/components/alert/behavior.scxml",
            "sha256": "13b523fc9c6b82e2466aadfb150bcf1f092cd0c296b7b633649d7cc749e2ca7a"
          },
          {
            "path": "library/components/alert/accessibility.html",
            "sha256": "7bdedf7e0bb44a4bc6d9cbcaca9bd5233f035c9e201dd7b90b4f8119f58dfe72"
          },
          {
            "path": "library/components/alert/stories.json",
            "sha256": "ea92d6ee93e99571893591a9ddccbea10b9ad68e10b8a13dc33e4209110158b2"
          },
          {
            "path": "library/components/alert/ux.json",
            "sha256": "dead2b20824e2aa58d0f0c45ed519a9e24a7ec335ef2c7458e65b38085f5d8d3"
          },
          {
            "path": "library/components/button/component.json",
            "sha256": "d66069ec8ef2100ae4e509198f62ee055c9461d159d1e40e949f422d9186b026"
          },
          {
            "path": "library/components/button/layout.css",
            "sha256": "3c3bc15b71a3cde0d3f3980368a4660ee23485e652830c978c3c1decdaa81f96"
          }
        ],
        "previewItems": [
          "default",
          "destructive"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "default/destructive und optionale Icon-/Aktionskomposition. Keine eigene Ablaufsteuerung; Text und Aktionen gehören dem Caller. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ],
    "states": []
  },
  "toast": {
    "variants": [
      {
        "id": "toast-variants",
        "title": "Mit oder ohne Symbol",
        "description": "Das Symbol macht die Meldungsart zusätzlich erkennbar. Der Text bleibt gleich.",
        "layout": "wide",
        "items": [
          {
            "id": "persistent",
            "title": "Ohne Symbol",
            "description": "Archivierte Sitzungsnotiz mit Aktion Rückgängig."
          },
          {
            "id": "typed-icon",
            "title": "Erfolgssymbol",
            "description": "Gleiche Meldung und Aktion; nur das Symbol kommt hinzu."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/toast/component.json",
            "sha256": "0923c29f982f0ee2c9dab039eaa9e3dd196c98f2bcf72a41080470dc0434a7f9"
          },
          {
            "path": "library/components/toast/interface.json",
            "sha256": "361deefb4ff4e0079341eb440b2e44250e0b8f449f3e4dc55aa924b50bebb05c"
          },
          {
            "path": "library/components/toast/layout.css",
            "sha256": "ff2fb00ce9b7ea70bc31c08c3c69817e4ef2ba7cbdf564e922f6adaed096c83e"
          },
          {
            "path": "library/components/toast/behavior.scxml",
            "sha256": "6cd4dd60ccf95baa32564b369d2d703f8d360e310ac10e53b45b5b13c5e03c54"
          },
          {
            "path": "library/components/toast/accessibility.html",
            "sha256": "3b336553784a615875ec1b7915ea31650c4832302f4346e1162588a9f2a74dc8"
          },
          {
            "path": "library/components/toast/stories.json",
            "sha256": "bba81c4b7bcf04d9bce4ead6953986b67f4427652f1679afc987a7cf562fa11b"
          },
          {
            "path": "library/components/toast/ux.json",
            "sha256": "17dcd8f03095e82d2dfdadaa490191d7a66979718bbe09d330de89c2285985ad"
          }
        ],
        "previewItems": [
          "persistent",
          "typed-icon"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Persistentes Feedback, Typ-Icon und zusammen-/aufgeklappter Stapel. Statische Ansichten belegen keine Timer-, Swipe- oder Fokusfunktion. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ],
    "states": [
      {
        "id": "toast-states",
        "title": "Mitteilungen zusammenfassen",
        "description": "Vergleiche zusammengeklappte und aufgeklappte Mitteilungen. Die Aktion kann separat deaktiviert sein.",
        "layout": "wide",
        "items": [
          {
            "id": "stack-collapsed",
            "title": "Stapel kompakt",
            "description": "Die vorderste Mitteilung bleibt lesbar."
          },
          {
            "id": "stack-expanded",
            "title": "Stapel aufgeklappt",
            "description": "Alle drei Mitteilungen sind sichtbar."
          },
          {
            "id": "disabled-action",
            "title": "Aktion deaktiviert",
            "description": "Die Mitteilung bleibt lesbar; Rückgängig ist gesperrt."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/toast/component.json",
            "sha256": "0923c29f982f0ee2c9dab039eaa9e3dd196c98f2bcf72a41080470dc0434a7f9"
          },
          {
            "path": "library/components/toast/interface.json",
            "sha256": "361deefb4ff4e0079341eb440b2e44250e0b8f449f3e4dc55aa924b50bebb05c"
          },
          {
            "path": "library/components/toast/layout.css",
            "sha256": "ff2fb00ce9b7ea70bc31c08c3c69817e4ef2ba7cbdf564e922f6adaed096c83e"
          },
          {
            "path": "library/components/toast/behavior.scxml",
            "sha256": "6cd4dd60ccf95baa32564b369d2d703f8d360e310ac10e53b45b5b13c5e03c54"
          },
          {
            "path": "library/components/toast/accessibility.html",
            "sha256": "3b336553784a615875ec1b7915ea31650c4832302f4346e1162588a9f2a74dc8"
          },
          {
            "path": "library/components/toast/stories.json",
            "sha256": "bba81c4b7bcf04d9bce4ead6953986b67f4427652f1679afc987a7cf562fa11b"
          },
          {
            "path": "library/components/toast/ux.json",
            "sha256": "17dcd8f03095e82d2dfdadaa490191d7a66979718bbe09d330de89c2285985ad"
          }
        ],
        "previewItems": [
          "stack-collapsed",
          "stack-expanded"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Persistentes Feedback, Typ-Icon und zusammen-/aufgeklappter Stapel. Statische Ansichten belegen keine Timer-, Swipe- oder Fokusfunktion. Aufgeklappt stehen die Karten als redaktionelle statische Komposition mit ihren natürlichen Texthöhen untereinander. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ]
  },
  "empty": {
    "variants": [
      {
        "id": "empty-variants",
        "title": "Einen leeren Bereich erklären",
        "description": "Die Erklärung bleibt gleich. Vergleiche die Bildfläche und den nächsten Schritt.",
        "layout": "wide",
        "items": [
          {
            "id": "empty-with-recovery",
            "title": "Mit Symbol",
            "description": "Symbol, Erklärung und nächster Schritt."
          },
          {
            "id": "text-only",
            "title": "Ohne Symbol",
            "description": "Gleicher Text und gleiche Aktion ohne Bildfläche."
          },
          {
            "id": "default-media",
            "title": "Mit freier Bildfläche",
            "description": "Gleicher Text mit einer nicht eingerahmten Illustration."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/empty/component.json",
            "sha256": "101352130f80b92e25ba1cbc230505ddfc9287331c42a1c7f5b9546be898cd2d"
          },
          {
            "path": "library/components/empty/interface.json",
            "sha256": "81101766a75d644fd245667485e16bd6c08ddd0b90a4d663957c33ffed3a3786"
          },
          {
            "path": "library/components/empty/layout.css",
            "sha256": "912d11ecbf8df717208317ed325e434a27dd5935ff4d93477a8f78302d50256d"
          },
          {
            "path": "library/components/empty/behavior.scxml",
            "sha256": "7dc3d2acf54e884c1896db75a874e8fd17df1c5dbaeb3ed44ad51bf64068d33f"
          },
          {
            "path": "library/components/empty/accessibility.html",
            "sha256": "45b46f5c9cdab301025bfc58296410f2ba16402a987d1fe7416cd7e7db6493ea"
          },
          {
            "path": "library/components/empty/stories.json",
            "sha256": "4dd00ee848268f2d38a5d3c1b3face300aa1506afb282ea100c6e1616f84331b"
          },
          {
            "path": "library/components/empty/ux.json",
            "sha256": "d26e4ebe0b9aaf54755ed7f258125a70a59bd2773dff8a88dbf1194a1c584d3c"
          },
          {
            "path": "library/components/button/component.json",
            "sha256": "d66069ec8ef2100ae4e509198f62ee055c9461d159d1e40e949f422d9186b026"
          },
          {
            "path": "library/components/button/layout.css",
            "sha256": "3c3bc15b71a3cde0d3f3980368a4660ee23485e652830c978c3c1decdaa81f96"
          }
        ],
        "previewItems": [
          "empty-with-recovery",
          "text-only"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Leerer Inhalt mit Recovery, Text oder Media. Icon ist eine Media-Variante; keine eigene Lade-/Fehler-Ablaufsteuerung. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ],
    "states": []
  },
  "progress": {
    "variants": [
      {
        "id": "progress-variants",
        "title": "Bekannten Fortschritt anzeigen",
        "description": "Der Balken zeigt, wie weit der Upload des Berichts fortgeschritten ist.",
        "layout": "compact",
        "items": [
          {
            "id": "value-40",
            "title": "40 %",
            "description": "Der Upload läuft."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/progress/component.json",
            "sha256": "b9b20d1b9b2db7cac8efb1fc25488051ba06bce2c2e72d9cb7d03204924d0a09"
          },
          {
            "path": "library/components/progress/interface.json",
            "sha256": "f2979f6b1117931cb9633beca85a248e06c3e1ec498d46d54458558079625ae3"
          },
          {
            "path": "library/components/progress/layout.css",
            "sha256": "a071754983ae32da652e7d4be657ab4284192997ac63122120de14d3f36c0074"
          },
          {
            "path": "library/components/progress/behavior.scxml",
            "sha256": "ffb1bc1f9541150cf76b3c47546b9ed2309009f72d31246bec2dbe7cb8ce6d88"
          },
          {
            "path": "library/components/progress/accessibility.html",
            "sha256": "a8047c82a6f02790213d8f7163959c0b2570e2b19241cac47409632dd2dd90ed"
          },
          {
            "path": "library/components/progress/stories.json",
            "sha256": "2b51ed14daad7e2bc7c73788cec2c6065fda247e194524140f36b76614c37966"
          },
          {
            "path": "library/components/progress/ux.json",
            "sha256": "06d772daee5745becf0d9bd21be0c1fe44f4fc6b70c7f6cd4b3784dcca8f0dfb"
          }
        ],
        "previewItems": [
          "value-40"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "4 px Schiene; Wert ist numerisch oder unbekannt. Unbestimmt zeigt das Referenz-CSS ein zentriertes 35%-Segment. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ],
    "states": [
      {
        "id": "progress-states",
        "title": "Beginn, Abschluss und offene Dauer",
        "description": "Ein unbekannter Fortschritt darf keinen erfundenen Prozentwert zeigen.",
        "layout": "compact",
        "items": [
          {
            "id": "value-0",
            "title": "0 %",
            "description": "Der Upload beginnt."
          },
          {
            "id": "value-100",
            "title": "100 %",
            "description": "Der Upload hat seinen Zielwert erreicht."
          },
          {
            "id": "indeterminate",
            "title": "Fortschritt unbekannt",
            "description": "Ohne Prozentzahl, bis der Fortschritt bekannt ist."
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/progress/component.json",
            "sha256": "b9b20d1b9b2db7cac8efb1fc25488051ba06bce2c2e72d9cb7d03204924d0a09"
          },
          {
            "path": "library/components/progress/interface.json",
            "sha256": "f2979f6b1117931cb9633beca85a248e06c3e1ec498d46d54458558079625ae3"
          },
          {
            "path": "library/components/progress/layout.css",
            "sha256": "a071754983ae32da652e7d4be657ab4284192997ac63122120de14d3f36c0074"
          },
          {
            "path": "library/components/progress/behavior.scxml",
            "sha256": "ffb1bc1f9541150cf76b3c47546b9ed2309009f72d31246bec2dbe7cb8ce6d88"
          },
          {
            "path": "library/components/progress/accessibility.html",
            "sha256": "a8047c82a6f02790213d8f7163959c0b2570e2b19241cac47409632dd2dd90ed"
          },
          {
            "path": "library/components/progress/stories.json",
            "sha256": "2b51ed14daad7e2bc7c73788cec2c6065fda247e194524140f36b76614c37966"
          },
          {
            "path": "library/components/progress/ux.json",
            "sha256": "06d772daee5745becf0d9bd21be0c1fe44f4fc6b70c7f6cd4b3784dcca8f0dfb"
          }
        ],
        "previewItems": [
          "value-0",
          "value-100",
          "indeterminate"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "4 px Schiene; Wert ist numerisch oder unbekannt. Unbestimmt zeigt das Referenz-CSS ein zentriertes 35%-Segment. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ]
  },
  "spinner": {
    "variants": [
      {
        "id": "spinner-variants",
        "title": "Grösse zum Kontext wählen",
        "description": "Derselbe Ladehinweis passt als kleines Symbol ins Feld oder grösser in eine freie Fläche.",
        "layout": "compact",
        "items": [
          {
            "id": "loading-small",
            "title": "Klein",
            "description": "12 px"
          },
          {
            "id": "loading-default",
            "title": "Standard",
            "description": "16 px"
          },
          {
            "id": "loading-large",
            "title": "Gross",
            "description": "20 px"
          },
          {
            "id": "loading-extra-large",
            "title": "Sehr gross",
            "description": "24 px"
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/spinner/component.json",
            "sha256": "f893e46acd6ca7659f9c6a6ac685dc7e911858f79b7b1509efa640287e8e709e"
          },
          {
            "path": "library/components/spinner/interface.json",
            "sha256": "e25ae6c20f5e23a6c60a42916db16ff29d07d3ab94ba885972c194b4ee667990"
          },
          {
            "path": "library/components/spinner/layout.css",
            "sha256": "b0868974f51f6e84620c082401275609d5ecd4f4ef53eab0953761bf48e59ecc"
          },
          {
            "path": "library/components/spinner/behavior.scxml",
            "sha256": "eb0f41e065a95a1698ebd718d7999972530fc0b09b1b9fed6baff071d02e3ea8"
          },
          {
            "path": "library/components/spinner/accessibility.html",
            "sha256": "39f3a21062f038d380d79eb332c6c89db0514730b9593cc2c2ae5d5e942c8b1b"
          },
          {
            "path": "library/components/spinner/stories.json",
            "sha256": "71ac5a36acb845b1963499564a2bd80a39020fbfef67891d0c83698566764985"
          },
          {
            "path": "library/components/spinner/ux.json",
            "sha256": "08bab06b209e969fa7854b7d2878349edd7673b847d4b1a7341ce05728323053"
          }
        ],
        "previewItems": [
          "loading-small",
          "loading-default",
          "loading-large",
          "loading-extra-large"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "12/16/20/24 px über Caller-Klassen, keine öffentliche size-Prop. Statisch eingefrorener Indikator; keine eigene Aufgabensteuerung. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ],
    "states": []
  },
  "skeleton": {
    "variants": [
      {
        "id": "skeleton-variants",
        "title": "Platz für kommende Inhalte halten",
        "description": "Wähle die Ladeform passend zur späteren Textzeile, zum Profilbild oder zur Karte.",
        "layout": "compact",
        "items": [
          {
            "id": "loading-text",
            "title": "Textzeile",
            "description": "16 px hoch"
          },
          {
            "id": "loading-avatar",
            "title": "Profilbild",
            "description": "40 × 40 px"
          },
          {
            "id": "loading-card",
            "title": "Karte",
            "description": "125 px hoch"
          }
        ],
        "sourceReferences": [
          {
            "path": "library/components/skeleton/component.json",
            "sha256": "3081f125ae0056434c2ceeac8429870947e993e272cd2423a6fcbc324e5c04f9"
          },
          {
            "path": "library/components/skeleton/interface.json",
            "sha256": "a9e12030ac68c6098abc3a082222b537fb3e67e8678e8264796c9824409d8b7c"
          },
          {
            "path": "library/components/skeleton/layout.css",
            "sha256": "d2c893fb1b07504c381b7cd668f00128b23f5117f92dfb4d76eeff5f14070ba3"
          },
          {
            "path": "library/components/skeleton/behavior.scxml",
            "sha256": "60e4c2fb59ad694a6738b49db1e554fe64d8f1d62f3d1632069a8707647d96dc"
          },
          {
            "path": "library/components/skeleton/accessibility.html",
            "sha256": "eee8cdfd4f40c2b6673f82297d8afd9527a15a7a893f90e30eba41e8dd8e5a02"
          },
          {
            "path": "library/components/skeleton/stories.json",
            "sha256": "d5d464a5783c6d6162cba002f72b28e6ee3f6a59a95d248948cd44685bc6fdec"
          },
          {
            "path": "library/components/skeleton/ux.json",
            "sha256": "d09d68837686e1837968b0d8e8f1a6d397b4532902b4924aaf28fb440c990504"
          }
        ],
        "previewItems": [
          "loading-text",
          "loading-avatar",
          "loading-card"
        ],
        "detailsLabel": "Weitere Vergleiche",
        "technicalNotes": "Text 16 px, Avatar 40 px, Karte 125 px über Caller-Klassen. Dekorative Geometrie; Host liefert den lesbaren Ladestatus. Statische, redaktionell lokalisierte Illustration aus den verknüpften Contractquellen. Die Darstellung belegt keinen ausgeführten Bedienablauf."
      }
    ],
    "states": []
  }
}

const specimens: Record<string, string> = {
  "combobox/combobox-variants/single-selection": "<label id=\"ff-combobox-single-selection-search-fruit-label\" for=\"ff-combobox-single-selection-search-fruit\">Abholort</label><div data-slot=\"input-group\" class=\"cn-combobox-input\" role=\"group\"><input tabindex=\"-1\" data-slot=\"input-group-control\" class=\"cn-input-group-input\" id=\"ff-combobox-single-selection-search-fruit\" aria-labelledby=\"ff-combobox-single-selection-search-fruit-label\" type=\"text\" role=\"combobox\" aria-autocomplete=\"list\" aria-expanded=\"false\" aria-describedby=\"ff-combobox-single-selection-fruit-help\" value=\"Bern\"><div data-slot=\"input-group-addon\" data-align=\"inline-end\"></div><button tabindex=\"-1\" data-slot=\"combobox-trigger\" type=\"button\" aria-label=\"Abholorte anzeigen\" aria-haspopup=\"listbox\" aria-expanded=\"false\">Orte<svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></button></div><p id=\"ff-combobox-single-selection-fruit-help\">Ort suchen und bestätigen.</p>",
  "combobox/combobox-variants/multiple-chips": "<label id=\"ff-combobox-multiple-chips-search-fruit-label\" for=\"ff-combobox-multiple-chips-search-fruit\">Abholorte</label><div data-slot=\"combobox-chips\" role=\"toolbar\" aria-label=\"Gewählte Abholorte\"><div data-slot=\"combobox-chip\" aria-label=\"Bern\">Bern<button tabindex=\"-1\" data-part=\"combobox-chip-remove\" type=\"button\" aria-label=\"Bern entfernen\">Entfernen</button></div><div data-slot=\"combobox-chip\" aria-label=\"Basel\">Basel<button tabindex=\"-1\" data-part=\"combobox-chip-remove\" type=\"button\" aria-label=\"Basel entfernen\">Entfernen</button></div><input tabindex=\"-1\" data-slot=\"combobox-chip-input\" id=\"ff-combobox-multiple-chips-search-fruit\" aria-labelledby=\"ff-combobox-multiple-chips-search-fruit-label\" role=\"combobox\" aria-autocomplete=\"list\" aria-expanded=\"false\" value=\"\"></div><p id=\"ff-combobox-multiple-chips-fruit-help\">Ort suchen und bestätigen.</p>",
  "combobox/combobox-states/closed": "<label id=\"ff-combobox-closed-search-fruit-label\" for=\"ff-combobox-closed-search-fruit\">Abholort</label><div data-slot=\"input-group\" class=\"cn-combobox-input\" role=\"group\"><input tabindex=\"-1\" data-slot=\"input-group-control\" class=\"cn-input-group-input\" id=\"ff-combobox-closed-search-fruit\" aria-labelledby=\"ff-combobox-closed-search-fruit-label\" type=\"text\" role=\"combobox\" aria-autocomplete=\"list\" aria-expanded=\"false\" aria-describedby=\"ff-combobox-closed-fruit-help\" value=\"\"><div data-slot=\"input-group-addon\" data-align=\"inline-end\"></div><button tabindex=\"-1\" data-slot=\"combobox-trigger\" type=\"button\" aria-label=\"Abholorte anzeigen\" aria-haspopup=\"listbox\" aria-expanded=\"false\">Orte<svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></button></div><p id=\"ff-combobox-closed-fruit-help\">Ort suchen und bestätigen.</p>",
  "combobox/combobox-states/selected-clear": "<label id=\"ff-combobox-selected-clear-search-fruit-label\" for=\"ff-combobox-selected-clear-search-fruit\">Abholort</label><div data-slot=\"input-group\" class=\"cn-combobox-input\" role=\"group\"><input tabindex=\"-1\" data-slot=\"input-group-control\" class=\"cn-input-group-input\" id=\"ff-combobox-selected-clear-search-fruit\" aria-labelledby=\"ff-combobox-selected-clear-search-fruit-label\" type=\"text\" role=\"combobox\" aria-autocomplete=\"list\" aria-expanded=\"false\" aria-describedby=\"ff-combobox-selected-clear-fruit-help\" value=\"Bern\"><div data-slot=\"input-group-addon\" data-align=\"inline-end\"></div><button tabindex=\"-1\" data-slot=\"combobox-trigger\" type=\"button\" aria-label=\"Abholorte anzeigen\" aria-haspopup=\"listbox\" aria-expanded=\"false\">Orte<svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></button><button tabindex=\"-1\" type=\"button\" data-part=\"combobox-clear\" aria-label=\"Abholort löschen\">Löschen</button></div><p id=\"ff-combobox-selected-clear-fruit-help\">Ort suchen und bestätigen.</p>",
  "combobox/combobox-states/empty": "<label id=\"ff-combobox-empty-search-fruit-label\" for=\"ff-combobox-empty-search-fruit\">Abholort</label><div data-slot=\"input-group\" class=\"cn-combobox-input\" role=\"group\"><input tabindex=\"-1\" data-slot=\"input-group-control\" class=\"cn-input-group-input\" id=\"ff-combobox-empty-search-fruit\" aria-labelledby=\"ff-combobox-empty-search-fruit-label\" type=\"text\" role=\"combobox\" aria-autocomplete=\"list\" aria-expanded=\"true\" aria-controls=\"ff-combobox-empty-fruit-list\" aria-describedby=\"ff-combobox-empty-fruit-help\" value=\"\"><div data-slot=\"input-group-addon\" data-align=\"inline-end\"></div><button tabindex=\"-1\" data-slot=\"combobox-trigger\" type=\"button\" aria-label=\"Abholorte anzeigen\" aria-haspopup=\"listbox\" aria-expanded=\"true\" aria-controls=\"ff-combobox-empty-fruit-list\">Orte<svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></button></div><p id=\"ff-combobox-empty-fruit-help\">Ort suchen und bestätigen.</p><div data-slot=\"combobox-content\" class=\"cn-menu-target\" role=\"presentation\" dir=\"ltr\" style=\"--available-width:320px;--available-height:400px;--anchor-width:256px\"><div data-slot=\"combobox-empty\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\">Kein Ort gefunden.</div><div data-slot=\"combobox-list\" role=\"listbox\" aria-label=\"Abholorte\" id=\"ff-combobox-empty-fruit-list\"></div></div>",
  "combobox/combobox-states/error": "<label id=\"ff-combobox-error-search-fruit-label\" for=\"ff-combobox-error-search-fruit\">Abholort</label><div data-slot=\"input-group\" class=\"cn-combobox-input\" role=\"group\"><input tabindex=\"-1\" data-slot=\"input-group-control\" class=\"cn-input-group-input\" id=\"ff-combobox-error-search-fruit\" aria-labelledby=\"ff-combobox-error-search-fruit-label\" type=\"text\" role=\"combobox\" aria-autocomplete=\"list\" aria-expanded=\"false\" aria-describedby=\"ff-combobox-error-fruit-help ff-combobox-error-fruit-error\" aria-invalid=\"true\" value=\"\"><div data-slot=\"input-group-addon\" data-align=\"inline-end\"></div><button tabindex=\"-1\" data-slot=\"combobox-trigger\" type=\"button\" aria-label=\"Abholorte anzeigen\" aria-haspopup=\"listbox\" aria-expanded=\"false\">Orte<svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></button></div><p id=\"ff-combobox-error-fruit-help\">Ort suchen und bestätigen.</p><p id=\"ff-combobox-error-fruit-error\">Bitte einen Ort aus der Liste wählen.</p>",
  "combobox/combobox-states/readonly": "<label id=\"ff-combobox-readonly-search-fruit-label\" for=\"ff-combobox-readonly-search-fruit\">Abholort</label><div data-slot=\"input-group\" class=\"cn-combobox-input\" role=\"group\"><input tabindex=\"-1\" data-slot=\"input-group-control\" class=\"cn-input-group-input\" id=\"ff-combobox-readonly-search-fruit\" aria-labelledby=\"ff-combobox-readonly-search-fruit-label\" type=\"text\" role=\"combobox\" aria-autocomplete=\"list\" aria-expanded=\"false\" aria-describedby=\"ff-combobox-readonly-fruit-help\" readonly value=\"\"><div data-slot=\"input-group-addon\" data-align=\"inline-end\"></div><button tabindex=\"-1\" data-slot=\"combobox-trigger\" type=\"button\" aria-label=\"Abholorte anzeigen\" aria-haspopup=\"listbox\" aria-expanded=\"false\">Orte<svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></button></div><p id=\"ff-combobox-readonly-fruit-help\">Ort suchen und bestätigen.</p>",
  "combobox/combobox-states/disabled": "<label id=\"ff-combobox-disabled-search-fruit-label\" for=\"ff-combobox-disabled-search-fruit\">Abholort</label><div data-slot=\"input-group\" class=\"cn-combobox-input\" role=\"group\"><input tabindex=\"-1\" data-slot=\"input-group-control\" class=\"cn-input-group-input\" id=\"ff-combobox-disabled-search-fruit\" aria-labelledby=\"ff-combobox-disabled-search-fruit-label\" type=\"text\" role=\"combobox\" aria-autocomplete=\"list\" aria-expanded=\"false\" aria-describedby=\"ff-combobox-disabled-fruit-help\" disabled value=\"\"><div data-slot=\"input-group-addon\" data-align=\"inline-end\"></div><button tabindex=\"-1\" data-slot=\"combobox-trigger\" type=\"button\" aria-label=\"Abholorte anzeigen\" aria-haspopup=\"listbox\" aria-expanded=\"false\">Orte<svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></button></div><p id=\"ff-combobox-disabled-fruit-help\">Ort suchen und bestätigen.</p>",
  "select/select-variants/open": "<div data-part=\"select-field\"><label for=\"ff-select-open-select-fruit\">Versandart</label><button tabindex=\"-1\" data-slot=\"select-trigger\" data-size=\"default\" type=\"button\" role=\"combobox\" id=\"ff-select-open-select-fruit\" aria-haspopup=\"listbox\" aria-expanded=\"false\" aria-describedby=\"ff-select-open-select-help\"><span data-slot=\"select-value\">Standard</span><svg class=\"cn-select-trigger-icon\" viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></button><p id=\"ff-select-open-select-help\">Eine Versandart wählen.</p><input tabindex=\"-1\" type=\"text\" name=\"fruit\" value=\"Standard\" aria-hidden=\"true\" style=\"position:absolute;inline-size:1px;block-size:1px;clip-path:inset(50%)\"></div>",
  "select/select-variants/small": "<div data-part=\"select-field\"><label for=\"ff-select-small-select-fruit\">Versandart</label><button tabindex=\"-1\" data-slot=\"select-trigger\" data-size=\"sm\" type=\"button\" role=\"combobox\" id=\"ff-select-small-select-fruit\" aria-haspopup=\"listbox\" aria-expanded=\"false\" aria-describedby=\"ff-select-small-select-help\"><span data-slot=\"select-value\">Standard</span><svg class=\"cn-select-trigger-icon\" viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></button><p id=\"ff-select-small-select-help\">Eine Versandart wählen.</p><input tabindex=\"-1\" type=\"text\" name=\"fruit\" value=\"Standard\" aria-hidden=\"true\" style=\"position:absolute;inline-size:1px;block-size:1px;clip-path:inset(50%)\"></div>",
  "select/select-variants/multiple": "<div data-part=\"select-field\"><label for=\"ff-select-multiple-select-fruit\">Angebotene Versandarten</label><button tabindex=\"-1\" data-slot=\"select-trigger\" data-size=\"default\" type=\"button\" role=\"combobox\" id=\"ff-select-multiple-select-fruit\" aria-haspopup=\"listbox\" aria-expanded=\"false\" aria-describedby=\"ff-select-multiple-select-help\"><span data-slot=\"select-value\">Standard, Express</span><svg class=\"cn-select-trigger-icon\" viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></button><p id=\"ff-select-multiple-select-help\">Separate Konfiguration: mehrere Versandarten anbieten.</p><input tabindex=\"-1\" type=\"text\" aria-hidden=\"true\" style=\"position:absolute;inline-size:1px;block-size:1px;clip-path:inset(50%)\"><input tabindex=\"-1\" type=\"hidden\" name=\"fruit\" value=\"Standard\"><input tabindex=\"-1\" type=\"hidden\" name=\"fruit\" value=\"Express\"></div>",
  "select/select-states/closed": "<div data-part=\"select-field\"><label for=\"ff-select-closed-select-fruit\">Versandart</label><button tabindex=\"-1\" data-slot=\"select-trigger\" data-size=\"default\" type=\"button\" role=\"combobox\" id=\"ff-select-closed-select-fruit\" aria-haspopup=\"listbox\" aria-expanded=\"false\" aria-describedby=\"ff-select-closed-select-help\"><span data-slot=\"select-value\">Standard</span><svg class=\"cn-select-trigger-icon\" viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></button><p id=\"ff-select-closed-select-help\">Eine Versandart wählen.</p><input tabindex=\"-1\" type=\"text\" name=\"fruit\" value=\"Standard\" aria-hidden=\"true\" style=\"position:absolute;inline-size:1px;block-size:1px;clip-path:inset(50%)\"></div>",
  "select/select-states/highlighted": "<div data-part=\"select-field\"><label for=\"ff-select-highlighted-select-fruit\">Versandart</label><button tabindex=\"-1\" data-slot=\"select-trigger\" data-size=\"default\" type=\"button\" role=\"combobox\" id=\"ff-select-highlighted-select-fruit\" aria-haspopup=\"listbox\" aria-expanded=\"true\" aria-controls=\"ff-select-highlighted-select-list\" aria-describedby=\"ff-select-highlighted-select-help\"><span data-slot=\"select-value\">Standard</span><svg class=\"cn-select-trigger-icon\" viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></button><p id=\"ff-select-highlighted-select-help\">Eine Versandart wählen.</p><input tabindex=\"-1\" type=\"text\" name=\"fruit\" value=\"Standard\" aria-hidden=\"true\" style=\"position:absolute;inline-size:1px;block-size:1px;clip-path:inset(50%)\"></div><div data-slot=\"select-content\" class=\"cn-menu-target\" data-align-trigger=\"true\" role=\"presentation\" dir=\"ltr\" style=\"--available-width:320px;--available-height:400px\"><div data-slot=\"select-scroll-up-button\" aria-hidden=\"true\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></div><div role=\"listbox\" id=\"ff-select-highlighted-select-list\"><div data-slot=\"select-group\" role=\"group\" aria-labelledby=\"ff-select-highlighted-select-options-label\"><div data-slot=\"select-label\" id=\"ff-select-highlighted-select-options-label\" aria-hidden=\"true\">Versandarten</div><div data-slot=\"select-item\" role=\"option\" aria-selected=\"true\"><div class=\"cn-select-item-text\">Standard</div><span class=\"cn-select-item-indicator\" aria-hidden=\"true\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m5 12 4 4 10-10\" fill=\"none\" stroke=\"currentColor\"></svg></span></div><div data-slot=\"select-item\" role=\"option\" aria-selected=\"false\" data-highlighted=\"\"><div class=\"cn-select-item-text\">Express</div></div><div data-slot=\"select-item\" role=\"option\" aria-selected=\"false\"><div class=\"cn-select-item-text\">Abholung</div></div></div><div data-slot=\"select-separator\" role=\"separator\"></div></div><div data-slot=\"select-scroll-down-button\" aria-hidden=\"true\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></div></div>",
  "select/select-states/readonly": "<div data-part=\"select-field\"><label for=\"ff-select-readonly-select-fruit\">Versandart</label><button tabindex=\"-1\" data-slot=\"select-trigger\" data-size=\"default\" type=\"button\" role=\"combobox\" id=\"ff-select-readonly-select-fruit\" aria-haspopup=\"listbox\" aria-expanded=\"false\" aria-readonly=\"true\" aria-describedby=\"ff-select-readonly-select-help\"><span data-slot=\"select-value\">Standard</span><svg class=\"cn-select-trigger-icon\" viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></button><p id=\"ff-select-readonly-select-help\">Eine Versandart wählen.</p><input tabindex=\"-1\" type=\"text\" name=\"fruit\" value=\"Standard\" aria-hidden=\"true\" style=\"position:absolute;inline-size:1px;block-size:1px;clip-path:inset(50%)\"></div>",
  "select/select-states/disabled": "<div data-part=\"select-field\"><label for=\"ff-select-disabled-select-fruit\">Versandart</label><button tabindex=\"-1\" data-slot=\"select-trigger\" data-size=\"default\" type=\"button\" role=\"combobox\" id=\"ff-select-disabled-select-fruit\" aria-haspopup=\"listbox\" aria-expanded=\"false\" disabled aria-describedby=\"ff-select-disabled-select-help\"><span data-slot=\"select-value\">Standard</span><svg class=\"cn-select-trigger-icon\" viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></button><p id=\"ff-select-disabled-select-help\">Eine Versandart wählen.</p><input tabindex=\"-1\" type=\"text\" name=\"fruit\" value=\"Standard\" aria-hidden=\"true\" style=\"position:absolute;inline-size:1px;block-size:1px;clip-path:inset(50%)\" disabled></div>",
  "native-select/native-select-variants/native-single": "<label for=\"ff-native-select-native-single-region\">Land</label><div data-slot=\"native-select-wrapper\" data-size=\"default\"><select tabindex=\"-1\" id=\"ff-native-select-native-single-region\" name=\"ff-native-select-native-single-region\" data-slot=\"native-select\" data-size=\"default\" aria-describedby=\"ff-native-select-native-single-region-help\"><optgroup data-slot=\"native-select-optgroup\" label=\"Europe\"><option data-slot=\"native-select-option\" value=\"ch\" selected>Schweiz</option><option data-slot=\"native-select-option\" value=\"at\">Österreich</option><option data-slot=\"native-select-option\" value=\"de\" disabled>Deutschland · gesperrt</option></optgroup><option data-slot=\"native-select-option\" value=\"us\">USA</option></select><svg data-slot=\"native-select-icon\" aria-hidden=\"true\" viewbox=\"0 0 24 24\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></div><p id=\"ff-native-select-native-single-region-help\">Ein Land wählen.</p>",
  "native-select/native-select-variants/small": "<label for=\"ff-native-select-small-region\">Land</label><div data-slot=\"native-select-wrapper\" data-size=\"sm\"><select tabindex=\"-1\" id=\"ff-native-select-small-region\" name=\"ff-native-select-small-region\" data-slot=\"native-select\" data-size=\"sm\" aria-describedby=\"ff-native-select-small-region-help\"><optgroup data-slot=\"native-select-optgroup\" label=\"Europe\"><option data-slot=\"native-select-option\" value=\"ch\" selected>Schweiz</option><option data-slot=\"native-select-option\" value=\"at\">Österreich</option><option data-slot=\"native-select-option\" value=\"de\" disabled>Deutschland · gesperrt</option></optgroup><option data-slot=\"native-select-option\" value=\"us\">USA</option></select><svg data-slot=\"native-select-icon\" aria-hidden=\"true\" viewbox=\"0 0 24 24\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></div><p id=\"ff-native-select-small-region-help\">Ein Land wählen.</p>",
  "native-select/native-select-variants/multiple": "<label for=\"ff-native-select-multiple-region\">Land</label><div data-slot=\"native-select-wrapper\" data-size=\"default\"><select tabindex=\"-1\" id=\"ff-native-select-multiple-region\" name=\"ff-native-select-multiple-region\" data-slot=\"native-select\" data-size=\"default\" aria-describedby=\"ff-native-select-multiple-region-help\" multiple><optgroup data-slot=\"native-select-optgroup\" label=\"Europe\"><option data-slot=\"native-select-option\" value=\"ch\" selected>Schweiz</option><option data-slot=\"native-select-option\" value=\"at\" selected>Österreich</option><option data-slot=\"native-select-option\" value=\"de\" disabled>Deutschland · gesperrt</option></optgroup><option data-slot=\"native-select-option\" value=\"us\">USA</option></select><svg data-slot=\"native-select-icon\" aria-hidden=\"true\" viewbox=\"0 0 24 24\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></div><p id=\"ff-native-select-multiple-region-help\">Ein Land wählen.</p>",
  "native-select/native-select-states/focused": "<label for=\"ff-native-select-focused-region\">Land</label><div data-slot=\"native-select-wrapper\" data-size=\"default\"><select tabindex=\"-1\" id=\"ff-native-select-focused-region\" name=\"ff-native-select-focused-region\" data-slot=\"native-select\" data-size=\"default\" aria-describedby=\"ff-native-select-focused-region-help\"><optgroup data-slot=\"native-select-optgroup\" label=\"Europe\"><option data-slot=\"native-select-option\" value=\"ch\" selected>Schweiz</option><option data-slot=\"native-select-option\" value=\"at\">Österreich</option><option data-slot=\"native-select-option\" value=\"de\" disabled>Deutschland · gesperrt</option></optgroup><option data-slot=\"native-select-option\" value=\"us\">USA</option></select><svg data-slot=\"native-select-icon\" aria-hidden=\"true\" viewbox=\"0 0 24 24\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></div><p id=\"ff-native-select-focused-region-help\">Ein Land wählen.</p>",
  "native-select/native-select-states/invalid": "<label for=\"ff-native-select-invalid-region\">Land</label><div data-slot=\"native-select-wrapper\" data-size=\"default\"><select tabindex=\"-1\" id=\"ff-native-select-invalid-region\" name=\"ff-native-select-invalid-region\" data-slot=\"native-select\" data-size=\"default\" aria-describedby=\"ff-native-select-invalid-region-help ff-native-select-invalid-region-error\" aria-invalid=\"true\"><optgroup data-slot=\"native-select-optgroup\" label=\"Europe\"><option data-slot=\"native-select-option\" value=\"ch\" selected>Schweiz</option><option data-slot=\"native-select-option\" value=\"at\">Österreich</option><option data-slot=\"native-select-option\" value=\"de\" disabled>Deutschland · gesperrt</option></optgroup><option data-slot=\"native-select-option\" value=\"us\">USA</option></select><svg data-slot=\"native-select-icon\" aria-hidden=\"true\" viewbox=\"0 0 24 24\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></div><p id=\"ff-native-select-invalid-region-help\">Ein Land wählen.</p><p id=\"ff-native-select-invalid-region-error\">Bitte ein verfügbares Land wählen.</p>",
  "native-select/native-select-states/disabled": "<label for=\"ff-native-select-disabled-region\">Land</label><div data-slot=\"native-select-wrapper\" data-size=\"default\"><select tabindex=\"-1\" id=\"ff-native-select-disabled-region\" name=\"ff-native-select-disabled-region\" data-slot=\"native-select\" data-size=\"default\" aria-describedby=\"ff-native-select-disabled-region-help\" disabled><optgroup data-slot=\"native-select-optgroup\" label=\"Europe\"><option data-slot=\"native-select-option\" value=\"ch\" selected>Schweiz</option><option data-slot=\"native-select-option\" value=\"at\">Österreich</option><option data-slot=\"native-select-option\" value=\"de\" disabled>Deutschland · gesperrt</option></optgroup><option data-slot=\"native-select-option\" value=\"us\">USA</option></select><svg data-slot=\"native-select-icon\" aria-hidden=\"true\" viewbox=\"0 0 24 24\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></div><p id=\"ff-native-select-disabled-region-help\">Ein Land wählen.</p>",
  "radio-group/radio-group-variants/basic": "<span id=\"ff-radio-group-basic-plan-label\">Versandart</span><p id=\"ff-radio-group-basic-plan-help\">Eine Versandart wählen.</p><div data-slot=\"radio-group\" role=\"radiogroup\" aria-labelledby=\"ff-radio-group-basic-plan-label\" aria-describedby=\"ff-radio-group-basic-plan-help\"><label data-part=\"radio-option\"><span data-slot=\"radio-group-item\" role=\"radio\" aria-checked=\"true\" aria-labelledby=\"ff-radio-group-basic-label-basic\"><span data-slot=\"radio-group-indicator\"><span class=\"cn-radio-group-indicator-icon\"></span></span><input tabindex=\"-1\" type=\"radio\" name=\"plan\" value=\"basic\" checked=\"\" aria-hidden=\"true\"></span><span data-part=\"radio-label\" id=\"ff-radio-group-basic-label-basic\">Standard</span></label><label data-part=\"radio-option\"><span data-slot=\"radio-group-item\" role=\"radio\" aria-checked=\"false\" aria-labelledby=\"ff-radio-group-basic-label-pro\"><input tabindex=\"-1\" type=\"radio\" name=\"plan\" value=\"pro\" aria-hidden=\"true\"></span><span data-part=\"radio-label\" id=\"ff-radio-group-basic-label-pro\">Express</span></label><label data-part=\"radio-option\"><span data-slot=\"radio-group-item\" role=\"radio\" aria-checked=\"false\" aria-labelledby=\"ff-radio-group-basic-label-unavailable\" data-disabled=\"\" aria-disabled=\"true\"><input tabindex=\"-1\" type=\"radio\" name=\"plan\" value=\"unavailable\" disabled=\"\" aria-hidden=\"true\"></span><span data-part=\"radio-label\" id=\"ff-radio-group-basic-label-unavailable\">Abholung · gesperrt</span></label></div>",
  "radio-group/radio-group-states/pro": "<span id=\"ff-radio-group-pro-plan-label\">Versandart</span><p id=\"ff-radio-group-pro-plan-help\">Eine Versandart wählen.</p><div data-slot=\"radio-group\" role=\"radiogroup\" aria-labelledby=\"ff-radio-group-pro-plan-label\" aria-describedby=\"ff-radio-group-pro-plan-help\"><label data-part=\"radio-option\"><span data-slot=\"radio-group-item\" role=\"radio\" aria-checked=\"false\" aria-labelledby=\"ff-radio-group-pro-label-basic\"><input tabindex=\"-1\" type=\"radio\" name=\"plan\" value=\"basic\" aria-hidden=\"true\"></span><span data-part=\"radio-label\" id=\"ff-radio-group-pro-label-basic\">Standard</span></label><label data-part=\"radio-option\"><span data-slot=\"radio-group-item\" role=\"radio\" aria-checked=\"true\" aria-labelledby=\"ff-radio-group-pro-label-pro\"><span data-slot=\"radio-group-indicator\"><span class=\"cn-radio-group-indicator-icon\"></span></span><input tabindex=\"-1\" type=\"radio\" name=\"plan\" value=\"pro\" checked=\"\" aria-hidden=\"true\"></span><span data-part=\"radio-label\" id=\"ff-radio-group-pro-label-pro\">Express</span></label><label data-part=\"radio-option\"><span data-slot=\"radio-group-item\" role=\"radio\" aria-checked=\"false\" aria-labelledby=\"ff-radio-group-pro-label-unavailable\" data-disabled=\"\" aria-disabled=\"true\"><input tabindex=\"-1\" type=\"radio\" name=\"plan\" value=\"unavailable\" disabled=\"\" aria-hidden=\"true\"></span><span data-part=\"radio-label\" id=\"ff-radio-group-pro-label-unavailable\">Abholung · gesperrt</span></label></div>",
  "radio-group/radio-group-states/focused": "<span id=\"ff-radio-group-focused-plan-label\">Versandart</span><p id=\"ff-radio-group-focused-plan-help\">Eine Versandart wählen.</p><div data-slot=\"radio-group\" role=\"radiogroup\" aria-labelledby=\"ff-radio-group-focused-plan-label\" aria-describedby=\"ff-radio-group-focused-plan-help\"><label data-part=\"radio-option\"><span data-slot=\"radio-group-item\" role=\"radio\" aria-checked=\"true\" aria-labelledby=\"ff-radio-group-focused-label-basic\"><span data-slot=\"radio-group-indicator\"><span class=\"cn-radio-group-indicator-icon\"></span></span><input data-comparison-focus tabindex=\"-1\" type=\"radio\" name=\"plan\" value=\"basic\" checked=\"\" aria-hidden=\"true\"></span><span data-part=\"radio-label\" id=\"ff-radio-group-focused-label-basic\">Standard</span></label><label data-part=\"radio-option\"><span data-slot=\"radio-group-item\" role=\"radio\" aria-checked=\"false\" aria-labelledby=\"ff-radio-group-focused-label-pro\"><input tabindex=\"-1\" type=\"radio\" name=\"plan\" value=\"pro\" aria-hidden=\"true\"></span><span data-part=\"radio-label\" id=\"ff-radio-group-focused-label-pro\">Express</span></label><label data-part=\"radio-option\"><span data-slot=\"radio-group-item\" role=\"radio\" aria-checked=\"false\" aria-labelledby=\"ff-radio-group-focused-label-unavailable\" data-disabled=\"\" aria-disabled=\"true\"><input tabindex=\"-1\" type=\"radio\" name=\"plan\" value=\"unavailable\" disabled=\"\" aria-hidden=\"true\"></span><span data-part=\"radio-label\" id=\"ff-radio-group-focused-label-unavailable\">Abholung · gesperrt</span></label></div>",
  "radio-group/radio-group-states/error": "<span id=\"ff-radio-group-error-plan-label\">Versandart</span><p id=\"ff-radio-group-error-plan-help\">Eine Versandart wählen.</p><p id=\"ff-radio-group-error-plan-error\">Bitte eine Versandart wählen.</p><div data-slot=\"radio-group\" role=\"radiogroup\" aria-labelledby=\"ff-radio-group-error-plan-label\" aria-describedby=\"ff-radio-group-error-plan-help ff-radio-group-error-plan-error\" aria-invalid=\"true\"><label data-part=\"radio-option\"><span data-slot=\"radio-group-item\" role=\"radio\" aria-checked=\"true\" aria-labelledby=\"ff-radio-group-error-label-basic\"><span data-slot=\"radio-group-indicator\"><span class=\"cn-radio-group-indicator-icon\"></span></span><input tabindex=\"-1\" type=\"radio\" name=\"plan\" value=\"basic\" checked=\"\" aria-hidden=\"true\"></span><span data-part=\"radio-label\" id=\"ff-radio-group-error-label-basic\">Standard</span></label><label data-part=\"radio-option\"><span data-slot=\"radio-group-item\" role=\"radio\" aria-checked=\"false\" aria-labelledby=\"ff-radio-group-error-label-pro\"><input tabindex=\"-1\" type=\"radio\" name=\"plan\" value=\"pro\" aria-hidden=\"true\"></span><span data-part=\"radio-label\" id=\"ff-radio-group-error-label-pro\">Express</span></label><label data-part=\"radio-option\"><span data-slot=\"radio-group-item\" role=\"radio\" aria-checked=\"false\" aria-labelledby=\"ff-radio-group-error-label-unavailable\" data-disabled=\"\" aria-disabled=\"true\"><input tabindex=\"-1\" type=\"radio\" name=\"plan\" value=\"unavailable\" disabled=\"\" aria-hidden=\"true\"></span><span data-part=\"radio-label\" id=\"ff-radio-group-error-label-unavailable\">Abholung · gesperrt</span></label></div>",
  "radio-group/radio-group-states/readonly": "<span id=\"ff-radio-group-readonly-plan-label\">Versandart</span><p id=\"ff-radio-group-readonly-plan-help\">Eine Versandart wählen.</p><div data-slot=\"radio-group\" role=\"radiogroup\" aria-labelledby=\"ff-radio-group-readonly-plan-label\" aria-describedby=\"ff-radio-group-readonly-plan-help\" aria-readonly=\"true\"><label data-part=\"radio-option\"><span data-slot=\"radio-group-item\" role=\"radio\" aria-checked=\"true\" aria-labelledby=\"ff-radio-group-readonly-label-basic\"><span data-slot=\"radio-group-indicator\"><span class=\"cn-radio-group-indicator-icon\"></span></span><input tabindex=\"-1\" type=\"radio\" name=\"plan\" value=\"basic\" checked=\"\" aria-hidden=\"true\"></span><span data-part=\"radio-label\" id=\"ff-radio-group-readonly-label-basic\">Standard</span></label><label data-part=\"radio-option\"><span data-slot=\"radio-group-item\" role=\"radio\" aria-checked=\"false\" aria-labelledby=\"ff-radio-group-readonly-label-pro\"><input tabindex=\"-1\" type=\"radio\" name=\"plan\" value=\"pro\" aria-hidden=\"true\"></span><span data-part=\"radio-label\" id=\"ff-radio-group-readonly-label-pro\">Express</span></label><label data-part=\"radio-option\"><span data-slot=\"radio-group-item\" role=\"radio\" aria-checked=\"false\" aria-labelledby=\"ff-radio-group-readonly-label-unavailable\" data-disabled=\"\" aria-disabled=\"true\"><input tabindex=\"-1\" type=\"radio\" name=\"plan\" value=\"unavailable\" disabled=\"\" aria-hidden=\"true\"></span><span data-part=\"radio-label\" id=\"ff-radio-group-readonly-label-unavailable\">Abholung · gesperrt</span></label></div>",
  "radio-group/radio-group-states/disabled": "<span id=\"ff-radio-group-disabled-plan-label\">Versandart</span><p id=\"ff-radio-group-disabled-plan-help\">Eine Versandart wählen.</p><div data-slot=\"radio-group\" role=\"radiogroup\" aria-labelledby=\"ff-radio-group-disabled-plan-label\" aria-describedby=\"ff-radio-group-disabled-plan-help\" aria-disabled=\"true\" data-disabled=\"\"><label data-part=\"radio-option\"><span data-slot=\"radio-group-item\" role=\"radio\" aria-checked=\"true\" aria-labelledby=\"ff-radio-group-disabled-label-basic\" data-disabled=\"\" aria-disabled=\"true\"><span data-slot=\"radio-group-indicator\"><span class=\"cn-radio-group-indicator-icon\"></span></span><input tabindex=\"-1\" type=\"radio\" name=\"plan\" value=\"basic\" checked=\"\" disabled=\"\" aria-hidden=\"true\"></span><span data-part=\"radio-label\" id=\"ff-radio-group-disabled-label-basic\">Standard</span></label><label data-part=\"radio-option\"><span data-slot=\"radio-group-item\" role=\"radio\" aria-checked=\"false\" aria-labelledby=\"ff-radio-group-disabled-label-pro\" data-disabled=\"\" aria-disabled=\"true\"><input tabindex=\"-1\" type=\"radio\" name=\"plan\" value=\"pro\" disabled=\"\" aria-hidden=\"true\"></span><span data-part=\"radio-label\" id=\"ff-radio-group-disabled-label-pro\">Express</span></label><label data-part=\"radio-option\"><span data-slot=\"radio-group-item\" role=\"radio\" aria-checked=\"false\" aria-labelledby=\"ff-radio-group-disabled-label-unavailable\" data-disabled=\"\" aria-disabled=\"true\"><input tabindex=\"-1\" type=\"radio\" name=\"plan\" value=\"unavailable\" disabled=\"\" aria-hidden=\"true\"></span><span data-part=\"radio-label\" id=\"ff-radio-group-disabled-label-unavailable\">Abholung · gesperrt</span></label></div>",
  "toggle-group/toggle-group-variants/single": "<div data-slot=\"toggle-group\" role=\"group\" aria-label=\"Textformatierung\" data-orientation=\"horizontal\" data-spacing=\"2\" style=\"--gap:2\"><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle-group-item\" data-variant=\"default\" data-size=\"default\" data-spacing=\"2\" class=\"cn-toggle cn-toggle-variant-default cn-toggle-size-default\" aria-pressed=\"false\">Fett</button><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle-group-item\" data-variant=\"default\" data-size=\"default\" data-spacing=\"2\" class=\"cn-toggle cn-toggle-variant-default cn-toggle-size-default\" aria-pressed=\"false\">Kursiv</button><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle-group-item\" data-variant=\"default\" data-size=\"default\" data-spacing=\"2\" class=\"cn-toggle cn-toggle-variant-default cn-toggle-size-default\" aria-pressed=\"false\" disabled=\"\">Gesperrt</button></div><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle\" class=\"cn-toggle cn-toggle-variant-outline cn-toggle-size-default\" aria-pressed=\"false\">Bericht anheften</button>",
  "toggle-group/toggle-group-variants/outline-connected": "<div data-slot=\"toggle-group\" role=\"group\" aria-label=\"Textformatierung\" data-orientation=\"horizontal\" data-spacing=\"0\" style=\"--gap:0\" data-variant=\"outline\"><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle-group-item\" data-variant=\"outline\" data-size=\"default\" data-spacing=\"0\" class=\"cn-toggle cn-toggle-variant-outline cn-toggle-size-default\" aria-pressed=\"false\">Fett</button><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle-group-item\" data-variant=\"outline\" data-size=\"default\" data-spacing=\"0\" class=\"cn-toggle cn-toggle-variant-outline cn-toggle-size-default\" aria-pressed=\"false\">Kursiv</button><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle-group-item\" data-variant=\"outline\" data-size=\"default\" data-spacing=\"0\" class=\"cn-toggle cn-toggle-variant-outline cn-toggle-size-default\" aria-pressed=\"false\" disabled=\"\">Gesperrt</button></div><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle\" class=\"cn-toggle cn-toggle-variant-outline cn-toggle-size-default\" aria-pressed=\"false\">Bericht anheften</button>",
  "toggle-group/toggle-group-variants/small": "<div data-slot=\"toggle-group\" role=\"group\" aria-label=\"Textformatierung\" data-orientation=\"horizontal\" data-spacing=\"2\" style=\"--gap:2\" data-size=\"sm\"><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle-group-item\" data-variant=\"default\" data-size=\"sm\" data-spacing=\"2\" class=\"cn-toggle cn-toggle-variant-default cn-toggle-size-sm\" aria-pressed=\"false\">Fett</button><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle-group-item\" data-variant=\"default\" data-size=\"sm\" data-spacing=\"2\" class=\"cn-toggle cn-toggle-variant-default cn-toggle-size-sm\" aria-pressed=\"false\">Kursiv</button><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle-group-item\" data-variant=\"default\" data-size=\"sm\" data-spacing=\"2\" class=\"cn-toggle cn-toggle-variant-default cn-toggle-size-sm\" aria-pressed=\"false\" disabled=\"\">Gesperrt</button></div><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle\" class=\"cn-toggle cn-toggle-variant-outline cn-toggle-size-default\" aria-pressed=\"false\">Bericht anheften</button>",
  "toggle-group/toggle-group-variants/large": "<div data-slot=\"toggle-group\" role=\"group\" aria-label=\"Textformatierung\" data-orientation=\"horizontal\" data-spacing=\"2\" style=\"--gap:2\" data-size=\"lg\"><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle-group-item\" data-variant=\"default\" data-size=\"lg\" data-spacing=\"2\" class=\"cn-toggle cn-toggle-variant-default cn-toggle-size-lg\" aria-pressed=\"false\">Fett</button><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle-group-item\" data-variant=\"default\" data-size=\"lg\" data-spacing=\"2\" class=\"cn-toggle cn-toggle-variant-default cn-toggle-size-lg\" aria-pressed=\"false\">Kursiv</button><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle-group-item\" data-variant=\"default\" data-size=\"lg\" data-spacing=\"2\" class=\"cn-toggle cn-toggle-variant-default cn-toggle-size-lg\" aria-pressed=\"false\" disabled=\"\">Gesperrt</button></div><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle\" class=\"cn-toggle cn-toggle-variant-outline cn-toggle-size-default\" aria-pressed=\"false\">Bericht anheften</button>",
  "toggle-group/toggle-group-states/pressed": "<div data-slot=\"toggle-group\" role=\"group\" aria-label=\"Textformatierung\" data-orientation=\"horizontal\" data-spacing=\"2\" style=\"--gap:2\"><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle-group-item\" data-variant=\"default\" data-size=\"default\" data-spacing=\"2\" class=\"cn-toggle cn-toggle-variant-default cn-toggle-size-default\" aria-pressed=\"true\">Fett</button><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle-group-item\" data-variant=\"default\" data-size=\"default\" data-spacing=\"2\" class=\"cn-toggle cn-toggle-variant-default cn-toggle-size-default\" aria-pressed=\"false\">Kursiv</button><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle-group-item\" data-variant=\"default\" data-size=\"default\" data-spacing=\"2\" class=\"cn-toggle cn-toggle-variant-default cn-toggle-size-default\" aria-pressed=\"false\" disabled=\"\">Gesperrt</button></div><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle\" class=\"cn-toggle cn-toggle-variant-outline cn-toggle-size-default\" aria-pressed=\"false\">Bericht anheften</button>",
  "toggle-group/toggle-group-states/multiple": "<div data-slot=\"toggle-group\" role=\"group\" aria-label=\"Textformatierung\" data-orientation=\"horizontal\" data-spacing=\"2\" style=\"--gap:2\"><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle-group-item\" data-variant=\"default\" data-size=\"default\" data-spacing=\"2\" class=\"cn-toggle cn-toggle-variant-default cn-toggle-size-default\" aria-pressed=\"true\">Fett</button><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle-group-item\" data-variant=\"default\" data-size=\"default\" data-spacing=\"2\" class=\"cn-toggle cn-toggle-variant-default cn-toggle-size-default\" aria-pressed=\"true\">Kursiv</button><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle-group-item\" data-variant=\"default\" data-size=\"default\" data-spacing=\"2\" class=\"cn-toggle cn-toggle-variant-default cn-toggle-size-default\" aria-pressed=\"false\" disabled=\"\">Gesperrt</button></div><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle\" class=\"cn-toggle cn-toggle-variant-outline cn-toggle-size-default\" aria-pressed=\"false\">Bericht anheften</button>",
  "toggle-group/toggle-group-states/focused": "<div data-slot=\"toggle-group\" role=\"group\" aria-label=\"Textformatierung\" data-orientation=\"horizontal\" data-spacing=\"2\" style=\"--gap:2\"><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle-group-item\" data-variant=\"default\" data-size=\"default\" data-spacing=\"2\" class=\"cn-toggle cn-toggle-variant-default cn-toggle-size-default\" aria-pressed=\"false\" data-comparison-focus=\"\">Fett</button><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle-group-item\" data-variant=\"default\" data-size=\"default\" data-spacing=\"2\" class=\"cn-toggle cn-toggle-variant-default cn-toggle-size-default\" aria-pressed=\"false\">Kursiv</button><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle-group-item\" data-variant=\"default\" data-size=\"default\" data-spacing=\"2\" class=\"cn-toggle cn-toggle-variant-default cn-toggle-size-default\" aria-pressed=\"false\" disabled=\"\">Gesperrt</button></div><button tabindex=\"-1\" type=\"button\" data-slot=\"toggle\" class=\"cn-toggle cn-toggle-variant-outline cn-toggle-size-default\" aria-pressed=\"false\">Bericht anheften</button>",
  "slider/slider-variants/single": "<div data-part=\"slider-field\"><label data-part=\"slider-label\" id=\"ff-slider-single-volume-label\">Lautstärke</label><div data-slot=\"slider\" data-orientation=\"horizontal\" aria-labelledby=\"ff-slider-single-volume-label\"><div class=\"cn-slider\" data-orientation=\"horizontal\"><div data-slot=\"slider-track\" data-orientation=\"horizontal\"><div data-slot=\"slider-range\" data-orientation=\"horizontal\" style=\"position:relative;inset-inline-start:0px;width:calc(var(--ui-slider-thumb-size)/2 + (100% - var(--ui-slider-thumb-size))*0.4);height:inherit;\"></div></div><div data-slot=\"slider-thumb\" data-orientation=\"horizontal\" data-index=\"0\" style=\"--position:calc(var(--ui-slider-thumb-size)/2 + (100% - var(--ui-slider-thumb-size))*0.4);position:absolute;inset-inline-start:var(--position);top:50%;translate:-50% -50%;\"><input tabindex=\"-1\" type=\"range\" min=\"0\" max=\"100\" step=\"5\" value=\"40\" aria-valuenow=\"40\" aria-valuetext=\"40%\" aria-orientation=\"horizontal\" aria-labelledby=\"ff-slider-single-volume-label\" aria-describedby=\"ff-slider-single-volume-help\"></div></div></div><p data-part=\"slider-help\" id=\"ff-slider-single-volume-help\">0 bis 100 %</p></div>",
  "slider/slider-variants/range": "<div data-part=\"slider-field\"><label data-part=\"slider-label\" id=\"ff-slider-range-volume-label\">Wiedergabebereich</label><div data-slot=\"slider\" data-orientation=\"horizontal\" aria-labelledby=\"ff-slider-range-volume-label\"><div class=\"cn-slider\" data-orientation=\"horizontal\"><div data-slot=\"slider-track\" data-orientation=\"horizontal\"><div data-slot=\"slider-range\" data-orientation=\"horizontal\" style=\"position:relative;inset-inline-start:calc(var(--ui-slider-thumb-size)/2 + (100% - var(--ui-slider-thumb-size))*0.2);width:calc((100% - var(--ui-slider-thumb-size))*0.6);height:inherit;\"></div></div><div data-slot=\"slider-thumb\" data-orientation=\"horizontal\" data-index=\"0\" style=\"--position:calc(var(--ui-slider-thumb-size)/2 + (100% - var(--ui-slider-thumb-size))*0.2);position:absolute;inset-inline-start:var(--position);top:50%;translate:-50% -50%;\"><input tabindex=\"-1\" type=\"range\" min=\"0\" max=\"100\" step=\"5\" value=\"20\" aria-valuenow=\"20\" aria-valuetext=\"20% start range\" aria-orientation=\"horizontal\" aria-labelledby=\"ff-slider-range-volume-label\" aria-describedby=\"ff-slider-range-volume-help\"></div><div data-slot=\"slider-thumb\" data-orientation=\"horizontal\" data-index=\"1\" style=\"--position:calc(var(--ui-slider-thumb-size)/2 + (100% - var(--ui-slider-thumb-size))*0.8);position:absolute;inset-inline-start:var(--position);top:50%;translate:-50% -50%;\"><input tabindex=\"-1\" type=\"range\" min=\"0\" max=\"100\" step=\"5\" value=\"80\" aria-valuenow=\"80\" aria-valuetext=\"80% end range\" aria-orientation=\"horizontal\" aria-labelledby=\"ff-slider-range-volume-label\" aria-describedby=\"ff-slider-range-volume-help\"></div></div></div><p data-part=\"slider-help\" id=\"ff-slider-range-volume-help\">Start und Ende · 0 bis 100 %</p></div>",
  "slider/slider-variants/vertical": "<div data-part=\"slider-field\"><label data-part=\"slider-label\" id=\"ff-slider-vertical-volume-label\">Lautstärke</label><div data-slot=\"slider\" data-orientation=\"vertical\" aria-labelledby=\"ff-slider-vertical-volume-label\"><div class=\"cn-slider\" data-orientation=\"vertical\"><div data-slot=\"slider-track\" data-orientation=\"vertical\"><div data-slot=\"slider-range\" data-orientation=\"vertical\" style=\"position:absolute;bottom:0px;height:calc(var(--ui-slider-thumb-size)/2 + (100% - var(--ui-slider-thumb-size))*0.4);width:inherit;\"></div></div><div data-slot=\"slider-thumb\" data-orientation=\"vertical\" data-index=\"0\" style=\"--position:calc(var(--ui-slider-thumb-size)/2 + (100% - var(--ui-slider-thumb-size))*0.4);position:absolute;bottom:var(--position);left:50%;translate:-50% 50%;\"><input tabindex=\"-1\" type=\"range\" min=\"0\" max=\"100\" step=\"5\" value=\"40\" aria-valuenow=\"40\" aria-valuetext=\"40%\" aria-orientation=\"vertical\" aria-labelledby=\"ff-slider-vertical-volume-label\" aria-describedby=\"ff-slider-vertical-volume-help\"></div></div></div><p data-part=\"slider-help\" id=\"ff-slider-vertical-volume-help\">0 bis 100 %</p></div>",
  "slider/slider-states/focused": "<div data-part=\"slider-field\"><label data-part=\"slider-label\" id=\"ff-slider-focused-volume-label\">Lautstärke</label><div data-slot=\"slider\" data-orientation=\"horizontal\" aria-labelledby=\"ff-slider-focused-volume-label\"><div class=\"cn-slider\" data-orientation=\"horizontal\"><div data-slot=\"slider-track\" data-orientation=\"horizontal\"><div data-slot=\"slider-range\" data-orientation=\"horizontal\" style=\"position:relative;inset-inline-start:0px;width:calc(var(--ui-slider-thumb-size)/2 + (100% - var(--ui-slider-thumb-size))*0.4);height:inherit;\"></div></div><div data-comparison-focus data-slot=\"slider-thumb\" data-orientation=\"horizontal\" data-index=\"0\" style=\"--position:calc(var(--ui-slider-thumb-size)/2 + (100% - var(--ui-slider-thumb-size))*0.4);position:absolute;inset-inline-start:var(--position);top:50%;translate:-50% -50%;\"><input tabindex=\"-1\" type=\"range\" min=\"0\" max=\"100\" step=\"5\" value=\"40\" aria-valuenow=\"40\" aria-valuetext=\"40%\" aria-orientation=\"horizontal\" aria-labelledby=\"ff-slider-focused-volume-label\" aria-describedby=\"ff-slider-focused-volume-help\"></div></div></div><p data-part=\"slider-help\" id=\"ff-slider-focused-volume-help\">0 bis 100 %</p></div>",
  "slider/slider-states/error": "<div data-part=\"slider-field\"><label data-part=\"slider-label\" id=\"ff-slider-error-volume-label\">Lautstärke</label><div data-slot=\"slider\" data-orientation=\"horizontal\" aria-labelledby=\"ff-slider-error-volume-label\"><div class=\"cn-slider\" data-orientation=\"horizontal\"><div data-slot=\"slider-track\" data-orientation=\"horizontal\"><div data-slot=\"slider-range\" data-orientation=\"horizontal\" style=\"position:relative;inset-inline-start:0px;width:calc(var(--ui-slider-thumb-size)/2 + (100% - var(--ui-slider-thumb-size))*0.4);height:inherit;\"></div></div><div data-slot=\"slider-thumb\" data-orientation=\"horizontal\" data-index=\"0\" style=\"--position:calc(var(--ui-slider-thumb-size)/2 + (100% - var(--ui-slider-thumb-size))*0.4);position:absolute;inset-inline-start:var(--position);top:50%;translate:-50% -50%;\"><input tabindex=\"-1\" type=\"range\" min=\"0\" max=\"100\" step=\"5\" value=\"40\" aria-valuenow=\"40\" aria-valuetext=\"40%\" aria-orientation=\"horizontal\" aria-labelledby=\"ff-slider-error-volume-label\" aria-describedby=\"ff-slider-error-volume-help ff-slider-error-volume-error\" aria-invalid=\"true\"></div></div></div><p data-part=\"slider-help\" id=\"ff-slider-error-volume-help\">0 bis 100 %</p><div data-part=\"slider-error\" id=\"ff-slider-error-volume-error\">Bitte eine andere Lautstärke wählen.</div></div>",
  "slider/slider-states/disabled": "<div data-part=\"slider-field\"><label data-part=\"slider-label\" id=\"ff-slider-disabled-volume-label\">Lautstärke</label><div data-slot=\"slider\" data-orientation=\"horizontal\" aria-labelledby=\"ff-slider-disabled-volume-label\" data-disabled=\"\"><div class=\"cn-slider\" data-orientation=\"horizontal\" data-disabled=\"\"><div data-slot=\"slider-track\" data-orientation=\"horizontal\"><div data-slot=\"slider-range\" data-orientation=\"horizontal\" style=\"position:relative;inset-inline-start:0px;width:calc(var(--ui-slider-thumb-size)/2 + (100% - var(--ui-slider-thumb-size))*0.4);height:inherit;\"></div></div><div data-slot=\"slider-thumb\" data-orientation=\"horizontal\" data-index=\"0\" data-disabled=\"\" style=\"--position:calc(var(--ui-slider-thumb-size)/2 + (100% - var(--ui-slider-thumb-size))*0.4);position:absolute;inset-inline-start:var(--position);top:50%;translate:-50% -50%;\"><input tabindex=\"-1\" type=\"range\" min=\"0\" max=\"100\" step=\"5\" value=\"40\" aria-valuenow=\"40\" aria-valuetext=\"40%\" aria-orientation=\"horizontal\" aria-labelledby=\"ff-slider-disabled-volume-label\" aria-describedby=\"ff-slider-disabled-volume-help\" disabled=\"\"></div></div></div><p data-part=\"slider-help\" id=\"ff-slider-disabled-volume-help\">0 bis 100 %</p></div>",
  "date-picker/date-picker-variants/closed-empty": "<section data-part=\"date-picker\"><p id=\"ff-date-picker-closed-empty-date-help\">Termin wählen. Der 13. November ist gesperrt.</p><button tabindex=\"-1\" data-part=\"date-picker-trigger\" data-slot=\"button\" class=\"cn-button cn-button-variant-outline\" id=\"ff-date-picker-closed-empty-date-trigger\" type=\"button\" aria-haspopup=\"dialog\" aria-expanded=\"false\" aria-describedby=\"ff-date-picker-closed-empty-date-help\">Termin wählen</button></section>",
  "date-picker/date-picker-states/open-single": "<div class=\"ff-calendar-excerpt\"><p class=\"ff-excerpt-label\">Kalenderausschnitt · 8.–21. November</p><section data-part=\"date-picker\"><p id=\"ff-date-picker-open-single-date-help\">Termin wählen. Der 13. November ist gesperrt.</p><button tabindex=\"-1\" data-part=\"date-picker-trigger\" data-slot=\"button\" class=\"cn-button cn-button-variant-outline\" id=\"ff-date-picker-open-single-date-trigger\" type=\"button\" aria-haspopup=\"dialog\" aria-expanded=\"true\" aria-describedby=\"ff-date-picker-open-single-date-help\" aria-controls=\"ff-date-picker-open-single-date-popup\">Termin: 12. November 2026</button><div data-slot=\"popover-content\" data-date-picker-popup role=\"dialog\" id=\"ff-date-picker-open-single-date-popup\" aria-labelledby=\"ff-date-picker-open-single-date-trigger\"><div data-slot=\"calendar\" data-calendar-size=\"sm\" class=\"cn-calendar rdp-root\" aria-label=\"Terminkalender\" dir=\"ltr\"><div class=\"rdp-months\"><nav class=\"rdp-nav\" aria-label=\"Kalendernavigation\"><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_previous\" aria-label=\"Vorheriger Monat\" aria-disabled=\"true\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_next\" aria-label=\"Nächster Monat\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button></nav><div class=\"rdp-month\"><div class=\"rdp-month_caption\"><span class=\"cn-calendar-caption rdp-caption_label\" aria-live=\"polite\">November 2026</span></div><table class=\"rdp-month_grid\" role=\"grid\" aria-label=\"November 2026\"><thead><tr class=\"rdp-weekdays\"><th class=\"rdp-weekday\" scope=\"col\">So</th><th class=\"rdp-weekday\" scope=\"col\">Mo</th><th class=\"rdp-weekday\" scope=\"col\">Di</th><th class=\"rdp-weekday\" scope=\"col\">Mi</th><th class=\"rdp-weekday\" scope=\"col\">Do</th><th class=\"rdp-weekday\" scope=\"col\">Fr</th><th class=\"rdp-weekday\" scope=\"col\">Sa</th></tr></thead><tbody class=\"rdp-weeks\"><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/8/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"8. November 2026\">8</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/9/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"9. November 2026\">9</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/10/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"10. November 2026\">10</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/11/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"11. November 2026\">11</button></td><td role=\"gridcell\" class=\"rdp-day rdp-selected\" aria-selected=\"true\" data-selected=\"true\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/12/2026\" data-selected-single=\"true\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"12. November 2026 · gewählt\">12</button></td><td role=\"gridcell\" class=\"rdp-day rdp-disabled\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/13/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"13. November 2026\" disabled>13</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/14/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"14. November 2026\">14</button></td></tr><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/15/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"15. November 2026\">15</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/16/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"16. November 2026\">16</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/17/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"17. November 2026\">17</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/18/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"18. November 2026\">18</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/19/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"19. November 2026\">19</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/20/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"20. November 2026\">20</button></td><td role=\"gridcell\" class=\"rdp-day rdp-today\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/21/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"21. November 2026\">21</button></td></tr></tbody></table></div></div><div class=\"rdp-footer\" role=\"status\" aria-live=\"polite\">12. November 2026</div></div></div></section></div>",
  "date-picker/date-picker-states/closed-selected": "<section data-part=\"date-picker\"><p id=\"ff-date-picker-closed-selected-date-help\">Termin wählen. Der 13. November ist gesperrt.</p><button tabindex=\"-1\" data-part=\"date-picker-trigger\" data-slot=\"button\" class=\"cn-button cn-button-variant-outline\" id=\"ff-date-picker-closed-selected-date-trigger\" type=\"button\" aria-haspopup=\"dialog\" aria-expanded=\"false\" aria-describedby=\"ff-date-picker-closed-selected-date-help\">Termin: 12. November 2026</button></section>",
  "date-picker/date-picker-states/disabled-trigger": "<section data-part=\"date-picker\"><p id=\"ff-date-picker-disabled-trigger-date-help\">Termin wählen. Der 13. November ist gesperrt.</p><button tabindex=\"-1\" data-part=\"date-picker-trigger\" data-slot=\"button\" class=\"cn-button cn-button-variant-outline\" id=\"ff-date-picker-disabled-trigger-date-trigger\" type=\"button\" aria-haspopup=\"dialog\" aria-expanded=\"false\" aria-describedby=\"ff-date-picker-disabled-trigger-date-help\" disabled>Termin: 12. November 2026</button></section>",
  "textarea/textarea-variants/filled": "<div data-part=\"textarea-field\"><label for=\"ff-textarea-filled-notes\" data-part=\"textarea-label\">Projektnotizen</label><textarea tabindex=\"-1\" id=\"ff-textarea-filled-notes\" name=\"ff-textarea-filled-notes\" data-slot=\"textarea\" placeholder=\"Notizen eingeben\" aria-describedby=\"ff-textarea-filled-notes-help\">Projekt Bern vorbereiten.\nKontakt am Montag anrufen.</textarea><p id=\"ff-textarea-filled-notes-help\">Nächste Schritte festhalten.</p></div>",
  "textarea/textarea-states/empty": "<div data-part=\"textarea-field\"><label for=\"ff-textarea-empty-notes\" data-part=\"textarea-label\">Projektnotizen</label><textarea tabindex=\"-1\" id=\"ff-textarea-empty-notes\" name=\"ff-textarea-empty-notes\" data-slot=\"textarea\" placeholder=\"Notizen eingeben\" aria-describedby=\"ff-textarea-empty-notes-help\"></textarea><p id=\"ff-textarea-empty-notes-help\">Nächste Schritte festhalten.</p></div>",
  "textarea/textarea-states/focused": "<div data-part=\"textarea-field\"><label for=\"ff-textarea-focused-notes\" data-part=\"textarea-label\">Projektnotizen</label><textarea data-comparison-focus tabindex=\"-1\" id=\"ff-textarea-focused-notes\" name=\"ff-textarea-focused-notes\" data-slot=\"textarea\" placeholder=\"Notizen eingeben\" aria-describedby=\"ff-textarea-focused-notes-help\">Projekt Bern vorbereiten.\nKontakt am Montag anrufen.</textarea><p id=\"ff-textarea-focused-notes-help\">Nächste Schritte festhalten.</p></div>",
  "textarea/textarea-states/error": "<div data-part=\"textarea-field\"><label for=\"ff-textarea-error-notes\" data-part=\"textarea-label\">Projektnotizen</label><textarea tabindex=\"-1\" id=\"ff-textarea-error-notes\" name=\"ff-textarea-error-notes\" data-slot=\"textarea\" placeholder=\"Notizen eingeben\" aria-describedby=\"ff-textarea-error-notes-help ff-textarea-error-notes-error\" aria-invalid=\"true\">Projekt Bern vorbereiten.\nKontakt am Montag anrufen.</textarea><p id=\"ff-textarea-error-notes-help\">Nächste Schritte festhalten.</p><p id=\"ff-textarea-error-notes-error\">Bitte den nächsten Schritt beschreiben.</p></div>",
  "textarea/textarea-states/readonly": "<div data-part=\"textarea-field\"><label for=\"ff-textarea-readonly-notes\" data-part=\"textarea-label\">Projektnotizen</label><textarea tabindex=\"-1\" id=\"ff-textarea-readonly-notes\" name=\"ff-textarea-readonly-notes\" data-slot=\"textarea\" placeholder=\"Notizen eingeben\" aria-describedby=\"ff-textarea-readonly-notes-help\" readonly>Projekt Bern vorbereiten.\nKontakt am Montag anrufen.</textarea><p id=\"ff-textarea-readonly-notes-help\">Nächste Schritte festhalten.</p></div>",
  "textarea/textarea-states/disabled": "<div data-part=\"textarea-field\"><label for=\"ff-textarea-disabled-notes\" data-part=\"textarea-label\">Projektnotizen</label><textarea tabindex=\"-1\" id=\"ff-textarea-disabled-notes\" name=\"ff-textarea-disabled-notes\" data-slot=\"textarea\" placeholder=\"Notizen eingeben\" aria-describedby=\"ff-textarea-disabled-notes-help\" disabled>Projekt Bern vorbereiten.\nKontakt am Montag anrufen.</textarea><p id=\"ff-textarea-disabled-notes-help\">Nächste Schritte festhalten.</p></div>",
  "input-otp/input-otp-variants/empty": "<label for=\"ff-input-otp-empty-verification-code\">Bestätigungscode</label><p id=\"ff-input-otp-empty-verification-help\">Sechsstelligen Code eingeben.</p><div class=\"cn-input-otp\" data-input-otp-container=\"true\"><div data-slot=\"input-otp-group\" aria-hidden=\"true\"><div data-slot=\"input-otp-slot\" data-active=\"false\"></div><div data-slot=\"input-otp-slot\" data-active=\"false\"></div><div data-slot=\"input-otp-slot\" data-active=\"false\"></div></div><div data-slot=\"input-otp-separator\" role=\"separator\" aria-hidden=\"true\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M6 12h12\" stroke=\"currentColor\"></svg></div><div data-slot=\"input-otp-group\" aria-hidden=\"true\"><div data-slot=\"input-otp-slot\" data-active=\"false\"></div><div data-slot=\"input-otp-slot\" data-active=\"false\"></div><div data-slot=\"input-otp-slot\" data-active=\"false\"></div></div><input tabindex=\"-1\" data-slot=\"input-otp\" class=\"cn-input-otp-input\" id=\"ff-input-otp-empty-verification-code\" type=\"text\" inputmode=\"numeric\" autocomplete=\"one-time-code\" maxlength=\"6\" pattern=\"^\\d+$\" value=\"\" aria-describedby=\"ff-input-otp-empty-verification-help\"></div>",
  "input-otp/input-otp-states/partial-active": "<label for=\"ff-input-otp-partial-active-verification-code\">Bestätigungscode</label><p id=\"ff-input-otp-partial-active-verification-help\">Sechsstelligen Code eingeben.</p><div class=\"cn-input-otp\" data-input-otp-container=\"true\"><div data-slot=\"input-otp-group\" aria-hidden=\"true\"><div data-slot=\"input-otp-slot\" data-active=\"false\">1</div><div data-slot=\"input-otp-slot\" data-active=\"false\">2</div><div data-slot=\"input-otp-slot\" data-active=\"true\"><div class=\"cn-input-otp-caret\"><div class=\"cn-input-otp-caret-line\"></div></div></div></div><div data-slot=\"input-otp-separator\" role=\"separator\" aria-hidden=\"true\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M6 12h12\" stroke=\"currentColor\"></svg></div><div data-slot=\"input-otp-group\" aria-hidden=\"true\"><div data-slot=\"input-otp-slot\" data-active=\"false\"></div><div data-slot=\"input-otp-slot\" data-active=\"false\"></div><div data-slot=\"input-otp-slot\" data-active=\"false\"></div></div><input tabindex=\"-1\" data-slot=\"input-otp\" class=\"cn-input-otp-input\" id=\"ff-input-otp-partial-active-verification-code\" type=\"text\" inputmode=\"numeric\" autocomplete=\"one-time-code\" maxlength=\"6\" pattern=\"^\\d+$\" value=\"12\" aria-describedby=\"ff-input-otp-partial-active-verification-help\"></div>",
  "input-otp/input-otp-states/complete": "<label for=\"ff-input-otp-complete-verification-code\">Bestätigungscode</label><p id=\"ff-input-otp-complete-verification-help\">Sechsstelligen Code eingeben.</p><div class=\"cn-input-otp\" data-input-otp-container=\"true\"><div data-slot=\"input-otp-group\" aria-hidden=\"true\"><div data-slot=\"input-otp-slot\" data-active=\"false\">1</div><div data-slot=\"input-otp-slot\" data-active=\"false\">2</div><div data-slot=\"input-otp-slot\" data-active=\"false\">3</div></div><div data-slot=\"input-otp-separator\" role=\"separator\" aria-hidden=\"true\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M6 12h12\" stroke=\"currentColor\"></svg></div><div data-slot=\"input-otp-group\" aria-hidden=\"true\"><div data-slot=\"input-otp-slot\" data-active=\"false\">4</div><div data-slot=\"input-otp-slot\" data-active=\"false\">5</div><div data-slot=\"input-otp-slot\" data-active=\"false\">6</div></div><input tabindex=\"-1\" data-slot=\"input-otp\" class=\"cn-input-otp-input\" id=\"ff-input-otp-complete-verification-code\" type=\"text\" inputmode=\"numeric\" autocomplete=\"one-time-code\" maxlength=\"6\" pattern=\"^\\d+$\" value=\"123456\" aria-describedby=\"ff-input-otp-complete-verification-help\"></div>",
  "input-otp/input-otp-states/expired-error": "<label for=\"ff-input-otp-expired-error-verification-code\">Bestätigungscode</label><p id=\"ff-input-otp-expired-error-verification-help\">Sechsstelligen Code eingeben.</p><div class=\"cn-input-otp\" data-input-otp-container=\"true\"><div data-slot=\"input-otp-group\" aria-hidden=\"true\"><div data-slot=\"input-otp-slot\" data-active=\"false\">1</div><div data-slot=\"input-otp-slot\" data-active=\"false\">2</div><div data-slot=\"input-otp-slot\" data-active=\"false\">3</div></div><div data-slot=\"input-otp-separator\" role=\"separator\" aria-hidden=\"true\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M6 12h12\" stroke=\"currentColor\"></svg></div><div data-slot=\"input-otp-group\" aria-hidden=\"true\"><div data-slot=\"input-otp-slot\" data-active=\"false\">4</div><div data-slot=\"input-otp-slot\" data-active=\"false\">5</div><div data-slot=\"input-otp-slot\" data-active=\"false\">6</div></div><input tabindex=\"-1\" data-slot=\"input-otp\" class=\"cn-input-otp-input\" id=\"ff-input-otp-expired-error-verification-code\" type=\"text\" inputmode=\"numeric\" autocomplete=\"one-time-code\" maxlength=\"6\" pattern=\"^\\d+$\" value=\"123456\" aria-describedby=\"ff-input-otp-expired-error-verification-help ff-input-otp-expired-error-verification-error\" aria-invalid=\"true\"></div><p id=\"ff-input-otp-expired-error-verification-error\">Code abgelaufen. Neuen Code anfordern.</p>",
  "input-otp/input-otp-states/disabled": "<label for=\"ff-input-otp-disabled-verification-code\">Bestätigungscode</label><p id=\"ff-input-otp-disabled-verification-help\">Sechsstelligen Code eingeben.</p><div class=\"cn-input-otp\" data-input-otp-container=\"true\"><div data-slot=\"input-otp-group\" aria-hidden=\"true\"><div data-slot=\"input-otp-slot\" data-active=\"false\">1</div><div data-slot=\"input-otp-slot\" data-active=\"false\">2</div><div data-slot=\"input-otp-slot\" data-active=\"false\">3</div></div><div data-slot=\"input-otp-separator\" role=\"separator\" aria-hidden=\"true\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M6 12h12\" stroke=\"currentColor\"></svg></div><div data-slot=\"input-otp-group\" aria-hidden=\"true\"><div data-slot=\"input-otp-slot\" data-active=\"false\">4</div><div data-slot=\"input-otp-slot\" data-active=\"false\">5</div><div data-slot=\"input-otp-slot\" data-active=\"false\">6</div></div><input tabindex=\"-1\" data-slot=\"input-otp\" class=\"cn-input-otp-input\" id=\"ff-input-otp-disabled-verification-code\" type=\"text\" inputmode=\"numeric\" autocomplete=\"one-time-code\" maxlength=\"6\" pattern=\"^\\d+$\" value=\"123456\" aria-describedby=\"ff-input-otp-disabled-verification-help\" disabled></div>",
  "input-group/input-group-variants/inline": "<label data-part=\"input-group-label\" for=\"ff-input-group-inline-query\">Bericht suchen</label><div role=\"group\" aria-label=\"Bericht suchen\" data-slot=\"input-group\"><div role=\"group\" data-slot=\"input-group-addon\" data-align=\"inline-start\" class=\"cn-input-group-addon cn-input-group-addon-align-inline-start\"><span class=\"cn-input-group-text\">Suche</span></div><input tabindex=\"-1\" id=\"ff-input-group-inline-query\" type=\"text\" data-slot=\"input-group-control\" class=\"cn-input cn-input-group-input\" aria-describedby=\"ff-input-group-inline-query-help\" value=\"Projekt Bern\"><div role=\"group\" data-slot=\"input-group-addon\" data-align=\"inline-end\" class=\"cn-input-group-addon cn-input-group-addon-align-inline-end\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" data-size=\"xs\" class=\"cn-button cn-button-variant-ghost cn-button-size-default cn-input-group-button cn-input-group-button-size-xs\">Löschen</button></div></div><span id=\"ff-input-group-inline-query-help\">Nach Berichtstitel suchen.</span>",
  "input-group/input-group-variants/inline-end": "<label data-part=\"input-group-label\" for=\"ff-input-group-inline-end-query\">Bericht suchen</label><div role=\"group\" aria-label=\"Bericht suchen\" data-slot=\"input-group\"><div role=\"group\" data-slot=\"input-group-addon\" data-align=\"inline-end\" class=\"cn-input-group-addon cn-input-group-addon-align-inline-end\"><span class=\"cn-input-group-text\">Suche</span></div><input tabindex=\"-1\" id=\"ff-input-group-inline-end-query\" type=\"text\" data-slot=\"input-group-control\" class=\"cn-input cn-input-group-input\" aria-describedby=\"ff-input-group-inline-end-query-help\" value=\"Projekt Bern\"><div role=\"group\" data-slot=\"input-group-addon\" data-align=\"inline-end\" class=\"cn-input-group-addon cn-input-group-addon-align-inline-end\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" data-size=\"xs\" class=\"cn-button cn-button-variant-ghost cn-button-size-default cn-input-group-button cn-input-group-button-size-xs\">Löschen</button></div></div><span id=\"ff-input-group-inline-end-query-help\">Nach Berichtstitel suchen.</span>",
  "input-group/input-group-variants/textarea": "<label data-part=\"input-group-label\" for=\"ff-input-group-textarea-query\">Bericht suchen</label><div role=\"group\" aria-label=\"Bericht suchen\" data-slot=\"input-group\"><div role=\"group\" data-slot=\"input-group-addon\" data-align=\"block-start\" class=\"cn-input-group-addon cn-input-group-addon-align-block-start\"><span class=\"cn-input-group-text\">Suche</span></div><textarea tabindex=\"-1\" id=\"ff-input-group-textarea-query\" data-slot=\"input-group-control\" class=\"cn-textarea cn-input-group-textarea\" aria-describedby=\"ff-input-group-textarea-query-help\">Projekt Bern vorbereiten.</textarea><div role=\"group\" data-slot=\"input-group-addon\" data-align=\"inline-end\" class=\"cn-input-group-addon cn-input-group-addon-align-inline-end\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" data-size=\"xs\" class=\"cn-button cn-button-variant-ghost cn-button-size-default cn-input-group-button cn-input-group-button-size-xs\">Löschen</button></div></div><span id=\"ff-input-group-textarea-query-help\">Nach Berichtstitel suchen.</span>",
  "input-group/input-group-variants/block-end": "<label data-part=\"input-group-label\" for=\"ff-input-group-block-end-query\">Bericht suchen</label><div role=\"group\" aria-label=\"Bericht suchen\" data-slot=\"input-group\"><div role=\"group\" data-slot=\"input-group-addon\" data-align=\"block-end\" class=\"cn-input-group-addon cn-input-group-addon-align-block-end\"><span class=\"cn-input-group-text\">Suche</span></div><input tabindex=\"-1\" id=\"ff-input-group-block-end-query\" type=\"text\" data-slot=\"input-group-control\" class=\"cn-input cn-input-group-input\" aria-describedby=\"ff-input-group-block-end-query-help\" value=\"Projekt Bern\"><div role=\"group\" data-slot=\"input-group-addon\" data-align=\"inline-end\" class=\"cn-input-group-addon cn-input-group-addon-align-inline-end\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" data-size=\"xs\" class=\"cn-button cn-button-variant-ghost cn-button-size-default cn-input-group-button cn-input-group-button-size-xs\">Löschen</button></div></div><span id=\"ff-input-group-block-end-query-help\">Nach Berichtstitel suchen.</span>",
  "input-group/input-group-variants/button-sm": "<label data-part=\"input-group-label\" for=\"ff-input-group-button-sm-query\">Bericht suchen</label><div role=\"group\" aria-label=\"Bericht suchen\" data-slot=\"input-group\"><div role=\"group\" data-slot=\"input-group-addon\" data-align=\"inline-start\" class=\"cn-input-group-addon cn-input-group-addon-align-inline-start\"><span class=\"cn-input-group-text\">Suche</span></div><input tabindex=\"-1\" id=\"ff-input-group-button-sm-query\" type=\"text\" data-slot=\"input-group-control\" class=\"cn-input cn-input-group-input\" aria-describedby=\"ff-input-group-button-sm-query-help\" value=\"Projekt Bern\"><div role=\"group\" data-slot=\"input-group-addon\" data-align=\"inline-end\" class=\"cn-input-group-addon cn-input-group-addon-align-inline-end\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" data-size=\"sm\" class=\"cn-button cn-button-variant-ghost cn-button-size-default cn-input-group-button cn-input-group-button-size-sm\">Löschen</button></div></div><span id=\"ff-input-group-button-sm-query-help\">Nach Berichtstitel suchen.</span>",
  "input-group/input-group-variants/button-icon-xs": "<label data-part=\"input-group-label\" for=\"ff-input-group-button-icon-xs-query\">Bericht suchen</label><div role=\"group\" aria-label=\"Bericht suchen\" data-slot=\"input-group\"><div role=\"group\" data-slot=\"input-group-addon\" data-align=\"inline-start\" class=\"cn-input-group-addon cn-input-group-addon-align-inline-start\"><span class=\"cn-input-group-text\">Suche</span></div><input tabindex=\"-1\" id=\"ff-input-group-button-icon-xs-query\" type=\"text\" data-slot=\"input-group-control\" class=\"cn-input cn-input-group-input\" aria-describedby=\"ff-input-group-button-icon-xs-query-help\" value=\"Projekt Bern\"><div role=\"group\" data-slot=\"input-group-addon\" data-align=\"inline-end\" class=\"cn-input-group-addon cn-input-group-addon-align-inline-end\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" data-size=\"icon-xs\" class=\"cn-button cn-button-variant-ghost cn-button-size-default cn-input-group-button cn-input-group-button-size-icon-xs\" aria-label=\"Löschen\"><svg aria-hidden=\"true\" viewbox=\"0 0 24 24\"><path d=\"m6 6 12 12M18 6 6 18\" stroke=\"currentColor\"></svg></button></div></div><span id=\"ff-input-group-button-icon-xs-query-help\">Nach Berichtstitel suchen.</span>",
  "input-group/input-group-variants/button-icon-sm": "<label data-part=\"input-group-label\" for=\"ff-input-group-button-icon-sm-query\">Bericht suchen</label><div role=\"group\" aria-label=\"Bericht suchen\" data-slot=\"input-group\"><div role=\"group\" data-slot=\"input-group-addon\" data-align=\"inline-start\" class=\"cn-input-group-addon cn-input-group-addon-align-inline-start\"><span class=\"cn-input-group-text\">Suche</span></div><input tabindex=\"-1\" id=\"ff-input-group-button-icon-sm-query\" type=\"text\" data-slot=\"input-group-control\" class=\"cn-input cn-input-group-input\" aria-describedby=\"ff-input-group-button-icon-sm-query-help\" value=\"Projekt Bern\"><div role=\"group\" data-slot=\"input-group-addon\" data-align=\"inline-end\" class=\"cn-input-group-addon cn-input-group-addon-align-inline-end\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" data-size=\"icon-sm\" class=\"cn-button cn-button-variant-ghost cn-button-size-default cn-input-group-button cn-input-group-button-size-icon-sm\" aria-label=\"Löschen\"><svg aria-hidden=\"true\" viewbox=\"0 0 24 24\"><path d=\"m6 6 12 12M18 6 6 18\" stroke=\"currentColor\"></svg></button></div></div><span id=\"ff-input-group-button-icon-sm-query-help\">Nach Berichtstitel suchen.</span>",
  "input-group/input-group-states/focus": "<label data-part=\"input-group-label\" for=\"ff-input-group-focus-query\">Bericht suchen</label><div role=\"group\" aria-label=\"Bericht suchen\" data-slot=\"input-group\"><div role=\"group\" data-slot=\"input-group-addon\" data-align=\"inline-start\" class=\"cn-input-group-addon cn-input-group-addon-align-inline-start\"><span class=\"cn-input-group-text\">Suche</span></div><input data-comparison-focus tabindex=\"-1\" id=\"ff-input-group-focus-query\" type=\"text\" data-slot=\"input-group-control\" class=\"cn-input cn-input-group-input\" aria-describedby=\"ff-input-group-focus-query-help\" value=\"Projekt Bern\"><div role=\"group\" data-slot=\"input-group-addon\" data-align=\"inline-end\" class=\"cn-input-group-addon cn-input-group-addon-align-inline-end\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" data-size=\"xs\" class=\"cn-button cn-button-variant-ghost cn-button-size-default cn-input-group-button cn-input-group-button-size-xs\">Löschen</button></div></div><span id=\"ff-input-group-focus-query-help\">Nach Berichtstitel suchen.</span>",
  "input-group/input-group-states/invalid": "<label data-part=\"input-group-label\" for=\"ff-input-group-invalid-query\">Bericht suchen</label><div role=\"group\" aria-label=\"Bericht suchen\" data-slot=\"input-group\"><div role=\"group\" data-slot=\"input-group-addon\" data-align=\"inline-start\" class=\"cn-input-group-addon cn-input-group-addon-align-inline-start\"><span class=\"cn-input-group-text\">Suche</span></div><input tabindex=\"-1\" id=\"ff-input-group-invalid-query\" type=\"text\" data-slot=\"input-group-control\" class=\"cn-input cn-input-group-input\" aria-describedby=\"ff-input-group-invalid-query-help ff-input-group-invalid-query-error\" aria-invalid=\"true\" value=\"Projekt Bern\"><div role=\"group\" data-slot=\"input-group-addon\" data-align=\"inline-end\" class=\"cn-input-group-addon cn-input-group-addon-align-inline-end\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" data-size=\"xs\" class=\"cn-button cn-button-variant-ghost cn-button-size-default cn-input-group-button cn-input-group-button-size-xs\">Löschen</button></div></div><span id=\"ff-input-group-invalid-query-help\">Nach Berichtstitel suchen.</span><p id=\"ff-input-group-invalid-query-error\">Bitte einen gültigen Berichtstitel eingeben.</p>",
  "input-group/input-group-states/disabled": "<label data-part=\"input-group-label\" for=\"ff-input-group-disabled-query\">Bericht suchen</label><div role=\"group\" aria-label=\"Bericht suchen\" data-slot=\"input-group\"><div role=\"group\" data-slot=\"input-group-addon\" data-align=\"inline-start\" class=\"cn-input-group-addon cn-input-group-addon-align-inline-start\"><span class=\"cn-input-group-text\">Suche</span></div><input tabindex=\"-1\" id=\"ff-input-group-disabled-query\" type=\"text\" data-slot=\"input-group-control\" class=\"cn-input cn-input-group-input\" aria-describedby=\"ff-input-group-disabled-query-help\" disabled value=\"Projekt Bern\"><div role=\"group\" data-slot=\"input-group-addon\" data-align=\"inline-end\" class=\"cn-input-group-addon cn-input-group-addon-align-inline-end\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" data-size=\"xs\" class=\"cn-button cn-button-variant-ghost cn-button-size-default cn-input-group-button cn-input-group-button-size-xs\" disabled data-disabled>Löschen</button></div></div><span id=\"ff-input-group-disabled-query-help\">Nach Berichtstitel suchen.</span>",
  "field/field-variants/horizontal": "<div data-slot=\"field\" data-orientation=\"horizontal\" class=\"cn-field cn-field-orientation-horizontal\"><label data-slot=\"field-label\" class=\"cn-label cn-field-label\" for=\"ff-field-horizontal-email\">E-Mail</label><div data-slot=\"field-content\"><input tabindex=\"-1\" data-slot=\"input\" class=\"ff-bound-input\" id=\"ff-field-horizontal-email\" type=\"email\" value=\"mira@bern\" aria-describedby=\"ff-field-horizontal-description-0\"><p data-slot=\"field-description\" id=\"ff-field-horizontal-description-0\">Geschäftliche Adresse verwenden.</p></div></div>",
  "field/field-variants/responsive": "<div data-slot=\"field\" data-orientation=\"responsive\" class=\"cn-field cn-field-orientation-responsive\"><label data-slot=\"field-label\" class=\"cn-label cn-field-label\" for=\"ff-field-responsive-email\">E-Mail</label><div data-slot=\"field-content\"><input tabindex=\"-1\" data-slot=\"input\" class=\"ff-bound-input\" id=\"ff-field-responsive-email\" type=\"email\" value=\"mira@bern\" aria-describedby=\"ff-field-responsive-description-0\"><p data-slot=\"field-description\" id=\"ff-field-responsive-description-0\">Geschäftliche Adresse verwenden.</p></div></div>",
  "field/field-variants/label-legend": "<fieldset data-slot=\"field-set\"><legend data-slot=\"field-legend\" data-variant=\"label\">Kontakt</legend><div data-slot=\"field\" data-orientation=\"vertical\" class=\"cn-field cn-field-orientation-vertical\"><label data-slot=\"field-label\" class=\"cn-label cn-field-label\" for=\"ff-field-label-legend-email\">E-Mail</label><div data-slot=\"field-content\"><input tabindex=\"-1\" data-slot=\"input\" class=\"ff-bound-input\" id=\"ff-field-label-legend-email\" type=\"email\" value=\"mira@bern\" aria-describedby=\"ff-field-label-legend-description-0\"><p data-slot=\"field-description\" id=\"ff-field-label-legend-description-0\">Geschäftliche Adresse verwenden.</p></div></div></fieldset>",
  "field/field-states/error-list": "<div data-slot=\"field\" data-orientation=\"vertical\" class=\"cn-field cn-field-orientation-vertical\"><label data-slot=\"field-label\" class=\"cn-label cn-field-label\" for=\"ff-field-error-list-email\">E-Mail</label><div data-slot=\"field-content\"><input tabindex=\"-1\" data-slot=\"input\" class=\"ff-bound-input\" id=\"ff-field-error-list-email\" type=\"email\" value=\"mira@bern\" aria-describedby=\"ff-field-error-list-description-0 ff-field-error-list-description-1\"><p data-slot=\"field-description\" id=\"ff-field-error-list-description-0\">Geschäftliche Adresse verwenden.</p><div data-slot=\"field-error\" role=\"alert\" id=\"ff-field-error-list-description-1\"><ul><li>Bitte eine gültige Adresse eingeben.</li><li>Geschäftliche Adresse verwenden.</li></ul></div></div></div>",
  "field/field-states/disabled-control": "<div data-slot=\"field\" data-orientation=\"vertical\" class=\"cn-field cn-field-orientation-vertical\" data-disabled=\"true\"><label data-slot=\"field-label\" class=\"cn-label cn-field-label\" for=\"ff-field-disabled-control-email\">E-Mail</label><div data-slot=\"field-content\"><input tabindex=\"-1\" data-slot=\"input\" class=\"ff-bound-input\" id=\"ff-field-disabled-control-email\" type=\"email\" value=\"mira@bern\" disabled aria-describedby=\"ff-field-disabled-control-description-0\"><p data-slot=\"field-description\" id=\"ff-field-disabled-control-description-0\">Geschäftliche Adresse verwenden.</p></div></div>",
  "label/label-variants/named-input": "<div data-part=\"label-field\"><label data-slot=\"label\" for=\"ff-label-named-input-project\">Projektname</label><input tabindex=\"-1\" data-slot=\"input\" class=\"ff-bound-input\" id=\"ff-label-named-input-project\" type=\"text\" value=\"Projekt Bern\"></div>",
  "label/label-variants/disabled-host-field": "<div data-part=\"label-field\" data-disabled=\"true\"><label data-slot=\"label\" for=\"ff-label-disabled-host-field-project\">Projektname</label><input tabindex=\"-1\" data-slot=\"input\" class=\"ff-bound-input\" id=\"ff-label-disabled-host-field-project\" type=\"text\" value=\"Projekt Bern\" disabled></div>",
  "questionnaire/questionnaire-variants/required-plan": "<form data-slot=\"questionnaire\" aria-label=\"Bericht einrichten\"><fieldset data-slot=\"questionnaire-item\" aria-describedby=\"ff-questionnaire-required-plan-q-help-plan\" data-active><legend data-slot=\"questionnaire-title\">Berichtsumfang wählen</legend><p data-slot=\"questionnaire-description\" id=\"ff-questionnaire-required-plan-q-help-plan\">Einen verfügbaren Umfang wählen.</p><div data-slot=\"questionnaire-choices\"><label data-slot=\"questionnaire-choice\" data-type=\"radio\" data-unchecked data-shortcut=\"A\"><input tabindex=\"-1\" data-slot=\"questionnaire-choice-input\" type=\"radio\" name=\"plan\" value=\"plus\"><span data-slot=\"questionnaire-choice-indicator\" aria-hidden=\"true\"><span data-slot=\"questionnaire-choice-indicator-dot\"></span><svg data-slot=\"questionnaire-choice-indicator-check\" viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m5 12 4 4 10-10\" fill=\"none\" stroke=\"currentColor\"></svg></span><span data-slot=\"questionnaire-choice-label\">Kompakt<span data-slot=\"questionnaire-choice-description\"></span></span></label><label data-slot=\"questionnaire-choice\" data-type=\"radio\" data-unchecked data-shortcut=\"A\"><input tabindex=\"-1\" data-slot=\"questionnaire-choice-input\" type=\"radio\" name=\"plan\" value=\"pro\"><span data-slot=\"questionnaire-choice-indicator\" aria-hidden=\"true\"><span data-slot=\"questionnaire-choice-indicator-dot\"></span><svg data-slot=\"questionnaire-choice-indicator-check\" viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m5 12 4 4 10-10\" fill=\"none\" stroke=\"currentColor\"></svg></span><span data-slot=\"questionnaire-choice-label\">Ausführlich</span></label><label data-slot=\"questionnaire-choice\" data-type=\"radio\" data-unchecked data-disabled><input tabindex=\"-1\" data-slot=\"questionnaire-choice-input\" type=\"radio\" name=\"plan\" value=\"enterprise\" disabled><span data-slot=\"questionnaire-choice-indicator\" aria-hidden=\"true\"><span data-slot=\"questionnaire-choice-indicator-dot\"></span><svg data-slot=\"questionnaire-choice-indicator-check\" viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m5 12 4 4 10-10\" fill=\"none\" stroke=\"currentColor\"></svg></span><span data-slot=\"questionnaire-choice-label\">Individuell · gesperrt</span></label></div><p data-slot=\"questionnaire-error\" id=\"ff-questionnaire-required-plan-q-error-plan\" hidden>Bitte eine Antwort wählen.</p></fieldset></form>",
  "questionnaire/questionnaire-variants/selected-checkbox": "<form data-slot=\"questionnaire\" aria-label=\"Bericht einrichten\"><fieldset data-slot=\"questionnaire-item\" aria-describedby=\"ff-questionnaire-selected-checkbox-q-help-signals\" data-active><legend data-slot=\"questionnaire-title\">Berichtsthemen wählen</legend><p data-slot=\"questionnaire-description\" id=\"ff-questionnaire-selected-checkbox-q-help-signals\">Mehrere Themen wählen oder überspringen.</p><div data-slot=\"questionnaire-choices\"><label data-slot=\"questionnaire-choice\" data-type=\"checkbox\" data-checked data-shortcut=\"A\"><input tabindex=\"-1\" data-slot=\"questionnaire-choice-input\" type=\"checkbox\" name=\"signals\" value=\"progress\" checked><span data-slot=\"questionnaire-choice-indicator\" aria-hidden=\"true\"><span data-slot=\"questionnaire-choice-indicator-dot\"></span><svg data-slot=\"questionnaire-choice-indicator-check\" viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m5 12 4 4 10-10\" fill=\"none\" stroke=\"currentColor\"></svg></span><span data-slot=\"questionnaire-choice-label\">Fortschritt<span data-slot=\"questionnaire-choice-description\"></span></span></label><label data-slot=\"questionnaire-choice\" data-type=\"checkbox\" data-unchecked data-shortcut=\"A\"><input tabindex=\"-1\" data-slot=\"questionnaire-choice-input\" type=\"checkbox\" name=\"signals\" value=\"risks\"><span data-slot=\"questionnaire-choice-indicator\" aria-hidden=\"true\"><span data-slot=\"questionnaire-choice-indicator-dot\"></span><svg data-slot=\"questionnaire-choice-indicator-check\" viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m5 12 4 4 10-10\" fill=\"none\" stroke=\"currentColor\"></svg></span><span data-slot=\"questionnaire-choice-label\">Risiken</span></label></div><p data-slot=\"questionnaire-error\" id=\"ff-questionnaire-selected-checkbox-q-error-signals\" hidden>Bitte eine Antwort wählen.</p></fieldset></form>",
  "questionnaire/questionnaire-variants/contact-input": "<form data-slot=\"questionnaire\" aria-label=\"Bericht einrichten\"><fieldset data-slot=\"questionnaire-item\" aria-describedby=\"ff-questionnaire-contact-input-q-help-contact\" data-active><legend data-slot=\"questionnaire-title\">Kontaktadresse</legend><p data-slot=\"questionnaire-description\" id=\"ff-questionnaire-contact-input-q-help-contact\">E-Mail für den Bericht eingeben.</p><div data-slot=\"questionnaire-input-wrapper\"><input tabindex=\"-1\" data-slot=\"questionnaire-input\" type=\"email\" name=\"contact\" aria-label=\"Kontakt-E-Mail\" aria-describedby=\"ff-questionnaire-contact-input-q-help-contact\"></div><p data-slot=\"questionnaire-error\" id=\"ff-questionnaire-contact-input-q-error-contact\" hidden>Bitte eine Antwort wählen.</p></fieldset></form>",
  "questionnaire/questionnaire-states/selected-radio": "<form data-slot=\"questionnaire\" aria-label=\"Bericht einrichten\"><fieldset data-slot=\"questionnaire-item\" aria-describedby=\"ff-questionnaire-selected-radio-q-help-plan\" data-active><legend data-slot=\"questionnaire-title\">Berichtsumfang wählen</legend><p data-slot=\"questionnaire-description\" id=\"ff-questionnaire-selected-radio-q-help-plan\">Einen verfügbaren Umfang wählen.</p><div data-slot=\"questionnaire-choices\"><label data-slot=\"questionnaire-choice\" data-type=\"radio\" data-checked data-shortcut=\"A\"><input tabindex=\"-1\" data-slot=\"questionnaire-choice-input\" type=\"radio\" name=\"plan\" value=\"plus\" checked><span data-slot=\"questionnaire-choice-indicator\" aria-hidden=\"true\"><span data-slot=\"questionnaire-choice-indicator-dot\"></span><svg data-slot=\"questionnaire-choice-indicator-check\" viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m5 12 4 4 10-10\" fill=\"none\" stroke=\"currentColor\"></svg></span><span data-slot=\"questionnaire-choice-label\">Kompakt<span data-slot=\"questionnaire-choice-description\"></span></span></label><label data-slot=\"questionnaire-choice\" data-type=\"radio\" data-unchecked data-shortcut=\"A\"><input tabindex=\"-1\" data-slot=\"questionnaire-choice-input\" type=\"radio\" name=\"plan\" value=\"pro\"><span data-slot=\"questionnaire-choice-indicator\" aria-hidden=\"true\"><span data-slot=\"questionnaire-choice-indicator-dot\"></span><svg data-slot=\"questionnaire-choice-indicator-check\" viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m5 12 4 4 10-10\" fill=\"none\" stroke=\"currentColor\"></svg></span><span data-slot=\"questionnaire-choice-label\">Ausführlich</span></label><label data-slot=\"questionnaire-choice\" data-type=\"radio\" data-unchecked data-disabled><input tabindex=\"-1\" data-slot=\"questionnaire-choice-input\" type=\"radio\" name=\"plan\" value=\"enterprise\" disabled><span data-slot=\"questionnaire-choice-indicator\" aria-hidden=\"true\"><span data-slot=\"questionnaire-choice-indicator-dot\"></span><svg data-slot=\"questionnaire-choice-indicator-check\" viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m5 12 4 4 10-10\" fill=\"none\" stroke=\"currentColor\"></svg></span><span data-slot=\"questionnaire-choice-label\">Individuell · gesperrt</span></label></div><p data-slot=\"questionnaire-error\" id=\"ff-questionnaire-selected-radio-q-error-plan\" hidden>Bitte eine Antwort wählen.</p></fieldset></form>",
  "questionnaire/questionnaire-states/invalid-plan": "<form data-slot=\"questionnaire\" aria-label=\"Bericht einrichten\"><fieldset data-slot=\"questionnaire-item\" aria-describedby=\"ff-questionnaire-invalid-plan-q-help-plan ff-questionnaire-invalid-plan-q-error-plan\" data-active aria-invalid=\"true\"><legend data-slot=\"questionnaire-title\">Berichtsumfang wählen</legend><p data-slot=\"questionnaire-description\" id=\"ff-questionnaire-invalid-plan-q-help-plan\">Einen verfügbaren Umfang wählen.</p><div data-slot=\"questionnaire-choices\"><label data-slot=\"questionnaire-choice\" data-type=\"radio\" data-unchecked data-shortcut=\"A\"><input tabindex=\"-1\" data-slot=\"questionnaire-choice-input\" type=\"radio\" name=\"plan\" value=\"plus\"><span data-slot=\"questionnaire-choice-indicator\" aria-hidden=\"true\"><span data-slot=\"questionnaire-choice-indicator-dot\"></span><svg data-slot=\"questionnaire-choice-indicator-check\" viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m5 12 4 4 10-10\" fill=\"none\" stroke=\"currentColor\"></svg></span><span data-slot=\"questionnaire-choice-label\">Kompakt<span data-slot=\"questionnaire-choice-description\"></span></span></label><label data-slot=\"questionnaire-choice\" data-type=\"radio\" data-unchecked data-shortcut=\"A\"><input tabindex=\"-1\" data-slot=\"questionnaire-choice-input\" type=\"radio\" name=\"plan\" value=\"pro\"><span data-slot=\"questionnaire-choice-indicator\" aria-hidden=\"true\"><span data-slot=\"questionnaire-choice-indicator-dot\"></span><svg data-slot=\"questionnaire-choice-indicator-check\" viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m5 12 4 4 10-10\" fill=\"none\" stroke=\"currentColor\"></svg></span><span data-slot=\"questionnaire-choice-label\">Ausführlich</span></label><label data-slot=\"questionnaire-choice\" data-type=\"radio\" data-unchecked data-disabled><input tabindex=\"-1\" data-slot=\"questionnaire-choice-input\" type=\"radio\" name=\"plan\" value=\"enterprise\" disabled><span data-slot=\"questionnaire-choice-indicator\" aria-hidden=\"true\"><span data-slot=\"questionnaire-choice-indicator-dot\"></span><svg data-slot=\"questionnaire-choice-indicator-check\" viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m5 12 4 4 10-10\" fill=\"none\" stroke=\"currentColor\"></svg></span><span data-slot=\"questionnaire-choice-label\">Individuell · gesperrt</span></label></div><p data-slot=\"questionnaire-error\" id=\"ff-questionnaire-invalid-plan-q-error-plan\" role=\"alert\" data-invalid>Bitte eine Antwort wählen.</p></fieldset></form>",
  "questionnaire/questionnaire-states/invalid-contact": "<form data-slot=\"questionnaire\" aria-label=\"Bericht einrichten\"><fieldset data-slot=\"questionnaire-item\" aria-describedby=\"ff-questionnaire-invalid-contact-q-help-contact ff-questionnaire-invalid-contact-q-error-contact\" data-active aria-invalid=\"true\"><legend data-slot=\"questionnaire-title\">Kontaktadresse</legend><p data-slot=\"questionnaire-description\" id=\"ff-questionnaire-invalid-contact-q-help-contact\">E-Mail für den Bericht eingeben.</p><div data-slot=\"questionnaire-input-wrapper\"><input tabindex=\"-1\" data-slot=\"questionnaire-input\" type=\"email\" name=\"contact\" aria-label=\"Kontakt-E-Mail\" aria-describedby=\"ff-questionnaire-invalid-contact-q-help-contact\" aria-invalid=\"true\"></div><p data-slot=\"questionnaire-error\" id=\"ff-questionnaire-invalid-contact-q-error-contact\" role=\"alert\" data-invalid>Bitte eine gültige E-Mail eingeben.</p></fieldset></form>",
  "button-group/button-group-variants/implicit-default": "<div data-slot=\"button-group\" role=\"group\" aria-label=\"Bericht bearbeiten\" class=\"cn-button-group cn-button-group-orientation-horizontal\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-button cn-button-variant-outline cn-button-size-default\">Speichern</button><div data-slot=\"button-group-separator\" data-orientation=\"vertical\" role=\"separator\" aria-orientation=\"vertical\"></div><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-button cn-button-variant-outline cn-button-size-default\">Exportieren</button></div>",
  "button-group/button-group-variants/horizontal-with-text": "<div data-slot=\"button-group\" role=\"group\" aria-label=\"Bericht bearbeiten\" class=\"cn-button-group cn-button-group-orientation-horizontal\" data-orientation=\"horizontal\"><div data-slot=\"button-group-text\">Bericht</div><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-button cn-button-variant-outline cn-button-size-default\">Speichern</button><div data-slot=\"button-group-separator\" data-orientation=\"vertical\" role=\"separator\" aria-orientation=\"vertical\"></div><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-button cn-button-variant-outline cn-button-size-default\">Exportieren</button></div>",
  "button-group/button-group-variants/vertical": "<div data-slot=\"button-group\" role=\"group\" aria-label=\"Bericht bearbeiten\" class=\"cn-button-group cn-button-group-orientation-vertical\" data-orientation=\"vertical\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-button cn-button-variant-outline cn-button-size-default\">Speichern</button><div data-slot=\"button-group-separator\" data-orientation=\"horizontal\" role=\"separator\" aria-orientation=\"horizontal\"></div><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-button cn-button-variant-outline cn-button-size-default\">Exportieren</button></div>",
  "button-group/button-group-states/disabled-descendants": "<div data-slot=\"button-group\" role=\"group\" aria-label=\"Bericht bearbeiten\" class=\"cn-button-group cn-button-group-orientation-horizontal\" data-orientation=\"horizontal\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-button cn-button-variant-outline cn-button-size-default\" disabled data-disabled>Speichern</button><div data-slot=\"button-group-separator\" data-orientation=\"vertical\" role=\"separator\" aria-orientation=\"vertical\"></div><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-button cn-button-variant-outline cn-button-size-default\" disabled data-disabled>Exportieren</button></div>",
  "button-group/button-group-states/focus": "<div data-slot=\"button-group\" role=\"group\" aria-label=\"Bericht bearbeiten\" class=\"cn-button-group cn-button-group-orientation-horizontal\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-button cn-button-variant-outline cn-button-size-default\" data-comparison-focus=\"\">Speichern</button><div data-slot=\"button-group-separator\" data-orientation=\"vertical\" role=\"separator\" aria-orientation=\"vertical\"></div><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-button cn-button-variant-outline cn-button-size-default\">Exportieren</button></div>",
  "kbd/kbd-variants/shortcut-group": "<p>Speichern mit <kbd data-slot=\"kbd-group\"><kbd data-slot=\"kbd\">Strg</kbd> + <kbd data-slot=\"kbd\">S</kbd></kbd>.</p>",
  "kbd/kbd-variants/single-key": "<kbd data-slot=\"kbd\">Eingabe</kbd>",
  "kbd/kbd-variants/long-key": "<kbd data-slot=\"kbd\">Bild ab</kbd>",
  "alert/alert-variants/default": "<div role=\"alert\" data-slot=\"alert\" class=\"cn-alert cn-alert-variant-default ui-alert-with-icon\"><svg aria-hidden=\"true\" viewbox=\"0 0 24 24\"><path d=\"m5 12 4 4L19 6\" fill=\"none\" stroke=\"currentColor\"></svg><div data-slot=\"alert-title\">Verbindung fehlgeschlagen</div><div data-slot=\"alert-description\">Netzwerk prüfen und erneut versuchen.</div><div data-slot=\"alert-action\"><button tabindex=\"-1\" type=\"button\" class=\"cn-button cn-button-variant-outline cn-button-size-sm\">Erneut versuchen</button></div></div>",
  "alert/alert-variants/destructive": "<div role=\"alert\" data-slot=\"alert\" class=\"cn-alert cn-alert-variant-destructive ui-alert-with-icon\"><svg aria-hidden=\"true\" viewbox=\"0 0 24 24\"><path d=\"m5 12 4 4L19 6\" fill=\"none\" stroke=\"currentColor\"></svg><div data-slot=\"alert-title\">Verbindung fehlgeschlagen</div><div data-slot=\"alert-description\">Netzwerk prüfen und erneut versuchen.</div><div data-slot=\"alert-action\"><button tabindex=\"-1\" type=\"button\" class=\"cn-button cn-button-variant-outline cn-button-size-sm\">Erneut versuchen</button></div></div>",
  "alert/alert-variants/without-icon-action": "<div role=\"alert\" data-slot=\"alert\" class=\"cn-alert cn-alert-variant-default\"><div data-slot=\"alert-title\">Verbindung fehlgeschlagen</div><div data-slot=\"alert-description\">Netzwerk prüfen und erneut versuchen.</div></div>",
  "toast/toast-variants/persistent": "<div data-slot=\"toast-viewport\" role=\"region\" aria-label=\"Mitteilungen\" aria-live=\"polite\" aria-atomic=\"false\" aria-relevant=\"additions text\"><div data-slot=\"toast\" role=\"dialog\" aria-modal=\"false\" aria-labelledby=\"ff-toast-persistent-toast-title-0\" aria-describedby=\"ff-toast-persistent-toast-description-0\" style=\"--toast-index:0;--toast-offset-y:0px;--toast-height:118px;--toast-frontmost-height:118px;--toast-swipe-movement-x:0px;--toast-swipe-movement-y:0px\"><div data-slot=\"toast-content\"><div><h2 data-slot=\"toast-title\" id=\"ff-toast-persistent-toast-title-0\">Notiz archiviert</h2><p data-slot=\"toast-description\" id=\"ff-toast-persistent-toast-description-0\">Im Archiv verfügbar.</p></div><button tabindex=\"-1\" data-slot=\"toast-action\" class=\"cn-button cn-button-variant-outline cn-button-size-sm\" type=\"button\">Rückgängig</button><button tabindex=\"-1\" data-slot=\"toast-close\" class=\"cn-button cn-button-variant-ghost cn-button-size-icon-sm\" type=\"button\" aria-hidden=\"true\" aria-label=\"Mitteilung schliessen\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 6 12 12M18 6 6 18\" fill=\"none\" stroke=\"currentColor\"></svg></button></div></div></div>",
  "toast/toast-variants/typed-icon": "<div data-slot=\"toast-viewport\" role=\"region\" aria-label=\"Mitteilungen\" aria-live=\"polite\" aria-atomic=\"false\" aria-relevant=\"additions text\"><div data-slot=\"toast\" role=\"dialog\" aria-modal=\"false\" aria-labelledby=\"ff-toast-typed-icon-toast-title-0\" aria-describedby=\"ff-toast-typed-icon-toast-description-0\" style=\"--toast-index:0;--toast-offset-y:0px;--toast-height:118px;--toast-frontmost-height:118px;--toast-swipe-movement-x:0px;--toast-swipe-movement-y:0px\"><div data-slot=\"toast-content\"><span data-slot=\"toast-icon\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"none\" stroke=\"currentColor\"></circle><path d=\"m8 12 3 3 5-6\" fill=\"none\" stroke=\"currentColor\"></svg></span><div><h2 data-slot=\"toast-title\" id=\"ff-toast-typed-icon-toast-title-0\">Notiz archiviert</h2><p data-slot=\"toast-description\" id=\"ff-toast-typed-icon-toast-description-0\">Im Archiv verfügbar.</p></div><button tabindex=\"-1\" data-slot=\"toast-action\" class=\"cn-button cn-button-variant-outline cn-button-size-sm\" type=\"button\">Rückgängig</button><button tabindex=\"-1\" data-slot=\"toast-close\" class=\"cn-button cn-button-variant-ghost cn-button-size-icon-sm\" type=\"button\" aria-hidden=\"true\" aria-label=\"Mitteilung schliessen\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 6 12 12M18 6 6 18\" fill=\"none\" stroke=\"currentColor\"></svg></button></div></div></div>",
  "toast/toast-states/stack-collapsed": "<div data-slot=\"toast-viewport\" role=\"region\" aria-label=\"Mitteilungen\" aria-live=\"polite\" aria-atomic=\"false\" aria-relevant=\"additions text\"><div data-slot=\"toast\" role=\"dialog\" aria-modal=\"false\" aria-labelledby=\"ff-toast-stack-collapsed-toast-title-0\" aria-describedby=\"ff-toast-stack-collapsed-toast-description-0\" style=\"--toast-index:0;--toast-offset-y:0px;--toast-height:118px;--toast-frontmost-height:118px;--toast-swipe-movement-x:0px;--toast-swipe-movement-y:0px\"><div data-slot=\"toast-content\"><div><h2 data-slot=\"toast-title\" id=\"ff-toast-stack-collapsed-toast-title-0\">Notiz archiviert</h2><p data-slot=\"toast-description\" id=\"ff-toast-stack-collapsed-toast-description-0\">Im Archiv verfügbar.</p></div><button tabindex=\"-1\" data-slot=\"toast-action\" class=\"cn-button cn-button-variant-outline cn-button-size-sm\" type=\"button\">Rückgängig</button><button tabindex=\"-1\" data-slot=\"toast-close\" class=\"cn-button cn-button-variant-ghost cn-button-size-icon-sm\" type=\"button\" aria-hidden=\"true\" aria-label=\"Mitteilung schliessen\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 6 12 12M18 6 6 18\" fill=\"none\" stroke=\"currentColor\"></svg></button></div></div><div data-slot=\"toast\" role=\"dialog\" aria-modal=\"false\" aria-labelledby=\"ff-toast-stack-collapsed-toast-title-1\" aria-describedby=\"ff-toast-stack-collapsed-toast-description-1\" style=\"--toast-index:1;--toast-offset-y:118px;--toast-height:118px;--toast-frontmost-height:118px;--toast-swipe-movement-x:0px;--toast-swipe-movement-y:0px\"><div data-slot=\"toast-content\" data-behind=\"\"><div><h2 data-slot=\"toast-title\" id=\"ff-toast-stack-collapsed-toast-title-1\">Notiz archiviert</h2><p data-slot=\"toast-description\" id=\"ff-toast-stack-collapsed-toast-description-1\">Im Archiv verfügbar.</p></div><button tabindex=\"-1\" data-slot=\"toast-action\" class=\"cn-button cn-button-variant-outline cn-button-size-sm\" type=\"button\">Rückgängig</button><button tabindex=\"-1\" data-slot=\"toast-close\" class=\"cn-button cn-button-variant-ghost cn-button-size-icon-sm\" type=\"button\" aria-hidden=\"true\" aria-label=\"Mitteilung schliessen\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 6 12 12M18 6 6 18\" fill=\"none\" stroke=\"currentColor\"></svg></button></div></div><div data-slot=\"toast\" role=\"dialog\" aria-modal=\"false\" aria-labelledby=\"ff-toast-stack-collapsed-toast-title-2\" aria-describedby=\"ff-toast-stack-collapsed-toast-description-2\" style=\"--toast-index:2;--toast-offset-y:236px;--toast-height:118px;--toast-frontmost-height:118px;--toast-swipe-movement-x:0px;--toast-swipe-movement-y:0px\"><div data-slot=\"toast-content\" data-behind=\"\"><div><h2 data-slot=\"toast-title\" id=\"ff-toast-stack-collapsed-toast-title-2\">Notiz archiviert</h2><p data-slot=\"toast-description\" id=\"ff-toast-stack-collapsed-toast-description-2\">Im Archiv verfügbar.</p></div><button tabindex=\"-1\" data-slot=\"toast-action\" class=\"cn-button cn-button-variant-outline cn-button-size-sm\" type=\"button\">Rückgängig</button><button tabindex=\"-1\" data-slot=\"toast-close\" class=\"cn-button cn-button-variant-ghost cn-button-size-icon-sm\" type=\"button\" aria-hidden=\"true\" aria-label=\"Mitteilung schliessen\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 6 12 12M18 6 6 18\" fill=\"none\" stroke=\"currentColor\"></svg></button></div></div></div>",
  "toast/toast-states/stack-expanded": "<div data-slot=\"toast-viewport\" role=\"region\" aria-label=\"Mitteilungen\" aria-live=\"polite\" aria-atomic=\"false\" aria-relevant=\"additions text\"><div data-slot=\"toast\" role=\"dialog\" aria-modal=\"false\" aria-labelledby=\"ff-toast-stack-expanded-toast-title-0\" aria-describedby=\"ff-toast-stack-expanded-toast-description-0\" data-expanded=\"\" style=\"--toast-index:0;--toast-offset-y:0px;--toast-height:118px;--toast-frontmost-height:118px;--toast-swipe-movement-x:0px;--toast-swipe-movement-y:0px\"><div data-slot=\"toast-content\" data-expanded=\"\"><div><h2 data-slot=\"toast-title\" id=\"ff-toast-stack-expanded-toast-title-0\">Notiz archiviert</h2><p data-slot=\"toast-description\" id=\"ff-toast-stack-expanded-toast-description-0\">Im Archiv verfügbar.</p></div><button tabindex=\"-1\" data-slot=\"toast-action\" class=\"cn-button cn-button-variant-outline cn-button-size-sm\" type=\"button\">Rückgängig</button><button tabindex=\"-1\" data-slot=\"toast-close\" class=\"cn-button cn-button-variant-ghost cn-button-size-icon-sm\" type=\"button\" aria-hidden=\"false\" aria-label=\"Mitteilung schliessen\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 6 12 12M18 6 6 18\" fill=\"none\" stroke=\"currentColor\"></svg></button></div></div><div data-slot=\"toast\" role=\"dialog\" aria-modal=\"false\" aria-labelledby=\"ff-toast-stack-expanded-toast-title-1\" aria-describedby=\"ff-toast-stack-expanded-toast-description-1\" data-expanded=\"\" style=\"--toast-index:1;--toast-offset-y:118px;--toast-height:118px;--toast-frontmost-height:118px;--toast-swipe-movement-x:0px;--toast-swipe-movement-y:0px\"><div data-slot=\"toast-content\" data-expanded=\"\"><div><h2 data-slot=\"toast-title\" id=\"ff-toast-stack-expanded-toast-title-1\">Notiz archiviert</h2><p data-slot=\"toast-description\" id=\"ff-toast-stack-expanded-toast-description-1\">Im Archiv verfügbar.</p></div><button tabindex=\"-1\" data-slot=\"toast-action\" class=\"cn-button cn-button-variant-outline cn-button-size-sm\" type=\"button\">Rückgängig</button><button tabindex=\"-1\" data-slot=\"toast-close\" class=\"cn-button cn-button-variant-ghost cn-button-size-icon-sm\" type=\"button\" aria-hidden=\"false\" aria-label=\"Mitteilung schliessen\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 6 12 12M18 6 6 18\" fill=\"none\" stroke=\"currentColor\"></svg></button></div></div><div data-slot=\"toast\" role=\"dialog\" aria-modal=\"false\" aria-labelledby=\"ff-toast-stack-expanded-toast-title-2\" aria-describedby=\"ff-toast-stack-expanded-toast-description-2\" data-expanded=\"\" style=\"--toast-index:2;--toast-offset-y:236px;--toast-height:118px;--toast-frontmost-height:118px;--toast-swipe-movement-x:0px;--toast-swipe-movement-y:0px\"><div data-slot=\"toast-content\" data-expanded=\"\"><div><h2 data-slot=\"toast-title\" id=\"ff-toast-stack-expanded-toast-title-2\">Notiz archiviert</h2><p data-slot=\"toast-description\" id=\"ff-toast-stack-expanded-toast-description-2\">Im Archiv verfügbar.</p></div><button tabindex=\"-1\" data-slot=\"toast-action\" class=\"cn-button cn-button-variant-outline cn-button-size-sm\" type=\"button\">Rückgängig</button><button tabindex=\"-1\" data-slot=\"toast-close\" class=\"cn-button cn-button-variant-ghost cn-button-size-icon-sm\" type=\"button\" aria-hidden=\"false\" aria-label=\"Mitteilung schliessen\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 6 12 12M18 6 6 18\" fill=\"none\" stroke=\"currentColor\"></svg></button></div></div></div>",
  "toast/toast-states/disabled-action": "<div data-slot=\"toast-viewport\" role=\"region\" aria-label=\"Mitteilungen\" aria-live=\"polite\" aria-atomic=\"false\" aria-relevant=\"additions text\"><div data-slot=\"toast\" role=\"dialog\" aria-modal=\"false\" aria-labelledby=\"ff-toast-disabled-action-toast-title-0\" aria-describedby=\"ff-toast-disabled-action-toast-description-0\" style=\"--toast-index:0;--toast-offset-y:0px;--toast-height:118px;--toast-frontmost-height:118px;--toast-swipe-movement-x:0px;--toast-swipe-movement-y:0px\"><div data-slot=\"toast-content\"><div><h2 data-slot=\"toast-title\" id=\"ff-toast-disabled-action-toast-title-0\">Notiz archiviert</h2><p data-slot=\"toast-description\" id=\"ff-toast-disabled-action-toast-description-0\">Im Archiv verfügbar.</p></div><button tabindex=\"-1\" data-slot=\"toast-action\" class=\"cn-button cn-button-variant-outline cn-button-size-sm\" type=\"button\" disabled>Rückgängig</button><button tabindex=\"-1\" data-slot=\"toast-close\" class=\"cn-button cn-button-variant-ghost cn-button-size-icon-sm\" type=\"button\" aria-hidden=\"true\" aria-label=\"Mitteilung schliessen\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 6 12 12M18 6 6 18\" fill=\"none\" stroke=\"currentColor\"></svg></button></div></div></div>",
  "empty/empty-variants/empty-with-recovery": "<div data-slot=\"empty\"><div data-slot=\"empty-header\"><div data-slot=\"empty-icon\" data-variant=\"icon\" aria-hidden=\"true\"><svg viewbox=\"0 0 24 24\"><path d=\"M4 7h16v13H4zM8 7V4h8v3\" fill=\"none\" stroke=\"currentColor\"></svg></div><div data-slot=\"empty-title\"><h2>Keine Dokumente</h2></div><div data-slot=\"empty-description\">Lade das erste Dokument für Projekt Bern hoch.</div></div><div data-slot=\"empty-content\"><button tabindex=\"-1\" type=\"button\" class=\"cn-button cn-button-variant-outline cn-button-size-sm\">Dokument hochladen</button></div></div>",
  "empty/empty-variants/text-only": "<div data-slot=\"empty\"><div data-slot=\"empty-header\"><div data-slot=\"empty-title\"><h2>Keine Dokumente</h2></div><div data-slot=\"empty-description\">Lade das erste Dokument für Projekt Bern hoch.</div></div><div data-slot=\"empty-content\"><button tabindex=\"-1\" type=\"button\" class=\"cn-button cn-button-variant-outline cn-button-size-sm\">Dokument hochladen</button></div></div>",
  "empty/empty-variants/default-media": "<div data-slot=\"empty\"><div data-slot=\"empty-header\"><div data-slot=\"empty-icon\" data-variant=\"default\" aria-hidden=\"true\"><svg viewbox=\"0 0 24 24\"><path d=\"M4 7h16v13H4zM8 7V4h8v3\" fill=\"none\" stroke=\"currentColor\"></svg></div><div data-slot=\"empty-title\"><h2>Keine Dokumente</h2></div><div data-slot=\"empty-description\">Lade das erste Dokument für Projekt Bern hoch.</div></div><div data-slot=\"empty-content\"><button tabindex=\"-1\" type=\"button\" class=\"cn-button cn-button-variant-outline cn-button-size-sm\">Dokument hochladen</button></div></div>",
  "progress/progress-variants/value-40": "<div data-slot=\"progress\" role=\"progressbar\" aria-labelledby=\"ff-progress-value-40-task-label\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"40\" aria-valuetext=\"40%\" data-progressing=\"\"><span data-slot=\"progress-label\" id=\"ff-progress-value-40-task-label\">Bericht hochladen</span><span data-slot=\"progress-value\" aria-hidden=\"true\">40%</span><div data-slot=\"progress-track\" data-progressing=\"\"><div data-slot=\"progress-indicator\" data-progressing=\"\" style=\"inset-inline-start:0;height:inherit;width:40%\"></div></div></div>",
  "progress/progress-states/value-0": "<div data-slot=\"progress\" role=\"progressbar\" aria-labelledby=\"ff-progress-value-0-task-label\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"0\" aria-valuetext=\"0%\" data-progressing=\"\"><span data-slot=\"progress-label\" id=\"ff-progress-value-0-task-label\">Bericht hochladen</span><span data-slot=\"progress-value\" aria-hidden=\"true\">0%</span><div data-slot=\"progress-track\" data-progressing=\"\"><div data-slot=\"progress-indicator\" data-progressing=\"\" style=\"inset-inline-start:0;height:inherit;width:0%\"></div></div></div>",
  "progress/progress-states/value-100": "<div data-slot=\"progress\" role=\"progressbar\" aria-labelledby=\"ff-progress-value-100-task-label\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"100\" aria-valuetext=\"100%\" data-complete=\"\"><span data-slot=\"progress-label\" id=\"ff-progress-value-100-task-label\">Bericht hochladen</span><span data-slot=\"progress-value\" aria-hidden=\"true\">100%</span><div data-slot=\"progress-track\" data-complete=\"\"><div data-slot=\"progress-indicator\" data-complete=\"\" style=\"inset-inline-start:0;height:inherit;width:100%\"></div></div></div>",
  "progress/progress-states/indeterminate": "<div data-slot=\"progress\" role=\"progressbar\" aria-labelledby=\"ff-progress-indeterminate-task-label\" aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuetext=\"indeterminate progress\" data-indeterminate=\"\"><span data-slot=\"progress-label\" id=\"ff-progress-indeterminate-task-label\">Bericht hochladen</span><span data-slot=\"progress-value\" aria-hidden=\"true\"></span><div data-slot=\"progress-track\" data-indeterminate=\"\"><div data-slot=\"progress-indicator\" data-indeterminate=\"\"></div></div></div>",
  "spinner/spinner-variants/loading-small": "<svg data-slot=\"spinner\" class=\"ui-spinner-small\" role=\"status\" aria-label=\"Kontakte laden\" viewbox=\"0 0 24 24\"><path d=\"M20 12a8 8 0 1 1-8-8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"></svg>",
  "spinner/spinner-variants/loading-default": "<svg data-slot=\"spinner\" class=\"ui-spinner-default\" role=\"status\" aria-label=\"Kontakte laden\" viewbox=\"0 0 24 24\"><path d=\"M20 12a8 8 0 1 1-8-8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"></svg>",
  "spinner/spinner-variants/loading-large": "<svg data-slot=\"spinner\" class=\"ui-spinner-large\" role=\"status\" aria-label=\"Kontakte laden\" viewbox=\"0 0 24 24\"><path d=\"M20 12a8 8 0 1 1-8-8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"></svg>",
  "spinner/spinner-variants/loading-extra-large": "<svg data-slot=\"spinner\" class=\"ui-spinner-extra-large\" role=\"status\" aria-label=\"Kontakte laden\" viewbox=\"0 0 24 24\"><path d=\"M20 12a8 8 0 1 1-8-8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"></svg>",
  "skeleton/skeleton-variants/loading-text": "<section aria-busy=\"true\" aria-label=\"Kontakte\"><div role=\"status\">Kontakte laden</div><div data-slot=\"skeleton\" class=\"ui-skeleton-text\" aria-hidden=\"true\"></div></section>",
  "skeleton/skeleton-variants/loading-avatar": "<section aria-busy=\"true\" aria-label=\"Kontakte\"><div role=\"status\">Kontakte laden</div><div data-slot=\"skeleton\" class=\"ui-skeleton-avatar\" aria-hidden=\"true\"></div></section>",
  "skeleton/skeleton-variants/loading-card": "<section aria-busy=\"true\" aria-label=\"Kontakte\"><div role=\"status\">Kontakte laden</div><div data-slot=\"skeleton\" class=\"ui-skeleton-card\" aria-hidden=\"true\"></div></section>",
  "field/field-variants/vertical": "<div data-slot=\"field\" data-orientation=\"vertical\" class=\"cn-field cn-field-orientation-vertical\"><label data-slot=\"field-label\" class=\"cn-label cn-field-label\" for=\"ff-field-vertical-email\">E-Mail</label><div data-slot=\"field-content\"><input tabindex=\"-1\" data-slot=\"input\" class=\"ff-bound-input\" id=\"ff-field-vertical-email\" type=\"email\" value=\"mira@bern\" aria-describedby=\"ff-field-vertical-description-0\"><p data-slot=\"field-description\" id=\"ff-field-vertical-description-0\">Geschäftliche Adresse verwenden.</p></div></div>",
  "field/field-states/valid": "<div data-slot=\"field\" data-orientation=\"vertical\" class=\"cn-field cn-field-orientation-vertical\"><label data-slot=\"field-label\" class=\"cn-label cn-field-label\" for=\"ff-field-valid-email\">E-Mail</label><div data-slot=\"field-content\"><input tabindex=\"-1\" data-slot=\"input\" class=\"ff-bound-input\" id=\"ff-field-valid-email\" type=\"email\" value=\"mira@bern\" aria-describedby=\"ff-field-valid-description-0\"><p data-slot=\"field-description\" id=\"ff-field-valid-description-0\">Geschäftliche Adresse verwenden.</p></div></div>",
  "combobox/combobox-states/highlighted": "<label id=\"ff-combobox-highlighted-search-fruit-label\" for=\"ff-combobox-highlighted-search-fruit\">Abholort</label><div data-slot=\"input-group\" class=\"cn-combobox-input\" role=\"group\"><input tabindex=\"-1\" data-slot=\"input-group-control\" class=\"cn-input-group-input\" id=\"ff-combobox-highlighted-search-fruit\" aria-labelledby=\"ff-combobox-highlighted-search-fruit-label\" type=\"text\" role=\"combobox\" aria-autocomplete=\"list\" aria-expanded=\"true\" aria-controls=\"ff-combobox-highlighted-fruit-list\" aria-activedescendant=\"ff-combobox-highlighted-fruit-banana\" aria-describedby=\"ff-combobox-highlighted-fruit-help\" value=\"\"><div data-slot=\"input-group-addon\" data-align=\"inline-end\"></div><button tabindex=\"-1\" data-slot=\"combobox-trigger\" type=\"button\" aria-label=\"Abholorte anzeigen\" aria-haspopup=\"listbox\" aria-expanded=\"true\" aria-controls=\"ff-combobox-highlighted-fruit-list\">Orte<svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></button></div><p id=\"ff-combobox-highlighted-fruit-help\">Ort suchen und bestätigen.</p><div data-slot=\"combobox-content\" class=\"cn-menu-target\" role=\"presentation\" dir=\"ltr\" style=\"--available-width:320px;--available-height:400px;--anchor-width:256px\"><div data-slot=\"combobox-empty\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\"></div><div data-slot=\"combobox-list\" role=\"listbox\" aria-label=\"Abholorte\" id=\"ff-combobox-highlighted-fruit-list\"><div data-slot=\"combobox-group\" role=\"group\" aria-labelledby=\"ff-combobox-highlighted-fruit-group-label\"><div data-slot=\"combobox-label\" id=\"ff-combobox-highlighted-fruit-group-label\" aria-hidden=\"true\">Abholorte</div><div data-slot=\"combobox-item\" role=\"option\" id=\"ff-combobox-highlighted-fruit-apple\" aria-selected=\"false\">Bern</div><div data-slot=\"combobox-item\" role=\"option\" id=\"ff-combobox-highlighted-fruit-banana\" aria-selected=\"false\" data-highlighted=\"\">Basel</div><div data-slot=\"combobox-item\" role=\"option\" id=\"ff-combobox-highlighted-fruit-unavailable\" aria-selected=\"false\" aria-disabled=\"true\">Zürich · gesperrt</div></div><div data-slot=\"combobox-separator\" role=\"presentation\"></div></div></div>",
  "field/field-states/vertical-invalid-field": "<div data-slot=\"field\" data-orientation=\"vertical\" class=\"cn-field cn-field-orientation-vertical\"><label data-slot=\"field-label\" class=\"cn-label cn-field-label\" for=\"ff-field-vertical-invalid-field-email\">E-Mail</label><div data-slot=\"field-content\"><input tabindex=\"-1\" data-slot=\"input\" class=\"ff-bound-input\" id=\"ff-field-vertical-invalid-field-email\" type=\"email\" value=\"mira@bern\" aria-invalid=\"true\" aria-describedby=\"ff-field-vertical-invalid-field-description-0 ff-field-vertical-invalid-field-description-1\"><p data-slot=\"field-description\" id=\"ff-field-vertical-invalid-field-description-0\">Geschäftliche Adresse verwenden.</p><div data-slot=\"field-error\" role=\"alert\" id=\"ff-field-vertical-invalid-field-description-1\">Bitte eine gültige Adresse eingeben.</div></div></div>",
  "combobox/combobox-states/selected-option": "<label id=\"ff-combobox-selected-option-search-fruit-label\" for=\"ff-combobox-selected-option-search-fruit\">Abholort</label><div data-slot=\"input-group\" class=\"cn-combobox-input\" role=\"group\"><input tabindex=\"-1\" data-slot=\"input-group-control\" class=\"cn-input-group-input\" id=\"ff-combobox-selected-option-search-fruit\" aria-labelledby=\"ff-combobox-selected-option-search-fruit-label\" type=\"text\" role=\"combobox\" aria-autocomplete=\"list\" aria-expanded=\"true\" aria-controls=\"ff-combobox-selected-option-fruit-list\" aria-describedby=\"ff-combobox-selected-option-fruit-help\" value=\"Bern\"><div data-slot=\"input-group-addon\" data-align=\"inline-end\"></div><button tabindex=\"-1\" data-slot=\"combobox-trigger\" type=\"button\" aria-label=\"Abholorte anzeigen\" aria-haspopup=\"listbox\" aria-expanded=\"true\" aria-controls=\"ff-combobox-selected-option-fruit-list\">Orte<svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 9 6 6 6-6\" fill=\"none\" stroke=\"currentColor\"></svg></button></div><p id=\"ff-combobox-selected-option-fruit-help\">Ort suchen und bestätigen.</p><div data-slot=\"combobox-content\" class=\"cn-menu-target\" role=\"presentation\" dir=\"ltr\" style=\"--available-width:320px;--available-height:400px;--anchor-width:256px\"><div data-slot=\"combobox-empty\" role=\"status\" aria-live=\"polite\" aria-atomic=\"true\"></div><div data-slot=\"combobox-list\" role=\"listbox\" aria-label=\"Abholorte\" id=\"ff-combobox-selected-option-fruit-list\"><div data-slot=\"combobox-group\" role=\"group\" aria-labelledby=\"ff-combobox-selected-option-fruit-group-label\"><div data-slot=\"combobox-label\" id=\"ff-combobox-selected-option-fruit-group-label\" aria-hidden=\"true\">Abholorte</div><div data-slot=\"combobox-item\" role=\"option\" id=\"ff-combobox-selected-option-fruit-apple\" aria-selected=\"true\">Bern<span class=\"cn-combobox-item-indicator\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m5 12 4 4 10-10\" fill=\"none\" stroke=\"currentColor\"></svg></span></div><div data-slot=\"combobox-item\" role=\"option\" id=\"ff-combobox-selected-option-fruit-banana\" aria-selected=\"false\">Basel</div><div data-slot=\"combobox-item\" role=\"option\" id=\"ff-combobox-selected-option-fruit-unavailable\" aria-selected=\"false\" aria-disabled=\"true\">Zürich · gesperrt</div></div><div data-slot=\"combobox-separator\" role=\"presentation\"></div></div></div>",
  "calendar/calendar-variants/single-default": "<div class=\"ff-calendar-excerpt\"><p class=\"ff-excerpt-label\">Kalenderausschnitt · 8.–21. November</p><div data-slot=\"calendar\" data-calendar-size=\"default\" class=\"cn-calendar rdp-root\" aria-label=\"Terminkalender\" dir=\"ltr\"><div class=\"rdp-months\"><nav class=\"rdp-nav\" aria-label=\"Kalendernavigation\"><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_previous\" aria-label=\"Vorheriger Monat\" aria-disabled=\"true\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_next\" aria-label=\"Nächster Monat\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button></nav><div class=\"rdp-month\"><div class=\"rdp-month_caption\"><span class=\"cn-calendar-caption rdp-caption_label\" aria-live=\"polite\">November 2026</span></div><table class=\"rdp-month_grid\" role=\"grid\" aria-label=\"November 2026\"><thead><tr class=\"rdp-weekdays\"><th class=\"rdp-weekday\" scope=\"col\">So</th><th class=\"rdp-weekday\" scope=\"col\">Mo</th><th class=\"rdp-weekday\" scope=\"col\">Di</th><th class=\"rdp-weekday\" scope=\"col\">Mi</th><th class=\"rdp-weekday\" scope=\"col\">Do</th><th class=\"rdp-weekday\" scope=\"col\">Fr</th><th class=\"rdp-weekday\" scope=\"col\">Sa</th></tr></thead><tbody class=\"rdp-weeks\"><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/8/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"8. November 2026\">8</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/9/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"9. November 2026\">9</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/10/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"10. November 2026\">10</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/11/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"11. November 2026\">11</button></td><td role=\"gridcell\" class=\"rdp-day rdp-selected\" aria-selected=\"true\" data-selected=\"true\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/12/2026\" data-selected-single=\"true\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"12. November 2026 · gewählt\">12</button></td><td role=\"gridcell\" class=\"rdp-day rdp-disabled\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/13/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"13. November 2026\" disabled>13</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/14/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"14. November 2026\">14</button></td></tr><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/15/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"15. November 2026\">15</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/16/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"16. November 2026\">16</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/17/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"17. November 2026\">17</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/18/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"18. November 2026\">18</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/19/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"19. November 2026\">19</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/20/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"20. November 2026\">20</button></td><td role=\"gridcell\" class=\"rdp-day rdp-today\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/21/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"21. November 2026\">21</button></td></tr></tbody></table></div></div><div class=\"rdp-footer\" role=\"status\" aria-live=\"polite\">12. November 2026</div></div></div>",
  "calendar/calendar-options/single-default": "<div class=\"ff-calendar-excerpt\"><p class=\"ff-excerpt-label\">Kalenderausschnitt · 8.–21. November</p><div data-slot=\"calendar\" data-calendar-size=\"default\" class=\"cn-calendar rdp-root\" aria-label=\"Terminkalender\" dir=\"ltr\"><div class=\"rdp-months\"><nav class=\"rdp-nav\" aria-label=\"Kalendernavigation\"><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_previous\" aria-label=\"Vorheriger Monat\" aria-disabled=\"true\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_next\" aria-label=\"Nächster Monat\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button></nav><div class=\"rdp-month\"><div class=\"rdp-month_caption\"><span class=\"cn-calendar-caption rdp-caption_label\" aria-live=\"polite\">November 2026</span></div><table class=\"rdp-month_grid\" role=\"grid\" aria-label=\"November 2026\"><thead><tr class=\"rdp-weekdays\"><th class=\"rdp-weekday\" scope=\"col\">So</th><th class=\"rdp-weekday\" scope=\"col\">Mo</th><th class=\"rdp-weekday\" scope=\"col\">Di</th><th class=\"rdp-weekday\" scope=\"col\">Mi</th><th class=\"rdp-weekday\" scope=\"col\">Do</th><th class=\"rdp-weekday\" scope=\"col\">Fr</th><th class=\"rdp-weekday\" scope=\"col\">Sa</th></tr></thead><tbody class=\"rdp-weeks\"><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/8/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"8. November 2026\">8</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/9/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"9. November 2026\">9</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/10/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"10. November 2026\">10</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/11/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"11. November 2026\">11</button></td><td role=\"gridcell\" class=\"rdp-day rdp-selected\" aria-selected=\"true\" data-selected=\"true\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/12/2026\" data-selected-single=\"true\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"12. November 2026 · gewählt\">12</button></td><td role=\"gridcell\" class=\"rdp-day rdp-disabled\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/13/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"13. November 2026\" disabled>13</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/14/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"14. November 2026\">14</button></td></tr><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/15/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"15. November 2026\">15</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/16/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"16. November 2026\">16</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/17/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"17. November 2026\">17</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/18/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"18. November 2026\">18</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/19/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"19. November 2026\">19</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/20/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"20. November 2026\">20</button></td><td role=\"gridcell\" class=\"rdp-day rdp-today\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/21/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"21. November 2026\">21</button></td></tr></tbody></table></div></div><div class=\"rdp-footer\" role=\"status\" aria-live=\"polite\">12. November 2026</div></div></div>",
  "calendar/calendar-states/disabled-date": "<div class=\"ff-calendar-excerpt\"><p class=\"ff-excerpt-label\">Kalenderausschnitt · 8.–21. November</p><div data-slot=\"calendar\" data-calendar-size=\"default\" class=\"cn-calendar rdp-root\" aria-label=\"Terminkalender\" dir=\"ltr\"><div class=\"rdp-months\"><nav class=\"rdp-nav\" aria-label=\"Kalendernavigation\"><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_previous\" aria-label=\"Vorheriger Monat\" aria-disabled=\"true\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_next\" aria-label=\"Nächster Monat\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button></nav><div class=\"rdp-month\"><div class=\"rdp-month_caption\"><span class=\"cn-calendar-caption rdp-caption_label\" aria-live=\"polite\">November 2026</span></div><table class=\"rdp-month_grid\" role=\"grid\" aria-label=\"November 2026\"><thead><tr class=\"rdp-weekdays\"><th class=\"rdp-weekday\" scope=\"col\">So</th><th class=\"rdp-weekday\" scope=\"col\">Mo</th><th class=\"rdp-weekday\" scope=\"col\">Di</th><th class=\"rdp-weekday\" scope=\"col\">Mi</th><th class=\"rdp-weekday\" scope=\"col\">Do</th><th class=\"rdp-weekday\" scope=\"col\">Fr</th><th class=\"rdp-weekday\" scope=\"col\">Sa</th></tr></thead><tbody class=\"rdp-weeks\"><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/8/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"8. November 2026\">8</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/9/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"9. November 2026\">9</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/10/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"10. November 2026\">10</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/11/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"11. November 2026\">11</button></td><td role=\"gridcell\" class=\"rdp-day rdp-selected\" aria-selected=\"true\" data-selected=\"true\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/12/2026\" data-selected-single=\"true\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"12. November 2026 · gewählt\">12</button></td><td role=\"gridcell\" class=\"rdp-day rdp-disabled\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/13/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"13. November 2026\" disabled>13</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/14/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"14. November 2026\">14</button></td></tr><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/15/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"15. November 2026\">15</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/16/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"16. November 2026\">16</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/17/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"17. November 2026\">17</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/18/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"18. November 2026\">18</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/19/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"19. November 2026\">19</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/20/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"20. November 2026\">20</button></td><td role=\"gridcell\" class=\"rdp-day rdp-today\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/21/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"21. November 2026\">21</button></td></tr></tbody></table></div></div><div class=\"rdp-footer\" role=\"status\" aria-live=\"polite\">12. November 2026</div></div></div>",
  "calendar/calendar-states/day-keyboard-focus": "<div class=\"ff-calendar-excerpt\"><p class=\"ff-excerpt-label\">Kalenderausschnitt · 8.–21. November</p><div data-slot=\"calendar\" data-calendar-size=\"default\" class=\"cn-calendar rdp-root\" aria-label=\"Terminkalender\" dir=\"ltr\"><div class=\"rdp-months\"><nav class=\"rdp-nav\" aria-label=\"Kalendernavigation\"><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_previous\" aria-label=\"Vorheriger Monat\" aria-disabled=\"true\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_next\" aria-label=\"Nächster Monat\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button></nav><div class=\"rdp-month\"><div class=\"rdp-month_caption\"><span class=\"cn-calendar-caption rdp-caption_label\" aria-live=\"polite\">November 2026</span></div><table class=\"rdp-month_grid\" role=\"grid\" aria-label=\"November 2026\"><thead><tr class=\"rdp-weekdays\"><th class=\"rdp-weekday\" scope=\"col\">So</th><th class=\"rdp-weekday\" scope=\"col\">Mo</th><th class=\"rdp-weekday\" scope=\"col\">Di</th><th class=\"rdp-weekday\" scope=\"col\">Mi</th><th class=\"rdp-weekday\" scope=\"col\">Do</th><th class=\"rdp-weekday\" scope=\"col\">Fr</th><th class=\"rdp-weekday\" scope=\"col\">Sa</th></tr></thead><tbody class=\"rdp-weeks\"><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/8/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"8. November 2026\">8</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/9/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"9. November 2026\">9</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/10/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"10. November 2026\">10</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/11/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"11. November 2026\">11</button></td><td role=\"gridcell\" class=\"rdp-day rdp-selected\" aria-selected=\"true\" data-selected=\"true\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/12/2026\" data-selected-single=\"true\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"12. November 2026 · gewählt\">12</button></td><td role=\"gridcell\" class=\"rdp-day rdp-disabled\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/13/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"13. November 2026\" disabled>13</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/14/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"14. November 2026\">14</button></td></tr><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/15/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"15. November 2026\">15</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/16/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"16. November 2026\">16</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/17/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"17. November 2026\">17</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/18/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"18. November 2026\">18</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-comparison-focus data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/19/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"19. November 2026\">19</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/20/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"20. November 2026\">20</button></td><td role=\"gridcell\" class=\"rdp-day rdp-today\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/21/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"21. November 2026\">21</button></td></tr></tbody></table></div></div><div class=\"rdp-footer\" role=\"status\" aria-live=\"polite\">12. November 2026</div></div></div>",
  "calendar/calendar-options/compact": "<div class=\"ff-calendar-excerpt\"><p class=\"ff-excerpt-label\">Kalenderausschnitt · 8.–21. November</p><div data-slot=\"calendar\" data-calendar-size=\"sm\" class=\"cn-calendar rdp-root\" aria-label=\"Terminkalender\" dir=\"ltr\"><div class=\"rdp-months\"><nav class=\"rdp-nav\" aria-label=\"Kalendernavigation\"><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_previous\" aria-label=\"Vorheriger Monat\" aria-disabled=\"true\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_next\" aria-label=\"Nächster Monat\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button></nav><div class=\"rdp-month\"><div class=\"rdp-month_caption\"><span class=\"cn-calendar-caption rdp-caption_label\" aria-live=\"polite\">November 2026</span></div><table class=\"rdp-month_grid\" role=\"grid\" aria-label=\"November 2026\"><thead><tr class=\"rdp-weekdays\"><th class=\"rdp-weekday\" scope=\"col\">So</th><th class=\"rdp-weekday\" scope=\"col\">Mo</th><th class=\"rdp-weekday\" scope=\"col\">Di</th><th class=\"rdp-weekday\" scope=\"col\">Mi</th><th class=\"rdp-weekday\" scope=\"col\">Do</th><th class=\"rdp-weekday\" scope=\"col\">Fr</th><th class=\"rdp-weekday\" scope=\"col\">Sa</th></tr></thead><tbody class=\"rdp-weeks\"><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/8/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"8. November 2026\">8</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/9/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"9. November 2026\">9</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/10/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"10. November 2026\">10</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/11/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"11. November 2026\">11</button></td><td role=\"gridcell\" class=\"rdp-day rdp-selected\" aria-selected=\"true\" data-selected=\"true\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/12/2026\" data-selected-single=\"true\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"12. November 2026 · gewählt\">12</button></td><td role=\"gridcell\" class=\"rdp-day rdp-disabled\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/13/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"13. November 2026\" disabled>13</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/14/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"14. November 2026\">14</button></td></tr><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/15/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"15. November 2026\">15</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/16/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"16. November 2026\">16</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/17/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"17. November 2026\">17</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/18/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"18. November 2026\">18</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/19/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"19. November 2026\">19</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/20/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"20. November 2026\">20</button></td><td role=\"gridcell\" class=\"rdp-day rdp-today\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/21/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"21. November 2026\">21</button></td></tr></tbody></table></div></div><div class=\"rdp-footer\" role=\"status\" aria-live=\"polite\">12. November 2026</div></div></div>",
  "calendar/calendar-options/large": "<div class=\"ff-calendar-excerpt\"><p class=\"ff-excerpt-label\">Kalenderausschnitt · 8.–21. November</p><div data-slot=\"calendar\" data-calendar-size=\"lg\" class=\"cn-calendar rdp-root\" aria-label=\"Terminkalender\" dir=\"ltr\"><div class=\"rdp-months\"><nav class=\"rdp-nav\" aria-label=\"Kalendernavigation\"><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_previous\" aria-label=\"Vorheriger Monat\" aria-disabled=\"true\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_next\" aria-label=\"Nächster Monat\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button></nav><div class=\"rdp-month\"><div class=\"rdp-month_caption\"><span class=\"cn-calendar-caption rdp-caption_label\" aria-live=\"polite\">November 2026</span></div><table class=\"rdp-month_grid\" role=\"grid\" aria-label=\"November 2026\"><thead><tr class=\"rdp-weekdays\"><th class=\"rdp-weekday\" scope=\"col\">So</th><th class=\"rdp-weekday\" scope=\"col\">Mo</th><th class=\"rdp-weekday\" scope=\"col\">Di</th><th class=\"rdp-weekday\" scope=\"col\">Mi</th><th class=\"rdp-weekday\" scope=\"col\">Do</th><th class=\"rdp-weekday\" scope=\"col\">Fr</th><th class=\"rdp-weekday\" scope=\"col\">Sa</th></tr></thead><tbody class=\"rdp-weeks\"><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/8/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"8. November 2026\">8</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/9/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"9. November 2026\">9</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/10/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"10. November 2026\">10</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/11/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"11. November 2026\">11</button></td><td role=\"gridcell\" class=\"rdp-day rdp-selected\" aria-selected=\"true\" data-selected=\"true\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/12/2026\" data-selected-single=\"true\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"12. November 2026 · gewählt\">12</button></td><td role=\"gridcell\" class=\"rdp-day rdp-disabled\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/13/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"13. November 2026\" disabled>13</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/14/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"14. November 2026\">14</button></td></tr><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/15/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"15. November 2026\">15</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/16/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"16. November 2026\">16</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/17/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"17. November 2026\">17</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/18/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"18. November 2026\">18</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/19/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"19. November 2026\">19</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/20/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"20. November 2026\">20</button></td><td role=\"gridcell\" class=\"rdp-day rdp-today\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/21/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"21. November 2026\">21</button></td></tr></tbody></table></div></div><div class=\"rdp-footer\" role=\"status\" aria-live=\"polite\">12. November 2026</div></div></div>",
  "calendar/calendar-variants/range-start-middle-end": "<div class=\"ff-calendar-excerpt\"><p class=\"ff-excerpt-label\">Kalenderausschnitt · 8.–21. November</p><div data-slot=\"calendar\" data-calendar-size=\"default\" class=\"cn-calendar rdp-root\" aria-label=\"Terminkalender\" dir=\"ltr\"><div class=\"rdp-months\"><nav class=\"rdp-nav\" aria-label=\"Kalendernavigation\"><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_previous\" aria-label=\"Vorheriger Monat\" aria-disabled=\"true\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_next\" aria-label=\"Nächster Monat\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button></nav><div class=\"rdp-month\"><div class=\"rdp-month_caption\"><span class=\"cn-calendar-caption rdp-caption_label\" aria-live=\"polite\">November 2026</span></div><table class=\"rdp-month_grid\" role=\"grid\" aria-label=\"November 2026\"><thead><tr class=\"rdp-weekdays\"><th class=\"rdp-weekday\" scope=\"col\">So</th><th class=\"rdp-weekday\" scope=\"col\">Mo</th><th class=\"rdp-weekday\" scope=\"col\">Di</th><th class=\"rdp-weekday\" scope=\"col\">Mi</th><th class=\"rdp-weekday\" scope=\"col\">Do</th><th class=\"rdp-weekday\" scope=\"col\">Fr</th><th class=\"rdp-weekday\" scope=\"col\">Sa</th></tr></thead><tbody class=\"rdp-weeks\"><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/8/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"8. November 2026\">8</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/9/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"9. November 2026\">9</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/10/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"10. November 2026\">10</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/11/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"11. November 2026\">11</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/12/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"12. November 2026\">12</button></td><td role=\"gridcell\" class=\"rdp-day rdp-disabled\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/13/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"13. November 2026\" disabled>13</button></td><td role=\"gridcell\" class=\"rdp-day rdp-selected rdp-range_start\" aria-selected=\"true\" data-selected=\"true\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/14/2026\" data-selected-single=\"false\" data-range-start=\"true\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"14. November 2026 · gewählt\">14</button></td></tr><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day rdp-selected rdp-range_middle\" aria-selected=\"true\" data-selected=\"true\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/15/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"true\" aria-label=\"15. November 2026 · gewählt\">15</button></td><td role=\"gridcell\" class=\"rdp-day rdp-selected rdp-range_end\" aria-selected=\"true\" data-selected=\"true\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/16/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"true\" data-range-middle=\"false\" aria-label=\"16. November 2026 · gewählt\">16</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/17/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"17. November 2026\">17</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/18/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"18. November 2026\">18</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/19/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"19. November 2026\">19</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/20/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"20. November 2026\">20</button></td><td role=\"gridcell\" class=\"rdp-day rdp-today\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/21/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"21. November 2026\">21</button></td></tr></tbody></table></div></div><div class=\"rdp-footer\" role=\"status\" aria-live=\"polite\">14.–16. November 2026</div></div></div>",
  "calendar/calendar-states/hidden-date": "<div class=\"ff-calendar-excerpt\"><p class=\"ff-excerpt-label\">Kalenderausschnitt · 8.–21. November</p><div data-slot=\"calendar\" data-calendar-size=\"default\" class=\"cn-calendar rdp-root\" aria-label=\"Terminkalender\" dir=\"ltr\"><div class=\"rdp-months\"><nav class=\"rdp-nav\" aria-label=\"Kalendernavigation\"><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_previous\" aria-label=\"Vorheriger Monat\" aria-disabled=\"true\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_next\" aria-label=\"Nächster Monat\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button></nav><div class=\"rdp-month\"><div class=\"rdp-month_caption\"><span class=\"cn-calendar-caption rdp-caption_label\" aria-live=\"polite\">November 2026</span></div><table class=\"rdp-month_grid\" role=\"grid\" aria-label=\"November 2026\"><thead><tr class=\"rdp-weekdays\"><th class=\"rdp-weekday\" scope=\"col\">So</th><th class=\"rdp-weekday\" scope=\"col\">Mo</th><th class=\"rdp-weekday\" scope=\"col\">Di</th><th class=\"rdp-weekday\" scope=\"col\">Mi</th><th class=\"rdp-weekday\" scope=\"col\">Do</th><th class=\"rdp-weekday\" scope=\"col\">Fr</th><th class=\"rdp-weekday\" scope=\"col\">Sa</th></tr></thead><tbody class=\"rdp-weeks\"><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/8/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"8. November 2026\">8</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/9/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"9. November 2026\">9</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/10/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"10. November 2026\">10</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/11/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"11. November 2026\">11</button></td><td role=\"gridcell\" class=\"rdp-day rdp-selected\" aria-selected=\"true\" data-selected=\"true\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/12/2026\" data-selected-single=\"true\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"12. November 2026 · gewählt\">12</button></td><td role=\"gridcell\" class=\"rdp-day rdp-disabled\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/13/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"13. November 2026\" disabled>13</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/14/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"14. November 2026\">14</button></td></tr><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/15/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"15. November 2026\">15</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/16/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"16. November 2026\">16</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/17/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"17. November 2026\">17</button></td><td role=\"gridcell\" class=\"rdp-day rdp-hidden\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/18/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"18. November 2026\">18</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/19/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"19. November 2026\">19</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/20/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"20. November 2026\">20</button></td><td role=\"gridcell\" class=\"rdp-day rdp-today\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/21/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"21. November 2026\">21</button></td></tr></tbody></table></div></div><div class=\"rdp-footer\" role=\"status\" aria-live=\"polite\">12. November 2026</div></div></div>",
  "calendar/calendar-options/noninteractive": "<div class=\"ff-calendar-excerpt\"><p class=\"ff-excerpt-label\">Kalenderausschnitt · 8.–21. November</p><div data-slot=\"calendar\" data-calendar-size=\"default\" class=\"cn-calendar rdp-root\" aria-label=\"Terminkalender\" dir=\"ltr\"><div class=\"rdp-months\"><nav class=\"rdp-nav\" aria-label=\"Kalendernavigation\"><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_previous\" aria-label=\"Vorheriger Monat\" aria-disabled=\"true\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_next\" aria-label=\"Nächster Monat\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button></nav><div class=\"rdp-month\"><div class=\"rdp-month_caption\"><span class=\"cn-calendar-caption rdp-caption_label\" aria-live=\"polite\">November 2026</span></div><table class=\"rdp-month_grid\" role=\"grid\" aria-label=\"November 2026\"><thead><tr class=\"rdp-weekdays\"><th class=\"rdp-weekday\" scope=\"col\">So</th><th class=\"rdp-weekday\" scope=\"col\">Mo</th><th class=\"rdp-weekday\" scope=\"col\">Di</th><th class=\"rdp-weekday\" scope=\"col\">Mi</th><th class=\"rdp-weekday\" scope=\"col\">Do</th><th class=\"rdp-weekday\" scope=\"col\">Fr</th><th class=\"rdp-weekday\" scope=\"col\">Sa</th></tr></thead><tbody class=\"rdp-weeks\"><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><span>8</span></td><td role=\"gridcell\" class=\"rdp-day\"><span>9</span></td><td role=\"gridcell\" class=\"rdp-day\"><span>10</span></td><td role=\"gridcell\" class=\"rdp-day\"><span>11</span></td><td role=\"gridcell\" class=\"rdp-day rdp-selected\" aria-selected=\"true\" data-selected=\"true\"><span>12</span></td><td role=\"gridcell\" class=\"rdp-day rdp-disabled\"><span>13</span></td><td role=\"gridcell\" class=\"rdp-day\"><span>14</span></td></tr><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><span>15</span></td><td role=\"gridcell\" class=\"rdp-day\"><span>16</span></td><td role=\"gridcell\" class=\"rdp-day\"><span>17</span></td><td role=\"gridcell\" class=\"rdp-day\"><span>18</span></td><td role=\"gridcell\" class=\"rdp-day\"><span>19</span></td><td role=\"gridcell\" class=\"rdp-day\"><span>20</span></td><td role=\"gridcell\" class=\"rdp-day rdp-today\"><span>21</span></td></tr></tbody></table></div></div><div class=\"rdp-footer\" role=\"status\" aria-live=\"polite\">12. November 2026</div></div></div>",
  "calendar/calendar-options/caption-dropdown": "<div class=\"ff-calendar-excerpt\"><p class=\"ff-excerpt-label\">Kalenderausschnitt · 8.–21. November</p><div data-slot=\"calendar\" data-calendar-size=\"default\" class=\"cn-calendar rdp-root\" aria-label=\"Terminkalender\" dir=\"ltr\"><div class=\"rdp-months\"><nav class=\"rdp-nav\" aria-label=\"Kalendernavigation\"><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_previous\" aria-label=\"Vorheriger Monat\" aria-disabled=\"true\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_next\" aria-label=\"Nächster Monat\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button></nav><div class=\"rdp-month\"><div class=\"rdp-month_caption\"><div class=\"rdp-dropdowns\"><span class=\"rdp-dropdown_root\"><select tabindex=\"-1\" class=\"rdp-dropdown\" aria-label=\"Monat wählen\"><option>November</option><option>Dezember</option></select><span class=\"cn-calendar-caption-label\" aria-hidden=\"true\">Nov<svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></span></span></div></div><table class=\"rdp-month_grid\" role=\"grid\" aria-label=\"November 2026\"><thead><tr class=\"rdp-weekdays\"><th class=\"rdp-weekday\" scope=\"col\">So</th><th class=\"rdp-weekday\" scope=\"col\">Mo</th><th class=\"rdp-weekday\" scope=\"col\">Di</th><th class=\"rdp-weekday\" scope=\"col\">Mi</th><th class=\"rdp-weekday\" scope=\"col\">Do</th><th class=\"rdp-weekday\" scope=\"col\">Fr</th><th class=\"rdp-weekday\" scope=\"col\">Sa</th></tr></thead><tbody class=\"rdp-weeks\"><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/8/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"8. November 2026\">8</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/9/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"9. November 2026\">9</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/10/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"10. November 2026\">10</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/11/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"11. November 2026\">11</button></td><td role=\"gridcell\" class=\"rdp-day rdp-selected\" aria-selected=\"true\" data-selected=\"true\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/12/2026\" data-selected-single=\"true\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"12. November 2026 · gewählt\">12</button></td><td role=\"gridcell\" class=\"rdp-day rdp-disabled\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/13/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"13. November 2026\" disabled>13</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/14/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"14. November 2026\">14</button></td></tr><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/15/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"15. November 2026\">15</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/16/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"16. November 2026\">16</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/17/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"17. November 2026\">17</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/18/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"18. November 2026\">18</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/19/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"19. November 2026\">19</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/20/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"20. November 2026\">20</button></td><td role=\"gridcell\" class=\"rdp-day rdp-today\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/21/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"21. November 2026\">21</button></td></tr></tbody></table></div></div><div class=\"rdp-footer\" role=\"status\" aria-live=\"polite\">12. November 2026</div></div></div>",
  "calendar/calendar-options/week-numbers": "<div class=\"ff-calendar-excerpt\"><p class=\"ff-excerpt-label\">Kalenderausschnitt · 8.–21. November</p><div data-slot=\"calendar\" data-calendar-size=\"default\" class=\"cn-calendar rdp-root\" aria-label=\"Terminkalender\" dir=\"ltr\"><div class=\"rdp-months\"><nav class=\"rdp-nav\" aria-label=\"Kalendernavigation\"><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_previous\" aria-label=\"Vorheriger Monat\" aria-disabled=\"true\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_next\" aria-label=\"Nächster Monat\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button></nav><div class=\"rdp-month\"><div class=\"rdp-month_caption\"><span class=\"cn-calendar-caption rdp-caption_label\" aria-live=\"polite\">November 2026</span></div><table class=\"rdp-month_grid\" role=\"grid\" aria-label=\"November 2026\"><thead><tr class=\"rdp-weekdays\"><th class=\"rdp-week_number_header\" scope=\"col\">KW</th><th class=\"rdp-weekday\" scope=\"col\">So</th><th class=\"rdp-weekday\" scope=\"col\">Mo</th><th class=\"rdp-weekday\" scope=\"col\">Di</th><th class=\"rdp-weekday\" scope=\"col\">Mi</th><th class=\"rdp-weekday\" scope=\"col\">Do</th><th class=\"rdp-weekday\" scope=\"col\">Fr</th><th class=\"rdp-weekday\" scope=\"col\">Sa</th></tr></thead><tbody class=\"rdp-weeks\"><tr class=\"rdp-week\"><td class=\"rdp-week_number\"><div>45</div></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/8/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"8. November 2026\">8</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/9/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"9. November 2026\">9</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/10/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"10. November 2026\">10</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/11/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"11. November 2026\">11</button></td><td role=\"gridcell\" class=\"rdp-day rdp-selected\" aria-selected=\"true\" data-selected=\"true\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/12/2026\" data-selected-single=\"true\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"12. November 2026 · gewählt\">12</button></td><td role=\"gridcell\" class=\"rdp-day rdp-disabled\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/13/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"13. November 2026\" disabled>13</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/14/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"14. November 2026\">14</button></td></tr><tr class=\"rdp-week\"><td class=\"rdp-week_number\"><div>46</div></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/15/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"15. November 2026\">15</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/16/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"16. November 2026\">16</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/17/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"17. November 2026\">17</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/18/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"18. November 2026\">18</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/19/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"19. November 2026\">19</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/20/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"20. November 2026\">20</button></td><td role=\"gridcell\" class=\"rdp-day rdp-today\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/21/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"21. November 2026\">21</button></td></tr></tbody></table></div></div><div class=\"rdp-footer\" role=\"status\" aria-live=\"polite\">12. November 2026</div></div></div>",
  "calendar/calendar-variants/multiple-example": "<div class=\"ff-calendar-excerpt\"><p class=\"ff-excerpt-label\">Kalenderausschnitt · 8.–21. November</p><div data-slot=\"calendar\" data-calendar-size=\"default\" class=\"cn-calendar rdp-root\" aria-label=\"Terminkalender\" dir=\"ltr\"><div class=\"rdp-months\"><nav class=\"rdp-nav\" aria-label=\"Kalendernavigation\"><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_previous\" aria-label=\"Vorheriger Monat\" aria-disabled=\"true\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button><button tabindex=\"-1\" type=\"button\" class=\"rdp-button_next\" aria-label=\"Nächster Monat\"><svg viewbox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m14 6-6 6 6 6\" fill=\"none\" stroke=\"currentColor\"></svg></button></nav><div class=\"rdp-month\"><div class=\"rdp-month_caption\"><span class=\"cn-calendar-caption rdp-caption_label\" aria-live=\"polite\">November 2026</span></div><table class=\"rdp-month_grid\" role=\"grid\" aria-label=\"November 2026\"><thead><tr class=\"rdp-weekdays\"><th class=\"rdp-weekday\" scope=\"col\">So</th><th class=\"rdp-weekday\" scope=\"col\">Mo</th><th class=\"rdp-weekday\" scope=\"col\">Di</th><th class=\"rdp-weekday\" scope=\"col\">Mi</th><th class=\"rdp-weekday\" scope=\"col\">Do</th><th class=\"rdp-weekday\" scope=\"col\">Fr</th><th class=\"rdp-weekday\" scope=\"col\">Sa</th></tr></thead><tbody class=\"rdp-weeks\"><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/8/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"8. November 2026\">8</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/9/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"9. November 2026\">9</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/10/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"10. November 2026\">10</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/11/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"11. November 2026\">11</button></td><td role=\"gridcell\" class=\"rdp-day rdp-selected\" aria-selected=\"true\" data-selected=\"true\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/12/2026\" data-selected-single=\"true\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"12. November 2026 · gewählt\">12</button></td><td role=\"gridcell\" class=\"rdp-day rdp-disabled\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/13/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"13. November 2026\" disabled>13</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/14/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"14. November 2026\">14</button></td></tr><tr class=\"rdp-week\"><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/15/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"15. November 2026\">15</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/16/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"16. November 2026\">16</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/17/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"17. November 2026\">17</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/18/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"18. November 2026\">18</button></td><td role=\"gridcell\" class=\"rdp-day rdp-selected\" aria-selected=\"true\" data-selected=\"true\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/19/2026\" data-selected-single=\"true\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"19. November 2026 · gewählt\">19</button></td><td role=\"gridcell\" class=\"rdp-day\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/20/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"20. November 2026\">20</button></td><td role=\"gridcell\" class=\"rdp-day rdp-today\"><button tabindex=\"-1\" type=\"button\" data-slot=\"button\" class=\"cn-calendar-day-button rdp-day\" data-day=\"11/21/2026\" data-selected-single=\"false\" data-range-start=\"false\" data-range-end=\"false\" data-range-middle=\"false\" aria-label=\"21. November 2026\">21</button></td></tr></tbody></table></div></div><div class=\"rdp-footer\" role=\"status\" aria-live=\"polite\">12. und 19. November 2026</div></div></div>",
}

export function getFormsFeedbackComparisons(component: string, section: ComparisonSection): ComponentComparison[] {
  return comparisons[component]?.[section] ?? []
}

export function getFormsFeedbackSpecimen(component: string, groupId: string, itemId: string): string | undefined {
  return specimens[component + '/' + groupId + '/' + itemId]
}
