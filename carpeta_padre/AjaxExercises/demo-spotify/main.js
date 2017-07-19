var token = 'BQCnFyshg0v92xHaFGyQbXIT5tCGVL_jOjcxaQy-H0ORn_0dBPy-5V1Oy41LhTmhvNIlw_VhB_DIvARJzmBz-s25JjARiwJZPu6JOrS_pSd4OiRakyAbMWmzJXA-3TWWZk8B'

var urlSearchArtist = 'https://api.spotify.com/v1/search?type=artist&query=<%QUERY%>'
var urlAlbums = 'https://api.spotify.com/v1/artists/<%ID_ARTIST%>/albums'
var urlTracks = 'https://api.spotify.com/v1/albums/<%ID_ALBUM%>/tracks'

$('#search-artist button').on('click', function (e) {
  e.preventDefault()
  var queryArtist = $('#search-artist input').val()

  $.ajax({
    url: urlSearchArtist.replace('<%QUERY%>', queryArtist),
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
        .then(function (oData) {
          var htmlSelect = '<option disabled selected>Select an artist...</option>'
          var optionTemplate = '<option value="<%ID%>"><%NAME%></option>'

          var aOptionsArtists = oData.artists.items.map(function (oArtist) {
            return optionTemplate
                          .replace('<%ID%>', oArtist.id)
                          .replace('<%NAME%>', oArtist.name)
          })

          htmlSelect += aOptionsArtists.join('')

          $('#artists-selection select').html(htmlSelect)
          $('#artists-selection').removeClass('hidden')
        })
})

$('#artists-selection select').on('change', function () {
  var idArtistSelected = $(this).val()

  $.ajax({
    url: urlAlbums.replace('<%ID_ARTIST%>', idArtistSelected),
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
        .then(function (oData) {
          var htmlSelect = '<option disabled selected>Select an album...</option>'
          var optionTemplate = '<option value="<%ID%>"><%NAME%></option>'

          var aOptionsAlbums = oData.items.map(function (oAlbum) {
            return optionTemplate
                          .replace('<%ID%>', oAlbum.id)
                          .replace('<%NAME%>', oAlbum.name)
          })

          htmlSelect += aOptionsAlbums.join('')
          $('#albums-selection select').html(htmlSelect)

          $('#albums-selection').removeClass('hidden')
          $('#tracks-list').addClass('hidden')
        })
})

$('#albums-selection select').on('change', function () {
  var idAlbumSelected = $(this).val()

  $.ajax({

    url: urlTracks.replace('<%ID_ALBUM%>', idAlbumSelected),
    headers: {
      Authorization: 'Bearer ' + token
    }
  })
        .then(function (oData) {
          var liTemplate = '<li><a target="_blank" href="<%URL%>"><%NAME%></a></li>'
          var aLisTracks = oData.items.map(function (oTrack) {
            return liTemplate
                          .replace('<%URL%>', oTrack.preview_url)
                          .replace('<%NAME%>', oTrack.name)
          })

          $('#tracks-list ul').html(aLisTracks.join(''))
          $('#tracks-list').removeClass('hidden')
        })
})
