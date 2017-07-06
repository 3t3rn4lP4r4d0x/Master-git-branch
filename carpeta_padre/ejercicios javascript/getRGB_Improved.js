/* Way 1 */
function getRGB(hex) {

  var color = '';

  switch (hex) {
    case '#000000':
      color = 'black'
      break
    case '#FFFFFF':
      color = 'white'
      break
    case '#FF0000':
      color = 'red'
      break
    case '#00FF00':
      color = 'green'
      break
    case '#0000FF':
      color = 'blue'
      break
  }

  var red = parseInt(hex.slice(1,3), 16)
  var green = parseInt(hex.slice(3,5), 16)
  var blue = parseInt(hex.slice(5,7), 16)

  return 'rgb(' + red + ',' + green + ',' + blue + ') ' + color

}

/* Way 2 */
function getRGB(hex) {

  var color = '';
  var colorsTable = {
    '#000000' : 'black',
    '#FFFFFF' : 'white',
    '#FF0000' : 'red',
    '#00FF00' : 'green',
    '#0000FF' : 'blue'
  };

  if ( colorsTable[hex] ) {
    color = colorsTable[hex]
  }
  var red = parseInt(hex.slice(1,3), 16)
  var green = parseInt(hex.slice(3,5), 16)
  var blue = parseInt(hex.slice(5,7), 16)

  return 'rgb(' + red + ',' + green + ',' + blue + ') ' + color

}

/* Way 3 */
function getRGB(hex) {

  var colorsTable = {
    '#000000' : 'black',
    '#FFFFFF' : 'white',
    '#FF0000' : 'red',
    '#00FF00' : 'green',
    '#0000FF' : 'blue'
  };

  var color = colorsTable[hex] || ''
  var red = parseInt(hex.slice(1,3), 16)
  var green = parseInt(hex.slice(3,5), 16)
  var blue = parseInt(hex.slice(5,7), 16)

  return 'rgb(' + red + ',' + green + ',' + blue + ') ' + color

}

