const express = require('express')
const app = express()
//const port = 3000
const PORT = process.env.PORT
//app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('./model'));

//app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.listen(PORT)