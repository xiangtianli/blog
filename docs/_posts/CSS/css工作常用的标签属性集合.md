---
  title: css好用的属性
  tags: 
    - css
  date: 2020-6-18
---
# css好用的属性

## 1.文本溢出...

1. 单行文本

   ```css
   overflow: hidden;
   text-overflow:ellipsis;
   white-space: nowrap;
   ```

2. 多行文本
   ```css
   display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: 3;
   overflow: hidden;
   ```
   
   因使用了WebKit的CSS扩展属性，该方法适用于WebKit浏览器及移动端；

## 2.【fit-content】盒子跟随你内容的多少决定你盒子的宽度；

​	![16c3d510015a44fcimageslim.gif](https://wx1.sbimg.cn/2020/06/18/16c3d510015a44fcimageslim.gif)

## 3.【object-fit】图片在指定尺寸后，可以设置object-fit为contain或cover保持比例

![16c3d50c9c447a1aimageslim.gif](https://wx2.sbimg.cn/2020/06/18/16c3d50c9c447a1aimageslim.gif)