const express = require('express');

const { getAudioUrl } = require('./lib/getUrl')


const app = express();
const PORT = 3131;

app.use(express.json())

app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server is Successfully Running, and App is listening on port " + PORT);
    } else {
        console.log("Error occurred, server can't start", error);
    }
});

app.get('/', (req, res) => {
    res.status(200);
    res.send("Welcome to the root URL of the Server");
});
app.get('/tts', (req, res) => {
    const result = getAudioUrl("helloo")
    res.status(200);
    res.send(result);
});
app.post('/tts', (req, res) => {
    const { text } = req.body
    const audioUrl = getAudioUrl(text)

    res.status(200).send({audioUrl})
})

module.exports = app

