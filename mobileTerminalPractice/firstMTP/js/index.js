

(function (doc, win) {
  var docEl = doc.documentElement,
    /* 声明一个变量等于一个HTML元素 */
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    /* resize用户可调节元素大小-orientationchange屏幕翻转时 */
    /* 在用户翻转设备时 ，调整元素大小*/
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 100 * (clientWidth / 750) + "px";
    };
  /*  */
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false); /* 添加文档点击事件 */
  doc.addEventListener("DOMContentLoaded", recalc, false);
  // alert("REMsucess");
  console.warn("REMsucess");
})(document, window);
console.warn("JSsucess");