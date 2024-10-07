# OB3 Credential Examples

Voorbeelden van Open Badges V3 credentials naar voorbeeld van het
metadatamodel van Edubadges.
Deze voorbeelden kunnen worden gebruikt om de capabilities van de
diverse wallets te kunnen testen.

**Stappen**

- Stap 1: In eerste instantie zullen deze voorbeeld credentials alleen
  uit de JSON code bestaan.
- Stap 2: De vervolgstap is dat we deze door een agent kunnen laten
  signen zodat deze in een wallet gezet kunnen worden.

**SURF documentatie**

- [Opmaken tekst badge class](https://wiki.surfnet.nl/display/Edubadges/Opmaken+tekst+badge+class) (voorbeelden markdown support in Edubadges)
- Extra metadata: de spec ondersteunt dat er uitbreidingen op het datamodel worden gemaakt (<https://www.imsglobal.org/spec/ob/v3p0#extending-the-data-model>). In Edubadges is dit gedaan met 17 extra metadatavelden. (Zie [Microcredentials Definition EU](https://wiki.surfnet.nl/display/Edubadges/Microcredentials+Definition+EU))
- Zie ook de huidige Edubadges voorbeelden in OB2 formaat: [Edubadges Metadata Examples - JSON output](https://wiki.surfnet.nl/display/Edubadges/Edubadges+Metadata+Examples+-+JSON+output) (interne wiki)
- Business Rules voor attributen, mogelijke waardes en dergelijke, van de OBV2 versie, is uitgewerkt in [Badgeclass Business Rules](https://wiki.surfnet.nl/pages/viewpage.action?spaceKey=EBB&title=Badgeclass+Business+Rules)
- Mapping van OB2 - OB3 is uitgewerkt in: [Micro-credentials Metadata Mapping](https://wiki.surfnet.nl/display/EduCr/Micro-credentials+Metadata+Mapping+OB2+-+OB3+-+ELM) (interne wiki)

**Vragen**

- Images: de meeste voorbeelden gaan uit van een URL die naar de image wijst. Zullen wij images embedden in de payload? Gaan we ook toevoegen ter referentie.
- Kunnen we van Edubadges naar CASE gerelateerde alignment target types mappen?
- Volgens *Open Badges Implementation Guide* zijn Schema's voor extensions verplicht, volgens *Open Badges Specification* zijn ze optioneel. Wat kiezen wij?
- Hoe en waar nemen we de BRIN-code op? (InstitutionIdentifierExtension in OBv3)
- Willen we nog een uitsplitsing maken tussen "studieload gevraagd" versus "studieload gedaan" - vergelijkbaar met creditsAvailable vs creditsEarned?

**Aannames en keuzes**

- Voor de taal van de edubadge hebben we gekozen voor de "inLanguage" property want de omschrijving is "the language of the achievement".
- Voor Grade Achieved is de "Result" gebruikt.
- Voor Learning Outcome is "ResultDescription" met type ext:ECTSScore gebruikt met een Nederlandse schaal van 1 tot 10.
- Voor ECTS study load is creditsEarned (gehaald) en creditsAvailable gebruikt.
- Voor IdentityChecked is een boolean gekozen omdat het huidige OBV2 model dat ook heeft; al is dit niet ideaal - beter zou een enum zijn, zodat ook NVT etc erin verwerkt kan.
- Voor Studielast bestaat businesslogic. Deze werken we niet helemaal uit in het schema, dat maakt het te complex. De simpele versie is echter:
    Studielast opties: ECTS / SBU / Tijdsinvestering
     - Drie aparte objecten op hoogste niveau in Achievement:
         - ECTS
         - SBU - posponed[^1]
         - TimeInvestement
     - Afgedwongen per Achievement type:
         - MicrocredentialAchievement: requires studyloadECTS
         - RegularAchievement: requires studyloadECTS
- Voor BRIN en ShacHome worden aparte "otheridentifier" entries in the issuer opgenomen.
- Voor het issuer.id gebruiken we de interne ID bijv https://demo.edubadges.nl/public/institutions/9-TYGj4dTn-nW8CGfwGjAQ

### Edubadges: huidig model

We onderscheiden nu in Edubadges 3 typen credentials: Extracurriculair,
Regulier en Microcredential.\
Het verschil tussen deze 3 types is welke metadataelementen zijn
gebruikt in de badgeclass.

|                                          | Microcredential        | Reguliere edubadge  | Extracurriculaire edubadge |
| ---------------------------------------- | ---------------------- | ------------------- | -------------------------- |
| **Basisinformatie**                      |                        |                     |                            |
| Naam                                     | Verplicht              | Verplicht           | Verplicht                  |
| Edubadge afbeelding                      | Verplicht              | Verplicht           | Verplicht                  |
| Beschrijving                             | Verplicht              | Verplicht           | Verplicht                  |
| Leeruitkomsten                           | Verplicht              | Verplicht           | Verplicht                  |
| Criteria                                 | Verplicht              | Verplicht           | Verplicht                  |
| Programma informatie                     |                        |                     |                            |
| Taal van het onderwijs                   | Verplicht              | Verplicht           | Verplicht                  |
| Studiepunten ECTS/SBU                    | Optioneel              | Verplicht           | Niet van toepassing        |
| Tijdsinvestering                         | Optioneel              | Niet van toepassing | Verplicht                  |
| Indicatie EQF niveau                     | Verplicht              | Verplicht           | Optioneel                  |
| Vorm van deelname                        | Verplicht              | Optioneel           | Optioneel                  |
| Opleidingscodes                          | Optioneel              | Verplicht           | Optioneel                  |
| **Informatie over de beoordeling**       |                        |                     |                            |
| Beoordelingstype                         | Verplicht              | Optioneel           | Optioneel                  |
| Toezicht bij de beoordeling              | Verplicht              | Optioneel           | Optioneel                  |
| Identiteit                               | Verplicht              | Optioneel           | Optioneel                  |
| **Kwaliteitsborging**                    |                        |                     |                            |
| Naam                                     | Kwaliteitskader HO/MBO | Optioneel           | Optioneel                  |
| URL                                      | Verplicht              | Optioneel           | Optioneel                  |
| Omschrijving                             | Verplicht              | Optioneel           | Optioneel                  |
| **Gerelateerd onderwijskundig raamwerk** |                        |                     |                            |
| Naam                                     | Optioneel              | Optioneel           | Optioneel                  |
| Raamwerk                                 | Optioneel              | Optioneel           | Optioneel                  |
| URL                                      | Optioneel              | Optioneel           | Optioneel                  |
| Code                                     | Optioneel              | Optioneel           | Optioneel                  |
| Omschrijving                             | Optioneel              | Optioneel           | Optioneel                  |

### Termen

Met de komst van OB3 zijn een aantal termen zoals we deze in edubadges
(=OB2) gebruiken gewijzigd:

| OB2        | OB3                            |
| ---------- | ------------------------------ |
| Badgeclass | Digital Credential Achievement |
| Open Badge | Open Badge Credential          |
| Edubadge   | Digital Credential Assertion   |

(zie ook [OB3 datamodel conceptual model](https://www.imsglobal.org/spec/ob/v3p0/#conceptual-model))

### OB3 Examples → EduCredential Examples

De volgende JSON code examples zullen worden gebruikt om de Open Badges
V3 credentials te maken. Dit zal gesigned moeten worden door een agent
om in de wallets gebruikt te kunnen worden, maar dat is stap 2.\
De volgende typen OB3 examples zijn voorzien:

- **Extracurriculair** - Een badge class voor opgedane kennis en
  vaardigheden die geen onderdeel zijn van het curriculum van een
  erkende opleiding. **Aan deze badgeclass zijn geen ECTS/SBU
  verbonden.**
- **Reguliere** - Een badge class voor opgedane kennis en vaardigheden
  die binnen het curriculum van een erkende opleiding vallen. **Aan
  deze badgeclass zijn ECTS/SBU verbonden.**
- **Microcredential** - Een badge class voor microcredentials met het
  kwaliteitskader voor professionals HBO/WO of MBO en alle metadata
  **[conform de
  EU-aanbevelingen](https://wiki.surfnet.nl/display/Edubadges/Microcredentials+Definition+EU).**

Van elk type worden drie varianten uitgewerkt als voorbeeld:

- **Full** - Alle verplichte- en optionele velden zijn ingevuld.
- **Minimal** - Alleen verplichte velden ingevuld.
- **Embedded** - Alle verplichte velden ingevuld. Alle optionele
  velden met verwijzingen naar afbeeldingen ingevuld. Alle
  afbeeldingen zijn opgenomen in de payload als base64 data urls.

## Markdown

OBv3 staat Markdown toe in veel data, zonder te specificeren welke subset of welke variant.

> Markdown 	A String that may contain Markdown.

https://www.imsglobal.org/spec/ob/v3p0/#org.1edtech.ob.v3p0.derived.markdown.class

Wij perken dat in, in [markdown.md](./markdown.md). Deze subset is dus niet backwards compatible met
obv3, waar ook nog code, links, tables toegestaan zijn. Voor obv3 perken we dat dus nog verder in.
Elementen die niet in `markdown.md` uitgewerkt zijn, zijn dus niet toegestaan.

## Content of the examples

Examples are built from a context that follows a story.
It uses mock IDs that resemble a real ID.

### Story

Issuer: Naboo Theed University

Student: Padawan Ashoka Tano

Extracurriculair: Lightsaber Dueling Techniques
Reguliere: The Force and Its Applications (6 ECTS)
Microcredential: Jedi Mind Control and Advanced Meditation Practices

### URLs

Images hosted at static.example.com e.g. https://static.example.com/lightsaber.jpg

Contexts hosted at contexts.example.com e.g. https://contexts.example.com/learning-outcome-extension.json

### IDS

Ids are in the form of a URL. They use https and the following structure:

    https://example.com/{resource}/{unique}

* Resource is the "thing" we are identifying in plural. E.g. a student would have the resource `students` and an Achievement the resource `achievements`
* Unique is some unique identifier, in reality problably some internal ID.

For the examples, we use the following mock unique identifiers:

- **Students:**
  - `stu-1A2B3C`
  - `stu-4D5E6F`
  - `stu-7G8H9I`
  - `stu-J1K2L3`

- **Credentials:**
  - `crd-A1B2C3`
  - `crd-D4E5F6`
  - `crd-G7H8I9`
  - `crd-J0K1L2`

- **Issuers:**
  - `iss-9Z8Y7X`
  - `iss-6W5V4U`
  - `iss-3T2S1R`
  - `iss-Q9P8O7`

- **Achievements:**
  - `ach-33LML`
  - `ach-77NPN`
  - `ach-55BGB`
  - `ach-22RFR`

In the examples we will use the first always, except for the rare cases when we must convey that 
there are multiple resources in a single example.

## De voorbeelden:

> [!WARNING]
> Deze voorbeelden zijn WIP. Slechts enkele zijn afgerond, de meesten nog boilerplate. Zie lijst hieronder.

- [ ] extracurriculair_embedded.json
- [x] extracurriculair_full.json
- [x] extracurriculair_minimal.json
- [ ] microcredential_embedded.json
- [x] microcredential_full.json
- [x] microcredential_minimal.json
- [ ] regulier_embedded.json
- [x] regulier_full.json
- [x] regulier_minimal.json


[^1]: TODO: decide on how to deal with MBO vs HO logic in the payload first.
<!-- managed_by_embed -->
<details>
<summary>extracurriculair_embedded.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json"
  ],
  "id": "http://example.com/credentials/crd-A1B2C3",
  "type": [
    "VerifiableCredential",
    "OpenBadgeCredential"
  ],
  "issuer": {
    "id": "https://example.com/issuers/iss-9Z8Y7X",
    "type": [
      "Profile"
    ],
    "name": "Naboo Theed University",
    "otherIdentifier": [
      {
        "type": "IdentifierEntry",
        "identifier": "42NB",
        "identifierType": "ext:BRIN"
      },
      {
        "type": "IdentifierEntry",
        "identifier": "university.naboo",
        "identifierType": "name"
      }
    ]
  },
  "validFrom": "2014-06-01T00:00:00Z",
  "name": "Example Extra-Curricular Achievement",
  "credentialSubject": {
    "id": "https://example.com/students/stu-1A2B3C",
    "type": [
      "AchievementSubject"
    ],
    "achievement": {
      "id": "https://example.com/achievements/ach-33LML",
      "type": [
        "Achievement"
      ],
      "name": "Lightsaber Dueling Techniques",
      "image": {
        "id": "https://static.example.com/lightsaber.jpg",
        "type": "Image"
      },
      "description": "This badge is awarded for demonstrating proficiency in lightsaber dueling techniques.",
      "criteria": {
        "narrative": "To earn this badge, you must demonstrate proficiency in lightsaber dueling techniques."
      },
      "inLanguage": "en-EN",
      "resultDescription": [
        {
          "id": "https://example.com/results/ects-nl-NL-A1B2C3",
          "type": [
            "ResultDescription"
          ],
          "valueMax": "10",
          "valueMin": "1",
          "name": "Final Project Grade",
          "requiredValue": "6",
          "resultType": "ext:ECTSGradeScore"
        }
      ]
    },
    "result": [
      {
        "type": [
          "Result"
        ],
        "resultDescription": "https://example.com/results/ects-nl-NL-A1B2C3",
        "value": "7.5"
      }
    ]
  },
  "credentialSchema": [
    {
      "id": "https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_achievementcredential_schema.json",
      "type": "1EdTechJsonSchemaValidator2019"
    },
    {
      "id": "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/schemas/extracurricular.json",
      "type": "1EdTechJsonSchemaValidator2019"
    }
  ]
}
```

</details>
<details>
<summary>extracurriculair_full.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
    "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/contexts/extracurricular.json"
  ],
  "id": "http://example.com/credentials/crd-A1B2C3",
  "type": [
    "VerifiableCredential",
    "OpenBadgeCredential"
  ],
  "issuer": {
    "id": "https://example.com/issuers/iss-9Z8Y7X",
    "type": [
      "Profile"
    ],
    "name": "Naboo Theed University",
    "otherIdentifier": [
      {
        "type": "IdentifierEntry",
        "identifier": "42NB",
        "identifierType": "ext:BRIN"
      },
      {
        "type": "IdentifierEntry",
        "identifier": "university.naboo",
        "identifierType": "name"
      }
    ]
  },
  "validFrom": "2014-06-01T00:00:00Z",
  "name": "Example Extra-Curricular Achievement",
  "credentialSubject": {
    "id": "https://example.com/credentials/stu-1A2B3C",
    "type": [
      "AchievementSubject"
    ],
    "achievement": {
      "id": "https://example.com/achievements/ach-33LML",
      "type": [
        "Achievement",
        "ExtracurricularAchievement"
      ],
      "name": "Lightsaber Dueling Techniques",
      "image": {
        "id": "https://static.example.com/lightsaber.jpg",
        "type": "Image"
      },
      "description": "# Lightsaber Dueling Techniques\n This badge is awarded for demonstrating proficiency in lightsaber dueling techniques.\n\n\n      Below text is dummy text to show all the markdown features.\n\n      ## Koptexten\n\n      # h1 Koptekst\n\n      ## h2 Koptekst\n\n      ### h3 Koptekst\n\n      #### h4 Koptekst\n\n      ##### h5 Koptekst\n\n      ###### h6 Koptekst\n\n      ## Regelafbrekingen\n\n      Hier is een regel voor ons om mee te beginnen.\n      >\n\n      Deze regel wordt gescheiden van de vorige door een \">\" \n      (groter dan teken, zonder de aanhalingstekens) \n      zodat het een *aparte paragraaf* wordt.\n      >\n      >\n      >\n      Het intikken van meer > tekens levert echter niet meer lege regels op.\n      \n      ## Nadruk\n\n      **Dit is vetgedrukte tekst**\n\n      *Dit is cursieve tekst*\n\n      ~~Dit is doorgehaalde tekst~~\n\n      ## Blockquotes\n\n      > Blockquotes kunnen ook genest worden...\n      >> ...by using additional greater-than signs right next to each other...\n      > > > ...or with spaces between the arrows.\n\n      ## Ongeordende lijsten\n\n      + Maak een lijst door een regel te beginnen met `+`, `-`, of `*`\n      + Sub-lijsten worden gemaakt door 2 spaties in te laten springen:\n        - Verandering van markeringsteken forceert start van nieuwe lijst:\n          * Ac tristique libero volutpat at\n          + Facilisis in pretium nisl aliquet\n          - Nulla volutpat aliquam velit\n      + Zeer gemakkelijk!\n\n      ## Geordende lijsten\n\n      1. Maak een lijst door een regel te beginnen met `1.'\n      2. Tweede item\n      3. Derde item\n      4. Zeer gemakkelijk!\n\n      ## Code, Links, Images en Tabellen zijn niet ondersteund",
      "criteria": {
        "narrative": "To earn this badge, you must demonstrate proficiency in lightsaber dueling techniques."
      },
      "inLanguage": "en-US",
      "timeInvestment": 13,
      "participationType": "onsite or blended",
      "assessmentType": "application of a skill",
      "supervisionType": "onsite with identity verification",
      "identityChecked": false,
      "alignment": [
        {
          "type": [
            "Alignment"
          ],
          "targetType": "ext:QualityAssurance",
          "targetName": "M Performance, Sport and Health",
          "targetDescription": "Toets nieuwe opleiding\n**HBO-master**\npresteren, sport en gezondheid",
          "targetCode": "AV-1337",
          "targetUrl": "https://data.example.com/decisions/AV-1337"
        },
        {
          "type": [
            "Alignment"
          ],
          "targetType": "ext:EQF",
          "targetName": "EQF level 3",
          "targetCode": "3",
          "targetUrl": "https://content.example.com/description-eqf-levels"
        }
      ],
      "resultDescription": [
        {
          "id": "https://example.com/results/ects-nl-NL-A1B2C3",
          "type": [
            "ResultDescription"
          ],
          "valueMax": "10",
          "valueMin": "1",
          "name": "Final Project Grade",
          "requiredValue": "6",
          "resultType": "ext:ECTSGradeScore"
        }
      ]
    },
    "result": [
      {
        "type": [
          "Result"
        ],
        "resultDescription": "https://example.com/results/ects-nl-NL-A1B2C3",
        "value": "7.5"
      }
    ]
  },
  "credentialSchema": [
    {
      "id": "https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_achievementcredential_schema.json",
      "type": "1EdTechJsonSchemaValidator2019"
    },
    {
      "id": "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/schemas/extracurricular.json",
      "type": "1EdTechJsonSchemaValidator2019"
    }
  ]
}
```

</details>
<details>
<summary>extracurriculair_minimal.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json"
  ],
  "id": "http://example.com/credentials/crd-A1B2C3",
  "type": [
    "VerifiableCredential",
    "OpenBadgeCredential"
  ],
  "issuer": {
    "id": "https://example.com/issuers/iss-9Z8Y7X",
    "type": [
      "Profile"
    ],
    "name": "Naboo Theed University",
    "otherIdentifier": [
      {
        "type": "IdentifierEntry",
        "identifier": "42NB",
        "identifierType": "ext:BRIN"
      },
      {
        "type": "IdentifierEntry",
        "identifier": "university.naboo",
        "identifierType": "name"
      }
    ]
  },
  "validFrom": "2014-06-01T00:00:00Z",
  "name": "Example Extra-Curricular Achievement",
  "credentialSubject": {
    "id": "https://example.com/students/stu-1A2B3C",
    "type": [
      "AchievementSubject"
    ],
    "achievement": {
      "id": "https://example.com/achievements/ach-33LML",
      "type": [
        "Achievement"
      ],
      "name": "Lightsaber Dueling Techniques",
      "image": {
        "id": "https://static.example.com/lightsaber.jpg",
        "type": "Image"
      },
      "description": "This badge is awarded for demonstrating proficiency in lightsaber dueling techniques.",
      "criteria": {
        "narrative": "To earn this badge, you must demonstrate proficiency in lightsaber dueling techniques."
      },
      "inLanguage": "en-EN",
      "resultDescription": [
        {
          "id": "https://example.com/results/ects-nl-NL-A1B2C3",
          "type": [
            "ResultDescription"
          ],
          "valueMax": "10",
          "valueMin": "1",
          "name": "Final Project Grade",
          "requiredValue": "6",
          "resultType": "ext:ECTSGradeScore"
        }
      ]
    },
    "result": [
      {
        "type": [
          "Result"
        ],
        "resultDescription": "https://example.com/results/ects-nl-NL-A1B2C3",
        "value": "7.5"
      }
    ]
  },
  "credentialSchema": [
    {
      "id": "https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_achievementcredential_schema.json",
      "type": "1EdTechJsonSchemaValidator2019"
    },
    {
      "id": "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/schemas/extracurricular.json",
      "type": "1EdTechJsonSchemaValidator2019"
    }
  ]
}
```

</details>
<details>
<summary>microcredential_embedded.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",

    "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/contexts/microcredential.json"
  ],
  "id": "http://example.com/credentials/crd-A1B2C3",
  "type": [
    "VerifiableCredential",
    "OpenBadgeCredential"
  ],
  "issuer": {
    "id": "https://example.com/issuers/iss-9Z8Y7X",
    "type": [
      "Profile"
    ],
    "name": "Naboo Theed University"
  },
  "validFrom": "2014-06-01T00:00:00Z",
  "name": "Example Microcredential",
  "credentialSubject": {
    "id": "https://example.com/students/stu-4D5E6F",
    "type": [
      "AchievementSubject"
    ],
    "achievement": {
      "id": "https://example.com/achievements/ach-44ABA",
      "type": [
        "Achievement"
      ],
      "name": "Minor: Jedi Mind Control and Advanced Meditation Practices",
      "image": {
        "id": "https://static.example.com/mind.jpg",
        "type": "Image"
      },
      "description": "This badge is awarded for the Minor Jedi Mind Control and Advanced Meditation Practices",
      "criteria": {
        "narrative": "To earn this badge, you must attend the colleges on Mind Control, and on Meditation. You must pass a practical test and submit a written essay."
      },
      "inLanguage": "en-EN",
      "alignment": [
        {
          "type": [
            "Alignment"
          ],
          "targetType": "ext:QualityAssurance",
          "targetName": "M Psychological Assessment",
          "targetDescription": "Toets nieuwe opleiding\n**WO-minor**\n Psychologische Assessment",
          "targetCode": "AV-4223",
          "targetUrl": "https://data.example.com/decisions/AV-4223"
        },
        {
          "type": [
            "Alignment"
          ],
          "targetType": "ext:EQF",
          "targetName": "EQF level 4",
          "targetCode": "4",
          "targetUrl": "https://content.example.com/description-eqf-levels"
        }
      ],
      "participationType": "onsite or blended",
      "assessmentType": "testing",
      "identityChecked": true,
      "supervisionType": "onsite with identity verification",
      "resultDescription": [
        {
          "id": "https://example.com/results/ects-nl-NL-A1B2C3",
          "type": [
            "ResultDescription"
          ],
          "valueMax": "10",
          "valueMin": "1",
          "name": "Final Project Grade",
          "requiredValue": "6",
          "resultType": "ext:ECTSGradeScore"
        }
      ]
    },
    "result": [
      {
        "type": [
          "Result"
        ],
        "resultDescription": "https://example.com/results/ects-nl-NL-A1B2C3",
        "value": "8.5"
      }
    ]
  },
  "credentialSchema": [
    {
      "id": "https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_achievementcredential_schema.json",
      "type": "1EdTechJsonSchemaValidator2019"
    },
    {
      "id": "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/schemas/microcredential.json",
      "type": "1EdTechJsonSchemaValidator2019"
    }
  ]
}
```

</details>
<details>
<summary>microcredential_full.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",

    "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/contexts/microcredential.json"
  ],
  "id": "http://example.com/credentials/crd-A1B2C3",
  "type": [
    "VerifiableCredential",
    "OpenBadgeCredential"
  ],
  "issuer": {
    "id": "https://example.com/issuers/iss-9Z8Y7X",
    "type": [
      "Profile"
    ],
    "name": "Naboo Theed University"
  },
  "validFrom": "2014-06-01T00:00:00Z",
  "name": "Example Microcredential",
  "credentialSubject": {
    "id": "https://example.com/students/stu-4D5E6F",
    "type": [
      "AchievementSubject"
    ],
    "achievement": {
      "id": "https://example.com/achievements/ach-44ABA",
      "type": [
        "Achievement"
      ],
      "name": "Minor: Jedi Mind Control and Advanced Meditation Practices",
      "image": {
        "id": "https://static.example.com/mind.jpg",
        "type": "Image"
      },
      "description": "# Badge Awarded\n## Achievement Unlocked\nThis **badge** is awarded for completing the course _\"Minor Jedi Mind Control and Advanced Meditation Practices\"_.\n### Course Overview\nThe course explores the foundational techniques of **Jedi Mind Control** and the intricacies of advanced meditation. Learners delve into the mental discipline required to master these skills, honing their focus and control over the mind.\n> \"Your focus determines your reality.\"\nCompleting this course signifies the participant’s proficiency in these critical Jedi practices, earning them this badge of distinction.",
      "criteria": {
        "narrative": "To earn this badge, you must attend the colleges on Mind Control, and on Meditation. You must pass a practical test and submit a written essay."
      },
      "inLanguage": "en-EN",
      "alignment": [
        {
          "type": [
            "Alignment"
          ],
          "targetType": "ext:QualityAssurance",
          "targetName": "M Psychological Assessment",
          "targetDescription": "Toets nieuwe opleiding\n**WO-minor**\n Psychologische Assessment",
          "targetCode": "AV-4223",
          "targetUrl": "https://data.example.com/decisions/AV-4223"
        },
        {
          "type": [
            "Alignment"
          ],
          "targetType": "ext:EQF",
          "targetName": "EQF level 4",
          "targetCode": "4",
          "targetUrl": "https://content.example.com/description-eqf-levels"
        }
      ],
      "participationType": "onsite or blended",
      "assessmentType": "testing",
      "identityChecked": true,
      "supervisionType": "onsite with identity verification",
      "resultDescription": [
        {
          "id": "https://example.com/results/ects-nl-NL-A1B2C3",
          "type": [
            "ResultDescription"
          ],
          "valueMax": "10",
          "valueMin": "1",
          "name": "Final Project Grade",
          "requiredValue": "6",
          "resultType": "ext:ECTSGradeScore"
        }
      ],
      "ECTS": 43
    },
    "result": [
      {
        "type": [
          "Result"
        ],
        "resultDescription": "https://example.com/results/ects-nl-NL-A1B2C3",
        "value": "8.5"
      }
    ]
  },
  "credentialSchema": [
    {
      "id": "https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_achievementcredential_schema.json",
      "type": "1EdTechJsonSchemaValidator2019"
    },
    {
      "id": "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/schemas/microcredential.json",
      "type": "1EdTechJsonSchemaValidator2019"
    }
  ]
}
```

</details>
<details>
<summary>microcredential_minimal.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",

    "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/contexts/microcredential.json"
  ],
  "id": "http://example.com/credentials/crd-A1B2C3",
  "type": [
    "VerifiableCredential",
    "OpenBadgeCredential"
  ],
  "issuer": {
    "id": "https://example.com/issuers/iss-9Z8Y7X",
    "type": [
      "Profile"
    ],
    "name": "Naboo Theed University"
  },
  "validFrom": "2014-06-01T00:00:00Z",
  "name": "Example Microcredential",
  "credentialSubject": {
    "id": "https://example.com/students/stu-4D5E6F",
    "type": [
      "AchievementSubject"
    ],
    "achievement": {
      "id": "https://example.com/achievements/ach-44ABA",
      "type": [
        "Achievement"
      ],
      "name": "Minor: Jedi Mind Control and Advanced Meditation Practices",
      "image": {
        "id": "https://static.example.com/mind.jpg",
        "type": "Image"
      },
      "description": "This badge is awarded for the Minor Jedi Mind Control and Advanced Meditation Practices",
      "criteria": {
        "narrative": "To earn this badge, you must attend the colleges on Mind Control, and on Meditation. You must pass a practical test and submit a written essay."
      },
      "inLanguage": "en-EN",
      "alignment": [
        {
          "type": [
            "Alignment"
          ],
          "targetType": "ext:QualityAssurance",
          "targetName": "M Psychological Assessment",
          "targetDescription": "Toets nieuwe opleiding\n**WO-minor**\n Psychologische Assessment",
          "targetCode": "AV-4223",
          "targetUrl": "https://data.example.com/decisions/AV-4223"
        },
        {
          "type": [
            "Alignment"
          ],
          "targetType": "ext:EQF",
          "targetName": "EQF level 4",
          "targetCode": "4",
          "targetUrl": "https://content.example.com/description-eqf-levels"
        }
      ],
      "participationType": "onsite or blended",
      "assessmentType": "testing",
      "identityChecked": true,
      "supervisionType": "onsite with identity verification",
      "resultDescription": [
        {
          "id": "https://example.com/results/ects-nl-NL-A1B2C3",
          "type": [
            "ResultDescription"
          ],
          "valueMax": "10",
          "valueMin": "1",
          "name": "Final Project Grade",
          "requiredValue": "6",
          "resultType": "ext:ECTSGradeScore"
        }
      ]
    },
    "result": [
      {
        "type": [
          "Result"
        ],
        "resultDescription": "https://example.com/results/ects-nl-NL-A1B2C3",
        "value": "8.5"
      }
    ]
  },
  "credentialSchema": [
    {
      "id": "https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_achievementcredential_schema.json",
      "type": "1EdTechJsonSchemaValidator2019"
    },
    {
      "id": "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/schemas/microcredential.json",
      "type": "1EdTechJsonSchemaValidator2019"
    }
  ]
}
```

</details>
<details>
<summary>minimal_valid_obv3.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json"
  ],
  "id": "http://example.com/credentials/example-credential",
  "type": [
    "VerifiableCredential",
    "OpenBadgeCredential"
  ],
  "issuer": {
    "id": "https://www.edubadges.nl/public/issuers/lQ67BQQQS-eBx5syJGpazg",
    "type": [
      "Profile"
    ],
    "name": " SURF - Team edubadges"
  },
  "validFrom": "2014-06-01T00:00:00Z",
  "name": "Example Badge",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "type": [
      "AchievementSubject"
    ],
    "achievement": {
      "id": "https://example.com/achievements/lorem-ipsum",
      "type": [
        "Achievement"
      ],
      "criteria": {
        "narrative": "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet, consectetur adipiscing elit",
      "name": "Lorem ipsum"
    }
  }
}
```

