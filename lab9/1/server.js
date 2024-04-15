const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.get('/shopping-list/:listName', (req, res) => {
    const listName = req.params.listName;
    const list = shoppingLists.find(list => list.name === listName);
    if (!list) {
        return res.status(404).json({ message: 'List not found' });
    }
    res.json(list.items);
});

app.post('/shopping-list/:listName', (req, res) => {
    const listName = req.params.listName;
    const { name, quantity, status } = req.body;
    const listIndex = shoppingLists.findIndex(list => list.name === listName);
    if (listIndex === -1) {
        shoppingLists.push({ name: listName, items: [] });
    }
    shoppingLists[listIndex].items.push({ name, quantity, status });
    res.json({ message: 'Item added successfully' });
});

app.delete('/shopping-list/:listName/:itemName', (req, res) => {
    const listName = req.params.listName;
    const itemName = req.params.itemName;
    const listIndex = shoppingLists.findIndex(list => list.name === listName);
    if (listIndex === -1) {
        return res.status(404).json({ message: 'List not found' });
    }
    const itemIndex = shoppingLists[listIndex].items.findIndex(item => item.name === itemName);
    if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }
    shoppingLists[listIndex].items.splice(itemIndex, 1);
    res.json({ message: 'Item deleted successfully' });
});

app.delete('/shopping-list/:listName', (req, res) => {
    const listName = req.params.listName;
    const listIndex = shoppingLists.findIndex(list => list.name === listName);
    if (listIndex === -1) {
        return res.status(404).json({ message: 'List not found' });
    }
    shoppingLists.splice(listIndex, 1);
    res.json({ message: 'List deleted successfully' });
});

app.post('/shopping-list/:listName', (req, res) => {
    const listName = req.params.listName;
    const listIndex = shoppingLists.findIndex(list => list.name === listName);
    if (listIndex === -1) {
        shoppingLists.push({ name: listName, items: [] });
        res.json({ message: 'List added successfully' });
    } else {
        res.status(400).json({ message: 'List already exists' });
    }
});



const PORT = process.env.PORT || 5500;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


let shoppingLists = [
    {
        name: 'smartphone',
        items: [
            { name: 'Apple', quantity: 52, status: false },
            { name: 'Samsung', quantity: 23, status: true }
        ]
    }
];
