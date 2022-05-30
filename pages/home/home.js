const app = getApp();
Page({
    /**
     * 页面的初始数据
     */ 
    data: {
        baseURL3:app.globalData.baseURL3,
        navList:["正在热映","即将上映"],
		select:[true,false],
		imageList:[
			"../../image/1.jpg",
			"../../image/2.jpg",
			"../../image/3.jpg",
			"../../image/4.jpg"
		]
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getRequest();
    },
    // 发送请求
    getRequest(){
        wx.request({
          url: this.data.baseURL3+'/rexxar/api/v2/subject_collection/movie_showing/items',
          method:'GET',
          success:res=>{
             this.setData({
                 homeList:res.data.subject_collection_items
             })
          }
        })
    },
    // 跳转到电影的详情页面
    toDetail(e){
        let id = e.currentTarget.dataset.id;
        wx.navigateTo({
          url: '/pages/movieDetail/movieDetail?id='+id,
        })
    },
    // 切换导航栏时(获取点击时自定义的样式)
    navClick(e){
        let index = e.currentTarget.dataset.index;
        if(index === 0){
            this.setData({
                select:[true,false]
            })
        }else{
            this.setData({
                select:[false,true]
            })
        }
        console.log(index); 
    },
    headleBuy(){
        wx.showModal({
          title:"确定要买票吗",
        //   content:"还有余票",
          cancelColor: 'blue',
          cancelText:"我再想想",
          confirmText:"去购买页",
        //   editable:true,
        //   placeholderText:"请输入年龄",
          success:res=>{
              if(res.confirm){
                    wx.navigateTo({
                        url: '/pages/buy/buy',
                  })
              }        
          }
        })
    }, 
    headleYuShou(){
        wx.showModal({
            title:"预售",
          //   content:"还有余票",
            cancelColor: "red",
            cancelText:"我再想想",
            confirmText:"去预售页面",
          //   editable:true,
          //   placeholderText:"请输入年龄",
            success:res=>{
                if(res.confirm){
                      wx.navigateTo({
                          url: '/pages/buy/buy',
                    })
                }        
            }
          })
    }  
})


