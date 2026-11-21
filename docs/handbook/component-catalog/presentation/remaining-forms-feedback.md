# Verbleibende Formulare und Feedback

Bibliothek shadcn, Revision `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`. Aktuelle Base-UI-Referenz; nur Paketquellen. Bibliotheksstatus bleibt draft. Komponentenstatus wird unverändert aus component.json geführt.

Jede der sieben Domänendateien pro Komponente wurde gelesen. Die Bilder übernehmen ausgewählte statische stories.json-Fixtures, mit lokal gebundenen CSS-/Tokenregeln. Fokusdarstellungen verwenden eine ausdrücklich eingefrorene CSS-Markierung. Alle Nachfahren sind inert, aus der Fokusreihenfolge entfernt und als ein statisches Bild beschrieben. Keine Laufzeitakzeptanz oder Barrierefreiheitsfreigabe.

## combobox

Status: complete. Varianten/Kompositionen: open-highlighted, multiple-chips. Zustandsmerkmale: closed, selected-clear, empty, error, readonly, disabled.

Suchtext, Hervorhebung und bestätigte Auswahl bleiben getrennt. Mehrfachwerte erscheinen als Chips.

Quellen (paketrelativ, SHA-256):

- `library/components/combobox/component.json` · `d2d083e60dac112e729b61d9966debf0deeab1d5938edcec402a27fb3320c2d5`
- `library/components/combobox/interface.json` · `5de274838750a60ccba64377c1a70647f7cca5c9f55f1e1c1c99aadbf6e820e0`
- `library/components/combobox/layout.css` · `b72a50cfe3fbf29fcdeda063a2baaeeb09435311983eae7b25f521172d89aab8`
- `library/components/combobox/behavior.scxml` · `51d16d622e99746a14ed122dab6a5298ab52e72b093c20621dc583259e2b2933`
- `library/components/combobox/accessibility.html` · `5671db460505f5cafe372de73aeff8262dda6f06949cd69b447f498a0b224e2e`
- `library/components/combobox/stories.json` · `2f974173754e8ede225345b2f1cdffc205f7919b9d53c15fbc9aabb2e0c8aaea`
- `library/components/combobox/ux.json` · `d2ee5a6c6a6be9eae57cb534a247aeb4f13b0b2250ca40a2d54c7076d49bd5d2`

## select

Status: complete. Varianten/Kompositionen: open, small, multiple. Zustandsmerkmale: closed, highlighted, readonly, disabled.

sm/default sind Triggergrössen; Mehrfachwerte sind Arrays. Select besitzt kein Suchfeld.

Quellen (paketrelativ, SHA-256):

- `library/components/select/component.json` · `7e83ddaa8aa2e5be00bf09b4ddec44548399ff2aefae6df61fdc2d3d3b1f4483`
- `library/components/select/interface.json` · `825058bdf98273c81efc2e30bdbbcf5fbab17b64e6e9ad944fe252a0a2d7e880`
- `library/components/select/layout.css` · `2a3db26e915015ae4d7bf906c5ff0cbd34a413c63806483bdeb43fd877106b91`
- `library/components/select/behavior.scxml` · `2dd72d4e77bd429890ae4ae862934b7aad50d6aece481cfc4c3df21f8c0c6791`
- `library/components/select/accessibility.html` · `f7b6d83937fec6cbbbeb7608c778ce2ccd2c277e6533e26a482707336c73c936`
- `library/components/select/stories.json` · `b52e98cc851e584593844aa82cec9345f5b5f997dbd76f3097ee7388edb3b3d1`
- `library/components/select/ux.json` · `8479493d7f1aa4392b6ca8c782925fee42110f03cd183752322a16b3466f3ba1`

## native-select

Status: complete. Varianten/Kompositionen: native-single, small, multiple. Zustandsmerkmale: focused, invalid, disabled.

36/32 px hohe Hülle; die native Auswahlliste und Mehrfachauswahl bleiben plattformabhängig.

Quellen (paketrelativ, SHA-256):

- `library/components/native-select/component.json` · `fa9f84bb54d4c5083fefded30d9c6f6772d9152c598bd46aae406321d57524cc`
- `library/components/native-select/interface.json` · `5ae3b115578a82e2bfa4e13f1f834fb0d7d94a6f2253c6288f50664cec8f791f`
- `library/components/native-select/layout.css` · `2c5b79064a8224992d7b4c13f54d9471354e641b5f09256f1b965dd0f2b7ff05`
- `library/components/native-select/behavior.scxml` · `1838c95126022e066454d6c99fc2412cbd42bb16dffdc82a3b9b56a5e2507ce8`
- `library/components/native-select/accessibility.html` · `aeafd02afca4b9ab0118db518b8bce938c9f6a148186e9b9d40c013d4ed90c7c`
- `library/components/native-select/stories.json` · `6305dca08307d7b96003a6958c90b0a1d11de3abec49b58d04deaba7568e860c`
- `library/components/native-select/ux.json` · `4f68d9b9703498974c4cd5eee33c85d28da84ee4da6bb662e1d08a646ef3d555`

