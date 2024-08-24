// pages/resv/resv.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  makeReservation: function() {
    // 一.显示“预约成功！”的提示
    wx.showToast({
      title: '预约成功！',
      icon: 'success',
      duration: 2000
    })
  
    // 二.刷新页面
    setTimeout(function() {
      // 这里使用微信小程序的API重新加载当前页面
      wx.reLaunch({
        url: '/pages/resv/resv' // 将此处替换为当前页面的路径
      })
    }, 2000); // 提示显示2秒后刷新页面
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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