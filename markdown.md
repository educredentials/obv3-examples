Dit document is een export van [Opmaken text badge
class](https://wiki.surfnet.nl/display/Edubadges/Opmaken+tekst+badge+class) uit de interne wiki.

Ze is daarna aangepast om voor de OBv3 ingezet te kunnen worden.


## Vragen

- Wat te doen met markdown die we niet toestaan, renderen? filteren? foutmelding?
- Willen we het schema hiervoor uitbreiden? Kan dat? Het zou vermoedelijk een vreselijk complexe
  regex worden.

## Aannames
 
Zie de openbare Badge Class op: https://www.edubadges.nl/public/PXWLW-NaQT6G1OTutttnBw

### Simpele Markdown voorbeelden

Edubadges ondersteunt een basis opmaak taal genaamd 'Markdown'
welke je in staat stelt om enkele basis opmaak functies toe te
voegen in je edubadges Badge Class.

De volgende tabel toont de markdown commando's die je kan
gebruiken en het resultaat hoe je browser dit markdown element
zal tonen:

## Kopteksten
```
# h1 Koptekst
## h2 Koptekst
### h3 Koptekst
#### h4 Koptekst
##### h5 Koptekst
###### h6 Koptekst
```
# h1 Koptekst
## h2 Koptekst
### h3 Koptekst
#### h4 Koptekst
##### h5 Koptekst
###### h6 Koptekst

## Regelafbrekingen

```
Hier is een regel voor ons om mee te beginnen.

>

Deze regel wordt gescheiden
van de vorige door een ">"
(groter dan teken, zonder de aanhalingstekens)
zodat het een *aparte paragraaf* wordt.
>
>
>
Het intikken van meer > tekens levert echte r niet meer lege regels op.
```

Hier is een regel voor ons om mee te beginnen.
>
Deze regel wordt gescheiden van de vorige door een ">" (groter dan teken,
zonder de aanhalingstekens) zodat het een *aparte paragraaf* wordt.
>
>
>
Het intikken van meer > tekens levert echte r niet meer lege regels op.

## Horizontale lijnen

```
---
```

---

## Nadruk
```
**Dit is vetgedrukte tekst**

*Dit is cursieve tekst*

~~Dit is doorgehaalde tekst~~
```

**Dit is vetgedrukte tekst**

*Dit is cursieve tekst*

~~Dit is doorgehaalde tekst~~

## Blockquotes

```
> Blockquotes kunnen ook genest worden...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between the arrows.
```

> Blockquotes kunnen ook genest worden...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between the arrows.

## Ongeordende lijsten

```
+ Maak een lijst door een regel te beginnen met `+`, `-`, of `*`
+ Sub-lijsten worden gemaakt door 2 spaties in te laten springen:
  - Verandering van markeringsteken forceert start van nieuwe lijst:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Zeer gemakkelijk!
```

+ Maak een lijst door een regel te beginnen met `+`, `-`, of `*`
+ Sub-lijsten worden gemaakt door 2 spaties in te laten springen:
  - Verandering van markeringsteken forceert start van nieuwe lijst:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Zeer gemakkelijk!

## Geordende lijsten

```
1. Maak een lijst door een regel te beginnen met `1.`
2. Tweede item
3. Derde item
4. Zeer gemakkelijk!
```

1. Maak een lijst door een regel te beginnen met `1.`
2. Tweede item
3. Derde item
4. Zeer gemakkelijk!
