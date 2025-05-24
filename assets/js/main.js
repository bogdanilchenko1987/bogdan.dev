//  Form Submission

function handleSubmit() {
  const form = document.getElementById("contact-form");
  const message = document.getElementById("thankYouMessage");
  const emailInput = document.getElementById("emailInput");

  if (!emailInput.value.trim()) return;

  form.classList.add("hidden");
  message.classList.remove("hidden");

  setTimeout(() => {
    message.classList.add("hidden");
    emailInput.value = "";
    form.classList.remove("hidden");
  }, 3000);
}

// Mobile Menu Toggle

const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

const menuLinks = mobileMenu.querySelectorAll("a");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});
