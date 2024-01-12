<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Determination of alkalinity</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
  <link rel="stylesheet" href="Other.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>

<body>
  <h1 class="heading"> To determine the constituents and amount of alkalinity of the supplied water sample.</h1>
  <div id="container" class="box">
    <button class="help-button" onclick="showHelp()"><i class="fa-solid fa-circle-info fa-xl"></i></button>
    <button class="btn btn-primary btn-sm" id="runsetup" onclick="toggleFullScreen()"><i
      class=" fa-solid fa-xl fa-maximize" style="color: #9ec1a3;"></i></button>
    <div id="container1">
      <div id='textbox' class="rectangle">
        <span id="displayText">Add few drops of Methyl Orange into sample water.</span>
        <button onclick="changeText()"><i class="fa-solid fa-forward fa-xl"></i></button>

      </div>
    </div>

  </div>
  <script>
    const textArray = ["Add few drops of Methyl Orange into sample water.", "The colour changes to yellow.", ""]; // Add more texts as needed
    let currentIndex = 0;
    const displayText = document.getElementById("displayText");
    const box = document.getElementById('textbox');
    function changeText() {


      currentIndex = (currentIndex + 1) % textArray.length;
      displayText.textContent = textArray[currentIndex];
      if (currentIndex == textArray.length - 1) {
        box.style.display = 'none';
      }
    }
    function showHelp(){
      box.style.display = 'block';

    }
    function toggleFullScreen() {
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { /* Firefox */
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
          document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { /* IE/Edge */
          document.documentElement.msRequestFullscreen();
        }
        // toggleDiv.classList.add('custom-fullscreen');
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
          document.msExitFullscreen();
        }
        // toggleDiv.classList.remove('custom-fullscreen');
      }
    }

  </script>
  <script src="methyl_orange.js"></script>
</body>

</html>