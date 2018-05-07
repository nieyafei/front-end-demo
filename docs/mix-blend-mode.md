# mix-blend-mode的使用

?> 属性描述了元素的内容应该与元素的直系父元素的内容和元素的背景如何混合。

> **mix-blend-mode: normal;          //正常**

> **mix-blend-mode: multiply;        //正片叠底**

> **mix-blend-mode: screen;          //滤色**

> **mix-blend-mode: overlay;         //叠加**

> **mix-blend-mode: darken;          //变暗**

> **mix-blend-mode: lighten;         //变亮**

> **mix-blend-mode: color-dodge;     //颜色减淡**

> **mix-blend-mode: color-burn;      //颜色加深**

> **mix-blend-mode: hard-light;      //强光**

> **mix-blend-mode: soft-light;      //柔光**

> **mix-blend-mode: difference;      //差值**

> **mix-blend-mode: exclusion;       //排除**

> **mix-blend-mode: hue;             //色相**

> **mix-blend-mode: saturation;      //饱和度**

> **mix-blend-mode: color;           //颜色**

> **mix-blend-mode: luminosity;      //亮度**

> **mix-blend-mode: initial;         //初始**

> **mix-blend-mode: inherit;         //继承**

> **mix-blend-mode: unset;           //复原**

### 实例

<vuep template="#demo1" class="full-page"></vuep>
<script v-pre type="text/x-template" id="demo1">
<style>
  .demo-list{
    padding: 20px;
  }
  .mode{
    position: relative;
  }
  .text{
    position: absolute;
    top: 20px;
    left: 20px;
    bottom: 20px;
    right: 20px;
    background: rgba(15,53,124);
    font: bolder 150px 'Alfa Slab One';
    mix-blend-mode: multiply;
    color: #fff;
    text-align: center;
    padding-top: 10px;
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
  <div class="mode">
    <div class="text" :style="{'mix-blend-mode': value}">CODE<br />HTML</div>
    <img src="./assets/images/500070704.webp" />
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

**参考资料：**

[MDN: mix-blend-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference/mix-blend-mode)