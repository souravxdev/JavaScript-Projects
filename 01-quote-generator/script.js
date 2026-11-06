// DOM Elements
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterButton = document.getElementById("x-twitter");
const newQuoteButton = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// Quote font size range, in rem
const MAX_FONT_SIZE = 2.75;
const MIN_FONT_SIZE = 1;
const FONT_SIZE_STEP = 0.125;

let apiQuotes = [];

function showLoader() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

function removeLoader() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

//Show New Quote
function newQuote() {
  showLoader();
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  // Set Quote and Author ('Unknown' if blank)
  quoteText.textContent = quote.quote;
  authorText.textContent = quote.author || "Unknown";

  // Show the card first: hidden elements have no size to measure
  removeLoader();
  fitQuoteText();
}

// Shrink the quote text until the card's content fits its fixed height
function fitQuoteText() {
  let fontSize = MAX_FONT_SIZE;
  quoteText.style.fontSize = `${fontSize}rem`;

  while (
    quoteContainer.scrollHeight > quoteContainer.clientHeight &&
    fontSize > MIN_FONT_SIZE
  ) {
    fontSize -= FONT_SIZE_STEP;
    quoteText.style.fontSize = `${fontSize}rem`;
  }
}

// Get Quotes From API
async function getQuotes() {
  showLoader();
  const apiUrl = "https://dummyjson.com/quotes?limit=0";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    apiQuotes = data.quotes;
    newQuote();
  } catch (error) {
    alert(error);
  }
}

// Tweet Quote
function tweetQuote() {
  const text = `${quoteText.textContent} - ${authorText.textContent}`;
  const twitterUrl = `https://x.com/intent/post?text=${encodeURIComponent(text)}`;
  window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteButton.addEventListener("click", newQuote);
twitterButton.addEventListener("click", tweetQuote);
window.addEventListener("resize", fitQuoteText);

// On Load
getQuotes();
