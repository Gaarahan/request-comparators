- 选择一个请求路径，点击开始来录制其所有传参
![image](https://user-images.githubusercontent.com/34125917/113899038-fc945900-97fe-11eb-9f2c-33520de34fd1.png)

### TODO - 需求

1. 优化参数显示方式
   - 默认以JSON字串形式展示
   - 全局添加 showAsJSONStr / showAsTree 按钮，在字符串与树形结构之间切换
   - 单条数据添加全部展开与收起按钮
   - 超长参数的展示形式还需考虑
2. <del>可以在network上直接右键来进行录制</del><small>(chrome不支持定制)</small>
    - 替代方案： 开启插件时即录制xhr请求，制成下拉列表供选择
3. 可以使用正则表达式
4. 可以使用diff的方式显示参数
5. 添加clear按钮来清除数据
6. 移除开始,结束按钮. 减少不必要的用户交互

### TODO - 代码

- 移除之前的单实例写法, 使用单例或还原组件类
- 优化state

### TODO - 优化
