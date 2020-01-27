const fruits = require('./fruits');

let id = 4;
    
module.exports = {
    getFruits: (req, res) => {
        res.status(200).json(fruits);
    },
    addFruit: (req, res) => {
        const {name, color} = req.body;
    
        if (!name || !color) {
            res.status(400).json({message: 'Please enter both a name and color'})
        } else {
            const newFruit = {
                id,
                ...req.body
            }
        
            fruits.push(newFruit)
        
            id++;
            res.status(200).json([newFruit, fruits])
        }
    },
    editFruit: (req, res) => {
        const {name, color} = req.body;
        const targetIndex = fruits.findIndex(fruit => fruit.id === +req.params.id)
    
        fruits[targetIndex].name = name;
        fruits[targetIndex].color = color;
    
        res.status(200).json(fruits);
    },
    deleteFruit: (req, res) => {
        const targetIndex = fruits.findIndex(fruit => fruit.id === +req.params.id)
    
        fruits.splice(targetIndex, 1)
    
        res.status(200).json(fruits);
    }
}