// reveal animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// form
document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Заявка отправлена. Инженер свяжется с вами.");

  e.target.reset();
});