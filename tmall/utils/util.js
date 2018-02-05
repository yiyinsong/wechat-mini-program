
export default class Util {
  constructor() {

  }

  systemInfo() {
    return wx.getSystemInfoSync();
  }

  countDownFormatTime(stamp) {
    const _hour = Math.floor(stamp / 3600);
    const _minute = Math.floor((stamp - _hour * 3600) / 60);
    const _second = (stamp - _hour * 3600) - _minute * 60;
    return {
      hour: _hour < 10 ? '0' + _hour : _hour.toString(),
      minute: _minute < 10 ? '0'+ _minute : _minute.toString(),
      second: _second < 10 ? '0' + _second : _second.toString()
    }
  }
}