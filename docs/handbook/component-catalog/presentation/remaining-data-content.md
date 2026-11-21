# Verbleibende Daten- und Inhaltsvergleiche

Bibliothek: shadcn · Export `30c4964806cddb026155c6d3126dbe8251b34c34f81640b07b0d59b916343c90`. Die Bibliothek bleibt `draft`; alle 23 hier verwendeten Komponenten haben im Snapshot `component.status=complete`. Das ist kein Nachweis dieser neuen Darstellung oder allgemeiner UI-Korrektheit.

Arbeitsgrundlage: `.agents/skills/arve-ui-contracts/SKILL.md`, Manifest, dependencies und portable Reading Guidance. Alle sieben pro Komponente gebundenen Domänen-/Story-/UX-Dateien wurden analysiert. Nur lesbarer Snapshot; keine Authoring-/Validierungsruntime aus dem Paket behauptet.

Alle Werte, Namen, Gesprächsinhalte, Diagrammdaten und Miniaturillustrationen sind ausdrücklich redaktionelle Beispieldaten. SVG-Diagramme sind statische Schemen des belegten Typs, keine Recharts-Laufzeit. Das vollständige Werteschema ist jeweils als native Tabelle sichtbar. Farben und Abstände sind aus layout.css/Tokens lokal nachgebildet; für enge Vergleichskacheln ist die Plotgeometrie vereinfacht. Es gibt keine fokussierbaren Attrappen und keine globalen Contractimports.

## data-table

Varianten/Kompositionen: Table plus explizite Features (payments).

Zustandsansichten/Grenze: Sortierung, Zeilenauswahl, Spaltensichtbarkeit und Filter sind getrennte kontrollierte TanStack-Features; leer und fehlgeschlagen sind unterschiedliche Aufruferrückmeldungen.

Quellen (paketrelativ, SHA-256):

- `library/components/data-table/component.json` · `b4e245e84206bd39fa7f91c0958285c570ec3b010819763aab7fbf132db69be8`
- `library/components/data-table/interface.json` · `8b051f129a2c98a1c9ac71fe5940f10af9d1ebddc9f607bb46e5f468e8f0c113`
- `library/components/data-table/layout.css` · `d91052ba21e3a82d01ebecffa4759ed186f71a59bb07e37617be3c69ff726ed4`
- `library/components/data-table/behavior.scxml` · `53abe96288469985a93c0f124cf70930152d1c27782c97069c2d419cd0481a22`
- `library/components/data-table/accessibility.html` · `e9d4b64cb18b66251906140e38f53e9c882d12d659b455acf18b9064fd65c34c`
- `library/components/data-table/stories.json` · `4cad309a3fc16b056e94dfad69c6640f90ff6c1c2598fcf383ee37dcc8ada1af`
- `library/components/data-table/ux.json` · `194cc20d93d0e65eb108324ac73a4e34840ecb2be9d85b7d10d0250532f51cd7`

## table

Varianten/Kompositionen: Native Tabelle mit Caption und Footer (native).

Zustandsansichten/Grenze: data-state=selected ist eine belegte Präsentationskonvention. Table besitzt weder gespeicherte Auswahl noch Sortierung oder Filter.

Quellen (paketrelativ, SHA-256):

- `library/components/table/component.json` · `f262e7430239a2c6c30287d1b1c8771efc23f207fa7717e515922fe9f7ffec36`
- `library/components/table/interface.json` · `82c323879365cdfd07fd740bf9aaa61f6d068fafb303e92f05430735c46df4fb`
- `library/components/table/layout.css` · `831aae25c99d616214c0b8db0e45f6fe9fdde17a13fdcbe0d361eb45e039864e`
- `library/components/table/behavior.scxml` · `cdcda25f5fbb2fd54d0eef074f192141236aa52d3ea38cca9253875609225718`
- `library/components/table/accessibility.html` · `0741e830bebbca3fb7959cfb8527195d212a7b3fe6d8cd3e52a9bf1e10b5e0e8`
- `library/components/table/stories.json` · `5ddbb7875e1075e7a5bd0bd8e57a58d2d159bbfe3adae70c33df76291f28d164`
- `library/components/table/ux.json` · `3e50b5d74d9ca9c50946ae07aa511f4d935374e1896eb10b64209456ab12dab0`

## chart

Varianten/Kompositionen: Diagrammtyp als Zusammensetzung (ready); Drei Tooltip-Indikatoren (dot, line, dashed).

Zustandsansichten/Grenze: ready/empty/error sind Zustände der dokumentierten Aufruferkomposition. Leer und Fehler werden ausdrücklich benannt und nicht als Nullwerte geplottet.

