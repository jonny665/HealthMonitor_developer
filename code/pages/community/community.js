// pages/home/home.js

var app = getApp()  
Page( {  
  data: {  
    /** 页面配置 */  
    winWidth: 0,  
    winHeight: 0,  

    /* tab切换  */
    currentTab: 0,  

    sstatus: 1,// 1是滑动到顶部 2是滑动中 3是滑动到底部
    isRefresh: false,//是否显示刷新头
    isLoadMore: false,//加载更多
    clientY: 0,//Y方向手指按下的方向

    // 卡片
    card:{
      imgpath:"/image/icon/默认头像.png",
      nickname:"健康侠",
      time:"3天前",
      question:"今日格言",
      answer:"一天一苹果，医生远离我",
      detail:"114评论 · 514赞同"
    }  
  },  
  onLoad: function() {  
    var that = this;  
  
    /** 
     * 获取系统信息 
     */  
    wx.getSystemInfo( {  
  
      success: function( res ) {  
        that.setData( {  
          winWidth: res.windowWidth,  
          winHeight: res.windowHeight  
        });  
      }  
  
    });  
  },  
  /** 
     * 滑动切换tab 
     */  
  bindChange: function( e ) {  
    var that = this;  
    that.setData( { currentTab: e.detail.current });  
  },  
  /** 
   * 点击tab切换 
   */  
  swichNav: function( e ) {  
    var that = this;  
    if( this.data.currentTab === e.target.dataset.current ) {  
      return false;  
    } else {  
      that.setData( {  
        currentTab: e.target.dataset.current  
      })  
    }  
  } ,

  /**  canvas绘制底部阴影  **/
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
  onShow: function (e) {
    // 使用 wx.createContext 获取绘图上下文 context
    var context = wx.createCanvasContext('firstCanvas')
    // Create linear gradient
    const grd = context.createLinearGradient(0, 0, 0, 80)
    grd.addColorStop(0, 'rgba(255, 255, 255, 0)')
    grd.addColorStop(1, 'rgba(100,100,100, 1)')

    // Fill with gradient
    context.setFillStyle(grd)
    context.fillRect(0, 0, 400, 40)
    context.draw()
  },


/* 上拉加载与下拉刷新 */


  //滑动到顶端
  scrollToTop: function (e) {
     this.setData({
        sstatus: 1
     })
  },
  //滑动到底部
  scrollToBottom: function (e) {
     this.setData({
        sstatus: 3
    })
  },
  //  滑动中
  scroll: function (e) {
     this.setData({
        sstatus: 2,
     })

  },

  //手指按下监听
  start: function (e) {
        console.log(e)
        var touchPoint = e.touches[0];
        var clientY = touchPoint.clientY
        this.setData({
            clientY: clientY
        })
  },
  //手指抬起监听
  end: function (e) {
        console.log(e)
        var context = this
        var upPoint = e.changedTouches[0];
        var endY = upPoint.clientY
        var pointTopointY = Math.abs(endY - this.data.clientY)
        var status = this.data.sstatus
        // wx.showToast({
        //   title: "滑动的距离:" + pointTopointY + "----:当前的状态:" + status,
        //   icon: 'loading'
        // });
        
        //上拉刷新
        if (status == 1 && pointTopointY > 50) {
            this.setData({
                isRefresh: true
            })
        }
        //上拉加载
        if (status == 3 && pointTopointY > 50) {
            this.setData({
                isLoadMore: true
            })
             wx.showToast({
              title: '加载更多',
              icon: 'loading'
            });
        }
        //两秒后隐藏加载条条
        setTimeout(function () {
            context.setData({
                isRefresh: false,//是否显示刷新头
                isLoadMore: false,//加载更多
            })
        }, 3000)
    },


  refresh: function(e){
    wx.showToast({
      title: '下拉刷新',
      icon: 'loading'
    });
    
  },

  onShareAppMessage: function () {
  }
})  

function loadMore(){
  wx.showToast({
        title: '加载更多',
        icon: 'loading'
      });
}

