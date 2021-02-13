//JSON array
const quotes = {
    quote: [
      "I have always believed that each man makes his own happiness and is responsible for his own problems.",
      "Anger is the ultimate destroyer of your own peace of mind.",
      "Only one thing is ever guaranteed, that is that you will definitely not achieve the goal if you don't take the shot.",
      "No one would have crossed the ocean if he could have gotten off the ship in the storm.",
      "I think beauty comes from actually knowing who you are. That's real beauty to me.",
    ],
    author: [
      "Ray Kroc",
      "Dalai Lama",
      "Wayne Gretzky",
      "Charles Kettering",
      "Elllen DeGeneres",
    ],
    background: ["#3F51B5", "#F44336", "#FFC107", "#673AB7", "#0097A7"],
    box: ["#C5CAE9", "#FFCDD2", "#FFECB3", "#D1C4E9", "#B2EBF2"],
  };
  //Functions executed on button click
  function quoteSelection() {
    var randomNum = Math.floor(Math.random() * 5);
    document.getElementById("quote").innerHTML = quotes.quote[randomNum];
    let author = quotes.author[randomNum];
    document.getElementById("author").innerHTML = `-By ${author}`;
  }
  quoteSelection();
  let root = document.documentElement;
  function changeColor() {
    var randomNum = Math.floor(Math.random() * 5);
    let background = quotes.background[randomNum];
    let text = quotes.box[randomNum];
    root.style.setProperty("--primary-color", background);
    root.style.setProperty("--secondary-color", text);
  }
  let button = document.getElementById("newQuote");
  button.addEventListener("click", quoteSelection);
  button.addEventListener("click", changeColor);
  
  //Function executed onload
  function timeOfTheDay() {
    let date = new Date();
    let hour = date.getHours();
    let time;
    if (hour > 4 && hour < 12) {
      time = "morning";
    } else if (hour >= 12 && hour <= 16) {
      time = "afternoon";
    } else if (hour > 16 && hour < 20) {
      time = "evening";
    } else {
      time = "night";
    }
    let output = `Let's start our ${time} with a new  quote`;
    document.getElementById("timeOfTheDay").innerText = output;
  }
  timeOfTheDay();
  