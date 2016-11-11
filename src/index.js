import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  console.log(req.query);
  const fullname = req.query.fullname;
  const arr = fullname.split(' ');
  var arr_l = arr.length;
  if (/[0-9]/.test(arr)) {
    arr_f = 'Invalid fullname';
  }
  else if (/(_)/.test(arr)) {
    arr_f = 'Invalid fullname';
  }
  else if (/\//.test(arr)) {
    arr_f = 'Invalid fullname';
  }
  else if (/\\/.test(arr)) {
    arr_f = 'Invalid fullname';
  }
  else if (arr_l >= 9) {
    var  arr_f = 'Putin V. V.';
  }
  else if (arr_l == 3){
    var arr_f = arr[2]+ ' ' + arr[0].substr(0, 1) + '. '+ arr[1].substr(0, 1) + '.';
  }
  else if (arr_l == 2) {
    var arr_f = arr[1]+ ' ' + arr[0].substr(0, 1) + '.';
  }
  else if (arr[0] == ''){
    arr_f = 'Invalid fullname'
  }
  else if (arr_l == 1) {
    var arr_f = arr[0];
  }
  else {
    arr_f = 'Invalid fullname'
  }
  res.send(arr_f);
  console.log(arr, arr_l, arr_f);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
