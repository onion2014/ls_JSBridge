# JSBridge
H5和客户端之间使用到的桥接封装

## Basic Usage
``` bash
npm install ls-jsbridge -S
or
yarn add ls-jsbridge
```
``` js
import JSBridge from 'ls-jsbridge';
```
或者
``` html
<script src="./dist/JSBridge.js"></script>
```

## 页面加载时调用
``` js
JSBridge.init({
  debug: false,
  onready: function () {
    JSBridge.getUid({}, function (res) {
      // 处理res
    });
  }
});
```

### init
| 参数        | 解释    |  默认  |
| :-----:   | :-----:   | :----: |
| debug        | 打开时可看到个多调试信息      |   false    |
| onready        | init成功后的回调      |   null    |

## 普通调用
``` js
JSBridge.getUid({}, function (res) {
  // 处理res
});
```

## 方法
| 方法名        | 解释    |  返回值类型  |  备注  |
| :-----:   | :-----:   | :----: | :----: |
| getUid | 获取当前用户uid | Number | 封装前的类型是不一样的，做了特殊处理，单独使用时需要注意 |
| getToken | 获取token | String | 原生定义的方法名不一样，安卓叫getUserToken |
| openWeChat | 打开微信客户端 | undefined | ios无返回值 |
| follow | 关注/取消关注 | undefined | ios无返回值，接受两个参数，[点击查看](#user-content-follow) |
| getParams | 获取公共参数 | string | ios无返回值，安卓返回空string |
| closeWebPage | 关闭当前webview | undefined | ios无返回值，都没有效果 |
| share | 分享 | undefined | ios无返回值，接受参数，[点击查看](#user-content-share) | |

### follow
| 参数      | 是否必须  | 解释    |  类型  |  备注  |
| :-----: | :-----:   | :----: | :----: | :----: |
| hasFollow | 是 | 是否已经关注 | Boolean |  false为关注，true为取消关注 |
| uid | 是 | 用户id | Number |    |

### share
| 参数      | 是否必须  | 解释    |  类型  |  备注  |
| :-----: | :-----:   | :----: | :----: | :----: |
| shareType | 是 | 类型 | Number | QQ-0  微信-1  微博-2  QQ空间-3  朋友圈-4 |
| title | 是 | 标题 | String | |
| content | 是 | 描述 | String | |
| imgUrl | 是 | 图标 | String | |
| url | 是 | 分享地址 | String | |