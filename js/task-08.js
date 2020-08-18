'use strict';
import users from './users.js';

// const getUsersWithFriend = (users, friendName) => {
//   const userWithFriend = users.reduce((acc, user) => {
//     if (user.friends.includes(friendName)) {
//       acc.push(user.name);
//     }
//     return acc;
//   }, []);
//   return userWithFriend;
// };
const getUsersWithFriend = (users, friendName) => {
  const userWithFriend = users.filter(user =>
    user.friends.includes(friendName),
  );

  return userWithFriend.map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]
