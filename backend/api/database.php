<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

define('DB_HOST', '127.0.0.1');
//define('DB_USER', 'root');
//define('DB_PASS', 'P3t3r12');
define('DB_USER', 'caddyBiker');
define('DB_PASS', '4V8q0A^4}cLj');
define('DB_NAME', 'BIKE_MAINT');

function connect()
{
  $connect = mysqli_connect(DB_HOST ,DB_USER ,DB_PASS ,DB_NAME);

  if (mysqli_connect_errno($connect)) {
    die("Failed to connect:" . mysqli_connect_error());
  }

  mysqli_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();
