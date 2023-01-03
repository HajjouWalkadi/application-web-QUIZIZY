<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quizizy</title>
    <link rel="stylesheet" href="../style.css">
    
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>

    <!-- UniIcon CDN Link  -->
    <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
</head>
<body style="background-color:#000000;">
    <div class="wrapper">
        <ol class="c-stepper">
          <li onclick="changeContenu(0)" class="c-stepper__item activeStep" style="color: green">
            <h3 class="c-stepper__title ">Informations</h3>
          </li>
          <li onclick="changeContenu(1)" class="c-stepper__item"id="corcile2" style="color: #FAF3E3">
            <h3 class="c-stepper__title" id="step2">Quiz</h3>
          </li>
          <li onclick="changeContenu(2)" class="c-stepper__item" id="corcile3" style="color: #FAF3E3">
            <h3 class="c-stepper__title" id="step3">Résultat</h3>
          </li>
        </ol>
    </div>
    <container class="card information-card">
        <div class="">
            <div class="container-info">
                <h4>Informations</h4>
                <p>This quiz includes 10 questions in total that you can access even on your mobile. It consists of AWS Cloud. Each question you receive is explained in detail at the end of your practice test for better understanding.</p>
            </div>
            <div>
                <button class="btn-info active" id="next" onclick="startQuiz()">Start quiz</button>
            </div>
        </div>
    </container>
    <container class="card questions-card" style="display: none;">
        <div class="progressAll1">
            <div class="progressAll2">
                <span class="numero"><span class="result-num" id="result-num">1</span>/10</span>
                <div class="progressBar"></div>
                <div class="progressing" id="progressing"></div>
            </div>
        </div>
        <div id="question" ></div>
        <div class="cartes-container container" id="cartes-container">
            <button class="cartes" id="options1" onclick="check(0)"></button>
            <button class="cartes" id="options2" onclick="check(1)"></button>
            <button class="cartes" id="options3" onclick="check(2)"></button>
            <button class="cartes" id="options4" onclick="check(3)"></button>
        </div>
        <button id="showResult" onclick="ShowResults()">Show results</button>

        <!-- <button class="submitbtn" onclick="nextQuiz()">Submit answer</button> -->
    </container>
    <container class="card result-card container" id="result-card" style="display: none;">
            <div class="score">
                <p  style="color: #1A4D2E; font-size: large;">congratulations, you have reached the end of the quiz</p>
                <h4  style="color: #FF9F29;">Your score</h4>
                <span><span id="YourResult"></span>/10</span>
                <button id="showCorrection">Show correction</button>
                <!-- <button id="tryagain" onclick="startQuiz()">try again</button> -->
            </div>
    </container>

</div>
          
    <script src="../assets/js/ajax.js"></script>
    <!-- <script src="../assets/js/data.js"></script> -->
    <script src="../assets/main.js"></script>
    
</body>
</html>

