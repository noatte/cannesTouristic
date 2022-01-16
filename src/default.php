<?php
try
{
	$db = new PDO('mysql:host=localhost;dbname=map;charset=utf8', 'root', 'Zekhff@2020');
}
catch (Exception $e)
{
        die('Erreur : ' . $e->getMessage());
}
?>