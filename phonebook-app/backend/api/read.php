<?php
/**
 * Returns the list of contacts
 */
require 'db.php';

// Validate and sanitize the id
$id = ($_GET['ID'] !== null && (int)$_GET['ID'] > 0)? mysqli_real_escape_string($con, (int)$_GET['ID']) : false;

$contacts = [];

// Check if ID is sent as if it is sent, a single contact will be returned
if(!$id) {
  $sql = "SELECT ID, fName, lName, Phone FROM phbk_contacts ORDER BY fName ASC";
} else {
  $sql = "SELECT ID, fName, lName, Phone FROM phbk_contacts WHERE ID=$id";
}

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  // Store results in array
  while($row = mysqli_fetch_assoc($result))
  {
    $contacts[$i]['ID'] = $row['ID'];
    $contacts[$i]['fName'] = $row['fName'];
    $contacts[$i]['lName'] = $row['lName'];
    $contacts[$i]['Number'] = $row['Phone'];
    $i++;
  }
  // Return json result
  echo json_encode($contacts);
}
else
{
  http_response_code(404);
}