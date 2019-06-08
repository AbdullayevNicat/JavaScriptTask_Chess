//Abstract Class (Main)
class Ancestor {
    constructor() {
        if (this.target === Ancestor) {
            throw new TypeError("Cannot construct abstract instances directly");
        }
    }

    color;
    name;

    Move() { }
    Strike() { }
}
// ****************//


//PAWN
class Pawn extends Ancestor {
    Move(current, figureColor) {

        var color = current.getAttribute('data-color');
        var name = current.getAttribute('data-name');
        var id = current.getAttribute('id');

        if (color != null && name != null) {

            var horizontalName = id.slice(0, 1);
            var verticalName = id.slice(1, 2);
            var horizontal = horizontalName;

            var extention = new Extention();

            if (figureColor == 'white') {
                var pawnStartPlace = 7;

                var currentFirstTdId = --horizontalName + verticalName;
                var firstEnabledTd = document.getElementById(currentFirstTdId);


                var currentSecondTdId = --horizontalName + verticalName;
                var secondEnabledTd = document.getElementById(currentSecondTdId);

                extention.MovePawn(current, firstEnabledTd, secondEnabledTd,
                    horizontal, pawnStartPlace);

            }
            else if (figureColor == 'black') {
                var pawnStartPlace = 2;

                var currentFirstTdId = ++horizontalName + verticalName;

                var firstEnabledTd = document.getElementById(currentFirstTdId);

                var currentSecondTdId = ++horizontalName + verticalName;
                var secondEnabledTd = document.getElementById(currentSecondTdId);

                extention.MovePawn(current, firstEnabledTd, secondEnabledTd,
                    horizontal, pawnStartPlace);
            }
        }

        return true;
    }
    Strike(current) {
        var color = current.getAttribute('data-color');

        var extention = new Extention();

        if (color == 'white') {
            var isActived = current.getAttribute('data-isActived');

            var id = current.getAttribute('id');

            var horizontalName = id.slice(0, 1);

            var horizontal = --horizontalName;

            extention.StrikePawn(current, horizontal, 'black', id, isActived);
        }
        else if (color == 'black') {

            var isActived = current.getAttribute('data-isActived');

            var id = current.getAttribute('id');

            var horizontalName = id.slice(0, 1);

            var horizontal = ++horizontalName;

            extention.StrikePawn(current, horizontal, 'white', id, isActived);
        }
    }
}

//ROOK
class Rook extends Ancestor {
    Move() {

    }
    Strike() {

    }
}


