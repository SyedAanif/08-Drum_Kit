// target element . adding-event-listener (event-type, function/callback)
// document.querySelector("button").addEventListener("click", handleClick);

// ANONYMOUS FUNCTION
// Higher order function and Callbacks
// document.querySelector("button").addEventListener("click", function(){
//     alert("Anonymous Click");
// });


// // To play audio
// var audio = new Audio("./sounds/crash.mp3"); // HTML audio element
// audio.play();

// will handle click events
function handleClick(){
    // alert("Got Clicked");
    // "this" will get the object reference that triggered the callback i.e; the button
    // console.log(this);
    // this.style.color = "white";
    var buttonText = this.textContent;
    // console.log(buttonText)

    playSound(buttonText);

    addAnimations(buttonText);
}

// Add event listener of click to all buttons
var allButtons = document.querySelectorAll("button.drum");
for (index = 0; index < allButtons.length; index++) {
    allButtons[index].addEventListener("click",handleClick); 
}
// allButtons.forEach(button => {
//     button.addEventListener("click",handleClick);
// });

// Add keyboard event to the whole document
// getting whole EVENT of KEYDOWN
document.addEventListener("keydown", function(event){
    // console.log(event);
    playSound(event.key);
    addAnimations(event.key);
});


function playSound(key){
    // In switch-case "break" is necessary
    switch (key) {
        case "w": 
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play(); 
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            // something default
            console.log(key);
            break;
    }
}

function addAnimations(key){
    // query by class name
    var activeButton = document.querySelector("."+key);
    // add animations class
    activeButton.classList.add("pressed");

    // add delay and remove the class for animation
    // function to do it and after how many milliseconds
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 200);
}