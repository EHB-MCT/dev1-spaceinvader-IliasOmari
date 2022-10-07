"use strict";

drawAvatar();

function drawAvatar() {
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext('2d');

    // Achtergrond:
    context.fillStyle = "black";
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, 300);
    context.lineTo(300, 300);
    context.lineTo(300, 0);
    context.closePath();
    context.fill();
    context.stroke();

    //Algemene kleur voor avatar:
    context.fillStyle = "#43f60e";

    // Boven Links:

    context.fillRect(10, 25, 50, 100);
    context.fillRect(25, 75, 80, 50);

    // Boven Rechts:

    context.fillRect(225, 25, 50, 100);
    context.fillRect(170, 75, 80, 50);

    // Vierkant beneden:

    context.fillRect(108, 210, 55, 55);


}