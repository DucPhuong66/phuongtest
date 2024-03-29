// Show the first tab and hide the rest PC
$(".jobsTab li:first-child").addClass("on");
$(".sliderContent").hide();
$(".sliderContent:first").show();

// Click function PC
$(".jobsTab li").click(function () {
  $(".jobsTab li").removeClass("on");
  $(this).addClass("on");
  $(".sliderContent").hide();

  var activeTab = $(this).find("a").attr("href");
  $(activeTab).fadeIn();
  return false;
});

$("#latestWorks .jobsTab li").click(function () {
  $(this).parent().toggleClass("active");
  $(".fa-angle-down").remove();
  $(this).append('<i class="sp fa-solid fa-angle-down"></i>');
});

// Show the first tab and hide the rest MB
$(".workList").hide();
$(".workList:first").css("display", "flex");

// Click function MB
$(".jobsTab li").click(function () {
  $(".workList").hide();
  var activeTab = $(this).find("a").attr("href");
  $(activeTab + ".workList ").fadeIn();
  return false;
});

$(".defaultLang").click(function () {
  $(this).parent().toggleClass("active");
});

$(".langMb li").click(function () {
  var current = $(this).html();
  $(".defaultLang").html(current);
});

$(".menuBtn").click(function () {
  $(".menuBox").toggleClass("active");
});

$(".close").click(function () {
  $(".menuBox").toggleClass("active");
});

//lang Btn
$(function () {
  var dd1 = new dropDown($("#myDropdown"));

  $(document).click(function () {
    $(".wrapper-dropdown").removeClass("active");
  });
});

function dropDown(el) {
  this.dd = el;
  this.placeholder = this.dd.children("span");
  this.opts = this.dd.find("ul.dropdown > li");
  this.val = "";
  this.index = -1;
  this.initEvents();
}
dropDown.prototype = {
  initEvents: function () {
    var obj = this;

    obj.dd.on("click", function () {
      $(this).toggleClass("active");
      return false;
    });

    obj.opts.on("click", function () {
      var opt = $(this);
      obj.val = opt.text();
      obj.index = opt.index();
      obj.placeholder.text(obj.val);
    });
  },
};

let width = $(window).width();
if (width > 768) {
  var swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },

    slidesPerView: 3,
    spaceBetween: 24,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
} else {
  $(".overlay .name br").remove();
}