//KNIGHT
class Knight extends Ancestor {
    Move(current, figureColor) {

        var color = current.getAttribute('data-color');
        var name = current.getAttribute('data-name');
        var id = current.getAttribute('id');

        if (color != null && name != null) {

            var horizontalName = id.slice(0, 1);
            var verticalName = id.slice(1, 2);

            function GetLocationChar(char, num) {
                var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

                for (let index = 0; index < alphabet.length; index++) {
                    if (alphabet[index] == char) {
                        return alphabet[index + num];
                    }
                }
            }

            var leftTop = document
                .getElementById(horizontalName - 2 + GetLocationChar(verticalName, -1));

            var leftHalfTop = document
                .getElementById(horizontalName - 1 + GetLocationChar(verticalName, -2));

            var leftHalfBottom = document
                .getElementById((Number(horizontalName) + 1) + GetLocationChar(verticalName, -2));

            var leftBottom = document
                .getElementById((Number(horizontalName) + 2) + GetLocationChar(verticalName, -1));

            var rightTop = document
                .getElementById((Number(horizontalName) - 2) + GetLocationChar(verticalName, 1));

            var rightHalfTop = document
                .getElementById((Number(horizontalName) - 1) + GetLocationChar(verticalName, 2));

            var rightHalfBottom = document
                .getElementById((Number(horizontalName) + 1) + GetLocationChar(verticalName, 2));

            var rightBottom = document
                .getElementById((Number(horizontalName) + 2) + GetLocationChar(verticalName, 1));


            if (current.getAttribute('data-isActived') == null) {

                current.setAttribute('data-isActived', 'active');

                SetMoveEvent(leftTop);

                SetMoveEvent(leftHalfTop);

                SetMoveEvent(leftHalfBottom);

                SetMoveEvent(leftBottom);

                SetMoveEvent(rightTop);

                SetMoveEvent(rightHalfTop);

                SetMoveEvent(rightHalfBottom);

                SetMoveEvent(rightBottom);

                function SetMoveEvent(moveable) {
                    if (moveable != null) {

                        if (moveable.getAttribute('data-color') == null &&
                            moveable.getAttribute('data-name') == null) {

                            moveable.style.backgroundColor = 'green';

                            $(moveable).one('click', function () {

                                var removeElement = current.querySelector('i');

                                if (removeElement != undefined) {
                                    current.removeChild(removeElement);
                                    moveable.appendChild(removeElement);
                                }

                                SaveChange(moveable, current);
                                ResetKnightEventAndColor();
                            });
                        }
                        else if (moveable.getAttribute('data-name') != null) {

                            var figColor = current.getAttribute('data-color');

                            var enemyColor;

                            if (figColor == 'black') {
                                enemyColor = 'white';
                            }
                            else if (figColor == 'white') {
                                enemyColor = 'black';
                            }

                            if (moveable.getAttribute('data-color') == enemyColor) {
                                moveable.style.backgroundColor = 'purple';

                                $(moveable).one('click', function () {

                                    var removeElement = current.querySelector('i');

                                    if (removeElement != undefined) {
                                        moveable.removeChild(moveable.querySelector('i'));
                                        current.removeChild(removeElement);
                                        moveable.appendChild(removeElement);
                                    }

                                    SaveChange(moveable, current);
                                    ResetKnightEventAndColor();
                                });
                            }
                        }
                        function SaveChange(moveable, current) {

                            moveable.style.backgroundColor = moveable
                                .getAttribute('data-backgroundcolor');

                            moveable.setAttribute('data-name',
                                current.getAttribute('data-name'));

                            moveable.setAttribute('data-color',
                                current.getAttribute('data-color'));

                            current.removeAttribute('data-name');
                            current.removeAttribute('data-color');
                            current.removeAttribute('data-isActived');
                        }
                    }
                }
            }
            else {
                ResetKnightEventAndColor();

                current.removeAttribute('data-isActived');
            }
            function ResetKnightEventAndColor() {

                if (leftTop != null) {
                    $(leftTop).off();
                    leftTop.style.backgroundColor = leftTop
                        .getAttribute('data-backgroundcolor');
                }

                if (leftHalfTop != null) {
                    $(leftHalfTop).off();
                    leftHalfTop.style.backgroundColor = leftHalfTop
                        .getAttribute('data-backgroundcolor');
                }

                if (leftHalfBottom != null) {
                    $(leftHalfBottom).off();
                    leftHalfBottom.style.backgroundColor = leftHalfBottom
                        .getAttribute('data-backgroundcolor');
                }

                if (leftBottom != null) {
                    $(leftBottom).off();
                    leftBottom.style.backgroundColor = leftBottom
                        .getAttribute('data-backgroundcolor');
                }

                if (rightTop != null) {
                    $(rightTop).off();
                    rightTop.style.backgroundColor = rightTop
                        .getAttribute('data-backgroundcolor');
                }

                if (rightHalfTop != null) {
                    $(rightHalfTop).off();
                    rightHalfTop.style.backgroundColor = rightHalfTop
                        .getAttribute('data-backgroundcolor');
                }

                if (rightHalfBottom != null) {
                    $(rightHalfBottom).off();
                    rightHalfBottom.style.backgroundColor = rightHalfBottom
                        .getAttribute('data-backgroundcolor');
                }

                if (rightBottom != null) {
                    $(rightBottom).off();
                    rightBottom.style.backgroundColor = rightBottom
                        .getAttribute('data-backgroundcolor');
                }
            }
        }

        return true;
    }
    Strike() 
    {

    }
}


//BISHOP
class Bishop extends Ancestor {
    Move() {

    }
    Strike() {

    }
}


//VIZIER
class Vizier extends Ancestor {
    Move() {

    }
    Strike() {

    }
}


//KING
class King extends Ancestor {
    Move() {

    }
    Strike() {

    }
}

