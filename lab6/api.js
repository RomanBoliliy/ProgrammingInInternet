const users = [
    { firstname: 'Roman', lastname: 'Bolily', score: 1 },
    { firstname: 'Yaroslav', lastname: 'Melnyk', score: 75 },
    { firstname: 'Valentin', lastname: 'Litovchenko', score: 90 },
    { firstname: 'Ruslan', lastname: 'Rotan', score: 85 },
    { firstname: 'Dmitro', lastname: 'Rak', score: 70 },
    { firstname: 'Ivan', lastname: 'Hordielko', score: 52 },
    { firstname: 'Danil', lastname: 'Stapanec', score: 60 },
    { firstname: 'Stepan', lastname: 'Babenko', score: 81 },
    { firstname: 'Sergiy', lastname: 'Udod', score: 82 },
    { firstname: 'Anna', lastname: 'Yurchenko', score: 78 },
    { firstname: 'Viktoria', lastname: 'Dumanska', score: 92 },
    { firstname: 'Yulia', lastname: 'Kulichevska', score: 27 },
    { firstname: 'Anton', lastname: 'Stupak', score: 83 },
    { firstname: 'Evgen', lastname: 'Gres', score: 79 },
    { firstname: 'Ilon', lastname: 'Mask', score: 94 },
    { firstname: 'Maya', lastname: 'Adams', score: 46 },
    { firstname: 'Maria', lastname: 'Pylypenko', score: 91 },
    { firstname: 'Isabella', lastname: 'Sternenko', score: 84 },
    { firstname: 'Allan', lastname: 'Scott', score: 74 },
    { firstname: 'James', lastname: 'Statham', score: 89 }
];

function fetchUsers(callback) {
    setTimeout(() => {
        const randomUsers = [];
        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * users.length);
            randomUsers.push(users[randomIndex]);
        }
        callback(randomUsers);
    }, 1000);
}

function getNewUsers() {
    return users.slice(0, 5);
}

export { fetchUsers, getNewUsers };