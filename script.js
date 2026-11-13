// =====================================================
//  The list of books is in books.js.
//  You don't need to change anything in this file.
// =====================================================
const list = document.getElementById("review-list");
const search = document.getElementById("search");
const genreFilter = document.getElementById("genre-filter");
const sort = document.getElementById("sort");
const onlyReviews = document.getElementById("only-reviews");
const count = document.getElementById("count");

// Fill the genre menu with the genres used in the books
const genres = [...new Set(books.map(b => b.genre))].sort((a, b) => a.localeCompare(b, "en"));
genres.forEach(g => {
  const option = document.createElement("option");
  option.value = g;
  option.textContent = g;
  genreFilter.appendChild(option);
});

function hasReview(b) {
  return Boolean(b.summary && b.summary.trim()) || Boolean(b.spoilers && b.spoilers.trim());
}

function stars(rating) {
  if (!rating) return "";
  return `<span class="stars" aria-label="Rated ${rating} out of 5">${"★".repeat(rating)}${"☆".repeat(5 - rating)}</span>`;
}

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// Turns a text into paragraphs (split by empty lines)
function paragraphs(text) {
  return text.trim().split(/\n\s*\n/)
    .map(p => `<p>${escapeHtml(p.trim())}</p>`)
    .join("");
}

// A section with a heading, hidden when its text is empty
function section(heading, text) {
  if (!text || !text.trim()) return "";
  return `${heading ? `<h4>${heading}</h4>` : ""}<div class="text">${paragraphs(text)}</div>`;
}

// Spoilers hidden behind a button, shown only when there are some
function spoilerBox(b) {
  if (!b.spoilers || !b.spoilers.trim()) return "";
  const note = b.summary && b.summary.trim()
    ? "The rest of this review contains spoilers."
    : "This review contains spoilers.";
  return `
    <div class="spoiler-box">
      <p class="spoiler-note">${note}</p>
      <button class="spoiler-toggle" aria-expanded="false">Show spoilers</button>
      <div class="spoilers text" hidden>${paragraphs(b.spoilers)}</div>
    </div>`;
}

// Row for a book with a written review: click it to open the review
function reviewRow(b) {
  return `
    <details class="book-row has-review">
      <summary>
        <div class="book-name">
          <h3>${escapeHtml(b.title)}</h3>
          <p class="author">${escapeHtml(b.author)} · ${escapeHtml(b.genre)}</p>
        </div>
        <p class="book-info">
          ${stars(b.rating)}
          ${b.finished ? `<span class="date">Read ${formatDate(b.finished)}</span>` : ""}
        </p>
        <span class="open-hint">Read review</span>
      </summary>
      <div class="review-body">
        <p class="byline">
          <span class="avatar" aria-hidden="true"></span>
          <span>Rosie's review</span>
          ${b.pages ? `<span class="pages">· ${b.pages} pages</span>` : ""}
        </p>
        ${section("", b.summary)}
        ${section("What I liked", b.liked)}
        ${section("What I didn't like", b.disliked)}
        ${section("Who should read it", b.recommend)}
        ${spoilerBox(b)}
      </div>
    </details>`;
}

// Row for a book with only a rating
function bookRow(b) {
  return `
    <article class="book-row">
      <div class="book-name">
        <h3>${escapeHtml(b.title)}</h3>
        <p class="author">${escapeHtml(b.author)} · ${escapeHtml(b.genre)}</p>
      </div>
      <p class="book-info">
        ${stars(b.rating)}
        ${b.finished ? `<span class="date">Read ${formatDate(b.finished)}</span>` : ""}
      </p>
    </article>`;
}

function render() {
  const query = search.value.trim().toLowerCase();
  const genre = genreFilter.value;

  let shown = books.filter(b =>
    (!genre || b.genre === genre) &&
    (!onlyReviews.checked || hasReview(b)) &&
    (b.title.toLowerCase().includes(query) || b.author.toLowerCase().includes(query))
  );

  if (sort.value === "rating") shown.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  else if (sort.value === "title") shown.sort((a, b) => a.title.localeCompare(b.title, "en"));
  else shown.sort((a, b) => (b.finished || "").localeCompare(a.finished || ""));

  const reviewCount = shown.filter(hasReview).length;
  count.textContent = `${shown.length} ${shown.length === 1 ? "book" : "books"}, ${reviewCount} with a written review`;

  if (shown.length === 0) {
    list.innerHTML = `<p class="empty">No books match your search. Try a different title, author or genre.</p>`;
    return;
  }

  list.innerHTML = shown.map(b => hasReview(b) ? reviewRow(b) : bookRow(b)).join("");
}

// Show or hide spoilers when the button is clicked
list.addEventListener("click", event => {
  const button = event.target.closest(".spoiler-toggle");
  if (!button) return;
  const spoilers = button.nextElementSibling;
  const open = spoilers.hidden;
  spoilers.hidden = !open;
  button.setAttribute("aria-expanded", open);
  button.textContent = open ? "Hide spoilers" : "Show spoilers";
});

search.addEventListener("input", render);
genreFilter.addEventListener("change", render);
sort.addEventListener("change", render);
onlyReviews.addEventListener("change", render);
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
