const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5500;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Sample data for shopping lists
let shoppingLists = [
    { name: 'Groceries', items: [
        { name: 'Apples', quantity: 5, status: false },
        { name: 'Bananas', quantity: 10, status: true },
        { name: 'Milk', quantity: 2, status: false }
    ]},
    { name: 'Office Supplies', items: [
        { name: 'Pens', quantity: 20, status: false },
        { name: 'Notebooks', quantity: 3, status: true }
    ]}
];

// Get list by name
app.get('/list/:name', (req, res) => {
    const listName = req.params.name;
    const list = shoppingLists.find(list => list.name === listName);
    if (list) {
        res.json(list.items);
    } else {
        res.status(404).send('List not found');
    }
});

// Add item to list
app.post('/list/:name', (req, res) => {
    const listName = req.params.name;
    const { name, quantity, status } = req.body;
    const list = shoppingLists.find(list => list.name === listName);
    if (list) {
        list.items.push({ name, quantity, status });
        res.status(201).send('Item added successfully');
    } else {
        res.status(404).send('List not found');
    }
});

// Delete item from list
// Implement this endpoint according to your needs

// Delete entire list
// Implement this endpoint according to your needs

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});