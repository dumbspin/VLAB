
<?php


session_start();

// Access the value stored in the session variable from page1.php
$data1 = $_SESSION['Normality_titrate'];
$data2 = $_SESSION['volume_titrate'];
$data3 = $_SESSION['Vadded'];
$data4 = $_SESSION['Result1'];
$data5 = $_SESSION['Normality_titrate2'];
$data6 = $_SESSION['volume_titrant2'];
$data7= $_SESSION['volume_titrate2'];
$data8=$_SESSION['volume_titrant']


// Echo the value back to the client

?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titration Finished</title>
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
      height: 100vh;
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
  </style>
</head>
<body>
    
<div style="text-align: center;">
        <h1>Your Titration is Finished</h1>
        <!-- <p>Congratulations on completing the titration process!</p> -->
        
    </div>
    <h2>To determine the Total, Permanent and Temporary hardness of water sample.</h2>
    <h3>Results</h3>

  <table>
    <thead>
      <tr>
        <th>Sample In</th>
        <th>Volume Of Solution Taken</th>
        <th>Volume Result Used</th>
        <th>Normality of water sample(N)</th>
        <th>Hardnes in ppm</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Total Hardness</td>
        <td><?php echo round($data2,2) ?></td>

        <td><?php echo round($data8,2) ?></td>
        <td><?php echo round($data4/10,3) ?></td>
        <td><?php echo round($data4*5000,2) ?></td>
      </tr>
      <tr>
        <td>Permanent Hardness</td>
        <td><?php echo round($data7,2) ?></td>

        <td><?php echo round($data6,2)?></td>
        <td><?php echo round($data5/10,3) ?></td>
        <td><?php echo round($data5*5000,2) ?></td>
      </tr>
      <tr>
        <td>Temporary Hardness</td>
        <td colspan="3" style="text-align: center;">Total Hardness- Permanent Hardness</td>
        <td><?php echo round($data4*5000-$data5*5000,2) ?></td>
      </tr>
      <!-- <tr>
        <td>3</td>
        <td>Colorless (pH &lt; 8.2)</td>
        <td>Red (pH &lt; 3.1)</td>
      </tr> -->
      <!-- Add more rows as needed -->
    </tbody>
    
  </table>

  <br><br>
  For Detailed Calculation
  <a style="            text-decoration: none; 
            color: blue" href="calc.png"> Click here
        
    </a>
    <br>

  
  <a href="../simTest/"><button class="mybutton">Replay <span style="font-weight:bolder; font-size:18px">&#8634;</span>
</button></a>
  </div>

</body>
</html>
