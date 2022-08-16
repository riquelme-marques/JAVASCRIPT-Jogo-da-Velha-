
numJog= 0;
var player = "Wolverine";
function checkjogo(id) {

    var opt = verificaSrc(id);
    var pc = document.getElementById('cpu').checked;

    if (opt == "transp.png") {
        document.getElementById(id).src = "img/" + player + ".png";

        numJog++;

        if (winchek()) {
            alert(" Fim de Jogo " + player + " VENCEU! ")
            return false;
            //location.reload();
        }
        if (numJog >= 9) {
            alert("Fim de jogo !! Deu velha !!!");
            return false;
            //location.reload();
        }

        if (player == "Wolverine") {
            player = "Capitão";

        } else { 
            player = "Wolverine";
        } 
    }

    if (pc && player == "Capitão") {
        checkjogo(jogoDoPc());
    } 
}

function jogoDoPc() {
    if (verificaSrc('c5') == "transp.png") {
        return 'c5';
    }
    return 'c' + Math.floor((Math.random() * 9) + 1);
    }

function verificaSrc(id) {
    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
}

function winchek() {
    if ((verificaSrc('c1') == verificaSrc('c2')) && (verificaSrc('c1') == verificaSrc('c3')) && verificaSrc('c1') != "transp.png") {
        return true;
    }

    if ((verificaSrc('c4') == verificaSrc('c5')) && (verificaSrc('c4') == verificaSrc('c6')) && verificaSrc('c4') != "transp.png") {
        return true;
    }

    if ((verificaSrc('c7') == verificaSrc('c8')) && (verificaSrc('c7') == verificaSrc('c9')) && verificaSrc('c7') != "transp.png") {
        return true;
    }

    if ((verificaSrc('c1') == verificaSrc('c5')) && (verificaSrc('c1') == verificaSrc('c9')) && verificaSrc('c1') != "transp.png") {
        return true;
    }

    if ((verificaSrc('c3') == verificaSrc('c5')) && (verificaSrc('c3') == verificaSrc('c7')) && verificaSrc('c3') != "transp.png") {
        return true;
    }

    if ((verificaSrc('c2') == verificaSrc('c5')) && (verificaSrc('c2') == verificaSrc('c8')) && verificaSrc('c2') != "transp.png") {
        return true;
    }

    if ((verificaSrc('c1') == verificaSrc('c4')) && (verificaSrc('c1') == verificaSrc('c7')) && verificaSrc('c1') != "transp.png") {
        return true;
    }

    if ((verificaSrc('c3') == verificaSrc('c6')) && (verificaSrc('c3') == verificaSrc('c9')) && verificaSrc('c3') != "transp.png") {
        return true;
    }
}

