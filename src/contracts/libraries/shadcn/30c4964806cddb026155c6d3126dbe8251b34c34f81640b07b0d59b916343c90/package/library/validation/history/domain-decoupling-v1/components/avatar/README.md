# Avatar · React-Inhaltsreferenz

Represent a person or entity with an image or fallback.

## Belegte Oberfläche

Offizieller shadcn-Commit `45bbf9ba23c9c0f63d38887947e5fb06f59c7da3`. [Originalquellen und Hashes](../../../../../sources/manifest.json); [exakte exportierte Typen, Defaults und Quellzeilen](../../../../../sources/react-api-inventory.json). Diese Familie exportiert `Avatar`, `AvatarImage`, `AvatarFallback`, `AvatarBadge`, `AvatarGroup`, `AvatarGroupCount`. `interface.json` bewahrt die genaue Propoberfläche jedes Wrappers; sie ist keine frei erfundene native Widget-API.

Avatar uses Base UI loading states idle/loading/loaded/error. AvatarImage onLoadingStatusChange reports the actual status; keepMounted=false preloads and only exposes a loaded image. keepMounted=true retains the image while loading but hides it from accessibility until loaded. Fallback span defaults delay=0 and is shown when not loaded after its delay; a positive delay avoids flashing. Source/srcSet/sizes changes retry loading. Root has no activation or selection API. AvatarGroup/Count only position caller content; counts and status are not calculated.

## Semantik und Referenzentscheidungen

A loaded AvatarImage requires meaningful alt. This reference fallback uses explicit role=img and the same full name, while initials and badge color alone are insufficient. Nearby text supplies the person and availability independently.

The full fallback name, readable Available badge and nearby identity text are explicit reference composition choices. The root does not automatically apply role=img or label initials. If adjacent text fully identifies the person, a decorative avatar can instead have empty alt deliberately.

This default content wrapper does not install a keyboard listener or roving focus. Native links/buttons/inputs in the chosen children retain their own documented semantics. Label delegates native focus through its associated control.

`accessibility.html` ist die konkrete, typzulässige Referenzkomposition. Native Elemente werden für ihre tatsächliche Bedeutung verwendet; fehlende native Überschriften/Labelbezüge werden als bewusste Caller-Komposition geliefert, nicht als automatisch vorhandene Wrapperfunktion ausgegeben.

## Verhalten und Komposition

Avatar uses Base UI loading states idle/loading/loaded/error. AvatarImage onLoadingStatusChange reports the actual status; keepMounted=false preloads and only exposes a loaded image. keepMounted=true retains the image while loading but hides it from accessibility until loaded. Fallback span defaults delay=0 and is shown when not loaded after its delay; a positive delay avoids flashing. Source/srcSet/sizes changes retry loading. Root has no activation or selection API. AvatarGroup/Count only position caller content; counts and status are not calculated.

Der quellengebundene SCXML-Vertrag bildet genau diesen Ablauf ab. React-/Browserprüfungen bleiben führend für tatsächliche interne Zustandsänderungen; er ist kein unabhängiger Primitive-Ersatz.

Zugeordnete Nachfahren: keine vorgeschriebene interaktive Kindkomponente.

## Visuelle Originale und Prüfung

[Figma-Beobachtungen](../../../../../components/avatar/figma/figma-observations.json) bewahren Seite, Sets, Varianten und native Masse des gebundenen FIG-Exports. Die ursprünglichen Stories bleiben erhalten. DTCG `provenance://source/%2Fnative%2Favatar` führt konkrete native Probenmasse; CSS bindet die zugehörigen Quellknoten. Der editierbare native Ausschnitt und seine isoliert gerenderte PNG sind ein statischer Designnachweis.

[Browser-/Quellprüfziel](provenance://source/apps%2Fshadcn-reference-lab%2FREADME.md) und `validation`-Berichte am Bibliotheksroot unterscheiden native React-SSR-Semantik, SCXML-Konsistenz, Coverage und Bildsichtprüfung. Abgeschlossen nach 18 tatsächlichen Browserfällen, zwölf SCXML-Protokollfällen, zehn positiven/negativen Semantikfällen und sechs React-SSR-Fällen der Fünfergruppe. [Prüfberichte](../../../../contract-cases) führen die konkreten Fälle; weiterhin `release:false`.