Quellen (paketrelativ, SHA-256):

- `library/components/chart/component.json` · `f6dafb3b4a541e6f297344a39cdf2724c986df17561f084b5546ad71dfab72ec`
- `library/components/chart/interface.json` · `ff0aac1cdaa45f887f26d6590a2f5facb7878a3932e4d1d2bdf686b5a1a9b0b1`
- `library/components/chart/layout.css` · `6e0d8cfc53f13a0c24e2d54789408052cb8d7c306f5b68fadd23b431d98e2e50`
- `library/components/chart/behavior.scxml` · `8c9e65113d9c9066e5d0e5600d023958d5c4643ef1180f3d627a5e1a9c39772a`
- `library/components/chart/accessibility.html` · `37afae55222c7e13ce79fcb45121e068c7ad9892e793a108f48157f42a7b47f2`
- `library/components/chart/stories.json` · `727964a4304cf2b28b0faf4dd91adfd351d5c7d77ff45a3b7865ac09394a5e12`
- `library/components/chart/ux.json` · `b77b1be2a72420f9ea5c379c9bec8dc7996d27a5bb4c98ecdae05ce53dd69335`

## chart-area

Varianten/Kompositionen: Diagrammtyp als Zusammensetzung (ready); Drei Tooltip-Indikatoren (dot, line, dashed).

Zustandsansichten/Grenze: ready/empty/error sind Zustände der dokumentierten Aufruferkomposition. Leer und Fehler werden ausdrücklich benannt und nicht als Nullwerte geplottet.

Quellen (paketrelativ, SHA-256):

- `library/components/chart-area/component.json` · `8eabbe7b58fac16048b1e4cba0192f16c2e573203be2e34ee89508072c63dda2`
- `library/components/chart-area/interface.json` · `36e5275934ce6ed612606319095941550fa81b14c5274f287f57283d15e59679`
- `library/components/chart-area/layout.css` · `d02aeb95477eac97b35bff0424d31a60b6c6e297384ff6a721fa7ba782319ad4`
- `library/components/chart-area/behavior.scxml` · `ad62ade0cec559f2d4c1b0ce8be5f162fabb68958c4b5549af934415abaafea6`
- `library/components/chart-area/accessibility.html` · `7ba37c25f06c7cd728cf97a6bfb0e291ae0b18413132e1e6847689e4d9538124`
- `library/components/chart-area/stories.json` · `7da33d935cf28f8de08f23687c2ca59f6d72082af27c88e9f0599da8c9e21cf2`
- `library/components/chart-area/ux.json` · `3ad4a362b827fbf108490a76871b1f9c4643386d8036b2d356ecd61a7a28c283`

## chart-bar

Varianten/Kompositionen: Diagrammtyp als Zusammensetzung (ready); Drei Tooltip-Indikatoren (dot, line, dashed).

Zustandsansichten/Grenze: ready/empty/error sind Zustände der dokumentierten Aufruferkomposition. Leer und Fehler werden ausdrücklich benannt und nicht als Nullwerte geplottet.

Quellen (paketrelativ, SHA-256):

- `library/components/chart-bar/component.json` · `28b15e268839d9ab2a0419c733a2d5a2bb61ef722d22c37d16b8e18de327454d`
- `library/components/chart-bar/interface.json` · `376e07d14d72527dcae7461f8cabe42e7b4fb8da7c070445a8c1cb7e8fa15fec`
- `library/components/chart-bar/layout.css` · `539fc6fbb14a2771025553dc77282d643756da7c645edbcc162f6a6608555cbb`
- `library/components/chart-bar/behavior.scxml` · `4ce2dd0995edc6753c2973f7cc7566b8922d072acf461a9764d984bc996114d8`
- `library/components/chart-bar/accessibility.html` · `1e2de74fa186b2d240b82c1f2131ed1df37cf741feac75294abe66e396e1d185`
- `library/components/chart-bar/stories.json` · `d2b1cb3de4976907415fd07b62f22cbf01a89aea28b2f81b82c4a0d5f8e688d2`
- `library/components/chart-bar/ux.json` · `ea850bb28da24c0b9975607adfdc5fd8c6903f5f5ba26bb4dcb25c4f61000d24`

## chart-line

Varianten/Kompositionen: Diagrammtyp als Zusammensetzung (ready); Drei Tooltip-Indikatoren (dot, line, dashed).

Zustandsansichten/Grenze: ready/empty/error sind Zustände der dokumentierten Aufruferkomposition. Leer und Fehler werden ausdrücklich benannt und nicht als Nullwerte geplottet.

Quellen (paketrelativ, SHA-256):

