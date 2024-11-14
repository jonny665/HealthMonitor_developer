// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [
      ["牛奶",58],
      ["馒头",234],
      ["米饭",123],
      ["麦片",332],
      ["饼干",431],
      ["酸奶",81],
      ["咖啡",84]
    ],
    index: 0,
    sign:"添 加",
    btnColor:"#1afa29",
    heat:0,
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  signBtn(){
    var that=this
    var heat_=that.data.heat + that.data.array[that.data.index][1];
    that.setData({
      heat: heat_
    })
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})