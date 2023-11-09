const quotes = [
  {
    quote: "지혜로운 사람은 파도 너머 멀고 깊은 바다를 응시하며 작은 일에 일희일비하지 않는다."
  },
  {
    quote: "Where there is no struggle, there is no strength."
  },
  {
    quote: "The best way to predict your future is to create it."
  },
  {
    quote: "Life begins at the end of your comfort zone."
  },
  {
    quote: "We build too many walls and not enough bridges."
  },
  {
    quote: "포기하기보단 기다리고, 기다리기보단 생각을 바꾼다."
  },
  {
    quote: "Risk comes from not knowing what you're doing."
  },
  {
    quote: "Today is your opportunity to build the tomorrow you want."
  },
  {
    quote: "The bad news is time flies. The good news is you're the pilot."
  },
  {
    quote: "Action is the foundational key to all success."
  }
];

const quote = document.querySelector("#quote span:first-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; // Math.random 0~1 사이의 랜덤한 숫자

quote.innerText = todaysQuote.quote;