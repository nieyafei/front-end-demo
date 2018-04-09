# image-rendering 像素化图像像素(实验中)

?> `image-rendering` 提供一个提示，关于算法应使用缩放图像浏览器。

> 该属性适用于元素本身，以及元素的其他属性中提供的任何图像。它对未缩放的图像没有影响。例如，如果图像的自然尺寸是`100×100`像素，但页面作者将其尺寸指定为`200×200px`（或`50×50px`），则图像将使用指定算法放大（或缩小）到新尺寸。由于用户交互（缩放），缩放也可能适用。

### 语法

?> auto | crisp-edges | pixelated

```css
/* Keyword values */
image-rendering: auto;
image-rendering: crisp-edges;
image-rendering: pixelated;

/* Global values */
image-rendering: inherit;
image-rendering: initial;
image-rendering: unset;
```

?> `auto`默认值，应使用最大化图像外观的算法来缩放图像。特别地，“平滑”颜色的缩放算法是可接受的，例如双线性插值。这适用于照片等图像。从版本1.9（Firefox 3.0）开始，Gecko使用双线性重采样（高质量）。

?> `crisp-edges`必须使用保留图像中的对比度和边缘的算法来缩放图像，并且不会在处理中使图像变得光滑或模糊。这是用于图像，如像素艺术。

?> `pixelated`当向上缩放图像时，必须使用“最近邻居”或类似的算法，以便图像看起来由大像素组成。缩小时，这与“自动”相同。

?> `optimizeQuality`和`optimizeSpeed`存在于早期草案（并从其SVG对应未来）定义为同义词的auto值。

### 实例DEMO-1

<vuep template="#demo1"></vuep>
<script v-pre type="text/x-template" id="demo1">
<style>
  .image-cons-1 img:nth-child(3){
    width: 350px;
  }
  .image-cons-1 ul{
    maging: 0;padding: 0;
    overflow: hidden;
  }
  .image-cons-1 ul li{
    float: left;
    list-style: none;
    padding: 0 10px;
  }
  .image-cons-1 ul li input{
    vertical-align: middle;
  }
</style>
<template>
  <div style="padding:0 30px 30px 30px;">
    <h3>选择查看对比效果</h3>
    <div class="image-cons-1">
      <img src="./assets/images/pixel-art-small.png" alt="">
      <ul>
        <li>
          <input type = "radio" name = "imageRender" id = "auto" value = "auto" checked = "checked" @click="changeTab" />
          <label for = "auto">auto</label>
        </li>
        <li>
          <input type = "radio" name = "imageRender" id = "renderPixelated" value = "pixelated" @click="changeTab" />
          <label for = "renderPixelated">pixelated</label>
        </li>
        <li><input type = "radio" name = "imageRender" id = "crispEdges" value = "crisp-edges" @click="changeTab" />
          <label for = "crispEdges">crisp edges</label></li>
      </ul>
      <img src="./assets/images/pixel-art-small.png" :style = "{'image-rendering': valueStr}" alt="">
    </div>
  </div>
</template>
<script>
  module.exports = {
    data: function () {
      return { 
        name: 'Vue',
        valueStr: 'auto'
      }
    },
    methods: {
      changeTab: function (event) {
        console.log(event.target.value)
        this.valueStr = event.target.value
      }
    }
  }
</script>
</script>

### 实例DEMO-2

<vuep template="#demo2" class="full-page"></vuep>
<script v-pre type="text/x-template" id="demo2">
<style>
  body{
    --size: 50px;
  }
  .image-cons {
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px;
    background: rgba(180,160,120,.1);
    position: relative;
  }

  input[type="range"] {
    position: absolute;
    top: 30px;
    left: 10px;
    width: calc(100% - 20px);
    background: #ccc;
    -webkit-appearance: none; /*去除默认样式*/
    height: 10px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;/*去除默认样式*/
    cursor: default;
    top: 0;
    height: 20px;
    width: 20px;
    transform: translateY(0px);
    background: #fff;
    border-radius: 15px;
    border: 5px solid #006eb3;
  }

  img {
    width: var(--size);
    margin: 10px;
  }

  img:nth-child(2) {
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
  }
</style>
<template>
  <div style="padding:0 30px 30px 30px;">
    <h3>滑动观察放大之后的对比效果</h3>
    <div class="image-cons">
      <img src="./assets/images/pixel-girl-head.png" alt="">
      <img src="./assets/images/pixel-girl-head.png" alt="">
      <input type="range" min="20" max="500" value="50" v-on:input="changeInput">
    </div>
  </div>
</template>
<script>
  module.exports = {
    data: function () {
      return { name: 'Vue' }
    },
    methods: {
      changeInput: function (event) {
        document.body.style.setProperty("--size", event.target.value + "px");
      }
    }
  }
</script>
</script>

**兼容性：**

### 浏览器支持

<iframe src="https://caniuse.bitsofco.de/embed/index.html?feat=css-crisp-edges&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false" frameborder="0" width="100%" height="458px"></iframe>

**参考资料：**

[image-rendering](https://cloud.tencent.com/developer/section/1072120)

[MDN: image-rendering](https://developer.mozilla.org/en-US/docs/Web/CSS/image-rendering)

[css-tricks：image-rendering](https://css-tricks.com/almanac/properties/i/image-rendering/)