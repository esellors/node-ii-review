const express = require(`express`);
const app = express();
const axios = require('axios');
const fc = require('./fruitsController');

app.use(express.json());

app.use((req, res, next) => {
    console.log('Server hit', req.ip, req.url)
    next();
});

// fruits endpoints
app.get('/api/fruits', fc.getFruits);
app.post('/api/fruits', fc.addFruit);
app.put('/api/fruits/:id', fc.editFruit);
app.delete('/api/fruits/:id', fc.deleteFruit);

// breaking bad apis
app.get('/api/breaking', (req, res) => {
    axios
        .get('https://www.breakingbadapi.com/api/characters')
        .then(response => res.status(200).json(response.data))
})

const PORT = 5050;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))