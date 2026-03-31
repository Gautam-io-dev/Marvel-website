function toggleDesc(button) {
  const desc = button.nextElementSibling;
  desc.classList.toggle("show");
}

/* SCROLL ANIMATION */
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));