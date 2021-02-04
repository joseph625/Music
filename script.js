//If you press any key show the result 

document.addEventListener('keydown', (event) => {
    let key = event.keyCode;
    animationButton(key)
    switch (key) {
        case 65:
            var a = new Audio("./assets/Piano Chord 331.mp3");
            a.play();
            break;
        case 83:
            var a = new Audio("./assets/Piano Chord 209.mp3");
            a.play();
            break;
        case 68:
            var a = new Audio("./assets/Piano Chord 208.mp3");
            a.play();
            break;
        case 70:
            var a = new Audio("./assets/Drum Sticks Hit 3.mp3");
            a.play();
            break;
        case 71:
            var a = new Audio("./assets/Drum Snare Roll.mp3");
            a.play();
            break;
        case 72:
            var a = new Audio("./assets/PREL Musical 57.mp3");
            a.play();
            break;
        case 74:
            var a = new Audio("./assets/Cymbal Suspended 2.mp3");
            a.play();
            break;
        case 75:
            var a = new Audio("./assets/Musical Compos 33.mp3");
            a.play();
            break;
        case 76:
            var a = new Audio("./assets/Musical Orches 4.mp3");
            a.play();
            break;
        default:
            break;
    }
})


animationButton = (key) => {
    let element = document.getElementById(key);

    if (key === 65 || key === 83 || key === 68) {
        element.classList.add("pressed")
    } else if (key === 75 || key === 76) {
        element.classList.add("pressed1")
    } else {
        element.classList.add("pressed2")
    }

    setTimeout(() => {
        element.classList.remove("pressed");
        element.classList.remove("pressed1");
        element.classList.remove("pressed2");
    }, 200)
}