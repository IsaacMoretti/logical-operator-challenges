const player = {
    CompletedTutorial: true,
    hasInternet: true,
    isNotBanned: false
};

if (player.CompletedTutorial && player.hasInternet && player.isNotBanned) {
    console.log("Welcome to multiplayer mode!");
} else {
    console.log("Multiplayer access denied.");
}

if (!player.CompletedTutorial) console.log("- Complete the tutorial first.");
if (!player.hasInternet) console.log("- No internet connection detected.");
if(!player.isNotBanned) console.log("- You are banned.");