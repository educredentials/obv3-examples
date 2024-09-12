 

Voorbeelden van Open Badges V3 credentials naar voorbeeld van het
metadatamodel van Edubadges.\
Deze voorbeelden kunnen worden gebruikt om de capabilities van de
diverse wallets te kunnen testen.

**Stappen**

-   Stap 1: In eerste instantie zullen deze voorbeeld credentials alleen
    uit de JSON code bestaan. 
-   Stap 2: De vervolgstap is dat we deze door een agent kunnen laten
    signen zodat deze in een wallet gezet kunnen worden.

**Vragen**

-   Images: de meeste voorbeelden gaan uit van een URL die naar de image
    wijst. Wij zulen ook images embedden in de payload.
-   Markdown: welke markup elementen willen we ondersteunen? Alleen de
    opmaak gerelateerde elementen, dus geen external links en
    waarschijnlijk ook geen tables.\
    Zie ook: [Opmaken tekst badge
    class](https://wiki.surfnet.nl/display/Edubadges/Opmaken+tekst+badge+class){.confluence-link
    linked-resource-id="41324415" linked-resource-version="20"
    linked-resource-type="page"
    linked-resource-default-alias="Opmaken tekst badge class"
    base-url="https://wiki.surfnet.nl"} (voorbeelden markdown support in
    Edubadges)
