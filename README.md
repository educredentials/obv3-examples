# Examples of OpenBadges v3 Credentials for Edubadges

See online at http://www.educredentials.eu/obv3-examples/

Goes with the wiki at [./examples.md](./examples.md). Document
[./markdown.md](./markdown.md) explains formatting of the data inside the
credential attributes.

This README describes the technical details. The examples.md describes the actual model and examples.

[![Test](https://github.com/educredentials/obv3-examples/actions/workflows/test.yml/badge.svg)](https://github.com/educredentials/obv3-examples/actions/workflows/test.yml)

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
