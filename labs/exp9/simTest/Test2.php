<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Freundlich Isotherm</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <canvas id="myChart"></canvas>

  <script>
    // Observed data
    const concentration = [1, 2, 3, 4, 5]; // Concentration of acetic acid
    const adsorption = [10, 20, 30, 40, 50]; // Adsorption amount of acetic acid

    // Freundlich isotherm parameters
    const k = 1.5; // Constant
    const n = 0.5; // Constant

    // Calculate predicted adsorption using Freundlich isotherm equation
    const predictedAdsorption = concentration.map(c => k * Math.pow(c, n));

    // Plotting using Chart.js
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [{
          label: 'Observed Data',
          data: concentration.map((val, index) => ({ x: val, y: adsorption[index] })),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }, {
          label: 'Predicted Data',
          data: concentration.map((val, index) => ({ x: val, y: predictedAdsorption[index] })),
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          pointStyle: 'cross'
        }]
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            scaleLabel: {
              display: true,
              labelString: 'Concentration'
            }
          },
          y: {
            type: 'linear',
            position: 'left',
            scaleLabel: {
              display: true,
              labelString: 'Adsorption'
            }
          }
        }
      }
    });
  </script>
</body>
</html>
