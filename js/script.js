let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {

    // quando alguem clica na caixa
    boxes[i].addEventListener("click", function () {

        let el = checkEl(player1, player2);


        if (this.childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);
            this.appendChild(cloneEl);

            //computar jogada
            if (player1 == player2) {
                player1++
            } else {
                player2++
            }

            //checa quem venceu
            checkWinCondition();

        }
    }
    )
};

//quem vai jogar
function checkEl(player1, player2) {
    if (player1 == player2) {
        el = x;
    } else {
        el = o;
    }
    return el;
}


//quem ganhou

function checkWinCondition() {
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    //horizontal
    if (b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0) {

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if (b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            declaraWinner('x');
        } else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
            declaraWinner('o');

        }
    }

    //horizontal
    if (b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if (b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            declaraWinner('x');
        } else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            declaraWinner('o');

        }
    }

    //horizontal
    if (b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            declaraWinner('x');
        } else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
            declaraWinner('o');

        }
    }

    //vertical
    if (b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            declaraWinner('x');
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
            declaraWinner('o');

        }
    }
    //vertical
    if (b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0) {

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if (b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            declaraWinner('x');
        } else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
            declaraWinner('o');

        }
    }
    //vertical
    if (b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            declaraWinner('x');
        } else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
            declaraWinner('o');

        }
    }

    //diagonal
    if (b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0) {

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if (b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            declaraWinner('x');
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
            declaraWinner('o');

        }
    }

    //diagonal
    if (b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0) {

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if (b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            declaraWinner('x');
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
            declaraWinner('o');

        }
    }

    //velha
    let counter = 0;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].childNodes[0] != undefined) {
            counter++
        }
    }

    if (counter == 9) {
        declaraWinner('Deu velha!');
    }

}

//limpar jogo, declarar vencedor e atualizar placar
function declaraWinner(winner) {
    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardY = document.querySelector("#scoreboard-2");
    let msg = '';

    if (winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 venceu!";
    } else if (winner == 'o') {
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
        msg = "O jogador 2 venceu!";

    } else {
        msg = "Deu velha!";
    }

    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    setTimeout(function () {
        messageContainer.classList.add("hide");
    }, 3000);

    player1 = 0;
    player2 = 0;

    let boxesToRemove = document.querySelectorAll(".box div");
    for (let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }

}