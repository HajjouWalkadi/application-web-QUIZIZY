
let index = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
function startQuiz(){
        
    // if( answer ) index ++;

    // if (index = max ) stop 

    start(index);
}
function nextQuiz(){
    index++;
    start(index);
}

let quiz_questions = shuffle(questions);

function start(qIndex){
            
    informationCard = document.querySelector('.information-card').style.display = "none";
    questionCard = document.querySelector('.questions-card').style.display = "block";
    optionsElement = document.querySelector('#options');
    questionElement = document.querySelector('#question');
    
    optionsElement.innerHTML = '';
    questionElement.innerHTML = '';

    options = quiz_questions[qIndex].options;
    question = quiz_questions[qIndex].question;


    questionElement.innerHTML = question;
    for (let index = 0; index < options.length; index++) {
    optionsElement.innerHTML += `<div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
                ${ options[index] }
            </label>
        </div>`
    }
}