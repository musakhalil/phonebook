<?php
require 'db.php';

// Get the posted data
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data
  $request = json_decode($postdata);
  print_r($request);
  // Validate data
  if ((int)$request->ID < 1 || trim($request->fName) == '' || trim($request->lName) == '' || trim($request->Number) == '') {
    return http_response_code(400);
  }

  // Sanitize data
  $id = mysqli_real_escape_string($con, (int)$request->ID);
  $fName = mysqli_real_escape_string($con, trim($request->fName));
  $lName = mysqli_real_escape_string($con, trim($request->lName));
  $number = mysqli_real_escape_string($con, trim($request->Number));

  // Update statement
  $sql = "UPDATE `phbk_contacts` SET `fName`='$fName',`lName`='$lName',`Phone`='$number' WHERE `ID` = '{$id}' LIMIT 1";

  if(mysqli_query($con, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}