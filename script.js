const beginButton = document.getElementById("beginButton");
const secretButton = document.getElementById("secretButton");
const secretMessage = document.getElementById("secretMessage");

beginButton.addEventListener("click", () => {
  document.querySelector(".intro").scrollIntoView({ behavior: "smooth" });
});

secretButton.addEventListener("click", () => {
  const isVisible = secretMessage.classList.toggle("visible");
  secretMessage.setAttribute("aria-hidden", String(!isVisible));

  secretButton.textContent = isVisible
    ? "❤️"
    : "Tengo algo más que decirte ❤️";

  if (isVisible) {
    setTimeout(() => {
      secretMessage.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 250);
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
