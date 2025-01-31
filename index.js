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
import { Telegraf, Telegram } from "telegraf";
import { message } from "telegraf/filters";
const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

bot.telegram.setMyCommands([{ command: "rate", description: "设置费率" }]);

bot.command("rate", async (ctx) => {
  console.log(ctx);
  await ctx.reply("设置成功");

  // // Using context shortcut
  // await ctx.leaveChat();
});

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
bot.launch({
  webhook: {
    domain: "https://lime-calm-beaver.cyclic.app/",
  },
});

