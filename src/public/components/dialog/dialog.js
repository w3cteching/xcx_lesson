// public/components/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

     title:{
       value:'标题内容',
       type:String
     },
     content:{
       value:'弹框内容',
       type:String
     }


  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggle() {
      console.log('toggle',this.data.isShow)
      
      this.setData({
        isShow:!this.data.isShow
      });
    },

    //确定方法
    confirm(e) {
      console.log('你点击了确定按钮')
      this.toggle()
    },

    //取消方法
    cancel() {
      console.log('你点击了取消按钮')
      this.toggle()
    }
  }
})
