let map;
var markersJSON = [{"id":"0","0":"0","name":"Noa\\'s home","1":"Noa\\'s home","description":"description","2":"description","lat":"43.561309814453125","3":"43.561309814453125","lng":"7.009881973266602","4":"7.009881973266602","checked":"1","5":"1"},{"id":"1","0":"1","name":"Palais des festival","1":"Palais des festival","description":"description","2":"description","lat":"43.550830491576875","3":"43.550830491576875","lng":"7.018419396208895","4":"7.018419396208895","checked":"0","5":"0"},{"id":"2","0":"2","name":"POV : Le suquet","1":"POV : Le suquet","description":"description","2":"description","lat":"43.550500466787035","3":"43.550500466787035","lng":"7.010606629224014","4":"7.010606629224014","checked":"0","5":"0"},{"id":"3","0":"3","name":"La croisette, luxury stores : beggining","1":"La croisette, luxury stores : beggining","description":"description","2":"description","lat":"43.55095491474537","3":"43.55095491474537","lng":"7.019211625968169","4":"7.019211625968169","checked":"0","5":"0"},{"id":"4","0":"4","name":"POV: Nice castle","1":"POV: Nice castle","description":"take the elevator, listed bellow","2":"take the elevator, listed bellow","lat":"43.69595422587863","3":"43.69595422587863","lng":"7.279675639656906","4":"7.279675639656906","checked":"0","5":"0"},{"id":"5","0":"5","name":"Elevator : Nice castle","1":"Elevator : Nice castle","description":"description","2":"description","lat":"43.69442775152746","3":"43.69442775152746","lng":"7.279353690763961","4":"7.279353690763961","checked":"0","5":"0"}]

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.552847, lng: 7.017369 },
    zoom: 13,
  });

  $('#menu').append('<li id=0 class="mdc-list-item"><div class="mdc-form-field"><div class="mdc-checkbox"><input checked type="checkbox" onchange="doalert(this)" class="mdc-checkbox__native-control" id=0 /> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/></svg><div class="mdc-checkbox__mixedmark"></div></div><div class="mdc-checkbox__ripple"></div></div></div><span class="mdc-list-item__ripple"></span><span class="mdc-list-item__text" href="#" title="Noa\'s home"><span class="mdc-list-item__primary-text"> Noa\'s home </span><span class="mdc-list-item__secondary-text"> description </span></span></li>');
    var marker = new google.maps.Marker({
      position: { 
          lat: 43.561309814453125, 
          lng: 7.009881973266602},
      map,
      title: 'Noa\'s home',
    });$('#menu').append('<li id=1 class="mdc-list-item"><div class="mdc-form-field"><div class="mdc-checkbox"><input   type="checkbox" onchange="doalert(this)" class="mdc-checkbox__native-control" id=1 /> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/></svg><div class="mdc-checkbox__mixedmark"></div></div><div class="mdc-checkbox__ripple"></div></div></div><span class="mdc-list-item__ripple"></span><span class="mdc-list-item__text" href="#" title="Palais des festival"><span class="mdc-list-item__primary-text"> Palais des festival </span><span class="mdc-list-item__secondary-text"> description </span></span></li>');
    var marker = new google.maps.Marker({
      position: { 
          lat: 43.550830491576875, 
          lng: 7.018419396208895},
      map,
      title: 'Palais des festival',
    });$('#menu').append('<li id=2 class="mdc-list-item"><div class="mdc-form-field"><div class="mdc-checkbox"><input   type="checkbox" onchange="doalert(this)" class="mdc-checkbox__native-control" id=2 /> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/></svg><div class="mdc-checkbox__mixedmark"></div></div><div class="mdc-checkbox__ripple"></div></div></div><span class="mdc-list-item__ripple"></span><span class="mdc-list-item__text" href="#" title="POV : Le suquet"><span class="mdc-list-item__primary-text"> POV : Le suquet </span><span class="mdc-list-item__secondary-text"> description </span></span></li>');
    var marker = new google.maps.Marker({
      position: { 
          lat: 43.550500466787035, 
          lng: 7.010606629224014},
      map,
      title: 'POV : Le suquet',
    });$('#menu').append('<li id=3 class="mdc-list-item"><div class="mdc-form-field"><div class="mdc-checkbox"><input   type="checkbox" onchange="doalert(this)" class="mdc-checkbox__native-control" id=3 /> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/></svg><div class="mdc-checkbox__mixedmark"></div></div><div class="mdc-checkbox__ripple"></div></div></div><span class="mdc-list-item__ripple"></span><span class="mdc-list-item__text" href="#" title="La croisette, luxury stores : beggining"><span class="mdc-list-item__primary-text"> La croisette, luxury stores : beggining </span><span class="mdc-list-item__secondary-text"> description </span></span></li>');
    var marker = new google.maps.Marker({
      position: { 
          lat: 43.55095491474537, 
          lng: 7.019211625968169},
      map,
      title: 'La croisette, luxury stores : beggining',
    });$('#menu').append('<li id=4 class="mdc-list-item"><div class="mdc-form-field"><div class="mdc-checkbox"><input   type="checkbox" onchange="doalert(this)" class="mdc-checkbox__native-control" id=4 /> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/></svg><div class="mdc-checkbox__mixedmark"></div></div><div class="mdc-checkbox__ripple"></div></div></div><span class="mdc-list-item__ripple"></span><span class="mdc-list-item__text" href="#" title="POV: Nice castle"><span class="mdc-list-item__primary-text"> POV: Nice castle </span><span class="mdc-list-item__secondary-text"> take the elevator, listed bellow </span></span></li>');
    var marker = new google.maps.Marker({
      position: { 
          lat: 43.69595422587863, 
          lng: 7.279675639656906},
      map,
      title: 'POV: Nice castle',
    });$('#menu').append('<li id=5 class="mdc-list-item"><div class="mdc-form-field"><div class="mdc-checkbox"><input   type="checkbox" onchange="doalert(this)" class="mdc-checkbox__native-control" id=5 /> <div class="mdc-checkbox__background"><svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24"><path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"/></svg><div class="mdc-checkbox__mixedmark"></div></div><div class="mdc-checkbox__ripple"></div></div></div><span class="mdc-list-item__ripple"></span><span class="mdc-list-item__text" href="#" title="Elevator : Nice castle"><span class="mdc-list-item__primary-text"> Elevator : Nice castle </span><span class="mdc-list-item__secondary-text"> description </span></span></li>');
    var marker = new google.maps.Marker({
      position: { 
          lat: 43.69442775152746, 
          lng: 7.279353690763961},
      map,
      title: 'Elevator : Nice castle',
    });

  document.querySelectorAll('.mdc-list-item').forEach(item => {
    item.addEventListener('click', event => {
      //handle click
      var idclick = item.id;
      var allLi = document.getElementsByClassName("mdc-list-item");
      for (var i = 0; i < allLi.length; i++) {
          allLi[i].classList.remove("clicked");
      }
      item.classList.add("clicked");
      var locationB = {
        lat: Number(markersJSON[idclick].lat), 
        lng: Number(markersJSON[idclick].lng)
      }
      
      map.setCenter(locationB);
      map.setZoom(15)
    })
  })

  document.querySelectorAll('mdc-checkbox__native-control').forEach(item => {
    item.addEventListener('click', event => {
      //handle click
      var idclick = item.id;
      
  })

})}

function updateCheck(checkboxElem) {

    $.post('src/update.php',
    {
        id: checkboxElem.id,
        checked: checkboxElem.checked
    }, function(data) {
        alert(data);
});
}