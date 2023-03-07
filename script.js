$("#projects").show();
$(".aboutMePage").hide();

$("#aboutMeButton").click(function() {
  $("#projects").hide();
  $(".aboutMePage").show();
});

$("#projectsButton, #html, #python, #other").click(function() {
    $("#projects").show();
  $(".aboutMePage").hide();
})