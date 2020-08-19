'use strict';
import users from './users.js';

const getUserNames = users => {
  const userName = users.map(user => user.name);
  return userName;
};
console.log(getUserNames(users));
