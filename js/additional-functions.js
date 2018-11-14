

ticTacToe.isRow = function(player){
    // for (var i=0; i < ticTacToe.matrix.length; i++){
    //     ticTacToe.matrix[i]; //[x,x,x]
    //     var result = true;
    //     for (var j=0; j<ticTacToe.matrix[i].length; j++){
    //         if (matrix[i][j] !== ticTacToe.currentPlayer){
    //             result = false;
    //             break;
    //         }
    //     }
    //     if (result){
    //         return true;
    //     }
    // }
    var rows = (ticTacToe.matrix[0][0] === player && ticTacToe.matrix[0][1] === player && ticTacToe.matrix[0][2] === player)
    || (ticTacToe.matrix[1][0] === player && ticTacToe.matrix[1][1] === player && ticTacToe.matrix[1][2] === player)
    || (ticTacToe.matrix[2][0] === player && ticTacToe.matrix[2][1] === player && ticTacToe.matrix[2][2] === player);
    return rows;
}

icTacToe.didPlayerWin = function (player) {
    //hard coded solution

    //     var rows = (ticTacToe.matrix[0][0] === player && ticTacToe.matrix[0][1] === player && ticTacToe.matrix[0][2] === player)
    //     || (ticTacToe.matrix[1][0] === player && ticTacToe.matrix[1][1] === player && ticTacToe.matrix[1][2] === player)
    //     || (ticTacToe.matrix[2][0] === player && ticTacToe.matrix[2][1] === player && ticTacToe.matrix[2][2] === player);
    // var cols = (ticTacToe.matrix[0][1] === player && ticTacToe.matrix[1][0] === player && ticTacToe.matrix[2][0] === player)
    //     || (ticTacToe.matrix[0][1] === player && ticTacToe.matrix[1][1] === player && ticTacToe.matrix[2][1] === player)
    //     || (ticTacToe.matrix[0][2] === player && ticTacToe.matrix[1][2] === player && ticTacToe.matrix[2][2] === player);
    // var diag = (ticTacToe.matrix[0][0] === player && ticTacToe.matrix[1][1] === player && ticTacToe.matrix[2][2] === player)
    //     || (ticTacToe.matrix[0][2] === player && ticTacToe.matrix[1][1] === player && ticTacToe.matrix[2][0] === player);

    // nested loop solution
    var rows = false;
    var cols = false;
    for (var i = 0; i < ticTacToe.matrix.length; i++) {
        var rowCounter = 0;
        var colCounter = 0;
        for (var j = 0; j < ticTacToe.matrix[i].length; j++) {
            if (ticTacToe.matrix[i][j] === player) {
                rowCounter++;
            }
            if (ticTacToe.matrix[j][i] === player) {
                colCounter++;
            }
        }
        if (rowCounter >= 3) {
            rows = true;
        }
        if (colCounter >= 3) {
            cols = true;
        }
    }

    //ninja builtin functions
    // var rows = ticTacToe.matrix.find(arr => arr.filter(x => x === player).length === 3);
    var diag = [0, 1, 2].every(x => ticTacToe.matrix[x][x] === player) ||
        [0, 1, 2].every(x => ticTacToe.matrix[x][2 - x] === player);
    // var cols = [0, 1, 2].find(x => [0, 1, 2].every(y => ticTacToe.matrix[y][x] === player));

 
    return rows || cols || diag;
};

ticTacToe.checkIfGameShouldGoOn = function () {
    var allCells = [];
    ticTacToe.matrix.forEach(element => { allCells = allCells.concat(element) });
    return allCells.includes("");
};

