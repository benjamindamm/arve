import type { ComparisonSection, ComponentComparison } from '../component-comparison-data'

// Read-only source snapshot; hashes identify evidence, not runtime acceptance.
const sourceHashes: Record<string, Record<string, string>> = {
  "breadcrumb": {
    "component.json": "2995b2d9c001d714a177717a53541f5f7713c9ff22627ee791d5bfa6ba6526a6",
    "interface.json": "99aee41b4b04d52485e41f5c33fd92ec81b241f68ca4b520f00634708f20a518",
    "layout.css": "04f859d59cdf5143d2676730312022402f812be95d65abdad26f100f6ff02dcc",
    "behavior.scxml": "6c87eb84f4f65a186644b6c59905dfc093b9a1484ec2ca11463528a9430fd51d",
    "accessibility.html": "2c29497ac02b6869b0cabebd56cb7b52ec8438a12f725b8eccef22ad0e27f268",
    "stories.json": "cbdf7b137b1a3d68268dfe62f2ea2bc810393991f27433b2bb9b095341effaae",
    "ux.json": "28d65517f9a759f3561c1a07b5c689adca25d7dfb2e5f3d96e9e6de2e69a3fbf"
  },
  "navigation-menu": {
    "component.json": "688d54e10cc162e41af7587b586d6ac98a6b67d6fb21e6099b00407b36540b18",
    "interface.json": "5a8e904df8dafe64b010e854b51d0ae40d6c6064e34de8b60399113636d44b5b",
    "layout.css": "92e7cfc5ad4c6e1c54ec82522ff59e7216c50fdc0b166ac5377bc24c50e2c6fb",
    "behavior.scxml": "4cd942b7649915e37517441bf62d938e794ba0e8eaf8c9b6b400c87233e82a6f",
    "accessibility.html": "166e9bffa186d9e7e507a2f7bd1bfb1bd27ba03e54ca8175c5f41c5934728989",
    "stories.json": "3065d70b6c1a4690eebdba5912b57521bb257a8fb649411bb5b616d66c7553d9",
    "ux.json": "5a4cb7989ece9f3052e843d61165235f265e80c7669ce827380df1a98e4a0f0c"
  },
  "menubar": {
    "component.json": "c3fd7e853c3ffd0b453f25e8ec7428e73fd7c157e941bce4e9d6fa1fb4a33330",
    "interface.json": "b94a886b27d588e52c7190102cb32a27737d440389a1d099babd726d41cfb364",
    "layout.css": "34be87ef7b56806f5d29cee0241110bd634016673b6f3357aa9ed66dee836b6e",
    "behavior.scxml": "6ff3cdfd8b80a722450c90ac8e01edb01be0b67efceb21df630c47b45c471fae",
    "accessibility.html": "863e92c96555f5b2d53053988dab255a9a552d72d6b88bcd53a72ffd3f430aee",
    "stories.json": "a4d4101efa22e786384b02ab4f5b1aa25d9bdb6f4882df375dbfd74545dbe159",
    "ux.json": "45071b7c8bff2e132e930f09cbd0613cc0888f5f8b4208e3ed444a2204162102"
  },
  "dropdown-menu": {
    "component.json": "3f365286fecffb7e6ae20ca6809b3e25c8a1e4ae19398c460fda65f2cb470c57",
    "interface.json": "ff2f702d7e9073e92df142467b2085beb261f3b227bfb7791bc43500181c9498",
    "layout.css": "dc45af567d959c5a410810cd40d4796eb5d3b9d8e26cc0ee2f7358d6caec2509",
    "behavior.scxml": "112f6ad48fe4dfc8e331738d14b92c5567b0b7f89375677e98119215e17868dc",
    "accessibility.html": "c8e2a352667a5e1583e379c6ecef415d7595f05d95a9ccaf0734cc472bdc4476",
    "stories.json": "f8d5142b350f9e375362d69e3d254823d2b84aca7bf5ad28397649389dc16a2b",
    "ux.json": "74027d05835a48e6ab4bed98dcc2e15ef88acf99bad33c5beb61e6531ae967fc"
  },
  "context-menu": {
    "component.json": "13493ed0e6a01229ae9a77feeda4d7fb6757134af97a4f4afca2d5bf579548c9",
    "interface.json": "3ed04a9bfa1bd5963f312ded868a0cf62bceef50795162062c251e7855d61ec8",
    "layout.css": "9e1b17f568ea9d0f02915ec3457fb7dc57c21cb24d627f61206e858c14e00e12",
    "behavior.scxml": "72cc03afee39d0a236777538e8d7f5f44253bc8c5b6cdcbd03c6ff3c7ed571d4",
    "accessibility.html": "1dc34937123fb472f4a207c780c7bc9d5fb70c49e5974b62b51176fdc0d58ea6",
    "stories.json": "3cb6b6c44cce9f2dc38216b850415e8467a679023ed263f9013a0d51fb359ee1",
    "ux.json": "7006aba5494a237ebb3776577e3df619f36a73874d809a578c4cb999e541ce85"
  },
  "command": {
    "component.json": "e7af65d735ec201f686d6c027fc9993b28d0c6e7cc9fe15d510b34120ba7013d",
    "interface.json": "4f40914663efae2568065ed8cb3ede1a56853c98524c17950fc51cea6359300a",
    "layout.css": "7f35050d5978c3379e4787e8a15e256209800667123c6c99c926dd5a0f648e28",
    "behavior.scxml": "ed43c459e6f32c9036b5eba2932df549724be80e5bd388d54580d4501bf60c3d",
    "accessibility.html": "798a2035c8ff08a23038ca669ae82b9e9be32573a0c5fda400ad3f5cb5d2cf5c",
    "stories.json": "8dd8e4406e8377dbc9e5355850fbd0e49224939bc845695b86bb4fba16dac801",
    "ux.json": "2c818fa67cd712c82cdffa48dd4026f6e234282f9c2436a7ab5e786d252a85f6"
  },
  "sidebar": {
    "component.json": "d9f950bac4d005ff3c51a5b3f2f8e09ddb380e8b7b8aeb427f390c955dd91568",
    "interface.json": "ef5a6b0bc4431bd4471468ec85385fb8ee2505fbc3cfdd2788e2bb67acac7957",
    "layout.css": "65601155e10833a749b01e980b4ad71d5b62b5fcefed2a85691da0c10a03c2d1",
    "behavior.scxml": "2ea4cc2e658f0fb0a7bd07719c76705f56c338d15ea9a63d1457ef6a77d4584d",
    "accessibility.html": "9adb9ec03ad202e7b0efc6c2c7f2d501ec27918a531197548569ce2cf4df445b",
    "stories.json": "d1cf55e59ab994eccd413e0d5aab0830563bd01aba48a68cba3b2eaa7a1c627e",
    "ux.json": "9f15a010311e5aa8554875624f4625f24541c4c618127eda56eeb3ba6baacc36"
  },
  "tabs": {
    "component.json": "8c2ba18eb203320ce994710ef7b363cd1fa11dd78e84b9c1dc652908cbac66c1",
    "interface.json": "4c72008b3027f2711f80dcb5540985e3ec44ed4042c437b51fc216e5d2c0066f",
    "layout.css": "2a086e3f17650910a3beb3a64f747ab35ca18049a1e84bbbcc9f69976e26cff1",
    "behavior.scxml": "e42281a4d971ccb2bad0d547b8901e5356d0bf05d937bee3838a12e0b44020f3",
    "accessibility.html": "2583d0744551aaa6aaccd866eda0ef3111acdd8bc6b37e711ba0826304b777ed",
    "stories.json": "8fa62f700af1e2e8a327fd70cf213df327b8a772f7eb7b804124a3542cb9b916",
    "ux.json": "3435b276a5f6aba31329c0b2957bc29c76d27c591d8b4c4b5c1143b972a7bc2a"
  },
  "pagination": {
    "component.json": "32908785c5807c2e36ff5ec78edfc3e175f7ba7d73ff87bd71745e8ac2465d91",
    "interface.json": "19ecf70a8458f14ae624fe7885c80b6c64f41631884cbf6943c40949dad4f7d1",
    "layout.css": "d13ba0e4ddd80369e4fff735f08c484e126a0afb6c6ae2c65cabe553bf5da125",
    "behavior.scxml": "048c609e7057822c044fb5f25179260ac3f6f5ba59dbaaa83eb8283051c6ef4d",
    "accessibility.html": "02e17364bf5f6ee74a3985084a1af878ca56a6b171719241d1a4acb923b9e675",
    "stories.json": "6d5f83cd83ee6c791126a1677b85cc0a4ecdec39694aadcfbeba50aa0e6def84",
    "ux.json": "1784f6fbcc014d1fe8ba5be9d0ea1f02c9f7667e8cc7855e383c00fc05f04906"
  },
  "accordion": {
    "component.json": "c6d85d60dd2c2e4ca88d95e4dc8732b65095cb1be537da6adf67c4c61d3908f7",
    "interface.json": "7305ce94ddff764da078eb1095651d03156ed819f97964a98a36268629a5e1e9",
    "layout.css": "714f46c187f2b5c7f9cc7c6bdda381f79e369df522cee26936ccc709b4198a6e",
    "behavior.scxml": "5bcd500d4d8b0ee3809950ac4f270602720827eeb89f03ed259e4a867ce79ba5",
    "accessibility.html": "a10cead7b05a31e4e1a8dcaa1209ba51b23ab0ec1410939e25e7f2b92c8bcdab",
    "stories.json": "6610f236da15f247d01d4d7c2052c28333c92d4aaf0a593901a34683b339b29c",
    "ux.json": "30da89a2d2b03f0b200dc3ce60ed2dd7c4285115ee0be27853bcb700f9fbba10"
  },
  "collapsible": {
    "component.json": "63be6fd1734b7761f32dc65576eedeee95bf1e4dde5e89b0e11c2f166770c990",
    "interface.json": "74fe43f8a510d785a4e8d9fe44a08413f7fef3628d05da3476f08701a4f7b7db",
    "layout.css": "6540fa6c3cb12a758cc637e4a1d03984f6e270365921dbb791b33fe585035214",
    "behavior.scxml": "87dd35ba25774534c14d729370ce2e54a73e2266e0e9a5da9eead8f09aff6b87",
    "accessibility.html": "18d82e8626be2436be6d310ae36b74cc26d5c640fc78bfd98e55e37fa3f5fb82",
    "stories.json": "02c589312e44af853acb1f80b6b8877da21cea72c5f1e76f8c86eceea326539f",
    "ux.json": "193fadb758c86633857f375e2042d771bfc63d3d62d271a29055f77db155f26d"
  },
  "scroll-area": {
    "component.json": "8ac55af192adebe52160833ca2819518b7fd8047c283d87726e262524aedc6b1",
    "interface.json": "d65733b8b3c7aa642c92a93e1c8ce4c11ba3534d715ce5b369ec075608b24385",
    "layout.css": "a32b0ecdf8b7d7e6eb0480b45644bd6af6aa50fe51763c2b5b30c11e1ae0a810",
    "behavior.scxml": "7cd1769945098b3271f8298e41d958ec3e745ac260eb619719a3946678339a59",
    "accessibility.html": "88c149b0d1b0d19b95fe780a29bee2d33c4d81260a87efbbc247dcf761522d06",
    "stories.json": "2fe2c6158e3aa39f56522cb913e02723fb28a9cf8c552be48e297116f717d651",
    "ux.json": "c5deb1f90318a5fd5ccac36712f4aba9447b2e2eae6286db6934602533b5f54c"
  },
  "dialog": {
    "component.json": "ecd431b4f2bc87937df2fa6983cebce8c977de96427617c670e702a059d3274d",
    "interface.json": "28f93606144ae0737aee8afe18cf6b9f1bb6f24b24dcdfca0e153c86d993bc19",
    "layout.css": "26e16ad2c2752e67403aa7f822c3f739a41dd716fe03491ffa3cafeebf1c2692",
    "behavior.scxml": "674f5054fce6baee987ff95b0dc4221947ec6d633f89a5ec3bb16bb8f39ec543",
    "accessibility.html": "7c3c4b6559aabdff7e0ef14d62cc336355f44b691d3968d8c4f8e3a07c43800f",
    "stories.json": "cc0bba2fa6d47c406791ac7d8548fa3600f8bd487fce669d3bb972dadaf87265",
    "ux.json": "77203c1aa81359f36bd754fd4e322ed886a52bf00e9e96c68594139f88dbe45e"
  },
  "alert-dialog": {
    "component.json": "346e1f740ea44d635a2a7dadd7dd21c87c01869f52b6a6391c227c36b6f91deb",
    "interface.json": "9f55fea40e0e7300ab8e48c9938db02c8772324e7fb992e309436aa383f2b680",
    "layout.css": "402a8f7ab36a7599bf49ee88ac6430f8d4a040d9aaa22245d04f60e449b1b5a6",
    "behavior.scxml": "f60af4eab293f5487697900484741479948093cfb010551dbbdcb1a74a4acf09",
    "accessibility.html": "7c6492b125b86f8779154ea5329b7e7095767f3ec20d280e66d1f2598e0c1bb3",
    "stories.json": "ff927707b4a177bec6da085011e27584cb83275dfc131127dabf1888f40f634a",
    "ux.json": "56c26b8c898761b949c0c14fc63460a5ef2175b11178d510f87591be0150b7cc"
  },
  "drawer": {
    "component.json": "84f6c2f777b5a7401bf17ad1b11b50318a6d1b532e57aed83dc63c85a75259ed",
    "interface.json": "eb19930d31b6801cc1ad41683b838d5be8519c834b2d4d94db29866aa650297f",
    "layout.css": "f76e4834d86e94115bab02d61efb4e54ddba1f9a79493f5dc6d9d025cf0bfe25",
    "behavior.scxml": "cf1b60ffa0fa2f3ae00dbf41330b15b9689c46d567255503c0631cd35261b7e1",
    "accessibility.html": "a139cf59e372c487d883a646503ac9774c6b986312b1732b31f4d1fe9fb20ee2",
    "stories.json": "91998b1d995ad224c905a34ea3fd5ed51b9cbe4db69a9f999ae4afdad6e53de4",
    "ux.json": "0307545dc1614c37fa6fa58f330ca38743ed2d27c22cb4b3d510800a036b2d5a"
  },
  "sheet": {
    "component.json": "f1651dbb9f74be13f9feb051b8bccfa9f79b673926e4f87ccc3ebc285faa1ed8",
    "interface.json": "0b82e2de1aed04d0b335681e26a19368a445538e92e76e3f99c7371d6535b333",
    "layout.css": "92b21de36016178b2989586612427bacfb9646ea2338409847d339515950fbc0",
    "behavior.scxml": "5924092553962fe5b8aa717c7f963a4f5aa461a673639848f952df84a3e39013",
    "accessibility.html": "868fd707b8109371dd150af9f6d60e070379ec02c6602dd7ec88dc96947d1a8d",
    "stories.json": "ce655d1d5055e653e201cf16be73cc8bfe6858addceed077339fe3baea62c67f",
    "ux.json": "023c9fcf2e88bf14a08f75808cce8e573d510a4a045e41028fab2db55daa86f4"
  },
  "popover": {
    "component.json": "9580c68e2e7499a8fb9bc6cea405d478ef99a6b60bb7fb6c9e3e5c2d588cfbb5",
    "interface.json": "65ed3ca8dd049666e85560d839c9c812a2000a5f319f09ccaa0129cef528529a",
    "layout.css": "dae9abd2fcb2c6c7cc71881bf95e3f25ab290f5e137cf8ba6c8798dff0bff085",
    "behavior.scxml": "bfa6019eba16765d2bf5059548fe3070c843bf95859bca5e731771df7042c809",
    "accessibility.html": "82a9900c7d8e692a0d8b12722d5124603a7dda24a451e8261e71235d857ba7fb",
    "stories.json": "9d19277fcc0a42cec56cb01eaffa55b34e45d8343125cf396ae5d3e2452cb042",
    "ux.json": "d2683d3ad7bef262d9921eec9083ee347695c5ff8ff58e05c09a3da0df848974"
  },
  "hover-card": {
    "component.json": "58ff0b4659c367293956fee536d1c762ce69a5d9956df12965041e90a477c46f",
    "interface.json": "f429cde745c965f3b72b24f1f9d4c6453dc7dceefcbfd3e8f9f0f4e2ca216412",
    "layout.css": "d6d86285c6409041ad36e8ca6fe333b054cb55cb38cf2a5233d3d816950fe298",
    "behavior.scxml": "76e1e5a6f576e18a87bab023d9c8097a306b183404d1bdaa62135c383b38f41f",
    "accessibility.html": "94f8ff143cf35c71838cddab9ebf6a1a212cc87fbcc129aa6865d3b6df1008e1",
    "stories.json": "2886cabe8dec8e6b1cde1d33840e5319d527b0b2647a0e7d9d5f57eb07881375",
    "ux.json": "e61210f75719371f65306ffb9bd8aa9dbe810ebb82a867062d1e68048d36327d"
  },
  "tooltip": {
    "component.json": "61e723d535d897c9bc2afaa7fe8986ea90da3f54af793a1709a3e00269939165",
    "interface.json": "a5c402ab774930407000e4833f081b285d202e4b0897cb1855632b2884d17c5e",
    "layout.css": "5728691a447f441ddf4a94aeb7a7f711f363edeb9d3c0355713436c39e5bfb04",
    "behavior.scxml": "41151792a8136dac83842a6fa4c1d22133a91bef71a044bc0692b382079d13fd",
    "accessibility.html": "a996ed8547fb0045e90f65b2a1fd202a42dfbec2d268bbe15ea3a887ac4c06e7",
    "stories.json": "577812b42cf139d993e41174af1d9d56569918c28c67d694bbce77337eb18570",
    "ux.json": "ba17fea15f3cf6ef631374a33643c0fc6bf794f6af4cc6ca143b5e4b1a9e2445"
  }
}

