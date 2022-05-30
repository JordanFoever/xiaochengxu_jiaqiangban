// index.js
Page({
    data:{
        baseImg:"http://localhost:8081/JavaWebDemo_war_exploded/picture/9-2.jpg",
        baseImg1:"http://localhost:8081/JavaWebDemo_war_exploded"
    },
    onLoad(){
        wx.request({
          // url: 'http://localhost:8081/JavaWebDemo_war_exploded/goodsListJson',
          url:'https://sc.appvipshop.com/vips-mobile-tracker/router.do',
          method:'get',
          success:res=>{
              console.log(res.data);
              this.setData({
                list:res.data
              })
          }
        })
    }
})
