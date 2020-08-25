export default {
  pages: [
    'pages/index/index',
    'pages/my/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#000',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white',
    appVersion: "v1.0.0"
  },
  tabBar: {
    selectedColor:'rgba(58,199,145,1)',
    color: 'rgba(250,251,251,1)',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页'
      },
      {
        pagePath: 'pages/my/index',
        text: '我的'
      }
    ]
  }
}
