const dbUsers = [
   {
      id: "003498",
      email: "martin@gmail.com",
      password: "D9729FEB74992CC3482B350163A1A010",
      createdAt: 1601323030959,
      isActive: true,
   },
   {
      id: "112076",
      email: "abigail@gmail.com",
      password: "D58E3582AFA99040E27B92B13C8F2280",
      createdAt: 1601323566304,
      isActive: true,
   },
   {
      id: "099001",
      email: "dani@gmail.com",
      password: "73A90ACAAE2B1CCC0E969709665BC62F",
      createdAt: 1601323616825,
      isActive: true,
   },
   {
      id: "003498",
      email: "martin@gmail.com",
      password: "D9729FEB74992CC3482B350163A1A010",
      createdAt: 1601323030959,
      isActive: true,
   },
];

let mostRecentSignUpDate = 0;
dbUsers.forEach((user) => {
   if (user.createdAt > mostRecentSignUpDate) {
      mostRecentSignUpDate = user.createdAt;
   }
});
const mostRecentSignUp = dbUsers.find((user) => {
   // find the user (object) who this is true for
   return user.createdAt === mostRecentSignUpDate;
});
console.log(`The most recent sign-up date is: `, mostRecentSignUpDate);
console.log(`The most recent user who signed-up is: `, mostRecentSignUp);

const dupUserIndex = dbUsers
   .map((user) => {
      return user.id;
   })
   .findIndex((user, index, arr) => {
      // findIndex for something passes a test
      return arr.indexOf(user) !== index;
   });
console.log(`The duplicate user index is: `, dupUserIndex);

const uniqDbUsers = dbUsers.filter((author, index, arr) => {
   return arr.indexOf(author) !== dupUserIndex;
});
console.log(`The unique users include: `, uniqDbUsers);
