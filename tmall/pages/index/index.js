//index.js
//获取应用实例
import Util from '../../utils/util';

const app = getApp()
const util = new Util();

Page({
  data: {
    imgUrls: [
      '../../assets/images/uploads/b1.jpg',
      '../../assets/images/uploads/b2.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 300,
    systemInfo: util.systemInfo(),
    headerHeight: 82,
    scrollTimer: null,
    countDownTime: 10,
    countDown: {
      hour: 0,
      minute: 0,
      second: 0
    }
  },
  onLoad () {
    this.countDown();
  },
  fnBodyScroll (e) {
    this.data.scrollTimer && clearTimeout(this.data.scrollTimer);
    this.data.scrollTimer = setTimeout(() => {
      if(e.detail.scrollTop > 50) {
        this.setData({headerHeight: 46});
      } else {
        this.setData({headerHeight: 82});
      }
    }, 500);
  },
  countDown() { 
    if(this.data.countDownTime >= 0) {
      this.setData({
        countDown: util.countDownFormatTime(this.data.countDownTime),
        countDownTime: this.data.countDownTime - 1
      });
      setTimeout(() => {
        this.countDown();
      }, 1000);
    }
  }
})
