// ✅ Dark Mode
function toggleTheme() {
  document.body.classList.toggle("dark");
}

// ✅ Typing Animation
const text = "Operations Leader | Lean Expert | Manufacturing Specialist";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 50);
  }
}

typing();

// ✅ Scroll Animation
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    let top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(50px)";
  card.style.transition = "0.6s";
});
