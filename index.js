// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *    Answer: The difference between counter1 and counter2 is, the counter1 is when ever to call or invorked funtion the result will always remember the first one and add the outer one. It's call result inside the function
 *    The counter2 can get the same answer only at first but will never change result the second call, it's call the result from out side the function.
 * 2. Which of the two uses a closure? How can you tell?
 *    Answer: The counter1 is using the closer because it coding funtion in the funtion.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *    Answer: Scenario would the counter1 preferable is to store and remember the first result we get and countinue to give the next result;
 *    Counter2 would be better by that can call the result from outside the funtion.
 *     
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(scored){

  return function inner(){    

    const point = Math.floor(Math.random() * 2);

      return point;
}
}
const countScore = inning();
console.log(countScore());
console.log(countScore());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 
const team = {Home, Away};
function finalScore(callback,num1){
  return callback(num1); 
};
const homeScore =function (num1){
  num1 = num1+2;
  console.log (`"Home":${num1}`);
}
function awayScore(callback, num1){
   num1 = num1-4;
  console.log (`"Away":${num1}`);
}

finalScore(homeScore(inning, 9));
finalScore(awayScore(inning, 9));






/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:

1st inning: 0 - 2
2nd inning: 1 - 3
3rd inning: 1 - 3
4th inning: 2 - 4
5th inning: 4 - 6
6th inning: 4 - 6
7th inning: 4 - 6
8th inning: 5 - 8
9th inning: 6 - 10

Final Score: 6 - 10 */

// function scoreboard(callback,num1) {
//   return callback(num1)

// }
// const homeScore = function(num1){
//   for(i=0; i<10;i++){
//     console.log(`inning:$`)
//   }
// }


// for (let i = 0; i < inningsNum; i++) {
//   const currentInning = getInningScore(inning)
//   homeScore = homeScore + currentInning.home;
//   awayScore = awayScore + currentInning.away;
//   scoreByInning.push(`inning ${i+1}: Away ${currentInning.away} - Home ${currentInning.home}`)
// }
// return scoreByInning;
// }
// console.log(scoreboard(getInningScore, inning, 9));