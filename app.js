//app.js
App({
  //应用序第一次启动时候 调用
  onLaunch: function () {
    // 应用序第一次启动时候，获取个人信息
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  
  //应用被用户看到时 调用
  onShow:function(){
    //对应用页面数据或效果 进行重置
    console.log('onshow');
  },

//应用被隐藏时调用
  onHide: function () {
    //暂停或清除定时器
    console.log('onHide');
  },

  //应用代码发生错误时 调用
  onError:function(err){
    //收集用户错误信息，通过异步请求，将错误信息发送到后台
    console.log('onError');
  },
  
  //页面不存在报错时 调用(应用第一次 到不到入口界面时候 触发)
  onPageNotFound:function(){
    //当入口页面不存在时，通过js重新跳转到第二个首页中
    wx.navigateTo({
      url: ''
    })
    console.log('onPageNotFound');
  },
  globalData: {
    userInfo: null
  }
})