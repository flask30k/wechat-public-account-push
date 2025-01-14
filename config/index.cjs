/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx134b366b69c53e06',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'c6339a7497d6cb16cd2e72718a183025',


  PROVINCE: '安徽',
  CITY: '芜湖',

  USERS: [
    {
      // 想要发送的人的名字
      name: '懵懵o',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oqr2p5tpnq9J5a-CqRYyIM9hRlmg',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'MxYfIyhWSb9vohnZ_kt8fyOsix_b0ICqLLGkfXSxiwE',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-28',
      horoscopeDateType: '今日',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '生日', name: '蒙蒙', year: '2002', date: '11-28',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '全全', year: '1999', date: '12-02',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2020-10-28' },
      ],
    },
  ],

      
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'jCCk8AfTbcC_Qim0mfHcZmlI4UO9ZRgWlaaLkrD2rCw',
  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oqr2p5hPfmjeRvn1ZO5C9OofR9mE',
    }
  ],

}

module.exports = USER_CONFIG
