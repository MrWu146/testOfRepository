const a = "删除";
const b = "恢复";
var i = a;
$(function () {
  const a = "删除";
  const b = "恢复";
  var i = a;
  $(".btn-del").text(a);
  $(".btn-del").click(function () {
    if (i == a) {
      $(".containerFirst").hide(), $(".btn-del").text(b), (i = b);
        // alert(i);
    } else {
    i = a, $(".btn-del").text(a), $(".containerFirst").show();
        // alert(i);
    }
  });
  $(function () {
    $(".btn-head").click(function () {
      if (i == b) {
        // alert("现在退出 推广信息将会删除");
      }else{
          window.location.href = "../index.html",
          i=a;
      }
    });
  });
});



// var btnContent = ["删除", "恢复"];
//   $(".btn-del").text(a);
// var btnContent = new Array;
// btnContent[0] = "删除";
// btnContent[1] = "恢复";
// console.warn("Delsucess");

// $(function (){
//     console.warn("Delsucess");
//     $(".btn-del").click(function(){
//         $(".containerFirst",".btn-del").remove();
//     })
// });
// function test(){
//     console.warn("Delsucess");
// }

// $(document).ready(function(){
//     console.warn("Delsucess");

//   });
