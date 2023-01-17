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
  CITY: '淮北',

  USERS: [
    {
      // 想要发送的人的名字
      name: '来者可追',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oqr2p5hPfmjeRvn1ZO5C9OofR9mE',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'RUbIO1Bv9MClSuPKjlgAYRezq5wHyfuqzsWNWTvpM5o',
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


  SWITCH: {
     /** 每日天气 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: true,
     /** 每日N句 */
    // 金山每日一句, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    CIBA: false,
    // 古诗古文, 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    poetry: false,
     /** 星座运势 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    horoscope: false,
     /** 学生课表 */
    // 填 false 则不使用，按需关闭不使用的功能可以提高运行速度
    courseSchedule: true,
  },
  
   TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: 'c690b9de2fe9a9b887deee97ae9e7c65',
      // 天行天气（展示未来N天，最多7天）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    weather: 1,
  
    // 全网热搜榜（展示N条，最多30条）, 填 0 则不使用，按需关闭不使用的功能可以提高运行速度
    networkHot: 5,
  
    // 全网热搜榜展示类型，默认展示概要信息: ['title': 仅展示标题, 'default': 展示概要信息]
    networkHotType: 'default',
  },
  
 
  // 课程表相关配置
      // 如果courseSchedule不存在或者为空（null）则认为没有课程
      // 如果courseSchedule是一个数组，则认为不区分单双周，直接填写星期几对应的课表数据即可
      // 如果courseSchedule是一个对象（如下面所示）
      courseSchedule: {
        // 单双周的基准
        benchmark: {
          // 这里设置一个日期，用来作为判断课表是否单双周的依据
          date: '2022-10-14',
          // 该日期是否为单周
          isOdd: true
        },
        // 课表
        courses: {
          // 单周课表
          // 从星期一到星期日（星期六和星期日的课表数组可不填写）
          odd: [
            // 例子，周一的课表
            [
              '10:00-11:40 资源经济学',
              '14:30-16:10 国际经济学'
            ],
            // 周二
            [
              '08:00-09:40 国际金融学',
              '10:00-11:40 国际经济与贸易',
              '14:30-16:10 统计学'
            ],
            // 周三
            [
              '08:00-09:40 资源经济学',
              '14:30-16:10 国际经济学',
              '16:30-18:10 工程经济学',
              '19:00-20:40 保险学'
              
            ],
            // 周四
            [
              '08:00-09:40 国际金融学',
              '10:00-11:40 国际经济学'
            ],
            // 周五
            [
              '08:00-09:40 保险学',
              '10:00-11:40 国际贸易理论与实务'
            ],
            // 周六
            [
              
            ],
            // 周日
            [
       
            ]
          ],
          // 双周课表
          even: [
            [],
            [],
            [],
            [],
            [],
            [],
            []
          ]
        }
      },
    },
      
      
  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'RUbIO1Bv9MClSuPKjlgAYRezq5wHyfuqzsWNWTvpM5o',
  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oqr2p5hPfmjeRvn1ZO5C9OofR9mE',
    }
  ],

}

module.exports = USER_CONFIG
