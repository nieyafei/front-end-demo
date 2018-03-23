# box-reflect制作倒影

<vuep template="#demo1"></vuep>
<script v-pre type="text/x-template" id="demo1">
<style>
.main-cons{
  margin: 0 auto;width:800px;padding:50px 0;
}
.cons-li{width: 400px;padding:0px 10px 0px 10px;height: 600px;position: relative;}
.cons-li h2{
  position: absolute;
  top:20px;
  right:40px;
  width: 30px;
  color: #fff;
  z-index: 10;
  font-weight: normal;
  writing-mode: vertical-lr;
  letter-spacing: 3px;
  -webkit-box-reflect: right 100px -webkit-linear-gradient(bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.1));;
}
.cons-li img{
  content: "";
  width: 100%;
  -webkit-box-reflect: right -1px -webkit-linear-gradient(left,rgba(12,93,163,1),rgba(12,93,163,1));
}
</style>
<template>
<div class="main-cons">
  <div class="cons-li">
      <h2>山水绕城春作涨，江涛入海夜通潮</h2>
      <img src="http://p3.pstatp.com/origin/pgc-image/152134897294786aa5020f7" alt="">
  </div>
</div>
</template>
<script></script>
</script>

