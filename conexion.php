<?php
$host = 'mattprofe.com.ar';
$db = '3881';
$user = '3881';
$password = 'caballo.manzano.camion';

$conexion = mysqli_connect($host, $user, $password, $db);

if (!$conexion) {
    die('Error al conectar a la base de datos: ' . mysqli_connect_error());
}
?>