- `library/components/chart-line/component.json` · `012d5e4966d95798589fcaec7504c816d34b9610612d59cf48f67af4f1986201`
- `library/components/chart-line/interface.json` · `60831759cf1df2521ef570fa64cdfa5bf963615935940a1dfa4131601ab846e2`
- `library/components/chart-line/layout.css` · `754c18d714a366ad8e6eb6ec57df5b877fd88cdb8cc2f16fa5c3653bb4e16d18`
- `library/components/chart-line/behavior.scxml` · `e9674a96746beee1e4b8ebea8364700c3e4acf917d4a9ceaa1fc807a4b5c953d`
- `library/components/chart-line/accessibility.html` · `0a7e398dac65f3d9631d35e04f8c9a478700d30fb534a10b2206fd5d7e6b969c`
- `library/components/chart-line/stories.json` · `d146b16b0523642dfc1103c4db5d51e0f78e3377b2075856cd9e573104d3ab3e`
- `library/components/chart-line/ux.json` · `3056d498d2fd7076b585a07831f8a0814acae656522d9c075fdd91ac2ec63f32`

## chart-pie

Varianten/Kompositionen: Diagrammtyp als Zusammensetzung (ready); Drei Tooltip-Indikatoren (dot, line, dashed).

Zustandsansichten/Grenze: ready/empty/error sind Zustände der dokumentierten Aufruferkomposition. Leer und Fehler werden ausdrücklich benannt und nicht als Nullwerte geplottet.

Quellen (paketrelativ, SHA-256):

- `library/components/chart-pie/component.json` · `9baddd5afb0c4f0edf4f5374cc986d5649c4fbcaff0923292045355e30e50f34`
- `library/components/chart-pie/interface.json` · `5445e95fc08771eb146df6785c5ed6d811439dda8d8b86fac75db4f23efdc046`
- `library/components/chart-pie/layout.css` · `0114efce1fc330990cdb6a174c26b620cee3555e6a9ba9fc59eb1b1de55366a3`
- `library/components/chart-pie/behavior.scxml` · `8d9aebc628bf59fb61a550d65e8e51e76936c205e0a33b73cde99a01c3de3410`
- `library/components/chart-pie/accessibility.html` · `6e4ca4c8e44c13f33c4621d06df840f2865a70fbdeaf6c5f14f7c82d5e116670`
- `library/components/chart-pie/stories.json` · `1a600da2d299278be9082d8f5c096423a672fdf6927dd824aed49eb3771b5015`
- `library/components/chart-pie/ux.json` · `9be2f1ddc0a4550cba14e4ff0327a336d114f5624a52f381df6fe3c45ee95f49`

## chart-radar

Varianten/Kompositionen: Diagrammtyp als Zusammensetzung (ready); Drei Tooltip-Indikatoren (dot, line, dashed).

Zustandsansichten/Grenze: ready/empty/error sind Zustände der dokumentierten Aufruferkomposition. Leer und Fehler werden ausdrücklich benannt und nicht als Nullwerte geplottet.

Quellen (paketrelativ, SHA-256):

- `library/components/chart-radar/component.json` · `1eb532ce0af4704ab303171c10e452a2b9ae5ca3740dbc8427688a153ad4d4bd`
- `library/components/chart-radar/interface.json` · `651db234f145feb081686fbdded3dfe05efd272a5bc5ce59b0b04c11a141d32e`
- `library/components/chart-radar/layout.css` · `3f3fabf17a5a80acb6ee5309957e16ea441d93d01ba9b9cf3895c53fbf4bb519`
- `library/components/chart-radar/behavior.scxml` · `2da775041a708b064e8b3d7d576e7e98540a1f3476c1d72d2ebdfd510d46dd86`
- `library/components/chart-radar/accessibility.html` · `959396398a2eb765a847b77cb30c7e378d73cb15478de1cf9df4e34eb87e0b7a`
- `library/components/chart-radar/stories.json` · `ad1333ac9189b27768e7a29bc676d94facfea736c3fe25dbc8263dd4380be384`
- `library/components/chart-radar/ux.json` · `75cc61775db3d84d762fd0bf52e2799336351af5775d56c4c018ff18eaf896c0`

## chart-radial

Varianten/Kompositionen: Diagrammtyp als Zusammensetzung (ready); Drei Tooltip-Indikatoren (dot, line, dashed).

Zustandsansichten/Grenze: ready/empty/error sind Zustände der dokumentierten Aufruferkomposition. Leer und Fehler werden ausdrücklich benannt und nicht als Nullwerte geplottet.

Quellen (paketrelativ, SHA-256):

