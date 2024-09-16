# OB3 Credential Examples

Voorbeelden van Open Badges V3 credentials naar voorbeeld van het
metadatamodel van Edubadges.
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
    class](https://wiki.surfnet.nl/display/Edubadges/Opmaken+tekst+badge+class) (voorbeelden markdown support in
    Edubadges)
-   Extra metadata: de spec ondersteunt dat er uitbreidingen op het
    datamodel worden gemaakt
    (<https://www.imsglobal.org/spec/ob/v3p0#extending-the-data-model>).
    In Edubadges is dit gedaan met 17 extra metadatavelden. (Zie
    [Microcredentials Definition
    EU](https://wiki.surfnet.nl/display/Edubadges/Microcredentials+Definition+EU))
-   Zie ook de huidige Edubadges voorbeelden in OB2 formaat: [Edubadges
    Metadata Examples - JSON
    output](https://wiki.surfnet.nl/display/Edubadges/Edubadges+Metadata+Examples+-+JSON+output)

### Edubadges: huidig model

We onderscheiden nu in Edubadges 3 typen credentials: Extracurriculair,
Regulier en Microcredential.\
Het verschil tussen deze 3 types is welke metadataelementen zijn
gebruikt in de badgeclass.

|                                          | Microcredential        | Reguliere edubadge   | Extracurriculaire edubadge   |
| ---------------------------------------- | ---------------------- | -------------------- | ---------------------------- |
| **Basisinformatie**                      |                        |                      |                              |
| Naam                                     | Verplicht              | Verplicht            | Verplicht                    |
| Edubadge afbeelding                      | Verplicht              | Verplicht            | Verplicht                    |
| Beschrijving                             | Verplicht              | Verplicht            | Verplicht                    |
| Leeruitkomsten                           | Verplicht              | Verplicht            | Verplicht                    |
| Criteria                                 | Verplicht              | Verplicht            | Verplicht                    |
| Programma informatie                     |                        |                      |                              |
| Taal van het onderwijs                   | Verplicht              | Verplicht            | Verplicht                    |
| Studiepunten ECTS/SBU                    | Optioneel              | Verplicht            | Niet van toepassing          |
| Tijdsinvestering                         | Optioneel              | Niet van toepassing  | Verplicht                    |
| Indicatie EQF niveau                     | Verplicht              | Verplicht            | Optioneel                    |
| Vorm van deelname                        | Verplicht              | Optioneel            | Optioneel                    |
| Opleidingscodes                          | Optioneel              | Verplicht            | Optioneel                    |
| **Informatie over de beoordeling**       |                        |                      |                              |
| Beoordelingstype                         | Verplicht              | Optioneel            | Optioneel                    |
| Toezicht bij de beoordeling              | Verplicht              | Optioneel            | Optioneel                    |
| Identiteit                               | Verplicht              | Optioneel            | Optioneel                    |
| **Kwaliteitsborging**                    |                        |                      |                              |
| Naam                                     | Kwaliteitskader HO/MBO | Optioneel            | Optioneel                    |
| URL                                      | Verplicht              | Optioneel            | Optioneel                    |
| Omschrijving                             | Verplicht              | Optioneel            | Optioneel                    |
| **Gerelateerd onderwijskundig raamwerk** |                        |                      |                              |
| Naam                                     | Optioneel              | Optioneel            | Optioneel                    |
| Raamwerk                                 | Optioneel              | Optioneel            | Optioneel                    |
| URL                                      | Optioneel              | Optioneel            | Optioneel                    |
| Code                                     | Optioneel              | Optioneel            | Optioneel                    |
| Omschrijving                             | Optioneel              | Optioneel            | Optioneel                    |

### Termen

Met de komst van OB3 zijn een aantal termen zoals we deze in edubadges
(=OB2) gebruiken gewijzigd:

| OB2              | OB3                   |
|------------------|-----------------------|
| Badgeclass       | Achievement           |
| Open Badge       | Open Badge Credential |
| Edubadge         | Educredential         |


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

## De voorbeelden:

> [!WARNING]  
> Deze voorbeelden zijn WIP. Slechts enkele zijn afgerond, de meesten nog boilerplate. Zie lijst hieronder.

* [ ]  extracurriculair_embedded.json
* [x]  extracurriculair_full.json
* [x]  extracurriculair_minimal.json
* [ ]  microcredential_embedded.json
* [ ]  microcredential_full.json
* [ ]  microcredential_minimal.json
* [ ]  minimal_valid_obv3.json
* [ ]  regulier_embedded.json
* [ ]  regulier_full.json
* [ ]  regulier_minimal.json

<!-- managed_by_embed -->
<details>
<summary>extracurriculair_embedded.json</summary>

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
<summary>extracurriculair_full.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",

    "https://contexts.example.com/alignment-extension.json",
    "https://contexts.example.com/assessment-type-extension.json",
    "https://contexts.example.com/course-language-extension.json",
    "https://contexts.example.com/education-program-identifier-extension.json",
    "https://contexts.example.com/eqf-extension.json",
    "https://contexts.example.com/identity-checked-extension.json",
    "https://contexts.example.com/institution-identifier-extension.json",
    "https://contexts.example.com/learning-outcome-extension.json",
    "https://contexts.example.com/participation-form-extension.json",
    "https://contexts.example.com/quality-assurance-extension.json",
    "https://contexts.example.com/supervision-type-extension.json",
    "https://contexts.example.com/time-investment-extension.json"
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
  "name": "Example Extra-Curricular Achievement",
  "credentialSubject": {
    "id": "https://example.com/credentials/stu-1A2B3C",
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
      "description": "# Lightsaber Dueling Techniques\n This badge is awarded for demonstrating proficiency in lightsaber dueling techniques.\n\n\n      Below text is dummy text to show all the markdown features.\n\n      ## Koptexten\n\n      # h1 Koptekst\n\n      ## h2 Koptekst\n\n      ### h3 Koptekst\n\n      #### h4 Koptekst\n\n      ##### h5 Koptekst\n\n      ###### h6 Koptekst\n\n      ## Regelafbrekingen\n\n      Hier is een regel voor ons om mee te beginnen.\n      >\n\n      Deze regel wordt gescheiden van de vorige door een \">\" \n      (groter dan teken, zonder de aanhalingstekens) \n      zodat het een *aparte paragraaf* wordt.\n      >\n      >\n      >\n      Het intikken van meer > tekens levert echter niet meer lege regels op.\n      \n      ## Nadruk\n\n      **Dit is vetgedrukte tekst**\n\n      *Dit is cursieve tekst*\n\n      ~~Dit is doorgehaalde tekst~~\n\n      ## Blockquotes\n\n      > Blockquotes kunnen ook genest worden...\n      >> ...by using additional greater-than signs right next to each other...\n      > > > ...or with spaces between the arrows.\n\n      ## Ongeordende lijsten\n\n      + Maak een lijst door een regel te beginnen met `+`, `-`, of `*`\n      + Sub-lijsten worden gemaakt door 2 spaties in te laten springen:\n        - Verandering van markeringsteken forceert start van nieuwe lijst:\n          * Ac tristique libero volutpat at\n          + Facilisis in pretium nisl aliquet\n          - Nulla volutpat aliquam velit\n      + Zeer gemakkelijk!\n\n      ## Geordende lijsten\n\n      1. Maak een lijst door een regel te beginnen met `1.'\n      2. Tweede item\n      3. Derde item\n      4. Zeer gemakkelijk!\n\n      ## Code, Links, Images en Tabellen zijn niet ondersteund",
      "criteria": {
        "narrative": "To earn this badge, you must demonstrate proficiency in lightsaber dueling techniques."
      },

      "LearningOutcome": "Is **fysically** able to perform *lightsaber dueling techniques* against an opponent in the **same class**.",
      "Language": "en_EN",
      "TimeInvestment": 42,

      "EQF": 3,
      "ParticipationForm": "Onsite",
      "InstitutionIdentifier": 123456,

      "AssessmentType": "Application of a skill",
      "SupervisionType": "Supervised with identity verification",
      "IdentityChecked": true,

      "QualityAssurance": {
        "name": "Kwaliteitskader Microcredentials voor Professionals HBO en WO",
        "url": "https://www.versnellingsplan.nl/Kennisbank/pilot-microcredentials-2/",
        "description": "In het Nederlandse hoger onderwijs is in de afgelopen jaren een hoogwaardig stelsel van kwaliteitsborging gegroeid.\n\nInstellingen geven hier allen op hun eigen wijze kleur aan. Deze eigenheid en diversiteit kunnen beschouwd worden als een kracht van het stelsel, maar kan ook leiden tot discussie onderling wanneer gezocht wordt naar eenduidigheid. Daarom is gekozen voor een kwaliteitskader waarbinnen instellingen zoveel mogelijk (inhoudelijke) vrijheid genieten. De pilot geeft ruimte aan de instellingen om te starten met dit kader als vertrekpunt en deze al doende in gezamenlijkheid bij te schaven en verder in te vullen....."
      },

      "Alignment": {
        "name" : "dueling",
        "framework": "ESCO",
        "code": "2b22f3b1-5de4-43f9-b6d1-b20f65871268",
        "description": "The discipline that *studies*, *trains* and *improves* the act of **dueling with a lightsaber**.",
        "URL": "https://data.example.com/esco/skill/2b22f3b1-5de4-43f9-b6d1-b20f65871268"
      }
    }
  }
}
```

</details>
<details>
<summary>extracurriculair_minimal.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
    "https://contexts.example.com/learning-outcome-extension.json",
    "https://contexts.example.com/course-language-extension.json",
    "https://contexts.example.com/time-investment-extension.json"
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

      "LearningOutcome": "Is fysically able to perform lightsaber dueling techniques against an opponent in the same class.",
      "CourseLanguage": "en_EN",
      "TimeInvestment": 42
    }
  }
}
```

</details>
<details>
<summary>microcredential_embedded.json</summary>

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
<summary>microcredential_full.json</summary>

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
<summary>microcredential_minimal.json</summary>

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
<summary>regulier_full.json</summary>

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
<summary>regulier_minimal.json</summary>

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
<!-- /managed_by_embed -->
