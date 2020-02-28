import {request} from "../../request/index.js";
import regeneratorRuntime from '../../lib/runtime/runtime';

Page({
  /**
   * 页面的初始数据
   */
  data: {
      imageList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取缓存数据
    var storImageList = wx.getStorageSync("imagelist");
    if (storImageList){
      //不为空 
      console.log('storImageList is not null');
      if (Date.now() - storImageList.time>1000*20){
        console.log('缓存已过期');
        this.getImageList();
      } else {
        console.log('使用旧数据');
        var imageList = storImageList.data;
        this.setData({
          imageList
        });
      }
    } else {
      //为空
      console.log('storImageList is null');
      this.getImageList();
    }
    this.getImageList2();
    this.getImageList3();
  },

//获取接口数据
  getImageList:function(){
    var that = this;
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success(res) {
        var imageList = res.data.message;
        console.log(imageList);
        wx.setStorageSync("imagelist", { time: Date.now(), data: imageList});
        that.setData({
          imageList
        });
      },
      fail(err) {
        console.log(err)
      },
      complete() {
        console.log('complete')
      }
    });

    /*wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success:(res) => {
        var imageList = res.data.message;
        console.log(imageList);
         this.setData({
          imageList
        });
      }, 
      fail: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      }
    });*/

    /*
      es6语法 与 function的区别
      1.箭头函数与function定义函数的写法
      //function
        function fn(a, b){
          return a + b;
        }
        //arrow function
        var foo = (a, b)=>{ return a + b };

        2、使用function定义的函数中this指向是随着调用环境的变化而变化的；明显使用箭头函数的时候，this的指向是没有发生变化的。
        //使用function定义的函数
        function foo(){
          console.log(this);
        }
        var obj = { aa: foo };
        foo(); //Window
        obj.aa() //obj { aa: foo }

        //使用箭头函数定义函数
        var foo = () => { console.log(this) };
        var obj = { aa:foo };
        foo(); //Window
        obj.aa(); //Window

        3、function是可以定义构造函数的，而箭头函数是不行的。
        //使用function方法定义构造函数
          function Person(name, age){
            this.name = name;
            this.age = age;
          }
          var lenhart =  new Person(lenhart, 25);
          console.log(lenhart); //{name: 'lenhart', age: 25}

          //尝试使用箭头函数
          var Person = (name, age) =>{
            this.name = name;
            this.age = age;
          };
          var lenhart = new Person('lenhart', 25); //Uncaught TypeError: Person is not a constructor

        4、function的级别最高，故箭头函数一定要定义于调用之前。
            foo(); //123
            function foo(){
              console.log('123');
            }

            arrowFn(); //Uncaught TypeError: arrowFn is not a function
            var arrowFn = () => {
              console.log('456');
            };
    */    
  },

  //Promise使用
  getImageList2:function(){
    request({ url: '/home/swiperdata'}).then(res=>{
        var imageList = res;
      console.log('Promise');
      console.log(imageList);
     });

    request({ url: '/home/swiperdata'}).then(function(result){
      var imageList = result;
      console.log('Promise2');
      console.log(imageList);
    });
  },

  /**
   * Promise,runtime（es7 的esync）使用
   * 1 、使用runtime 函数定义不能 getImageList2:function()格式
   * 2、引入时不能带js后缀
   */
  async getImageList3 () {
    var result = await request({url: '/home/swiperdata'});
    console.log('-------runtime-------');
    console.log(result);
  }
})