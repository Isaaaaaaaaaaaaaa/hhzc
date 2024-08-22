Page({
  data: {
    searchInput: "",
    searchHistory: ["海淀", "朝阳"],
    mapMarkers: [
      // 这里可以添加地图标记，例如：
      { id: 1, latitude: 39.908823, longitude: 116.397470, name: "西山景园" },
      // 可以继续添加其他标记
    ]
  },

  onSearchInput(event: any) {
    this.setData({
      searchInput: event.detail.value
    });
  },

  onSearch() {
    if (this.data.searchInput) {
      this.setData({
        searchHistory: [this.data.searchInput, ...this.data.searchHistory]
      });
      wx.showToast({
        title: '搜索: ' + this.data.searchInput,
        icon: 'none'
      });
    }
  },

  clearHistory() {
    this.setData({
      searchHistory: []
    });
  }
});
