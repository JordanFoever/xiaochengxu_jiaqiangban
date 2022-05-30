const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
         // 下拉菜单
         first: '价格',
         second: '地点',
         thirds: '距离',
         fours: '综合',
         _num: 0,
         _res: 0,
 
         // 筛选
         array: [{
             name: '较低'
         }, {
             name: '一般'
         }, {
             name: '中等'
         }, {
             name: '较高'
         }],
         chaoxiang: [{
             name: '1km以内'
         }, {
             name: '2km以内'
         }, {
             name: '10km以内'
         }, {
             name: '大于10km'
         }],
         louceng: [{
             name: '无优惠'
         }, {
             name: '低优惠'
         }, {
             name: '中优惠'
         }, {
             name: '高优惠'
         }],
         zhuangxiu: [{
             name: '一线城市'
         }, {
             name: '二线城市'
         }, {
             name: '三线城市'
         }, {
             name: '其它'
         }],
         leibei: [{
             name: '评价较好'
         }, {
             name: '差评多'
         }, {
             name: '评价一般'
         }, {
             name: '评价较好'
         }],
         tese: [{
             name: '1天以内'
         }, {
             name: '5天以内'
         }, {
             name: '10天以内'
         }, {
             name: '其它'
         }],
         one: 0,
         two: 0,
         third: 0,
         four: 0,
         five: 0,
         six: 0,
         seven: 0,
         baseURL2:app.globalData.baseURL2,
         moiveList:[]
    },
    isShow: true,
    currentTab: 0,
       /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getAllMoive();
       
    },
    getAllMoive(){
        wx.request({
          url: this.data.baseURL2+'/xiaoChengXu_ks_houtai/findAllMoive',
          method:'GET',
          success:res=>{
              console.log(res.data);
              this.setData({
                  moiveList:res.data,
              })
            //   this.getSelectItem();
          }
        })
        
    },
    getSelectItem(){
        // let tempArray = []
        // tempArray = this.data.moiveList;
        // console.log(this.data.moiveList.length);
        let  onlyselctList = []
        console.log(this.data.moiveList.length);
        for (let index = 0; index < this.data.moiveList.length; index++) {
            onlyselctList[index] = (this.data.moiveList[index].selectItem); 
        }
        this.setData({
            mySelctList:onlyselctList
        })
        this.aa(); 
    },
    aa(){
        console.log((this.data.mySelctList[0]+'').length);

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            
        }
    },
     // 下拉切换
     hideNav: function () {
        this.setData({
            displays: "none"
        })
    },
    // 区域
    tabNav: function (e) {
        this.setData({
            displays: "block"
        })
        this.setData({
            selected1: false,
            selected2: false,
            selected: true
        })
        if (this.data.currentTab === e.target.dataset.current) {
            return false;
        } else {

            var showMode = e.target.dataset.current == 0;

            this.setData({
                currentTab: e.target.dataset.current,
                isShow: showMode
            })
        }
    },
    // 下拉切换中的切换
    // 区域
    selected: function (e) {
        this.setData({
            selected1: false,
            selected2: false,
            selected: true
        })
    },
    selected1: function (e) {
        this.setData({
            selected: false,
            selected2: false,
            selected1: true
        })
    },
    selected2: function (e) {
        this.setData({
            selected: false,
            selected1: false,
            selected2: true
        })
    },
    // 下拉菜单1 2 3 4
    // 区域
    clickSum: function (e) {
        console.log(e.target.dataset.num)
        this.setData({
            _sum: e.target.dataset.num
        })
        this.setData({
            first: e.target.dataset.name
        })
        this.setData({
            displays: "none"
        })
        var text = this.data.name
        console.log(text)
    },
    clickMum: function (e) {
        console.log(e.target.dataset.num)
        this.setData({
            _mum: e.target.dataset.num
        })
        this.setData({
            displays: "none"
        })
        var text = this.data.name
        console.log(text)
    },
    clickCum: function (e) {
        console.log(e.target.dataset.num)
        this.setData({
            _cum: e.target.dataset.num
        })
        this.setData({
            displays: "none"
        })
        var text = this.data.name
        console.log(text)
    },
    clickNum: function (e) {
        console.log(e.target.dataset.num)
        this.setData({
            _num: e.target.dataset.num
        })
        this.setData({
            second: e.target.dataset.name
        })
        this.setData({
            displays: "none"
        })
        var text = this.data.name
        console.log(text)
    },
    // 房型
    clickHouse: function (e) {
        console.log(e.target.dataset.num)
        this.setData({
            _res: e.target.dataset.num
        })
        this.setData({
            thirds: e.target.dataset.name
        })
        this.setData({
            displays: "none"
        })
    },
    // 筛选
    choseTxtColor: function (e) {
        var id = e.currentTarget.dataset.id; //获取自定义的ID值 
        console.log(e.currentTarget.dataset.id)
        this.setData({
            one: id
        })
    },
    chaoxiang: function (e) {
        var id = e.currentTarget.dataset.id; //获取自定义的ID值 
        this.setData({
            two: id
        })
    },
    louceng: function (e) {
        var id = e.currentTarget.dataset.id; //获取自定义的ID值 
        this.setData({
            third: id
        })
    },
    zhuangxiu: function (e) {
        var id = e.currentTarget.dataset.id; //获取自定义的ID值 
        this.setData({
            four: id
        })
    },
    leibei: function (e) {
        var id = e.currentTarget.dataset.id; //获取自定义的ID值 
        this.setData({
            five: id
        })
    },
    tese: function (e) {
        var id = e.currentTarget.dataset.id; //获取自定义的ID值 
        this.setData({
            six: id
        })
    },
    paixu: function (e) {
        var id = e.currentTarget.dataset.id; //获取自定义的ID值 
        this.setData({
            seven: id
        })
    }
})