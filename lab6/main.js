// Додамо імпорт функції fetchUsers з файлу api.js, якщо він є у нас
import { fetchUsers, getNewUsers } from './api.js';


function init() {
    var mainDiv = document.getElementById('main');

    // Створення елементів header, main і footer
    var header = document.createElement('header');
    var mainContent = document.createElement('main');
    var footer = document.createElement('footer');

    header.innerHTML = `
        <button onclick="showContent('User Rating')">User Rating</button>
        <button onclick="showContent('News')">News</button>
        <button onclick="showContent('Contacts')">Contacts</button>
        <button onclick="showContent('About')">About</button>
    `;

    mainContent.id = 'content';

    footer.innerHTML = `<div class="current-users">    <h3>Current Users</h3>    <p id="active-users-count">Loading...</p>
      <h3>New Users</h3><ul id="new-users-list"></ul> </div>
    `;

    // Встановлення стилів
    header.style.height = '100px';
    mainContent.style.height = '500px';
    footer.style.height = '100px';

    // Створення і розміщення елементів leftPanel, content і rightPanel всередині main
    var leftPanel = document.createElement('div');
    leftPanel.id = 'leftPanel';
    leftPanel.innerHTML = '<div class="loader"></div>';
    leftPanel.style.width = '33%';
    leftPanel.style.height= '100%';
    leftPanel.style.float = 'left';
    leftPanel.style.backgroundColor = 'lightblue';

    var content = document.createElement('div');
    content.id = 'content';
    content.innerHTML = '<div class="loader"></div>';
    content.style.width = '33%';
    content.style.height= '100%';
    content.style.float = 'left';
    content.style.backgroundColor = 'lightgreen';

    var rightPanel = document.createElement('div');
    rightPanel.id = 'rightPanel';
    rightPanel.innerHTML = '<div class="loader"></div>';
    rightPanel.style.width = '33%';
    rightPanel.style.height= '100%';
    rightPanel.style.float = 'left';
    rightPanel.style.backgroundColor = 'lightcoral';

    // Додавання елементів leftPanel, content і rightPanel до main
    mainContent.appendChild(leftPanel);
    mainContent.appendChild(content);
    mainContent.appendChild(rightPanel);

    // Додавання елементів header, main і footer до div з id 'main'
    mainDiv.appendChild(header);
    mainDiv.appendChild(mainContent);
    mainDiv.appendChild(footer);

    // Задача затримки на 1 секунду та показ No users
    setTimeout(function () {
        var loader = document.querySelectorAll('.loader');
        for (var i = 0; i < loader.length; i++) {
            loader[i].style.display = 'none';
        }
        var noUsers = document.createElement('p');
        noUsers.textContent = 'No users';
        content.appendChild(noUsers);

        var getUsersButton = document.createElement('button');
        getUsersButton.textContent = 'Get Users';
        getUsersButton.onclick = getUsers;
        content.appendChild(getUsersButton);
    }, 1000);

}

function showContent(section) {
    var content = document.getElementById('content');
    content.innerHTML = '<h2>' + section + '</h2>';

    //content.textContent = section;
}

function getUsers() {
    updateFooter();
    sumUsers();
    fetchUsers(function(users) {
        createTable(users);

    })
};


// Функція для створення таблиці з користувачами
function createTable(users) {
    // Отримаємо доступ до елемента content
    var content = document.getElementById('content');
    // Очистимо вміст контенту
    content.innerHTML = '';

    // Створимо таблицю
    var table = document.createElement('table');

    // Додамо заголовки таблиці
    var headerRow = document.createElement('tr');
    ['First Name', 'Last Name', 'Score'].forEach(function(headerText) {
        var th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Додамо дані користувачів у таблицю
    users.forEach(function(user) {
        var row = document.createElement('tr');
        Object.values(user).forEach(function(value) {
            var td = document.createElement('td');
            td.textContent = value;
            row.appendChild(td);
        });
        table.appendChild(row);
    });

    // Додамо таблицю до контенту
    content.appendChild(table);

        // Обробник для сортування таблиці за прізвищем
        var lastnameHeader = document.getElementById('usersTable').rows[0].cells[1];
        lastnameHeader.addEventListener('click', function() {
            sortTable(1);
        });
}


// Функція для сортування таблиці за колонкою
function sortTable(columnIndex) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById('usersTable');
    switching = true;
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName('td')[columnIndex];
            y = rows[i + 1].getElementsByTagName('td')[columnIndex];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}



// Функція для отримання кількості активних користувачів
function fetchActiveUsers() {
    fetchUsers(users => {
        const activeUsersCount = users.length;
        const activeUsersCountElement = document.getElementById('active-users-count');
        activeUsersCountElement.textContent = `Active Users: ${activeUsersCount}`;
    });
}

// Функція для отримання кількості нових користувачів
function fetchNewUsers() {
    var newUsers = getNewUsers(); 
    
    const newUsersListElement = document.getElementById('new-users-list');
    newUsersListElement.innerHTML = ''; // Очищаємо список перед оновленням

    newUsers.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.firstname + ' ' + user.lastname ;
        newUsersListElement.appendChild(li);
    });
}

// Оновлення даних у футері
function updateFooter() {
    fetchActiveUsers();
    fetchNewUsers();
}

function sumUsers() {
    fetchUsers(users => {
        let usersCount = 0;
       users.forEach(user => {
        usersCount+=user.score;
       });

        
        console.log(`Total users: ${usersCount}`);
    });
}


window.onload = init;