## radio-group

Status: complete. Varianten/Kompositionen: basic. Zustandsmerkmale: pro, focused, error, readonly, disabled.

Ein einzelner Auswahlwert; 16 px Radio mit 8 px Punkt. Fokus, Fehler und Sperre sind zusätzliche Merkmale.

Quellen (paketrelativ, SHA-256):

- `library/components/radio-group/component.json` · `b243ded24b24159b928679cb52f6d64a4897ebfc630a561ca9fe3481baed641e`
- `library/components/radio-group/interface.json` · `8dfbea5708630c5b3ed4fbc943d13ab6af34580b76ca332d07d3a11c19558a19`
- `library/components/radio-group/layout.css` · `7bed32dd2739ae4136f457d0465c1f3390920e42e4bba071a0d41a1eb6ee665c`
- `library/components/radio-group/behavior.scxml` · `8063cdbcdccae589333f0c8439e255b8f82f3701a10925b60396c5dc84f138e9`
- `library/components/radio-group/accessibility.html` · `496edfbfb0db8863495d22290b91d1e1188a3555f01beca7e7e462443e292d5e`
- `library/components/radio-group/stories.json` · `2ecbcdc3c509a4a1a0f2c4bf500c20b4cbf0cf7b4abea1af0dc2921700327539`
- `library/components/radio-group/ux.json` · `28aecf82723168b873e5f2a7b23acb5700bd5f6bd9418363130cb5e4b0b827de`

## toggle-group

Status: complete. Varianten/Kompositionen: single, outline-connected, small, large. Zustandsmerkmale: pressed, multiple, focused.

default/outline und 28/32/36 px Höhe. Verbundene Outline nutzt spacing=0; Gruppenwert bleibt ein Array.

Quellen (paketrelativ, SHA-256):

- `library/components/toggle-group/component.json` · `523c9410386d22f429bd43a83d6bc08f55ca867516332ba0beaa20114adbaf7d`
- `library/components/toggle-group/interface.json` · `6ec5f7e0eda59f6b09a12577790de455be038593f6360d0f9d5715e738237338`
- `library/components/toggle-group/layout.css` · `2974d01a1ae9d97de6c256c8f8ca3b79b9ed3a4262c5243e678018fd6f769211`
- `library/components/toggle-group/behavior.scxml` · `5ab81ea3bf29f9d7885c7f419f78aa911d813395dea656c0722195a4d0f2d11c`
- `library/components/toggle-group/accessibility.html` · `0c2fa63b40e8f7d3a2ef51a3a4d9a376bab7da004408436cc300b2b9493c4011`
- `library/components/toggle-group/stories.json` · `db15e674876d9adf53106db60d2367efe14ae4d66537c4ed8366fc65c4f5ea05`
- `library/components/toggle-group/ux.json` · `b640988f41cd9aa4e04840e55989e5751d430cd1c4f18c22b9965ff0a0e0c741`

## slider

Status: complete. Varianten/Kompositionen: single, range, vertical. Zustandsmerkmale: focused, error, disabled.

4 px Schiene und 12 px Daumen. Einzel-/Bereichswerte sind explizite Arrays; vertikale Ausdehnung ist eine Referenzentscheidung.

Quellen (paketrelativ, SHA-256):

- `library/components/slider/component.json` · `9bcefe9319ab56e9b1502ffa2b27c6437785a81941bdc46889da5e6d6045f27e`
- `library/components/slider/interface.json` · `ce0cd3575bf7b71e10b2c2abc4e320c494f2eb8d67cf64ed62865a8a56ed506a`
- `library/components/slider/layout.css` · `b19370f2a0af75451da06829b19706803399e03f1c6f1a0c4619f34d2e72e61a`
- `library/components/slider/behavior.scxml` · `17d090a2f4ddbbedfbc3e0045446a18d27cd1669bc7a35b4b386831c5040e158`
- `library/components/slider/accessibility.html` · `143ee6b7d3093f2d173b98182884207ece0bfea4ad2ddef1db7caaa9f1d7e067`
- `library/components/slider/stories.json` · `93fe48193658f80e8e1bd4d1816cee36fec3b943209f5d48f52ff7689cb33a4e`
- `library/components/slider/ux.json` · `15d78d32c4ec811f7623e19f825e02138f105e2c19a5b8717eb139f13dab56c1`

## calendar

Status: complete. Varianten/Kompositionen: single-default, compact, large, caption-dropdown, week-numbers, multiple-example (redaktionell). Zustandsmerkmale: range-start-middle-end, hidden-date, noninteractive.

