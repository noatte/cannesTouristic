let map;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.552847, lng: 7.017369 },
    zoom: 10,
  });

  var jsonFile = JSON.parse(loadFile("src/map.json"));

  var jsonLength = jsonFile.markers.length;

  for (let n = 0; n < jsonLength; n++) {

    $('#menu').append('<li id="'+n+'" class="mdc-list-item"><span class="mdc-list-item__ripple"></span><span class="mdc-list-item__text" href="#" title="' + jsonFile.markers[n].name + '"><span class="mdc-list-item__primary-text">'+ jsonFile.markers[n].name +'</span><span class="mdc-list-item__secondary-text">Secondary text</span></span></li>');

    new google.maps.Marker({
        position: { 
            lat: jsonFile.markers[n].lat, 
            lng: jsonFile.markers[n].lng},
        map,
        title: jsonFile.markers[n].name,
      });

  }

  document.querySelectorAll('.mdc-list-item').forEach(item => {
    item.addEventListener('click', event => {
      //handle click
      var idclick = item.id;
      var locationB = {
        lat: jsonFile.markers[idclick].lat, 
        lng: jsonFile.markers[idclick].lng
      }

      map.setCenter(locationB),
      map.setZoom(15)
    })
  })

}

function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
  }