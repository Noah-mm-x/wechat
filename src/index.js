const { WechatyBuilder } = require('wechaty')
const WechatyWebPanelPlugin = require('wechaty-web-panel');

const name = 'wechat-assistant-pro';
let bot = '';


console.log('默认使用uos web版微信协议')
bot = WechatyBuilder.build({
    name, // generate xxxx.memory-card.json and save login data for the next login
    puppetOptions: {
        uos: true
    },
    puppet: 'wechaty-puppet-wechat',
});


bot.use(
    WechatyWebPanelPlugin({
        apiKey: '89c866abdff27213baf122a7eb6684ca3a4f4041',
        apiSecret: '2176bb8b38952ee497faa07bd00374f9291f08e9',
    })
)
bot.start()
    .catch((e) => console.error(e));

