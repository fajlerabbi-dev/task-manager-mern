require('dotenv').config();
const app = require('./app');

app.listen(process.env.PORT, () => {
  console.log(`Express server is running on PORT 3000`);
});
