const userArray = [
    {
        name: 'Oleg',
        age: 20,
        city: 'Toronto',
        id: 0
    },
    {
        name: 'Dmitro',
        age: 17,
        city: 'Tokyo',
        id: 1
    },
    {
        name: 'Roman',
        age: 19,
        city: 'Berlin',
        id: 2
    },
    {
        name: 'Artem',
        age: 76,
        city: 'Stockholm',
        id: 3
    },
];

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = userArray.find(user => user.id === id);
            if (user) {
                resolve(user);
            } else {
                reject(new Error('User not found'));
            }
        }, 1000);
    });
}

async function loadUsers(idArray) {
    for(let i = 0; i < idArray.length; i++) {
        getUser(i)
            .then(result => console.log(result))
            .catch(error => console.error(error));
    }
}

async function showUsers(idArray) {
    console.log('Loading...');
    await loadUsers(idArray);
    console.log('Loading finished');
}

showUsers([0, 1, 2, 3, 4]);
