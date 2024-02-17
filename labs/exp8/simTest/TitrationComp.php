
<?php


session_start();

// Access the value stored in the session variable from page1.php
$data1 = $_SESSION['ranWeight'];
$data2 = $_SESSION['ranDrop'];
$data3 = $_SESSION['ranWeight2'];
$data4 = $_SESSION['ranDrop2'];
$x1=$data2;
$x2=$data4;



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
        <h1>Your experiment is finished.</h1>
        <!-- <p>Congratulations on completing the titration process!</p> -->
        
    </div>
    <h2>Determination of surface tension of liquid by Stalagmometer.
</h2>
    <h3>Results</h3>

  <table>
    <thead>
      <tr>
        <!-- <th>N1</th> -->
        <th>Sample Used</th>
        <th>Weight of liquid</th>
        <th>Density</th>
        <th>Number of Drops</th>
        <th>Surface Tension</th>

        <!-- <th></th> -->
      </tr>
    </thead>
    <tbody>
      <tr>
        <!-- <td>Total Hardness</td> -->
       
        <td>Water Sample</td>
        <td><?php echo round($data1*62,2) ?> grams</td>
        <td>0.098 gm/cubic cm (known)</td>
        <td><?php echo round((-500/3) * pow($x1, 4) + 250 * pow($x1, 3) - (215/3) * pow($x1, 2) + 33 * $x1 + 35,0) ?> Drops</td>
        <td>72.8 dynes/cm (known)</td>
      </tr>
      <tr>
        
        <!-- <td>Total Hardness</td> -->
       
        <td>Glycerine Solution</td>
        <td><?php echo round($data3*62,2) ?> grams</td>
        <td><?php echo round(($data3*62*0.098)/($data1*62),3) ?> gm/cubic cm</td>
        <td><?php echo round(((101/11250) * ($x2**3) - (29/250) * ($x2**2) + (371/2250) * $x2 + 34),0) ?> Drops</td>
        
        <td><?php echo round((72.8*($data3*62)*round(((101/11250) * ($x2**3) - (29/250) * ($x2**2) + (371/2250) * $x2 + 34),0))/($data1*62*round((-500/3) * pow($x1, 4) + 250 * pow($x1, 3) - (215/3) * pow($x1, 2) + 33 * $x1 + 35,0)),3) ?> dynes/cm</td>
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
