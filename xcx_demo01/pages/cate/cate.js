
//获取app.js实例
const app=getApp();

console.log('app::::',app);


Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex:0,
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

  


  }

})