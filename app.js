const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for serving static files
app.use(express.static('public'));

// Placeholder route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
