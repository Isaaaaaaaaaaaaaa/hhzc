Page({
  data: {
    searchInput: "",
    carouselItems: [
      "/images/user.png", // 修改为你的图片路径
      "/images/find.png",
      "/images/guide.png"
    ],
    recommendedSpots: [
      { id: 1, name: "推荐风景区"},
      { id: 2, name: "推荐风景区"},
      { id: 3, name: "推荐风景区"},
      { id: 4, name: "推荐风景区"}
    ]
  },

  onSearchInput(event: any) {
    this.setData({
      searchInput: event.detail.value
    });
  },

  onSearch() {
    wx.showToast({
      title: '搜索功能开发中',
      icon: 'none'
    });
  }
});
