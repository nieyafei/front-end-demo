# 渐变色文本效果

> - background-clip

> - linear-gradient

> - color: transparent

> - box-decoration-break

<vuep template="#demo1"></vuep>
<script v-pre type="text/x-template" id="demo1">
<style>
  .main-cons{
    width: 800px;
    margin: 0px auto;
    padding: 30px 0;
  }
  .main-cons::after{content: "";clear: both;display: block;}
  .main-cons p{
    display: inline;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(90deg, red, blue);
    margin: 0 0 25px 0;
  }
  .main-cons > div{
    width: 380px;float: left;
  }
  .main-cons .cle p{
    display: block;
  }
  .main-cons .cri{
    float: right;
  }
  .main-cons .cri p{
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }
</style>
<template>
  <div class="main-cons">
    <div class="cle">
      <p>如果有来生，要做一棵树，站成永恒，没有悲欢的姿势。一半在土里安详，一半在风里飞扬，一半洒落阴凉，一半沐浴阳光。非常沉默，非常骄傲，从不依靠，从不寻找 。</p>
      <p>生活不是眼前的苟且， 生活有诗和远方。</p>
      <p>CODEHTML</p>
      <p>真正的平静，不是避开车马喧嚣，而是在心中修篱种菊。尽管如流往事，每一天都涛声依旧，只要我们消除执念，便可寂静安然。</p>
      <p>细数人生的过往，都是一部属于自己不朽的传奇，伸出双手，握一缕清风，融一抹优雅文字，把它们挽成生命的小花，别在发间，用流年的笔记下点滴的过往，记下铭心的春秋，把心刻在文字里来诠释人生...</p>
      <p>淡然于心，自在于世间。云淡得悠闲，水淡育万物。世间之事，纷纷扰扰，对错得失，难求完美。若一心想要事事求顺意，反而深陷于计较的泥潭，不能自拔。</p>
    </div>
    <div class="cri">
        <p>如果有来生，要做一棵树，站成永恒，没有悲欢的姿势。一半在土里安详，一半在风里飞扬，一半洒落阴凉，一半沐浴阳光。非常沉默，非常骄傲，从不依靠，从不寻找 。</p><br/><br/>
        <p>生活不是眼前的苟且， 生活有诗和远方。</p><br/><br/>
        <p>CODEHTML</p><br/><br/>
        <p>真正的平静，不是避开车马喧嚣，而是在心中修篱种菊。尽管如流往事，每一天都涛声依旧，只要我们消除执念，便可寂静安然。</p><br/><br/>
        <p>细数人生的过往，都是一部属于自己不朽的传奇，伸出双手，握一缕清风，融一抹优雅文字，把它们挽成生命的小花，别在发间，用流年的笔记下点滴的过往，记下铭心的春秋，把心刻在文字里来诠释人生...</p><br/><br/>
        <p>淡然于心，自在于世间。云淡得悠闲，水淡育万物。世间之事，纷纷扰扰，对错得失，难求完美。若一心想要事事求顺意，反而深陷于计较的泥潭，不能自拔。</p>
    </div>
  </div>
</template>
<script></script>
</script>

**参考资料：**

[你真的理解CSS的linear-gradient？](https://www.w3cplus.com/css3/do-you-really-understand-css-linear-gradients.html)

[CSS Tips：段落每行渐变色文本效果](https://www.w3cplus.com/css/gradient-for-every-line-of-a-para.html)

[初探box-decoration-break](https://www.w3cplus.com/css3/multi-line-padded-text-css-box-decoration-break.html)

