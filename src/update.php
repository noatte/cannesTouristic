<?php
$id = $_POST['id'];
$checked = $_POST['checked'];

try
{
	$db = new PDO('mysql:host=zqyqouimaster.mysql.db;dbname=zqyqouimaster;charset=utf8', 'zqyqoui', 'Zekhff2020');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}

try
{
$markersStatement = $db->prepare('UPDATE `markers` SET `checked` = '. $checked .' WHERE `markers`.`id` = ' . $id);
$markersStatement->execute();
echo("Your history has been saved");
}
catch (Exeption $e)
{
echo("Error : ".$e);
}




?>