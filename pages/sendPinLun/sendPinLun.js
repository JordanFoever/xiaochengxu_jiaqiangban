const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseURL2: app.globalData.baseURL2,
    commentContent: '',
    //字数限制
    maxWord: 500,
    currentWord: 0
  },
  toDetail() {
    if (this.data.commentContent === "") {
      wx.showToast({
        title: '输入的内容不能为空,请输入内容',
      })
    } else {
      wx.request({
        url: this.data.baseURL2 + `/xiaoChengXu_ks_houtai/addPinLun?textarea_content=${this.data.commentContent}&id=${this.data.id}`,
      })
      wx.redirectTo({
        // url: '/pages/find/find',
        url:"/pages/findDetail/findDetail?id="+this.data.id
      })
      // wx.navigateTo({
      //   // url: '/pages/find/find',
      //   url:"/pages/findDetail/findDetail"
      // })
    
    }
  },
  // 获得输入框的内容
  getInputComment(options) {
    let value = options.detail.value
    console.log("输入框输入的内容是", value);
    //解析字符串长度转换成整数。
    var wordLength = parseInt(value.length);
    if (this.data.maxWord < wordLength) {
      return;
    }
    this.setData({
      currentWord: wordLength,
      commentContent: options.detail.value
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("评论部分的",options);
    this.setData({
      id: options.id
    })
  },

})

