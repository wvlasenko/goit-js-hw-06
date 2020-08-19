'use strict';
import users from './users.js';

const getUsersWithAge = (users, min, max) => {
  const userWithAge = users.filter(user => user.age > min && user.age < max);
  return userWithAge;
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));
