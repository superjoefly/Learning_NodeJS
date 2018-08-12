const express = require('express');

var app = express();

app.get('/', (req, res) => {
  // // Test A:
  // res.send('Hello World!'); // -> pass

  // // Test B:
  // res.status(404).send('Hello World!'); // -> fail

  // // Test C:
  // res.status(404).send({
  //   error: 'Page not found'
  // })

  // Test D:
  res.status(404).send({
    error: 'Page not found',
    name: 'Todo App v1.0'
  })

});

if (!module.parent) {
  app.listen(3000, () => {
    console.log("Server up on port 3000");
  });
}

process.on('SIGINT', () => {
  console.log("Bye bye!");
  process.exit();
});

module.exports = {
  app
};
