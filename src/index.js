import express from 'express'
import cors from 'cors';

import canonize from './canonize'

const app = express();
app.use(cors());
app.get('/', function (req, res) {
  console.log(req.query);
  const username = canonize(req.query.username)
  req.query.username;
  res.send(username);
  // res.json({
  //   url: req.query.url,
  //   username,
  // })
});

app.listen(3000, function () {
  console.log('Example app listen ob port 3000!')
});
// const array = [
//   'https://vk.com/igor.suvorov',
//   'https://twitter.com/suvorovigor',
//   'https://telegram.me/skillbranch'
// ];
//
// //noinspection JSAnnotator
// array.forEach((url) => {
//   const username = canonize(url);
//   console.log(username[5]);
// })
