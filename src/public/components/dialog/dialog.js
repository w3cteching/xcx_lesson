// public/components/dialog/dialog.js
Component({

  options:{
   multipleSlots: true,  //开启多slot
// styleIsolation: 'apply-shared', //是否开启样式穿透

  },
  externalClasses: ['my-bg'],  //指定使用外部样式类


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
    isShow:false,
    str:'来自弹框的数据'
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
      //console.log('你点击了确定按钮')

     // this.triggerEvent('要派发的事件名','要传递的数据');  //类似于vue中的this.$emit()
      //子向父通过confirm事件传递数据
      this.triggerEvent('confirm', { typeInfo: this.data.str,hello:'world'});

      this.toggle()
    },

    //取消方法
    cancel() {
      console.log('你点击了取消按钮')
      this.toggle()
    },
    //通过事件冒泡的方式，在父级监听事件（也称事件代理，或事件委托）
    tapFn(e) {
 
      let type=e.target.dataset.type;

      console.log(type)

      if(type==="confirm") {

        this.triggerEvent('confirm', { typeInfo: this.data.str, hello: 'world' },{ bubbles:true });

        this.toggle()
      }else if(type==='cancel') {

        console.log('你点击了取消按钮')
        this.toggle()

      }
    }
  }
})
