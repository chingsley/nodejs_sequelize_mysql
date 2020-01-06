const app = require('./app');
const port = process.env.PORT || 3000;


app.listen(port, err => {
  if (err) return console.log(`Cannot Listen on PORT: ${port}`);
  console.log(`Server started on http://localhost:${port}`)
});