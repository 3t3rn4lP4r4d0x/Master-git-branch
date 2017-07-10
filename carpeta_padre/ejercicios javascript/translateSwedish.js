// Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.

// var text = 'merry christmas and happhy new year'

/* Way 1 */
function translateSwedish (text) {
  var dictionary = {
    'merry': 'god',
    'christmas': 'jul',
    'and': 'och',
    'happy': 'gott',
    'new': 'nytt',
    'year': 'år'
  }
  var aWords = text.split(' ')
  var translatedText = ''

  aWords.forEach( function(word) {
    if ( dictionary.hasOwnProperty(word) ) {
      translatedText+= dictionary[word] + ' '
    }
  })

  return translatedText;
}

/* Way 2 */
function translateSwedish (text) {

  var dictionary = {
    'merry': 'god',
    'christmas': 'jul',
    'and': 'och',
    'happy': 'gott',
    'new': 'nytt',
    'year': 'år'
  }
  var translatedText = text
  var regExpWord;

  for (word in dictionary) {
    regExpWord = new RegExp(word, "g")
    translatedText = translatedText.replace( regExpWord, dictionary[word] )
  }
  return translatedText
}

/* Way 3 */
function translateSwedish (text) {

  var dictionary = {
    merry: 'god',
    christmas: 'jul',
    and: 'och',
    happy: 'gott',
    new: 'nytt',
    year: 'år'
  }

  return text
          .split(' ')
          .map( function(word) {
            return dictionary[word]
          })
          .join(' ')

}
