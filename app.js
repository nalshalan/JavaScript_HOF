console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function plus(number) {
    return (plusNumber) => {
        return number + plusNumber;
    }
}

const plus15 = plus(15);

console.log(plus15(10));


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  users.forEach((user) => {
    console.log(user.name);
  });


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
const userScores = users.map((user, index, array) => {
    return {name: user.name, score: user.score};
});

console.log(userScores);


// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

const activeUsers = users.filter((user, index, array) => {
    if (user.isActive == true) {
        return true;
        // Keep it
    }
});

console.log(activeUsers);


// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

const scoresInDescOrder = users.sort((a, b) => {
    return b.score - a.score;
});

console.log(scoresInDescOrder);


// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");

const sumOfUserScores = users.reduce((sum, num) => {
    return sum + num.score;
}, 0);

console.log(sumOfUserScores);

const avgScore = sumOfUserScores / users.length;
console.log(avgScore);