28/38/48 px Tageszellen über caller data-calendar-size, keine neue öffentliche size-Prop. Bei grossen Kalendern lokal horizontal scrollen.

Quellen (paketrelativ, SHA-256):

- `library/components/calendar/component.json` · `976392d425788547a1e9be260b56139c7642af5740034eed3b589ff2f1e0ef0b`
- `library/components/calendar/interface.json` · `f426f40d6116df8584ea83bdad8dd86bc3b92db9e5f696e6bcc3bed9a423b8a5`
- `library/components/calendar/layout.css` · `487a5ea3fa3fb7a8ee01b5a526a0934f675f4f82a3286b019f43f9b921a41aad`
- `library/components/calendar/behavior.scxml` · `ceb825e03c615f30157f6ac6ccaf1707eec477966461a54f9a321cad123e4902`
- `library/components/calendar/accessibility.html` · `ee1e0ae6dc914a7e0cc286e680067cb13085ff55120b4be46cd02520f8299812`
- `library/components/calendar/stories.json` · `19d670a4fc0fe27157d453c40e966218eb988fdf5d148ad10f702457e9405e6c`
- `library/components/calendar/ux.json` · `093ff1c948a2b9c0a7d517bd2640ce35db4af9f657ffe612a6f65f0a92cbb280`

## date-picker

Status: complete. Varianten/Kompositionen: closed-empty. Zustandsmerkmale: open-single, closed-selected, disabled-trigger.

Redaktionelle Caller-Komposition aus Button, Popover und Calendar. Die Auswahl schliesst das geöffnete Beispiel nicht automatisch.

Quellen (paketrelativ, SHA-256):

- `library/components/date-picker/component.json` · `87474875a3c54e57f3afe5d953949ff57531439f63b3adbfb1ece58b2040ba46`
- `library/components/date-picker/interface.json` · `597fd51a6d251ef07dda596271a8c0091509f5c5379bdc74a301bb51e086ffaa`
- `library/components/date-picker/layout.css` · `daf2e7f30094eec08eca4f3e196f4d2769f7b586bd5873b2efda0495a7899f2b`
- `library/components/date-picker/behavior.scxml` · `3f8320fdaa19a300f7e70ad3b7538e63b26aff58fac259e174e9127944217a35`
- `library/components/date-picker/accessibility.html` · `c9272ba35574733a488b2edff4653a50e5cc534f3b5770c35c6b9d846df1d2d7`
- `library/components/date-picker/stories.json` · `345bda357ad0d92402d439ce44d1abd2853ba487ea13102b72b26b762dc45e57`
- `library/components/date-picker/ux.json` · `584cfa377aa10215176f822cda3a4c4902fd0c7e26c3135e72bd752b03985c02`

## textarea

Status: complete. Varianten/Kompositionen: filled. Zustandsmerkmale: empty, focused, error, readonly, disabled.

Native mehrzeilige Eingabe mit 64 px Mindesthöhe und 10 px Ecken; readonly und disabled bleiben getrennt.

Quellen (paketrelativ, SHA-256):

- `library/components/textarea/component.json` · `170e5775ddedf5bff7805ab5d85ac523c0902ab97b869fd0c1befe204d7c59b8`
- `library/components/textarea/interface.json` · `5c82076b0506d48607e8377f09139ae5d36c846b51116ee5f5856e728a4bffda`
- `library/components/textarea/layout.css` · `fd7379300467bf98380ba0616beda93c8691c50b8b2fb0662c4c3d81ad647bf0`
- `library/components/textarea/behavior.scxml` · `5f286ece1f97fd040121df3e9d35967aa58ac90c39338748cc56e9e15d585d3c`
- `library/components/textarea/accessibility.html` · `71947efd5ee9ac24190c7780ab22076ecb2ef50995cfcf7e07b1558ef8ea8c76`
- `library/components/textarea/stories.json` · `83fa3ef9e07c34de61da3840bc79cc4e484a2bcf7d5478cba9699d8a46670a1e`
- `library/components/textarea/ux.json` · `aa71504255fe2d2e3eec88b86f870928003f7f03edde1e9ca5fcd73dcee8cc6d`

## input-otp

Status: complete. Varianten/Kompositionen: empty. Zustandsmerkmale: partial-active, complete, expired-error, disabled.

Eine echte Eingabe hinter sechs dekorativen 36 px Slots. Der sechsstellige Zifferncode ist eine Caller-Vorgabe.

Quellen (paketrelativ, SHA-256):

