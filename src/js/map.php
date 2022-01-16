<?php 

echo("let map;

function initMap() {
  const map = new google.maps.Map(document.getElementById(\"map\"), {
    center: { lat: 43.552847, lng: 7.017369 },
    zoom: 13,
  });
  
  var jsonFile = JSON.parse(loadFile(\"src/map.json\"));

  var jsonLength = jsonFile.markers.length;

  for (let n = 0; n < jsonLength; n++) {

    $('#menu').append('<li id=\"'+n+'\" class=\"mdc-list-item\"><div class=\"mdc-form-field\"><div class=\"mdc-checkbox\"><input type=\"checkbox\" class=\"mdc-checkbox__native-control\" id=\"'+n+'\"/> <div class=\"mdc-checkbox__background\"><svg class=\"mdc-checkbox__checkmark\" viewBox=\"0 0 24 24\"><path class=\"mdc-checkbox__checkmark-path\" fill=\"none\" d=\"M1.73,12.91 8.1,19.28 22.79,4.59\"/></svg><div class=\"mdc-checkbox__mixedmark\"></div></div><div class=\"mdc-checkbox__ripple\"></div></div></div><span class=\"mdc-list-item__ripple\"></span><span class=\"mdc-list-item__text\" href=\"#\" title=\"' + jsonFile.markers[n].name + '\"><span class=\"mdc-list-item__primary-text\">'+ jsonFile.markers[n].name +'</span><span class=\"mdc-list-item__secondary-text\">'+ jsonFile.markers[n].description +'</span></span></li>');

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
      var allLi = document.getElementsByClassName(\"mdc-list-item\");
      for (var i = 0; i < allLi.length; i++) {
          allLi[i].classList.remove(\"clicked\");
      }
      item.classList.add(\"clicked\");
      var locationB = {
        lat: jsonFile.markers[idclick].lat, 
        lng: jsonFile.markers[idclick].lng
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

})

function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open(\"GET\", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
  }

}")

?>