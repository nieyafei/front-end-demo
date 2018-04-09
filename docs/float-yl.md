# 跳动的幽灵

<vuep template="#demo1" class="full-page"></vuep>
<script v-pre type="text/x-template" id="demo1">
<style>
.main1{
  padding-top: 100px;width: 400px;display: inline-block;
}
.demo1-cons{
  width: 120px;
  margin: 0 auto 60px;
  position: relative;
  animation: antion 2s infinite;
  -webkit-animation: antion 2s infinite;
}
.demo1-cons .sp1{
  width: 120px;
  height: 150px;
  background-color: orange;
  border-radius: 50% 50% 0 0;
}
.demo1-cons .sp2,.demo1-cons .sp3,.demo1-cons .sp4{
  position: absolute;
  display: inline-block;
  width: 14px;
  height: 20px;
  border:2px solid #fff;
  border-radius: 50%;
  top:50px;
  left: 30px;
}
.demo1-cons .sp2::before,.demo1-cons .sp3::before{
  content: "";
  display: block;
  width: 12px;
  height: 17px;
  border-radius: 50%;
  background-color: #fff;
  margin-left: -1px;
  float: left;
  overflow: hidden;
}
.demo1-cons .sp3{
  left: 75px;
}
.demo1-cons .sp4{
  left: 55px;
  top: 90px;
}

.demo1-cons .sp5{
  height: 10px;
  background-size: 15px 10px;
  background-image: radial-gradient(circle at 50% 0%,orange,71%,transparent 71%)
}
.main2 .demo1-cons .sp1{
  background-color: #1E90FF;
}
.main2 .demo1-cons .sp5{
  background-repeat: repeat-x;height: 15px;
  background-size: 12px 10px;
  background-image: linear-gradient(135deg, #1E90FF 45%, transparent 55%, transparent 60%),linear-gradient(45deg, transparent 45%, transparent 55%,  #1E90FF 60%);
}

.demo1-cons .sp6{
  width: 120px;
  height: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  animation: antionBg 2s infinite;
  -webkit-animation: antionBg 2s infinite;
}

/* 动画 */
</style>
<template>
<div class="main-center">
  <div class="main1">
    <div class="demo1-cons">
      <div class="sp1"></div>
      <div class="sp2"></div>
      <div class="sp3"></div>
      <div class="sp4"></div>
      <div class="sp5"></div>
      <div class="sp6"></div>
    </div>
  </div>
  <div class="main1 main2">
    <div class="demo1-cons">
      <div class="sp1"></div>
      <div class="sp2"></div>
      <div class="sp3"></div>
      <div class="sp4"></div>
      <div class="sp5"></div>
      <div class="sp6"></div>
    </div>
  </div>
</div>
</template>
<script></script>
</script>

### `动画keyframes`

```
@keyframes antion {
  0%{
      margin-top: 60px;
  }
  50%{
      margin-top: 10px;
  }
  100%{
      margin-top: 60px;
  }
}
@keyframes antionBg {
  0%{
      margin-top: 10px;
      background-color: rgba(0, 0, 0, 0.3);
      transform: scale(1.1);
  }
  50%{
      margin-top: 60px;
      background-color: rgba(0, 0, 0, 0.5);
      transform: scale(1);
  }
  100%{
      margin-top: 10px;
      background-color: rgba(0, 0, 0, 0.3);
      transform: scale(1.1);
  }
}
```