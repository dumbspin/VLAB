const polymerSolventConstants = {
    'PMMA-Acetone': { K: 7.70, alpha: 0.70 },
    'PMMA-Benzene': { K: 5.20, alpha: 0.76 },
    'PMMA-Toluene': { K: 7.0, alpha: 0.71 },
    'Polyvinylacetate-Acetone': { K: 10.2, alpha: 0.72 },
    'Polyvinylacetate-Benzene': { K: 56.3, alpha: 0.62 },
    'Polyvinylacetate-Acetonitrile': { K: 41.5, alpha: 0.62 },
    'Polyvinylalcohol-Water': { K: 45.3, alpha: 0.64 },
    'Polystyrene-Benzene': { K: 10.6, alpha: 0.735 },
    'Polystyrene-Toluene': { K: 11.0, alpha: 0.725 },
};

// Constants for molecular weight calculation (replace with actual experimental data)
const molecularWeightConstants = {
    'Polyvinylacetate': { A: 2.1, B: 1.8 },
    'PMMA': { A: 1.5, B: 2.2 },
    'Polyvinylalcohol': { A: 2.5, B: 1.3 },
    'Polystyrene': { A: 1.8, B: 2.0 },
};

// Variables to track time and experiment status
let timer;
let seconds = 0;
let experimentStarted = false;

// Function to start the timer
function startTimer() {
    // Set interval to update time every second
    timer = setInterval(function () {
        seconds++;
        updateTimerDisplay();
    }, 1000);
}

// Function to stop the timer
function stopTimer() {
    clearInterval(timer);
}

// Function to update the time display
function updateTimerDisplay() {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    document.getElementById('timer-display').innerText = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Function to toggle polymer options based on the selected system
function togglePolymerOptions() {
    const systemSelect = document.getElementById('option-select');
    const polymerSelect = document.getElementById('polymer-option');
    const solventSelect = document.getElementById('solvent-option');
    const concentrationInput = document.getElementById('concentration');

    if (systemSelect.value === 'PolymerSolventSystem') {
        polymerSelect.disabled = false;
        solventSelect.disabled = false;
        concentrationInput.disabled = false;
    } else {
        polymerSelect.disabled = true;
        solventSelect.disabled = true;
        concentrationInput.disabled = true;
    }
}

// Function to start the experiment
function startExperiment() {
    experimentStarted = true;
    startTimer();
    // Additional setup or actions when the experiment starts

    // Add animation class to Start button (for demonstration purposes)
    document.getElementById('start-experiment-btn').classList.add('button-active');
}

// Function to calculate viscosity and molecular weight
function calculateViscosityAndMolecularWeight() {
    if (experimentStarted) {
        // Placeholder values for fluid properties (replace with your actual data)
        const fluidVelocity = 1.5; // Example fluid velocity in m/s
        const distance = 0.002; // Example distance in meters

        // Placeholder value for viscosity factor (replace with your actual data)
        const viscosityFactor = 0.001;

        // Calculate shear rate using the provided formula γ = ∂u/∂y
        const shearRate = fluidVelocity / distance;

        // Placeholder value for viscosity calculation (replace with your actual formula)
        const viscosity = viscosityFactor * shearRate;

        // Display viscosity result
        document.getElementById('viscosity-result').querySelector('span').innerText = viscosity.toFixed(2);

        // Placeholder values for molecular weight calculation (replace with your actual data)
        const selectedPolymer = document.getElementById('polymer-option').value;
        const molecularWeightConstantA = molecularWeightConstants[selectedPolymer].A;
        const molecularWeightConstantB = molecularWeightConstants[selectedPolymer].B;
        const polymerConcentration = parseFloat(document.getElementById('concentration').value);

        // Calculate molecular weight using a hypothetical formula (replace it with your actual formula)
        const molecularWeight = molecularWeightConstantA * polymerConcentration + molecularWeightConstantB;

        // Display molecular weight
        document.getElementById('molecular-weight-result').querySelector('span').innerText = molecularWeight.toFixed(2);

        // Placeholder values for inherent viscosity calculation (replace with your actual formula)
        const inherentViscosity = calculateInherentViscosity(polymerConcentration);

        // Display inherent viscosity
        document.getElementById('real-viscosity-result').querySelector('span').innerText = inherentViscosity.toFixed(6);

        // Remove animation class from Start button
        document.getElementById('start-experiment-btn').classList.remove('button-active');

        // Stop the timer
        stopTimer();
        experimentStarted = false;
    } else {
        alert("Start the experiment before calculating viscosity and molecular weight.");
    }
}

// Placeholder function for inherent viscosity calculation (replace with your actual formula)
function calculateInherentViscosity(polymerConcentration) {
    return polymerConcentration * 0.02; // Replace with your actual formula
}

// Function to reset the experiment
function resetExperiment() {
    clearInterval(timer);
    seconds = 0;
    updateTimerDisplay();
    experimentStarted = false;
    // Additional cleanup or actions when the experiment is reset

    // Reset results
    document.getElementById('viscosity-result').querySelector('span').innerText = '';
    document.getElementById('molecular-weight-result').querySelector('span').innerText = '';
    document.getElementById('real-viscosity-result').querySelector('span').innerText = '';

    // Remove animation class from Start button
    document.getElementById('start-experiment-btn').classList.remove('button-active');
}

// Function to handle the change in "Find Time of Flow" dropdown
function handleOptionSelectChange() {
    const optionSelect = document.getElementById('option-select');
    const polymerOption = document.getElementById('polymer-option');

    // If "Polymer Solvent System" is selected, show the polymer options
    if (optionSelect.value === 'PolymerSolventSystem') {
        polymerOption.style.display = 'block';
    } else {
        // Otherwise, hide the polymer options
        polymerOption.style.display = 'none';
    }
}

// Event listener for the "Find Time of Flow" dropdown change
document.getElementById('option-select').addEventListener('change', handleOptionSelectChange);

// Function to update fluid thickness percentage display
function updateFluidThicknessPercentage() {
    const fluidThicknessValue = document.getElementById('fluid-thickness').value;
    document.getElementById('fluid-thickness-percentage').innerText = fluidThicknessValue + '%';
}

// Function to update polymer concentration percentage display
function updateConcentrationPercentage() {
    const concentrationValue = document.getElementById('concentration').value;
    document.getElementById('concentration-value').innerText = concentrationValue + '%';
}

// Event listener for fluid thickness slider change
document.getElementById('fluid-thickness').addEventListener('input', function () {
    updateFluidThicknessPercentage();
});

// Event listener for polymer concentration slider change
document.getElementById('concentration').addEventListener('input', function () {
    updateConcentrationPercentage();
});

// Initial update for slider percentages
updateFluidThicknessPercentage();
updateConcentrationPercentage();
