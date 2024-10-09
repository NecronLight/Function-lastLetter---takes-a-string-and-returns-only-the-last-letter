function lastLetter() {
    let text = prompt("Tell me something")
    let length = text.length
    console.log(text.slice(length - 1));
}

lastLetter();