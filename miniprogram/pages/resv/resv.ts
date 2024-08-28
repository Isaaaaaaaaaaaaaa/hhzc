// pages/resv/resv.ts

interface PageData {
  date: string;
  showScenicList: boolean;
  scenicSpots: string[];
  selectedScenicSpots: string[];
  selectedScenicSpotsDisplay: string;
}

Page({
  data: {
    date: '请选择预约日期',
   showScenicList: false,
    scenicSpots: [
      '庙上村', '黄花城水长城', '石湖峪村', '西台村', 
      '东宫村', '黄花镇村', '红庙村', '九渡河村', 
      '花木村', '局里村', '黄坎村'
    ],
    selectedScenicSpots: [],
    selectedScenicSpotsDisplay: '请选择预约景点'
  } as PageData,
  
  navigateToScenicInfo(): void {
    wx.navigateTo({
      url: '/pages/scenic-info/scenic-info'
    });
  },
  //选择日期
  bindDateChange(e: any) {
    this.setData({
      date: e.detail.value
    });
  },
  
  showScenicPicker() {
    this.setData({ showScenicList: true });
  },

  hideScenicPicker() {
    this.setData({ showScenicList: false });
  },

  confirmSelection() {
    const selectedIndexes = this.data.selectedScenicSpots.map(spot => {
      return this.data.scenicSpots.indexOf(spot) + 1; // 获取索引，+1 转换为数字
    });
  
    // 对索引进行排序
    selectedIndexes.sort((a, b) => a - b);
  
    this.setData({
      showScenicList: false,
      selectedScenicSpotsDisplay: selectedIndexes.join(' ') || '请选择预约景点'
    });
  },
  
  onCheckboxChange(e: WechatMiniprogram.TouchEvent) {
    this.setData({
      selectedScenicSpots: e.detail.value as string[]
    });
  },
  
  //下方按钮
  saveInformation: function() {
    wx.showToast({
      title: '保存成功！',
      icon: 'success',
      duration: 2000
    })
  },

  makeReservation: function() {
    wx.showToast({
      title: '预约成功！',
      icon: 'success',
      duration: 2000
    });
  
    setTimeout(function() {
      wx.reLaunch({
        url: '/pages/resv/resv'
      })
    }, 2000);
  }
})