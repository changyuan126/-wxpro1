// 同时发送异步代码的次数
var ajaxTimes = 0;
export var request=(params)=>{
    //定义接口路径
   //var baseurl = "https://api.zbztb.cn/api/public/v1";
  var baseurl = "https://localhost:8443/com.ygct.cics.app.gateway/baoerApp.action";
    ajaxTimes++;
    // 显示加载中 效果
    wx.showLoading({
      title: "加载中",
      mask: true
    });
   //Promise定义
   /*return new Promise((resolve,reject)=>{
        wx.request({
            ...params,
            url: baseurl+params.url,
          success: function (result){
                resolve(result.data.message);
            },
            fail: function(err) {
                reject(err);
            },
            complete: function() {
                 ajaxTimes--;
                if(ajaxTimes===0){
                  //  关闭正在等待的图标
                  wx.hideLoading();
                }
            }
        });
   });*/

  return new Promise(function(resolve, reject){
    wx.request({
      ...params,
      url: baseurl + params.url,
      header: { 'content-type': 'application/x-www-form-urlencoded' },//需特殊指定，否则servlet中无法获取data中的值
      success: function (result) {
        //resolve(result.data.message);
        resolve(result.data);
      },
      fail: function (err) {
        reject(err);
      },
      complete: function () {
        ajaxTimes--;
        if (ajaxTimes === 0) {
          //  关闭正在等待的图标
          wx.hideLoading();
        }
      }
    });
  });
}