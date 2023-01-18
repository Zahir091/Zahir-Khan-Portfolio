$(".htmlProjectPage, .pythonProjectPage, .otherProjectsPage, .aboutMePage").hide();
$(".homePage").show();

$("#html").click(function() {
  $(".htmlProjectPage").show();
  $(".homePage, .pythonProjectPage, .otherProjectsPage, .aboutMePage").hide();
});

$("#python").click(function() {
  $(".pythonProjectPage").show();
  $(".homePage, .htmlProjectPage, .otherProjectsPage, .aboutMePage").hide();
});

$("#homeButton").click(function() {
  $(".htmlProjectPage, .pythonProjectPage, .otherProjectsPage, .aboutMePage").hide();
  $(".homePage").show();
});

$("#other").click(function() {
  $(".htmlProjectPage, .pythonProjectPage, .homePage, .aboutMePage").hide();
  $(".otherProjectsPage").show();
});

$("#aboutMeButton").click(function() {
  $(".htmlProjectPage, .pythonProjectPage, .homePage, .otherProjectsPage").hide();
  $(".aboutMePage").show();
});

