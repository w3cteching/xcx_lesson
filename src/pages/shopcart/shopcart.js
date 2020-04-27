const urls = require('../../api/urls.js');



Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieArr: [],
    loading: true,
    resultArr: []
  },
  onLoad() {
    this.ctx = wx.createCameraContext()
  },
  takePhoto() {
    this.ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  startRecord() {
    this.ctx.startRecord({
      success: (res) => {
        console.log('startRecord')
      }
    })
  },
  stopRecord() {
    this.ctx.stopRecord({
      success: (res) => {
        this.setData({
          src: res.tempThumbPath,
          videoSrc: res.tempVideoPath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  getData() {
    let {
      loading
    } = this.data;
    if (loading) {
      wx.showLoading()
    }

    wx.request({

      //请求接口地址
      url: urls.movie250,

      //请求方式
      method: "GET",

      //设置向后台传递的参数
      data: {
        start: 2,
        count: 10
      },

      //设置请求头
      header: {
        'content-type': 'application/text'
      },

      //请求成功时执行
      success: res => {

        console.log('res:', res);
        if (res.statusCode === 200) {
          this.setData({
            movieArr: res.data.subjects,
            loading: false
          });

          if (!this.data.loading) {
            wx.hideLoading();
          }


        }
      },

      //请求接口有误时，执行
      fail(error) {
        console.log('请求失败，请检查', error)
      },

      //无论请求成功与失败，都会执行
      complete() {
        console.log('请求完成')
      }
    })

  },
  //获取线上json
  getJSON() {

    wx.request({
      url: 'http://127.0.0.1:9999/list.json',
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        console.log('json11111:', res)

      }
    })

  },

  //测试mock数据请求
  getMockData() {
    console.log(11111)
    wx.request({
      url: 'https://www.1906A.com/api/goodslist',
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        console.log('mock返回的数据', res);

        this.setData({
          resultArr: res.result
        });
      }
    })

  }
})