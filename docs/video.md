# Video的深入使用

?> HTML `<video>` 元素 用于在HTML或者XHTML文档中嵌入视频内容

## 属性

- ### **controls**

?> 设置或返回视频是否应该显示控件（比如播放/暂停等）

```html
<video src="http://codehtml.cn/code-demo/video/mt-baker_cibsgl.mp4" width="100%" controls></video>
```

<video src="http://codehtml.cn/code-demo/video/mt-baker_cibsgl.mp4" width="100%" controls></video>

- ### **autoplay**

?> 设置或返回是否在就绪（加载完成）后自动播放视频

```html
<video src="http://codehtml.cn/code-demo/video/mt-baker_cibsgl.mp4" width="100%" controls autoplay></video>
```

<video src="http://codehtml.cn/code-demo/video/mt-baker_cibsgl.mp4" width="100%" controls autoplay></video>

- ### nodownload

?> 设置是否去除去除下载按钮nodownload

```html
<video src="http://codehtml.cn/code-demo/video/mt-baker_cibsgl.mp4" width="100%" controls controlslist="nodownload"></video>
```

<video src="http://codehtml.cn/code-demo/video/mt-baker_cibsgl.mp4" width="100%" controls controlslist="nodownload"></video>

- ### nofullscreen

?> 设置是否去除全屏显示按钮

```html
<video src="http://codehtml.cn/code-demo/video/mt-baker_cibsgl.mp4" width="100%" controls controlslist="nodownload nofullscreen"></video>
```

<video src="http://codehtml.cn/code-demo/video/mt-baker_cibsgl.mp4" width="100%" controls controlslist="nodownload nofullscreen"></video>

- ### poster

?> 设置视频的封面

```html
<video src="http://codehtml.cn/code-demo/video/mt-baker_cibsgl.mp4" width="100%" controls poster="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526349212159&di=d6e00c2a2102cac0b50e0e622aa02618&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201411%2F06%2F20141106104720_WHEe2.jpeg"></video>
```

<video src="http://codehtml.cn/code-demo/video/mt-baker_cibsgl.mp4" width="100%" controls poster="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526349212159&di=d6e00c2a2102cac0b50e0e622aa02618&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201411%2F06%2F20141106104720_WHEe2.jpeg"></video>

- ### muted

?> 设置是否静音（`注意：移动端非静音模式下无法自动播放`）

```html
<video src="http://codehtml.cn/code-demo/video/code.mp4" width="100%" controls muted></video>
```

<video src="http://codehtml.cn/code-demo/video/code.mp4" width="100%" controls muted></video>

- ### loop

?> 设置循环播放

```html
<video src="http://codehtml.cn/code-demo/video/mt-baker_cibsgl.mp4" width="100%" controls loop></video>
```

<video src="http://codehtml.cn/code-demo/video/mt-baker_cibsgl.mp4" width="100%" controls loop></video>

- ### preload

?> 视频预加载模式

```html
<video src="http://codehtml.cn/code-demo/video/mt-baker_cibsgl.mp4" width="100%" controls preload></video>
```

- ### volume

?> 音量控制，区间范围在0-1

```html
<video src="http://codehtml.cn/code-demo/video/code.mp4" width="100%" controls id="volume"></video>

var time = document.getElementById("time");
time.currentTime = 60;// 秒
```

- ### 播放时间控制

```html
<video src="http://codehtml.cn/code-demo/video/code.mp4" width="100%" controls preload id="time"></video>
<script type="text/javascript">
  var time = document.getElementById("time");
  time.currentTime = 60;// 秒
</script>
```

- ### 播放地址切换

```html
<video src="http://codehtml.cn/code-demo/video/code.mp4" width="100%" controls preload id="_src"></video>
<script type="text/javascript">
  var _src = document.getElementById("_src");
  function changeSrc(){
    _src.src = "http://codehtml.cn/code-demo/video/mt-baker_cibsgl.mp4";
  }
</script>
```

