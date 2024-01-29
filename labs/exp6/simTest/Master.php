

<!DOCTYPE html>
<html>
<head>
    <title>PHP Session Array in JavaScript</title>
</head>
<body>
<?php
// Start the session
session_start();

// Create some variables
$Nor_titrant = 0.5; // In burette
$Vol_titrate = 10; // Present in flask








$Nor_titrate1 = rand(25,35)/100 ;// Present in flask (converted to float)

$Vol_titrant1 = $Nor_titrate1 * $Vol_titrate / $Nor_titrant; // Used from burette

$Nor_titrate2 =rand(10,20)/100;// Present in flask (converted to float)

$Vol_titrant2 = $Nor_titrate2 * $Vol_titrate / $Nor_titrant; // Used from burette



// echo ' 1:',$Nor_titrate1,' 2nd:',$Nor_titrate2,' 3rd:',$Nor_titrate3,' 4th:',$Nor_titrate4,' 5th:',$Nor_titrate5;

//Creating an array for making graph
$j=-1;
foreach($Ce as $i){
    $j+=1;
$logxDm[$j]= (log10($k)+($m*log10($i)));
echo ($logxDm[$j]),'<br>',$i,'<br>';
$logCe[$j]=log10($i);
echo ($logCe[$j]),'<br><br>';

}
// Store variables in session
$_SESSION['logxDm']=$logxDm;
$_SESSION['logCe']=$logCe;
$_SESSION['logK']=log10($k);
$_SESSION['m']=$m;

$_SESSION['N_Titrant'] = $Nor_titrant;
$_SESSION['V_Titrant'] = $Vol_titrate;

$_SESSION['N_Titrate1'] = $Nor_titrate1;
$_SESSION['V_Titrate1'] = $Vol_titrant1;

$_SESSION['N_Titrate2'] = $Nor_titrate2;
$_SESSION['V_Titrate2'] = $Vol_titrant2;






// Redirect user to another page
header('Location: StartHtml.html');
// header('Location: TitrationComp.php');
exit; // Ensure that subsequent code is not executed after redirection
?>