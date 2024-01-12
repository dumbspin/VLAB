<?php
// send.php
session_start();
// Retrieve data from the GET request
// $data1 = 
// $data2 = isset($_GET['data2']) ? $_GET['data2'] : '';
// $data3 = isset($_GET['data3']) ? $_GET['data3'] : '';
// $data4 = isset($_GET['data4']) ? $_GET['data4'] : '';


$_SESSION['Vadded'] = isset($_GET['data3']) ? $_GET['data3'] : '';
$_SESSION['Result1'] = isset($_GET['data4']) ? $_GET['data4'] : '';

// Use the data as needed
// Your processing logic here

// Prepare the response
$response = ['message' => 'Value received successfully (Page 2)'];

// Send the response as JSON
header('Content-Type: application/json');
echo json_encode($response);
?>
