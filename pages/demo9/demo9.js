import { request } from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //定义商品列表
    goodsList: []
  },

/**
 * 查询条件
 */
  queryParams:{
      query:"",
      cid:"5",
      pagenum:1,
      pagesize:10
  },

  //总页数
  totalPage:1,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.queryGoodList();
  },
   
   //查询商品
   async queryGoodList(){
     var res = await request({ url: '/goods/search', data: this.queryParams});
     //计算总页数
     var total = res.total;
     this.totalPage = Math.ceil(total / this.queryParams.pagesize);
     //设置值
      this.setData({
         // 拼接了数组
        goodsList:[...this.data.goodsList, ...res.goods]
      });
     // 关闭下拉刷新的窗口 如果没有调用下拉刷新的窗口 直接关闭也不会报错  
     wx.stopPullDownRefresh();
   },

   // 页面上滑 滚动条触底事件
  onReachBottom:function(){
      //  1 判断还有没有下一页数据
    if (this.queryParams.pagenum >= this.totalPage){
        // 没有下一页数据
        wx.showToast({ title: '没有下一页数据' });
      } else {
          // 还有下一页数据
        this.queryParams.pagenum++;
        this.queryGoodList();
      }
  },

  // 下拉刷新事件 
  onPullDownRefresh:function(){
      // 1 重置数组
      this.setData({
        goodsList: []
      });
      // 2 重置页码
      this.queryParams.pagenum = 1;
      // 3 发送请求
      this.queryGoodList();
  },

  handlePrevewImage:function(e){
    var url = e.currentTarget.dataset.url;
    wx.previewImage({
      current: url, // 当前显示图片的http链接
      urls: [url] // 需要预览的图片http链接列表
    });
  }
})