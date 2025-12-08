
let db; 

async function connectDB() {
  await client.connect();
  db = client.db(database);
  console.log('Mongodb connected');
}
connectDB().catch(err => {
  console.error('Mongodb connection failed:', err);
  process.exit(1);
});