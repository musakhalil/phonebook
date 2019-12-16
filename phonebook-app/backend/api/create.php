<?php
require 'db.php';

// Get the posted data
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{
  // Extract the data
  $request = json_decode($postdata);


  // Validate
  if(trim($request->Number) === '' || trim($request->fName) === ''|| trim($request->lName) === '')
  {
    return http_response_code(400);
  }

  // Sanitize
  $fName = mysqli_real_escape_string($con, trim($request->fName));
  $lName = mysqli_real_escape_string($con, trim($request->lName));
  $number = mysqli_real_escape_string($con, trim($request->Number));


  // Create statement
  $sql = "INSERT INTO `phbk_contacts`(`ID`,`fName`,`lName`,`Phone`) VALUES (null,'{$fName}','{$lName}','{$number}')";

  if(mysqli_query($con,$sql))
  {
    http_response_code(201);
    $contact = [
      'ID' => mysqli_insert_id($con),
      'fName' => $fName,
      'lName' => $lName,
      'Number' => $number
    ];
    // Return inserted contact
    echo json_encode($contact);
  }
  else
  {
    http_response_code(422);
  }
}