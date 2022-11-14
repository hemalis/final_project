const {Client} = require('pg')

const client = new Client({
  host:"localhost",
  user:"postgres",
  port: 5432,
  password: "sehbzsehbz",
  database: "crypto_stock"
})

client.connect();

client.query('SELECT * FROM stocks', (err, res) => {
  if(!err){
    console.log(res.rows);
  }
  else {
    console.log(err.message);
  }
  client.end;
})