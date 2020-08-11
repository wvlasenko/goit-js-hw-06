"use strict";
import users from './users.js'

const getUsersWithFriend = (users, friendName) => {
    const userWithFriend = users.reduce((acc, user) => {
        if (user.friends.includes(friendName)) {
            acc.push(user.name);
        }
        return acc;
    },[]);
    return userWithFriend;
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
// [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry'));
// [ 'Elma Head', 'Sheree Anthony' ]
