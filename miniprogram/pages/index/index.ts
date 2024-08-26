// index.ts
interface Activity {
  title: string;
  time: string;
  reads: number;
  image: string;
}

Page({
  data: {
    items1: [
      { url: '/pages/find/find', image: '/images/1.png', text: '乡村美景' },
      { url: '/pages/find/find', image: '/images/2.png', text: '乡村美食' },
      { url: '/pages/resv/resv', image: '/images/3.png', text: '行程预约' },
      { url: '/pages/find/find', image: '/images/4.png', text: '农品销售' },
      { url: '/pages/find/find', image: '/images/5.png', text: '研学机构' }
    ] as { url: string; image: string; text: string }[],
    items2: [
      { url: '/pages/find/find', image: '/images/6.png', text: '游玩攻略' },
      { url: '/pages/find/find', image: '/images/7.png', text: '会议登记' },
      { url: '/pages/find/find', image: '/images/8.png', text: '精品采摘' },
      { url: '/pages/find/find', image: '/images/9.png', text: '文化活动' },
      { url: '/pages/find/find', image: '/images/10.png', text: '民宿预约' }
    ] as { url: string; image: string; text: string }[],


    companyName: '',

    selected: '农耕体验',
    images: ['/images/fl2.png', '/images/fl2.png', '/images/fl2.png'],
    
    activities: [] as Activity[] // 指定类型
  },

  onLoad() {
    this.changeCompanyName();
    this.loadActivities();
  },

  changeCompanyName() {
    const companyNames = [
      '北京林业大学',
      '华东理工大学',
      '南京师范大学'
    ];
    this.setData({
      companyName: companyNames[0]
    });

    // 从公司名称数组中循环更新公司名称
    let index = 0;
    setInterval(() => {
      index = (index + 1) % companyNames.length; // 循环索引
      this.setData({
        companyName: companyNames[index]
      });
    }, 3000); // 每3秒替换一次
  },

  selectNav(event: WechatMiniprogram.TouchEvent) {
      const item = event.currentTarget.dataset.item;
      const imageData: { [key: string]: string[] } = {
          '自然教育': ['/images/fl1.png', '/images/fl1.png', '/images/fl1.png'],
          '农耕体验': ['/images/fl2.png', '/images/fl2.png', '/images/fl2.png'],
          '文旅振兴': ['/images/fl3.png', '/images/fl3.png', '/images/fl3.png'],
          '红色教育': ['/images/fl4.png', '/images/fl4.png', '/images/fl4.png']
      };

      this.setData({
          selected: item,
          images: imageData[item]
      });
  },

  loadActivities() {
    const currentTime = new Date();
    const formattedTime = `${currentTime.getFullYear()}年${currentTime.getMonth() + 1}月${currentTime.getDate()}日`;

    // 从本地存储获取阅读数
    const storedReads1 = wx.getStorageSync('activity1Reads') || 0;
    const storedReads2 = wx.getStorageSync('activity2Reads') || 0;

    this.setData({
      activities: [
        {
          title: '往期活动1',
          time: formattedTime,
          reads: storedReads1, // 使用本地存储的值
          image: '/images/act1.png'
        },
        {
          title: '往期活动2',
          time: formattedTime,
          reads:  storedReads2, // 使用本地存储的值
          image: '/images/act2.png'
        }
      ]
    });
  },
  incrementReads(index: number) {
    const activities = this.data.activities;
    activities[index].reads += 1; // 增加阅读数

    // 更新本地存储
    wx.setStorageSync(`activity${index + 1}Reads`, activities[index].reads);

    this.setData({
      activities: activities
    });
  }

});