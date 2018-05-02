let showAlert = {
    show:function (data){
        var that = this;
        this.setData({
            '_toast_.isShowToast': true,
            '_toast_.iconToast': data.iconToast,
            '_toast_.imageToast': data.imageToast,
            '_toast_.textToast': data.textToast
        });
        if (data.imageToast !== 'loading.gif'){
            setTimeout(function () {
                that.setData({
                    '_toast_.isShowToast': false
                })
            }, 1500)
        }
        if (data.close === true){
            that.setData({
                '_toast_.isShowToast': false
            })
        }
    }
}

function ShowAlert(){
    let pages = getCurrentPages();
    let curPage = pages[pages.length - 1];
    Object.assign(curPage, showAlert)
    curPage.showAlert = this;
    curPage.setData({
        '_toast_.isShowToast': false,
        '_toast_.iconToast': '',
        '_toast_.imageToast': '',
        '_toast_.textToast': ''
    })
    return this;
}
module.exports = {
    ShowAlert
}