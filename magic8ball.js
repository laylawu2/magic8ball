function answer() {var number = Math.floor(Math.random()*8);

if (number===0){document.getElementById("answer_field").innerHTML = "yes";}
if (number===1){document.getElementById("answer_field").innerHTML = "no";}
if (number===2) {document.getElementById("answer_field").innerHTML = "maybe";}
if (number===3) {document.getElementById("answer_field").innerHTML = "ask google";}
if (number===4) {document.getElementById("answer_field").innerHTML = "ask me later";}
if (number===5) {document.getElementById("answer_field").innerHTML = "i think so...?";}
if (number===6) {document.getElementById("answer_field").innerHTML = "what do you think?";}
if (number===7) {document.getElementById("answer_field").innerHTML = "i don't know";}

document.getElementById("question").value = "";}
