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
$m=rand(10,90)/100;
$k=rand(102,200)/100;
// $m=.76;
// $k=1.45;
echo $m,'  ',$k,'<br>';
$C =[.1,.2,.3,.4,.5];
$Ce=[];
$logxDm=[];
$logCe=[];


$Nor_titrate1 = (0.1-(rand(10,25)/1000)); // Present in flask (converted to float)
$Ce[0]=$Nor_titrate1;
$Vol_titrant1 = $Nor_titrate1 * $Vol_titrate / $Nor_titrant; // Used from burette

$Nor_titrate2 = 0.2-(rand(25,40)/1000); // Present in flask (converted to float)
$Ce[1]=$Nor_titrate2;
$Vol_titrant2 = $Nor_titrate2 * $Vol_titrate / $Nor_titrant; // Used from burette

$Nor_titrate3 = 0.3-(rand(40,55)/1000); // Present in flask (converted to float)
$Ce[2]=$Nor_titrate3;
$Vol_titrant3 = $Nor_titrate3 * $Vol_titrate / $Nor_titrant; // Used from burette

$Nor_titrate4 = .4-(rand(55,70)/1000); // Present in flask (converted to float)
$Ce[3]=$Nor_titrate4;
$Vol_titrant4 = $Nor_titrate4 * $Vol_titrate / $Nor_titrant; // Used from burette

$Nor_titrate5 = .5-(rand(70,85)/1000); // Present in flask (converted to float)
$Ce[4]=$Nor_titrate5;
$Vol_titrant5 = $Nor_titrate5 * $Vol_titrate / $Nor_titrant; // Used from burette

// echo ' 1:',$Nor_titrate1,' 2nd:',$Nor_titrate2,' 3rd:',$Nor_titrate3,' 4th:',$Nor_titrate4,' 5th:',$Nor_titrate5;

//Creating an array for making graph
$j=-1;
foreach($Ce as $i){
    $j+=1;
$logxDm[$j]= (log10($k)+($m*log10($i)));
echo pow(10,$logxDm[$j]),'<br>',$i,'<br>';
$logCe[$j]=log10($i);
echo pow(10,$logCe[$j]),'<br>';

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

$_SESSION['N_Titrate3'] = $Nor_titrate3;
$_SESSION['V_Titrate3'] = $Vol_titrant3;

$_SESSION['N_Titrate4'] = $Nor_titrate4;
$_SESSION['V_Titrate4'] = $Vol_titrant4;

$_SESSION['N_Titrate5'] = $Nor_titrate5;
$_SESSION['V_Titrate5'] = $Vol_titrant5;




// Redirect user to another page
header('Location: StartHtml.html');
// header('Location: Test.php');
exit; // Ensure that subsequent code is not executed after redirection
?>