- `library/components/chart-radial/component.json` · `3c761e9a3b84b1a821acdf2cd9e8a4015f863c2cd5a9b3d16c49c2f52107c9b9`
- `library/components/chart-radial/interface.json` · `ec4bb5f28c064c1e5242f06ab573a4c6dbbccb02b3f1b30de050439d580f1e88`
- `library/components/chart-radial/layout.css` · `6795b1774bac92ca2fd4ddbe9d4963f15260bf3dcad6e7551d2c6d3d4928607f`
- `library/components/chart-radial/behavior.scxml` · `a764404d2d9b065ae8fb6b9b982ea9f004f5841931ba4246bbae120924b68d43`
- `library/components/chart-radial/accessibility.html` · `9166a470eaff51ce2845c62f6d82f6e773852a5d2b63eff246924dc24448d622`
- `library/components/chart-radial/stories.json` · `ae74947bec6a6584b16c489d98a932f82e6ad1544fa7adb6b141ed8c58230c20`
- `library/components/chart-radial/ux.json` · `97a0ab216ab0a474193d2a6056a1250d4ae6b593962d4fd5b2974a0e25325d84`

## chart-tooltip

Varianten/Kompositionen: Diagrammtyp als Zusammensetzung (ready); Drei Tooltip-Indikatoren (dot, line, dashed).

Zustandsansichten/Grenze: ready/empty/error sind Zustände der dokumentierten Aufruferkomposition. Leer und Fehler werden ausdrücklich benannt und nicht als Nullwerte geplottet.

Quellen (paketrelativ, SHA-256):

- `library/components/chart-tooltip/component.json` · `1e3255cdd9f21c188aecfbd02519b24688b8c69c48e1c4d83bfeb78404972506`
- `library/components/chart-tooltip/interface.json` · `f06f552caedf0778e33cf1bb38f826024b822853f760e5bf81828f28f3f97954`
- `library/components/chart-tooltip/layout.css` · `8cea02d75f587a8ee35a1c28741ee201af82164e107d77e7fbec64ae52b38d05`
- `library/components/chart-tooltip/behavior.scxml` · `4734956710b179a8f4962a26f4d441c86bde5e8e0434998e12ef8d58c22faa25`
- `library/components/chart-tooltip/accessibility.html` · `d7810da8c6fd9cfbd9a666fd511f2d74bd503fd48105f97ae8675c11c1dcee2c`
- `library/components/chart-tooltip/stories.json` · `c06be83373ebc6cd64f25508b4a2a84eb2232977ee611197add17681f5c01705`
- `library/components/chart-tooltip/ux.json` · `d51d88d82531964daf513f66c6bf2136f01cc87585c70e6c4a358b0b686b5aae`

## card

Varianten/Kompositionen: Zwei Dichten, dieselbe Information (default, sm).

Zustandsansichten/Grenze: Kein eigener Interaktionszustand; die Variantenansichten decken die passive Darstellung bereits ab.

Quellen (paketrelativ, SHA-256):

- `library/components/card/component.json` · `a272b45b48b79731606838dba1e9f81e420fc948c09c02312b77068b367f7657`
- `library/components/card/interface.json` · `02a9bd3e022a08740db7478fcc055e8c1b9e4e6067b899da5a6f7f17b26141ac`
- `library/components/card/layout.css` · `33fec60db44fffba95f9020d6eda83d1d009f463e995b7dd184b98975aa5adc6`
- `library/components/card/behavior.scxml` · `fd37a5cd995cde3130ed30bd99b4cdc7f5721ba35c1ed1105069dd56e45f4e6c`
- `library/components/card/accessibility.html` · `08490f59e8a334b4ebcc0535ac9a1c8817c0388574019dd7875c7aa5eae75c1f`
- `library/components/card/stories.json` · `d90da6e50d4958052f53b71df77bb7f8a9ff6b4092ceb309db828a45ff2eca8c`
- `library/components/card/ux.json` · `9a2e0f0a9c888c7b63947142a95b8e72f6e9849942e074035708831193aec7a4`

## item

Varianten/Kompositionen: Oberflächen (default, outline, muted); Drei Grössen (default, sm, xs).

Zustandsansichten/Grenze: Kein eigener Interaktionszustand; die Variantenansichten decken die passive Darstellung bereits ab.

Quellen (paketrelativ, SHA-256):

