# 圣杯布局

<vuep template="#demo1"></vuep>
<script v-pre type="text/x-template" id="demo1">
<style>
  .root{
    width: 90%;
    margin: 30px auto;
  }
  header,footer{
    height: 100px;
    background: #D2B48C;
    text-align: center;
    line-height: 100px;
  }
  footer{
    clear: both;
  }
  .container{
    overflow: hidden;
  }
  .container > div{
    float: left;
  }
  .container .middle{
    padding: 0 150px;
    width: 100%;
    background: #FCFAF3;
    margin-bottom: -9999px;
    padding-bottom: 9999px;
    
  }
  .container .left{
    width: 150px;
    background: #BC8F8F;
    margin-left: -100%;
    margin-bottom: -9999px;
    padding-bottom: 9999px;
  }
  .container .right{
    width: 150px;
    background: #657C89;
    margin-left: -150px;
    margin-bottom: -9999px;
    padding-bottom: 9999px;
  }
</style>
<template>
  <div class="root">
    <header>我是header</header>
    <div class="container">
      <div class="middle">
        我是middle
        蒹葭苍苍，白露为霜。所谓伊人，在水一方。
        溯洄从之，道阻且长。溯游从之，宛在水中央。
        蒹葭萋萋，白露未晞。所谓伊人，在水之湄。
        溯洄从之，道阻且跻。溯游从之，宛在水中坻。
        蒹葭采采，白露未已。所谓伊人，在水之涘。
        溯洄从之，道阻且右。溯游从之，宛在水中沚。
      </div>
      <div class="left">
        我是left<br/>
        译文
河边芦苇青苍苍，秋深露水结成霜。 意中之人在何处？就在河水那一方。
逆着流水去找她，道路险阻又太长。 顺着流水去找她，仿佛在那水中央。
河边芦苇密又繁，清晨露水未曾干。 意中之人在何处?就在河岸那一边。
逆着流水去找她，道路险阻攀登难。 顺着流水去找她，仿佛就在水中滩。
河边芦苇密稠稠，早晨露水未全收。 意中之人在何处?就在水边那一头。
逆着流水去找她，道路险阻曲难求。 顺着流水去找她，仿佛就在水中洲。
      </div>
      <div class="right">
        我是right
      </div>
    </div>
    <footer>我是footer</footer>
  </div>
</template>
<script></script>
</script>
