---
title: "OB3 Credential Examples"
---

<script src="./assets/outline.js"></script>

# OB3 Credential Examples

Examples of Open Badges V3 credentials based on the Educredentials metadata model.
These examples can be used to test the capabilities of various wallets.

<div id="examples-list">
<ul>
{% for credential in site.credentials %}
{% assign cred_json = site.data.credentials[credential.credential_data] %}
{% assign image_url = cred_json.credentialSubject.achievement.image.id %}
{% assign image_filename = image_url | split: "/" | last %}
{% assign achievement_name = cred_json.credentialSubject.achievement.name %}
{% assign issuer_name = cred_json.issuer.name %}
{% assign criteria_narrative = cred_json.credentialSubject.achievement.criteria.narrative %}

<li class="list-item">
    <a href="{{ credential.url | relative_url }}">
    <img src="images/{{ image_filename }}" alt="{{ achievement_name }}">
    <div class="credential-info">
        <span class="name">{{ achievement_name }}</span>
        <span class="issuer">{{ issuer_name }}</span>
        <span class="criteria">{{ criteria_narrative }}</span>
    </div>
    </a>
</li>
{% endfor %}
</ul>
</div>

<div id="tocwrapper">
<strong>Table of Contents</strong>
<div id="toc">
</div>
</div>

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
- Do we want to differentiate the top level, optional `.name`, with the nested, required `.credentialSubject.achievement.name`? If so, what would the difference be? Do we want the top level `.name` at all?

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
         - SBU
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
| **Program Information**                  |                        |                     |                            |
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

Three variants are worked out as examples for each type:

- **Full** - All mandatory and optional fields are filled in.
- **Minimal** - Only mandatory fields are filled in.
- **Embedded** - All mandatory fields are filled in. All optional fields with references to images are filled in. All images are included in the payload as base64 data URLs.

For MBO we only provide the full version, for no other reason than that managing six more
variants is too much work.

We provide the different versions to check how the various wallets, verifiers and issuers
handle the attributes:

- Embedded, to check how/if wallets, verifiers and issuers deal with embedded images and therefore large credentials.
- Minimal, so that wallets and verifiers have a reference of what attributes an Educredential will always carry.
- Full, so that wallets and verifiers have a reference of what attributes they might expect and should handle eventually.

## Evidence

One example shows how [an "evidence"](https://www.imsglobal.org/spec/ob/v3p0/#evidence) can be included in the credential. The example with an evidence is [mbob_zw_ssb_microcredential_full.json](./mbob_zw_ssb_microcredential_full.json).

Both [the VC data model spec](https://www.w3.org/TR/vc-data-model-2.0/#evidence) and [the OBv3 spec](https://www.imsglobal.org/spec/ob/v3p0/#evidence) have an "evidence" entry in the spec.
In both the VC data model and the OBv3 spec it lives at the JSON path `.evidence[]`. The structure and fields overlap, but OBv3 defines some optional extra fields. The VC data model spec 
has mechanisms, with fields, to ensure [Integrity of Related Resources](https://www.w3.org/TR/vc-data-model-2.0/#integrity-of-related-resources).

We define all fields from the OBv3 spec with one additional field
`digestMultibase` from the VC data model spec. This is a multibase encoded
digest of the evidence, which can be used to verify the integrity of the
evidence.

**NOTE**: (@TODO) We don't have automation in place to calculate the digestMultibase, so it is a dummy value in the examples.


## Markdown

OBv3 allows Markdown in many data fields, without specifying which subset or variant.

> Markdown 	A String that may contain Markdown.

https://www.imsglobal.org/spec/ob/v3p0/#org.1edtech.ob.v3p0.derived.markdown.class

We limit this in [markdown.md](./markdown.md). This subset is therefore not backward compatible with OBv3, which still allows code, links, tables, etc. We further restrict it for OBv3. Elements not detailed in `markdown.md` are therefore not allowed.

## Validity

All \_full versions have a validFrom and a validUntil, which are hardcoded to make them valid for 5 years starting from 30 August 2024.

## URLs

Images hosted at https://raw.githubusercontent.com/ e.g. https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/images/boerderijdieren.jpg

Contexts hosted at contexts.example.com, e.g. https://contexts.example.com/learning-outcome-extension.json

## IDS

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
<!-- managed_by_embed -->
<!-- /managed_by_embed -->
