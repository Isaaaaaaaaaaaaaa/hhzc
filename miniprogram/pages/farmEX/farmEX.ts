// farmEX.ts

/*
Page({
  data: {
    tabs: [
      { id: 0, title: '区域介绍' },
      { id: 1, title: '区域剪影' },
      { id: 2, title: '行程预约' },
      { id: 3, title: '在线客服' }
    ],
    currentTab: 0 // 默认选中的标签索引
  },

  // 切换标签页
  onTabSelect(event: WechatMiniprogram.BaseEvent) {
    const index = event.currentTarget.dataset.index; // 获取点击的标签索引
    this.setData({
      currentTab: index // 更新当前标签索引
    });
  }
});
*/
// 页面逻辑，无需导出 Page
Page({
  data: {
    activeSection: 'introduce' // 默认显示的部分
  },

  // 使用普通函数以确保 this 指向页面实例
  showSection(event: any) {
    const section = event.currentTarget.dataset.section;
    this.setData({
      activeSection: section
    });
  },

  makeReservation() {
    wx.showToast({
      title: '预约成功！',
      icon: 'success',
      duration: 2000
    });
  },

  sendMessage() {
    wx.showToast({
      title: '发送成功！',
      icon: 'success',
      duration: 2000
    });
  }
});