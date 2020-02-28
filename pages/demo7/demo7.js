// pages/demo7/demo7.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      {
        id: 0,
        name: "首页",
        isActive: true
      },
      {
        id: 1,
        name: "原创",
        isActive: false
      },
      {
        id: 2,
        name: "分类",
        isActive: false
      },
      {
        id: 3,
        name: "关于",
        isActive: false
      }
    ]
  },

//自定义事件，接收子组件传递的数据
  handleItemChange:function(e){
      var index = e.detail;
      var tabs = this.data.tabs;
      //var {tabs} = this.data;
      //copy数组
      //var tabs = JSON.parse(JSON.stringify(this.data.tabs));

      //循环
      tabs.forEach((v,i)=>i==index?v.isActive=true:v.isActive=false);
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
      this.setData({
        tabs
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //发送异步请求，初始化页面数据
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    //数据刷新，重置
  },

  /**
   * 页面上拉触底事件的处理函数(需要页面出现滚动条才会触发)
   */
  onReachBottom: function () {
    //上拉 下一页时（分页） 可使用
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})