const hadGoldKey = false;
const playerCoins = 100;
const isAdm = false;

if (hadGoldKey || playerCoins >= 100 || isAdm) {
    console.log("You can open this portal.");
} else {
    console.log("You can't open this portal.")
}