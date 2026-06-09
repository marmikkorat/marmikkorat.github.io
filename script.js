const arc = document.getElementById("mainArc");

let progress = 220;
const target = 50;

function animate() {
  if(progress > target){
    progress -= 2;
    arc.style.strokeDashoffset = progress;
    requestAnimationFrame(animate);
  }
}

animate();
``
