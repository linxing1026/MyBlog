# 浏览器兼容性问题汇总
## CSS兼容性问题
1.图片加a标签在IE9中会有边框
```
解决方案：img{border:none}
```
2.IE6及更低版本中，部分元素拥有默认高度
```
解决方案；不要使用margin，使用padding
```
3.IE6及更低版本中，部分块元素拥有默认高度
```
解决方案：给元素设置 font-size: 0
```
4.在Chrome中字体不能小于10px
```
解决方案：p{font-size: 12px; transform: scale(0.8);}
```
5.a标签蓝色边框
```
解决方案：a{outline: none;}
```
## JS兼容性问题
1、事件对象的兼容
```
e = ev || window.event 
```
2、滚动事件的兼容

```
scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
```
3、阻止冒泡的兼容
```js
if (e.stopPropagation) {
      e.stopPropagation();
  } else {
      e.cancelBubble=true;
  }
```
4、阻止默认行为的兼容
```
if (e.preventDefault) {
      e.preventDefault();
  } else {
      e.returnValue = false;
  }
```
5、添加事件监听器的兼容
```
if (target.addEventListener) {
  target.addEventListener("click", fun, false);
} else {
  target.attachEvent("onclick", fun);
}
```
6、获取屏幕尺寸
```
document.documentClientWidth || document.body.clientWidth
```
## 移动端兼容问题
1、禁止iOS识别长串数字为电话
```
解决方案：<meta content="telephone=no" name="format-detection" />
```
2、禁止iOS弹出各种操作窗口
```
解决方案：-webkit-touch-callout:none
```
3、禁止Android手机识别邮箱
```
解决方案：<meta content="email=no" name="format-detection" />
```
4、禁止iOS和Android用户选中文字
```
解决方案：-webkit-user-select:none
```
5、在Android上placeholder文字设置行高会偏上
```
解决方案：input有placeholder情况下不要设置行高
```
6、 iOS中需要将时间格式转为/，如：2022/02/22
```
let date = '2022-02-22';
let dateStr = date.replace(/-/g, '/'); // 2022/02/22
```
7、 移动端1px边框问题
```
原先元素的border去掉，然后利用:before或者:after重做border，并transform的scale缩小一半，
原先的元素相对定位，新做的border绝对定位
```
