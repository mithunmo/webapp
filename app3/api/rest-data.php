<?php
// get the HTTP method, path and body of the request
header("Access-Control-Allow-Origin: *");
$method = $_SERVER['REQUEST_METHOD'];
// create SQL based on HTTP method
switch ($method) {
  case 'GET':
    $arr = [ ["Transaction" => "123523", "Amount"  => 31221, "details" => [ "date" => "02/12/2016", "party" => "HDFC" , "type" => "ecs"]],
            ["Transaction" => "2323txn12", "Amount"  => 60060, "details" => [ "date" => "02/12/2016", "party" => "SBI" , "type" => "ecs"]],
            ["Transaction" => "123yxnnx332", "Amount"  => 9000, "details" => [ "date" => "02/12/2016", "party" => "ICICI" , "type" => "ecs"]],
            ["Transaction" => "3123123", "Amount"  => 800, "details" => [ "date" => "02/12/2016", "party" => "HDFC" , "type" => "ecs"]],
            ["Transaction" => "312312", "Amount"  => 200, "details" => [ "date" => "02/12/2016", "party" => "HDFC" , "type" => "ecs"]],
            ["Transaction" => "31232131", "Amount"  => 100000, "details" => [ "date" => "02/12/2016", "party" => "SBM" , "type" => "ecs"]],
            ["Transaction" => "312312321", "Amount"  => 500000, "details" => [ "date" => "02/12/2016", "party" => "KOTAK" , "type" => "ecs"]],


          ];
    echo json_encode($arr);
  case 'PUT':
    //$sql = "update `$table` set $set where id=$key"; break;
  case 'POST':
    $sql = "insert into `$table` set $set"; break;
  case 'DELETE':
    $sql = "delete `$table` where id=$key"; break;
}
