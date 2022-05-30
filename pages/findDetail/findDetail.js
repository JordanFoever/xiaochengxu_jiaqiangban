const app = getApp();
Page({
    data: {
        // 本地主机的地址
        baseURL2:app.globalData.baseURL2,
        //远程服务器地址
        pinLunList:[],
        pinlunNum:0
    },
    onLoad(options) {
        
        // 获取发现页面传过来的id
        let aid = options.id;
        this.getRequest(aid);
        this.getRequestForPinLun(aid);
    },
    // 向后端发送请求,获取当前id的数据(顶部)
    getRequest(aid){
        wx.request({
          url: this.data.baseURL2+'/xiaoChengXu_ks_houtai/fillAllFindById?id='+aid,
          method:'get',
          success:res=>{
              console.log("来自后端的返回的数据",res.data);
              this.setData({
                //将返回来的数据放在一个对象中  
                comFindList:res.data 
              })
          }
        })
    },
    // 评论部分的的请求
    getRequestForPinLun(aid){
        wx.request({
          url: this.data.baseURL2+'/xiaoChengXu_ks_houtai/findAllNeedPinLun?id='+aid,
          method:'get',
          success:res=>{
              console.log("返回评论部分的数据",res.data);
              this.setData({
                //将返回来的数据放在一个评论对象中 
                    pinLunList:res.data 
              })
              this.getCommentNumber();
          },
        })
    },
    // 记录评论的数量
    getCommentNumber(){
        this.setData({
            pinlunNum:this.data.pinLunList.length
        })
    },
    // 发送评论
    sendPinLun(e){
        // console.log("das",e.currentTarget.dataset.index);
        let id = e.currentTarget.dataset.index;
        wx.redirectTo({
          url: '/pages/sendPinLun/sendPinLun?id='+id,
        })
        // wx.navigateTo({
        //   url: '/pages/sendPinLun/sendPinLun?id='+id,
        // })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})