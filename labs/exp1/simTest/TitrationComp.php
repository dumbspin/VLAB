
<?php


session_start();

// Access the value stored in the session variable from page1.php
$data1 = floatval($_SESSION['V1']); // Convert to float
$data2 = floatval($_SESSION['N2']); // Convert to float
$data3 = floatval($_SESSION['Vadded']); // Convert to float
$data4 = floatval($_SESSION['Result1']); // Convert to float



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
    
    <div style="text-align: center; ">
        <h1>Your Titration is Finished</h1>
        <!-- <p>Congratulations on completing the titration process!</p> -->
        
    </div>
    <h2>Determination of Chloride Content</h2>
    <h3>Observation Table</h3>

  <table>
    <thead>
      <tr>
      <th>Volume Taken for Sample(V1)</th>
        <th>Volume Consumed(V2)</th>
        <th>Normality Set For Titrant(N2)</th>
        <th>Normality Result(N1V1 = N2V2)</th>
      </tr>
    </thead>
    <tbody>
      <tr>

      <td><?php echo round($data2, 2); ?> ml</td>
        <td><?php echo round($data1, 2); ?> ml</td>
        <td><?php echo round($data3, 3); ?> N</td>
        <td><?php echo round($data4/10, 3); ?> N</td>
      </tr>


    </tbody>
  </table>
  <h3>Calculations</h3>
  Choloride content = (N1 * 35.5)g/l
  <br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =<?php echo round($data4 *35.5/10, 2); ?> g/l
<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=<?php echo round($data4 *35.5*1000/10, 2); ?> mg/l
 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =<?php echo round($data4 *35.5*1000/10, 2); ?> ppm

 <br><br>
  For Detailed Calculation
  <a style="            text-decoration: none; 
            color: blue" href="calc.png"> Click here
        
    </a>
    <br>
  <a href="../simTest/"><button class="mybutton">Replay <span style="font-weight:bolder; font-size:18px">&#8634;</span>
</button></a>


</body>
</html>
