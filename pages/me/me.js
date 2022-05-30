Page({

	// 页面的初始数据
	data: {
		modelList:[
			{
				text:"电影票",
				icon:"/images/me/model1.png"
			},
			{
				text:"演出票",
				icon:"/images/me/model2.png"
			},
			{
				text:"优惠卷",
				icon:"/images/me/model3.png"
			},
			{
				text:"影城卡",
				icon:"/images/me/model4.png"
			}
		],
		funList:[
			["我的会员"],
			["想看的电影","看过的电影"],
			["帮助中心-咨询票小蜜","设置"],
			["银行卡特惠"],
		]
	},
    getUserInfo(e){
        console.log(e);
        //取缓存中的用户信息
        let value =  wx.getStorageSync('userInfo');
        if(value){
            this.setData({
                userInfo:value
            })
        }else{
            wx.getUserProfile({
              desc: '用于注册',
              success:res=>{
                  console.log(res);
                //   将userInfo的数据存入缓存中
                wx.setStorage({
                    data:res.userInfo,
                    key:'userInfo'
                }),
                this.setData({
                    userInfo:res.userInfo
                })
              }
            })
        }
    },
})

