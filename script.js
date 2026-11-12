// =====================================================
//  REVIEWS
//  To add a new review, copy one { ... } block,
//  paste it into the list (separated by a comma)
//  and change the texts. Write dates as "YYYY-MM-DD".
// =====================================================
const reviews = [
  {
    title: "Book title",
    author: "Author name",
    genre: "Fantasy",
    pages: 320,
    finished: "2026-11-01",
    rating: 4,
    summary: "One or two sentences about what the book is about (no spoilers).",
    liked: "What I liked about the book.",
    disliked: "What I didn't like.",
    recommend: "Who I would recommend it to."
  }
  // , { next review... }
];

// =====================================================
//  You don't need to change anything below this line
// =====================================================
const list = document.getElementById("review-list");
const search = document.getElementById("search");
const genreFilter = document.getElementById("genre-filter");
const sort = document.getElementById("sort");
const count = document.getElementById("count");

// Fill the genre menu with the genres used in the reviews
const genres = [...new Set(reviews.map(r => r.genre))].sort((a, b) => a.localeCompare(b, "en"));
genres.forEach(g => {
  const option = document.createElement("option");
  option.value = g;
  option.textContent = g;
  genreFilter.appendChild(option);
});

function stars(rating) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function reviewWord(n) {
  return n === 1 ? "review" : "reviews";
}

function render() {
  const query = search.value.trim().toLowerCase();
  const genre = genreFilter.value;

  let shown = reviews.filter(r =>
    (!genre || r.genre === genre) &&
    (r.title.toLowerCase().includes(query) || r.author.toLowerCase().includes(query))
  );

  if (sort.value === "rating") shown.sort((a, b) => b.rating - a.rating);
  else if (sort.value === "title") shown.sort((a, b) => a.title.localeCompare(b.title, "en"));
  else shown.sort((a, b) => b.finished.localeCompare(a.finished));

  count.textContent = `${shown.length} ${reviewWord(shown.length)}`;

  if (shown.length === 0) {
    list.innerHTML = `<p class="empty">No reviews match your search. Try a different title or genre.</p>`;
    return;
  }

  list.innerHTML = shown.map(r => `
    <article class="review">
      <h3>${escapeHtml(r.title)}</h3>
      <p class="author">${escapeHtml(r.author)}</p>
      <p class="meta">
        <span class="stars" aria-label="Rated ${r.rating} out of 5">${stars(r.rating)}</span>
        <span>${escapeHtml(r.genre)}</span>
        <span>${r.pages} pages</span>
        <span>Finished: ${formatDate(r.finished)}</span>
      </p>
      <p>${escapeHtml(r.summary)}</p>
      <h4>What I liked</h4>
      <p>${escapeHtml(r.liked)}</p>
      <h4>What I didn't like</h4>
      <p>${escapeHtml(r.disliked)}</p>
      <h4>Who should read it</h4>
      <p>${escapeHtml(r.recommend)}</p>
    </article>
  `).join("");
}

search.addEventListener("input", render);
genreFilter.addEventListener("change", render);
sort.addEventListener("change", render);
render();

// Mobile menu
const toggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  menu.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));

// Current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();
