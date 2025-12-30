const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let hearts = [];
let heartCount = window.innerWidth < 768 ? 25 : 50;

for(let i=0;i<heartCount;i++){
  hearts.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    size: Math.random()*6+4,
    speed: Math.random()*0.6+0.3
  });
}

function drawHearts(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'rgba(255,255,255,0.7)';
  hearts.forEach(h=>{
    ctx.beginPath();
    ctx.arc(h.x,h.y,h.size,0,Math.PI*2);
    ctx.fill();
    h.y-=h.speed;
    if(h.y<-10) h.y=canvas.height+10;
  });
  requestAnimationFrame(drawHearts);
}

drawHearts();
