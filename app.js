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
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/form', async (req, res) => {
  const meal = await Meal.create(req.body);
  res.json({ _id: meal.id });
});

app.post('/image', async (req, res) => {
  try {
    req.body.image = await JSON.parse(req.body.image);
    const id = req.body.id;
    const meal = await Meal.findById({ _id: id });
    const img = {
      imageBuf: new Buffer.from(req.body.image.data, 'base64'),
      imageBufType: req.body.image.type,
    };

    //meal.imageUrl = 'https://homepages.cae.wisc.edu/~ece533/images/fruits.png';
    //TODO: neater way to do woth destr/spread?
    meal.imageBuf = img.imageBuf;
    meal.imageBufType = img.imageBufType;
    await meal.save();
    res.render('show', {
      meal,
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(8000, () => console.log('Server on Port 8000'));
