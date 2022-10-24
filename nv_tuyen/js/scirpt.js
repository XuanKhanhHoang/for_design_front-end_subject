var acc = document.getElementsByClassName("film");
var i;
var section = document.querySelector('.selection')
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    section.classList.add("active");
  })
}
document.getElementsByClassName('gio').onclicK = function () {
  alert('VUI LÒNG ĐĂNG NHẬP');
}
var gio = document.getElementsByClassName("gio");
for (i = 0; i < gio.length; i++) {
  gio[i].addEventListener("click", function () {
    alert('VUI LÒNG ĐĂNG NHẬP');
  })
}
$('.div2:eq(0)').click(function () {
  $('.p1-1').show();
  $('.p1-2').hide();
  $('.p1-3').hide();
  $('.p1-4').hide();
  $('.p1-5').hide();
});
$('.div2:eq(1)').click(function () {
  $('.p1-1').hide();
  $('.p1-2').show();
  $('.p1-3').hide();
  $('.p1-4').hide();
  $('.p1-5').hide();
});
$('.div2:eq(2)').click(function () {
  $('.p1-1').hide();
  $('.p1-2').hide();
  $('.p1-3').show();
  $('.p1-4').hide();
  $('.p1-5').hide();
});
$('.div2:eq(3)').click(function () {
  $('.p1-1').hide();
  $('.p1-2').hide();
  $('.p1-3').hide();
  $('.p1-4').show();
  $('.p1-5').hide();
});
$('.div2:eq(4)').click(function () {
  $('.p1-1').hide();
  $('.p1-2').hide();
  $('.p1-3').hide();
  $('.p1-4').hide();
  $('.p1-5').show();
});
$('.div:eq(5)').click(function () {
  $('.p1-1').hide();
  $('.p1-2').hide();
  $('.p1-3').hide();
  $('.p1-4').hide();
  $('.p1-5').hide();
});