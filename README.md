# Count1024

力扣2022-1024马尔科夫链活动，你的卡牌能合成1024吗

快去 [Count1024.LetMeFly.xyz](https://count1024.letmefly.xyz/)看看吧！在线计算！

或者使用Python版本：[https://letmefly.blog.csdn.net/article/details/127413787](https://letmefly.blog.csdn.net/article/details/127413787)


## 更新日志

**20221020 17:00:00(UTC+8)**： 实现了卡牌的缓存机制，避免了下次的重复输入

**20221020 18:40:00(UTC+8)**： 将```for循环```改成了```setTimeout + for循环```的方式，实现了进度的显示

**20221020 19:30:00(UTC+8)**： 修复了上次更新的BUG；实现了“两种计算方式的选择”，可以选择```显示进度并计算极慢```或```疾速计算并可能伴随短暂卡顿```

**20221021 14:00:00(UTC+8)**： 采用了[@zRains](https://github.com/zRains)提供的[算法](https://github.com/LetMeFly666/Count1024/issues/2)，效率有了很大的提升。

## TODO

1. 忽然想起来，我这不是反向优化了么。。。 setTimeout的调用次数更多了。。
2. js运算过程中一些不符预期的结果，例如```(((11 >> 34) >> 1024) | 1024)```在```js```中运算结果为```1026```，感谢[@zRains](https://github.com/zRains)大佬的[issue](https://github.com/LetMeFly666/Count1024/issues/2)

欢迎各位大佬的PR
