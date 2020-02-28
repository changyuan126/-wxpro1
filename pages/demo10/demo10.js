// pages/demo10/demo10.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     account :"",
     password:"",
     message : ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //账号change事件
  accountInput:function(e){
    var account = e.detail.value;
    this.setData({
      account
    });
  },

//密码离开事件
  pwdBlur: function (e) {
    var password = e.detail.value;
    this.setData({
      password
    });
  },

//登录事件
  login:function(e){
    if (this.data.account == "") {
      var message = "用户名不能为空";
      this.setData({
        message
      });
      return;
    }
    if (this.data.password == "") {
      var message = "密码不能为空";
      this.setData({
        message
      });
      return;
    }
      if(this.data.account!="admin"){
        wx.showToast({ title: '用户名不存在' });
        return;
      }
    if (this.data.password != "123456") {
       wx.showToast({ title: '密码错误' });
       return;
     }
      wx.showToast({ title: '登录成功' });
  }
})