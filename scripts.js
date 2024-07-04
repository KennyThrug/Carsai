
function click_input(){
    console.log("test");
    let answer = document.getElementById("WordleAnswer").value;
    let correct_answer = "Hello";
    if(answer == correct_answer){
        console.log("This");
        window.location.replace("answergoeshere.html");
    }
}

function password_input(divID,inputID,answer){
    console.log("hi");
    let input = document.getElementById(inputID).value;
    if(input.toLowerCase() == answer.toLowerCase()){
        console.log("There");
        document.getElementById(divID).style.color = "green";
    }
    else{
        document.getElementById(divID).style.color = "red";
    }
}

let all_artifact_inputs;

function submit_artifacts(){
    let all_answers = [
        ["Hat","The Hat","Cap","Top Hat"],
        ["Glasses","Eye","Haunter","The Haunter of the Dark","The Glasses","The Eye"],
        ["Pendant","Necklace","The Pendant","The Necklace"],
        ["Cloak","The Cloak"],
        ["The Scepter","Scepter","Staff","The Staff"],
        ["Gauntlet","The Gauntlet","Gloves","The Gloves"],
        ["The Crown","Crown"],
        ["Ring","The Ring"]
    ];
    console.log(all_answers);
    for(let i = 0; i < 8; i++){
        let cur_answer = document.getElementById("Artifact" + i).value;
        console.log(cur_answer);
        let found = false;
        for(let j=0;j<8;j++){
        console.log(all_answers[i]);
            for(let k=0;k<all_answers[j].length;k++){
                if(cur_answer.toLowerCase() == all_answers[j][k].toLowerCase()){
                    all_answers[j] = ["Fuck"];
                    document.getElementById("Artifact_Div" + i).style.backgroundColor = 'green';
                    found = true
                    break;
                }
            }
        }
        if(found == false){
            document.getElementById("Artifact_Div" + i).style.backgroundColor = 'red';
        }
    }
}

function check_if_done(){

}

function check_a_div(){

}

function init(){
    let artifacts = document.getElementById("Artifacts");
    for(let i = 0; i < 8; i++){
        let divv = document.createElement("div");
        divv.id = "Artifact_Div" + i;
        divv.style.width = "15%";
        let input = document.createElement("input");
        input.id = "Artifact" + i;
        divv.appendChild(input);
        artifacts.appendChild(divv);
    }
}