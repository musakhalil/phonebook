<?php

require 'db.php';

// Validate and sanitize the id
$id = ($_GET['ID'] !== null && (int)$_GET['ID'] > 0)? mysqli_real_escape_string($con, (int)$_GET['ID']) : false;

// Check if ID is not sent and throw an error
if(!$id)
{
  return http_response_code(400);
}

// Delete statement
$sql = "DELETE FROM `phbk_contacts` WHERE `ID` ='{$id}' LIMIT 1";

if(mysqli_query($con, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}