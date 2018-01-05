# Gobang Game 五子棋小游戏

```
yarn
yarn start
```

demo page: [https://chiufin.github.io/](https://chiufin.github.io/)

## 分析

1. 写个单机五子棋，带胜负判断，不需要人机对战。可用任何框架。
    - 逻辑判断: 新的一颗棋，判断这一行的垂直水平左上到右下右上到左上是否有五颗棋连起来
    - 獲勝的時候，鎖住盤面
    - 使用熟悉的 react + redux
2. 当用户浏览器支持Canvas，使用Canvas渲染，否则降级用Div渲染
    - 页面进入点都是src / pages / GamePage.js，这页判断要使用canvas或div
3. 想办法使得后续 切换界面实现方式成本最低。(例如未来如果想增加个webGL的渲染方式，尽量少更动原本的代码)
    - 真正的画面实作是放在components里，因此以后有其他的实作方式ex.svg，webGL，只要增加新的组件，并在GamePage加入判断的代码，就行了
4. 记得​以正式的项目标准来写，需考虑维护性、架构越乾净越好。
    - 架构切很細