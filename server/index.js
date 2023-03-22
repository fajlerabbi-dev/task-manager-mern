require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 8080

app.listen(process.env.PORT, () => {
  console.log(`Express server is running on PORT 3000`);
});
