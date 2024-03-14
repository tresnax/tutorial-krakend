const express = require('express');
const app = express();

const users = [
  { name: 'John Doe', address: '123 Main St' },
  { name: 'Jane Doe', address: '456 Oak St' },
  // ... tambahkan data lainnya
];

app.get('/', (req, res) => {
  res.json(users);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Service 1 listening at http://localhost:${port}`);
});
