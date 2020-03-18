# 多彩圆环

<vuep template="#demo1" class="full-page code-scroll"></vuep>

<script v-pre type="text/x-template" id="demo1">
<template>
<div class="loading-section">
  <div class="flex-section">
    <div class="item">
      <div>
        <ul class="strip-loading">
          <li></li><li></li><li></li><li></li><li></li><li></li>
        </ul>
        <p class="name">序号：01</p>
      </div>
    </div>
    <div class="item">
      <div>
        <div class="loading-02">
          <div class="finger finger-1">
            <div class="finger-item">
              <span></span><i></i>
            </div>
          </div>
          <div class="finger finger-2">
            <div class="finger-item">
              <span></span><i></i>
            </div>
          </div>
          <div class="finger finger-3">
            <div class="finger-item">
              <span></span><i></i>
            </div>
          </div>
          <div class="finger finger-4">
            <div class="finger-item">
              <span></span><i></i>
            </div>
          </div>
          <div class="last-finger">
            <div class="last-finger-item"><i></i></div>
          </div>
        </div>
        <p class="name">序号：02</p>
      </div>
    </div>
    <div class="item">
      <div>
        <div class="loading-03">
          <span></span>
        </div>
        <p class="name">序号：03</p>
      </div>
    </div>
    <div class="item">
      <div>
        <div class="loading-04">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <p class="name">序号：04</p>
      </div>
    </div>
    <div class="item">
      <div>
        <div class="loading-05">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        <p class="name">序号：05</p>
      </div>
    </div>
    <div class="item">
      <div>
        <div class="loading-06">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <p class="name">序号：06</p>
      </div>
    </div>
    <div class="item">
      <div>
        <div class="loading-07">
          <span></span><span></span><span></span><span></span><span></span>
        </div>
        <p class="name">序号：07</p>
      </div>
    </div>
    <div class="item">
      <div>
        <div class="loading-08">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        <p class="name">序号：08</p>
      </div>
    </div>
    <div class="item">
      <div>
        <div class="loading-09">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <p class="name">序号：09</p>
      </div>
    </div>
    <div class="item">
      <div>
        <div class="loading-10">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <p class="name">序号：10</p>
      </div>
    </div>
    <div class="item">
      <div>
        <div class="loading-11">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <p class="name">序号：11</p>
      </div>
    </div>
    <div class="item">
      <div>
        <div class="loading-12"></div>
        <p class="name">序号：12</p>
      </div>
    </div>
  </div>
  
</div>
</template>
<script></script>
</script>

### `css代码` 

[请查看：loading-css](http://codehtml.cn/front-end-demo/assets/css/loading.css)

- 序号01
```css
.strip-loading li {
  border-radius: 3px;
  width: 6px;
  height: 30px;
  background-color: #f66;
  animation: beat 1s ease-in-out infinite;
}
.strip-loading li + li {
  margin-left: 5px;
}
.strip-loading li:nth-child(2) {
  animation-delay: 200ms;
}
.strip-loading li:nth-child(3) {
  animation-delay: 400ms;
}
.strip-loading li:nth-child(4) {
  animation-delay: 600ms;
}
.strip-loading li:nth-child(5) {
  animation-delay: 800ms;
}
.strip-loading li:nth-child(6) {
  animation-delay: 1s;
}
```

- 序号02

```css
.loading-02{
  width: 112px;
  height: 70px;
  *zoom: 1;
  margin: 0 auto;
}
.loading-02:before,
.loading-02:after {
  display: table;
  content: "";
}
.loading-02:after {
  clear: both;
}

.loading-02 .finger{
  float:left;
  margin:0 2px 0 0;
  width: 20px;
  height: 100%;
}
.loading-02 .finger-1{
  animation: finger-1-animation 2s ease-out infinite;
}
.loading-02 .finger-1 span{
  animation: finger-1-animation-span 2s ease-out infinite;
}
.loading-02 .finger-1 i{
  animation: finger-1-animation-i 2s ease-out infinite;
}
.loading-02 .finger-2{
  animation: finger-2-animation 2s ease-out infinite;
}
.loading-02 .finger-2 span{
  animation: finger-2-animation-span 2s ease-out infinite;
}
.loading-02 .finger-2 i{
  animation: finger-2-animation-i 2s ease-out infinite;
}
.loading-02 .finger-3{
  animation: finger-3-animation 2s ease-out infinite;
}
.loading-02 .finger-3 span{
  animation: finger-3-animation-span 2s ease-out infinite;
}
.loading-02 .finger-3 i{
  animation: finger-3-animation-i 2s ease-out infinite;
}
.loading-02 .finger-4{
  animation: finger-4-animation 2s ease-out infinite;
}
.loading-02 .finger-4 span{
  animation: finger-4-animation-span 2s ease-out infinite;
}
.loading-02 .finger-4 i{
  animation: finger-4-animation-i 2s ease-out infinite;
}
.loading-02 .finger-item{
  position:relative;
  width: 100%;
  height: 100%;
  border-radius:6px 6px 8px 8px;
  background:#fff;
}
.loading-02 .finger-item span{
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height: auto;
  padding:5px 5px 0 5px;
}
.loading-02 .finger-item span:before,
.loading-02 .finger-item span:after{
  content:'';
  position:relative;
  display:block;
  margin:0 0 2px 0;
  width: 100%;
  height: 2px;
  background:#30333A;
}
.loading-02 .finger-item i{
  position:absolute;
  left:3px;
  bottom:3px;
  width: 14px;
  height: 14px;
  border-radius:10px 10px 7px 7px;
  background:#30333A;
}
.loading-02 .last-finger{
  position:relative;
  float:left;
  width: 24px;
  height: 100%;
  overflow:hidden;
}
.loading-02 .last-finger-item{
  position:absolute;
  right:0;
  top:32px;
  width: 110%;
  height: 20px;
  border-radius:0 5px 14px 0;
  background:#fff;
  animation: finger-5-animation 2s ease-out infinite;
}
.loading-02 .last-finger-item i{
  position:absolute;
  left:0;
  top:-8px;
  width: 22px;
  height: 8px;
  background:#fff;
  overflow:hidden;
}
.loading-02 .last-finger-item i:after{
  content:'';
  position:absolute;
  left:0;
  bottom:0;
  width: 34px;
  height: 20px;
  border-radius:0 0 15px 15px;
  background:#30333A;
}

```
