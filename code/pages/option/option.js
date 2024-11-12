// pages/option/option.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  setuserinfo(){
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  },
  test(){
    const fs = wx.getFileSystemManager()
    fs.readFile({
      filePath: `D:\GitHub\HealthMonitor_developer\code\data1\食物热量.csv`,
      encoding: 'utf8',
      position: 0,
      success(res) {
        console.log(res.data)
      },
      fail(res) {
        console.error(res)
      }
    })
  }
})