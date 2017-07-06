// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".3

function translate (text) {
  var currentChar
  var translatedText = ''

  for (var i = 0; i < text.length; i++) {
    currentChar = text[i]
    if (isVowel(currentChar)) {
      translatedText += currentChar
    } else {
      translatedText += currentChar + 'o' + currentChar
    }
  }

  return translatedText
}

function isVowel (char) {
  return ['a', 'e', 'i', 'o', 'u', ' '].indexOf(char) !== -1
}

translate('hello')