- `library/components/item/component.json` · `77b31ad82e26843b488e595fcc13331f241e858e91419f34473282e3e3db1dd9`
- `library/components/item/interface.json` · `90a94e2a2f304b655052aa50e42948c7a9780cc5a81527ac53744110b18d6970`
- `library/components/item/layout.css` · `c58fa725791327936af632d7f08677b5b92ce6da591aefaa6a8a6fcf8f5b9097`
- `library/components/item/behavior.scxml` · `5be735a9a5f439124c1b4afeee6fe3bd6d672001674ff7f7c2bf94a5e3b56e64`
- `library/components/item/accessibility.html` · `86c309b790050543e93a0fbe7b9ed7eec6d71f2316c28a618f7710714990c6af`
- `library/components/item/stories.json` · `4262f4f57e0e50d62026ea5831477e9837de5f2e696cae25db6eb70769a6f49d`
- `library/components/item/ux.json` · `b00c42d32f974168556c6cd3617c63cdcb284d3baf9bbdb961669498668b488c`

## avatar

Varianten/Kompositionen: 24, 32 und 40 px (sm, default, lg); Überlappung als Komposition (group).

Zustandsansichten/Grenze: Base UI kennt idle/loading/loaded/error. Das Schema zeigt einen unabhängig gezeichneten Bildersatz und den textlichen Fallback; keine echten Netzwerkübergänge.

Quellen (paketrelativ, SHA-256):

- `library/components/avatar/component.json` · `c1cbfb4dea8ed8eef9a095734ad9c792aee6db57a68a98d64c803040fd2c62fe`
- `library/components/avatar/interface.json` · `c7bea734cbfc3cfb50bf9eb2995e952f35636461625f6849d4d70f5bc6f7ffc6`
- `library/components/avatar/layout.css` · `9ff12b2df8bacf34e7af0f5b75f035eee4b44f20906dd12ab8966189e4d0ba77`
- `library/components/avatar/behavior.scxml` · `9650c3c8511e2ff537a052091a553c94337a4443d2bec3c938f902188c83c065`
- `library/components/avatar/accessibility.html` · `3e4d397b9bcf4119dba9b29d109a23ef97ffb7584081ac91210e275cba576ff2`
- `library/components/avatar/stories.json` · `a4aff6a7e29752fe9767f1903e669eb4e9c0496debf2019695ca09ab6a81dced`
- `library/components/avatar/ux.json` · `f8b3ea77121e1e2f62edba8fbb2d2e52abc98c408976719d83ca52e5accf1feb`

## badge

Varianten/Kompositionen: Sechs Ausprägungen (default, secondary, destructive, outline, ghost, link).

Zustandsansichten/Grenze: Kein eigener Interaktionszustand; die Variantenansichten decken die passive Darstellung bereits ab.

Quellen (paketrelativ, SHA-256):

- `library/components/badge/component.json` · `249cc2d6b8a89ee526c7f989a35badcfe4babd1e969287da3befcf42fb30fe5a`
- `library/components/badge/interface.json` · `b0df0754ea99cd16436eac56098169c58551d17a5c32f60db6b0161936a76d38`
- `library/components/badge/layout.css` · `81f6af2dc8b2c5652a4edfcb1cc981bea3f6f7a02e7abf13d923f2610b000fb7`
- `library/components/badge/behavior.scxml` · `1c009beda3dba76124c65b7cc531dd88f9ae3716b22109b083f2650707ab3a63`
- `library/components/badge/accessibility.html` · `cb919d571e4fa6b03a33d232e820e36301dcd20139e8fc2890f58fe929e6ce64`
- `library/components/badge/stories.json` · `f688fe17c4cd7464f0ab951a7875019854ebec02b4bbe09e5bf020b0832d879f`
- `library/components/badge/ux.json` · `52b2e94fa2defa8e182e677b262acf56470427b28f34a2dc55b4753b0c2f8af4`

## aspect-ratio

Varianten/Kompositionen: Dasselbe Motiv, drei Verhältnisse (16:9, 1:1, 9:16).

Zustandsansichten/Grenze: Kein eigener Interaktionszustand; die Variantenansichten decken die passive Darstellung bereits ab.

Quellen (paketrelativ, SHA-256):

- `library/components/aspect-ratio/component.json` · `76cf8b0ffa1283f6df639406385d8d3788488bcc3a18cf9a35299c438a2c9193`
- `library/components/aspect-ratio/interface.json` · `f1bf6608e6c0bd8de27a75342fdfa94fac18784cba73aee7eb828c364d01824c`
- `library/components/aspect-ratio/layout.css` · `b3c2232eaaa7f82f637ae6e8df89cf48c7574fe4325cbf10cc739b44a85cea54`
- `library/components/aspect-ratio/behavior.scxml` · `1a0b6857b4be0111bad3f172cb731e78097706b966bedc8e0507dd5ec15e7ca8`
- `library/components/aspect-ratio/accessibility.html` · `1ed0a89d2d6a624d6fa13a2bc0ba28f77ee09815157ca9e9168bc1ecc1ff1ccc`
- `library/components/aspect-ratio/stories.json` · `4f20e05f7a95fc6207c7128f22343e2ddc884fc9daabab203ec82a5193d84568`
- `library/components/aspect-ratio/ux.json` · `a41b672317b6819512be3cae40b59ae1ffadad7c153e0437b09c163840c87437`

