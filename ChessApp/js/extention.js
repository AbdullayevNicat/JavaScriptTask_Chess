class Extention {
    
    //Extention method for pawn movement
    MovePawn(current, firstEnabledTd, secondEnabledTd
        , horizontal, pawnStartPlace) {

        if (firstEnabledTd != null) {
            $(firstEnabledTd).off();
            $(secondEnabledTd).off();
            $(current).off();

            var firstEnabledTdColor = firstEnabledTd.getAttribute('data-color');
            var firstEnabledTdName = firstEnabledTd.getAttribute('data-name');

            if (current.getAttribute('data-isActived') != 'active') {

                current.setAttribute('data-isActived', 'active');
                current.style.backgroundColor = 'green';

                if (firstEnabledTdName == null && firstEnabledTdColor == null) {

                    firstEnabledTd.style.backgroundColor = 'green';

                    if (horizontal == pawnStartPlace) {

                        var secondEnabledTdColor = secondEnabledTd.getAttribute('data-color');
                        var secondEnabledTdName = secondEnabledTd.getAttribute('data-name');

                        if (firstEnabledTdColor == null && firstEnabledTdName == null) {

                            $(firstEnabledTd).one('click', function (e) {
                                var removeElement = current.querySelector('i');

                                if (removeElement != undefined) {
                                    current.removeChild(removeElement);
                                    firstEnabledTd.appendChild(removeElement);
                                }

                                current.style.backgroundColor = current.getAttribute('data-backgroundColor');
                                firstEnabledTd.style.backgroundColor = firstEnabledTd
                                    .getAttribute('data-backgroundColor');
                                secondEnabledTd.style.backgroundColor = secondEnabledTd
                                    .getAttribute('data-backgroundColor');

                                firstEnabledTd.setAttribute("data-color", current.getAttribute('data-color'));

                                firstEnabledTd.setAttribute("data-name", current.getAttribute('data-name'));
                                firstEnabledTd.setAttribute("data-move", "moved");

                                current.removeAttribute("data-color");
                                current.removeAttribute("data-name");
                                current.removeAttribute("data-isActived");

                            });

                            if (secondEnabledTdColor == null && secondEnabledTdName == null) {

                                secondEnabledTd.style.backgroundColor = 'green';
                                $(secondEnabledTd).one('click', function (e) {
                                    e.preventDefault();
                                    var removeElement = current.querySelector('i');


                                    if (removeElement != undefined) {
                                        current.removeChild(removeElement);
                                        secondEnabledTd.appendChild(removeElement);
                                    }

                                    current.style.backgroundColor = current.getAttribute('data-backgroundColor');
                                    firstEnabledTd.style.backgroundColor = firstEnabledTd
                                        .getAttribute('data-backgroundColor');
                                    secondEnabledTd.style.backgroundColor = secondEnabledTd
                                        .getAttribute('data-backgroundColor');

                                    secondEnabledTd.setAttribute("data-color", current.getAttribute('data-color'));

                                    secondEnabledTd.setAttribute("data-name", current.getAttribute('data-name'));
                                    secondEnabledTd.setAttribute("data-move", "moved");

                                    current.removeAttribute("data-isActived");
                                    current.removeAttribute("data-color");
                                    current.removeAttribute("data-name");


                                });

                                if (firstEnabledTd.previousElementSibling != null) {
                                    firstEnabledTd.previousElementSibling.style
                                        .backgroundColor = firstEnabledTd.previousElementSibling
                                            .getAttribute('data-backgroundcolor');

                                    $(firstEnabledTd.previousElementSibling).off();
                                }

                                if (firstEnabledTd.nextElementSibling != null) {
                                    firstEnabledTd.nextElementSibling.style
                                        .backgroundColor = firstEnabledTd.nextElementSibling
                                            .getAttribute('data-backgroundcolor');

                                    $(firstEnabledTd.nextElementSibling).off();
                                }
                            }
                        }
                        else {
                            current.style.backgroundColor = current.getAttribute('data-backgroundColor');
                            firstEnabledTd.style.backgroundColor = firstEnabledTd
                                .getAttribute('data-backgroundColor');

                            current.removeAttribute("data-isActived");
                        }
                    }
                    else {

                        if (firstEnabledTdColor == null && firstEnabledTdName == null) {

                            $(firstEnabledTd).one('click', function (e) {
                                var removeElement = current.querySelector('i');

                                if (removeElement != undefined) {
                                    current.removeChild(removeElement);
                                    firstEnabledTd.appendChild(removeElement);
                                }

                                current.style.backgroundColor = current.getAttribute('data-backgroundColor');
                                firstEnabledTd.style.backgroundColor = firstEnabledTd
                                    .getAttribute('data-backgroundColor');
                                secondEnabledTd.style.backgroundColor = secondEnabledTd
                                    .getAttribute('data-backgroundColor');

                                firstEnabledTd.setAttribute("data-color", current.getAttribute('data-color'));

                                firstEnabledTd.setAttribute("data-name", current.getAttribute('data-name'));
                                firstEnabledTd.setAttribute("data-move", "moved");

                                current.removeAttribute("data-isActived");
                                current.removeAttribute("data-color");
                                current.removeAttribute("data-name");

                                if (firstEnabledTd.previousElementSibling != null) {
                                    firstEnabledTd.previousElementSibling.style
                                        .backgroundColor = firstEnabledTd.previousElementSibling
                                            .getAttribute('data-backgroundcolor');

                                    $(firstEnabledTd.previousElementSibling).off();
                                }

                                if (firstEnabledTd.nextElementSibling != null) {
                                    firstEnabledTd.nextElementSibling.style
                                        .backgroundColor = firstEnabledTd.nextElementSibling
                                            .getAttribute('data-backgroundcolor');

                                    $(firstEnabledTd.nextElementSibling).off();
                                }

                            });
                        }
                    }
                }
            }
            else {
                current.style.backgroundColor = current.getAttribute('data-backgroundColor');
                firstEnabledTd.style.backgroundColor = firstEnabledTd
                    .getAttribute('data-backgroundColor');

                if (secondEnabledTd != null) {
                    secondEnabledTd.style.backgroundColor = secondEnabledTd
                        .getAttribute('data-backgroundColor');
                }

                current.removeAttribute("data-isActived");
            }
        }
    }

    //Extention method for pawn to strike
    StrikePawn(current, horizontal, enemyColor, id, isActived) {
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

        var leftStrikeTdChar;
        var rightStrikeTdChar;

        var verticalName = id.slice(1, 2);

        var frontName = horizontal + verticalName;

        var frontDoubleName = horizontal;

        for (let index = 0; index < alphabet.length; index++) {
            if (alphabet[index] == verticalName) {
                leftStrikeTdChar = alphabet[index - 1];
                rightStrikeTdChar = alphabet[index + 1];
            }
        }

        var leftStrikeTdId = document.getElementById(horizontal + leftStrikeTdChar);
        var rightStrikeTdId = document.getElementById(horizontal + rightStrikeTdChar);
        var frontTd = document.getElementById(frontName);
        var frontDoubleTd;

        if(enemyColor=='white')
        {
             frontDoubleTd = document.getElementById(++frontDoubleName + verticalName);
        }
        else if(enemyColor=='black')
        {
             frontDoubleTd = document.getElementById(--frontDoubleName + verticalName);
        }

        $(leftStrikeTdId).unbind("click");
        $(rightStrikeTdId).unbind("click");

        if (leftStrikeTdId != null && rightStrikeTdId != null) {
            leftStrikeTdId.style.backgroundColor = leftStrikeTdId.
                getAttribute('data-backgroundcolor');

            rightStrikeTdId.style.backgroundColor = rightStrikeTdId.
                getAttribute('data-backgroundcolor');
        }

        if (isActived != null) {
            if (leftStrikeTdId != null || rightStrikeTdId != null) {

                if (leftStrikeTdId != null) {
                    var leftHasFoe = leftStrikeTdId.getAttribute('data-color');

                    if (leftHasFoe == enemyColor) {
                        leftStrikeTdId.style.backgroundColor = 'purple';

                        $(leftStrikeTdId).one('click', function (e) {
                            $(rightStrikeTdId).off();
                            $(rightStrikeTdId).unbind("click");

                            var removedElement = current.querySelector('i');
                            var leftRemovedElement = leftStrikeTdId.querySelector('i');

                            if (removedElement != undefined && leftRemovedElement != undefined) {
                                leftStrikeTdId.removeChild(leftRemovedElement);
                                leftStrikeTdId.appendChild(removedElement);
                            }

                            leftStrikeTdId.setAttribute('data-color',
                                current.getAttribute('data-color'));

                            leftStrikeTdId.setAttribute('data-name',
                                current.getAttribute('data-name'));

                            current.removeAttribute('data-isActived');
                            current.removeAttribute('data-color');
                            current.removeAttribute('data-name');

                            frontTd.style.backgroundColor = frontTd.
                                getAttribute('data-backgroundcolor');

                            current.style.backgroundColor = current.
                                getAttribute('data-backgroundcolor');

                            leftStrikeTdId.style.backgroundColor = leftStrikeTdId.
                                getAttribute('data-backgroundcolor');

                            if (rightStrikeTdId != null) {

                                rightStrikeTdId.style.backgroundColor = rightStrikeTdId.
                                getAttribute('data-backgroundcolor');
                            }

                            if (frontDoubleTd != null) {
                                frontDoubleTd.style.backgroundColor = frontDoubleTd.
                                    getAttribute('data-backgroundcolor');
                            }
                        });
                    }
                }

                if (rightStrikeTdId != null) {

                    var rightHasFoe = rightStrikeTdId.getAttribute('data-color');

                    if (rightHasFoe == enemyColor) {
                        rightStrikeTdId.style.backgroundColor = 'purple';

                        $(rightStrikeTdId).one('click', function (e) {

                            $(leftStrikeTdId).unbind("click");
                            $(leftStrikeTdId).off();

                            var removedElement = current.querySelector('i');
                            var leftRemovedElement = rightStrikeTdId.querySelector('i');

                            if (removedElement != undefined && leftRemovedElement != undefined) {
                                rightStrikeTdId.removeChild(leftRemovedElement);
                                rightStrikeTdId.appendChild(removedElement);
                            }

                            rightStrikeTdId.setAttribute('data-color',
                                current.getAttribute('data-color'));

                            rightStrikeTdId.setAttribute('data-name',
                                current.getAttribute('data-name'));

                            current.removeAttribute('data-isActived');
                            current.removeAttribute('data-color');
                            current.removeAttribute('data-name');

                            frontTd.style.backgroundColor = frontTd.
                                getAttribute('data-backgroundcolor');

                            current.style.backgroundColor = current.
                                getAttribute('data-backgroundcolor');

                            if (leftStrikeTdId != null) {
                                leftStrikeTdId.style.backgroundColor = leftStrikeTdId.
                                    getAttribute('data-backgroundcolor');
                            }

                            rightStrikeTdId.style.backgroundColor = rightStrikeTdId.
                                getAttribute('data-backgroundcolor');

                            if (frontDoubleTd != null) {
                                frontDoubleTd.style.backgroundColor = frontDoubleTd.
                                    getAttribute('data-backgroundcolor');
                            }

                        });
                    }
                }
            }
        }
    }
}