-   Extra metadata: de spec ondersteunt dat er uitbreidingen op het
    datamodel worden gemaakt
    (<https://www.imsglobal.org/spec/ob/v3p0#extending-the-data-model>).\
    In Edubadges is dit gedaan met 17 extra metadatavelden. (Zie
    [Microcredentials Definition
    EU](https://wiki.surfnet.nl/display/Edubadges/Microcredentials+Definition+EU){.confluence-link
    linked-resource-id="104793066" linked-resource-version="17"
    linked-resource-type="page"
    linked-resource-default-alias="Microcredentials Definition EU"
    base-url="https://wiki.surfnet.nl"})
-   Zie ook de huidige Edubadges voorbeelden in OB2 formaat: [Edubadges
    Metadata Examples - JSON
    output](https://wiki.surfnet.nl/display/Edubadges/Edubadges+Metadata+Examples+-+JSON+output){.confluence-link
    linked-resource-id="104793055" linked-resource-version="2"
    linked-resource-type="page"
    linked-resource-default-alias="Edubadges Metadata Examples - JSON output"
    base-url="https://wiki.surfnet.nl"}

### Edubadges: huidig model

We onderscheiden nu in Edubadges 3 typen credentials: Extracurriculair,
Regulier en Microcredential.\
Het verschil tussen deze 3 types is welke metadataelementen zijn
gebruikt in de badgeclass.

\

+-------------+--------------------+-----------------+-----------------+
| \           | Microcredential    | Reguliere       | Ext             |
|             |                    | edubadge        | ra-curriculaire |
|             |                    |                 | edubadge        |
+=============+====================+=================+=================+
| *           | Een badge class    | Een badge class | Een badge class |
| *Metadata** | voor               | voor opgedane   | voor opgedane   |
|             | microcredentials   | kennis en       | kennis en       |
|             | met het            | vaardigheden    | vaardigheden    |
|             | kwaliteitskader    | die binnen het  | die geen        |
|             | voor professionals | curriculum van  | onderdeel zijn  |
|             | HBO/WO of MBO en   | een erkende     | van het         |
|             | alle metadata      | opleiding       | curriculum van  |
|             | conform de         | vallen. Aan     | een erkende     |
|             | EU-aanbevelingen.  | deze badgeclass | opleiding. Aan  |
|             |                    | zijn ECTS/SBU   | deze badgeclass |
|             |                    | verbonden.      | zijn geen       |
|             |                    |                 | ECTS/SBU        |
|             |                    |                 | verbonden.      |
+-------------+--------------------+-----------------+-----------------+
| **Basisi    |                    |                 |                 |
| nformatie** |                    |                 |                 |
+-------------+--------------------+-----------------+-----------------+
| Naam        | verplicht          | verplicht       | verplicht       |
+-------------+--------------------+-----------------+-----------------+
| Edubadge    | verplicht          | verplicht       | verplicht       |
| afbeelding  |                    |                 |                 |
+-------------+--------------------+-----------------+-----------------+
| B           | verplicht          | verplicht       | verplicht       |
| eschrijving |                    |                 |                 |
+-------------+--------------------+-----------------+-----------------+
| Lee         | verplicht          | verplicht       | verplicht       |
| ruitkomsten |                    |                 |                 |
+-------------+--------------------+-----------------+-----------------+
| Criteria    | verplicht          | verplicht       | verplicht       |
+-------------+--------------------+-----------------+-----------------+
| **Programma |                    |                 |                 |
| i           |                    |                 |                 |
| nformatie** |                    |                 |                 |
+-------------+--------------------+-----------------+-----------------+
| Taal van    | verplicht          | verplicht       | verplicht       |
| het         |                    |                 |                 |
| onderwijs   |                    |                 |                 |
+-------------+--------------------+-----------------+-----------------+
| S           | optioneel          | verplicht       | niet van        |
| tudiepunten |                    |                 | toepassing      |
| ECTS/SBU    |                    |                 |                 |
+-------------+--------------------+-----------------+-----------------+
| Tijds       | optioneel          | niet van        | verplicht       |
| investering |                    | toepassing      |                 |
+-------------+--------------------+-----------------+-----------------+
| Indicatie   | verplicht          | verplicht       | optioneel       |
| EQF niveau  |                    |                 |                 |
+-------------+--------------------+-----------------+-----------------+
| Vorm van    | verplicht          | optioneel       | optioneel       |
| deelname    |                    |                 |                 |
+-------------+--------------------+-----------------+-----------------+
| Ople        | optioneel          | verplicht       | optioneel       |
| idingscodes |                    |                 |                 |
+-------------+--------------------+-----------------+-----------------+
| *           |                    |                 |                 |
| *Informatie |                    |                 |                 |
| over de     |                    |                 |                 |
| be          |                    |                 |                 |
| oordeling** |                    |                 |                 |
+-------------+--------------------+-----------------+-----------------+
| Beoor       | verplicht          | optioneel       | optioneel       |
| delingstype |                    |                 |                 |
+-------------+--------------------+-----------------+-----------------+
| Toezicht    | verplicht          | optioneel       | optioneel       |
| bij de      |                    |                 |                 |
| beoordeling |                    |                 |                 |
+-------------+--------------------+-----------------+-----------------+
| Identiteit  | verplicht          | optioneel       | optioneel       |
+-------------+--------------------+-----------------+-----------------+
| **Kwalitei  |                    |                 |                 |
| tsborging** |                    |                 |                 |
+-------------+--------------------+-----------------+-----------------+
| Naam        | kwaliteitskader    | optioneel       | optioneel       |
|             | HO/MBO             |                 |                 |
+-------------+--------------------+-----------------+-----------------+
| URL         | verplicht          | optioneel       | optioneel       |
+-------------+--------------------+-----------------+-----------------+
| O           | verplicht          | optioneel       | optioneel       |
| mschrijving |                    |                 |                 |
+-------------+--------------------+-----------------+-----------------+
| **          |                    |                 |                 |
| Gerelateerd |                    |                 |                 |
| onde        |                    |                 |                 |
| rwijskundig |                    |                 |                 |
| raamwerk**  |                    |                 |                 |
+-------------+--------------------+-----------------+-----------------+
| Naam        | optioneel          | optioneel       | optioneel       |
+-------------+--------------------+-----------------+-----------------+
| Raamwerk    | optioneel          | optioneel       | optioneel       |
+-------------+--------------------+-----------------+-----------------+
| URL         | optioneel          | optioneel       | optioneel       |
+-------------+--------------------+-----------------+-----------------+
| Code        | optioneel          | optioneel       | optioneel       |
+-------------+--------------------+-----------------+-----------------+
| O           | optioneel          | optioneel       | optioneel       |
| mschrijving |                    |                 |                 |
+-------------+--------------------+-----------------+-----------------+

\

### Termen

Met de komst van OB3 zijn een aantal termen zoals we deze in edubadges
(=OB2) gebruiken gewijzigd:

  ------------ -----------------------
  OB2          OB3

  Badgeclass   Achievement

  Open Badge   Open Badge Credential

  Edubadge     Educredential

  \            \

  \            \
  ------------ -----------------------

\

### OB3 Examples → EduCredential Examples

De volgende JSON code examples zullen worden gebruikt om de Open Badges
V3 credentials te maken. Dit zal gesigned moeten worden door een agent
om in de wallets gebruikt te kunnen worden, maar dat is stap 2.\
De volgende typen OB3 examples zijn voorzien:

-   **Extracurriculair** - Een badge class voor opgedane kennis en
    vaardigheden die geen onderdeel zijn van het curriculum van een
    erkende opleiding. **Aan deze badgeclass zijn geen ECTS/SBU
    verbonden.**
-   **Reguliere** - Een badge class voor opgedane kennis en vaardigheden
    die binnen het curriculum van een erkende opleiding vallen. **Aan
    deze badgeclass zijn ECTS/SBU verbonden.**
-   **Microcredential** - Een badge class voor microcredentials met het
    kwaliteitskader voor professionals HBO/WO of MBO en alle metadata
    **[conform de
    EU-aanbevelingen](https://wiki.surfnet.nl/display/Edubadges/Microcredentials+Definition+EU).**

Van elk type worden drie varianten uitgewerkt als voorbeeld:

-   **Full** - Alle verplichte- en optionele velden zijn ingevuld.
-   **Minimal** - Alleen verplichte velden ingevuld.
-   **Embedded** - Alle verplichte velden ingevuld. Alle optionele
    velden met verwijzingen naar afbeeldingen ingevuld. Alle
    afbeeldingen zijn opgenomen in de payload als base64 data urls.

\

\

### extracurriculair_minimal.json

\

+-----------------------------------------------------------------------+
|     {                                                                 |
|       "@context": [                                                   |
|         "https://www.w3.org/ns/credentials/v2",                       |
|         "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json", |
|                                                                       |
|       "https://contexts.example.com/learning-outcome-extension.json", |
|         "https://contexts.example.com/language-extension.json",       |
|         "https://contexts.example.com/time-investment-extension.json" |
|       ],                                                              |
|       "id": "http://example.com/credentials/extracurricular-minimal", |
|       "type": [                                                       |
|         "VerifiableCredential",                                       |
|         "OpenBadgeCredential"                                         |
|       ],                                                              |
|       "issuer": {                                                     |
|         "i                                                            |
| d": "https://www.edubadges.nl/public/issuers/lQ67BQQQS-eBx5syJGpazg", |
|         "type": [                                                     |
|           "Profile"                                                   |
|         ],                                                            |
|         "name": "Naboo Theed University",                             |
|       },                                                              |
|       "validFrom": "2014-06-01T00:00:00Z",                            |
|       "name": "Example Extra-Curricular Achievement",                 |
|       "credentialSubject": {                                          |
|         "id                                                           |
| ": "https://example.com/credentials/extracurricular-minimal#subject", |
|         "type": [                                                     |
|           "AchievementSubject"                                        |
|         ],                                                            |
|         "achievement": {                                              |
|           "i                                                          |
| d": "https://example.com/achievements/lightsaber-dueling-techinques", |
|           "type": [                                                   |
|             "Achievement"                                             |
|           ],                                                          |
|           "name": "Lightsaber Dueling Techniques",                    |
|           "image": {                                                  |
|             "id": "https://static.example.com/lightsaber.jpg",        |
|             "type": "Image"                                           |
|           },                                                          |
|           "description": "This badge is awar                          |
| ded for demonstrating proficiency in lightsaber dueling techniques.", |
|           "criteria": {                                               |
|             "narrative": "To earn this badge,                         |
|  you must demonstrate proficiency in lightsaber dueling techniques.", |
|           },                                                          |
|                                                                       |
|           "LearningOutcome": "Is fysically able to perform l          |
| ightsaber dueling techniques against an opponent in the same class.", |
|           "Language": "en_EN",                                        |
|           "TimeInvestment": 42                                        |
|         }                                                             |
|       }                                                               |
|     }                                                                 |
+-----------------------------------------------------------------------+

\

\

\

\

\

 
