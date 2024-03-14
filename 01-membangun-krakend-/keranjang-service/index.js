const express = require('express');
const app = express();

const keranjang = [
  { item: 'Laptop', jumlah: 2 },
  { item: 'Mouse', jumlah: 5 },
  // ... tambahkan data lainnya
];

app.get('/', (req, res) => {
  res.json(keranjang);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Service 2 listening at http://localhost:${port}`);
});
