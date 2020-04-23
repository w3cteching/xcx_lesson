//index.js
//获取应用实例
const app = getApp()

Page({
  //相当于vue中的data,存放页面内部的数据
  data: {
    motto: 'Hello 微信小程序',
    title:'小程序第一天学习',
    arr:['vue','react','Flutter'],
    users:[
      { id:1001,name:'姚杰',age:20,work:'前端开发' },
      { id:1002,name:'盖威',age:20,work:'java' },
      { id:1003,name:'王迪',age:20,work:'UI' },
      { id:1004,name:'苏宇浩',age:20,work:'PHP' },
    ],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  delete(e) {
  //  console.log('删除',e)
    let { idx }=e.currentTarget.dataset;//ES6解构赋值的写法
    console.log('删除前：',this.data.users)

    this.data.users.splice(idx,1);
    this.setData({
      users: this.data.users
    })

    console.log('删除后：',this.data.users)
  },
  add(e) {
    console.log('添加的值：',e)
  }
})
