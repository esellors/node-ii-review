const express = require(`express`);
const app = express();
const axios = require('axios');

app.use(express.json());

// The following app.use is unnecessary and just for fun to show custom Top-Level Middleware working on each server hit
// app.use((req, res, next) => {
//     axios('http://api.icndb.com/jokes/random').then(res => console.log(res.data.value.joke));
//     next();
// });

let id = 1;

const outfits = [
    { 
        outfit_id: 0, 
        season: "summer",
        top: "red t-shirt", 
        bottom: "yellow shorts",
        accessory: "necklace"
    }
];

// outfits endpoints
app.get('/api/outfits', (req, res) => {
    res.status(200).json(outfits);
});

app.post('/api/outfits', (req, res) => {
    const { season, top, bottom, accessory } = req.body;

    const newOutfit = { 
        outfit_id: id,
        season,
        top,
        bottom,
        accessory
    }

    outfits.push(newOutfit);
    id++;

    res.status(200).json(outfits)
})





const PORT = 5050;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`))