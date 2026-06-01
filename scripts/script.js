/* determine grid structure */
const container = document.getElementById("projects");
container.dataset.columns = PROJECTS.length % 2 === 0 ? "even" : "odd";

/* populate grid */
const grid = document.getElementById("grid");

PROJECTS.forEach((p, i) => {
  const card = document.createElement("div");
  card.className = "card";
  card.setAttribute("role", "listitem");
  card.style.animationDelay = i * 0.07 + "s";

  card.innerHTML = `
        <div class="card-thumb">
            <img src="${p.image}" alt="${p.title} thumbnail" loading="lazy" />
        </div>
        <div class="card-meta">
            <p class="card-tag">${p.tag}</p>
            <p class="card-title">${p.title}</p>
        </div>
    `;

  card.addEventListener("click", () => openModal(p));
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", `${p.title} - ${p.tag}`);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(p);
    }
  });
  grid.appendChild(card);
});

/* staggered card entrance */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.08 },
);
document.querySelectorAll(".card").forEach((c) => observer.observe(c));

/* modal */
const overlay = document.getElementById("overlay");

function openModal(p) {
  document.body.style.overflow = "hidden";

  document.getElementById("modal-thumb").innerHTML = `
        <img src="${p.image}" alt="${p.title} screenshot" />
    `;

  document.getElementById("modal-tag").textContent = p.tag;
  document.getElementById("modal-stack").innerHTML = p.stack.join(` &bull; `);
  document.getElementById("modal-title").textContent = p.title;
  document.getElementById("modal-desc").innerHTML = p.desc;

  document.getElementById("modal-links").innerHTML = p.links
    .map((l) => {
      const icon = ICONS[l.label] || ICONS["Other"];
      return `
            <a href="${l.href}" target="_blank" rel="noopener">${icon}${l.label}</a>
        `;
    })
    .join("");

  overlay.style.display = "flex";
  requestAnimationFrame(() => overlay.classList.add("open"));
  document.getElementById("modal-close").focus();
}

function closeModal() {
  document.body.style.overflow = "";
  overlay.classList.remove("open");
  setTimeout(() => {
    overlay.style.display = "none";
  }, 230);
}
document.getElementById("modal-close").addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
