// const express = require('express')
// const app = express();
// app.use(express.json());
// app.get('/', async (req, res) => {
//     try {
//       const data = await fetch(
//         `https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/getMe`
//       );
//       const json = await data.json();
//       res.send(json);
//     } catch (error) {
//       console.log(error);
//     }
// })
// app.listen(process.env.PORT || 3000)
import { Telegraf } from "telegraf";
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

// bot.command("say", async (ctx) => {
//   console.log(ctx);
//   ctx.reply("say command");
//   // // Explicit usage
//   // await ctx.telegram.sendMessage();

//   // // Using context shortcut
//   // await ctx.leaveChat();
// });

// bot.start((ctx) => ctx.reply("Welcome"));
bot.on(message("text"), async (ctx) => {
  console.log(ctx);
  // Explicit usage
  // await ctx.telegram.sendMessage(
  //   ctx.message.chat.id,
  //   `Hello ${ctx.state.role}`
  // );

  // Using context shortcut
  await ctx.reply(`Hello ${ctx.state.role}`);
});
bot.launch();