- `library/components/input-otp/component.json` · `6ce8918b146e64a193acc3529140e91355611db744f5bd09d0f28b1c8ea3323b`
- `library/components/input-otp/interface.json` · `058c4b9bc8aaf7f0a1a0e856766911cd618aa0f220ce6cc3bfa2985e7a6cc2df`
- `library/components/input-otp/layout.css` · `5ae1dfb23caf3363515ee7f21a6cddc4946d18004f03ab3389c342169d63fa4a`
- `library/components/input-otp/behavior.scxml` · `49d65f20717d3dd3280ddb3594105255f91535cac76f9217a314982c5482dee4`
- `library/components/input-otp/accessibility.html` · `8e0375d4d6e0232dfadcb22102372fa49097964703a0e4469c8103d29b4516df`
- `library/components/input-otp/stories.json` · `43a5197c2f4a34ee61450f7dd7cde9aa0cf94c855aea508058b5313e501031cb`
- `library/components/input-otp/ux.json` · `1970c2738033c1aaf87ec720556dd8d7641bae1c2c0a84d8c95e495f5005dbd6`

## input-group

Status: complete. Varianten/Kompositionen: inline, inline-end, textarea, block-end, button-sm, button-icon-xs, button-icon-sm. Zustandsmerkmale: focus, invalid, disabled.

Vier Addon-Ausrichtungen und vier Aktionsgrössen; Fokus und Fehler stammen vom enthaltenen Eingabefeld.

Quellen (paketrelativ, SHA-256):

- `library/components/input-group/component.json` · `5e578bad20952f229feca1ca15a0362d5d6ea4bb68f06de726705db91d6446cd`
- `library/components/input-group/interface.json` · `74553106f06f0eeb8fbb90d840b92ecea7f98d4bd427d5023b52a7c8b1f829af`
- `library/components/input-group/layout.css` · `c958857b4f1a29c64ed6d4b830a4b0d5d68c21b617ffd16718b28042502ee1ad`
- `library/components/input-group/behavior.scxml` · `0780d6fcfcb50ad7759a19a4feb188f720f20124dbafd8883561731a2d6b0706`
- `library/components/input-group/accessibility.html` · `5ce2160e780dafe6cb31fb13c2755998b537bc6a686d644b3cf95da78fbea8a9`
- `library/components/input-group/stories.json` · `d83768b24c89dd8927995a500b11658b5eec5a17c645fc95803a7e7ddb0a71a8`
- `library/components/input-group/ux.json` · `422a68ca94017ccfa2e021552706936c07ad7e2563b84f337cf619f7a4c83f03`

## field

Status: complete. Varianten/Kompositionen: vertical-invalid-field, horizontal, responsive, label-legend. Zustandsmerkmale: error-list, disabled-control.

Präsentationskomposition: vertikal, horizontal und responsive. Labels, Validierung und gesperrte Eingaben gehören dem Caller.

Quellen (paketrelativ, SHA-256):

- `library/components/field/component.json` · `e4c1ebfe9175297fdefae4a02302a6ec5963ac1be9287a37102be3453d6307c6`
- `library/components/field/interface.json` · `f74a802b6119da16301bbea937d05a91fc5e29c120bae0fd336f07721afbad04`
- `library/components/field/layout.css` · `271b5f27c5a698593e4afbb34856e009875da6fb8acffe2d46fab5ced2b4c4d1`
- `library/components/field/behavior.scxml` · `c49d2f90e8a64f695d0598b608d4e56e9638c1e0492f7b36f62fe0a428fbb9c7`
- `library/components/field/accessibility.html` · `4eb6d6d88cb38da7dae4cbfb3723618edb7091f65b583ace7ca704ad552bbe90`
- `library/components/field/stories.json` · `01d955533fb1e533abe570c3772309a2ab966f107f37bec2faf191fdb1cf3c5c`
- `library/components/field/ux.json` · `1795fad95eff8188dbd161eccd9cb403a7e21c2e395bcef45edd726836ba29d9`

## label

Status: complete. Varianten/Kompositionen: named-input, disabled-host-field. Zustandsmerkmale: keine eigene Ablaufsteuerung; kein künstliches Vorher/Nachher.

Native Label-Komposition mit zugehörigem Feld; abgedunkelte Darstellung ist Caller-Kontext. Keine eigene Ablaufsteuerung.

Quellen (paketrelativ, SHA-256):

- `library/components/label/component.json` · `97c6699f51066f2bd7e3cc1de6bf75367512f15715feee5f1f3c15b2c8fb0ef6`
- `library/components/label/interface.json` · `d43b63c0ac544ba2ca657adeffdb97b40d6807d94f896d9f32b7f718cae78414`
- `library/components/label/layout.css` · `d6848c476d1a5c4cfe2bba11af327995d97dacb4236ce3f8411c31e7ac8ad033`
- `library/components/label/behavior.scxml` · `ad69057857756b6f60d9e80b6655f79ac796dfcb6900e08e9675be80480239ed`
- `library/components/label/accessibility.html` · `1114227fd4033de640871608b44f3c2af9d39f8b206150614e38cc87c0344839`
- `library/components/label/stories.json` · `bd4fce950e7ec5519f0aabdbcba8b3d9efcb0fe5205950168454a13ac9b3c470`
- `library/components/label/ux.json` · `826524e64c54d2a4e6824f3ff922386b7ae0ff93c7ddfa326b58ee8377292da7`

