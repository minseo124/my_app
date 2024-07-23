const express = require('express');
var cors = require('cors')
const app = express();

app.use(express.static('public'))
app.use(cors());
/* request body로 전달되는 json/body를 express 서버가 이해할 수 있게 미들웨어를 등록한다 */
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', function (req, res) {
  res.sendFile(__dirname + "/public/home.html");
});
app.get('/main', function (req, res) {
  res.sendFile(__dirname + "/public/main.html");
});
app.get('/chart', function(req, res) {
  res.json([
    {
      ranking: 1,
      title: '데드풀과 울버린',
      satisfy:99,
      ratio: 15.7,
      url:'/movie?cate=actions&sf?code={ranking}'
    },
    {
      ranking: 2,
      title: '파일럿',
      satisfy:99,
      ratio: 15.7,
      url:'/movie?cate=actions&sf?code={ranking}'
    },
  ])
}
)
// req : request [요청]
// res : response [응답]
app.post('/contact', function (req, res) {
  console.log(req.body);
  res.sendFile(__dirname + "/public/contact.html");
});

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})