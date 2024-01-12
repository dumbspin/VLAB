<?php
session_start();

// Retrieve the value from the POST request
$data = json_decode(file_get_contents("php://input"), true);

// Check if $data is not null before accessing its elements
if ($data !== null) {
    // Access the value
    // $normality_titrate = $data['data1'];
    // $volume_titrant = $data['data2'];
    // $Vadded = $data['data3'];
    // $Result1 = $data['data4'];
    $_SESSION['Normality_titrate'] = $data['data1'];
    $_SESSION['volume_titrate'] = $data['data2'];
    $_SESSION['Vadded'] = $data['data3'];
    $_SESSION['Result1'] = $data['data4'];
    $_SESSION['volume_titrant']=$data['data5']
;
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
