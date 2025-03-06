
const button1 = document.getElementById("button1");
let text = document.getElementById("text");
let clicks = 0;
let clicks2 = 0;
const container = document.getElementById("container");
const button2 = document.createElement("button");


function yellatuser(){ 
    clicks++;
    if (clicks==1) {
      text.innerHTML="STOP TOUCHING ME"
    }
 else if ( clicks == 5 ) {
    text.innerHTML="..."

}

 else if ( clicks == 10 ) {
   button1
    text.innerHTML=">:("
 }
 else if ( clicks == 11 ) {
    text.innerHTML="STOP IT!"
 }
 else if ( clicks == 16 ) {
    text.innerHTML="watch REPO!The genetic opera."
 }
else if ( clicks == 17 ) {
   text.innerHTML="STOP IT!"
 }
    else if ( clicks == 21 ) {
    text.innerHTML="i hope you stub your toe, and then when it stops hurting you stub it again"
     }
         else if ( clicks == 28 ) {
    text.innerHTML="sending bees your way"
}
else if ( clicks == 32 ) {
   text.innerHTML="i hope you aren't attatched to your family"
}
else if ( clicks == 33 ) {
    text.innerHTML="who said that?"
 }
 else if ( clicks == 34 ) {
    text.innerHTML="I HATE YOU"
    button1.classList.add("move");
 }
 else if ( clicks == 38 ) {
    text.innerHTML="you're the worst."
    button1.classList.remove("move");
 }
 else if ( clicks == 39 ) {
   text.innerHTML="you know what? here, have this button instead"
}
else if ( clicks == 40 ) {

   button2.innerHTML = "You can press this button:D";
   button2.classList.add("button1");
   button2.classList.add("button2");
   container.appendChild(button2);
}
else if ( clicks == 43 ) {
  text.innerHTML="why are you pressing me,, bother him instead"

}
}
function talktouser(){ 
   clicks2++;
   if (clicks2==1) {
      text.innerHTML=":3"
      text.style.color = "rgb(234, 0, 255)";
      }
    if (clicks2==4) {
       text.innerHTML="..."
      text.style.color = "rgb(234, 0, 255)";
    }
      if (clicks2==5) {
       text.innerHTML="ow.."
      text.style.color = "rgb(234, 0, 255)";
    }
      if (clicks2==6) {
       text.innerHTML="ow..ow.."
      text.style.color = "rgb(234, 0, 255)";
    }
      if (clicks2==7) {
       text.innerHTML="ow..ow..ow:(.."
      text.style.color = "rgb(234, 0, 255)";
    }
      if (clicks2==8) {
      text.innerHTML="<i>cough..</i>"
      text.style.color = "rgb(234, 0, 255)";
    }
}

button1.addEventListener("click", yellatuser);
button2.addEventListener("click", talktouser);


