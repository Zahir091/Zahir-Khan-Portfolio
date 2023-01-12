$(".htmlProjectPage, .pythonProjectPage, .otherProjectsPage, .aboutMePage, .contactsPage").hide();
$(".homePage").show();

$("#html").click(function() {
  $(".htmlProjectPage").show();
  $(".homePage, .pythonProjectPage, .otherProjectsPage, .aboutMePage, .contactsPage").hide();
});

$("#python").click(function() {
  $(".pythonProjectPage").show();
  $(".homePage, .htmlProjectPage, .otherProjectsPage, .aboutMePage, .contactsPage").hide();
});

$("#homeButton").click(function() {
  $(".htmlProjectPage, .pythonProjectPage, .otherProjectsPage, .aboutMePage, .contactsPage").hide();
  $(".homePage").show();
});

$("#other").click(function() {
  $(".htmlProjectPage, .pythonProjectPage, .homePage, .aboutMePage, .contactsPage").hide();
  $(".otherProjectsPage").show();
});

$("#aboutMeButton").click(function() {
  $(".htmlProjectPage, .pythonProjectPage, .homePage, .otherProjectsPage, .contactsPage").hide();
  $(".aboutMePage").show();
});

$("#contactsButton").click(function() {
  $(".htmlProjectPage, .pythonProjectPage, .homePage, .otherProjectsPage, .aboutMePage").hide();
  $(".contactsPage").show();
});
