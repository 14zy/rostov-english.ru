currentSchool = schools[window.school];

$("#header").load('layout/templates/header.html');
$("#footer").load('layout/templates/footer.html');

$("#sidebar").load('layout/templates/sidebar.html', function() {
  $("#imgLogo").attr("src", window.school + "/images/logo.png");
  $("#txtYear").html(currentSchool.year);
  $("#txtAddress1").html(currentSchool.contacts.adressess.address1);
  $("#linkPhone").attr("href", "tel:" + currentSchool.contacts.phone.link);
  $("#txtPhone").html(currentSchool.contacts.phone.txt);
  $("#linkWebsite").attr("href", "http://" + currentSchool.contacts.website);
  $("#txtWebsite").html(currentSchool.contacts.website);
  $("#addReview").attr("href", "mailto:info@rostov-english.ru?subject=Отзыв%20на%20" + currentSchool.name + "&body=Ваше%20имя:%0AОтзыв:");

  VK.Widgets.Group("vk_groups2", {
    mode: 0,
    width: "192",
    height: "400",
    color1: 'FFFFFF',
    color2: '2B587A',
    color3: '5B7FA6'
  }, currentSchool.contacts.socialMedia.vkontakte);
});

$("#txtTitle").html(currentSchool.fullName);

$(function() {
  $('#slideshow').cycle({
    fx: 'fade',
    timeout: 6000,
    pager: '#slideshow-nav',
    pagerAnchorBuilder: function(idx, slide) {
      // return sel string for existing anchor
      return '#slideshow-nav li:eq(' + (idx) + ') a';
    },
    speed: 'slow'
  });
  $('#direct').click(function() {
    $('#nav li:eq(2) a').triggerHandler('click');
    return false;
  });
});
