// index.ts
Page({
  data: {
      items: [
          { url: '/pages/find/find', image: '/images/user.png', text: '民宿预约' },
          { url: '/pages/find/find', image: '/images/user.png', text: '乡村美景' },
          { url: '/pages/find/find', image: '/images/user.png', text: '乡村美食' },
          { url: '/pages/find/find', image: '/images/user.png', text: '农品销售' },
          { url: '/pages/find/find', image: '/images/user.png', text: '研学机构' },
          { url: '/pages/find/find', image: '/images/user.png', text: '游玩攻略' },
          { url: '/pages/find/find', image: '/images/user.png', text: '会议登记' },
          { url: '/pages/find/find', image: '/images/user.png', text: '精品采摘' },
          { url: '/pages/find/find', image: '/images/user.png', text: '休闲垂钓' },
          { url: '/pages/find/find', image: '/images/user.png', text: '招商' }
      ],
      selected: '农耕体验',
      images: ['/images/user.png', '/images/user.png', '/images/user.png'],
      activities: [
        {
            title: '往期活动1',
            time: '24小时前',
            reads: '658阅读',
            image: '/images/user.png'
        },
        {
            title: '往期活动2',
            time: '24小时前',
            reads: '658阅读',
            image: '/images/user.png'
        }
    ]
  },

  selectNav(event: WechatMiniprogram.TouchEvent) {
      const item = event.currentTarget.dataset.item;
      const imageData: { [key: string]: string[] } = {
          '自然教育': ['/images/user.png', '/images/user.png', '/images/user.png'],
          '农耕体验': ['/images/user.png', '/images/user.png', '/images/user.png'],
          '文旅振兴': ['/images/user.png', '/images/user.png', '/images/user.png'],
          '红色教育': ['/images/user.png', '/images/user.png', '/images/user.png']
      };

      this.setData({
          selected: item,
          images: imageData[item]
      });
  }
});
// 获取应用实例
const app = getApp<IAppOption>()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Component({
  data: {
    motto: 'Hello World',
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },
  methods: {
    // 事件处理函数
    bindViewTap() {
      wx.navigateTo({
        url: '../logs/logs',
      })
    },
    onChooseAvatar(e: any) {
      const { avatarUrl } = e.detail
      const { nickName } = this.data.userInfo
      this.setData({
        "userInfo.avatarUrl": avatarUrl,
        hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
      })
    },
    onInputChange(e: any) {
      const nickName = e.detail.value
      const { avatarUrl } = this.data.userInfo
      this.setData({
        "userInfo.nickName": nickName,
        hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
      })
    },
    getUserProfile() {
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
    },
  },
})
