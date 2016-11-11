import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/task2A', (req, res) => {
  console.log(req.query);
  console.log(+req.query.a || 0 + (+req.query.b || 0));
  const c = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(c.toString())
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
