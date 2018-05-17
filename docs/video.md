# Video的深入使用

?> HTML `<video>` 元素 用于在HTML或者XHTML文档中嵌入视频内容

## 属性

- ### **controls**

?> 设置或返回视频是否应该显示控件（比如播放/暂停等）

```html
<video src="./mt-baker_cibsgl.mp4" width="100%" controls></video>
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

<video src="http://codehtml.cn/code-demo/video/code.mp4" width="100%" controls id="volume"></video>
<script type="text/javascript">
  var volume = document.getElementById("volume");
  volume.volume = 0.5;
</script>

## 事件


**参考资料：**

[MDN: video](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/video)

[HTML的媒体支持:audio和video元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Supported_media_formats)

