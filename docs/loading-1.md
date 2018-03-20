# 多彩圆环

<vuep template="#demo1"></vuep>

<script v-pre type="text/x-template" id="demo1">
<style>
  .rad-cons{
    width: 300px;
    height: 300px;
    padding: 50px;
    margin: 0 auto;
  }  
 
  .rad-cons .circle-div{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    animation: cicleAnitation 3s linear infinite;
    -webkit-animation: cicleAnitation 3s linear infinite;
  }

  .rad-cons .circle-div > div.centerWrap {
    width: 100%;
    height: 100%;
    border-radius: 120px;
    box-shadow:0 0 0 50px #fff;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.4), 0 0 0 50px #fff;
  }

  .rad-cons .circle-div > div.centerWrap:before {
    content: "";
    position: absolute;
    display: block;
    width: 84%;
    height: 84%;
    top: 8%;
    left: 8%;
    border-radius: 120px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  }

  .circle-div  div {
    position: absolute;
    width: 50%;
    height: 50%;
  }

  .circle-div > div:first-child,
  .circle-div > div:nth-child(4) {
    left: 50%;
    width: 57.74%;
    margin-left: -28.87%;
  }

  .circle-div > div:first-child {
    background-color: #ff0000;
    background-image: linear-gradient(90deg, #ff0000 12%, #ffff00 88%);
  }

  .circle-div > div:nth-child(2) {
    left: 50%;
    transform-origin: bottom;
    transform: skewX(150deg);
    background-color: #ffff00;
    background-image: linear-gradient(150deg, #ffff00 12%, #00ff00 88%);
  }

  .circle-div > div:nth-child(3) {
    transform-origin: bottom;
    transform: skewX(30deg);
    background-color: #ff00ff;
    background-image: linear-gradient(30deg, #ff00ff 12%, #ff0000 88%);
  }

  .circle-div > div:nth-child(4) {
    top: 50%;
    background-color: #0000ff;
    background-image: linear-gradient(90deg, #0000ff 12%, #00ffff 88%);
  }

  .circle-div > div:nth-child(5) {
    left: 50%;
    top: 50%;
    transform-origin: top;
    transform: skewX(30deg);
    background-color: #00ffff;
    background-image: linear-gradient(30deg, #00ffff 12%, #00ff00 88%);
  }

  .circle-div > div:nth-child(6) {
    top: 50%;
    transform-origin: top;
    transform: skewX(150deg);
    background-color: #ff00ff;
    background-image: linear-gradient(150deg, #ff00ff 12%, #0000ff 88%);
  }
</style>
<template>
<div class="rad-cons">
  <div class='circle-div'>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div class="centerWrap"></div>
  </div>
</div>
</template>
<script></script>
</script>

### `动画keyframes`

```
@keyframes cicleAnitation {
    0% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
}

@-webkit-keyframes cicleAnitation {
    0% {
        transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
    }
}

```




<!-- ### 浏览器兼容

<iframe src="https://caniuse.bitsofco.de/embed/index.html?feat=css-gradients&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false" frameborder="0" width="100%" height="436px"></iframe> -->