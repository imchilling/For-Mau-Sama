let noCount = 0;

// Set the initial question
const initialQuestion = "Will you go on a date with me?";
document.getElementById('question').innerText = initialQuestion;

document.getElementById('yesButton').addEventListener('click', function() {
    // Remove the question and buttons, and display the new text
    document.getElementById('question').innerText = ""; // Clear the question
    document.getElementById('yesButton').style.display = 'none'; // Hide the Yes button
    document.getElementById('noButton').style.display = 'none'; // Hide the No button
    document.getElementById('container').innerHTML += '<h2>Thank You So Much Mau!!!!</h2>';
    document.getElementById('container').innerHTML += '<h2>Date Kaha Jana hai, Kaise Jana, Aur Kya karna Hai Sab Mai Plan Kar Ke Aap Ko Bata Dunga..</h2>';
});

document.getElementById('noButton').addEventListener('click', function() {
    noCount++;
    if (noCount === 1) {
        // Change the question after the first "No"
        document.getElementById('question').innerText = "Dekh le Ur Gonna Miss A Great Day..";
    } else if (noCount === 2) {
        // Change the question after the second "No"
        document.getElementById('question').innerText = "Soch lo Last Time Puch rha hu....";
    } else if (noCount === 3) {
        // Change the question after the third "No"
        document.getElementById('question').innerText = "Mau Please Chal Lo... Ye Meri akri echa hai... Pleasee";
    } else if (noCount >= 4) {
        // After the third "No", just move the button randomly
        moveNoButton();
    }
});

function moveNoButton() {
    const noButton = document.getElementById('noButton');
    const container = document.getElementById('container');
    
    // Get container dimensions
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;

    // Get button dimensions
    const buttonWidth = noButton.clientWidth;
    const buttonHeight = noButton.clientHeight;

    // Calculate random position
    const randomX = Math.random() * (containerWidth - buttonWidth);
    const randomY = Math.random() * (containerHeight - buttonHeight);

    // Set new position
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}