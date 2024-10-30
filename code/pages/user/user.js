// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    userid: '0',
  },
  option(){
    wx.navigateTo({
      url: '/pages/option/option',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var info=wx.getStorageSync('userInfo') 
    var id=wx.getStorageSync('userid')
    this.setData({
      userInfo: info,
      userid: id,
    })
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
    console.log("set")
    var info=wx.getStorageSync('userInfo') 
    var id=wx.getStorageSync('userid')
    this.setData({
      userInfo: info,
      userid: id,
    })
    wx.stopPullDownRefresh()
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