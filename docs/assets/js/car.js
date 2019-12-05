;(function () {

  setTimeout(function () {
    var cstyle =
    "line-height:2;background:#2B2E31;color:#FFD950;font-family:monospace;";
    console.log("%c     made by the @keyframers     ", cstyle);
    console.log("https://twitter.com/keyframers  https://youtube.com/keyframers");
  }, 100);

  var el = document.querySelector('[data-keyframers-credit]');

  if (el) {


    el.className += ' kf_credit';

    var hasText = el.innerHTML.length;
    // console.log('hasText', hasText);
    // if ( !hasText ) { 
    //   el.innerHTML = '<span>Watch the @keyframes code this pen live!</span>';
    // }

    el.insertAdjacentHTML('afterbegin', `
<div class="kf_credit_logo">
<svg viewBox="0 0 122 68" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linecap="round" stroke-miterlimit="1.5">
  <path d="M33.807 6.788L6.654 33.941l27.153 27.153L60.96 33.941 33.807 6.788zM88.113 6.788L60.96 33.941l27.153 27.153 27.153-27.153L88.113 6.788z" fill="none" stroke="#ffde09" stroke-width="7.2"/>
  <path d="M60.96 0L27.019 33.941 60.96 67.882l33.941-33.941L60.96 0z" fill="#ffde09"/>
  <path d="M70.56 43.541l-9.6-9.6 9.6-9.6M55.68 21.941V46.11" fill="none" stroke="#333" stroke-width="7.2" stroke-linecap="butt"/>
</svg>
</div>`);

    if (!hasText) {
      el.insertAdjacentHTML('afterbegin', '<span>Watch this tutorial</span> ');
      el.insertAdjacentHTML('beforeend', ' <span>by the @keyframers!</span>');
    }

    document.head.insertAdjacentHTML('beforeend', `<style>
.kf_credit {
  position: fixed;
  bottom: 0.5em;
  left: 0;
  right: 0;
  z-index: 999;
  margin: auto;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: monospace;
  font-size: 10px;
  line-height: 1;
  text-align: center;
  transition: all 0.4s cubic-bezier(.84,.01,.14,.98);
  animation: kf_credit_slide-in 0.8s cubic-bezier(.06,.44,0,.98) 0.4s both;
}
@keyframes kf_credit_slide-in { from { transform: translateY(100%); opacity: 0; } }

.kf_credit_logo { 
  position: relative;
  width: 6em;
  height: 3em;
  padding: .5em;
  perspective: 400px;
  transform-style: preserve-3d;
}

</style>`);

    el.onclick = function () {
      if (ga) {
        var url = this.getAttribute('href');
        ga('send', 'event', 'keyframers', 'click', url, {
          'transport': 'beacon',
          'hitCallback': function () {window.open(url);} });

        return false;
      }
    };

  }

})();