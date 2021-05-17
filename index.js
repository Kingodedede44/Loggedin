const db = require('nedb');
const express = require('express');
 


const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("onw"));
app.use(express.static('snake'));
  app.use(express.json({ limit: '1mb'}));

  const database = new db('datraaa.db');
  database.loadDatabase();


app.set('trust proxy', true); 
app.use((req, res, next) => {
  if(!req.secure) return res.redirect('https://' + req.get('host') + req.url);
  next();
});


  

app.post('/api', (request, response) => {
const data = request.body;
database.insert(data);
response.json({
  status:'success'
  
 
});
});