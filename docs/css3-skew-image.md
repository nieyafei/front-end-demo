# 图片列表展示效果

?> `grid`、`transform` 、`transition`

<vuep template="#demo1" class="full-page"></vuep>
<script v-pre type="text/x-template" id="demo1">
<style>
  .main-cons{
    background: #F7F5F2;
    padding:100px 0;
  }
  .container{
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 60px;
  }
  .container .item{
    position: relative;
    transform: skew(-10deg);
    transition: all 0.25s;
  }
  
  .container .item .card{
    height: 200px;
    background: #808080;
    border-radius: 40px;
    overflow: hidden;
    position: relative;
    transition: all 0.25s;
  }
  .container .item::before{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    border-radius: 40px;
    opacity: 0;
    border: 2px solid #373f51;
    transition: all 0.5s 0.05s; 
  }
  .container .item .card::after{
    content: " ";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background: url("http://img.hb.aicdn.com/3f8e4597fdfba9da223f56301bc59a22692d972b112463-N0jS1j_fw658") no-repeat;
    background-size:cover;
    background-blend-mode: screen; 
    width: 100%;
    height: 100%;
    z-index: 2; 
    transform: skew(10deg) scale(1.2);
    transition:all 0.2s;
    background-color: #373f51;
  }

  .container .item:hover::before{
    transform: translate(10px,10px);
    opacity: 1;
  }
  .container .item:hover .card::after{
    background-blend-mode: normal;
  }
  .container .item:hover .card{
    transform: translate(-10px,-10px);
  }
</style>
<template>
<div class="main-cons">
  <div class="container">
    <div class="item">
      <div class="card">
      </div>
    </div>
    <div class="item">
      <div class="card">
      </div>
    </div>
    <div class="item">
      <div class="card">
      </div>
    </div>
    <div class="item">
      <div class="card">
      </div>
    </div>
    <div class="item">
      <div class="card">
      </div>
    </div>
    <div class="item">
      <div class="card">
      </div>
    </div>
    <div class="item">
      <div class="card">
      </div>
    </div>
    <div class="item">
      <div class="card">
      </div>
    </div>
    <div class="item">
      <div class="card">
      </div>
    </div>
  </div>
</div>
</template>
<script></script>
</script>