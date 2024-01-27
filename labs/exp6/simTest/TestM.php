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





// Example usage
$N1 = .1;  // Example value for N1
$k = 1.4;    // Example value for k
$n = 1.7;  // Example value for n

// Solve for N2
$N2_solution = solveForN2(.1, $k, $n);
echo "N2 = $N2_solution";
$N2_solution = solveForN2(.2, $k, $n);
echo "N2 = $N2_solution";
$N2_solution = solveForN2(.3, $k, $n);
echo "N2 = $N2_solution";
$N2_solution = solveForN2(.4, $k, $n);
echo "N2 = $N2_solution";
$N2_solution = solveForN2(.5, $k, $n);
echo "N2 = $N2_solution";
?>
