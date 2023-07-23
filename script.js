// Add your news here
const news = [
    "Hier könnten aktuelle announcements stehen!",
    "Natürlich in aller Breaking News Manier",
    "danke das ihr mich anhört"
  ];

  //this is a test
  
  const ticker = document.getElementById("ticker");
  
  function displayNews() {
    ticker.innerHTML = ""; // Clear previous news
    for (let i = 0; i < news.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = news[i];
      listItem.classList.add("news-item");
      ticker.appendChild(listItem);
    }
  }
  
  // Display the news every 3 seconds (adjust the interval as needed)
  setInterval(displayNews, 3000);
  
  // Initial display
  displayNews();
  
  