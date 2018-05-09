# background-blend-mode的使用

### 单值

?> background-blend-mode: normal;

### 双值，每个背景一个值

?> background-blend-mode: darken, luminosity;

> **background-blend-mode: normal;          //正常**

> **background-blend-mode: multiply;        //正片叠底**

> **background-blend-mode: screen;          //滤色**

> **background-blend-mode: overlay;         //叠加**

> **background-blend-mode: darken;          //变暗**

> **background-blend-mode: lighten;         //变亮**

> **background-blend-mode: color-dodge;     //颜色减淡**

> **background-blend-mode: color-burn;      //颜色加深**

> **background-blend-mode: hard-light;      //强光**

> **background-blend-mode: soft-light;      //柔光**

> **background-blend-mode: difference;      //差值**

> **background-blend-mode: exclusion;       //排除**

> **background-blend-mode: hue;             //色相**

> **background-blend-mode: saturation;      //饱和度**

> **background-blend-mode: color;           //颜色**

> **background-blend-mode: luminosity;      //亮度**

> **background-blend-mode: initial;         //初始**

> **background-blend-mode: inherit;         //继承**

> **background-blend-mode: unset;           //复原**


### 实例

<vuep template="#demo1" class="full-page"></vuep>
<script v-pre type="text/x-template" id="demo1">
<style>
  .demo-list{
    padding: 20px;
  }
  .mode{
    position: relative;
    height:500px;
    background: url('./assets/images/500392442.jpg') no-repeat,url('./assets/images/500070704.webp') no-repeat;
    background-size: cover;
  }
  .change-btn{
    text-align:center;
    padding: 20px 0;
  }
</style>
<template>
<div class="demo-list">
  <div class="change-btn">
    <input type="radio" name="radio1" @change="changeInput" value="normal" checked/>normal(正常)
    <input type="radio" name="radio1" @change="changeInput" value="multiply"/>multiply(正片叠底)
    <input type="radio" name="radio1" @change="changeInput" value="screen"/>screen(滤色)
    <input type="radio" name="radio1" @change="changeInput" value="overlay"/>overlay(叠加)
    <input type="radio" name="radio1" @change="changeInput" value="darken"/>darken(变暗)
    <input type="radio" name="radio1" @change="changeInput" value="lighten"/>lighten(变亮)
    <input type="radio" name="radio1" @change="changeInput" value="color-dodge"/>color-dodge(颜色减淡)
    <input type="radio" name="radio1" @change="changeInput" value="color-burn"/>color-burn(颜色加深)
    <input type="radio" name="radio1" @change="changeInput" value="hard-light"/>hard-light(强光)
    <input type="radio" name="radio1" @change="changeInput" value="soft-light"/>soft-light(柔光)
    <input type="radio" name="radio1" @change="changeInput" value="difference"/>difference(差值)
    <input type="radio" name="radio1" @change="changeInput" value="exclusion"/>exclusion(排除)
    <input type="radio" name="radio1" @change="changeInput" value="hue"/>hue(色相)
    <input type="radio" name="radio1" @change="changeInput" value="saturation"/>saturation(饱和度)
    <input type="radio" name="radio1" @change="changeInput" value="color"/>color(颜色)
    <input type="radio" name="radio1" @change="changeInput" value="luminosity"/>luminosity(亮度)
    <input type="radio" name="radio1" @change="changeInput" value="initial"/>initial(初始)
    <input type="radio" name="radio1" @change="changeInput" value="inherit"/>inherit(继承)
    <input type="radio" name="radio1" @change="changeInput" value="unset"/>unset(复原)
  </div>
  <div class="mode" :style="{'background-blend-mode': value}">
  </div>
</div>
</template>
<script>
  module.exports = {
    data: function () {
      return { name: 'Vue',value: 'normal' }
    },
    methods: {
      changeInput: function (event) {
        this.value = event.target.value;
      }
    }
  }
</script>
</script>


### 浏览器支持

<iframe src="https://caniuse.bitsofco.de/embed/index.html?feat=css-backgroundblendmode&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false" frameborder="0" width="100%" height="458px"></iframe>

**参考资料：**

[MDN: background-blend-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-blend-mode)