## carousel

Varianten/Kompositionen: Horizontal und vertikal (horizontal, vertical).

Zustandsansichten/Grenze: Nicht schleifende Beispielkomposition: canScrollPrev/canScrollNext bestimmen die deaktivierte Richtung. Zeichen sind im Vergleich rein illustrativ.

Quellen (paketrelativ, SHA-256):

- `library/components/carousel/component.json` · `4fdef2936ca0faed81bdc2413a4d94bf2fe2fdfb0ad8f70c2f09db28906b17c2`
- `library/components/carousel/interface.json` · `75076da26d68362827a1dfd300a44aa9220de801a24b5aecc68c78affd455137`
- `library/components/carousel/layout.css` · `abdcc73f8cbaa54adb3e5d25fa4388b162ae4b7ddda9e27493bf1eec4c247e2c`
- `library/components/carousel/behavior.scxml` · `99483065c45fef4d84d90aebcb234bd6dfe19e5d38be6a56e84e1accc7e739d0`
- `library/components/carousel/accessibility.html` · `4fe255bfbac7ec7e21626a4a915a6862169eda8bdb075f4abf394f3dc4335c91`
- `library/components/carousel/stories.json` · `7b20ccc596989cb9f0b94a3a9cd91872f6a2f211912942a2c5ce1454408c0651`
- `library/components/carousel/ux.json` · `d27d607a1d2157d83b18706fb6f15d7d04bb4c6e70ce1e5b4a217d08c396612c`

## separator

Varianten/Kompositionen: Richtung folgt dem Kontext (horizontal, vertical).

Zustandsansichten/Grenze: Kein eigener Interaktionszustand; die Variantenansichten decken die passive Darstellung bereits ab.

Quellen (paketrelativ, SHA-256):

- `library/components/separator/component.json` · `2d392fc029bff93942566f5e847583c4637f7ab8be9838ee5f2738e8353d9e7a`
- `library/components/separator/interface.json` · `732e0840b6a9543fd539f3c2032967dcfbc68c03bb6c732d063c053c56fbce2b`
- `library/components/separator/layout.css` · `e00e2c5ee064cb310a48265d31d09e4eb36cac77b71097409a86ce9a88d1268c`
- `library/components/separator/behavior.scxml` · `1693c60315f7e393fc9ed92187ea0ab26aecf4720c1d29eb2841964c3cf7ab4a`
- `library/components/separator/accessibility.html` · `7ccdf2787b3898460b8b82185df3468c2a79104f432943a77d4ca8485067f0cd`
- `library/components/separator/stories.json` · `ba1651009949c08b1691b4a57b52ed61b174b81ecb25547a1062f8807f1f3784`
- `library/components/separator/ux.json` · `5ec2d7db36cd05a51169f7ce7dceeb6a10bddb79d8166c51dcaae1883ca34eeb`

## code-block

Varianten/Kompositionen: Code, Dichte und Zeilen (numbered, plain, small, destructive, wrapped).

Zustandsansichten/Grenze: CopyButton setzt copied nur nach erfolgreichem Clipboard-Promise und setzt nach 2000 ms zurück. Hier findet kein Kopiervorgang statt; Fehler werden im Quellcode still behandelt.

Quellen (paketrelativ, SHA-256):

- `library/components/code-block/component.json` · `9b0638dfe4de5a066a750588dee542d4fba04cc598d866a02401d3f70b0af05d`
- `library/components/code-block/interface.json` · `e47331cc93a45c4326ea469e0b15cb05c10b79dc9fce8f3b4d5fa86e421b34d8`
- `library/components/code-block/layout.css` · `f16122890e0b265aedfb8c7500f96ddabdc296e5a1c54cf4cfd9e87ba2e16e32`
- `library/components/code-block/behavior.scxml` · `afb88265bcc382d20fff55f7c3a9823e241c2e0b07ef5ca9595d8c3b9e59d506`
- `library/components/code-block/accessibility.html` · `7cbc4078dcc07d5e44a673ccbf737964d91bb322245d727b89de70a8862c93dc`
- `library/components/code-block/stories.json` · `8fcf4bf97aba764c916afb0f7629961dbd6de17a79cc03da41ee6c6204694326`
- `library/components/code-block/ux.json` · `c2951a9df6f068bd709e875f7991b53d7c8f58b99313bb9788524b95872ee174`

