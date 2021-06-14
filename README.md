### 在Chrome中更方便的比较与调试接口传参！！！

<p align="center">
   <a href="https://github.com/prettier/prettier"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square" /></a>
   <a href="https://github.com/eslint/eslint"><img src="https://img.shields.io/badge/code_style-eslint-ff69b4.svg?style=flat-square&color=blue" /></a>
</p>
<p align="center">
   <img src="https://img.shields.io/badge/Code-JavaScript-ff69b4.svg?style=flat-square&color=yellow" />
   <img src="https://img.shields.io/badge/Code-HTML-ff69b4.svg?style=flat-square&color=brightgreen" />
   <img src="https://img.shields.io/badge/Code-CSS-ff69b4.svg?style=flat-square&color=ff69b4" />
</p>

#### 选择一个请求路径，点击开始来录制其所有传参。支持GET、POST数据的展示。支持JSON字串与树形结构的转化。

![image](https://user-images.githubusercontent.com/34125917/115401686-3e6cc880-a21d-11eb-883b-c59ef23e6e96.png)

### Installing

下载该项目，打开Chrome - 管理扩展程序 - 开发者模式 - 加载已解压的扩展程序 - 选择项目目录即可
![image](https://user-images.githubusercontent.com/34125917/113977898-d8279380-9875-11eb-8212-641a1dcb8e6e.png)

### TODO - 需求

1. 优化参数显示方式
    - 添加请求发起时间 ✅
    - 默认以JSON字串形式展示(对于长请求的展示效果并不好, 实现json-tree之后再切换回来) ✅
    - 全局添加 showAsJSONStr / showAsTree 按钮，在字符串与树形结构之间切换 ✅
    - 单条数据添加全部展开与收起按钮
    - 超长参数的展示形式还需考虑
2. <del>可以在network上直接右键来进行录制</del><small>(chrome不支持定制)</small> ❎
    - 替代方案： 开启插件时即录制xhr请求，制成下拉列表供选择 ✅
3. 可以使用diff的方式显示参数
4. 添加clear按钮来清除数据 ✅
5. 移除开始,结束按钮. 减少不必要的用户交互 ✅
6. 现有的json-tree展示很不友好，需要个人实现一份，参考chrome的json展示
7. 修改请求返回值, 支持配置js的修改规则(正则匹配, 面向测试人员)
8. 对7中的拦截规则进行管理(查看,导入导出)

### TODO - 代码

#### CSS

- 组件之间的css是如何组装起来的？
- 样式上: 可以为tab的切换加个动画，tab标签的下划线做成一个独立的span，增加点击后移动的特效

#### JS
  
- 抽出一个通用的方法，用来在list中新增子项
- 实现domOperator工具
- 现在的开发模式，是一个html对应多个组件，这样的问题是，每个组件都可以去操作不属于自己的DOM元素。(组件化的优势：最小权限)
- 目前的store，取出来的值是一个对实际数据的直接引用，这样在代码层次上就可以使用该引用去直接修改对应的数据，应该为getState方法添加一些处理，让取出的数据只读
- 目前已有的组件的初始化顺序并不明确，对于复杂的设计，可能会导致一些异常。应当使用明确的渲染引擎来进行组件的初始化。
- 实际上可以通过setter函数的方式，为绑定dom的属性添加更新事件，来实现model -> view
- 想要对组件进行改造以使用customElement， 我需要让组件类继承HTMLElement，并且在类的内部构建template

#### HTML

- 使用js动态创建元素，不能像写组件模板一样，清晰明了的看到dom结构（模板HTML的优势: 清晰）
- 现在的dom结构比较简单，当dom结构复杂后，需要写大量的dom查询 -> 绑定事件，抽离出模板HTML能简化该流程。（目前的写法是存在问题的：封装为组件的目的是为了分离组件的职责，但html未进行分离，导致对于dom操作的职责并未分离开，需要写代码时进行区分 ）
- 组件的定制化功能应该是需要由外部定义的，如tab list组件，需要在使用组件的地方进行属性的定义, 现在的组件内部使用了js来收集写在模板中的配置,便于后续改造
