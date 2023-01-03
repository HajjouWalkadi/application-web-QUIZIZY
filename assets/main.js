 
let index ,quiz_questions;
let optionsElement1 = document.getElementById('options1');
let optionsElement2 = document.getElementById('options2');
let optionsElement3 = document.getElementById('options3');
let optionsElement4 = document.getElementById('options4');
let questionElement = document.querySelector('#question');
let num_result=document.getElementById("result-num");
let AllAnswers=document.getElementById("cartes-container");
let step2=document.getElementById("step2");
let step3=document.getElementById("step3");
let progressing =document.getElementById("progressing");
let circle2 = document.getElementById("corcile2");
let circle3 = document.getElementById("corcile3");
let showResult =document.getElementById("showResult");
let resultCard = document.getElementById("result-card");
let YourResult =document.getElementById("YourResult")
let result=0;
function startQuiz(){

    start();
}
function nextQuiz(){
    index++;
    nexttt();
}

function start(){

    document.querySelector('.information-card').style.display = "none";
    document.querySelector('.questions-card').style.display = "block";
    showResult.style.display="none";
    quiz_questions =  questions.sort(()=> Math.random() - .5);
    console.log(questions);
    index = 0;
    step2.classList.add('greencolor');
    circle2.classList.add("activeStep");
    nexttt();
}


function check(num){
    if(questions[index].options[num].text == questions[index].answer){
        result++;
    }
    else{
        questions[index].incorrect="true";
    }
    nextQuiz();
    console.log(result);
}


function show(question){
    if(index<questions.length){
        optionsElement1.innerText = question.options[0].text;        
        optionsElement2.innerText = question.options[1].text;        
        optionsElement3.innerText = question.options[2].text;        
        optionsElement4.innerText = question.options[3].text;
        questionElement.innerText= question.question;
        num_result.innerText=index+1;
        for(let i=0;i<index+2;i++){
            progressing.style.width = i*3.5+"rem";
        }
    }
}
function nexttt(){
    if(index > 9){ 
        showResult.style.display="block";
        YourResult.innerHTML = result;
    }
    show(quiz_questions[index]);
}

let bodyContainer = document.getElementsByTagName('container');
let btnCircleChose = document.getElementsByTagName('h3');

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

function ShowResults(){
    document.querySelector('.information-card').style.display = "none";
    document.querySelector('.questions-card').style.display = "none";
    resultCard.style.display="block";
    step3.classList.add('greencolor');
    circle3.classList.add("activeStep");
}

document.querySelector("#showCorrection").addEventListener('click',()=>{
    let html="";
    questions.forEach(question => {
        if(question.incorrect=="true"){
            html+=`<div class="justification">
                    <h3>"${question.question}"</h3>
                    <p>${question.answer}</p>
                    <p class="explanation">"${question.justification}"</p>
                </div>`
        }
    });
    resultCard.innerHTML = html;
    });