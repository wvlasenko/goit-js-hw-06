'use strict';
import users from './users.js';

const getInactiveUsers = users => {
  const inactiveUser = users.filter(user => !user.isActive);
  return inactiveUser;
};

console.log(getInactiveUsers(users));
