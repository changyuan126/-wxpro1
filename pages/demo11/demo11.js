import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';
import { login } from "../../utils/asyncWx.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 获取用户信息
  async handleGetUserInfo(e) {
    try {
      // 1 获取用户信息
      const { encryptedData, rawData, iv, signature } = e.detail;
      // 2 获取小程序登录成功后的code
      const { code } = await login();
      console.log(encryptedData);
      var encryValue = { 'encryptedData': encryptedData, 'iv': iv, 'code': code};
      var encryValueStr = JSON.stringify(encryValue);
      //处理url传参，参数含有+号情况，经过servlet接收后 +号丢失变成空格
      //encryValueStr = encryValueStr.replace(/\+/g, "%2B");
      //  3 发送请求 获取用户的token
      //var url = '?COMMAND=11003&ASYNC=0&r=' + Math.random() + '&encryValue=' + encryValueStr;
      //const {returnValue} = await request({ url: url, method: "post" });
      var params = { COMMAND: 11003, ASYNC: 0, r: Math.random(), encryValue: encryValueStr};
      const { returnValue } = await request({ url: "", data: params, method: "post" });
      // 4 把token存入缓存中 同时跳转回上一个页面
      wx.setStorageSync("token", returnValue);
      console.log(returnValue);
    } catch (error) {
      console.log(error);
    }
  }
})