</details>
<details>
<summary>regulier_embedded.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
    "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/contexts/regular.json"
  ],
  "id": "http://example.com/credentials/crd-D4E5F6",
  "type": [
    "VerifiableCredential",
    "OpenBadgeCredential"
  ],
  "issuer": {
    "id": "https://www.edubadges.nl/public/issuers/lQ67BQQQS-eBx5syJGpazg",
    "type": [
      "Profile"
    ],
    "name": " SURF - Team edubadges"
  },
  "validFrom": "2014-06-01T00:00:00Z",
  "name": "The Force and Its Applications",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "type": [
      "AchievementSubject"
    ],
    "achievement": {
      "id": "https://example.com/achievements/ach-77NPN",
      "type": [
        "Achievement"
      ],
      "criteria": {
        "narrative": "This badge is awarded for completing the course 'The Force and Its Applications'"
      },
      "description": "This badge is awarded for completing the course 'The Force and Its Applications'",
      "name": "The Force and Its Applications",
      "image": {
        "id": "https://static.example.com/force-applications.jpg",
        "type": "Image"
      },
      "resultDescription": [
        {
          "id": "https://example.com/results/ects-nl-NL-A1B2C3",
          "type": [
            "ResultDescription"
          ],
          "valueMax": "10",
          "valueMin": "1",
          "name": "Final Project Grade",
          "requiredValue": "6",
          "resultType": "ext:ECTSGradeScore"
        }
      ],
      "inLanguage": "en-EN",
      "alignment": [
        {
          "type": [
            "Alignment"
          ],
          "targetType": "ext:QualityAssurance",
          "targetName": "M Philosophy of Science, Technology and Society",
          "targetDescription": "Accreditatie bestaande opleiding",
          "targetCode": "AV-2391",
          "targetUrl": "https://data.example.com/decisions/AV-2391"
        },
        {
          "type": [
            "Alignment"
          ],
          "targetType": "ext:EQF",
          "targetName": "EQF level 5",
          "targetCode": "5",
          "targetUrl": "https://content.example.com/description-eqf-levels"
        }
      ],
      "educationProgramIdentifier": 133742,
      "ECTS": 6.0
    },
    "result": [
      {
        "type": [
          "Result"
        ],
        "resultDescription": "https://example.com/results/ects-nl-NL-D4E5F6",
        "value": "8.0"
      }
    ]
  },
  "credentialSchema": [
    {
      "id": "https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_achievementcredential_schema.json",
      "type": "1EdTechJsonSchemaValidator2019"
    },
    {
      "id": "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/schemas/regular.json",
      "type": "1EdTechJsonSchemaValidator2019"
    }
  ]
}
```

</details>
<details>
<summary>regulier_full.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
    "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/contexts/regular.json"
  ],
  "id": "http://example.com/credentials/crd-D4E5F6",
  "type": [
    "VerifiableCredential",
    "OpenBadgeCredential"
  ],
  "issuer": {
    "id": "https://www.edubadges.nl/public/issuers/lQ67BQQQS-eBx5syJGpazg",
    "type": [
      "Profile"
    ],
    "name": "SURF - Team edubadges",
    "otherIdentifier": [
      {
        "type": "IdentifierEntry",
        "identifier": "42EB",
        "identifierType": "ext:BRIN"
      },
      {
        "type": "IdentifierEntry",
        "identifier": "edubadges.nl",
        "identifierType": "name"
      }
    ]
  },
  "validFrom": "2014-06-01T00:00:00Z",
  "name": "The Force and Its Applications",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "type": [
      "AchievementSubject"
    ],
    "achievement": {
      "id": "https://example.com/achievements/ach-77NPN",
      "type": [
        "Achievement"
      ],
      "criteria": {
        "narrative": "This badge is awarded for completing the course 'The Force and Its Applications'"
      },
      "description": "# Badge Awarded\n## Achievement Unlocked\nThis **badge** is awarded for completing the course _\"The Force and Its Applications\"_.\n### Course Overview\nThe course dives deep into the understanding of the **Force**, its origins, and its practical applications in various scenarios. Throughout the course, participants explore the mysterious yet powerful aspects of the _Force_.\n> \"The Force will be with you, always.\"\nUpon completion, learners gain valuable insights and demonstrate their mastery over this complex and fascinating subject. This badge is a testament to that achievement.",
      "name": "The Force and Its Applications",
      "image": {
        "id": "https://static.example.com/force-applications.jpg",
        "type": "Image"
      },
      "resultDescription": [
        {
          "id": "https://example.com/results/ects-nl-NL-A1B2C3",
          "type": [
            "ResultDescription"
          ],
          "valueMax": "10",
          "valueMin": "1",
          "name": "Final Project Grade",
          "requiredValue": "6",
          "resultType": "ext:ECTSGradeScore"
        }
      ],
      "inLanguage": "en-EN",
      "alignment": [
        {
          "type": [
            "Alignment"
          ],
          "targetType": "ext:QualityAssurance",
          "targetName": "M Philosophy of Science, Technology and Society",
          "targetDescription": "Accreditatie bestaande opleiding",
          "targetCode": "AV-2391",
          "targetUrl": "https://data.example.com/decisions/AV-2391"
        },
        {
          "type": [
            "Alignment"
          ],
          "targetType": "ext:EQF",
          "targetName": "EQF level 5",
          "targetCode": "5",
          "targetUrl": "https://content.example.com/description-eqf-levels"
        }
      ],
      "educationProgramIdentifier": 133742,
      "ECTS": 6.0,
      "participationType": "online",
      "assessmentType": "testing",
      "supervisionType": "supervised online",
      "identityChecked": true
    },
    "result": [
      {
        "type": [
          "Result"
        ],
        "resultDescription": "https://example.com/results/ects-nl-NL-D4E5F6",
        "value": "8.0"
      }
    ]
  },
  "credentialSchema": [
    {
      "id": "https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_achievementcredential_schema.json",
      "type": "1EdTechJsonSchemaValidator2019"
    },
    {
      "id": "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/schemas/regular.json",
      "type": "1EdTechJsonSchemaValidator2019"
    }
  ]
}
```

