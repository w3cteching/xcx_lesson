
//获取app.js实例
const app=getApp();

console.log('app::::',app);


Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'分类页面的标题',
    region: ['广东省', '广州市', '海珠区'],
    customItem: '全部',
    array: ['美国', '中国', '巴西', '日本'],
    index:0,
    currentIndex:0,
    selectFruit:[],
    testData: app.shuju.name,
    cateInfo:[
      {id:1001,cname:'服装',content:'服装的内容'},
      { id: 1002, cname: '电子', content:'电子的内容'},
      { id: 1003, cname: '玩具', content:'玩具的内容'},
      { id: 1004, cname: '水果', content:'水果的内容'},
    ]
  },
  fn1() {
    console.log('触发了fn1')
  },
  fn2() {
    console.log('触发了fn2')
  },
  fn3() {
    console.log('触发了fn3')
  },
  //tab切换方法
  changeItem(e) {
    let { index } = e.currentTarget.dataset
    console.log(index);
    this.setData({
      currentIndex:index
    });
  },
  //跳转到列表页
  goToList() {
   let title="动态获取的标题"
   let id=1001;
   wx.navigateTo({
     url: `/pages/list/list?title=${title}&id=${id}`,
   })

    // wx.switchTab({
    //   url: '/pages/shopcart/shopcart',
    // })


  //  wx.reLaunch({
  //    url: `/pages/list/list?title=${title}&id=${id}`,
  //   // url:'/pages/shopcart/shopcart'
  //  })

    // wx.redirectTo({
    //   url: `/pages/list/list?title=${title}&id=${id}`,
    // })

  },
  getValue(e) {
    console.log('选中的信息：',e)
    this.setData({
      selectFruit:e.detail.value
    });
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index:e.detail.value
    })
  },
  //省市区三级联动
  bindRegionChange(e) {
    console.log('省市区三级联动',e)
    this.setData({
      region: e.detail.value
    });
  },
  testswitch(e) {
    console.log(e)
  }

})