$(".menu-icon").click(function () {
  $(".menu ul").css("left", "0");
  $("#overlay").css("display", "block");
});

$("#overlay").click(function () {
  $(".menu ul").css("left", "-250px");
  $("#overlay").css("display", "none");
});
$(window).resize(() => {
  if ($(window).innerWidth() > 768) {
    $(".menu ul").css("left", "-250px");
    $("#overlay").css("display", "none");
  }
});
console.log($("li:nth-child(2)").text());

$(".image-slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: `<button type='button' class='slick-prev pull-left slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>`,
  responsive: [
    {
      breakpoint: 568,
      settings: {
        arrows: false,
      },
    },
  ],
});

$(".image-mini").slick({
  infinite: true,
  speed: 300,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow:3,
  centerMode:true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        centerPadding: "40px",
      },
    },
  ],
});

$(".suggest-content").slick({
  infinite: true,
  speed: 300,
  arrows: false,
  autoplay: true,
  slidesToShow: 3,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        centerPadding: "40px",
      },
    },
  ],
});




$(function () {
  var url = window.location.href;
  $("#header a").each(function () {
    if (url == this.href) {
      $(this).closest("li").addClass("active");
    }
  });
});

const BtnCoppyRight = document.querySelectorAll(".btn-test");
Array.from(BtnCoppyRight).forEach((btn)=>{
  btn.addEventListener("click",()=>{
    // l???c nh???ng btn c?? ???? sao ch??p th??nh sao ch??p m??
    Array.from(BtnCoppyRight).forEach((btn)=>{
      if(btn.innerHTML.includes("????")){
        btn.innerHTML = "Sao ch??p m??";
      }
    })
    navigator.clipboard.writeText(btn.dataset.disscount);
    // g??n l???i cho btn 
    btn.innerHTML = "???? ch??p m??";
  })
})


$(document).ready(function() {
  $('.navbar a.dropdown-toggle').on('click', function(e) {
     var $el = $(this);
     var $parent = $(this).offsetParent(".dropdown-menu");
     $(this).parent("li").toggleClass('open');
     if(!$parent.parent().hasClass('menu')) {
          $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
     }
     $('.nav li.open').not($(this).parents("li")).removeClass("open");
     return false;
    });
});