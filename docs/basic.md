# 头像的动画

<vuep template="#demo1" class="full-page"></vuep>
<script v-pre type="text/x-template" id="demo1">
<style>
.bgs-vue{
  background-color:rgba(180,160,120,.1);padding-bottom:50px;
}
.conts{width: 880px;margin: 0 auto;}
.conts .demo{
  width: 200px;
  float: left;
  position: relative;
}
.conts:after{
  content: "",
  clear: both;
  display:block;
}
.conts .demo1{
  width: 200px;
  height: 200px;
  margin: 100px 10px 0 10px;
  background-color: #ffffff;
}
.conts .demo1 img{
  width: 100%;
}
.conts .demo1 .prot{
  width: 100px;
  height: 100px;
  border:3px solid #fff;
  overflow: hidden;
  border-radius: 50% 0;
  transition: all 0.5s;
  position: absolute;
  left:50px;
  top:-50px;
}
.conts .demo1:hover .prot{
  border-radius: 50%;
  border-color: #42b983;
}
.conts .demo1 .spo{
  width: 100%;
  height: 5px;
  line-height: 30px;
  text-align: center;
  background-color: #42b983;
  position: absolute;
  bottom: 0px;
  color: #fff;
  font-size: 12px;
  overflow: hidden;
  transition: all 0.5s;
}
.conts .demo1:hover .spo{
  height: 30px;
}
.conts .demo1 .info{
  text-align: center;
  font-size: 12px;
  padding:70px 15px 0 15px;
}
.conts .demo1 .info h3{
  margin-top: 10px;
}
.conts .demo2 .prot{
  border-radius: 0 50%;
}
.conts .demo2:hover .prot{
  border-color: orange;
}
.conts .demo2 .spo{
  background-color: orange;
}

.conts .demo3 .prot{
  border-radius: 0;
}
.conts .demo3:hover .prot{
  border-color: #1fb554;
}
.conts .demo3 .spo{
  background-color: #1fb554;
}

.conts .demo4 .prot{
  border-radius: 50% 50% 0 0;
}
.conts .demo4:hover .prot{
  border-color: #e5642b;
}
.conts .demo4 .spo{
  background-color: #e5642b;
}
</style>
<template>
<div class="bgs-vue">
  <div class="conts">
    <div class="demo demo1">
      <div class="prot">
          <img src="http://codehtml.cn/code-demo/resources/images/logo.png" alt="" srcset="">
      </div>
      <div class="info">
        <h3>CODE</h3>
        Whatever is worth doing is worth doing well.
      </div>
      <div class="spo">CODEHTML</div>
    </div>

    <div class="demo demo1 demo2">
      <div class="prot">
          <img src="http://codehtml.cn/code-demo/resources/images/logo.png" alt="" srcset="">
      </div>
      <div class="info">
        <h3>CODE</h3>
        Whatever is worth doing is worth doing well.
      </div>
      <div class="spo">CODEHTML</div>
    </div>
    <div class="demo demo1 demo3">
      <div class="prot">
          <img src="http://codehtml.cn/code-demo/resources/images/logo.png" alt="" srcset="">
      </div>
      <div class="info">
        <h3>CODE</h3>
        Whatever is worth doing is worth doing well.
      </div>
      <div class="spo">CODEHTML</div>
    </div>
    <div class="demo demo1 demo4">
      <div class="prot">
          <img src="http://codehtml.cn/code-demo/resources/images/logo.png" alt="" srcset="">
      </div>
      <div class="info">
        <h3>CODE</h3>
        Whatever is worth doing is worth doing well.
      </div>
      <div class="spo">CODEHTML</div>
    </div>
    <div style="clear:both;"></div>
  </div>
</div>
</template>
<script></script>
</script>