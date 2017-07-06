// isVowel() function

// Write a function that takes a character (i.e. a string of length 1) and retru true if it is a vowel, false otherwise.

/* Way 1 */
function isVowel( char ) {
  switch (char) {
    case 'a':
      return true;
      break;
    case 'e':
      return true;
      break;
    case 'i':
      return true;
      break;
    case 'o':
      return true;
      break;
    case 'u':
      return true;
      break;
    default:
      return false;
      break;
  }
}

/* Way 2 */

function isVowel( char ) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var comparison = vowels.indexOf(char)
  if (comparison == -1) {
    return false
  }
  else {
    return true
  }
}

/* Way 3 */
function isVowel( char ) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(char) !== -1 ? true : false;
}

/* Way 4 */
function isVowel( char ) {
  return ['a', 'e', 'i', 'o', 'u'].includes(char);
}

/* Way 5 */
function isVowel( char ) {
  return /[aeiou]/.test(char);
}


