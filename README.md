# Gobang Game 五子棋小游戏

安装和本地开发
```
yarn
yarn start
```
部署
```
yarn run build
```
demo page: [https://chiufin.github.io/](https://chiufin.github.io/)

## 分析

1. 写个单机五子棋，带胜负判断，不需要人机对战。可用任何框架。
    - 使用 `react + redux`
    - 逻辑判断: 新的一颗棋，判断这一行的垂直、水平、左上到右下、右上到左上是否有五颗棋连起来 (src/utils/gobangWinLogic.js)
    - 獲勝的時候，鎖住盤面，并且出现获胜字眼
2. 当用户浏览器支持Canvas，使用Canvas渲染，否则降级用Div渲染
    - 页面进入点是src/pages/GamePage.js，这页判断使用canvas或div
3. 想办法使得后续 切换界面实现方式成本最低。(例如未来如果想增加个webGL的渲染方式，尽量少更动原本的代码)
    - 真正的画面实作是放在components里，因此以后有其他的实作方式ex.svg，webGL，只要增加新的component，GamePage再新增新的逻辑代码，就行了
4. 记得​以正式的项目标准来写，需考虑维护性、架构越乾净越好。
    - 架构切很細
    - react+ redux:`pages`是路径出现的页面，`containers`有管理资料流，`components`单纯渲染画面
    - 用`redux-saga`处理action
    - 样式将`sass`结构化，以后可以再扩充
    - 部分逻辑用`测试`来辅助