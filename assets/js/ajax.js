


var ajax = new XMLHttpRequest();
var method = "POST";
var url = "../classes/getquestions.php";
var asynchronous = true;

ajax.open(method, url, asynchronous);
let questions=[];
ajax.onreadystatechange = function()
{
    if (this.readyState == 4 && this.status == 200)
    {
        let data = JSON.parse(this.responseText);
        for(let i=0;i<data.length;i++){
          let options=[];
          options.push({text: data[i].option1});
          options.push({text: data[i].option2});
          options.push({text: data[i].option3});
          options.push({text: data[i].option4});
    
          questions.push({question:data[i].question, options : options, justification :data[i].explanation, answer : data[i].answer })

        }
    }
}

ajax.send();
