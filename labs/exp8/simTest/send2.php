<?php

session_start();
// Retrieve the value from the POST request
$new_data = json_decode(file_get_contents("php://input"), true);

 
// Check if $data is not null before accessing its elements
if ($new_data !== null) {

    
    $_SESSION['ranWeight2'] = $new_data['data1'];
    $_SESSION['ranDrop2'] = $new_data['data2'];

    echo json_encode(['message' => 'Value received successfully (Page 2)']);
    // Store values in session variables



    //header('Location: StartHtml2.php');
} else {
    echo json_encode(['error' => 'Error in receiving data.']);
}
?>
