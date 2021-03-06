const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  var now = new Date().toString();
  console.log(`${now}: ${req.method} ${req.url}`);
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  //res.send('<h1>Hello Express</h1>');
  res.send({
    name: 'Ciprian',
    likes: [
      'Biking',
      'Cities'
    ]
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTilte: 'About page',
    currentDate: new Date().getFullYear()
  });
});

app.get('/bad', (req, res)  => {
  res.send({
    errorMessage: 'ieroare'
  });
});

app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
    pageTilte: 'Projects'
  });
});

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
