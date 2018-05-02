//获取应用实例
var app = getApp()
Page({
    data: {
        show: "",
        duration:'',
        isShow:false,
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
            //出现
            var timestamp = Date.parse(new Date());
            timestamp = timestamp / 1000;
            this.setData({
                text: "扫描失败！",
                isShow: true,
                duration: 3000
            })
            var time1=new Date();
            console.log(that.data.duration);
            setTimeout(function(){
                that.setData({
                    isShow:false,
                })
            },5000);



            // var date=new Date();
            // date.setHours(date.getSeconds()+1);
            //
            // var timeout=that.data.duration;
            // if(timeout>'1000'){
            //     console.log(timeout)
            //     this.setData({
            //         isShow: false,
            //     })
            // }
        },
        complete: (res) => {
        }
    })
    }
})