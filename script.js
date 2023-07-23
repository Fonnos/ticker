// script.js
const ticker = document.getElementById("ticker");

function calculateAnimationDuration() {
  const tickerItems = ticker.querySelectorAll(".news-item");
  let totalWidth = 0;
  tickerItems.forEach(item => {
    totalWidth += item.offsetWidth;
  });
  const containerWidth = ticker.offsetWidth;
  const animationDuration = totalWidth / 100; // Adjust the divisor to control the animation speed
  return animationDuration;
}

function displayNews() {
  ticker.innerHTML = ""; // Clear previous news
  for (let i = 0; i < news.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = news[i];
    listItem.classList.add("news-item");
    ticker.appendChild(listItem);
  }

  const animationDuration = calculateAnimationDuration();
  ticker.style.animationDuration = `${animationDuration}s`;
}

// Initial news array
let news = [
  "Breaking News: Event X is happening now!",
  "New Product Launch: Product Y is now available!",
  "Weather Update: Expect heavy rainfall tomorrow.",
  "Sports News: Team A wins the championship!",
  "Community Update: Join us for the upcoming event."
];

// Display the initial news
displayNews();
