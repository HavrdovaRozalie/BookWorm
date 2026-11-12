# 📚 BookWorm

Webová stránka o knihách. Píšu sem recenze knih, které jsem přečetla, a časem tu přibudou doporučení knih a čtenářský klub.

🔗 **Stránka:** https://havrdovarozalie.github.io/BookWorm/ *(po zveřejnění přes GitHub Pages)*

## O projektu

Každá recenze obsahuje, o čem kniha je, co se mi líbilo, co ne a komu bych ji doporučila. Recenze jde na stránce vyhledávat podle názvu nebo autora, filtrovat podle žánru a řadit podle data nebo hodnocení.

## Struktura projektu

```
BookWorm/
├── index.html   – obsah stránky (úvod, recenze, plány, kontakt)
├── style.css    – vzhled stránky
├── script.js    – seznam recenzí a jejich zobrazení
└── README.md    – tento popis
```

## Jak přidat novou recenzi

Všechny recenze jsou v souboru `script.js` v seznamu `reviews`. Novou přidáte tak, že zkopírujete jeden blok, oddělíte ho čárkou a přepíšete texty:

```js
{
  title: "Název knihy",
  author: "Jméno autora",
  genre: "Fantasy",
  pages: 320,
  finished: "2026-11-01",
  rating: 4,
  summary: "O čem kniha je (bez spoilerů).",
  liked: "Co se mi líbilo.",
  disliked: "Co se mi nelíbilo.",
  recommend: "Komu bych ji doporučila."
}
```

## Plány

- [x] Recenze knih s hodnocením
- [x] Vyhledávání, filtrování podle žánru a řazení
- [ ] Zveřejnění přes GitHub Pages
- [ ] Doporučení knih („když se vám líbila tahle, zkuste tuhle“)
- [ ] Seznam „právě čtu“ a „chci si přečíst“
- [ ] Online čtenářský klub s knihou měsíce

## Použité technologie

- HTML, CSS, JavaScript
- Písma Fraunces a Source Sans 3 z Google Fonts
- Hosting: GitHub Pages

## Autorka

Rozálie Havrdová – [GitHub](https://github.com/HavrdovaRozalie)
