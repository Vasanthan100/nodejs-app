import express from 'express';
import bodyParser from 'body-parser';
import db from "./mongoC.js";
const PORT = process.env.PORT || 4000;
const app = express();
app.use((req, res, next) => {
res.header('Access-Control-Allow-Origin','*');
res.header('Access-Control-Allow-Headers', '*');
next();
});
// Parses the text as url encoded data
app.use(bodyParser.urlencoded ({extended: true}));
// Parses the text as json
app.use(bodyParser.json());
app.get('/', async(req, res) => {
res.send('Hello World, express.***************************....');
})

app.listen(PORT, () => {
    console.log("Server running at port:",PORT);
  });