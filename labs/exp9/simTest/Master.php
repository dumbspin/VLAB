<?php

// Function to solve for N2
function solveForN2($N1, $k, $n) {
    // Initial guess for N2
    $N2 = 1.0;

    // Tolerance for the iteration
    $tolerance = 1e-6;

    // Maximum number of iterations
    $maxIterations = 100;

    // Iterative solution using Newton's method
    for ($i = 0; $i < $maxIterations; $i++) {
        $N2_prev = $N2;

        // Update N2 using the formula
        $N2 = $N1 / (1 + ($k / 3) * pow($N2, 1/$n - 1));

        // Check for convergence
        if (abs($N2 - $N2_prev) < $tolerance) {
            break;
        }
    }

    return $N2;
}


?>
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
$Nor_titrant = 0.1; // In burette
$Vol_titrate = 10; // Present in flask
$m=rand(30,90)/100;
$k=rand(102,200)/100;
// $m=.374;
// $k=-.126;
$n=(1/$m);

echo $m,'  ',$k,'<br>';
$C =[.1,.2,.3,.4,.5];
$Ce=[];
$logxDm=[];
$logCe=[];





// // Example usage
// $N1 = .1;  // Example value for N1
// $k = 1.4;    // Example value for k
// $n = 1.7;  // Example value for n

// // Solve for N2
// $N2_solution = solveForN2(.1, $k, $n);
// echo "N2 = $N2_solution";
// $N2_solution = solveForN2(.2, $k, $n);
// echo "N2 = $N2_solution";
// $N2_solution = solveForN2(.3, $k, $n);
// echo "N2 = $N2_solution";
// $N2_solution = solveForN2(.4, $k, $n);
// echo "N2 = $N2_solution";
// $N2_solution = solveForN2(.5, $k, $n);
// echo "N2 = $N2_solution";

$Nor_titrate1 = solveForN2(.1, $k, $n); // Present in flask (converted to float)
$Ce[0]=solveForN2(.1, $k, $n);
$Vol_titrant1 = $Nor_titrate1 * $Vol_titrate / $Nor_titrant; // Used from burette

$Nor_titrate2 = solveForN2(.2, $k, $n);// Present in flask (converted to float)
$Ce[1]=solveForN2(.2, $k, $n);
$Vol_titrant2 = $Nor_titrate2 * $Vol_titrate / $Nor_titrant; // Used from burette

$Nor_titrate3 = solveForN2(.3, $k, $n); // Present in flask (converted to float)
$Ce[2]=solveForN2(.3, $k, $n);
$Vol_titrant3 = $Nor_titrate3 * $Vol_titrate / $Nor_titrant; // Used from burette

$Nor_titrate4 = solveForN2(.4, $k, $n);// Present in flask (converted to float)
$Ce[3]=solveForN2(.4, $k, $n);
$Vol_titrant4 = $Nor_titrate4 * $Vol_titrate / $Nor_titrant; // Used from burette

$Nor_titrate5 =solveForN2(.5, $k, $n); // Present in flask (converted to float)
$Ce[4]=solveForN2(.5, $k, $n);
$Vol_titrant5 = $Nor_titrate5 * $Vol_titrate / $Nor_titrant; // Used from burette

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

$_SESSION['N_Titrate3'] = $Nor_titrate3;
$_SESSION['V_Titrate3'] = $Vol_titrant3;

$_SESSION['N_Titrate4'] = $Nor_titrate4;
$_SESSION['V_Titrate4'] = $Vol_titrant4;

$_SESSION['N_Titrate5'] = $Nor_titrate5;
$_SESSION['V_Titrate5'] = $Vol_titrant5;




// Redirect user to another page
header('Location: StartHtml.html');
// header('Location: TitrationComp.php');
exit; // Ensure that subsequent code is not executed after redirection
?>