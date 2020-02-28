// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表(存放 要从父组件中接收的数据)
   */
  properties: {
    //要接收的数据名称
    aaa:{
      type:String,
      value:""
    },
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //item点击事件
    handleItemTap:function(e){
      var index = e.currentTarget.dataset.index;
      //var { index } = e.currentTarget.dataset;
      //触发父组件的自定义事件，同时传递参数,itemChange事件 需要在父组件的标签上定义
      this.triggerEvent("itemChange",index);

      //var tabs = this.data.tabs;
      //var {tabs} = this.data;
      //copy数组
      //var tabs = JSON.parse(JSON.stringify(this.data.tabs));

      //循环
      //tabs.forEach((v,i)=>i==index?v.isActive=true:v.isActive=false);
      /*tabs.forEach(function(v,i){
        i == index ? v.isActive = true : v.isActive = false;
      });*/
      /*for(var i=0;i<tabs.length;i++){
        var obj = tabs[i];
        if(i==index){
          obj.isActive=true;
        } else {
          obj.isActive = false;
        }
      }*/
      //赋值
      /*this.setData({
        tabs
      })*/
    }
  }
})
