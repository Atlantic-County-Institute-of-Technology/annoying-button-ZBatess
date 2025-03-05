const button1 = document.getElementById("button1");
let text = document.getElementById("text");
let clicks = 0;
const container = document.getElementById("container")


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
    text.innerHTML="not me"
 }
 else if ( clicks == 35 ) {
    text.innerHTML="its crazy that you're getting threatened by a button right now"
 }
 else if ( clicks == 37 ) {
   text.innerHTML="press this button instead"
}
else if ( clicks == 38 ) {
   const button2 = document.createElement("button");
   button2.innerHTML = "You can press this button:D";
   button2.classList.add("button1");
   button2.classList.add("button2");
   container.appendChild(button2);
}
else if ( clicks == 39 ) {
  text.innerHTML=""

}
}




button2.addEventListener("click", talktouser);
button1.addEventListener("click", yellatuser);
