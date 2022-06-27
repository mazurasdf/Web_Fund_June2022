var count = 0;

function buttonClick(element){
    count++;
    console.log("yay! you clicked the button " + count + "times!!");
    element.innerText = "clicked " + count + " times";
}

var header = document.querySelector("#header");

function clickToChangeTitle(){
    count++;
    // console.log("change the title here");
    
    // console.log(header);
    header.innerText = `You clicked ${count} times`;
}

function printThis(element){
    console.log(element);
}