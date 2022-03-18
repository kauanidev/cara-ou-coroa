const coins = document.getElementById("coins");
const buttons = document.getElementById("buttons");
const coinsContainer = document.getElementById("coins-container");

function flipCoin(type) {
    coins.setAttribute("class", "");
    buttons.style.pointerEvents = "none";
    buttons.style.opacity = 0.5;
    coinsContainer.style.color = "var(--dark-purple)";

    setTimeout(function() {
        const random = Math.random();
        const result = random < 0.5 ? 'heads' : 'tails';
        coins.setAttribute("class", "animate-" + result);

        const winner = type === result;

        setTimeout(function() {
            buttons.style.pointerEvents = "auto";
            buttons.style.opacity = 1;
            coinsContainer.style.color = winner ? "var(--win)" : "var(--lose)";
        }, 5000);
    }, 100)
}