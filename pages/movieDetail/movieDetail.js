const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {
        baseURL3:app.globalData.baseURL3,
        select:[true,false,false],
        //判断展开和收起
        isF: true
    },
  	// 页面加载
	onLoad: function (options) {
        let id = options.id;
        console.log("传过来的id",id);
		let labelUrl = "https://m.douban.com/rexxar/api/v2/movie/"+id+"/tags?count=8";
        this.getMovieData(id);
        this.getCommentData(id);
        this.getMovieTagData(id);
    },
        //影片详细数据
       getMovieData(id){
        wx.request({
			url: this.data.baseURL3+'/rexxar/api/v2/movie/'+id,
			method:"GET",
			success:res=>{
                console.log("影片详细数据",res.data);
				this.setData({
                    movieDataList:res.data
                })
			}
		})
       },
    //    得到评论的数据
    getCommentData(id){
        // 请求评论数据
		wx.request({
			url: this.data.baseURL3+'/rexxar/api/v2/movie/'+id+"/interests",
			method:"GET",
			success:(res) => {
                console.log(res.data);
				this.setData({
                    commentDataList:res.data.interests,
				})
			}
		})
    },
    // 请求影片标签数据
    getMovieTagData(id){
		wx.request({
			url: this.data.baseURL3+'/rexxar/api/v2/movie/'+id+"/tags?count=8",
			method:"GET",
			success:(res) => {
				this.setData({
					labelData:res.data.tags
				})
			}
		})
    },
     // 获取滚动条当前位置
     onPageScroll: function (e) {
        // console.log(e)
        if (e.scrollTop > 300) {
            this.setData({
                go_top_show: true
            })
        } else {
            this.setData({
                go_top_show: false
            })
        }
    },
    // 回到顶部
    goTop: function (e) {
        if (wx.pageScrollTo) {
            wx.pageScrollTo({
                scrollTop: 0
            })
        } else {
            wx.showModal({
                title: '提示',
                content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
            })
        }
    },
    // 导航栏选择函数
    toJianJie(){
        this.setData({
            select:[true,false,false]
        })
    },
    toYinPin(){
        this.setData({
            select:[false,true,false]
        })
    },
    toGengDuo(){
        this.setData({
            select:[false,false,true]
        })
    },
    //展开与显示的判断函数
    aa: function() {
        this.setData({
          isF: !this.data.isF
        })
      }
})