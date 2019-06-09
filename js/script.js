$(document).ready(function(){
  // плавный скрол
  $(".footer-btn").click(function () {
  elementClick = $(this).attr("href");
  destination = $(elementClick).offset().top;
  event.preventDefault();
  $("body,html").animate({scrollTop: destination }, 2000);
  });
});