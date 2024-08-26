// farmEX.ts

Page({
  data: {
    tabs: ['区域介绍', '区域剪影'],
    currentIndex: 0
  },

  // 搜索按钮功能
  onSearch() {
    console.log('搜索按钮被点击');
    // 在这里添加搜索逻辑
  },

  // 选项卡切换
  selectTab(e: any) {
    const index = e.currentTarget.dataset.index; // 获取被点击项的索引
    this.setData({
      currentIndex: index // 更新当前选中索引
    });
  }
});