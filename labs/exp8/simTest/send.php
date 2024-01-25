<?php
session_start();

// Retrieve the value from the POST request
$data = json_decode(file_get_contents("php://input"), true);

// Check if $data is not null before accessing its elements
if ($data !== null) {
    // Access the value

    $_SESSION['ranWeight'] = $data['data1'];
    $_SESSION['ranDrop'] = $data['data2'];

    


    echo json_encode(['message' => 'Value received successfully (Page 2)']);
    // Store values in session variables

    //header('Location: StartHtml2.php');
} else {
    echo json_encode(['error' => 'Error in receiving data.']);
}
?>
