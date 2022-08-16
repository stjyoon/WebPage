const express = require('express')();
const app = express();
const PORT = 8000;

app.use(express.json())
app.listen(
  PORT,
  () => console.log('live on http://localhost:' + PORT)
)

app.get('/fishexp', (req, res) => {
  res.status(200).send({
    experiment: 'zebrafish lab',
    link: 'https://apps.cur.org/ncur2021/archive/Display_NCUR.aspx?id=113940'
  })
});

app.get('/barnesmazeexp', (req, res) => {
  res.status(200).send({
    experiment: 'barnes maze lab',
    link: 'pending publication'
  })
})

app.post('/suggestions', (req,res) => {

  const { title } = req.params;
  const { details } = req.body;

  if (!details) {
    res.status(418).send({ message: 'Details please!' })
  }
  res.send({
    suggestion: 'Thank you for your suggestion! I will look into' + title,
  });
});
