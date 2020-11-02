
var PO = false;
var PX = false;
var result = [0,0,0,0,0,0,0,0,0];

function move(button) {
    if (!PO && !PX) {
        PO = true;
    }
    if(PO) {
        button.value = "O";
        result[parseInt("button.id") - 1] = "O";
        PO = false;
        PX = true;
        button.disabled = true;
        }
    if(PX) {
            button.value = "X";
            result[parseInt("button.id") - 1] = "X";
            PO = true;
            PX = false;
            button.disabled = true;
            }
        }
function won(result) {
    if(result[0] === result[1] === result[2] || result[0] === result[3] === result[6] || result[0] === result[4] === result[8] ) {
        alert("Player " + result[0] + " is the winner")
    }
}

       