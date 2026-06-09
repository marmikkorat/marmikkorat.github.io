const arc = document.getElementById('mainArc');

let progress = 220;
const target = 40;

function animateArc() {
  if (progress > target) {
    progress -= 5;
    arc.style.strokeDashoffset = progress;
    requestAnimationFrame(animateArc);
  }
}

setTimeout(animateArc, 400);
