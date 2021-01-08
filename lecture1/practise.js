//Write a program to console your name on the output.
console.log("Hey this is Dev-Enforced")

/* A program to read input from your user. Output this name. Use 
readlineSync() for this. */

var readlineSync = require("readline-sync")
var userName = readlineSync.question("Say your name: ")
console.log(" "+userName+" granted access")

/*A program to take a string. And add "Welcome" to it. Then console 
it.*/ 

console.log("Welcome "+ userName);

/*Ask your user if your age is greater than 25 (or any number) and
 console right/wrong based on the answer.*/
var questionAsked = "Is your age greater than 25?"
var userAge = readlineSync.question(questionAsked)

if(userAge==="yes"){
  console.log("right");
}else{
  console.log("wrong");
}

/*Ask your user if your hometown is Bokaro (or your city) and this 
time increment a variable based on the right answer.
Also, console the score this time.
 */

var score=0;
var questionTwo="Do you live in Bokaro?"
var answerTwo="no"

var userAns= readlineSync.question(questionTwo);
if(userAns==="no"){
  console.log("right");
  score++;
}else{
  console.log("wrong");
  score--;
}
console.log("Score: ",score)

/* Take two numbers and add them. Put this entire thing in a function 
add() and return the result
 */
function add(num1,num2){
  var adding=num1+num2;
  return adding;
}

console.log(add(2,9))

/*Your function should take a question and the right answer.
Ask your user to answer the question.
check the answer and increment score (global variable)
tell your user whether the answer was correct or not */
score=0;
function evaluate(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer===answer){
    console.log("right");
    score++;
  }else{
    console.log("wrong");
    score--;
  }
  console.log("Score is: ",score)
}

var q3="Did you watch Scam 1992?"
var ans3="Yes"

var q4="Are you interested in competitive programming?"
var ans4="No"

evaluate(q3,ans3)
evaluate(q4,ans4)

/* print your name 5 times by calling console.log()
use for loop to do this
BONUS: Print the number with your name */

for(i=1;i<=5;i++){
  console.log(i,"Dev-Enforced")
}

/*prepare a list of grocery items to buy.
add 5 items
print the first item on the list.
print the third item on the list.
print the last item on the list. */

var groceryItems=["cauliflower","capsicum","brinjal","onion","potato"]
console.log(groceryItems[0],groceryItems[2],groceryItems[groceryItems.length-1])

/* Create two objects and put information about two superheros: 
superman and batman. Get familiarity with the syntax. Read and 
understand what's written in understanding section.*/

var superman={
  alias:"Clark Kent",
  color:"blue",
  strength:100,
  stealth:1
}
var batman={
  alias:"Bruce Wayne",
  color:"black",
  strength:1,
  stealth:100
}

/* use question list and function to put together a quiz */
var questionList=[
  {
    qd:"Who has better strength?",
    ad:"superman"
  },
  {
    qd:"Who has better stealth?",
    ad:"batman"
  },
  {
    qd:"Who is Bruce Wayne?",
    ad:"batman"
  },
  {
    qd:"Who is Clark Kent?",
    ad:"superman"
  }
]
var points=0;
var highScores=[
  {
    name:"Varun",
    score:4
  },
  {
    name:"Arun",
    score:3
  },
  {
    name:"Ruma",
    score:2
  }
]
function evaluation(questionAsked,answerGiven){
  var ansUser = readlineSync.question(questionAsked)
  if(ansUser===answerGiven){
    console.log("right");
    points++;
  }else{
    console.log("wrong");
    points--;
  }
  console.log("Total points scored is: ",points)
}

for(i=0;i<questionList.length;i++){
  evaluation(questionList[i].qd,questionList[i].ad)
}

for(i=0;i<highScores.length;i++){
  if(points>highScores[i].score){
    console.log("You have scored higher than "+highScores[i].name)
  }else if(points=highScores[i].score){
    console.log("You have scored equal to "+highScores[i].name)
  }  
}