## questionnaire

Status: complete. Varianten/Kompositionen: required-plan, selected-checkbox, contact-input. Zustandsmerkmale: selected-radio, invalid-plan, invalid-contact.

Quellenbelegte Formularstufen: Einfachauswahl, Mehrfachauswahl und Texteingabe. Aktiver Schritt, Antworten und Validierung bleiben getrennt.

Quellen (paketrelativ, SHA-256):

- `library/components/questionnaire/component.json` · `57e6e06e7e4e76140496bb9cb67259ce39b1b6af237daf9741dcf9cdb33203f9`
- `library/components/questionnaire/interface.json` · `e2254c34ae704ea3d4615aca1ea15b7d8e7791e08325233b1bd981819f62379a`
- `library/components/questionnaire/layout.css` · `fa050a0e2411543cecb4e8cbb5e7ec370ccb137bd1256874675068706cac7eb8`
- `library/components/questionnaire/behavior.scxml` · `fbcb6571a814c8ff4166a02b7b17b63404fc5c204c0e3b2f35bbcb8a94b413b7`
- `library/components/questionnaire/accessibility.html` · `9738db284f4cdf49a42127730c19673ad459b22869bd7301012f5c5cdcba85ed`
- `library/components/questionnaire/stories.json` · `e873645d2374f3c0c2157017e2ac79b002e489e25691fbdfe471e9ca7e18209c`
- `library/components/questionnaire/ux.json` · `3de006d37925095a708959c4f45bf1c662bb1451d567a06f889119c9764fab58`

## button-group

Status: complete. Varianten/Kompositionen: implicit-default, horizontal-with-text, vertical. Zustandsmerkmale: disabled-descendants, focus.

Horizontale oder vertikale Verbindung realer Buttons. Kein Gruppen-Auswahlwert; Sperre und Fokus betreffen die Kinder.

Quellen (paketrelativ, SHA-256):

- `library/components/button-group/component.json` · `dda8c3955ccd6894b438fe5ce7d73c65aad7d05a70ff82721f2ba1896cf07df2`
- `library/components/button-group/interface.json` · `50d900b9db89691e3b0c13af075862a474f87fc9da0f375fa1af72a4be479921`
- `library/components/button-group/layout.css` · `4f4e6f2358249fa33d50af96779d49225f8832a67574e6b848d442d439c89217`
- `library/components/button-group/behavior.scxml` · `ef0bab0d4bf531654a89aa84045146206e7d4cddae32ba036675899a7ffd753e`
- `library/components/button-group/accessibility.html` · `75a3c391e38d89a4500ba0d29a7d092910d4254d930417a281535f3a588b2e45`
- `library/components/button-group/stories.json` · `af15e289d46bf9bc4ccdd638f7bbb0ceac50932adc02cca710abe9aa1e5f7cab`
- `library/components/button-group/ux.json` · `24e4e806ae41ac039c9c4e59bc4c451d6c9074293a800918c69200767a1f6f07`

## kbd

Status: complete. Varianten/Kompositionen: shortcut-group, single-key, long-key. Zustandsmerkmale: keine eigene Ablaufsteuerung; kein künstliches Vorher/Nachher.

Native kbd-Notation: 20 px Mindesthöhe, 6 px Ecken, 12/16 px Text. Keine eigene Ablaufsteuerung oder Shortcut-Ausführung.

Quellen (paketrelativ, SHA-256):

- `library/components/kbd/component.json` · `df932f5d5b0f33a3df24db200757b0d4c5f6bc2eb5f53424dddcf7b6cbe6bbb7`
- `library/components/kbd/interface.json` · `22124aa47366426257fe6dde0823e468f630f2fa503e62c4094ea437155823e0`
- `library/components/kbd/layout.css` · `b9e14739e49dbc69b2b13e75f918e510ad3ac784c3ec1e0c088b1ec61ea676a1`
- `library/components/kbd/behavior.scxml` · `113d5d329ad1faadea511c97ee5155c4baa6403050a5124b96dcfc7eaa6877fc`
- `library/components/kbd/accessibility.html` · `57beb104ec39b57f9c146f77d04aa23f299f648166d350e57af8b56853706e20`
- `library/components/kbd/stories.json` · `25b0d2c7322dc6e5ba667762c067ee98cc9579e0fdfc3cfb76366521e4cc4c34`
- `library/components/kbd/ux.json` · `8d2cc84d0a353177833dd1bfff32c8dbc28449253c5bbf90ed5a024f7ceebb07`

