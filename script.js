// =====================================================
//  REVIEWS
//  To add a new review, copy one { ... } block,
//  paste it into the list (separated by a comma)
//  and change the texts. Write dates as "YYYY-MM-DD".
//  Long texts go between backticks `like this` and can
//  have several paragraphs (leave an empty line between).
//  Leave a text empty (``) to hide that section.
// =====================================================
const reviews = [
  {
    title: "Alchemised",
    author: "SenLinYu",
    genre: "Fantasy",
    pages: 1000,
    finished: "2026-11-10",
    rating: 5,
    summary: `I heard a lot of good things about this book, and I was afraid I might be disappointed. Absolutely not! This book was amazing! I fell into the fantasy world right away. Even though it’s over 1000 pages long, I read it so fast. The worldbuilding was incredible. The combination of alchemy and necromancy worked so well, and I wish I could read even more about it.

And Kaine… you broken boy. I’m so sorry for everything that happened to you.

I was afraid of the ending. I thought they were going to die, that Kaine would have to kill Helena, and that other awful things would happen. But then it ended “happily.” I was so prepared for everything to end badly that I honestly didn’t know how to feel about the happy ending. I might need to reread it.

But the ending was also sad and tragic. They were scarred by the war, and that pain will never disappear. Kaine being lost in his new life because he could never imagine a future for himself… oh, I could cry just thinking about it.

And Helena… she was my hero. I felt so deeply for her. She wanted to save everyone and never cared about herself. She doesn’t even care that she is remembered as the non-active member who did not fight. Shiseo and Kaine erased every word about her to protect her.

Helena saved Kaine by bonding him to herself. She gave him something to live for. She used the diagram to make Kaine obsessed with her — she became the thing keeping him alive.

He was so tired and ready to die, knowing that Helena and their baby were safe… oh, my heart breaks for him. Although I’m happy he survived, I know he can never truly be happy after everything he lived through, especially with how people talk about him in Paladia…

Wow. I can’t stop thinking about this book. Why did Kaine choose Helena to be his contact with the Eternal Flame? Did he visit pleasure houses during the war? Why could he be physically intimate with Aurelia? Was he afraid of having children that Morough could use against him? Did he kill members of the Flame because they failed to protect Helena?`,
    liked: ``,
    disliked: ``,
    recommend: ``
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
      ${section("", r.summary)}
      ${section("What I liked", r.liked)}
      ${section("What I didn't like", r.disliked)}
      ${section("Who should read it", r.recommend)}
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
