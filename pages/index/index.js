import request from '../../utils/request'
Page({

   /**
    * 页面的初始数据
    */
   data: {
      hotAlbums:[]

   },

   /**
    * 生命周期函数--监听页面加载*/

   onLoad: function (options) {
      // 这第一种方案
      wx.request({
         url: 'https://musicapi.leanapp.cn/artist/album?id=6452',
         success: (res) => {
            console.log('请求成功:', res);
            this.setData({
               hotAlbums:res.data.hotAlbums,
            })
         },
         fail: (err) => {
            console.log('请求失败:', err)
         }
      })
    // 这第二种方案
     const data =  request('https://musicapi.leanapp.cn/artist/album?id=6452');
     this.setData({
      hotAlbums:data.hotAlbums,
     })

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