# OB3 Credential Examples

Examples of Open Badges V3 credentials based on the Educredentials metadata model.
These examples can be used to test the capabilities of various wallets.

## Roadmap

- Step 1: Initially, these example credentials will only consist of the JSON code.
- Step 2: The next step is to have them signed by an agent so they can be placed in a wallet.

## SURF Documentation

- [Formatting text badge class](https://wiki.surfnet.nl/display/Edubadges/Opmaken+tekst+badge+class) (examples of markdown support in Edubadges)
- Extra metadata: the spec supports extensions to the data model (<https://www.imsglobal.org/spec/ob/v3p0#extending-the-data-model>). In Edubadges, this is done with 17 extra metadata fields. (See [Microcredentials Definition EU](https://wiki.surfnet.nl/display/Edubadges/Microcredentials+Definition+EU))
- See also the current Edubadges examples in OB2 format: [Edubadges Metadata Examples - JSON output](https://wiki.surfnet.nl/display/Edubadges/Edubadges+Metadata+Examples+-+JSON+output) (internal wiki)
- Business Rules for attributes, possible values, and such from the OBV2 version are detailed in [Badgeclass Business Rules](https://wiki.surfnet.nl/pages/viewpage.action?spaceKey=EBB&title=Badgeclass+Business+Rules)
- Mapping from OB2 - OB3 is detailed in: [Micro-credentials Metadata Mapping](https://wiki.surfnet.nl/display/EduCr/Micro-credentials+Metadata+Mapping+OB2+-+OB3+-+ELM) (internal wiki)

## Questions

- Can we map from Educredentials to CASE-related alignment target types?
- Do we want to differentiate between "study load requested" vs "study load completed" - similar to creditsAvailable vs creditsEarned?
- What do we want to use as identifiers: did, did:web, URL?
- What do we want to do with multilingualism? One option can be found in the [1EdTech Localization Framework](https://www.imsglobal.org/spec/l12n-framework/v1p0), but it is still in early preview. Alternatives include choosing a language when issuing a credential; the user may then have a credential per language. Another option is to use custom extensions for this, with the risk of deviating too far from the standard.
- What info/metadata should be included in the "quality framework" for MBO? For HO, we have the ECTSGradeScore. Is it different for MBO?

## Assumptions and Choices

- For the language of the edubadge, we chose the "inLanguage" property because the description is "the language of the achievement".
- For Grade Achieved, "Result" is used.
- For Learning Outcome, "ResultDescription" with type ext:ECTSScore is used with a Dutch scale of 1 to 10.
- For ECTS study load, creditsEarned (completed) and creditsAvailable are used.
- For IdentityChecked, a boolean was chosen because the current OBV2 model also has this; although this is not ideal - an enum would be better, so that NVT (Not Applicable) etc. can also be included.
- For Study Load, there is business logic. We don't fully work this out in the schema to avoid complexity. However, the simple version is:
    Study load options: ECTS / SBU / Time investment
     - Three separate objects at the highest level in Achievement:
         - ECTS
         - SBU - postponed[^1]
         - TimeInvestment
     - Enforced per Achievement type:
         - microcredential: requires studyloadECTS
         - regular: requires studyloadECTS
- For BRIN and ShacHome, separate "otheridentifier" entries are included in the issuer.
- For issuer.id, we use the internal ID e.g. https://demo.educredentials.eu/public/institutions/9-TYGj4dTn-nW8CGfwGjAQ
- According to the *Open Badges Implementation Guide*, schemas for extensions are mandatory, whereas, according to the *Open Badges Specification*, they are optional. We have included them in the `CredentialSchema` list.

## Educredentials: Current Model

We currently distinguish three types of credentials in Educredentials: Extracurricular, Regular, and Microcredential.\
The difference between these three types is which metadata elements are used in the badge class.

|                                          | Microcredential        | Regular Edubadge    | Extracurricular Edubadge   |
| ---------------------------------------- | ---------------------- | ------------------- | -------------------------- |
| **Basic Information**                    |                        |                     |                            |
| Name                                     | Required               | Required            | Required                   |
| Edubadge Image                           | Required               | Required            | Required                   |
| Description                              | Required               | Required            | Required                   |
| Learning Outcomes                        | Required               | Required            | Required                   |
| Criteria                                 | Required               | Required            | Required                   |
| Program Information                      |                        |                     |                            |
| Language of Instruction                  | Required               | Required            | Required                   |
| ECTS/SBU Credits                         | Optional               | Required            | Not Applicable             |
| Time Investment                          | Optional               | Not Applicable      | Required                   |
| Indication of EQF Level                  | Required               | Required            | Optional                   |
| Participation Type                       | Required               | Optional            | Optional                   |
| Educational Codes                        | Optional               | Required            | Optional                   |
| **Assessment Information**               |                        |                     |                            |
| Assessment Type                          | Required               | Optional            | Optional                   |
| Supervision of Assessment                | Required               | Optional            | Optional                   |
| Identity                                 | Required               | Optional            | Optional                   |
| **Quality Assurance**                    |                        |                     |                            |
| Name                                     | Quality Framework HO/MBO | Optional           | Optional                   |
| URL                                      | Required               | Optional            | Optional                   |
| Description                              | Required               | Optional            | Optional                   |
| **Related Educational Framework**        |                        |                     |                            |
| Name                                     | Optional               | Optional            | Optional                   |
| Framework                                | Optional               | Optional            | Optional                   |
| URL                                      | Optional               | Optional            | Optional                   |
| Code                                     | Optional               | Optional            | Optional                   |
| Description                              | Optional               | Optional            | Optional                   |

## Terms

With the introduction of OB3, several terms used in Educredentials (OB2) have changed:

| OB2        | OB3                            |
| ---------- | ------------------------------ |
| Badgeclass | Digital Credential Achievement |
| Open Badge | Open Badge Credential          |
| Edubadge   | Digital Credential Assertion   |

(See also [OB3 datamodel conceptual model](https://www.imsglobal.org/spec/ob/v3p0/#conceptual-model))

ext: extensions:
> "This enumeration can be extended with new, proprietary terms. The new terms
> must start with the substring 'ext:'."

## EduCredential Examples

The following JSON code examples will be used to create the Open Badges V3 credentials. These will need to be signed by an agent to be used in wallets, but that is step 2.\
The following types of OB3 examples are provided:

- **Extracurricular** - For knowledge and skills acquired outside the curriculum of a recognized program. **No ECTS/SBU is associated with this badge class.**
- **Regular** - For knowledge and skills acquired within the curriculum of a recognized program. **ECTS/SBU is associated with this badge class.**
- **Microcredential** - Microcredentials with the quality framework for HBO/WO or MBO professionals and all metadata **[in accordance with the EU recommendations](https://wiki.surfnet.nl/display/Edubadges/Microcredentials+Definition+EU).**

- **HO** - Credentials for higher education, HBO, and WO.
- **MBO** - Credentials for secondary vocational education, MBO.

Four variants are worked out as examples for each type:

- **Full** - All mandatory and optional fields are filled in.
- **Minimal** - Only mandatory fields are filled in.
- **Embedded** - All mandatory fields are filled in. All optional fields with references to images are filled in. All images are included in the payload as base64 data URLs.
- **Full, MBO** - All mandatory and optional fields, worked out for an MBO.

## Markdown

OBv3 allows Markdown in many data fields, without specifying which subset or variant.

> Markdown 	A String that may contain Markdown.

https://www.imsglobal.org/spec/ob/v3p0/#org.1edtech.ob.v3p0.derived.markdown.class

We limit this in [markdown.md](./markdown.md). This subset is therefore not backward compatible with OBv3, which still allows code, links, tables, etc. We further restrict it for OBv3. Elements not detailed in `markdown.md` are therefore not allowed.

## Content of the Examples

Examples are built from a context that follows a story.
It uses mock IDs that resemble a real ID.

### Story

Issuer: Naboo Theed University

Student: Padawan Ashoka Tano

Extracurricular: Lightsaber Dueling Techniques
Regular: The Force and Its Applications (6 ECTS)
Microcredential: Jedi Mind Control and Advanced Meditation Practices (3 ECTS)
MBO microcredential: Droid Maintenance and Repair (500 SBU)
MBO regular: Pod Tuning and Boosting (24 SBU)
MBO extracurricular: Droid Factory Internship

### Validity

All \_full versions have a validFrom and a validUntil, which are hardcoded to make them valid for 5 years starting from 30 August 2024.

### URLs

Images hosted at static.example.com, e.g. https://static.example.com/lightsaber.jpg

Contexts hosted at contexts.example.com, e.g. https://contexts.example.com/learning-outcome-extension.json

### IDS

Ids are in the form of a URL. They use https and the following structure:

    https://example.com/{resource}/{unique}

* Resource is the "thing" we are identifying in plural. E.g. a student would have the resource `students` and an Achievement the resource `achievements`
* Unique is some unique identifier, in reality problably some internal ID.

<details>
<summary>For the examples, we use the following mock unique identifiers:</summary>
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
</details>

In the examples we will use the first always, except for the rare cases when we must convey that
there are multiple resources in a single example.

## The Examples

<!-- managed_by_embed -->
<details>
<summary>extracurricular_embedded_ho.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",

    "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/contexts/educredential.json"
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
        "Achievement",
        "EducredentialAchievement"
      ],
      "name": "Lightsaber Dueling Techniques",
      "image": {
        "id": "data:image/jpeg;base64,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0T3NnbI1wA6OPUcJ6/6KXev7QLXpeWkjqOKOmDp6WRx5xHPE5g8mlwa/HQOaT+t2YjXSeG3QzSQgMfK5whaP0g+P0AOP4WG6pdnJOPU1UZKUXzFFqG408sjqagifDEXcb2OfxEHlyJwPHJx4Zx4KxoSSck9UVexW23uEREPAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCDkiICUeye/druVmpdIa2uQpK+hY2Gkq5nYjqYxya1zj8rwMDnycAOeeu26/V1rp25bLxkjqPFQBVdT36+UkQgpbxWwxAYDI6h7Wj7ArTTuORYaIuOSUO8O59tg0nU25szW1dWO6ibn4mtPzPx6Dp5kj1UWK+skrqgzPGAPhY39rR0C6pp5qiQyzyvke7q57i4n7lcFVVqOq8s9SwsBERVnoREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/9k=",
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
<summary>extracurricular_full_ho.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
    "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/contexts/educredential.json"
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
  "validFrom": "2024-08-30T00:00:00Z",
  "validUntil": "2029-08-30T00:00:00Z",
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
        "EducredentialAchievement"
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
<summary>extracurricular_full_mbo.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
    "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/contexts/educredential.json"
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
  "validFrom": "2024-08-30T00:00:00Z",
  "validUntil": "2029-08-30T00:00:00Z",
  "name": "Example Extra-Curricular Achievement",
  "credentialSubject": {
    "id": "https://example.com/credentials/stu-A1B2C3",
    "type": [
      "AchievementSubject"
    ],
    "achievement": {
      "id": "https://example.com/achievements/ach-33D4E5",
      "type": [
        "Achievement",
        "EducredentialAchievement"
      ],
      "name": "Droid Factory Internship",
      "image": {
        "id": "https://static.example.com/droid.jpg",
        "type": "Image"
      },
      "description": "# Droid Factory Internship\n\nThis badge is awarded to students who have completed an internship at the Naboo Droid Factory. The internship is a hands-on experience where students learn how to assemble and repair droids.",
      "criteria": {
        "narrative": "Participate in a 2-week internship at the Naboo Droid Factory.",
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
    },
    {
      "id": "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/schemas/extracurricular_mbo.json",
      "type": "1EdTechJsonSchemaValidator2019"
    }
  ]
}
```

</details>
<details>
<summary>extracurricular_minimal_ho.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",

    "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/contexts/educredential.json"
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
        "Achievement",
        "EducredentialAchievement"
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
<summary>microcredential_embedded_ho.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
    "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/contexts/educredential.json"
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
        "Achievement",
        "EducredentialAchievement"
      ],
      "name": "Minor: Jedi Mind Control and Advanced Meditation Practices",
      "image": {
        "id": "data:image/jpeg;base64,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",
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
      ],
      "ECTS": 3.0
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
    },
    {
      "id": "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/schemas/microcredential_ects.json",
      "type": "1EdTechJsonSchemaValidator2019"
    }
  ]
}
```

</details>
<details>
<summary>microcredential_full_ho.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
    "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/contexts/educredential.json"
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
  "name": "Example Microcredential",
  "validFrom": "2024-08-30T00:00:00Z",
  "validUntil": "2029-08-30T00:00:00Z",
  "credentialSubject": {
    "id": "https://example.com/students/stu-4D5E6F",
    "type": [
      "AchievementSubject"
    ],
    "achievement": {
      "id": "https://example.com/achievements/ach-44ABA",
      "type": [
        "Achievement",
        "EducredentialAchievement"
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
      "ECTS": 3.0
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
    },
    {
      "id": "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/schemas/microcredential_ects.json",
      "type": "1EdTechJsonSchemaValidator2019"
    }
  ]
}
```

</details>
<details>
<summary>microcredential_full_mbo.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
    "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/contexts/educredential.json"
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
  "name": "Example Microcredential",
  "validFrom": "2024-08-30T00:00:00Z",
  "validUntil": "2029-08-30T00:00:00Z",
  "credentialSubject": {
    "id": "https://example.com/students/stu-4D5E6F",
    "type": [
      "AchievementSubject"
    ],
    "achievement": {
      "id": "https://example.com/achievements/ach-44ABA",
      "type": [
        "Achievement",
        "EducredentialAchievement"
      ],
      "name": "Droid Maintenance and Repair",
      "image": {
        "id": "https://static.example.com/droid.jpg",
        "type": "Image"
      },
      "description": "# Droid Maintenance and Repair\n\nThis badge is awarded to students who have successfully completed the **Droid Maintenance and Repair course**. The course covers:\n * basics of droid maintenance\n *basics of repair \n * how to identify and fix common problems\n * how to perform routine maintenance tasks.",
      "criteria": {
        "narrative": "To earn this credential, students must:\n * complete all course modules\n * pass the final exam\n * complete a final project\n * achieve a final project grade of 6 or higher\n\nThe final project grade is calculated as the average of the grades for the final exam and the final project."
      },
      "inLanguage": "en-EN",
      "alignment": [
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
      "SBU": 500
    },
    "result": [
      {
        "type": [
          "Result"
        ],
        "resultDescription": "https://example.com/results/ects-nl-NL-A1B2C3",
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
      "id": "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/schemas/microcredential.json",
      "type": "1EdTechJsonSchemaValidator2019"
    },
    {
      "id": "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/schemas/microcredential_sbu.json",
      "type": "1EdTechJsonSchemaValidator2019"
    }
 
  ]
}
```

</details>
<details>
<summary>microcredential_minimal_ho.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
    "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/contexts/educredential.json"
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
        "Achievement",
        "EducredentialAchievement"
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
      ],
      "ECTS": 3.0
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
    },
    {
      "id": "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/schemas/microcredential_ects.json",
      "type": "1EdTechJsonSchemaValidator2019"
    }
  ]
}
```

</details>
<details>
<summary>regular_embedded_ho.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
    "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/contexts/educredential.json"
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
        "Achievement",
        "EducredentialAchievement"
      ],
      "criteria": {
        "narrative": "This badge is awarded for completing the course 'The Force and Its Applications'"
      },
      "description": "This badge is awarded for completing the course 'The Force and Its Applications'",
      "name": "The Force and Its Applications",
      "image": {
        "id": "data:image/jpeg;base64,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",
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
    },
    {
      "id": "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/schemas/regular_ects.json",
      "type": "1EdTechJsonSchemaValidator2019"
    }
  ]
}
```

</details>
<details>
<summary>regular_full_ho.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
    "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/contexts/educredential.json"
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
  "validFrom": "2024-08-30T00:00:00Z",
  "validUntil": "2029-08-30T00:00:00Z",
  "name": "The Force and Its Applications",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "type": [
      "AchievementSubject"
    ],
    "achievement": {
      "id": "https://example.com/achievements/ach-77NPN",
      "type": [
        "Achievement",
        "EducredentialAchievement"
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
    },
    {
      "id": "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/schemas/regular_ects.json",
      "type": "1EdTechJsonSchemaValidator2019"
    }
  ]
}
```

</details>
<details>
<summary>regular_full_mbo.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
    "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/contexts/educredential.json"
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
  "validFrom": "2024-08-30T00:00:00Z",
  "validUntil": "2029-08-30T00:00:00Z",
  "name": "Pod Tuning and Boosting",
  "credentialSubject": {
    "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",
    "type": [
      "AchievementSubject"
    ],
    "achievement": {
      "id": "https://example.com/achievements/ach-77NPN",
      "type": [
        "Achievement",
        "EducredentialAchievement"
      ],
      "criteria": {
        "narrative": "Thi"
      },
      "description": "",
      "name": "Pod Tuning and Boosting",
      "image": {
        "id": "https://static.example.com/pod.jpg",
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
          "targetType": "ext:EQF",
          "targetName": "EQF level 5",
          "targetCode": "5",
          "targetUrl": "https://content.example.com/description-eqf-levels"
        }
      ],
      "educationProgramIdentifier": 133742,
      "SBU": 24,
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
    },
    {
      "id": "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/schemas/regular_sbu.json",
      "type": "1EdTechJsonSchemaValidator2019"
    }
  ]
}
```

</details>
<details>
<summary>regular_minimal_ho.json</summary>

```json
{
  "@context": [
    "https://www.w3.org/ns/credentials/v2",
    "https://purl.imsglobal.org/spec/ob/v3p0/context-3.0.3.json",
    "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/contexts/educredential.json"
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
        "Achievement",
        "EducredentialAchievement"
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
    },
    {
      "id": "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/schemas/regular_ects.json",
      "type": "1EdTechJsonSchemaValidator2019"
    }
  ]
}
```

</details>
<!-- /managed_by_embed -->
