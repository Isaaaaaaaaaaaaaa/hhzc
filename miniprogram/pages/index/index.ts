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