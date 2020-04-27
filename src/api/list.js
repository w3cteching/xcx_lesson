var Mock = require("../utils/WxMock.js");

let dataObj = {
  "status": 0,
  "err_msg": "ok",
  "result|10": [

    {
      id: function () {
        return Mock.Random.id();
      },
      title: function () {
        return Mock.Random.ctitle();
      },
      cid: function () {
        return Mock.Random.increment();
      },
      "price|1000-2000": 1,
      "old_price|2000-3000": 1,
      "pic": function () {
        return Mock.Random.image('200x100', '#0000FF', 'image');
      },
      "s_pic": function () {

        return Mock.Random.image('150x70', '#ff0000', 's_pic')
      },
      "pub_date": function () {
        return Mock.Random.datetime('yyyy-MM-dd')
      },
      "address": function () {

        return Mock.Random.county(true)

      },
      "url": function () {

        return Mock.Random.url();
      },
      "email": function () {
        return Mock.Random.email()
      },
      "desc": function () {
        return Mock.Random.cparagraph()
      }
    }

  ]

}


let url = 'https://www.1906A.com/api/goodslist'


/**
 * Mock.mock（）说明
 * url：代表要请求的数据接口
 * dataObj:代表请求的模拟数据
 */
Mock.mock(url, dataObj)

module.exports={
  Mock
}