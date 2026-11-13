# 📚 BookWorm

A website about books. I write reviews of the books I've read, and over time I'll add book recommendations and a book club.

🔗 **Website:** https://havrdovarozalie.github.io/BookWorm/
📚 **Goodreads:** https://www.goodreads.com/user/show/40000853-rosie

## About

Each review covers what the book is about, what I liked, what I didn't, and who I would recommend it to. On the site you can search reviews by title or author, filter them by genre, and sort them by date or rating.

## Project structure

```
BookWorm/
├── index.html   – page content (home, about me, reading goal, books, plans, contact)
├── style.css    – how the page looks
├── books.js     – every book I've read, with ratings and reviews
├── script.js    – how the books and the reading goal are displayed
├── roise.jpg    – my photo
└── README.md    – this description
```

## How to add a book or review

All books live in `books.js`, in the `books` list. Books with a `summary` get a full review card; the others show just the stars and the date read. Text in `spoilers` is hidden behind a "Show spoilers" button. To add a book, copy a block, separate it with a comma, and change the texts:

```js
{
  title: "Book title",
  author: "Author name",
  genre: "Fantasy",
  pages: 320,
  rating: 4,
  finished: "2026-11-01",
  summary: `My thoughts on the book (no spoilers).`,
  spoilers: `The part that gives away the plot.`
}
```

## Reading goal

The reading goal counts every book in `books.js` read in the current year, including rereads (`rereads: ["2026"]`). To change the goal, edit `const READING_GOAL = 36;` at the top of `script.js`.

## Plans

- [x] Book reviews with ratings
- [x] Search, genre filter and sorting
- [x] Spoilers hidden behind a button
- [x] All my read books imported from Goodreads
- [x] Published with GitHub Pages
- [x] Reading goal that counts my books automatically
- [ ] Book recommendations ("if you liked this one, try that one")
- [ ] "Currently reading" and "want to read" lists
- [ ] An online book club with a book of the month

## Built with

- HTML, CSS, JavaScript
- Cormorant Garamond and Source Sans 3 fonts from Google Fonts
- Hosted on GitHub Pages

## Author

Rosie – [Goodreads](https://www.goodreads.com/user/show/40000853-rosie) · [GitHub](https://github.com/HavrdovaRozalie)
