 var actionstate = false;
 
function trueaction() {
console.log("become inactive")
document.getElementById("senpaiState").style.color = '#7F7F7F';
document.getElementById("senpaiState").innerHTML = 'Senpai is inactive'
}

function falseaction(){
  console.log("become active")
  document.getElementById("senpaiState").style.color = '#00FFC6';
  document.getElementById("senpaiState").innerHTML = 'Senpai is active'
}

document.getElementsByClassName('switch')[0].addEventListener("click", (e) => {
  
  e.preventDefault();
  
  if (actionstate === true) {
    trueaction();

  }
  if (actionstate === false) {
    falseaction();

  }

  actionstate = !actionstate;
  chrome.storage.sync.set({'nowState': actionstate}, function() {
    console.log(actionstate);
  });
  console.log("current state is " + actionstate);
  document.getElementById("check1").checked = actionstate;
});

chrome.storage.sync.get(['nowState'], function(data) {   
  console.log(actionstate);
  actionstate = data['nowState'];
  if(actionstate === true){
    falseaction();
    document.getElementById("check1").checked = actionstate;
  }
});



// $(function() {
//   //default value is "start"
//   var currentState = localStorage.currentState || "start";
//   //cache button DOM element reference
//   var $toggleBtn = $("#toggle-btn");

//   //update button status
//   if (currentState === "stop") {
//     $toggleBtn.text("OFF");
//   }

//   //register button click handler
//   $toggleBtn.click(function() {
//     if (currentState === "start") {
//       $toggleBtn.text("OFF");
//       localStorage.currentState = "stop";
//     }
//     if (currentState === "stop") {
//       $toggleBtn.text("ON");
//       localStorage.currentState = "start";
//     }
//   });
// 
