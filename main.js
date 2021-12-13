const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.globalCompositeOperation = 'destination-over';


// let size = 20;
// let positionX = canvas.width/2;
// let positionY = canvas.height/2;
// let angle = 0;

let number = 0;
let scale = 10;
let hue = Math.random();

function drawFlower() {

 
    let angle = number * 0.7;
    let radius = scale * Math.sqrt(number);

    let positionX = radius * Math.sin(angle) + canvas.width/2;
    let positionY = radius *  Math.cos(angle) + canvas.height/2;

    ctx.fillStyle = 'hsl('+ hue +',100%,50%)';
    ctx.strokeStyle = 'wheat';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(positionX, positionY, number, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    number++;
    hue =+ 0.5;
}


function animate() {

    //ctx.clearRect(0,0,canvas.width, canvas.height);

    // size +=0.3;
    // positionX += 5 * Math.sin(angle);
    // positionY += 5 * Math.cos(angle);
    // angle += 0.1;
    drawFlower();
    if(number >200 ) return;
    requestAnimationFrame(animate);
}

animate();