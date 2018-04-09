# 好看的背景渐变

<vuep template="#demo1" class="full-page"></vuep>

<script v-pre type="text/x-template" id="demo1">
<style>
  section{width: 820px;margin: 0 auto;}
  ul{-webkit-padding-start: 0px;}
  section::after{
    content: "";
    clear: both;
  }
  section ul li{
    list-style: none;
    width: 400px;float: left;
    height: 200px;
    margin-bottom: 20px;
    color: #fff;text-align: center;
    line-height: 200px;
    font-size: 30px;
    font-weight: bold;
  }

  section ul li:nth-child(2n+2){float: right;}

  section ul li:nth-child(1){
    background: linear-gradient(to right,#abdcff,#0396ff);
  }
  section ul li:nth-child(2){
    background: linear-gradient(to right,#efb692,#ea5455);
  }

  section ul li:nth-child(3){
    background: linear-gradient(to right,#ce9ffc,#7367f0);
  }
  section ul li:nth-child(4){
    background: linear-gradient(to right,#90f7ec,#32ccbc);
  }

  section ul li:nth-child(5){
    background: linear-gradient(to right,#fff6b7,#f6416c);
  }
  section ul li:nth-child(6){
    background: linear-gradient(to right,#e2b0ff,#9f44d3);
  }

  section ul li:nth-child(7){
    background: linear-gradient(to right,#f97794,#623aa2);
  }
  section ul li:nth-child(8){
    background: linear-gradient(to right,#f761a1,#8c1bab);
  }
  
  section ul li:nth-child(9){
    background: linear-gradient(to right,#43cbff,#9708cc);
  }
  section ul li:nth-child(10){
    background: linear-gradient(to right,#fad7a1,#e96d71);
  }

  section ul li:nth-child(11){
    background: linear-gradient(to right,#52e5e7,#130cb7);
  }
  section ul li:nth-child(12){
    background: linear-gradient(to right,#f05f57,#360940);
  }

  section ul li:nth-child(13){
    background: linear-gradient(to right,#2afadf,#4c83ff);
  }
  section ul li:nth-child(14){
    background: linear-gradient(to right,#fff886,#f072b6);
  }

  section ul li:nth-child(15){
    background: linear-gradient(to right,#97abff,#123597);
  }
  section ul li:nth-child(16){
    background: linear-gradient(to right,#ff6fd8,#3813c2);
  }

  section ul li:nth-child(17){
    background: linear-gradient(to right,#ee9ae5,#5961f9);
  }
  section ul li:nth-child(18){
    background: linear-gradient(to right,#ffd3a5,#fd6585);
  }

  section ul li:nth-child(19){
    background: linear-gradient(to right,#fd6585,#0d25b9);
  }
  section ul li:nth-child(20){
    background: linear-gradient(to right,#ff7af5,#513162);
  }

  section ul li:nth-child(21){
    background: linear-gradient(to right,#ffe985,#fa742b);
  }
  section ul li:nth-child(22){
    background: linear-gradient(to right,#ffa6b7,#1e2ad2);
  }

  section ul li:nth-child(23){
    background: linear-gradient(to right,#ffaa85,#b3315f);
  }
  section ul li:nth-child(24){
    background: linear-gradient(to right,#72edf2,#5151e5);
  }

  section ul li:nth-child(25){
    background: linear-gradient(to right,#ff9d6c,#bb4e75);
  }
  section ul li:nth-child(26){
    background: linear-gradient(to right,#3b2667,#bc78ec);
  }

  section ul li:nth-child(27){
    background: linear-gradient(to right,#fab2ff,#1904e5);
  }
</style>
<template>
<section>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
    <li>11</li>
    <li>12</li>
    <li>13</li>
    <li>14</li>
    <li>15</li>
    <li>16</li>
    <li>17</li>
    <li>18</li>
    <li>19</li>
    <li>20</li>
    <li>21</li>
    <li>22</li>
    <li>23</li>
    <li>24</li>
    <li>25</li>
    <li>26</li>
    <li>27</li>
  </ul>
</section>
</template>
<script></script>
</script>