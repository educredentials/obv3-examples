# Examples of OpenBadges v3 Credentials for Edubadges

Goes with the wiki at https://wiki.surfnet.nl/pages/viewpage.action?spaceKey=EWI&title=OB3+Credential+Examples

# Content of the examples

Examples are built from a context that follows a story.
It uses mock IDs that resemble a real ID.

## Story

Issuer: Naboo Theed University

Student: Padawan Ashoka Tano

Extracurriculair: Lightsaber Dueling Techniques
Reguliere: The Force and Its Applications (6 ECTS)
Microcredential: Jedi Mind Control and Advanced Meditation Practices

## URLs

Images hosted at static.example.com e.g. https://static.example.com/lightsaber.jpg

Contexts hosted at contexts.example.com e.g. https://contexts.example.com/learning-outcome-extension.json

## IDS

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

# TODOs

- [x] find out of the credentialSubject.id is the same as the top-level id?
- [x] Language Extension adds a name that's ambigous and is a primitive in OBv3. rename it? re-use an obv3 attribute?
- [x] Identity Field: how is that done in OBv2? Can we re-use an OBv3 concept for this?
