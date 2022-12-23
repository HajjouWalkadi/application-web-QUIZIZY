
let index = 0;
let optionsElement1 = document.getElementById('options1');
let optionsElement2 = document.getElementById('options2');
let optionsElement3 = document.getElementById('options3');
let optionsElement4 = document.getElementById('options4');
let questionElement = document.querySelector('#question');
let num_result=document.getElementById("result-num");
let AllAnswers=document.getElementById("cartes-container");
let step2=document.getElementById("step2");
let progressing =document.getElementById("progressing");
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
//   }

let random = questions.sort(()=> Math.random() - .5);
function startQuiz(){
        
    // if( answer ) index ++;

    // if (index = max ) stop 

    start(index);
}
function nextQuiz(){
    index++;
    start(index);
}

let quiz_questions = random;

function start(){
            
    informationCard = document.querySelector('.information-card').style.display = "none";
    questionCard = document.querySelector('.questions-card').style.display = "block";
    show(index);
    step2.classList.add('greencolor');

    // for (let index = 0; index < options.length; index++) {
    // optionsElement.innerHTML += `<div class="form-check">
    //         <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
    //         <label class="form-check-label" for="flexRadioDefault1">
    //             ${ options[index] }
    //         </label>
    //     </div>`
    // }
}

function check(e){
    // console.log(e.textContent);
    nextQuiz();
}

function show(qIndex){
   
    optionsElement1.innerText = quiz_questions[qIndex].options[0];        
    optionsElement2.innerText = quiz_questions[qIndex].options[1];        
    optionsElement3.innerText = quiz_questions[qIndex].options[2];        
    optionsElement4.innerText = quiz_questions[qIndex].options[3];        

    questionElement.innerText= quiz_questions[qIndex].question;
    num_result.innerText=qIndex+1;
    for(let i=0;i<qIndex+2;i++){
        progressing.style.width = i*3.5+"rem";
    }

}
function nexttt(){
    show(index);
    resetAll();
}

//progress bar
var progress = 50; // current progress
var progressBar = document.querySelector('.progress-bar');
progressBar.setAttribute('aria-valuenow', progress);
progressBar.style.width = progress + '%';

function resetAll(){
    while(AllAnswers.firstChild){
        AllAnswers.removeChild(AllAnswers.firstChild)
    }
}


let bodyContainer = document.getElementsByTagName('container');
let btnCircleChose = document.getElementsByTagName('h3');

console.log(btnCircleChose);


bodyContainer[0].style.display = "block";
bodyContainer[1].style.display = "none";
bodyContainer[2].style.display = "none";

function changeContenu(index){
    bodyContainer[0].style.display = "none";
    bodyContainer[1].style.display = "none";
    bodyContainer[2].style.display = "none";

    btnCircleChose[0].style.color = "#FAF3E3";
    btnCircleChose[1].style.color = "#FAF3E3";
    btnCircleChose[2].style.color = "#FAF3E3";

    bodyContainer[index].style.display = "block";
    btnCircleChose[index].style.color = "green";

}