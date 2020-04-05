const express = require('express');
const mongoose = require('mongoose');
const Meal = require('./models/meals');
const cors = require('cors');

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ limit: '10MB', extended: false }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/form', async (req, res) => {
  console.log('bodytitle', req.body);
  const meal = await Meal.create(req.body);
  console.log('Meal', meal);
  return res.json({ _id: meal.id });
});

app.post('/', async (req, res) => {
  req.body.image = await JSON.parse(req.body.image);
  console.log('post hit');
  const meal = await Meal.create({
    imageBuf: new Buffer.from(req.body.image.data, 'base64'),
    imageBufType: req.body.image.type,
    //title: req.body.title,
  });

  res.render('show', {
    meal,
  });
});

app.listen(8000, () => console.log('Server on Port 8000'));
