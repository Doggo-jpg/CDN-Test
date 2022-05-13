
const express = require('express');
const app = express();
//use cors
const cors = require('cors');
app.use(cors());


const PORT = process.env.PORT || 4000;

app.use(express.json({extended: true}));
//return App.css file with get
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile('App.css', {root: __dirname });
});


app.listen(PORT, () => {
    console.log(`The server is using the port:  ${PORT}`);
})