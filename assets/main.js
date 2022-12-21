function start(){
            
    informationCard = document.querySelector('.information-card').style.display = "none";
    questionCard = document.querySelector('.questions-card').style.display = "block";
    optionsElement = document.querySelector('#options');
    questionElement = document.querySelector('#question');

    options = questions[1].options;
    question = questions[1].question;


    questionElement.innerHTML = question;
    for (let index = 0; index < options.length; index++) {
    optionsElement.innerHTML += `<div class="form-check">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
            <label class="form-check-label" for="flexRadioDefault1">
                ${ options[index] }
            </label>
        </div>`
    }
    // questionElement
}