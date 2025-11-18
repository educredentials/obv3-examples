---
title: "Naboo Theed University - The Force and Its Applications"
layout: credential
---
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
    ],
    "address": {
      "type": [
        "Address"
      ],
      "addressCountry": "Naboo",
      "addressCountryCode": "XX",
      "addressLocality": "Theed",
      "streetAddress": "Jedi Temple 1",
      "postalCode": "1337"
    }
  },
  "validFrom": "2014-06-01T00:00:00Z",
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
        "id": "https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/images/force-applications.jpg",
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
