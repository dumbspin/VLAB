
<?php


session_start();

// Access the value stored in the session variable from page1.php
$data1=$_SESSION['N_Titrant'];
$data2=$_SESSION['V_Titrant'];

$data3=$_SESSION['N_Titrate1'];
$data4=$_SESSION['V_Titrate1'];
$data5=$_SESSION['N_Titrate2'];
$data6=$_SESSION['V_Titrate2'];
$data7=$_SESSION['N_Titrate3'];
$data8=$_SESSION['V_Titrate3'];
$data9=$_SESSION['N_Titrate4'];
$data10=$_SESSION['V_Titrate4'];
$data11=$_SESSION['N_Titrate5'];
$data12=$_SESSION['V_Titrate5'];

// Echo the value back to the client


// session_start();
$months = $_SESSION['logCe'];
$salesData = $_SESSION['logxDm'];


?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titration Finished</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <link rel="stylesheet" href="Other.css">
    
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet">
    <style>
        body {
      /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
      /* background-color: #f4f4f4; */
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* height: 100vh; */
    }



    table {
      width: 80%;
      border-collapse: collapse;
      margin-top: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      background-color: #fff;
      border-radius: 8px;
      overflow: hidden;
    }

    th, td {
      border: 1px solid #ddd;
      padding: 16px;
      text-align: left;
    }

    th {
      background-color: #f5f5f5;
    }

    tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    tr:hover {
      background-color: #f1f1f1;
    }
    .Chart{
      height: 600px;
      width: 1000px;
      display: flex;
      align-items: center;
      justify-items: center;
    }
    canvas {
    aspect-ratio: auto !important; /* Reset the aspect ratio */
    max-width: 100%; /* Allow the canvas to resize horizontally */
    family:'poppins',
}
  </style>
</head>
<body>
    
<div style="text-align: center;">
        <h1>Your Titration is Finished</h1>
        <!-- <p>Congratulations on completing the titration process!</p> -->
        
    </div>
    <h2>To determine the constituents and amount of alkalinity of the supplied water sample</h2>
    <h3>Results</h3>
    <div id="Chart">
    <canvas id="myChart" width:"1000" height="350" ></canvas>
</div>
  <table>
    <thead>
      <tr>
        <th>Sample In</th>
        <th>Volume Before Titration</th>
        <th>Normality Result</th>
        <th>Volume used</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Phenolphthalein</td>
        <td><?php echo round($data2,2) ?></td>
        <td><?php echo round($data4,2) ?></td>
        <td><?php echo round($data3,2)?></td>
      </tr>
      <tr>
        <td>Methylorange</td>
        <td><?php echo round($data6,2)?></td>
        <td><?php echo round($data8,2)?></td>
        <td><?php echo round($data7,2) ?></td>
      </tr>
      <!-- <tr>
        <td>3</td>
        <td>Colorless (pH &lt; 8.2)</td>
        <td>Red (pH &lt; 3.1)</td>
      </tr> -->
      <!-- Add more rows as needed -->
    </tbody>
    
  </table>

  <a href="../simTest/"><button class="mybutton">Replay <span style="font-weight:bolder; font-size:18px">&#8634;</span>
</button></a>
  </div>
  <script>
        // PHP array to hold dynamic data (you can fetch this from a database)

        // JavaScript array to hold the data
        const labels = <?php echo json_encode(array_map(function($label) { return number_format($label, 2); }, array_reverse($months))); ?>;
        const sales = <?php echo json_encode(array_reverse($salesData)); ?>;
        console.log(labels,' : ',sales)

        // Define the comparison data based on the first and last points of the sales data
        const comparisonData = [
            { x: labels[0], y: sales[0] + 0.01 }, // First point
            { x: labels[labels.length - 1], y: sales[sales.length - 1] + 0.01 } // Last point
        ];

        // Configuration for the graph
        const data = {
            labels: labels,
            
            datasets: [{
              
                label: 'Log(w/m)',
                data: sales,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,

            },
            {
                label: 'Straight line',
                data: comparisonData,
                fill: false,
                borderColor: 'rgba(255, 99, 132, 0.5)',
                borderDash: [5, 5],
                font: {
                        family: 'Poppins' // Change the font family for legend labels to Poppins
                    }
            }]
        };

        const config = {
            type: 'line',
            data: data,
            options: {
                maintainAspectRatio: false, // Prevent the chart from maintaining aspect ratio
                scales: {

                    y: {
                      title: {
                    display: true,
                    text: 'Log(w/m)', // Label for the x-axis
                    font: {
                        family: 'Poppins' // Font family for the axis label
                    }
                },

                        reverse: true,
                        beginAtZero: true,
                        ticks:{
                        stepSize: 0.1 // Set the step size of the y-axis to 0.20
                        ,                  font: {
                        family: 'Poppins', // Change the font family to Poppins

                    }
                        
                    }},
                    x:{
                      title: {
                    display: true,
                    text: 'Log(C)', // Label for the x-axis
                    font: {
                        family: 'Poppins' // Font family for the axis label
                    }
                },
                      ticks:{
                        font: {
                        family: 'Poppins', // Change the font family to Poppins
                    }
                      }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top' // Position the legend at the top of the chart,
                        ,        font: {
            family: 'Poppins' // Change the font family for dataset labels to Poppins
        }
                    },
                    title: {
                        display: true,
                        text: 'Adsorbtion' // Add a title to the chart
                    }
                }
            }
        };

        // Create the chart
        var myChart = new Chart(
            document.getElementById('myChart'),
            config
        );
        document.getElementById('myChart').style.width = '600px';

    </script>

</body>
</html>
