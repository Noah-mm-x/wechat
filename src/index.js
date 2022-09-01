const { WechatyBuilder } = require('wechaty')
const WechatyWebPanelPlugin = require('wechaty-web-panel');
const { WechatyFaceCartonPlugin } = require('wechaty-face-carton')

console.log('WechatyFaceCartonPlugin', WechatyFaceCartonPlugin, typeof WechatyFaceCartonPlugin)

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
// 测试
bot.use(
    WechatyFaceCartonPlugin({
        // apiKey: '89c866abdff27213baf122a7eb6684ca3a4f4041',
        // apiSecret: '2176bb8b38952ee497faa07bd00374f9291f08e9',
        maxuser: 10, // 支持最多多少人进行对话，建议不要设置太多，否则占用内存会增加
        secretId: 'AKIDEORL8qOE1c0A8tRksqbAVdYEanqgJjwy', // 腾讯secretId
        secretKey: 'shS2UsAICtOhorjI8nGbkkY8UebNyN0P', // 腾讯secretKey
        allowUser: [], // 允许哪些好友使用人像漫画化功能，为空[]代表所有人开启
        allowRoom: ['机器人'], // 允许哪些群使用人像漫画化功能，为空[]代表不开启任何一个群
        quickModel: true, // 快速体验模式 默认关闭 开启后可直接生成二维码扫描体验，如果自己代码有登录逻辑可以不配置此项
        tipsword: '卡通', // 私聊发送消息，触发照片卡通化提示 如果直接发送图片，默认进入图片卡通化功能，不填则当用户初次发送文字消息时不做任何处理
    })
)
bot.start()
    .catch((e) => console.error(e));

