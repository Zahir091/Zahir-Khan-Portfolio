$(".projectPage").hide();
$(".homePage").show();

$("#projectsButton").click(function() {
  $(".projectPage").show();
  $(".homePage").hide();
});

$(".navLeft").click(function() {
  $(".projectPage").hide();
  $(".homePage").show();
});