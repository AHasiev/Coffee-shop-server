const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

app.use(require("./routes/drink.router"));


mongoose
  .connect(
    "mongodb+srv://Ahmed:Maloy9093@cluster0.ndjyp.mongodb.net/cofferetryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(4000, () => {
  console.log(`Cервер успешно запущен http://localhost:4000`);
});
