"use strict";
import users from './users.js'

const getNamesSortedByFriendsCount = users => {
    const userToSort = [...users];
    const sortedUsers = userToSort.sort((compareUser1, compareUser2) => {
        return compareUser1.friends.length - compareUser2.friends.length;
    })
        .map(user => user.name);
    return sortedUsers;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
