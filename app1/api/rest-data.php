<?php
// get the HTTP method, path and body of the request
header("Access-Control-Allow-Origin: *");
$method = $_SERVER['REQUEST_METHOD'];
// create SQL based on HTTP method
switch ($method) {
  case 'GET':
    $arr = [ ["title" => "KALEIDOSCOPE with 1", "hash"  => "31221", "data" => [ "likes" => 1000, "views" => "1000"]],
            ["title" => "KALEIDOSCOPE with 2", "hash"  => "31221", "data" => [ "likes" => 1000, "views" => "2000"]],
            ["title" => "KALEIDOSCOPE with 23", "hash"  => "31221", "data" => [ "likes" => 1000, "views" => "3000"]],
            ["title" => "KALEIDOSCOPE with 3", "hash"  => "31221", "data" => [ "likes" => 1000, "views" => "4000"]],
            ["title" => "KALEIDOSCOPE with 4", "hash"  => "31221", "data" => [ "likes" => 1000, "views" => "5000"]],
            ["title" => "KALEIDOSCOPE with 5", "hash"  => "31221", "data" => [ "likes" => 1000, "views" => "6000"]],
            ["title" => "KALEIDOSCOPE with 6", "hash"  => "31221", "data" => [ "likes" => 1000, "views" => "7000"]],


          ];
    echo json_encode($arr);
  case 'PUT':
    $sql = "update `$table` set $set where id=$key"; break;
  case 'POST':
    $sql = "insert into `$table` set $set"; break;
  case 'DELETE':
    $sql = "delete `$table` where id=$key"; break;
}