## bubble

Varianten/Kompositionen: Sieben Oberflächen (default, secondary, muted, tinted, outline, ghost, destructive); start und end (start, end); Reaktionen als positionierter Inhalt (top-start, top-end, bottom-start, bottom-end).

Zustandsansichten/Grenze: Kein eigener Interaktionszustand; die Variantenansichten decken die passive Darstellung bereits ab.

Quellen (paketrelativ, SHA-256):

- `library/components/bubble/component.json` · `bf05b7601ae419e679c94f79f20e72945d1ca0f8e576bf08dbf953e73ba0c639`
- `library/components/bubble/interface.json` · `732a5220bb8a738d4e1e4e8143dc313551e69c668e95e02a761595ed9bd191ba`
- `library/components/bubble/layout.css` · `0a99e5d0b970c1525117ee182d8e53c243c7a5ba209fdc8736e7c199104fe0b1`
- `library/components/bubble/behavior.scxml` · `b0f5f5a241c2b7fa3a4ce51de436da2ce8eb40a472ae3717092fc33eccdf9a94`
- `library/components/bubble/accessibility.html` · `913237d71c138f1dcb7c0c232b14e26ecf3c375fc9cbd9da4738139f750b247f`
- `library/components/bubble/stories.json` · `482ab5cd3ebc08a21ee23251ef6c6e58455fb3b638518e1bde13df0912a5ae12`
- `library/components/bubble/ux.json` · `b171b706c2b687416dd0801d2da8cbf55a2c9b00a1f3831d72253685c77801f3`

## message-scroller

Varianten/Kompositionen: Lesbarer Verlauf (log).

Zustandsansichten/Grenze: Following-end, reading-start und pending beschreiben die belegten Quellenzustände. Passive Richtungszeichen markieren verfügbare Richtungen; sie sind keine bedienbaren Schaltflächen.

Quellen (paketrelativ, SHA-256):

- `library/components/message-scroller/component.json` · `a5d76006cac4ba8e6bf3fd9a8fb0cf0d2f6bdedae764625fb97cc386e550b5c6`
- `library/components/message-scroller/interface.json` · `0c1e576ff289af6f326b3788e2aefb1d6cbc5e3d819a6cf5fbad60e6a5939528`
- `library/components/message-scroller/layout.css` · `e42c781cbcce0c51e01049396ed59be15d92c2e51c015f5298ce7214c966e800`
- `library/components/message-scroller/behavior.scxml` · `4e7e34e66d22ade398d8ea74be1cb3c8f00b10326caa66384040dca73c74d924`
- `library/components/message-scroller/accessibility.html` · `ad899e552bccdd927af3beb623cab5b9809e19483694bc4e0d46527df5da22be`
- `library/components/message-scroller/stories.json` · `41c5e3bf991ae5f41fca55e8bf8c53daa1ea24d04638bc5aa01ca146458cafc1`
- `library/components/message-scroller/ux.json` · `e7ef2ed89ad3ca9a1d7e68d8a59da94393660b4d74141790aa65b03283f249e2`

## attachment

Varianten/Kompositionen: Dateizeilen in drei Grössen (default, sm, xs); Zeile und Thumbnail-Kachel (horizontal, vertical).

Zustandsansichten/Grenze: state ist Styling, kein Upload-Automat. Die tatsächliche asynchrone Anwendung setzt idle/uploading/processing/error/done. Hier werden nur benannte Ansichten gezeigt.

Quellen (paketrelativ, SHA-256):

- `library/components/attachment/component.json` · `73e0a0cc62a6a823a4a2fbc433beefbad75022957667cfc788d08e03b84705cf`
- `library/components/attachment/interface.json` · `b7eabcbc08520a9d25b20dd1f107e978d60b136f709e2acaaab9b43d5d202541`
- `library/components/attachment/layout.css` · `a921a7f206c214c5a70a7c2d20f609c52cc96407d61991dd90698ea72ddae092`
- `library/components/attachment/behavior.scxml` · `f7131c88badf9e31f80c6be20c7f8db2f683d76b20dc95515a7e689237c3d022`
- `library/components/attachment/accessibility.html` · `3c38452d48f66a6f569c6794dd69189ada4fbc4ccd1006b46030a1acd8f00e8f`
- `library/components/attachment/stories.json` · `c5fc846dde4d3f89ea20d4ab763b9bdbc6f62e5909f81df9e2c46ec532177d98`
- `library/components/attachment/ux.json` · `e262c2a5f1518bbc482eadac0234640ae9efffcf69e6d6e526c60429a227ddd7`

