# Flex布局

?> `Flexbox`是 `CSS3` 引入的新的布局模式。它决定了元素如何在页面上排列，使它们能在不同的屏幕尺寸和设备下可预测地展现出来。
它能够扩展和收缩 flex 容器内的元素，以最大限度地填充可用空间

> - **在不同方向排列元素**

> - **重新排列元素的显示顺序**

> - **更改元素的对齐方式**

> - **动态地将元素装入容器**

![image](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png)

> 容器默认存在两根轴：水平的主轴（`main axis`）和垂直的交叉轴（`cross axis`）。主轴的开始位置（与边框的交叉点）叫做`main start`，结束位置叫做`main end`；交叉轴的开始位置叫做`cross start`，结束位置叫做`cross end`。

> 项目默认沿主轴排列。单个项目占据的主轴空间叫做`main size`，占据的交叉轴空间叫做`cross size`。

### 属性

- ### flex

```css
display: flex;
display: -webkit-flex;
```

> **默认情况下，所有的直接子元素都被认为是 `flex` 项，并从左到右依次排列在一行中。如果 `flex` 项的宽度总和大于容器，那么 `flex` 项将按比例缩小，直到它们适应 `flex` 容器宽度。**

<vuep template="#demo1" class="full-page"></vuep>
<script v-pre type="text/x-template" id="demo1">
<style>
  .flex-box{
    display: flex;
    display: -webkit-flex;
    width: 800px;
    background: #EFF8F3;
    margin: 30px auto;
  }
  .flex-box div{
    width: 50px;
    background: #42b983;
    height: 80px;
  }
  .flex-box div:nth-child(2n){
    background: #ADBB3C;
  }
</style>
<template>
  <div class="flex-box">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
  </div>
</template>
<script></script>
</script>

- ### flex-direction

**作用：决定主轴的方向**

?> **flex-direction: `row`|`row-reverse`|`column`|`column-reverse`|`initial`|`inherit`;**

> - **row**: 默认值。灵活的项目将水平显示，正如一个行一样。

> - **row-reverse**：与 row 相同，但是以相反的顺序

> - **column**: 灵活的项目将垂直显示，正如一个列一样。

> - **column-reverse**: 与 column 相同，但是以相反的顺序

<vuep template="#demo2" class="full-page"></vuep>
<script v-pre type="text/x-template" id="demo2">
<style>
  .flex-box{
    display: flex;
    display: -webkit-flex;
    width: 800px;
    background: #EFF8F3;
    margin: 30px auto;
    flex-direction: row;
  }
  .flex-box div{
    width: 50px;
    background: #42b983;
    height: 80px;
  }
  .flex-box div:nth-child(2n){
    background: #ADBB3C;
  }
  .change-btn{
    text-align:center;
    padding: 20px 0;
  }
</style>
<template>
  <div>
  <div class="change-btn">
    <input type="radio" name="radio1" @change="changeInput" value="row" checked/>row
    <input type="radio" name="radio1" @change="changeInput" value="row-reverse"/>row-reverse
    <input type="radio" name="radio1" @change="changeInput" value="column"/>column
    <input type="radio" name="radio1" @change="changeInput" value="column-reverse"/>column-reverse
  </div>
  <div class="flex-box" :style="{'flex-direction': value}">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
  </div>
  </div>
</template>
<script>
  module.exports = {
    data: function () {
      return { name: 'Vue',value: 'row' }
    },
    methods: {
      changeInput: function (event) {
        this.value = event.target.value;
      }
    }
  }
</script>
</script>

- ### justify-content

**作用：flex 项在 flex 方向（direction）上的对齐位置**

?> **justify-content: `flex-start`|`flex-end`|`center`|`space-between`|`space-around`|`initial`|`inherit`;**

> - **flex-start**：默认值。项目位于容器的开头。

> - **flex-end**: 项目位于容器的结尾

> - **center**: 项目位于容器的中心

> - **space-between**: 项目位于各行之间留有空白的容器内

> - **space-around**: 项目位于各行之前、之间、之后都留有空白的容器内

<vuep template="#demo3" class="full-page"></vuep>
<script v-pre type="text/x-template" id="demo3">
<style>
  .flex-box{
    display: flex;
    display: -webkit-flex;
    width: 800px;
    background: #EFF8F3;
    margin: 30px auto;
    flex-direction: row;
  }
  .flex-box div{
    width: 50px;
    background: #42b983;
    height: 80px;
  }
  .flex-box div:nth-child(2n){
    background: #ADBB3C;
  }
  .change-btn{
    text-align:center;
    padding: 20px 0;
  }
</style>
<template>
  <div>
  <div class="change-btn">
    <input type="radio" name="radio1" @change="changeInput" value="flex-start" checked/>flex-start
    <input type="radio" name="radio1" @change="changeInput" value="flex-end"/>flex-end
    <input type="radio" name="radio1" @change="changeInput" value="center"/>center
    <input type="radio" name="radio1" @change="changeInput" value="space-between"/>space-between
    <input type="radio" name="radio1" @change="changeInput" value="space-around"/>space-around
  </div>
  <div class="flex-box" :style="{'justify-content': value}">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
  </div>
  </div>
</template>
<script>
  module.exports = {
    data: function () {
      return { name: 'Vue',value: 'flex-start' }
    },
    methods: {
      changeInput: function (event) {
        this.value = event.target.value;
      }
    }
  }
</script>
</script>

- ### align-items

**定义flex子项在flex容器的当前行的侧轴（纵轴）方向上的对齐方式**

?> align-items: `stretch`|`center`|`flex-start`|`flex-end`|`baseline`|`initial`|`inherit`;

