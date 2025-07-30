This document is an export of [Opmaken text badge
class](https://wiki.surfnet.nl/display/Edubadges/Opmaken+tekst+badge+class) from the internal wiki.
It was subsequently modified to be used for OBv3.

Markdown formatting follows the [Formatting text in the Open Education API](https://openonderwijsapi.nl/#/technical/formatting-text?id=formatting-text), but 
is further restricted.

## Questions

- What to do with markdown that we don't allow, render? filter? error message?
- Do we want to expand the schema for this? Is that possible? It would probably become an extremely complex
  regex.

## Assumptions
 
See the public Badge Class at: https://www.edubadges.nl/public/PXWLW-NaQT6G1OTutttnBw

### Simple Markdown examples

Edubadges supports a basic formatting language called 'Markdown'
which allows you to add some basic formatting functions to
your edubadges Badge Class.

The following table shows the markdown commands you can
use and the result of how your browser will display this markdown element:

## Headers
```
# h1 Header
## h2 Header
### h3 Header
#### h4 Header
##### h5 Header
###### h6 Header
```
# h1 Header
## h2 Header
### h3 Header
#### h4 Header
##### h5 Header
###### h6 Header

## Line breaks

```
Here is a line for us to start with.

>

This line is separated
from the previous one by a ">"
(greater than sign, without the quotation marks)
so that it becomes a *separate paragraph*.
>
>
>
Typing more > signs doesn't actually result in more empty lines.
```

Here is a line for us to start with.
>
This line is separated from the previous one by a ">" (greater than sign,
without the quotation marks) so that it becomes a *separate paragraph*.
>
>
>
Typing more > signs doesn't actually result in more empty lines.

## Horizontal lines

```
---
```

---

## Emphasis
```
**This is bold text**

*This is italic text*

~~This is strikethrough text~~
```

**This is bold text**

*This is italic text*

~~This is strikethrough text~~

## Blockquotes

```
> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between the arrows.
```

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between the arrows.

## Unordered lists

```
+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Changing the marker character forces start of new list:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!
```

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Changing the marker character forces start of new list:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

## Ordered lists

```
1. Create a list by starting a line with `1.`
2. Second item
3. Third item
4. Very easy!
```

1. Create a list by starting a line with `1.`
2. Second item
3. Third item
4. Very easy!