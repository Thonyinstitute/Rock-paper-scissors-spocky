/** the first function where will be to wait for the DOM to finish loading before running the game
 * get the button elememts and add event listener to them
 */

document.addEventListener("DOMContentLoaded",function() {
    let buttons = document.getElementsByTagName("button");

/** the below syntax is to iterate through an array while the upper function is getting the buton elements */
 
/** for(let i = 0; i < buttons.length; i++) is the old ways of doing it */

for (let button of buttons ) {
    button.addEventListener("click", function() {
        if(this.getAttribute("icon") ==="btn btn--big"){
            alert("You clicked btn btn--big");
        }else {
            let gametype = this.getAttribute("icon");
            alert (`You clicked ${gametype}`);
        }
    })
}
} )

function rungame() {

}

function CheckAnswer() {

}

function CalculateCorrectAnswer() {

}

function IncrementScore() {

}

function IncrementWrongAnswer() {

}