> - **stretch**: 默认值。项目被拉伸以适应容器

> - **center**: 项目位于容器的中心

> - **flex-start**: 项目位于容器的开头

> - **flex-end**: 项目位于容器的结尾

> - **baseline**: 项目位于容器的基线上

<vuep template="#demo4" class="full-page"></vuep>
<script v-pre type="text/x-template" id="demo4">
<style>
  .flex-box{
    display: flex;
    display: -webkit-flex;
    width: 800px;
    background: #EFF8F3;
    margin: 30px auto;
    flex-direction: row;
    height:140px;
  }
  .flex-box div{
    width: 50px;
    background: #42b983;
    height: 80px;
  }
  .flex-box div:nth-child(2n){
    background: #ADBB3C;
    font-size: 24px;
    height: 100px;
  }
  .change-btn{
    text-align:center;
    padding: 20px 0;
  }
</style>
<template>
  <div>
  <div class="change-btn">
    <input type="radio" name="radio1" @change="changeInput" value="stretch" checked/>stretch
    <input type="radio" name="radio1" @change="changeInput" value="center"/>center
    <input type="radio" name="radio1" @change="changeInput" value="flex-start"/>flex-start
    <input type="radio" name="radio1" @change="changeInput" value="flex-end"/>flex-end
    <input type="radio" name="radio1" @change="changeInput" value="baseline"/>baseline
  </div>
  <div class="flex-box" :style="{'align-items': value}">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
  </div>
  </div>
</template>
<script>
  module.exports = {
    data: function () {
      return { name: 'Vue',value: 'stretch' }
    },
    methods: {
      changeInput: function (event) {
        this.value = event.target.value;
      }
    }
  }
</script>
</script>

- ### flex-wrap

**默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行**

?> flex-wrap: nowrap|wrap|wrap-reverse|initial|inherit;

> - **nowrap**: 默认值。规定灵活的项目不拆行或不拆列

> - **wrap**: 规定灵活的项目在必要的时候拆行或拆列

> - **wrap-reverse**: 规定灵活的项目在必要的时候拆行或拆列，但是以相反的顺序

- ### align-content

**定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。**

?> align-content: stretch|center|flex-start|flex-end|space-between|space-around|initial|inherit;

> - **flex-start**: 项目位于容器的开头

> - **stretch**: 默认值。项目被拉伸以适应容器

> - **center**: 项目位于容器的中心

> - **flex-end**: 项目位于容器的结尾

> - **space-between**: 项目位于各行之间留有空白的容器内

> - **space-around**: 项目位于各行之前、之间、之后都留有空白的容器内

<vuep template="#demo5" class="full-page"></vuep>
<script v-pre type="text/x-template" id="demo5">
<style>
  .flex-box{
    display: flex;
    display: -webkit-flex;
    width: 800px;
    background: #EFF8F3;
    margin: 30px auto;
    flex-direction: row;
    height:300px;
    flex-wrap: wrap;
  }
  .flex-box div{
    width: 50px;
    background: #42b983;
    height: 80px;
  }
  .flex-box div:nth-child(2n){
    background: #ADBB3C;
    font-size: 24px;
    height: 100px;
    width: 80px
  }
  .change-btn{
    text-align:center;
    padding: 20px 0;
  }
</style>
<template>
  <div>
  <div class="change-btn">
    <input type="radio" name="radio1" @change="changeInput" value="stretch" checked/>stretch
    <input type="radio" name="radio1" @change="changeInput" value="flex-start"/>flex-start
    <input type="radio" name="radio1" @change="changeInput" value="flex-end"/>flex-end
    <input type="radio" name="radio1" @change="changeInput" value="center"/>center
    <input type="radio" name="radio1" @change="changeInput" value="space-between"/>space-between
    <input type="radio" name="radio1" @change="changeInput" value="space-around"/>space-around
  </div>
  <div class="flex-box" :style="{'align-content': value}">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
    <div>13</div>
    <div>14</div>
    <div>15</div>
    <div>16</div>
    <div>17</div>
    <div>18</div>
  </div>
  </div>
</template>
<script>
  module.exports = {
    data: function () {
      return { name: 'Vue',value: 'stretch' }
    },
    methods: {
      changeInput: function (event) {
        this.value = event.target.value;
      }
    }
  }
</script>
</script>

- ### flex-flow

> `flex-flow` 属性是 `flex-direction` 和 `flex-wrap` 属性的复合属性

> `flex-flow` 属性用于设置或检索弹性盒模型对象的子元素排列方式。

> `flex-direction` 属性规定灵活项目的方向。

> `flex-wrap` 属性规定灵活项目是否拆行或拆列。

?> flex-flow: `flex-direction` `flex-wrap`|`initial`|`inherit`;


- ### order

**属性定义项目的排列顺序, 数值越小，排列越靠前，默认为0**

- ### flex-grow

**属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大**

- ### flex-shrink

**属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小**

- ### flex-basis

**属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。**

- ### flex

?> `flex`属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选

- ### align-self

**属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的align-items属性，如果没有父元素，则等同于`stretch`。**

?> align-self: `auto` | `flex-start` | `flex-end` | `center` | `baseline` | `stretch`;

### 兼容性

<iframe src="https://caniuse.bitsofco.de/embed/index.html?feat=flexbox&amp;periods=future_1,current,past_1,past_2,past_3&amp;accessible-colours=false" frameborder="0" width="100%" height="458px"></iframe>

**参考资料**

[10分钟学会基本的 Flexbox 布局](http://www.css88.com/archives/7760)

[Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?^%$)