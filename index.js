const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) => { res.send('Jai Shree Mahakal - Bot Running'); });
app.get('/webhook', (req, res) => {
  if (req.query['hub.verify_token'] === 'mahakal123') {
    res.send(req.query['hub.challenge']);
  } else { res.send('Wrong token'); }
});
app.post('/webhook', (req, res) => {
  res.status(200).send('EVENT_RECEIVED');
});
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log('Running on '+PORT));
