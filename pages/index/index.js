//获取应用实例
var app = getApp()
Page({
    data: {
        show: "",
        duration:'',
        isShow:false,
        typeList: ['success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'],
        isScroll: true,
    },
    onLoad: function () {
    },
    click: function () {
        var that = this;
        var show;
        wx.scanCode({
            success: (res) => {
            this.show = "结果:" + res.result + "二维码类型:" + res.scanType + "字符集:" + res.charSet + "路径:" + res.path;
        that.setData({
            show: this.show
        })
        wx.showToast({
            title: '成功',
            icon: 'success', 
            duration: 2000
        })
        },
        fail: (res) => {
            this.setData({
                text: "扫描失败！",
                isShow: true,
                isScroll: false
            })
            setTimeout(function(){
                that.setData({
                    isShow:false,
                    isScroll: true,
                })
            },3000);
        },
        complete: (res) => {
        }
    })
    },
    clear_button: function () {
        var that = this;
        that.setData({
            isShow:false,
            isScroll: true,
        })
    },
    redirect_url:function(){
        wx.navigateTo({    
             url:"/pages/demo/demo"
        })
    }
})