// =====================================================
//  The list of books is in books.js.
//
//  READING GOAL: change the number below to set
//  your goal. The counter counts every book in books.js
//  whose "finished" date is in the current year.
// =====================================================
const READING_GOAL = 36;
const CHALLENGE_YEAR = new Date().getFullYear();

// =====================================================
//  You don't need to change anything below this line
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
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return `<span class="stars" aria-label="Rated ${rating} out of 5">${"★".repeat(full)}${half ? '<span class="half-star">☆</span>' : ""}${"☆".repeat(empty)}</span>`;
}

function formatDate(iso) {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

// A date can be a full date "2026-08-31" or just a year "2026"
function readLabel(d) {
  if (!d) return "";
  return /^\d{4}$/.test(d) ? `Read in ${d}` : `Read ${formatDate(d)}`;
}

// Every time a book was read: the first time and any rereads
function readDates(b) {
  return [b.finished, ...(b.rereads || [])].filter(Boolean);
}

function lastRead(b) {
  return readDates(b).sort().pop() || "";
}

function rereadNote(b) {
  if (!b.rereads || !b.rereads.length) return "";
  return ` · reread in ${b.rereads.map(d => d.slice(0, 4)).join(", ")}`;
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
          <p class="author">${escapeHtml(b.author)} · ${escapeHtml(b.genre)}${rereadNote(b)}</p>
        </div>
        <p class="book-info">
          ${stars(b.rating)}
          ${b.finished ? `<span class="date">${readLabel(b.finished)}</span>` : ""}
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
        <p class="author">${escapeHtml(b.author)} · ${escapeHtml(b.genre)}${rereadNote(b)}</p>
      </div>
      <p class="book-info">
        ${stars(b.rating)}
        ${b.finished ? `<span class="date">${readLabel(b.finished)}</span>` : ""}
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
  else shown.sort((a, b) => lastRead(b).localeCompare(lastRead(a)));

  const reviewCount = shown.filter(hasReview).length;
  count.textContent = `${shown.length} ${shown.length === 1 ? "book" : "books"}, ${reviewCount} with a written review`;

  if (shown.length === 0) {
    list.innerHTML = `<p class="empty">No books match your search. Try a different title, author or genre.</p>`;
    return;
  }

  list.innerHTML = shown.map(b => hasReview(b) ? reviewRow(b) : bookRow(b)).join("");
}

// ===== Reading goal: the enchanted garden =====
function drawGarden() {
  const svg = document.getElementById("garden-svg");
  if (!svg) return;
  const NS = "http://www.w3.org/2000/svg";
  const make = (tag, attrs) => {
    const el = document.createElementNS(NS, tag);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    return el;
  };

  // every book read this year, counting rereads, oldest first
  const readThisYear = books
    .map(b => ({
      book: b,
      date: readDates(b).filter(d => d.startsWith(String(CHALLENGE_YEAR))).sort()[0]
    }))
    .filter(entry => entry.date)
    .sort((a, b) => a.date.localeCompare(b.date));
  const read = readThisYear.length;
  const goal = READING_GOAL;
  const left = Math.max(goal - read, 0);

  // Text inside the arch
  document.getElementById("challenge-year").textContent = CHALLENGE_YEAR;
  document.getElementById("read-count").textContent = read;
  document.getElementById("garden-summary").textContent =
    left > 0
      ? `of ${goal} books read in ${CHALLENGE_YEAR}\n${left} to go`
      : `of ${goal} books read in ${CHALLENGE_YEAR}`;
  const share = read / goal;
  let tale;
  if (read === 0) tale = "Once upon a time, a reader opened her first book…";
  else if (share < 0.25) tale = "The adventure has just begun.";
  else if (share < 0.5) tale = "Deep in the enchanted forest.";
  else if (share < 0.75) tale = "Halfway to the castle.";
  else if (share < 1) tale = "The castle towers are in sight.";
  else tale = "And she read happily ever after.";
  document.getElementById("garden-tale").textContent = tale;

  // The arch-shaped vine
  const vine = make("path", {
    class: "vine",
    d: "M 95 440 L 95 215 A 205 205 0 0 1 505 215 L 505 440"
  });
  svg.appendChild(vine);
  const length = vine.getTotalLength();
  const pointAt = t => vine.getPointAtLength(Math.min(Math.max(t, 0), length));

  // Little leaves between the flowers
  for (let i = 0; i <= goal; i++) {
    const t = (i / goal) * length;
    const p = pointAt(t), q = pointAt(t + 1);
    const angle = Math.atan2(q.y - p.y, q.x - p.x) * 180 / Math.PI;
    const side = i % 2 === 0 ? -1 : 1;
    svg.appendChild(make("path", {
      class: "leaf",
      d: "M0 0 C 4 -6 12 -8 18 -5 C 12 0 5 2 0 0 Z",
      transform: `translate(${p.x} ${p.y}) rotate(${angle + side * 50})`
    }));
  }

  // One flower or bud for every book in the goal
  for (let i = 0; i < goal; i++) {
    const t = ((i + 0.5) / goal) * length;
    const p = pointAt(t), q = pointAt(t + 1);
    const angle = Math.atan2(q.y - p.y, q.x - p.x) * 180 / Math.PI;
    const entry = readThisYear[i];
    const book = entry && entry.book;

    if (book) {
      const bloom = make("g", { class: "bloom", tabindex: "0", transform: `translate(${p.x} ${p.y})` });
      const title = make("title", {});
      title.textContent = book.title;
      bloom.appendChild(title);
      const inner = make("g", { style: `animation-delay: ${0.3 + i * 0.06}s` });
      for (let k = 0; k < 5; k++) {
        inner.appendChild(make("ellipse", {
          class: "petal", cx: 0, cy: -7.5, rx: 5.3, ry: 7.8,
          transform: `rotate(${k * 72 + i * 11})`
        }));
      }
      inner.appendChild(make("circle", { class: "heart", r: 3.4 }));
      bloom.appendChild(inner);
      const show = () => {
        document.getElementById("garden-picked").textContent =
          `${book.title} · ${entry.date.length === 4 ? "read in " + entry.date : "finished " + formatDate(entry.date)}`;
      };
      bloom.addEventListener("click", show);
      bloom.addEventListener("focus", show);
      svg.appendChild(bloom);
    } else {
      // closed bud, pointing away from the arch
      svg.appendChild(make("path", {
        class: "bud",
        d: "M0 5 C -5.5 0 -3.5 -7 0 -11 C 3.5 -7 5.5 0 0 5 Z",
        transform: `translate(${p.x} ${p.y}) rotate(${angle - 90})`
      }));
    }
  }

  // A few sparkles above the arch
  [[300, -22, 9], [180, 8, 6], [420, 8, 6], [48, 110, 5], [552, 110, 5], [118, 52, 3.5], [482, 52, 3.5], [30, 250, 3.5], [570, 250, 3.5]]
    .forEach(([x, y, r]) => {
      svg.appendChild(make("path", {
        class: "sparkle",
        d: `M ${x} ${y - r} Q ${x} ${y} ${x + r} ${y} Q ${x} ${y} ${x} ${y + r} Q ${x} ${y} ${x - r} ${y} Q ${x} ${y} ${x} ${y - r} Z`
      }));
    });
}

drawGarden();

// ===== Small reading goal on the right side =====
function drawGoalMini() {
  const mini = document.getElementById("goal-mini");
  if (!mini) return;
  const read = books.filter(b => readDates(b).some(d => d.startsWith(String(CHALLENGE_YEAR)))).length;
  const share = Math.min(read / READING_GOAL, 1);
  mini.setAttribute("aria-label", `Reading goal: ${read} of ${READING_GOAL} books read in ${CHALLENGE_YEAR}`);
  mini.innerHTML = `
    <svg viewBox="0 0 60 52" aria-hidden="true">
      <path class="mini-track" d="M8 50 V27 A22 22 0 0 1 52 27 V50" pathLength="100"/>
      <path class="mini-progress" d="M8 50 V27 A22 22 0 0 1 52 27 V50" pathLength="100"
            stroke-dasharray="${share * 100} 100"/>
    </svg>
    <span class="mini-count">${read}<span class="mini-goal">/${READING_GOAL}</span></span>
    <span class="mini-label">books in ${CHALLENGE_YEAR}</span>`;
  mini.hidden = false;

  // Hide it while the top of the page or the big reading goal is on screen
  const watched = [document.querySelector(".band-velvet"), document.getElementById("goal")].filter(Boolean);
  const onScreen = new Set();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting ? onScreen.add(e.target) : onScreen.delete(e.target));
    mini.classList.toggle("is-shown", onScreen.size === 0);
  });
  watched.forEach(el => observer.observe(el));
}

drawGoalMini();

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
