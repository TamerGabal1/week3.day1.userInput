let titleInput = document.getElementById("title_input");
let noun = document.getElementById("noun");
let verb = document.getElementById("verb");
let adjective = document.getElementById("adjective"); 
let inputs = [titleInput, noun, verb, adjective];

let submitBtn = document.getElementById("submit_button");

let finalText = "";

titleInput.onkeyup=function(){
    document.getElementById("main_title").innerHTML = "Typing...";
}
addEventListener('change', (event) => {});

onchange = (event) => {
    document.getElementById("main_title").innerHTML = "";
};

submitBtn.onclick=function(event){
    let fieldsFilled = true;
    for(let i=0;i<inputs.length;i++){
        if(inputs[i].value==""){
            fieldsFilled = false;
        }
    }
    if(!fieldsFilled){
        alert("Please fill in all fields");
    }
    else{
        document.getElementsByClassName("form_container")[0].style.display = "none";
        finalText = "Last night I ate a " + noun.value + ", and today I just had to "+ verb.value + ". What a "+adjective.value+" day!";
        document.getElementById("story_result").innerText = finalText;
        event.preventDefault();
    }
}
