const changeQuote = document.querySelector(".change-quote");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

// quote of the Day

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getQuotes() {
  const quotes = "data.json";
  const res = await fetch(quotes);
  const data = await res.json();
  const quoteText = data[getRandomNum(0, data.length)].text;
  const authorText = data[getRandomNum(0, data.length)].author;

  quote.textContent = quoteText;
  author.textContent = authorText;
}

getQuotes();

changeQuote.addEventListener("click", getQuotes);