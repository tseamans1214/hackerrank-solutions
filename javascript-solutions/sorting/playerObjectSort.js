// input is given as follows:
// 5 (numbers of players)
// amy 100 (player.name player.score)
// david 100
// heraldo 50
// aakansha 75
// aleksa 150
function processData(input) {
    //Enter your code here
    // Read data into array of player objects
    let players = [];
    // Split the given data by each line
    let playerInfo = input.split("\n");
    // Remove the first element in the array because it is the number of players
    playerInfo.shift();
    // Loop through the array of player info
    for (let i=0; i<playerInfo.length; i++) {
        // Split player into array containing player name and score
        let player = playerInfo[i].split(" ");
        // Create player object with data
        let playerObject = {
            "name": player[0],
            "score": parseInt(player[1]),
        }
        // Insert created player object into array players
        players.push(playerObject);
    }
    // Sort array of player objects first by score, then by name
    players.sort(function(player1, player2) {
    if (player1.score > player2.score) {
        return -1;
    } else if (player1.score < player2.score) {
        return 1;
    } else {
        if (player1.name < player2.name) {
            return -1
        } else {
            return 1;
        }
    }
    } );
    // Print all the players and their scores in order
    for (let i=0; i<players.length; i++) {
        console.log(players[i].name + " " + players[i].score);
    }
} 
