<?php
$id = $_POST['id'];
$checked = $_POST['checked'];

try
{
	$db = new PDO('mysql:host=localhost;dbname=map;charset=utf8', 'root', 'Zekhff@2020');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}

$markersStatement = $db->prepare('UPDATE `markers` SET `checked` = '. $checked .' WHERE `markers`.`id` = ' . $id);
$markersStatement->execute();



?>