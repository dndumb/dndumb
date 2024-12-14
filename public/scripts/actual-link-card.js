const allCards = document.querySelectorAll("article.actual-link-card");

allCards.forEach((c) => {
  c.addEventListener("click", () => {
    window.location.href = c.getAttribute("data-href");
  });
});
