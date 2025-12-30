const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function Heart() {
  this.x = Math.random() * canvas.width;
  this.y = canvas.height + Math.random() * 100;
  this.size = Math.random() * 20 + 10;
  this.speed = Math.random() * 1 + 0.5;
}

Heart.prototype.draw = function () {
  ctx.fillStyle = "rgba(255,255,255,0.7)";
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
  ctx.fill();
};

Heart.prototype.update = function () {
  this.y -= this.speed;
  if (this.y < -20) this.y = canvas.height + 20;
};

for (let i = 0; i < 50; i++) hearts.push(new Heart());

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(h => {
    h.draw();
    h.update();
  });
  requestAnimationFrame(animate);
}

animate();
