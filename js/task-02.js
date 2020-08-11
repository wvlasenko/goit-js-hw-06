"use strict";
import users from './users.js'

const getUsersWithEyeColor = (users, color) => {
    const userWithEyeColor = users.filter(user => user.eyeColor === color)
    return userWithEyeColor;

};

console.log(getUsersWithEyeColor(users, 'blue'));