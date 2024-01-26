<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Line Graph</title>
    <!-- Include Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        canvas {
    aspect-ratio: auto !important; /* Reset the aspect ratio */
    max-width: 100%; /* Allow the canvas to resize horizontally */
}

    </style>
</head>
<body>
    <div id="Chart">
    <canvas id="myChart" ></canvas>
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
                label: 'Sales',
                data: sales,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
            {
                label: 'Comparison',
                data: comparisonData,
                fill: false,
                borderColor: 'rgba(255, 99, 132, 0.5)',
                borderDash: [5, 5]
            }]
        };

        const config = {
            type: 'line',
            data: data,
            options: {
                maintainAspectRatio: false, // Prevent the chart from maintaining aspect ratio
                scales: {
                    y: {
                        reverse: true,
                        beginAtZero: true,
                        ticks:{
                        stepSize: 0.02 // Set the step size of the y-axis to 0.20
                    }}
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top' // Position the legend at the top of the chart
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
