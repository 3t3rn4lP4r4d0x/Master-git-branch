console.log('js loaded...');

$('#form-search button').on('click', function(e) {
  e.preventDefault()
  var queryItem = $('#form-search input').val()
  var urlSearchBeers = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + queryItem

  $.ajax({
    url: urlSearchBeers
  })
  .then( function( aBeers ) {
    var aOptionsBeers = aBeers.map( function( oBeer ) {
      return '<option value="' + oBeer.id + '">' + oBeer.name + '</option>'
    })
    var htmlSelect = '<option disabled selected>Select a Beer</option>' + aOptionsBeers.join('')


    $('#list-beers select').html( htmlSelect )
    $('#list-beers').removeClass("hidden")

  })

})

$('#list-beers select').on('change', function() {

  var idBeerSelected = $(this).val()
  var urlDetailsBeer = 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + idBeerSelected

  $.ajax({
    url: urlDetailsBeer
  })
  .then( function( oDetailsBeer ) {

    var beerName = oDetailsBeer.name
    var beerDescription = oDetailsBeer.description || "Description not available"
    var urlImage = oDetailsBeer.labels ? oDetailsBeer.labels.medium : 'img/404-beer-not-found-hoodie.png'

    $("#details-beer h1").text(beerName)
    $("#details-beer p").text(beerDescription)


    $("#details-beer img").attr('src', urlImage)

    $('#details-beer').removeClass('hidden')

  })

})


