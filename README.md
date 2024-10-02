# Examples of OpenBadges v3 Credentials for Edubadges

Goes with the wiki at [./examples.md](./examples.md). Document
[./markdown.md](./markdown.md) explains formatting of the data inside the
credential attributes.

This README describes the technical details. The examples.md describes the actual model and examples.

[![Test](https://github.com/educredentials/obv3-examples/actions/workflows/test.yml/badge.svg)](https://github.com/educredentials/obv3-examples/actions/workflows/test.yml)

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
- [ ] Investigate if we want explicit validation in schema for EQF level aligment. Now we merely require *an* alignment, not specfically an ext:EQF alignment. We could enforce spec types and values in the schema?