## alert

Status: complete. Varianten/Kompositionen: default, destructive, without-icon-action. Zustandsmerkmale: keine eigene Ablaufsteuerung; kein künstliches Vorher/Nachher.

default/destructive und optionale Icon-/Aktionskomposition. Keine eigene Ablaufsteuerung; Text und Aktionen gehören dem Caller.

Quellen (paketrelativ, SHA-256):

- `library/components/alert/component.json` · `8ac3c45f549d4db1d729d2b9665f8ce1343465f32e55b6574927d8755737c0d6`
- `library/components/alert/interface.json` · `694386ab3d92c627adaf85c3b93a1aae2ebd940a09306df422d9781e7fe129a2`
- `library/components/alert/layout.css` · `4de3771d7490590f28bf456036d5ae8327f7bd10af0ce94ce735de66b727bc5c`
- `library/components/alert/behavior.scxml` · `13b523fc9c6b82e2466aadfb150bcf1f092cd0c296b7b633649d7cc749e2ca7a`
- `library/components/alert/accessibility.html` · `7bdedf7e0bb44a4bc6d9cbcaca9bd5233f035c9e201dd7b90b4f8119f58dfe72`
- `library/components/alert/stories.json` · `ea92d6ee93e99571893591a9ddccbea10b9ad68e10b8a13dc33e4209110158b2`
- `library/components/alert/ux.json` · `dead2b20824e2aa58d0f0c45ed519a9e24a7ec335ef2c7458e65b38085f5d8d3`

## toast

Status: complete. Varianten/Kompositionen: persistent, typed-icon. Zustandsmerkmale: stack-collapsed, stack-expanded, disabled-action.

Persistentes Feedback, Typ-Icon und zusammen-/aufgeklappter Stapel. Statische Ansichten belegen keine Timer-, Swipe- oder Fokusfunktion.

Quellen (paketrelativ, SHA-256):

- `library/components/toast/component.json` · `0923c29f982f0ee2c9dab039eaa9e3dd196c98f2bcf72a41080470dc0434a7f9`
- `library/components/toast/interface.json` · `361deefb4ff4e0079341eb440b2e44250e0b8f449f3e4dc55aa924b50bebb05c`
- `library/components/toast/layout.css` · `ff2fb00ce9b7ea70bc31c08c3c69817e4ef2ba7cbdf564e922f6adaed096c83e`
- `library/components/toast/behavior.scxml` · `6cd4dd60ccf95baa32564b369d2d703f8d360e310ac10e53b45b5b13c5e03c54`
- `library/components/toast/accessibility.html` · `3b336553784a615875ec1b7915ea31650c4832302f4346e1162588a9f2a74dc8`
- `library/components/toast/stories.json` · `bba81c4b7bcf04d9bce4ead6953986b67f4427652f1679afc987a7cf562fa11b`
- `library/components/toast/ux.json` · `17dcd8f03095e82d2dfdadaa490191d7a66979718bbe09d330de89c2285985ad`

## empty

Status: complete. Varianten/Kompositionen: empty-with-recovery, text-only, default-media. Zustandsmerkmale: keine eigene Ablaufsteuerung; kein künstliches Vorher/Nachher.

Leerer Inhalt mit Recovery, Text oder Media. Icon ist eine Media-Variante; keine eigene Lade-/Fehler-Ablaufsteuerung.

Quellen (paketrelativ, SHA-256):

- `library/components/empty/component.json` · `101352130f80b92e25ba1cbc230505ddfc9287331c42a1c7f5b9546be898cd2d`
- `library/components/empty/interface.json` · `81101766a75d644fd245667485e16bd6c08ddd0b90a4d663957c33ffed3a3786`
- `library/components/empty/layout.css` · `912d11ecbf8df717208317ed325e434a27dd5935ff4d93477a8f78302d50256d`
- `library/components/empty/behavior.scxml` · `7dc3d2acf54e884c1896db75a874e8fd17df1c5dbaeb3ed44ad51bf64068d33f`
- `library/components/empty/accessibility.html` · `45b46f5c9cdab301025bfc58296410f2ba16402a987d1fe7416cd7e7db6493ea`
- `library/components/empty/stories.json` · `4dd00ee848268f2d38a5d3c1b3face300aa1506afb282ea100c6e1616f84331b`
- `library/components/empty/ux.json` · `d26e4ebe0b9aaf54755ed7f258125a70a59bd2773dff8a88dbf1194a1c584d3c`

## progress

Status: complete. Varianten/Kompositionen: value-40. Zustandsmerkmale: value-0, value-100, indeterminate.

