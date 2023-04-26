const express = require('express')
const app = express();
app.use(express.json());
app.all('/', async (req, res) => {
    try {
      const data = await fetch(
        `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/getMe`
      );
      const json = await data.json();
      res.json(json);
    } catch (error) {
      console.log(error);
    }
})
app.listen(process.env.PORT || 3000)
