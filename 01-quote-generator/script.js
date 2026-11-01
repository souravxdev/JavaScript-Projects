let apiQuotes = [];
//Show New Quote
function newQuote() {
  // Pick a random quote from apiQuotes array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

// Get Quotes From API
async function getQuotes() {
  // limit=0 returns every quote instead of the default 30
  const apiUrl = "https://dummyjson.com/quotes?limit=0";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    apiQuotes = data.quotes;
    newQuote();
  } catch (error) {
    alert(error);
    // Catch Error Here
  }
}

// On Load
getQuotes();
