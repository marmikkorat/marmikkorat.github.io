// Simple fade-in effect
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => {
  card.style.opacity = 0;
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.6s ease";
});
