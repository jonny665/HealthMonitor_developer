// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    // 用户资料获取许可
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  home() {
    wx.login({
      success (res) {
        if (res.code) {
          // 发起网络请求
          wx.request({
            url:'https://api.weixin.qq.com/sns/jscode2session',
            data: {
              // appid和秘钥，建议用自己的
              appid: 'wxdddeffa822863eb9',
              secret: '88e1c4c30ff62ea9e1a328894114023c',
              js_code: res.code,
              grant_type: 'authorization_code'
            },
            success: res => {
              if (res.data.openid) {
                console.log('成功获取openid:', res.data.openid); // 成功获取到openid
                wx.setStorageSync("userid", res.data.openid)
              } else {
                console.error('获取openid失败:', res.data.errmsg); // 没有获取到openid，返回错误信息
              }
            },
            fail: err => {
              console.error('请求失败:', err.errMsg); // 请求失败，返回错误信息
            }
          })
        } else {
            console.log('登录失败！' + res.errMsg)
        }
      }
    })
    // 全局储存
    wx.setStorageSync("userInfo", this.data.userInfo),
    // 跳转
    wx.switchTab({
      url: '/pages/home/home'
    })
    console.log(wx.getStorageSync('userInfo'))
  },
  // 选头像
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  // 选昵称
  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  }
})
