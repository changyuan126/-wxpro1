// pages/demo2/demo2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    person: {
      name: "张三",
      age: 21,
      weight: 118
    },
    list:[
      {
        id:1,
        name:"一年级"
      },
      {
        id: 2,
        name: "二年级"
      },
      {
        id: 3,
        name: "三年级"
      }
    ],
    arrayList:["张三","李四","王明"],
    list2:[
        {
          id: 1,
          name: "一年级",
          chirds: [
              {
                name: "小明",
                age: 8,
                weight: 40
              },
              {
                name: "小华",
                age: 9,
                weight: 60
              }
            ]
        },
        {
          id: 2,
          name: "二年级",
          chirds: [
            {
              name: "小花",
              age: 10,
              weight: 40
            },
            {
              name: "花花",
              age: 10,
              weight: 60
            }
          ]
        }
      ]
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