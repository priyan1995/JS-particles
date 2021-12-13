const canvas =  document.getElementById('canvas1');
// console.log(canvas)

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let size = 20;
let positionX = canvas.width/2;
let positionY = canvas.height/2;
let angle = 0;


function drawFlower(){
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(positionX,positionY,20,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}


function animate(){

    //ctx.clearRect(0,0,canvas.width, canvas.height);

    // size +=0.3;
    positionX += 5 * Math.sin(angle);    
    positionY += 5 * Math.cos(angle);
    angle += 0.1;
    drawFlower();  
    requestAnimationFrame(animate);
}

animate();