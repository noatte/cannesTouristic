<?php
try
{
	$db = new PDO('mysql:host=zqyqouimaster.mysql.db;dbname=zqyqouimaster;charset=utf8', 'zqyqouimaster', 'Zekhff2020');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}

$markersStatement = $db->prepare('SELECT * FROM markers');
$markersStatement->execute();
$markers = $markersStatement->fetchAll();
$markersJSON = json_encode($markers);

echo("let map;
var markersJSON = ".$markersJSON."

function initMap() {
  const map = new google.maps.Map(document.getElementById(\"map\"), {
    center: { lat: 43.552847, lng: 7.017369 },
    zoom: 13,
  });

  ");

  foreach ($markers as $marker) {
    if ($marker['checked']) {
      $ischecked = "checked";
    }
    else {
      $ischecked =" ";
    }
    $id = $marker['id'];
    $name = $marker['name'];
    $desc = $marker['description'];
    $lat = $marker['lat'];
    $lng = $marker['lng'];

    echo("$('#menu').append('<li id=" . $marker['id'] . " class=\"mdc-list-item\"><div class=\"mdc-form-field\"><div class=\"mdc-checkbox\"><input " . $ischecked . " type=\"checkbox\" onchange=\"updateCheck(this)\" class=\"mdc-checkbox__native-control\" id=" . $marker['id'] . " /> <div class=\"mdc-checkbox__background\"><svg class=\"mdc-checkbox__checkmark\" viewBox=\"0 0 24 24\"><path class=\"mdc-checkbox__checkmark-path\" fill=\"none\" d=\"M1.73,12.91 8.1,19.28 22.79,4.59\"/></svg><div class=\"mdc-checkbox__mixedmark\"></div></div><div class=\"mdc-checkbox__ripple\"></div></div></div><span class=\"mdc-list-item__ripple\"></span><span class=\"mdc-list-item__text\" href=\"#\" title=\"" . $name . "\"><span class=\"mdc-list-item__primary-text\"> " . $name . " </span><span class=\"mdc-list-item__secondary-text\"> " . $desc . " </span></span></li>');
    var marker = new google.maps.Marker({
      position: { 
          lat: ". $lat .", 
          lng: ". $lng ."},
      map,
      title: '". $name ."',
    });");

  }

  echo("

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

");

?>