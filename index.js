const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// normal json response
//app.post('/webhook', (req, res) => {
 //   console.log('Received webhook:', req.body);
 //   res.sendStatus(200);
//});

// using queries
app.get("/apiqueries", (req, res) => {
    // get the URL parameters passed by
    // query with req.query
    const queries = req.query;
console.log('Received params:', req.query);
    res.send(queries);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
