## Strings

### `split`

```
var text = "we're very happy with the standard format, especially Gerard"
var words = text.split(' ')
words // [....]
```

### `slice`

```
var text = "we're very happy with the standard format, especially Gerard"
var pieceOfText = text.slice(6,16)
pieceOfText // "very happy"
```

### `indexOf`

```
var text = "we're very happy with the standard format, especially Gerard"
var positionStandard = text.indexOf('standard')
if (positionStandard === -1) {
    console.log("Does NOT contain 'standard'")
}
else {
    console.log("Does contain 'standard' at position " + positionStandard)
}
```

### `toUpperCase` && `toLowerCase`

```
var school = "SkylabCoders"
var uppercase = school.toUpperCase()
var lowercase = school.toLowerCase()
console.log( uppercase ) 
console.log( lowercase ) 
```

### `substring`

```
var companyName = 'Mozilla';
companyName.substring(0, 3)
companyName.substring(3)
companyName.substring(companyName.length - 2)
```