</details>
<details>
<summary>regulier_minimal.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
    "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/contexts/regular.json"
  ],
  "id": "http://example.com/credentials/crd-D4E5F6",
  "type": [
    "VerifiableCredential",
    "OpenBadgeCredential"
  ],
  "issuer": {
    "id": "https://www.edubadges.nl/public/issuers/lQ67BQQQS-eBx5syJGpazg",
    "type": [
      "Profile"
    ],
    "name": "SURF - Team edubadges",
    "otherIdentifier": [
      {
        "type": "IdentifierEntry",
        "identifier": "42EB",
        "identifierType": "ext:BRIN"
      },
      {
        "type": "IdentifierEntry",
        "identifier": "edubadges.nl",
        "identifierType": "name"
      }
    ]
  },
  "validFrom": "2014-06-01T00:00:00Z",
  "name": "The Force and Its Applications",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "type": [
      "AchievementSubject"
    ],
    "achievement": {
      "id": "https://example.com/achievements/ach-77NPN",
      "type": [
        "Achievement"
      ],
      "criteria": {
        "narrative": "This badge is awarded for completing the course 'The Force and Its Applications'"
      },
      "description": "This badge is awarded for completing the course 'The Force and Its Applications'",
      "name": "The Force and Its Applications",
      "image": {
        "id": "https://static.example.com/force-applications.jpg",
        "type": "Image"
      },
      "resultDescription": [
        {
          "id": "https://example.com/results/ects-nl-NL-A1B2C3",
          "type": [
            "ResultDescription"
          ],
          "valueMax": "10",
          "valueMin": "1",
          "name": "Final Project Grade",
          "requiredValue": "6",
          "resultType": "ext:ECTSGradeScore"
        }
      ],
      "inLanguage": "en-EN",
      "alignment": [
        {
          "type": [
            "Alignment"
          ],
          "targetType": "ext:QualityAssurance",
          "targetName": "M Philosophy of Science, Technology and Society",
          "targetDescription": "Accreditatie bestaande opleiding",
          "targetCode": "AV-2391",
          "targetUrl": "https://data.example.com/decisions/AV-2391"
        },
        {
          "type": [
            "Alignment"
          ],
          "targetType": "ext:EQF",
          "targetName": "EQF level 5",
          "targetCode": "5",
          "targetUrl": "https://content.example.com/description-eqf-levels"
        }
      ],
      "educationProgramIdentifier": 133742,
      "ECTS": 6.0
    },
    "result": [
      {
        "type": [
          "Result"
        ],
        "resultDescription": "https://example.com/results/ects-nl-NL-D4E5F6",
        "value": "8.0"
      }
    ]
  },
  "credentialSchema": [
    {
      "id": "https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_achievementcredential_schema.json",
      "type": "1EdTechJsonSchemaValidator2019"
    },
    {
      "id": "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/schemas/regular.json",
      "type": "1EdTechJsonSchemaValidator2019"
    }
  ]
}
```

</details>
<!-- /managed_by_embed -->
