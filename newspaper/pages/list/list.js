// pages/list/list.js
// 引入模块
var list=require('../data/data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected:0,
    list:list.list
  },
  // change:function(e){
  //   var index=e.currentTarget.dataset.id;
  //   this.setData({
  //     selected:index
  //   })
  // },

  tiao:function(e){
    console.log(e.currentTarget.dataset.mark)
    wx.navigateTo({
      url: '/pages/detail/detail?mark=' + e.currentTarget.dataset.mark,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
    console.log(list);
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