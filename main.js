import { Markup, Telegraf } from "telegraf";

export const token = "7386065922:AAFEb5iqND1w1zhnDbxWOdc_-TUJuitj09E";

const bot = new Telegraf(token);
const webAppUrl = "https://tg-office-utils.web.app/";
bot.command("go", (ctx) => {
  ctx.reply(
    "Привет, нажми на кнопку ниже, для запуска приложения t.me/OfficeToolAppBot/OfficeUtils",
    Markup.keyboard([Markup.button.webApp("Launch APP", webAppUrl)])
  );
});

bot.command("start", (ctx) => {
  ctx.reply(
    `Hi! ${ctx.from.first_name} 👋 \n \n Click the button to launch the application👇 `,
    Markup.inlineKeyboard([Markup.button.webApp("Launch APP", webAppUrl)])
  );
})
bot.on("text", async (ctx) => {
  return ctx.reply(
    `Hi! ${ctx.from.first_name} 👋 \n \n Click the button to launch the application👇 `,
    Markup.inlineKeyboard([Markup.button.webApp("Launch APP", webAppUrl)])
  );
});
bot.on("message", async (ctx) => {
  return ctx.reply(`${ctx.message.web_app_data.data}`);
});

bot.launch();
