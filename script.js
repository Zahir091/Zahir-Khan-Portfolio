$(".htmlProjectPage, .pythonProjectPage, .otherProjectsPage, .aboutMePage, .contactsPage").hide();
$(".homePage").show();

$("#html").click(function() {
  $(".htmlProjectPage").show();
  $(".homePage, .pythonProjectPage, .otherProjectsPage, .aboutMePage, .contactsPage").hide();
});

$("#python").click(function() {
  $(".pythonProjectPage").show();
  $(".homePage, .otherProjectsPage, .htmlProjectPage, .aboutMePage, .contactsPage").hide();
});

$("#other").click(function() {
  $(".otherProjectsPage").show();
  $(".homePage, .pythonProjectPage, .htmlProjectPage, .aboutMePage, .contactsPage").hide();
});

$("#homeButton").click(function() {
  $(".htmlProjectPage, .pythonProjectPage, .otherProjectsPage, .aboutMePage, .contactsPage").hide();
  $(".homePage").show();
});

$("#aboutMeButton").click(function() {
  $(".aboutMePage").show();
  $(".homePage, .otherProjectsPage, .htmlProjectPage, .pythonProjectPage, .contactsPage").hide();
});

$("#contactsButton").click(function() {
  $(".contactsPage").show();
  $(".homePage, .otherProjectsPage, .htmlProjectPage, .aboutMePage, .pythonProjectPage").hide();
});