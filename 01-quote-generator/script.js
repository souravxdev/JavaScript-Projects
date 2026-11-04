// DOM Elements
const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterButton = document.getElementById("x-twitter");
const newQuoteButton = document.getElementById("new-quote");
const loader = document.getElementById("loader");

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

  // Check Quote Length to determine styling
  if (quote.quote.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  // Set Quote, Hide Loader
  quoteText.textContent = quote.quote;
  removeLoader();

  // Check if Author field is blank and replace it with 'Unknown'
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
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

// On Load
getQuotes();
