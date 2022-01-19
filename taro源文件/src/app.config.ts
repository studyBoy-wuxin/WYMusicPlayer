export default {
  pages: [
    'pages/Admin/index',
    'pages/MoreSongSheet/index',

    'pages/Owner/index',
    'pages/Login/index',
    'pages/Register/index',
    'pages/MusicList/index',
    'pages/SongDetail/index',
    'pages/RecommendDetail/index',
    'pages/Owner/Update/index',
  ],
  window: {
    backgroundTextStyle: 'dark',
    navigationBarBackgroundColor: '#000000',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white',
    backgroundColorTop:'#000000'
  },
  tabBar: {
    "color": "#c0c4cc",
    "selectedColor": "#fa436a",
    "backgroundColor": "#ffffff",
    "list": [
      {
        "pagePath": "pages/Admin/index",
        "text": "发现",
        "iconPath": "accept/tabs/tab-home.png",
        "selectedIconPath": "accept/tabs/tab-home-current.png"
      },
      {
        "pagePath": "pages/SongDetail/index",
        "text": "播放",
        "iconPath": "accept/tabs/tab-cicle.png",
        "selectedIconPath": "accept/tabs/tab-cicle-current.png"
      },
      {
        "pagePath": "pages/Owner/index",
        "text": "我的",
        "iconPath": "accept/tabs/tab-my.png",
        "selectedIconPath": "accept/tabs/tab-my-current.png"
      }
    ]
  }
}
