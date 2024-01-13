<?php

session_start();
// Retrieve the value from the POST request
$new_data = json_decode(file_get_contents("php://input"), true);
// $normality_titrant = $new_data['data1'];
//     $volume_titrate = $new_data['data2'];
 
// Check if $data is not null before accessing its elements
if ($new_data !== null) {
    // Access the value
    // $normality_titrant = ;
    // $volume_titrate = ;
 
    
    $_SESSION['Normality_titrate2'] = $new_data['data1'];
    $_SESSION['volume_titrate2'] = $new_data['data2'];
    $_SESSION['volume_titrant2'] = $new_data['data3'];
    // Do something with the value (e.g., process, store in database, etc.)
    // For demonstration purposes, just echoing the value
    // echo json_encode(['message' => 'Value received successfully', 'jsVariable' => $jsVariable,' 2: ',$jsVariable2,' 3: ',$jsVariable3]);
    echo json_encode(['message' => 'Value received successfully (Page 2)']);
    // Store values in session variables



    //header('Location: StartHtml2.php');
} else {
    echo json_encode(['error' => 'Error in receiving data.']);
}
?>
