const users = [
    { firstname: 'John', lastname: 'Doe', score: 80 },
    { firstname: 'Alice', lastname: 'Smith', score: 75 },
    { firstname: 'Bob', lastname: 'Johnson', score: 90 },
    { firstname: 'Emily', lastname: 'Brown', score: 85 },
    { firstname: 'Michael', lastname: 'Wilson', score: 70 },
    { firstname: 'Sarah', lastname: 'Anderson', score: 95 },
    { firstname: 'David', lastname: 'Taylor', score: 60 },
    { firstname: 'Olivia', lastname: 'Martinez', score: 88 },
    { firstname: 'James', lastname: 'Garcia', score: 82 },
    { firstname: 'Emma', lastname: 'Lopez', score: 78 },
    { firstname: 'William', lastname: 'Hernandez', score: 92 },
    { firstname: 'Ava', lastname: 'King', score: 87 },
    { firstname: 'Alexander', lastname: 'Young', score: 83 },
    { firstname: 'Sophia', lastname: 'Wright', score: 79 },
    { firstname: 'Daniel', lastname: 'White', score: 94 },
    { firstname: 'Mia', lastname: 'Collins', score: 76 },
    { firstname: 'Ethan', lastname: 'Bell', score: 91 },
    { firstname: 'Isabella', lastname: 'Hall', score: 84 },
    { firstname: 'Matthew', lastname: 'Scott', score: 74 },
    { firstname: 'Chloe', lastname: 'Adams', score: 89 }
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