const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        baseURL2: app.globalData.baseURL2,
        moiveList: [],
        paixusheng:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getAllMoive();

    },
    getAllMoive() {
        wx.request({
            url: this.data.baseURL2+ '/xiaoChengXu_ks_houtai/findAllMoive',
            method: 'GET',
            success: res => {
                console.log(res.data);
                this.setData({
                    moiveList: res.data,
                })
                // this.paixu();

            }
        })

    },
    // 对数组中的元素进行排序
    // 从大到小
    paixu() {
        var a = []

        for (var index = 0; index < this.data.moiveList.length; index++) {
            a[index] = this.data.moiveList[index].price;
        }

        var b = 0 //设置用来调换位置的值
        for (var i = 0; i < a.length; i++) {

            for (var j = 0; j < a.length; j++) {
                if (a[j] > a[j + 1]) {
                    b = a[j]
                    a[j] = a[j + 1]
                    a[j + 1] = b
                }
            }
        }
        this.setData({
            paixusheng:a
        })

    },
    paixu1() {
        var a = []

        for (var index = 0; index < this.data.moiveList.length; index++) {
            a[index] = this.data.moiveList[index].price;
        }

        var b = 0 //设置用来调换位置的值
        for (var i = 0; i < a.length; i++) {

            for (var j = 0; j < a.length; j++) {
                if (a[j]<a[j+1]) {
                    b = a[j]
                    a[j] = a[j + 1]
                    a[j + 1] = b
                }
            }
        }
        this.setData({
            paixusheng:a
        })

    },
    getSelectItem() {
        // let tempArray = []
        // tempArray = this.data.moiveList;
        // console.log(this.data.moiveList.length);
        let onlyselctList = []
        console.log(this.data.moiveList.length);
        for (let index = 0; index < this.data.moiveList.length; index++) {
            onlyselctList[index] = (this.data.moiveList[index].selectItem);
        }
        this.setData({
            mySelctList: onlyselctList
        })
        this.aa();
    },
    aa() {
        console.log((this.data.mySelctList[0] + '').length);

        for (let index = 0; index < array.length; index++) {
            const element = array[index];

        }
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