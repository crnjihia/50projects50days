const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const faq = toggle.closest(".faq");
    const faqText = faq.querySelector(".faq-text");
    const isActive = faq.classList.contains("active");

    faq.classList.toggle("active", !isActive);
    toggle.setAttribute("aria-expanded", !isActive);
    faqText.style.display = isActive ? "none" : "block";
  });
});
