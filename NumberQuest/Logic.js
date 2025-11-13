let game_num = Math.floor(Math.random() * 10) + 1;
let attempts = 5;

function verification(event) {
    event.preventDefault(); // Prevent form from submitting

    let userinput = parseInt(document.getElementById("userinput").value);

    if (isNaN(userinput) || userinput < 0) {
        alert("Please enter a valid input");
        return;
    }

    if (attempts <= 0) {
        alert("Your attempts are completed. You are out! Please restart the game.");
        return;
    }

    attempts--; // decrease attempts after each guess

    if (userinput < game_num) {
        alert("LOW. Attempts left: " + attempts);
    } else if (userinput > game_num) {
        alert("HIGH. Attempts left: " + attempts);
    } else {
        alert("Hurrah! You have guessed accurately!!");
        return;
    }

    if (attempts === 0) {
        alert("Your attempts are completed. You are out! Please restart the game.");
    }
}