4 px Schiene; Wert ist numerisch oder unbekannt. Unbestimmt zeigt das Referenz-CSS ein zentriertes 35%-Segment.

Quellen (paketrelativ, SHA-256):

- `library/components/progress/component.json` · `b9b20d1b9b2db7cac8efb1fc25488051ba06bce2c2e72d9cb7d03204924d0a09`
- `library/components/progress/interface.json` · `f2979f6b1117931cb9633beca85a248e06c3e1ec498d46d54458558079625ae3`
- `library/components/progress/layout.css` · `a071754983ae32da652e7d4be657ab4284192997ac63122120de14d3f36c0074`
- `library/components/progress/behavior.scxml` · `ffb1bc1f9541150cf76b3c47546b9ed2309009f72d31246bec2dbe7cb8ce6d88`
- `library/components/progress/accessibility.html` · `a8047c82a6f02790213d8f7163959c0b2570e2b19241cac47409632dd2dd90ed`
- `library/components/progress/stories.json` · `2b51ed14daad7e2bc7c73788cec2c6065fda247e194524140f36b76614c37966`
- `library/components/progress/ux.json` · `06d772daee5745becf0d9bd21be0c1fe44f4fc6b70c7f6cd4b3784dcca8f0dfb`

## spinner

Status: complete. Varianten/Kompositionen: loading-small, loading-default, loading-large, loading-extra-large. Zustandsmerkmale: keine eigene Ablaufsteuerung; kein künstliches Vorher/Nachher.

12/16/20/24 px über Caller-Klassen, keine öffentliche size-Prop. Statisch eingefrorener Indikator; keine eigene Aufgabensteuerung.

Quellen (paketrelativ, SHA-256):

- `library/components/spinner/component.json` · `f893e46acd6ca7659f9c6a6ac685dc7e911858f79b7b1509efa640287e8e709e`
- `library/components/spinner/interface.json` · `e25ae6c20f5e23a6c60a42916db16ff29d07d3ab94ba885972c194b4ee667990`
- `library/components/spinner/layout.css` · `b0868974f51f6e84620c082401275609d5ecd4f4ef53eab0953761bf48e59ecc`
- `library/components/spinner/behavior.scxml` · `eb0f41e065a95a1698ebd718d7999972530fc0b09b1b9fed6baff071d02e3ea8`
- `library/components/spinner/accessibility.html` · `39f3a21062f038d380d79eb332c6c89db0514730b9593cc2c2ae5d5e942c8b1b`
- `library/components/spinner/stories.json` · `71ac5a36acb845b1963499564a2bd80a39020fbfef67891d0c83698566764985`
- `library/components/spinner/ux.json` · `08bab06b209e969fa7854b7d2878349edd7673b847d4b1a7341ce05728323053`

## skeleton

Status: complete. Varianten/Kompositionen: loading-text, loading-avatar, loading-card. Zustandsmerkmale: keine eigene Ablaufsteuerung; kein künstliches Vorher/Nachher.

Text 16 px, Avatar 40 px, Karte 125 px über Caller-Klassen. Dekorative Geometrie; Host liefert den lesbaren Ladestatus.

Quellen (paketrelativ, SHA-256):

- `library/components/skeleton/component.json` · `3081f125ae0056434c2ceeac8429870947e993e272cd2423a6fcbc324e5c04f9`
- `library/components/skeleton/interface.json` · `a9e12030ac68c6098abc3a082222b537fb3e67e8678e8264796c9824409d8b7c`
- `library/components/skeleton/layout.css` · `d2c893fb1b07504c381b7cd668f00128b23f5117f92dfb4d76eeff5f14070ba3`
- `library/components/skeleton/behavior.scxml` · `60e4c2fb59ad694a6738b49db1e554fe64d8f1d62f3d1632069a8707647d96dc`
- `library/components/skeleton/accessibility.html` · `eee8cdfd4f40c2b6673f82297d8afd9527a15a7a893f90e30eba41e8dd8e5a02`
- `library/components/skeleton/stories.json` · `d5d464a5783c6d6162cba002f72b28e6ee3f6a59a95d248948cd44685bc6fdec`
- `library/components/skeleton/ux.json` · `d09d68837686e1837968b0d8e8f1a6d397b4532902b4924aaf28fb440c990504`

## Gemeinsame Projektion und Grenzen