## marker

Varianten/Kompositionen: Hinweis, Trennlinie und unterer Rand (default, separator, border).

Zustandsansichten/Grenze: Kein eigener Interaktionszustand; die Variantenansichten decken die passive Darstellung bereits ab.

Quellen (paketrelativ, SHA-256):

- `library/components/marker/component.json` · `3b5038f0fd02e8c197dfc35ee052362930a1f02b62783f8c3130b1b57c9e0d0c`
- `library/components/marker/interface.json` · `137467e6046e03685e80348c47b7fdf97177a81a7cf1f718032d44dca4ab8b23`
- `library/components/marker/layout.css` · `e0c81288a38f0b78f13aa22546e53374f64d50143cd087ae34dba9c7f2930d5c`
- `library/components/marker/behavior.scxml` · `bc6d53722b510cd271e58185d20364373bb9522706a80c5a61b7b6f1a11414ca`
- `library/components/marker/accessibility.html` · `9cc39e7de991be34249152b9f620668139fd56d1131954ca924c9caad096b124`
- `library/components/marker/stories.json` · `43758aa5205f195f9a369713033ed30be57a19b00223fea99900107a2b13b619`
- `library/components/marker/ux.json` · `e8f63bd9d4b416ef26f2c84bf37c78ee2e88379b3504226c699ac41fd9a5cfc1`

## trace

Varianten/Kompositionen: Zeile und optionale Details (closed, open).

Zustandsansichten/Grenze: running/error/pending sind optionale TraceLine-Statuswerte. Ohne Status ist keine automatische Erfolgsmeldung definiert; es gibt keinen Ausführungs- oder Retry-Automaten.

Quellen (paketrelativ, SHA-256):

- `library/components/trace/component.json` · `054f384a6f81e192edbfa5c20d76dc6a51ccfb9c6033d67c488fa511f38609d1`
- `library/components/trace/interface.json` · `5e171ad53d203704a887f5e966c4833c525008adaedf8cd11f7cedb27a95db63`
- `library/components/trace/layout.css` · `d670e834cc878473954d4c5e6afa6779b49030c0f4b574b4de02fda4f8a4f98c`
- `library/components/trace/behavior.scxml` · `e69d3826714fac58339448590ddae1cc946e8949ee0cf90b476325887af58084`
- `library/components/trace/accessibility.html` · `9387f2769b9524b959053f4033d125de4eeb24c8fc0efa4edb1eb915c62b55c3`
- `library/components/trace/stories.json` · `1cb16eae70f8cfc609694e155544c9e24ad1e83afb71f060f9406268c7f2af9c`
- `library/components/trace/ux.json` · `cc657c0be12cfd8c6ebf80fe121fab3bc70000e947de839c90692498a3575d32`

## Prüfungen und verbleibende Grenzen

Dateien werden vom übergeordneten Auftrag integriert. Kein Commit, Push, Pin-, CMS- oder Quellexport-Edit. Laufzeitinteraktion, Clipboard, Bildladen, Embla, TanStack und Scroll-Observer werden durch die statischen Vergleiche nicht geprüft. TypeScript- und Browserergebnis werden nach tatsächlicher Ausführung ergänzt.

Gemeinsame skalare Tokenquelle: `library/tokens.css` · SHA-256 `e181931cf68b623bfff7316135e3368edff17779e5b50950893e9470dd9f791a`. Lokale Schemen verwenden die hellen Referenzwerte, keine automatische Theme-Integration.

Ausgeführte mobile Browserprüfung: BrowserOS neo, 390 × 844 CSS-px, alle 23 Seiten geladen und je mindestens ein Vergleichsausschnitt visuell gesichtet. Für alle dargestellten Vergleichswrapper DOM-Geometrie und Fokusziele ausgelesen: Dokumentbreite jeweils 390 px; kein überbreiter Vergleichswrapper; keine Buttons, Links, Inputs oder tabindex-Ziele innerhalb der Schemen. Tabellen und Code erlauben lokalen horizontalen Scroll. Dies ist eine begrenzte statische Layoutprüfung und kein Interaktionstest.

Desktop-Stichprobe: DataTable, ChartTooltip, Card und MessageScroller bei 1440 × 1000 CSS-px in BrowserOS neo gesichtet; Dokumentbreite jeweils 1440 px, kein überbreiter Vergleichswrapper. MessageScroller pending bildet die belegte visibility:hidden-Regel ab; der Richtungsmarker bleibt dabei ausgeblendet. `npm run typecheck` wurde erfolgreich ausgeführt.