- ### 备用地址切换

```html
<video width="100%" controls id="_source">
  <source src="http://codehtml.cn/code-demo/video/code1.mp4" type="video/mp4"> // 错误地址
  <source src="http://codehtml.cn/code-demo/video/mt-baker_cibsgl.mp4" type="video/mp4">
</video>
<script type="text/javascript">
  var _source = document.getElementById("_source");
  setTimeout(function () { 
    console.log(_source.currentSrc);// 获取当前url
  },2000)
</script>
```

- ### 播放速度

```html
<video src="http://codehtml.cn/code-demo/video/code.mp4" width="100%" controls preload id="_speed"></video>
<script type="text/javascript">
  var _speed = document.getElementById("_speed");
  _speed.playbackRate = 0.5;
</script>
```

## 事件

?> <video src="http://codehtml.cn/code-demo/video/code.mp4" width="100%" controls id="vs"></video>

- ### loadstart

?> 当浏览器开始寻找指定的音频/视频时，会发生 loadstart 事件。即当加载过程开始时

```js
v.addEventListener('loadstart',function(e){
  console.log("loadstart");
})
```

- ### durationchange

?> 音频/视频的时长

```js
v.addEventListener('durationchange',function(e){
  console.log("时长", v.duration);
})
```

- ### loadedmetadata

?> 当浏览器已经加载完成视频

```js
v.addEventListener('loadedmetadata',function(e){
  console.log("loadedmetadata");
})
```

- ### loadeddata

?> 当浏览器已加载视频的当前帧时

```js
v.addEventListener('loadeddata',function(e){
  console.log("loadeddata");
})
```

- ### progress

?> 当浏览器正在下载视频

```js
v.addEventListener('progress',function(e){
  console.log("progress");
})
```

- ### canplay

?> 判断是否可以播放

```js
v.addEventListener('canplay',function(){
  console.log('canplay');
})
```

- ### canplaythrough

?> 判断是否可以流畅播放

```js
v.addEventListener('canplaythrough',function(){
  console.log('canplaythrough');
})
```

- ### play

?> 视频播放

```js
v.addEventListener('play',function(){
  console.log('play');
})
```

- ### pause

?> 视频暂停

```js
v.addEventListener('pause',function(){
  console.log('pause');
})
```

- ### seeking

?> 当用户开始移动/跳跃到音视频中的新位置时

```js
v.addEventListener('seeking',function(){
  console.log('seeking');
})
```

- ### seeked

?> 当用户已移动/跳跃到视频中的新位置

```js
v.addEventListener('seeked',function(){
  console.log('seeked');
})
```

- ### waiting

?> 当视频由于需要缓冲下一帧而停止，等待

```js
v.addEventListener('waiting',function(){
  console.log('waiting');
})
```

- ### playing

?> 当视频在已因缓冲而暂停或停止后已就绪时

```js
v.addEventListener('playing',function(){
  console.log('playing');
})
```

- ### timeupdate

?> 目前的播放位置已更改时，播放时间更新

```js
v.addEventListener('timeupdate',function(){
  console.log('timeupdate');
})
```

- ### ended

?> 播放结束

```js
v.addEventListener('ended',function(){
  console.log('ended');
})
```

- ### error

?> 播放错误

```js
v.addEventListener('error',function(e){
  console.log('error', e);
})
```

- ### volumechange

?> 当音量已更改时

```js
v.addEventListener('volumechange',function(){
  console.log('volumechange');
})
```

- ### stalled

?> 当浏览器尝试获取媒体数据，但数据不可用时

```js
v.addEventListener('stalled',function(){
  console.log('stalled');
})
```

- ### ratechange

?> 当视频的播放速度已更改时

```js
v.addEventListener('ratechange',function(){
  console.log('ratechange');
})
```

**参考资料：**

[MDN: video](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)

[HTML的媒体支持:audio和video元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Supported_media_formats)

[HTML 5 视频/音频参考手册](http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp)
