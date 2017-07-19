 $('#getRandomProfile').on('click', function (e) {
   e.preventDefault()
     /* Act on the event */

   $.ajax({
     url: 'https://randomuser.me/api/',
     dataType: 'json'
   })
         .then(function (data) {
           console.log(data)

           var registration = data.results['0'].registered
           $('.registration-date').text(registration)

           var DOB = data.results['0'].dob
           $('.born-date').text(DOB)

           var Nationality = data.results['0'].nat
           $('.nationality').text(Nationality)

           var gender = data.results['0'].gender
           $('.gender').text(gender)

           var homeAdress = data.results['0'].location.city + ', ' + data.results['0'].location.street
           $('#HA').text(homeAdress)

           var email = data.results['0'].email
           $('.email').text(email)

           var phone_number = data.results['0'].phone
           $('.phone').text(phone_number)

           var image = data.results['0'].picture.large
           $('#image').attr('src', image)
         })
 })

 // var RegisteredDateHtml = astringRegisteredDate.join('')
 // $('.registration-date').html(htmlSelect)

 // console.log(RegisteredDateHtml)
 // })