Alle Bilder sind eingefrorene Source-Fixtures. Die enthaltenen englischen Beispieltexte stammen aus den Contracts. Native Auswahlmenüs behalten ihre Plattformdarstellung. Kalender liefern single/range-Beispiele, die Originalstories caption-dropdown und week-numbers sowie ein ausdrücklich redaktionelles multiple-Beispiel mit dem 12. und 19. November. Dieses übernimmt die durch CEM/DayPicker belegten selected-Merkmale derselben Tageszellen, ohne einen zusammenhängenden Bereich zu markieren. Nicht jedes RTL-/Hover-Spezimen wird gezeigt. Toast zeigt das vorhandene typed-icon-Storybild; keine erfundene Farbpalette für alle fünf Typen. opening/closing/swipe/limited sind keine zusätzlichen Bilder, da Bewegung beziehungsweise unsichtbare Phasen in diesem statischen Vergleich keine gleichwertige Aussage hätten. Toggle-Grössen sm/default/lg und default/outline sowie die Field-Orientierungen vertical/horizontal/responsive und beide Legendvarianten sind abgedeckt.

InputGroup-Addon-Ausrichtungen inline-start/inline-end/block-start/block-end sowie xs/sm/icon-xs/icon-sm sind abgedeckt. Label/Kbd/Alert/Empty/Spinner/Skeleton erhalten keine erfundene zweite Zustandsfolge. Spinner-Rotation und Skeleton-Puls sind für die Anschauung eingefroren. Responsive Field ist abhängig vom tatsächlichen Container, kein globaler Breakpoint. Popup und Toast werden innerhalb der Zelle angeordnet; die Toastbreite wird durch die Zelle begrenzt und Text/Actions dürfen umbrechen. Das ist eine redaktionelle Katalogdarstellung, keine Behauptung über Portalpositionen oder Laufzeittiming.

Quellen der gebundenen CSS-Abhängigkeiten und Light-Tokens (paketrelativ):

- `library/tokens.css` · `e181931cf68b623bfff7316135e3368edff17779e5b50950893e9470dd9f791a`
- `library/components/button/layout.css` · `3c3bc15b71a3cde0d3f3980368a4660ee23485e652830c978c3c1decdaa81f96`
- `library/components/input/layout.css` · `552d3a1e30f3a1b7283eb6ac362acbc2cd0e9bf9916e7101c72ca3e75283b6b3`
- `library/components/dropdown-menu/layout.css` · `dc45af567d959c5a410810cd40d4796eb5d3b9d8e26cc0ee2f7358d6caec2509`
- `library/components/popover/layout.css` · `dae9abd2fcb2c6c7cc71881bf95e3f25ab290f5e137cf8ba6c8798dff0bff085`
- `library/components/separator/layout.css` · `e00e2c5ee064cb310a48265d31d09e4eb36cac77b71097409a86ce9a88d1268c`

Ausgeführte Prüfung: Datenprüfung aller 118 Fixtures (22 Komponenten): Quellenhashes korrekt; keine script/iframe/object/style-Tags, Eventattribute, Ressourcen-/Navigations-URLs oder Formularaktionen; alle enthaltenen tabindex=-1; keine doppelten IDs je Fixture. CSS mit PostCSS geparst: einzige Top-Level-Regel ist `.comparison-forms-feedback`. Typecheck zeigte beim ersten Lauf nur die noch fehlenden parallelen Bereichsmodule, keine Fehler in diesem Bereich. Visuelle Prüfung nach Root-Integration durchgeführt (siehe unten).

## Visuelle Prüfung nach Integration

BrowserOS neo, 22 echte Komponentenseiten aus dem lokalen Arve-Server. Alle 22 bei 390 px iframe-Viewportbreite visuell betrachtet; jede Seite hatte eine Dokumentbreite von genau 390 px. Das sind Browseransichten der integrierten Seiten, keine getrennten Mockups. Schwerpunkt Desktop bei 1040 px: Calendar (default/compact, Wochennummern, redaktionelle Mehrfachauswahl), Questionnaire und Toast.

Gefunden und korrigiert: Der umgebende Flexcontainer liess Field/Textarea auf die Inhaltsbreite schrumpfen; der lokale Specimenwrapper füllt jetzt die verfügbare Breite. Nachprüfung zeigt lesbare volle Feldbreite bei 390 px. Der erweiterte Toast-Stapel wurde oben abgeschnitten; genau diese statische Komposition verwendet jetzt natürlichen column-reverse-Fluss mit Quellenabstand, ohne gemessene Portalpositionen nachzuahmen. Nachprüfung: alle drei Karten sichtbar, bei 390 px jeweils 138 px Höhe und 12 px Abstand, kein Dokumentüberlauf.

Bei schnellen Framewechseln erschien einmal eine Next-Dev-Konsolenmeldung über state update before mounted ohne Komponentenstack. Kein daraus abgeleiteter Komponenten- oder Freigabebefund. Ausführbare Tastatur-, Timer-, Formular-, Screenreader- und API-Flows wurden durch diese statische Darstellung nicht geprüft. Der Daten-/HTML-Sicherheitscheck wurde nach Kalenderergänzungen für alle 118 Fixtures erneut ausgeführt: keine Befunde.
