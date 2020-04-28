//index.js
//获取应用实例
const app = getApp()

Page({
  //相当于vue中的data,存放页面内部的数据
  data: {
    typeInfo:'',
    userdata:{},
    isShow:true,
    c:'#0f0',
    motto: 'Hello 微信小程序',
    title:'小程序第一天学习',
    arr:['vue','react','Flutter'],
    users:[
      { id:1001,name:'姚杰',age:20,work:'前端开发' },
      { id:1002,name:'盖威',age:20,work:'java' },
      { id:1003,name:'王迪',age:20,work:'UI' },
      { id:1004,name:'苏宇浩1',age:20,work:'PHP' },
      { id:1004,name:'苏宇浩2',age:20,work:'PHP' },
      { id:1004,name:'苏宇浩3',age:20,work:'PHP' },
      { id:1004,name:'苏宇浩4',age:20,work:'PHP' },
      { id:1004,name:'苏宇浩5',age:20,work:'PHP' },
      { id:1004,name:'苏宇浩6',age:20,work:'PHP' },
      { id:1004,name:'苏宇浩7',age:20,work:'PHP' },
      { id:1004,name:'苏宇浩8',age:20,work:'PHP' },
    ],
    goodsNav:[
      { id: 1001, title: '京东电器', url:'/pages/goods/goods?title=京东电器'},
      { id: 1002, title: '京东数码', url:'/pages/goods/goods?title=京东数码'},
      { id: 1003, title: '京东服饰', url:'/pages/goods/goods?title=京东服饰'},
      { id: 1004, title: '京东生鲜', url:'/pages/goods/goods?title=京东生鲜'},
      { id: 1005, title: '京东到家', url:'/pages/goods/goods?title=京东到家'},
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
  onLoad() {
    console.log('页面onload')
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
  onReady() {
    console.log('index-onReady')
    //获取组件id
    this.dialog = this.selectComponent('#dialog');
  },
  onShow() {
    console.log('index-onShow')
  },
  onHide() {
    console.log('index-onHide')
  },
  onUnload() {
    console.log('index-onUnload')
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
      users: this.data.users, //简单粗爆
    })

    console.log('删除后：',this.data.users)
  },
  add(e) {
    console.log('添加的值：',e)
  },
  modi(e) {
    let { idx } = e.currentTarget.dataset;//ES6解构赋值的写法
    let title="ok"

   // this.data.users[idx].name = this.data.users[idx].name+title;
   //let tempItem='users['+idx+'].name'
   let tempItem=`users[${idx}].name`;

    this.setData({
     // [tempItem]: this.data.users[idx].name+title
     'users[2].name':'王迪哈哈'
    });

  },
  topFn(e) {
    console.log('已经到顶部：',e)
  },
  bottomFn(e) {
    console.log('已经到底部：', e)
  },
  getUser(e) {
    console.log('获取用户信息：',e)
    this.setData({
      userdata:e.detail.userInfo
    });
  },
  getphone(e) {
    console.log('用户手机号信息：',e);
  },
  //打开弹框
  openDialog() {

    //console.log(this.dialog.data.isShow);
    this.dialog.toggle();

  },
  //监听并接收dialog传递过来的数据
  getConfirmFn(e) {
    let str=e.detail.typeInfo
   
    this.setData({
      typeInfo: str
    })

  },
  parentBox() {

    console.log('触发了parentBox')
  }
})
