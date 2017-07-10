// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

/* Way 1 */
function charFreq (text) {
  var oFrequency = {}

  text.split('').forEach(function (sChar) {
    if (oFrequency[sChar]) oFrequency[sChar]++
    else oFrequency[sChar] = 1
  })

  return oFrequency
}

/* Way 2 */
function charFreq (text) {
  return text.split('').reduce(function (oFrequency, sChar) {
    if (oFrequency[sChar]) oFrequency[sChar]++
    else oFrequency[sChar] = 1
    return oFrequency
  }, {})
}
