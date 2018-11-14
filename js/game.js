var ticTacToe = {};

$(document).ready(function () {
    ticTacToe.init();
});

ticTacToe.init = function () {
    ticTacToe.currentPlayer = 'red';
    // We start from red, and than switch over to blue
    ticTacToe.playerIndicator = $('.current-player-indicator');
    ticTacToe.playerIndicator.addClass(ticTacToe.currentPlayer);
    ticTacToe.boxes = $('.box');
    ticTacToe.boxes.on('click', ticTacToe.clickOnBoxes);
    ticTacToe.initBoard();
    ticTacToe.setNames();
}


ticTacToe.clickOnBoxes = function () {
    var boxClicked = $(this);
    boxClicked.addClass(ticTacToe.currentPlayer);
    var i = boxClicked.data('i');
    var j = boxClicked.data('j');
    ticTacToe.matrix[i][j] = ticTacToe.currentPlayer;
    if (ticTacToe.didPlayerWin(ticTacToe.currentPlayer)) {
        var winner = ticTacToe.getName(ticTacToe.currentPlayer);
        $('.result').text(winner + ' has won!');
        ticTacToe.resetGame();
    } else if (!ticTacToe.checkIfGameShouldGoOn()) {
        $('.result').text('This is a tie');
        ticTacToe.resetGame();
    } else {
        ticTacToe.switchPlayer();
    }
}

ticTacToe.switchPlayer = function () {
    ticTacToe.playerIndicator.toggleClass("red blue");
    ticTacToe.currentPlayer = ticTacToe.currentPlayer === 'red' ? 'blue' : 'red';
};

ticTacToe.initBoard = function () {
    ticTacToe.matrix = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    for (var i = 0; i < ticTacToe.matrix.length; i++) {
        for (var j = 0; j < ticTacToe.matrix[i].length; j++) {
            ticTacToe.boxes.eq(i * 3 + j)
                .data("i", i)
                .data("j", j);
        }
    }
};

ticTacToe.didPlayerWin = function (player) {
    var rows = ticTacToe.didPlayerCompleteARow(player);
    var diag = ticTacToe.didPlayerCompleteADiagonal(player);
    var cols = ticTacToe.didPlayerCompleteAColumn(player);
    return rows || cols || diag;
};

ticTacToe.didPlayerCompleteARow = function (player) {
    var rows = (ticTacToe.matrix[0][0] === player && ticTacToe.matrix[0][1] === player && ticTacToe.matrix[0][2] === player)
        || (ticTacToe.matrix[1][0] === player && ticTacToe.matrix[1][1] === player && ticTacToe.matrix[1][2] === player)
        || (ticTacToe.matrix[2][0] === player && ticTacToe.matrix[2][1] === player && ticTacToe.matrix[2][2] === player)
    return rows;
}

ticTacToe.didPlayerCompleteADiagonal = function (player) {
    return false;
}

ticTacToe.didPlayerCompleteAColumn = function (player) {
    return false;
}

ticTacToe.resetGame = function () {
    //clean the js board
    ticTacToe.initBoard();
    //clear the DOM board
    ticTacToe.boxes.removeClass("red blue");
};

ticTacToe.checkIfGameShouldGoOn = function () {
    for (var i = 0; i < ticTacToe.matrix.length; i++) {
        for (var j = 0; j < ticTacToe.matrix[i].length; j++) {
            if (ticTacToe.matrix[i][j] === "") {
                return true;
            }
        }
    }
    return false;
};

ticTacToe.setNames = function () {
    $('.btn-start-game').on('click', function () {
        var name1 = $('input.player1').val();
        var name2 = $('input.player2').val();
        if (name1 && name2) {
            $('span.player1').text(name1);
            $('span.player2').text(name2);
        }
    });
};

ticTacToe.getName = function (player) {
    if (player === "red") {
        return $('input.player1').val() || "red";
    }
    else {
        return $('input.player2').val() || "blue";
    }
};