const comparisons: Record<string, Record<ComparisonSection, ComponentComparison[]>> = {
  "breadcrumb": {
    "variants": [
      {
        "id": "breadcrumb-composition",
        "title": "Orientierung im Seitenpfad",
        "description": "Zeige den Weg zur aktuellen Seite. Bei langen Pfaden hilft eine Auslassung mit vollständiger Alternative.",
        "items": [
          {
            "id": "hierarchy",
            "title": "Vollständiger Pfad",
            "description": "Vorfahren und aktuelle Seite sind visuell getrennt."
          },
          {
            "id": "ellipsis",
            "title": "Mit Auslassung",
            "description": "Eine vollständige alternative Hierarchie bleibt im Beispiel sichtbar."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Ein vollständiger Pfad oder eine dekorative Auslassung mit sichtbarer Alternative. Beide sind Kompositionen derselben Komponente."
      }
    ],
    "states": [
      {
        "id": "breadcrumb-feedback",
        "title": "Rückmeldung an Links",
        "description": "Der Seitenpfad bleibt gleich; Unterstreichung oder Fokus zeigen den erreichbaren Vorfahren.",
        "items": [
          {
            "id": "base",
            "title": "Grundansicht",
            "description": "Die aktuelle Seite bleibt hervorgehoben."
          },
          {
            "id": "hover",
            "title": "Zeiger über Link",
            "description": "Unterstreichung und Vordergrundfarbe am Link."
          },
          {
            "id": "focus",
            "title": "Tastaturfokus am Link",
            "description": "Umriss am Link; aktuelle Seite und Trennzeichen erhalten keinen Fokus."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Die aktuelle Seite bleibt gleich. Nur der Vorfahrenlink verändert sich durch Hover oder Tastaturfokus.",
        "previewItems": [
          "base",
          "focus"
        ],
        "detailsLabel": "Weitere Zustände"
      }
    ]
  },
  "navigation-menu": {
    "variants": [
      {
        "id": "navigation-composition",
        "title": "Ziele mit kurzer Vorschau",
        "description": "Sinnvoll für eine Website mit mehreren Bereichen: kurze Erläuterungen helfen bei der Zielwahl.",
        "items": [
          {
            "id": "canonical",
            "title": "Standardansicht",
            "description": "Beschriftete Ziele mit kurzen Erläuterungen."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Website-Navigation mit aufgeklappten Zielen und kurzen Erläuterungen. Ziele und Texte sind redaktionelle Beispiele."
      }
    ],
    "states": [
      {
        "id": "navigation-views",
        "title": "Navigation öffnen",
        "description": "Geöffnet werden die Ziele sichtbar. Die restliche Navigation bleibt erreichbar.",
        "items": [
          {
            "id": "closed",
            "title": "Geschlossen",
            "description": "Kein Navigationspanel sichtbar."
          },
          {
            "id": "open",
            "title": "Offenes Element",
            "description": "Die geöffnete Navigation zeigt ihre zugehörigen Ziele."
          },
          {
            "id": "focus",
            "title": "Tastaturfokus",
            "description": "Der Fokusrahmen markiert den geschlossenen Auslöser."
          },
          {
            "id": "disabled",
            "title": "Auslöser deaktiviert",
            "description": "Der Trigger kann nicht öffnen; die übrigen Ziele bleiben sichtbar."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Ein offener Trigger zeigt zugehörige Ziele. Fokus und Deaktivierung sind davon getrennte Merkmale.",
        "previewItems": [
          "closed",
          "open"
        ],
        "detailsLabel": "Weitere Zustände"
      }
    ]
  },
  "menubar": {
    "variants": [
      {
        "id": "menubar-item-variants",
        "title": "Aktionen oder Einstellungen",
        "description": "Neutrale Befehle für übliche Aktionen; Rot kennzeichnet Löschen. Wahlmarkierungen zeigen Einstellungen.",
        "items": [
          {
            "id": "default",
            "title": "Neutraler Befehl",
            "description": "Übliche Aktion mit sichtbarem Tastenkürzel."
          },
          {
            "id": "destructive",
            "title": "Löschen hervorheben",
            "description": "Rot hebt Löschen hervor; der Text benennt die Folge."
          },
          {
            "id": "settings",
            "title": "Mehrfach- und Einzelauswahl",
            "description": "Häkchen erlauben mehrere Einstellungen; ein Punkt markiert die einzelne Auswahl."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Neutrale und destruktive Befehle plus Checkbox-/Radioeinstellungen. Angezeigte Tastenkürzel registrieren keine Tastenkombination.",
        "previewItems": [
          "default",
          "destructive"
        ],
        "detailsLabel": "Weitere Einstellungen"
      }
    ],
    "states": [
      {
        "id": "menubar-states",
        "title": "Menü öffnen und auswählen",
        "description": "Das Menü zeigt die verfügbaren Aktionen. Eine Hervorhebung markiert die Auswahl vor der Ausführung.",
        "items": [
          {
            "id": "closed",
            "title": "Geschlossen",
            "description": "Nur Auslöser bzw. Kontext sichtbar."
          },
          {
            "id": "expanded",
            "title": "Geöffnet",
            "description": "Geöffnetes Menü mit gruppierten Aktionen."
          },
          {
            "id": "highlight",
            "title": "Befehl hervorgehoben",
            "description": "Nur Öffnen ist hervorgehoben; der Befehl wurde noch nicht ausgeführt."
          },
          {
            "id": "submenu",
            "title": "Untermenü offen",
            "description": "Eigenes Kindmenü neben dem zugehörigen Eintrag; auf schmaler Bühne kompakt angeordnet."
          },
          {
            "id": "disabled",
            "title": "Eintrag deaktiviert",
            "description": "Nur Archivieren ist blasser und nicht verfügbar."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Geschlossener Kontext, offenes Menü, Highlight und Kindmenü. Eine Hervorhebung führt den Befehl noch nicht aus.",
        "previewItems": [
          "closed",
          "expanded"
        ],
        "detailsLabel": "Weitere Zustände"
      }
    ]
  },
  "dropdown-menu": {
    "variants": [
      {
        "id": "dropdown-menu-item-variants",
        "title": "Aktionen oder Einstellungen",
        "description": "Neutrale Befehle für übliche Aktionen; Rot kennzeichnet Löschen. Wahlmarkierungen zeigen Einstellungen.",
        "items": [
          {
            "id": "default",
            "title": "Neutraler Befehl",
            "description": "Übliche Aktion mit sichtbarem Tastenkürzel."
          },
          {
            "id": "destructive",
            "title": "Löschen hervorheben",
            "description": "Rot hebt Löschen hervor; der Text benennt die Folge."
          },
          {
            "id": "settings",
            "title": "Mehrfach- und Einzelauswahl",
            "description": "Häkchen erlauben mehrere Einstellungen; ein Punkt markiert die einzelne Auswahl."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Neutrale und destruktive Befehle plus Checkbox-/Radioeinstellungen. Angezeigte Tastenkürzel registrieren keine Tastenkombination.",
        "previewItems": [
          "default",
          "destructive"
        ],
        "detailsLabel": "Weitere Einstellungen"
      }
    ],
    "states": [
      {
        "id": "dropdown-menu-states",
        "title": "Menü öffnen und auswählen",
        "description": "Das Menü zeigt die verfügbaren Aktionen. Eine Hervorhebung markiert die Auswahl vor der Ausführung.",
        "items": [
          {
            "id": "closed",
            "title": "Geschlossen",
            "description": "Nur Auslöser bzw. Kontext sichtbar."
          },
          {
            "id": "expanded",
            "title": "Geöffnet",
            "description": "Geöffnetes Menü mit gruppierten Aktionen."
          },
          {
            "id": "highlight",
            "title": "Befehl hervorgehoben",
            "description": "Nur Öffnen ist hervorgehoben; der Befehl wurde noch nicht ausgeführt."
          },
          {
            "id": "submenu",
            "title": "Untermenü offen",
            "description": "Eigenes Kindmenü neben dem zugehörigen Eintrag; auf schmaler Bühne kompakt angeordnet."
          },
          {
            "id": "disabled",
            "title": "Eintrag deaktiviert",
            "description": "Nur Archivieren ist blasser und nicht verfügbar."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Geschlossener Kontext, offenes Menü, Highlight und Kindmenü. Eine Hervorhebung führt den Befehl noch nicht aus.",
        "previewItems": [
          "closed",
          "expanded"
        ],
        "detailsLabel": "Weitere Zustände"
      }
    ]
  },
  "context-menu": {
    "variants": [
      {
        "id": "context-menu-item-variants",
        "title": "Aktionen oder Einstellungen",
        "description": "Neutrale Befehle für übliche Aktionen; Rot kennzeichnet Löschen. Wahlmarkierungen zeigen Einstellungen.",
        "items": [
          {
            "id": "default",
            "title": "Neutraler Befehl",
            "description": "Übliche Aktion mit sichtbarem Tastenkürzel."
          },
          {
            "id": "destructive",
            "title": "Löschen hervorheben",
            "description": "Rot hebt Löschen hervor; der Text benennt die Folge."
          },
          {
            "id": "settings",
            "title": "Mehrfach- und Einzelauswahl",
            "description": "Häkchen erlauben mehrere Einstellungen; ein Punkt markiert die einzelne Auswahl."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Neutrale und destruktive Befehle plus Checkbox-/Radioeinstellungen. Angezeigte Tastenkürzel registrieren keine Tastenkombination. Die sichtbare Aktionenalternative ist eine ergänzte DropdownMenu-Komposition.",
        "previewItems": [
          "default",
          "destructive"
        ],
        "detailsLabel": "Weitere Einstellungen"
      }
    ],
    "states": [
      {
        "id": "context-menu-states",
        "title": "Menü öffnen und auswählen",
        "description": "Das Menü zeigt die verfügbaren Aktionen. Eine Hervorhebung markiert die Auswahl vor der Ausführung.",
        "items": [
          {
            "id": "closed",
            "title": "Geschlossen",
            "description": "Nur Auslöser bzw. Kontext sichtbar."
          },
          {
            "id": "expanded",
            "title": "Geöffnet",
            "description": "Geöffnetes Menü mit gruppierten Aktionen."
          },
          {
            "id": "highlight",
            "title": "Befehl hervorgehoben",
            "description": "Nur Öffnen ist hervorgehoben; der Befehl wurde noch nicht ausgeführt."
          },
          {
            "id": "submenu",
            "title": "Untermenü offen",
            "description": "Eigenes Kindmenü neben dem zugehörigen Eintrag; auf schmaler Bühne kompakt angeordnet."
          },
          {
            "id": "disabled",
            "title": "Eintrag deaktiviert",
            "description": "Nur Archivieren ist blasser und nicht verfügbar."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Geschlossener Kontext, offenes Menü, Highlight und Kindmenü. Eine Hervorhebung führt den Befehl noch nicht aus.",
        "previewItems": [
          "closed",
          "expanded"
        ],
        "detailsLabel": "Weitere Zustände"
      }
    ]
  },
  "command": {
    "variants": [
      {
        "id": "command-composition",
        "title": "Suche auf der Seite oder im Dialog",
        "description": "Direkt eingebettet für dauerhaften Zugriff; als Dialog für eine vorübergehende Befehlssuche.",
        "items": [
          {
            "id": "inline",
            "title": "Auf der Seite",
            "description": "Suchfeld mit gruppierter Ergebnisliste; Das Tastenkürzel zeigt die zugehörige Aktion."
          },
          {
            "id": "dialog",
            "title": "Dialogpalette",
            "description": "Befehlssuche vor abgedunkelter Seite mit Schliessenaktion."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Dieselbe Befehlssuche direkt in der Seite oder als Dialogpalette. Eingabe, Highlight und Ausführung sind getrennt."
      }
    ],
    "states": [
      {
        "id": "command-query",
        "title": "Suchergebnisse vergleichen",
        "description": "Zeige passende Befehle oder eine klare Rückmeldung, wenn die Suche nichts findet.",
        "items": [
          {
            "id": "initial",
            "title": "Ohne Suchtext",
            "description": "Ein Ergebnis ist hervorgehoben; ein deaktiviertes bleibt sichtbar."
          },
          {
            "id": "filtered",
            "title": "Gefiltert · Export",
            "description": "Suchtext grenzt Treffer ein und führt noch nichts aus."
          },
          {
            "id": "empty",
            "title": "Keine Treffer",
            "description": "Leere Ergebnismenge mit ausdrücklicher Rückmeldung."
          },
          {
            "id": "focus",
            "title": "Eingabefokus",
            "description": "Fokus am Suchfeld; die optische Ergebnismarkierung bleibt getrennt."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Suche grenzt Ergebnisse ein. Die hervorgehobene Zeile ist noch kein ausgeführter Befehl.",
        "previewItems": [
          "filtered",
          "empty"
        ],
        "detailsLabel": "Weitere Zustände"
      }
    ]
  },
  "sidebar": {
    "variants": [
      {
        "id": "sidebar-variants",
        "title": "Navigation und Seitenrahmen",
        "description": "Wähle eine angrenzende Navigation, eine abgesetzte Fläche oder eine eingerückte Inhaltsfläche.",
        "items": [
          {
            "id": "sidebar",
            "title": "Angrenzend",
            "description": "Seitennavigation mit angrenzender Inhaltsfläche."
          },
          {
            "id": "floating",
            "title": "Abgesetzt",
            "description": "Abgesetzte, gerundete Navigationsfläche."
          },
          {
            "id": "inset",
            "title": "Inhalt eingerückt",
            "description": "Inhaltsfläche ist gegenüber dem Seitenrahmen eingerückt."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Drei belegte Rahmenvarianten für dieselbe Navigation. Kompakte Ausschnitte; Desktopbreite 16 rem, Iconleiste 3 rem, mobil 18 rem.",
        "previewItems": [
          "sidebar",
          "floating"
        ],
        "detailsLabel": "Weiterer Rahmen"
      },
      {
        "id": "sidebar-collapse",
        "title": "Platz für den Inhalt schaffen",
        "description": "Ausblenden gibt den meisten Platz frei. Eine Symbolleiste hält die Navigation sichtbar.",
        "items": [
          {
            "id": "offcanvas",
            "title": "Vollständig ausgeblendet",
            "description": "Navigation ausserhalb des sichtbaren Ausschnitts; Auslöser bleibt im Inhalt."
          },
          {
            "id": "icon",
            "title": "Nur Symbole",
            "description": "3 rem Iconleiste hält die Navigation sichtbar; echte Ziele brauchen vollständige Namen."
          },
          {
            "id": "none",
            "title": "Dauerhaft geöffnet",
            "description": "Die breite Navigation bleibt dauerhaft sichtbar."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Die Navigation kann aus dem Ausschnitt verschwinden, als Iconleiste bleiben oder dauerhaft offen stehen. Die Modi sind unabhängig vom Rahmenstil.",
        "previewItems": [
          "offcanvas",
          "icon"
        ],
        "detailsLabel": "Weitere Darstellung"
      },
      {
        "id": "sidebar-menu-parts",
        "title": "Dichte der Navigationsziele",
        "description": "Eine Kontur betont das Ziel. Kleinere und grössere Zeilen verändern die Informationsdichte.",
        "items": [
          {
            "id": "menu-default",
            "title": "Standard · 32 px",
            "description": "Standardhöhe für Hauptziele."
          },
          {
            "id": "menu-outline",
            "title": "Mit Kontur · 32 px",
            "description": "Zusätzliche Kontur um das Hauptziel."
          },
          {
            "id": "menu-sm",
            "title": "Kompakt · 28 px",
            "description": "Kompakteres Hauptziel mit 12 px Text."
          },
          {
            "id": "menu-lg",
            "title": "Grosszügig · 48 px",
            "description": "Höheres Hauptziel mit mehr vertikalem Raum."
          },
          {
            "id": "sub-sm",
            "title": "Unterziel · klein",
            "description": "Kleine Textgrösse im eingerückten Unterpfad."
          },
          {
            "id": "sub-md",
            "title": "Unterziel · mittel",
            "description": "Standardtextgrösse im eingerückten Unterpfad."
          }
        ],
        "layout": "compact",
        "technicalNotes": "Hauptziele haben eigene Varianten und Grössen; Unterziele eigene Textgrössen. Die Sidebarbreite bleibt dabei gleich.",
        "previewItems": [
          "menu-default",
          "menu-outline"
        ],
        "detailsLabel": "Weitere Grössen"
      }
    ],
    "states": [
      {
        "id": "sidebar-responsive",
        "title": "Navigation auf kleinem Bildschirm",
        "description": "Mobil öffnet die Navigation über dem Inhalt. Vergleiche den geschlossenen und geöffneten Kontext.",
        "items": [
          {
            "id": "expanded",
            "title": "Desktop · offen",
            "description": "Breite Navigationsfläche mit aktivem Beispielziel."
          },
          {
            "id": "collapsed",
            "title": "Desktop · Iconansicht",
            "description": "Gleiche Navigation mit reduzierter Breite."
          },
          {
            "id": "mobile-closed",
            "title": "Mobil · geschlossen",
            "description": "Nur die Inhaltsfläche und der Navigationsauslöser."
          },
          {
            "id": "mobile-open",
            "title": "Mobil · Navigation geöffnet",
            "description": "Abgedunkelter Kontext und ausdrücklich ergänzte Schliessenaktion."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Desktopöffnung und mobile Öffnung sind unabhängige Werte. Mobil erscheint die Navigation als Sheet mit eigener Schliessenaktion.",
        "previewItems": [
          "mobile-closed",
          "mobile-open"
        ],
        "detailsLabel": "Weitere Zustände"
      }
    ]
  },
  "tabs": {
    "variants": [
      {
        "id": "tabs-variants",
        "title": "Fläche oder Unterstreichung",
        "description": "Die Fläche betont den gewählten Bereich stärker; die Linie wirkt zurückhaltender.",
        "items": [
          {
            "id": "default",
            "title": "Standard",
            "description": "Aktiver Tab auf heller Fläche im gedämpften Rahmen."
          },
          {
            "id": "line",
            "title": "Unterstrichen",
            "description": "Eine feine Linie markiert den gewählten Bereich."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Dieselben Inhalte mit zwei belegten Listenvarianten: gefüllte Fläche oder feine Linie. Triggerhöhe 25 px."
      }
    ],
    "states": [
      {
        "id": "tabs-values",
        "title": "Bereich auswählen",
        "description": "Die Auswahl wechselt den Inhalt. Tastaturfokus und nicht verfügbare Bereiche sind zusätzlich vergleichbar.",
        "items": [
          {
            "id": "summary",
            "title": "Übersicht ausgewählt",
            "description": "Übersicht und zugehöriger Inhalt gehören zusammen."
          },
          {
            "id": "details",
            "title": "Details ausgewählt",
            "description": "Der zweite Tab zeigt seinen eigenen Inhalt."
          },
          {
            "id": "focus",
            "title": "Fokus auf Details",
            "description": "Übersicht bleibt aktiv; Fokus allein aktiviert Details nicht."
          },
          {
            "id": "disabled",
            "title": "Deaktivierter Tab",
            "description": "Ein nicht verfügbarer Bereich ist blasser und nicht wählbar."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Auswahl zeigt den zugehörigen Inhalt. Im manuellen Standardmodus verändert Fokus allein die Auswahl nicht.",
        "previewItems": [
          "summary",
          "details"
        ],
        "detailsLabel": "Weitere Zustände"
      }
    ]
  },
  "pagination": {
    "variants": [
      {
        "id": "pagination-canonical",
        "title": "Aktuelle Seite erkennen",
        "description": "Eine Kontur markiert die aktuelle Seite; Pfeile führen zu weiteren Ergebnissen.",
        "items": [
          {
            "id": "middle",
            "title": "Standardansicht",
            "description": "Aktuelle Seite 2 mit Vor-/Zurückaktionen und dekorativer Auslassung."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Die aktuelle Seite erhält eine Kontur. Seitenziele und Auslassungen setzt die Anwendung zusammen; die Nummern sind Beispiele."
      }
    ],
    "states": [
      {
        "id": "pagination-boundary",
        "title": "Anfang und Ende der Seitenfolge",
        "description": "Zeige nur Richtungen, in denen weitere Ergebnisse erreichbar sind.",
        "items": [
          {
            "id": "first",
            "title": "Erste Seite",
            "description": "Keine Zurückaktion; Seite 1 ist aktuell."
          },
          {
            "id": "middle",
            "title": "Mittlere Seite",
            "description": "Beide Richtungen vorhanden; Seite 2 ist aktuell."
          },
          {
            "id": "last",
            "title": "Letzte Seite",
            "description": "Keine Weiteraktion; Seite 3 ist aktuell."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Am Anfang fehlt Zurück, am Ende fehlt Weiter. Die Anwendung stellt die jeweils verfügbaren Ziele zusammen.",
        "previewItems": [
          "first",
          "last"
        ],
        "detailsLabel": "Weitere Zustände"
      }
    ]
  },
  "accordion": {
    "variants": [
      {
        "id": "accordion-multiple",
        "title": "Einzeln oder parallel lesen",
        "description": "Eine offene Sektion hält den Fokus. Mehrere offene Sektionen helfen beim Vergleich von Inhalten.",
        "items": [
          {
            "id": "single",
            "title": "Ein Panel offen",
            "description": "Eine Sektion zeigt ihren Inhalt."
          },
          {
            "id": "multiple",
            "title": "Mehrere Panels offen",
            "description": "Zwei Sektionen zeigen ihre Inhalte parallel."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Einzeln öffnen oder mehrere Panels unabhängig offen halten: multiple verändert die erlaubte Auswahl, nicht den Stil."
      }
    ],
    "states": [
      {
        "id": "accordion-states",
        "title": "Inhalte ein- und ausblenden",
        "description": "Die Überschrift bleibt sichtbar; der zugehörige Inhalt erscheint darunter.",
        "items": [
          {
            "id": "collapsed",
            "title": "Alle Sektionen geschlossen",
            "description": "Alle Sektionen geschlossen."
          },
          {
            "id": "expanded",
            "title": "Erste Sektion geöffnet",
            "description": "Erste Sektion und ihre Inhalte sichtbar."
          },
          {
            "id": "focus",
            "title": "Tastaturfokus",
            "description": "Der Fokusrahmen markiert die geschlossene Überschrift."
          },
          {
            "id": "disabled",
            "title": "Deaktiviert",
            "description": "Gesperrte Überschriften erscheinen blasser."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Offene Panels zeigen Inhalt. Fokus markiert den Trigger; Deaktivierung sperrt seine Aktion.",
        "previewItems": [
          "collapsed",
          "expanded"
        ],
        "detailsLabel": "Weitere Zustände"
      }
    ]
  },
  "collapsible": {
    "variants": [
      {
        "id": "collapsible-canonical",
        "title": "Zusatzinformationen bei Bedarf",
        "description": "Sinnvoll für ergänzende Details, die den Hauptinhalt entlasten sollen.",
        "items": [
          {
            "id": "canonical",
            "title": "Standardansicht",
            "description": "Überschrift mit Pfeil und ergänzenden Projektdetails."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Ein Trigger zeigt oder verbirgt zusätzliche Informationen. Dafür gibt es keine eigene Stilvariante."
      }
    ],
    "states": [
      {
        "id": "collapsible-states",
        "title": "Details ein- und ausblenden",
        "description": "Die gleiche Überschrift bleibt stehen, während Zusatzinformationen erscheinen.",
        "items": [
          {
            "id": "closed",
            "title": "Geschlossen",
            "description": "Zusatzinformationen sind ausgeblendet."
          },
          {
            "id": "expanded",
            "title": "Geöffnet",
            "description": "Zusatzinformationen erscheinen unter dem Trigger."
          },
          {
            "id": "focus",
            "title": "Tastaturfokus",
            "description": "Der Fokusrahmen markiert die geschlossene Überschrift."
          },
          {
            "id": "disabled",
            "title": "Deaktiviert",
            "description": "Die Überschrift erscheint blasser; der Inhalt bleibt geschlossen."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Geschlossen oder erweitert, mit getrenntem Fokus- und Deaktivierungsmerkmal. Escape oder Aussenklick schliessen dieses Panel nicht.",
        "previewItems": [
          "closed",
          "expanded"
        ],
        "detailsLabel": "Weitere Zustände"
      }
    ]
  },
  "scroll-area": {
    "variants": [
      {
        "id": "scroll-area-composition",
        "title": "Begrenzten Platz nutzen",
        "description": "Lange Listen brauchen eine vertikale Scrollleiste; breite Inhalte können beide Richtungen benötigen.",
        "items": [
          {
            "id": "vertical",
            "title": "Vertikal scrollen",
            "description": "Eine schmale Scrollleiste zeigt weiteren Inhalt an."
          },
          {
            "id": "both",
            "title": "Beide Achsen",
            "description": "Breiter Inhalt und zusätzliche horizontale Scrollbar."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Der Inhalt bestimmt die nötigen Scrollachsen. Der Bildausschnitt ist auf 176 px gekürzt; die Contracthöhe beträgt 288 px."
      }
    ],
    "states": [
      {
        "id": "scroll-area-values",
        "title": "Inhalt passt oder wird gescrollt",
        "description": "Vergleiche dieselbe begrenzte Fläche mit kurzer und langer Aktivitätsliste.",
        "items": [
          {
            "id": "overflow",
            "title": "Lange Liste",
            "description": "Längere Aktivitätsliste mit sichtbarem vertikalem Thumb."
          },
          {
            "id": "fits",
            "title": "Inhalt passt",
            "description": "Kurze Liste; es wird keine Scrollbar benötigt."
          },
          {
            "id": "focus",
            "title": "Fokus im Inhaltsbereich",
            "description": "Ring um den sichtbaren Inhaltsausschnitt."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Eine Scrollbar erscheint bei Overflow. Passt der Inhalt, entfällt sie; Fokus markiert den Viewport.",
        "previewItems": [
          "overflow",
          "fits"
        ],
        "detailsLabel": "Weitere Zustände"
      }
    ]
  },
  "dialog": {
    "variants": [
      {
        "id": "dialog-canonical",
        "title": "Eine Aufgabe im Mittelpunkt",
        "description": "Für eine kurze, abgeschlossene Eingabe: Titel, Feld und Abschlussaktionen bleiben zusammen.",
        "items": [
          {
            "id": "canonical",
            "title": "Mit Schliessenaktion",
            "description": "Titel, Beschreibung, Beispielwert und getrennte Abschlussaktionen."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Zentrierte Aufgabe mit Titel, Eingabe und Abschlussaktionen. Maximal 448 px breit, 16 px Innenabstand, 14 px Radius."
      }
    ],
    "states": [
      {
        "id": "dialog-lifecycle",
        "title": "Geschlossen und geöffnet",
        "description": "Die Aufgabe erscheint vor dem Seitenkontext. Abbruch und Abschluss sind klar unterscheidbar.",
        "items": [
          {
            "id": "closed",
            "title": "Geschlossen",
            "description": "Auslöser vor seinem Inhaltskontext; kein offenes Panel."
          },
          {
            "id": "expanded",
            "title": "Geöffnet",
            "description": "Die Aufgabe liegt vor der abgedunkelten Seite; Abschlussaktionen bleiben getrennt."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Geschlossene und geöffnete Ansicht im selben Kontext. Schliessen bestätigt keine Anwendungsaktion."
      }
    ]
  },
  "alert-dialog": {
    "variants": [
      {
        "id": "alert-dialog-sizes",
        "title": "Standard oder kompakt",
        "description": "Eine kurze Entscheidung braucht wenig Platz. Vergleiche die Breite für denselben Inhalt.",
        "items": [
          {
            "id": "default",
            "title": "Standard",
            "description": "Standardbreite mit Entscheidung und Abbruch."
          },
          {
            "id": "sm",
            "title": "Kompakt",
            "description": "Kompakte maximale Breite von 320 px."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Standardgrösse oder kompakt mit maximal 320 px. Auf schmalen Bühnen werden beide durch denselben verfügbaren Platz begrenzt."
      }
    ],
    "states": [
      {
        "id": "alert-dialog-lifecycle",
        "title": "Geschlossen und geöffnet",
        "description": "Die Aufgabe erscheint vor dem Seitenkontext. Abbruch und Abschluss sind klar unterscheidbar.",
        "items": [
          {
            "id": "closed",
            "title": "Geschlossen",
            "description": "Auslöser vor seinem Inhaltskontext; kein offenes Panel."
          },
          {
            "id": "expanded",
            "title": "Geöffnet",
            "description": "Die Aufgabe liegt vor der abgedunkelten Seite; Abschlussaktionen bleiben getrennt."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Geschlossene und geöffnete Ansicht im selben Kontext. Abbrechen schliesst ohne Bestätigung. Die Bestätigungsaktion schliesst erst durch Anwendungslogik."
      }
    ]
  },
  "drawer": {
    "variants": [
      {
        "id": "drawer-directions",
        "title": "Von unten oder von der Seite",
        "description": "Die Kante bestimmt, wie viel Kontext daneben sichtbar bleibt. Weitere Kanten sind aufklappbar.",
        "items": [
          {
            "id": "down",
            "title": "Unten",
            "description": "Panel am unteren Rand mit sichtbarem Wischhandle."
          },
          {
            "id": "up",
            "title": "Oben",
            "description": "Panel am oberen Rand; Kontext bleibt darunter sichtbar."
          },
          {
            "id": "right",
            "title": "Rechts",
            "description": "Panel am rechten Rand; Kontext bleibt links sichtbar."
          },
          {
            "id": "left",
            "title": "Links",
            "description": "Panel am linken Rand; Kontext bleibt rechts sichtbar."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Vier belegte Wischrichtungen bestimmen die Kante. Die verkürzten Bühnen zeigen das ausdrücklich ergänzte Wischhandle; standardmässig ist es aus.",
        "previewItems": [
          "down",
          "right"
        ],
        "detailsLabel": "Weitere Positionen"
      }
    ],
    "states": [
      {
        "id": "drawer-lifecycle",
        "title": "Geschlossen und geöffnet",
        "description": "Die Aufgabe erscheint vor dem Seitenkontext. Abbruch und Abschluss sind klar unterscheidbar.",
        "items": [
          {
            "id": "closed",
            "title": "Geschlossen",
            "description": "Auslöser vor seinem Inhaltskontext; kein offenes Panel."
          },
          {
            "id": "expanded",
            "title": "Geöffnet",
            "description": "Die Aufgabe liegt vor der abgedunkelten Seite; Abschlussaktionen bleiben getrennt."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Geschlossene und geöffnete Ansicht im selben Kontext. Ein Snap-Punktwechsel bedeutet noch keine Schliessung."
      }
    ]
  },
  "sheet": {
    "variants": [
      {
        "id": "sheet-sides",
        "title": "Aufgabe am Seitenrand",
        "description": "Rechts bleibt die Seite daneben sichtbar; unten entsteht eine breite Arbeitsfläche.",
        "items": [
          {
            "id": "top",
            "title": "Oben",
            "description": "Panel oben; der übrige Seitenkontext liegt darunter."
          },
          {
            "id": "right",
            "title": "Rechts",
            "description": "Panel rechts mit vertikal angeordneten Abschlussaktionen."
          },
          {
            "id": "bottom",
            "title": "Unten",
            "description": "Panel unten; der übrige Seitenkontext liegt darüber."
          },
          {
            "id": "left",
            "title": "Links",
            "description": "Panel links mit vertikal angeordneten Abschlussaktionen."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Dieselbe Dialogaufgabe an vier Kanten. Rechts ist der Standard; Seitenpanels sind im Contract maximal 384 px breit.",
        "previewItems": [
          "right",
          "bottom"
        ],
        "detailsLabel": "Weitere Positionen"
      }
    ],
    "states": [
      {
        "id": "sheet-lifecycle",
        "title": "Geschlossen und geöffnet",
        "description": "Die Aufgabe erscheint vor dem Seitenkontext. Abbruch und Abschluss sind klar unterscheidbar.",
        "items": [
          {
            "id": "closed",
            "title": "Geschlossen",
            "description": "Auslöser vor seinem Inhaltskontext; kein offenes Panel."
          },
          {
            "id": "expanded",
            "title": "Geöffnet",
            "description": "Die Aufgabe liegt vor der abgedunkelten Seite; Abschlussaktionen bleiben getrennt."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Geschlossene und geöffnete Ansicht im selben Kontext. Die Kante verändert die Platzierung, nicht die Abschlussregeln."
      }
    ]
  },
  "popover": {
    "variants": [
      {
        "id": "popover-sides",
        "title": "Einstellungen am Auslöser",
        "description": "Ergänzende Einstellungen bleiben nahe an der zugehörigen Aktion. Wähle die Seite mit genügend Platz.",
        "items": [
          {
            "id": "top",
            "title": "Oben",
            "description": "Zusatzinhalt über dem Auslöser."
          },
          {
            "id": "right",
            "title": "Rechts",
            "description": "Zusatzinhalt rechts neben dem Auslöser."
          },
          {
            "id": "bottom",
            "title": "Unten",
            "description": "Zusatzinhalt unter dem Auslöser."
          },
          {
            "id": "left",
            "title": "Links",
            "description": "Zusatzinhalt links neben dem Auslöser."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Vier Positionen für ergänzende Einstellungen. Standard ist unten, zentriert, mit 4 px Abstand. Kollisionsverhalten ist hier nicht dargestellt.",
        "previewItems": [
          "bottom",
          "right"
        ],
        "detailsLabel": "Weitere Positionen"
      }
    ],
    "states": [
      {
        "id": "popover-lifecycle",
        "title": "Einstellungen öffnen",
        "description": "Der Auslöser bleibt erkennbar; geöffnete Einstellungen stehen direkt daneben.",
        "items": [
          {
            "id": "closed",
            "title": "Geschlossen",
            "description": "Nur der vollständig beschriftete Auslöser bleibt sichtbar."
          },
          {
            "id": "expanded",
            "title": "Geöffnet",
            "description": "Zusatzinhalt erscheint beim zugehörigen Auslöser."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Geschlossen bleibt der Auslöser sichtbar. Geöffnet stehen die ergänzenden Einstellungen daneben; der Standard ist nicht modal."
      }
    ]
  },
  "hover-card": {
    "variants": [
      {
        "id": "hover-card-sides",
        "title": "Linkziel kurz vorstellen",
        "description": "Eine Kontaktvorschau ergänzt den Link. Das vollständige Profil bleibt über den Link erreichbar.",
        "items": [
          {
            "id": "top",
            "title": "Oben",
            "description": "Zusatzinhalt über dem Auslöser."
          },
          {
            "id": "right",
            "title": "Rechts",
            "description": "Zusatzinhalt rechts neben dem Auslöser."
          },
          {
            "id": "bottom",
            "title": "Unten",
            "description": "Zusatzinhalt unter dem Auslöser."
          },
          {
            "id": "left",
            "title": "Links",
            "description": "Zusatzinhalt links neben dem Auslöser."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Vier Positionen einer ergänzenden Linkvorschau. Standard ist unten; der Link bleibt das Ziel für vollständige Informationen.",
        "previewItems": [
          "bottom",
          "right"
        ],
        "detailsLabel": "Weitere Positionen"
      }
    ],
    "states": [
      {
        "id": "hover-card-lifecycle",
        "title": "Kontakt mit Vorschau",
        "description": "Der Kontaktlink funktioniert auch ohne Vorschau. Die Karte ergänzt Name und Rolle.",
        "items": [
          {
            "id": "closed",
            "title": "Geschlossen",
            "description": "Nur der vollständig beschriftete Auslöser bleibt sichtbar."
          },
          {
            "id": "expanded",
            "title": "Geöffnet",
            "description": "Zusatzinhalt erscheint beim zugehörigen Auslöser."
          }
        ],
        "layout": "wide",
        "technicalNotes": "Die Linkvorschau ergänzt das Ziel, ohne die Navigation zu ersetzen. Öffnungs- und Schliessverzögerungen sind im Bild nicht dargestellt."
      }
    ]
  },
  "tooltip": {
    "variants": [
      {
        "id": "tooltip-sides",
        "title": "Kurze Hilfe am Ziel",
        "description": "Eine zusätzliche Beschriftung hilft beim Erkennen der Aktion. Wichtige Hilfe bleibt dauerhaft sichtbar.",
        "items": [
          {
            "id": "top",
            "title": "Oben",
            "description": "Zusatzinhalt über dem Auslöser."
          },
          {
            "id": "right",
            "title": "Rechts",
            "description": "Zusatzinhalt rechts neben dem Auslöser."
          },
          {
            "id": "bottom",
            "title": "Unten",
            "description": "Zusatzinhalt unter dem Auslöser."
          },
          {
            "id": "left",
            "title": "Links",
            "description": "Zusatzinhalt links neben dem Auslöser."
          }
        ],
        "layout": "compact",
        "technicalNotes": "Vier Positionen einer dunklen visuellen Zusatzhilfe mit dekorativem Pfeil. Standard ist oben; erforderliche Hilfe bleibt als Text sichtbar. Darstellungsentscheidung für den Vergleich: Bei höchstens 38rem Gruppenbreite stehen die zusätzlichen Ansichten rechts und links untereinander mit voller Breite; oben und unten bleiben kompakt nebeneinander. Die gezeigte Seite bleibt dabei unverändert.",
        "previewItems": [
          "top",
          "bottom"
        ],
        "detailsLabel": "Weitere Positionen"
      }
    ],
    "states": [
      {
        "id": "tooltip-lifecycle",
        "title": "Mit und ohne Zusatzhilfe",
        "description": "Die Aktion und ihre dauerhafte Erklärung bleiben in beiden Ansichten verständlich.",
        "items": [
          {
            "id": "closed",
            "title": "Geschlossen",
            "description": "Nur der vollständig beschriftete Auslöser bleibt sichtbar."
          },
          {
            "id": "expanded",
            "title": "Geöffnet",
            "description": "Zusatzinhalt erscheint beim zugehörigen Auslöser."
          }
        ],
        "layout": "compact",
        "technicalNotes": "Der benannte Auslöser bleibt mit oder ohne visuelle Zusatzhilfe verständlich. Die dauerhafte Erklärung ist in beiden Ansichten sichtbar."
      }
    ]
  }
}

export function getNavigationLayersComparisons(component: string, section: ComparisonSection): ComponentComparison[] {
  const entry = comparisons[component as keyof typeof comparisons]
  if (!entry) return []
  const sourceReferences = Object.entries(sourceHashes[component]).map(([file, sha256]) => ({ path: `library/components/${component}/${file}`, sha256 }))
  return entry[section].map(group => ({ ...group, items: group.items.map(item => ({ ...item })), sourceReferences: [...sourceReferences, { path: 'library/tokens.css', sha256: 'e181931cf68b623bfff7316135e3368edff17779e5b50950893e9470dd9f791a' }] }))
}

// Redaktionelle Beispieldaten; keine zusätzlichen Contractregeln.
export const navigationLayersExample = {
  "projektubersicht": "Projektübersicht",
  "ml": "ML",
  "start": "Start",
  "auslassung": "···",
  "projekte": "Projekte",
  "jahresbericht": "Jahresbericht",
  "arbeitsbereichProjekteJahresbericht": "Arbeitsbereich / Projekte / Jahresbericht",
  "entdecken": "Entdecken ",
  "leitfaden": "Leitfaden",
  "komponenten": "Komponenten",
  "bausteineFurDeineOberflache": "Bausteine für deine Oberfläche",
  "dokumentation": "Dokumentation",
  "grundlagenUndPraktischeBeispiele": "Grundlagen und praktische Beispiele",
  "datei": "Datei",
  "bearbeiten": "Bearbeiten",
  "ansicht": "Ansicht",
  "jahresberichtPdf": "Jahresbericht.pdf",
  "wert24SeitenEntwurf": "24 Seiten · Entwurf",
  "aktionen": "Aktionen",
  "aktionenMitAbstand": "Aktionen ",
  "statusleiste": "Statusleiste",
  "seitenleiste": "Seitenleiste",
  "kompakt": "Kompakt",
  "komfortabel": "Komfortabel",
  "offnen": "Öffnen",
  "o": "⌘O",
  "teilen": "Teilen",
  "archivieren": "Archivieren",
  "loschen": "Löschen",
  "linkKopieren": "Link kopieren",
  "perEMail": "Per E-Mail",
  "keineBefehleGefunden": "Keine Befehle gefunden.",
  "berichtsaktionen": "Berichtsaktionen",
  "berichtSpeichern": "Bericht speichern",
  "s": "⌘S",
  "berichtExportieren": "Bericht exportieren",
  "berichte": "Berichte",
  "quartalszahlen": "Quartalszahlen",
  "wert4": "4",
  "teamberichte": "Teamberichte",
  "ubersicht": "Übersicht",
  "zuletztBearbeitetHeute": "Zuletzt bearbeitet heute",
  "a": "A",
  "arveProjekte": "Arve Projekte",
  "suchen": " Suchen …",
  "arbeitsbereich": "Arbeitsbereich",
  "miraLang": "Mira Lang",
  "details": "Details",
  "archiv": "Archiv",
  "projektdetails": "Projektdetails",
  "jahresberichtAusgabe2026": "Jahresbericht · Ausgabe 2026",
  "verantwortlichMiraLang": "Verantwortlich: Mira Lang",
  "projekthilfeLesen": "Projekthilfe lesen",
  "berichtsaktivitat": "Berichtsaktivität",
  "name": "Name",
  "status": "Status",
  "entwurf": "Entwurf",
  "team": "Team",
  "finanzen": "Finanzen",
  "mira": "@mira",
  "speichern": "Speichern",
  "gestaltetDieBerichteImTeam": "Gestaltet die Berichte im Team.",
  "mitgliedSeitMarz2024": "Mitglied seit März 2024",
  "darstellung": "Darstellung",
  "ansichtFurDiesenBericht": "Ansicht für diesen Bericht.",
  "breite": "Breite",
  "wert100": "100 %",
  "abstand": "Abstand",
  "wert16Px": "16 px",
  "speichernLegtDenBerichtImProjektAb": "Speichern legt den Bericht im Projekt ab."
} as const
