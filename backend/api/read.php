<?php
/**
 * Returns the list of bikes.
 */
require 'database.php';

// Extract, validate and sanitize the riderId.
$riderId = ($_GET['riderId'] !== null && (int)$_GET['riderId'] > 0)? mysqli_real_escape_string($con, (int)$_GET['riderId']) : false;

$bikes = [];
$sql = "SELECT ID, NAME, DESCRIPTION, MAKE, MODEL FROM BIKE WHERE `RIDER_ID` = '{$riderId}'";
// $sql = "SELECT ID, NAME, DESCRIPTION FROM BIKE";

if($result = mysqli_query($con,$sql)){
  $i = 0;
  while($row = mysqli_fetch_assoc($result)){
    $bikes[$i]['id'] = $row['ID'];
    $bikes[$i]['name'] = $row['NAME'];
    $bikes[$i]['description'] = $row['DESCRIPTION'];
    $bikes[$i]['make'] = $row['MAKE'];
    $bikes[$i]['model'] = $row['MODEL'];
    $i++;
  }

  echo json_encode($bikes);
} else {
  // echo $sql;
  http_response_code(404);
}
