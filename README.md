# Examples of OpenBadges v3 Credentials for Edubadges

Goes with the wiki at [./examples.md](./examples.md).

This README describes the technical details. The examples.md describes the actual model and examples.

[![Test](https://github.com/educredentials/obv3-examples/actions/workflows/test.yml/badge.svg)](https://github.com/educredentials/obv3-examples/actions/workflows/test.yml)

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

# Update examples json

The examples.md file can be updated after json files were added or remove with

```bash
make
```

This calls shell scripts to remove old json and add new json in a template.

# Contexts

In ./contexts/ we collect all extensions descriptions for use in @context.

These can be referenced on github through urls such as

https://raw.githubusercontent.com/educredentials/obv3-examples/refs/heads/main/contexts/some-context-extension.json

# Reference

In ./ref we collect reference files and data.

* ./ref/full_ex.json - https://www.imsglobal.org/spec/ob/v3p0/#example-complete-openbadgecredential

# Test

We test the files in a CI against the following schema files:

* https://purl.imsglobal.org/spec/ob/v3p0/schema/json/ob_v3p0_achievementcredential_schema.json

These files are downloaded and committed to the repo, so might get outdated.

It uses [boon](https://github.com/santhosh-tekuri/boon) which we compile in a [private docker image educredentials/boon](https://github.com/educredentials/obv3-examples/pkgs/container/boon)

You can run this image locally too. 

# TODOs

- [x] Determine if we want to port `LearningOutcome` to `Result`/`resultDescription`. See Edubadges-Report-10.0.pdf p23
- [ ] Determine how to handle a `creator` if at all. See Edubadges-Report-10.0.pdf p21,p27,p31
- [x] find out of the credentialSubject.id is the same as the top-level id?
- [x] Language Extension adds a name that's ambigous and is a primitive in OBv3. rename it? re-use an obv3 attribute?
- [x] Identity Field: how is that done in OBv2? Can we re-use an OBv3 concept for this?
- [ ] Fetch contexts from https://wiki.surfnet.nl/display/Edubadges/Specificatie+Metadatamodel+Edubadges and import as contexts in this project.
- [ ] Put on backlog: Add specific @context that describes our custom rules for obv3 badges, requiring additional fields for example.
- [ ] set up docker-compose to run this make/test easier, without having to fetch or install deps
