
//获取app.js实例
const app = getApp();

let { movie250 } = require('../../api/urls.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    page: 1,  //默认第1页开始
    count: 5, //默认每页显示5条
    flag: true,
    width:500,
    height:800, 
  },
  onLoad() {
    this.getMovieList();
  },
  //获取电影列表
  getMovieList() {

    //获取系统信息
    wx.getSystemInfo({

      success: (res)=>{
        console.log(res)
        this.setData({
          height:res.windowHeight
        });
      },
    })


    /**
     * 分页原理：
     * page（页码） start(下标) count（每页显示的条数）
     *   1             0          5
     *   2             5          5
     *   3             10         5
     *   4             15         5
     * 
     * start=(page-1)*count
     */


    //进入获取列表函数直接将flag置为false
    this.setData({ flag: false })


    //进入先显示loading
    wx.showLoading({
      // title: '正在玩命加载中',
    })

    let { page, count, list } = this.data;

    //请求数据
    wx.request({
      url: movie250,
      header: {
        'content-type': 'application/text'
      },
      data: {
        start: (page - 1) * count,
        count

      },
      success: (res) => {
        console.log(res)

        if (res.statusCode === 200) {
          page++;

          //将获取的数据条数与数组原来的合并
          list = list.concat(res.data.subjects);
          this.setData({
            list: list,
            page,
            flag: true
          });

          //加载成功隐藏loading
          wx.hideLoading()
        }
      }

    })

  },
  //实现上拉触底加载更多
  // onReachBottom() {
  //   //如何防止多次请求，主要思想：设置状态标志
  //   if (this.data.flag) {
  //     this.getMovieList();
  //   }
  // }

  lower() {
    console.log('上拉加载')
    //如何防止多次请求，主要思想：设置状态标志
    if (this.data.flag) {
      this.getMovieList();
    }
  }

})