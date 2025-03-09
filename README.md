<!--
 * @Author: LetMeFly
 * @Date: 2022-10-20 10:47:31
 * @LastEditors: LetMeFly.xyz
 * @LastEditTime: 2025-03-09 21:45:12
-->
# Count1024

> [!CAUTION]
> 
> 活动已结束两年半，[上次commit](https://github.com/LetMeFly666/Count1024/commit/6770c8ce5a477e10acf1167b05341d1ee58bcb9b)也已过去一坤年。
>
> 感谢大家的陪伴和支持，这个仓库要Archive啦！
>
> 三年来我的开发可能也更规范了些，在此也对我的Collaborator[@zRains](https://github.com/zRains)表示再次的感谢！大家未来再会。

力扣2022-1024马尔科夫链活动，你的卡牌能合成1024吗？[活动地址点我](https://leetcode.cn/2022-1024)

快去 [Count1024.LetMeFly.xyz](https://count1024.letmefly.xyz/)看看吧！在线计算！

或者使用Python版本：[https://letmefly.blog.csdn.net/article/details/127413787](https://letmefly.blog.csdn.net/article/details/127413787)


## 更新日志

**20221020 17:00:00(UTC+8)**： 实现了卡牌的缓存机制，避免了下次的重复输入

**20221020 18:40:00(UTC+8)**： 将```for循环```改成了```setTimeout + for循环```的方式，实现了进度的显示

**20221020 19:30:00(UTC+8)**： 修复了上次更新的BUG；实现了“两种计算方式的选择”，可以选择```显示进度并计算极慢```或```疾速计算并可能伴随短暂卡顿```

**20221021 14:00:00(UTC+8)**： 采用了[@zRains](https://github.com/zRains)提供的[算法](https://github.com/LetMeFly666/Count1024/issues/2)，效率有了很大的提升。

**20221022 10:50:00(UTC+8)**： 修复了32位整数溢出的BUG，实现了和力扣的运算结果的一致 —— By [@zRains](https://github.com/zRains)

**20221022 18:50:00(UTC+8)**： 将结果显示在“开始计算按钮”的下方，方便下次计算

**20221026 19:35:00(UTC+8)**： 修复了“快速计算”运算符不足三个或数字不足四个时“抛出错误未处理”所造成的仍在计算的假象（感谢[@cjd0901](https://github.com/cjd0901)的反馈！）；添加了力扣的活动链接

## TODO

1. 忽然想起来，我这不是反向优化了么。。。 setTimeout的调用次数更多了。。

欢迎各位大佬的PR
