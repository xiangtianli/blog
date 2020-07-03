---
  title: Dom && Bom
  tags: 
    - javascript
  date: 2020-6-18
  author: 迷
  location: 北京
---
# Dom && Bom

## 1.总览

​	BOM（Browser Object Model）是指浏览器对象模型，提供一些属性和方法可以操作浏览器。

​	DOM （Document Object Model）是指文档对象模型，通过它，可以访问HTML文档的所有元素


 	DOM可以认为是BOM的一个子集，DOM中文档操作相关对象

## 2.Dom

### Dom级别：

1. DOM0：没有纳入标准，属于初级试验性质的，主要用途翻转图片、验证表单数据。
2. DOM1：1998年10月制定的标准，由两大部分组成：DOM核心和DOM HTML。
3. DOM2：扩展鼠标和用户界面事件、范围、遍历，增加了对 CSS支持。
4. DOM3：进一步扩展了DOM，新增了验证文档的方法，支持XML 1.0 规范。

### 	1.Document

### 	2.Element

### 	3.Attributes

### 	4.Event

​		事件分为3个级别：Dom0，Dom2， Dom3

​		Dom0： 处理程序的缺点在于一个处理程序无法同时绑定多个处理函数，比如我还想再点击按钮事件上加上另外一个函数
​		Dom2： 在Dom0级的基础上弥补了一个处理程序，定义了addEventListener 和 removeEventListener两个方法
​		Dom3: 扩展了更多的事件，合成事件，键盘事件等。

### 5.Node  节点 （Document节点,Element节点，Attribute节点，文本节点）

​	

## 3.Bom

### 	1.Window

### 	2.Navigator

### 	3.history

### 	4.Location

### 	5.Screen 

### 	6.frames

