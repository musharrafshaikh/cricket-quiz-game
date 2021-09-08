var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What is your name? ");
console.log("Welcome "+ userName + " Let's start the quiz");
console.log("\n--------------------\n");

var highScores=[
  {
    name: "Maxx",
    score: 4,
  },
   {
    name: "boss",
    score: 3,
  },

]

function play(question, answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer=== answer)
  {
    console.log("RIGHT😎");
    score= score +1;
  }
  else{
    console.log("WRONG😌");
  }
  console.log("current score: ", score);
  console.log("____");
}


var questions=[{
  question: "Who won the first ever Cricket World Cup in 1975?\n a) Australia\n b) England\n c) India\n d) West Indies\n",
  answer: "West Indies"},
  {
  question: "Who is the only batsman to record 400 runs in an international Test match ?\n a) Steve Smith\n b) Don Bradman\n c) WG Grace\n d) Brian Lara\n",
  answer: "Brian Lara"},
  {
  question: "Who is the first batsman to cross 10000 runs in Tests?\n a) Sunil Gavaskar \n b) Don Bradman\n c) Ricky Pointing\n d) Brendon McCullm\n",
  answer: "Sunil Gavaskar"},
  {
  question: "Which player holds the record for the fastest fifty in IPL?\n a) Virat Kholi  \n b) Sunil Narine \n c) K.L.Rahul \n d) Jos Buttler\n ",
  answer: "K.L.Rahul"},
  {
  question: "Who has the highest all-time strike rate in the IPL?\n a) Chris Gayle\n b) Virender Sehwag\n c) Andre Russel\n d)AB de Villers\n",
  answer: "Andre Russel"}];

  for(var i=0 ; i<questions.length ; i++)
  {
    var currentQuestion = questions[i];
    play(currentQuestion.question,currentQuestion.answer)
  }
  function showScore() { console.log("YAY! YOU SCORED" , score);
    console.log("Check out the high scores");
    highScores.map(score => console.log(score.name, " : ", score.score))
  }
  showScore();