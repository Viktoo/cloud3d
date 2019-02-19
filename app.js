const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

//app.get('/model', express.static('model'))
app.use(express.static('./model'));

// app.get('/model/emoji_smile.vrx'), function (req, res) {
// 	res.sendFile(__dirname + '/model/emoji_smile.vrx');
// };

app.get("/", function (req, res) {
  res.sendFile(path.join(publicDir, "/index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))