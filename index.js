const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.get('/api/v1/news', (req, res, next) => {
  const item = {
    id: 1,
    main_headline: 'Here is the news',
    details: {
      blurb: 'Loads of news Loads of news Loads of news Loads of news Loads of news Loads of news',
      more_details: 'info.txt'
    }
  }
  news = { posts: [item, item, item, item] }
  return res.json(news)
})

app.listen(9000);