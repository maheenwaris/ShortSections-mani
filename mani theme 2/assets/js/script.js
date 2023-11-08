
const lines = [
    "Pen Tester",
    "Social Engineer",
    "Python Programmer"
];

const typewriter = document.getElementById("typewriter");
let lineIndex = 0;
let charIndex = 0;
let isTyping = true;

function typeText() {
    if (lineIndex < lines.length) {
        if (charIndex < lines[lineIndex].length) {
            typewriter.textContent += lines[lineIndex][charIndex];
            charIndex++;
            setTimeout(typeText, 100); // Adjust the typing speed (delay) here
        } else {
            isTyping = false;
            setTimeout(removeText, 1000); // Remove the line after 2 seconds
        }
    }
}

function removeText() {
    if (typewriter.textContent.length > 0) {
        typewriter.textContent = typewriter.textContent.slice(0, -1);
        setTimeout(removeText, 50); // Adjust the erasing speed (delay) here
    } else {
        isTyping = true;
        lineIndex++;
        if (lineIndex < lines.length) {
            setTimeout(typeText, 1000); // Start typing the next line after a 1-second delay
        }
    }
}
typeText(); // Start typing the first line