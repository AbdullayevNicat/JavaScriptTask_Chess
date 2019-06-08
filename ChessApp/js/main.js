//global variable
const mainContent = document.querySelector('#main');

//create figure instance
var blackKing = new King();
blackKing.color = 'black';
blackKing.name = 'king';

var whiteKing = new King();
whiteKing.color = 'white';
whiteKing.name = 'king';

var blackVizier = new Vizier();
blackVizier.color = 'black';
blackVizier.name = 'vizier';

var whiteVizier = new Vizier();
whiteVizier.color = 'white';
whiteVizier.name = 'vizier';

var blackBishop = new Bishop();
blackBishop.color = 'black';
blackBishop.name = 'bishop';

var whiteBishop = new Bishop();
whiteBishop.color = 'white';
whiteBishop.name = 'bishop';

var blackKnight = new Knight();
blackKnight.color = 'black';
blackKnight.name = 'knight';

var whiteKnight = new Knight();
whiteKnight.color = 'white';
whiteKnight.name = 'knight';

var blackRook = new Rook();
blackRook.color = 'white';
blackRook.name = 'rook';

var whiteRook = new Rook();
whiteRook.color = 'white';
whiteRook.name = 'rook';

var blackPawn = new Pawn();
blackPawn.color = 'white';
blackPawn.name = 'pawn';

var whitePawn = new Pawn();
whitePawn.color = 'white';
whitePawn.name = 'pawn';


var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

//default create all figure
function CreateElement() {
    let table = document.createElement('table');

    let tbody = document.createElement('tbody');


    for (let indexTr = 0; indexTr < 8; indexTr++) {
        var tr = document.createElement('tr');

        for (let indexTd = 0; indexTd < 8; indexTd++) {
            var td = document.createElement('td');

            td.style.position = 'relative';

            var span; var icon;

            var darkColor = 'rgb(177, 185, 184)';
            var lightColor = 'rgb(148, 151, 151)';
            //add digit color
            if (indexTd % 2 == 0) {
                if (indexTr % 2 == 0) {
                    td.style.backgroundColor = darkColor;
                    td.setAttribute('data-backgroundColor', darkColor);
                }
                else {
                    td.style.backgroundColor = lightColor;
                    td.setAttribute('data-backgroundColor', lightColor);
                }
            }
            else {
                if (indexTr % 2 != 0) {
                    td.style.backgroundColor = darkColor;
                    td.setAttribute('data-backgroundColor', darkColor);
                }
                else {
                    td.style.backgroundColor = lightColor;
                    td.setAttribute('data-backgroundColor', lightColor);
                }
            }

            //add figure
            if (indexTr == 0 || indexTr == 7) {

                icon = document.createElement('i');

                //add king figure
                if ((indexTd == 3 && indexTr == 0) || (indexTd == 4 && indexTr == 7)) {
                    icon.className = 'fas fa-chess-king';
                    td.setAttribute('data-name', whiteKing.name);
                }
                //add 
                if ((indexTd == 4 && indexTr == 0) || (indexTd == 3 && indexTr == 7)) {
                    icon.className = 'fas fa-crown';
                    td.setAttribute('data-name', whiteVizier.name);
                }
                if (indexTd == 2 || indexTd == 5) {
                    icon.className = 'fas fa-chess-bishop';
                    td.setAttribute('data-name', whiteBishop.name);
                }
                if (indexTd == 1 || indexTd == 6) {
                    icon.className = 'fas fa-chess-knight';
                    td.setAttribute('data-name', whiteKnight.name);
                }
                if (indexTd == 0 || indexTd == 7) {
                    icon.className = 'fas fa-chess-rook';
                    td.setAttribute('data-name', whiteRook.name);
                }

                

                icon.style.fontSize = '60px';

                td.appendChild(icon);
            }

            if (indexTr == 1 || indexTr == 6) {
                icon = document.createElement('i');
                icon.className = 'fas fa-chess-pawn';
                icon.style.fontSize = '60px';
                td.appendChild(icon);
                td.setAttribute('data-name', whitePawn.name);
            }
            if (indexTr == 6 || indexTr == 7)
                icon.style.color = '#fff';

            if (indexTr == 0 || indexTr == 1)
                td.setAttribute('data-color', 'black');
            if (indexTr == 6 || indexTr == 7)
                td.setAttribute('data-color', 'white');

            if (indexTd == 0) {
                span = document.createElement('span');
                span.style.position = 'absolute';
                span.style.top = '3px';
                span.style.left = '3px';
                span.innerText = indexTr + 1;
                span.style.color = 'rgb(233, 240, 240)';
                span.style.fontSize = '1.2rem';
                td.appendChild(span);
            }
            if (indexTr == 7) {
                span = document.createElement('span');
                span.style.position = 'absolute';
                span.style.bottom = '3px';
                span.style.right = '3px';
                span.innerText = alphabet[indexTd];
                span.style.color = 'rgb(233, 240, 240)';
                span.style.fontSize = '1.2rem';
                td.appendChild(span);
            }

            td.style.textAlign = 'center';
            td.style.width = '90px';
            td.style.height = '90px';
            td.setAttribute('id', indexTr + 1 + alphabet[indexTd]);
            td.style.cursor = 'pointer';
            td.style.position = 'relative';

            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);

    mainContent.appendChild(table);
}

$(document).ready(() => {
    CreateElement();
});

var isOrder = true;

$(document).on('click', '#main tr td', function (e) {
    var current = e.currentTarget;

    $(current).off();

    var color = current.getAttribute('data-color');
    var name = current.getAttribute('data-name');

    if (color != null && name != null && !CheckIsActive(current)) {

        if (color == 'white') {

            var activeFigure = current.getAttribute('data-isActived');

            if (isOrder || activeFigure == 'active') {

                if (name == 'pawn') {
                    if (whitePawn.Move(current, color)) {
                        whitePawn.Strike(current);
                    }
                }
                if (name == 'knight') {
                    whiteKnight.Move(current, color);
                }

                if (activeFigure == null)
                    isOrder = false;
                else
                    isOrder = true;
            }
        }
        else if (color == 'black') {

            var activeFigure = current.getAttribute('data-isActived');

            if (!isOrder || activeFigure == 'active') {
                if (name == 'pawn') {
                    if (blackPawn.Move(current, color)) {
                        blackPawn.Strike(current);
                    }
                }
                if (name == 'knight') {
                    whiteKnight.Move(current, color);
                }
                
                if (activeFigure == null)
                    isOrder = true;
                else
                    isOrder = false;
            }
        }
    }
});

//check any figure activity
function CheckIsActive(current) {
    if (current != null) {
        let main = current.parentElement.parentElement;

        for (let tr = 0; tr < main.children.length; tr++) {
            for (let td = 0; td < main.children[tr].children.length; td++) {
                var prezent = main.children[tr].children[td];

                if (prezent.getAttribute("data-isActived") != null) {
                    if (prezent != current) {
                        return true;
                    }
                }
                if (prezent.getAttribute("data-move") == 'moved') {
                    prezent.removeAttribute("data-move");
                    return true;
                }

                activedElement = prezent;
            }
        }
    }
    return false;
}
