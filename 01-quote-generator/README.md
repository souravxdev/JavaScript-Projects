# Quote Generator

Shows an inspiring quote and lets you get a new one or share it on X.

**[Live demo](https://souravxdev.github.io/JavaScript-Projects/01-quote-generator/)** · ✅ Complete

![Quote Generator showing a Mark Twain quote with Share on X and New Quote buttons](assets/screenshot.png)

## Features

- [x] Random quote from the [DummyJSON](https://dummyjson.com/docs/quotes) API
- [x] "New Quote" button
- [x] Loader while quotes are loading
- [x] Friendly error in the card if quotes fail to load, and "New Quote" retries
- [x] Fixed-size card, so the buttons never move
- [x] Long quotes shrink to fit the card
- [x] Share the quote on X
- [x] Responsive layout, visible keyboard focus

## Built with

HTML, CSS (Flexbox, media queries) and vanilla JavaScript (`fetch`, `async/await`).

## What I learned

- Fetching data with `fetch` and `async/await`, and handling errors with `try/catch`.
- Showing a loader while waiting for the API, using the `hidden` attribute.
- Using `textContent` for API data so it can't inject HTML.
- Building a share link with `encodeURIComponent`.

## Next improvements

**Code quality**

- [ ] Keep quotes, current quote and error in a `state` object and draw the card with `render()`
- [ ] Order the file: constants → DOM → state → UI helpers → data → actions → events
- [ ] Clearer names (`hideLoader`, `showRandomQuote`) and move `API_URL` to a constant
- [ ] Use `<blockquote>` and `<figcaption>` for the quote
- [ ] Re-fit the text once the web font has loaded (`document.fonts.ready`)

**Features**

- [ ] Copy to clipboard and native share sheet on mobile (Clipboard and Web Share APIs)
- [ ] Favourites saved in `localStorage`
- [ ] Shareable link to each quote (`?id=42`)
- [ ] Keyboard shortcuts and no repeated quotes (Fisher–Yates shuffle)
- [ ] Dark mode with CSS custom properties

**Extras**

- [ ] Search or filter by author
- [ ] Download the quote as an image (Canvas API)
- [ ] Work offline as a PWA
- [ ] Lighthouse score of 100
- [ ] Load quotes from my own Node/Express API

## Credits

- Background pattern "Circuit Board" by Steve Schoger, [Hero Patterns](https://heropatterns.com), CC BY 4.0
- Icons: [Font Awesome](https://fontawesome.com) · Font: [Montserrat](https://fonts.google.com/specimen/Montserrat)
