// pages/demo3/demo3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     num:0,
     gender:"",
     ckList:[
       {id:1, name:'苹果',value:'apple'},
       { id: 1, name: '香蕉', value: 'grape' },
       { id: 1, name: '香蕉', value: 'bananer' }
       ],
     checkedList:[]
  },

//input 输入事件
  handleInput:function(e){
    //console.log(e);
    console.log(e.currentTarget.dataset.item + '----' + e.currentTarget.dataset.num);
    //设置data的num值
    //this.data.num=0;
    var num = e.detail.value;
    this.setData({
      //num:e.detail.value
      num
    });
  },

  //加减事件 
  handleTap:function(e){
    this.setData({
      num: parseInt(this.data.num) + e.currentTarget.dataset.operaction
    });
  },

//radio 选择事件
  handleChange:function(e){
    var gender = e.detail.value;
    //设置data的gender值
    this.setData({
      //gender: gender
      gender
    });
  },

//checkbox事件
  handleCkChange:function(e){
    var checkedList = e.detail.value;
    //设置data的checkedList值
    this.setData({
      checkedList
    });
  },

  getPhoneNumber:function(e){
    console.log(e);
  },

  getUserInfo:function(e){
      console.log(e);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})