var JSBridge = {
  getUid: setAttr('getUid'),
  getToken: setAttr('getToken'),
  openWeChat: setAttr('openWeChat'),
  follow: setAttr('follow'), //hasFollow: true 取消关注， false 关注; uid
  getParams: setAttr('getParams'),
  closeWebPage: setAttr('closeWebPage'),
  share: setAttr('share'),

  init: init,
  onready: null,
};
var count = 0; // 防止init无限调用

function doMethod(attr, params, cb) {
  if (checkIOS()) {
    // iOS处理
    if (JSBridge.debug) console.log('in iOS');
    if (JSBridge.debug) console.log('调用：' + attr);
    if (JSBridge.debug) console.log('参数：', params);
    var message = { method: attr, params: params, callback: attr + 'Back' };
    // 赋值给全局函数，用于iOS的回调
    if (attr === 'getUid') { // uid需要为数字
      window[attr + 'Back'] = function (res) {
        cb(parseInt(res, 10));
      };
    } else {
      window[attr + 'Back'] = cb;
    }
    window.webkit.messageHandlers.Client.postMessage(message);
  } else if (typeof loveshow !== 'undefined') {
    // 安卓处理
    if (JSBridge.debug) console.log('in android');
    if (JSBridge.debug) console.log('调用：' + attr);
    if (JSBridge.debug) console.log('参数：', params);
    // 有参数的时候需要特殊处理 或者 方法名不一样时
    if (attr === 'follow') { // 关注
      cb(loveshow[attr](params.hasFollow, params.uid));
    } else if (attr === 'getToken') { // 获取token
      // getToken方法名不一样
      cb(loveshow.getUserToken());
    } else if (attr === 'share') { // 分享
      cb(loveshow[attr](params.shareType, params.title, params.content, params.imgUrl, params.url));
    } else {
      // 无参数
      cb(loveshow[attr]());
    }
  } else {
    throw new Error('not loveshow!');
  }
}

function checkIOS() {
  return typeof window !== 'undefined' && typeof window.webkit !== 'undefined' && typeof window.webkit.messageHandlers !== 'undefined' && typeof window.webkit.messageHandlers.Client !== 'undefined' && typeof window.webkit.messageHandlers.Client.postMessage !== 'undefined'
}

function setAttr(attr) {
  return function(params, cb) { doMethod(attr, params, cb) }
}

function init(options) {
  if (typeof options !== 'undefined' && typeof options.onready !== 'undefined') this.onready = options.onready;
  this.debug = options.debug;
  if (typeof loveshow !== 'undefined' || checkIOS()) {
    this.onready();
  } else if (count < 200) {
    var _this = this;
    count += 1;
    setTimeout(function () {
      _this.init(options);
    }, 50);
  } else {
    throw new Error('loveshow JSBridge init fail!');
  }
}

module.exports = JSBridge;