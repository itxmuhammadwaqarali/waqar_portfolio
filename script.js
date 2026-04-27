// ===========================
// TYPING EFFECT
// ===========================
const phrases = ["Backend Developer.", "ML Engineer.", "API Architect.", "Problem Solver."];
let phraseIdx = 0;
let charIdx = 0;
let deleting = false;
const typingEl = document.querySelector(".typing");

function type() {
  const phrase = phrases[phraseIdx];

  if (deleting) {
    typingEl.textContent = phrase.substring(0, charIdx--);
    if (charIdx < 0) {
      deleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      setTimeout(type, 500);
      return;
    }
  } else {
    typingEl.textContent = phrase.substring(0, ++charIdx);
    if (charIdx === phrase.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  }

  setTimeout(type, deleting ? 45 : 80);
}

type();


// ===========================
// THEME TOGGLE (DARK / LIGHT)
// ===========================
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀";
});


// ===========================
// SCROLL REVEAL ANIMATION
// ===========================
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      // Also trigger skill bar animations if inside a revealed element
      entry.target.querySelectorAll(".skill-card").forEach(card => {
        card.classList.add("animated");
      });
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));


// ===========================
// SKILL BAR ANIMATION
// ===========================
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll(".skill-card").forEach(el => skillObserver.observe(el));


// ===========================
// SCROLL TO TOP BUTTON
// ===========================
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 400 ? "flex" : "none";
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// ===========================
// MOBILE NAVIGATION TOGGLE
// ===========================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close mobile nav when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});


// ===========================
// CONTACT FORM SUBMISSION
// ===========================
const contactForm = document.getElementById("contact-form");
const successMsg = document.getElementById("success");

contactForm.addEventListener("submit", e => {
  e.preventDefault();
  contactForm.style.display = "none";
  successMsg.style.display = "block";
});