export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx2c1a3070ca20bcc8",
    // 公众号appSecret
    appSecret: "a5753f985fa801c3ba71a2c3fc913b6d",
    // 模板消息id
    templateId: "yALATfZf-1NAtOr9ct7vX-9Y__uarPfdGLCnzMKJoGE",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: [oHvrW5qkbkS7EknLOGRdWwfJuDsQ],
     
    // 信息配置
    // 所在省份
    province: "江苏",
    // 所在城市
    city: "南京",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "小馨", "year": "2000", "date": "11-11", "type": 'new'},

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
