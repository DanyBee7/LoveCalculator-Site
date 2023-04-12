function loveScore() {
    var name = document.getElementById("yourName");
    var love = document.getElementById("loversName");
    var loveScore = Math.random() * 100;
    document.getElementById("outputName").innerText = name.value;
    document.getElementById("outputLoversName").innerText = love.value;
    loveScore = Math.floor(loveScore) + 1;
    document.getElementById("outputLoveScore").innerText = loveScore;
        if (loveScore >= 70) {
            document.getElementById("outputMessage").innerText = "Congratulations! You are perfect for each other! 🥳";
        } else if (loveScore >= 50 && loveScore < 70) {
            document.getElementById("outputMessage").innerText = "You both are compatible! 👏";
        } else {
            document.getElementById("outputMessage").innerText = "Sorry! You go together like oil and water. 😞";
        }
}

document.getElementById("submitButton").addEventListener("click", function(e) {
    loveScore();
})