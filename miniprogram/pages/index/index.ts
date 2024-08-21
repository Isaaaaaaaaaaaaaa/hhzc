// index.ts
// 获取应用实例
/*
const app = getApp<IAppOption>()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
*/

/*
// 定义图片数据的类型
interface ImageData {
  [key: string]: string[];
}
*/

Page({
  data: {
      items: [
          { url: '/pages/page1', image: '/assets/image1.png', text: '民宿预约' },
          { url: '/pages/page2', image: '/assets/image2.png', text: '乡村美景' },
          { url: '/pages/page3', image: '/assets/image3.png', text: '乡村美食' },
          { url: '/pages/page4', image: '/assets/image4.png', text: '农品销售' },
          { url: '/pages/page5', image: '/assets/image5.png', text: '研学机构' },
          { url: '/pages/page6', image: '/assets/image6.png', text: '游玩攻略' },
          { url: '/pages/page7', image: '/assets/image7.png', text: '会议登记' },
          { url: '/pages/page8', image: '/assets/image8.png', text: '精品采摘' },
          { url: '/pages/page9', image: '/assets/image9.png', text: '休闲垂钓' },
          { url: '/pages/page10', image: '/assets/image10.png', text: '招商' }
      ],
      selected: '农耕体验',
      images: ['image2a.png', 'image2b.png', 'image2c.png'],
      activities: [
        {
            title: '往期活动1',
            time: '24小时前',
            reads: '658阅读',
            image: '/assets/activity1.png'
        },
        {
            title: '往期活动2',
            time: '24小时前',
            reads: '658阅读',
            image: '/assets/activity2.png'
        }
    ]
  },

  selectNav(event: WechatMiniprogram.TouchEvent) {
      const item = event.currentTarget.dataset.item;
      const imageData: { [key: string]: string[] } = {
          '自然教育': ['image1a.png', 'image1b.png', 'image1c.png'],
          '农耕体验': ['image2a.png', 'image2b.png', 'image2c.png'],
          '文旅振兴': ['image3a.png', 'image3b.png', 'image3c.png'],
          '红色教育': ['image4a.png', 'image4b.png', 'image4c.png']
      };

      this.setData({
          selected: item,
          images: imageData[item]
      });
  }
});

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