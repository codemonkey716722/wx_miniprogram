Page({
  data: {
    // 自定义page对象CSS样式对象
    pageBackgroundColor:'#5cb85c'
  },
  onLoad: function () {},
  // 改变背景颜色
  changeColor: function() {
    var bgColor = this.data.pageBackgroundColor == 'red' ? '#5cb85c' : 'red';
    // 设置背景颜色数据
    this.setData( {
      pageBackgroundColor: bgColor
    } );
  }
})