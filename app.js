const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('This is a simple Node App'));
app.get('/authorInfo', (req, res) => res.send('This is Devi Das'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))