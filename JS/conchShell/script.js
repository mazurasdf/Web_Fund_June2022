function pullString(){
    var conchShell = document.querySelector("#conchShell");
    conchShell.src = "img/conchAnimated.gif";

    setTimeout(getFortune, 3900);
}

function getFortune(){
    var answers = [
        "yes",
        "no",
        "ask again later",
        "maybe",
        "seems logical",
        "i highly doubt that",
        "i have a bad feeling about this",
        "hello there",
        "there's a chance",
        "you're screwed"
    ]
    var randex = Math.floor(Math.random() * answers.length);

    var fortuneText = document.querySelector("#fortuneText");
    fortuneText.innerText = answers[randex];

    var conchShell = document.querySelector("#conchShell");
    conchShell.src = "img/conchStill.png";

    var input = document.querySelector("#questionBox > input")
    input.value = "";
    input.focus();
}