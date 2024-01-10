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

  $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $("#navbar").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("#navbar").removeClass("active");
    }
});

// Show the first tab and hide the rest PC
$('.jobsTab li:first-child').addClass('on');
$('.sliderContent').hide();
$('.sliderContent:first').show();

// Click function PC
$('.jobsTab li').click(function(){
  $('.jobsTab li').removeClass('on');
  $(this).addClass('on');
  $('.sliderContent').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});


// Show the first tab and hide the rest MB
$('.workList').hide();
$('.workList:first').css('display', 'flex');
 

// Click function MB
$('.jobsTab li').click(function(){
  $('.workList').hide();
 
  var activeTab = $(this).find('a').attr('href');
  $(activeTab+'.workList ').fadeIn();
  return false;
});

$('.defaultLang').click(function(){
  $(this).parent().toggleClass("active");
})

$('.langMb li').click(function () {
  var current = $(this).html();
  $(".defaultLang").html(current);
});

 
