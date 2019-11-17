$(function() {
  // scroll to top
  $(window).scroll(function() {
    var windowScroll = $(window).scrollTop();

    if (windowScroll >= 600) {
      $(".scroll-top").fadeIn();
    } else {
      $(".scroll-top").fadeOut(100);
    }
  });

  $(".scroll-top").click(function() {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      800
    );
  });

  // $(window).scroll(function() {
  //   if ($(window).width() <= 992) {
  //     if ($(window).scrollTop() >= 100) {
  //       $(".call-to-action").css({
  //         opacity: 1,
  //         visibility: "visible",
  //         height: "74px"
  //       });
  //     } else {
  //       $(".call-to-action").css({
  //         opacity: 0,
  //         visibility: "hidden",
  //         height: 0
  //       });
  //     }
  //   }
  // });

  $(window).scroll(function() {
    if ($(window).scrollTop() >= 300) {
      $(".call-to-action").css({
        opacity: 1,
        visibility: "visible",
        height: "74px"
      });
    } else {
      $(".call-to-action").css({
        opacity: 0,
        visibility: "hidden",
        height: 0
      });
    }
  });

  $("#convertToForm").click(function() {
    $(".instadiet-analysis .front").css({
      "z-index": 0,
      transform: "rotateY(180deg)"
    });
    $(".instadiet-analysis .back").css("transform", "rotateY(0)");
  });

  // burgor button change shape to x button
  $(".the-button").on("click", function() {
    $("html,body").toggleClass("overlay");
    $(this).toggleClass("transformed");
    $(".navbar-collapse").toggleClass("show");
  });

  $("body").on("click", function(e) {
    var $currEl = $(e.currentTarget);
    if (!$currEl.is(".navbar") && !$currEl.closest(".navbar").length) {
      $("html,body").removeClass("overlay");
      $(".navbar-collapse").removeClass("show");
      $(".the-button").removeClass("transformed");
    }
  });
  $(".navbar").on("click", function(e) {
    e.stopPropagation();
  });

  // switch between the meals
  // var zIndexVAlue = 0;
  // $('.diet-slider .diet').on('click', function () {
  //   $(this).animate({
  //     left: '30%',
  //     'marginTop': '50px'
  //   }, 400, function () {
  //     zIndexVAlue--;
  //     $(this).css('z-index', zIndexVAlue);
  //   }).animate({
  //     left: 0,
  //     'marginTop': 0
  //   }, 400);
  // });

  $(".arrows .slider-next").on("click", function() {
    var nextImg = $(".diet.active").next(".diet");
    // if (nextImg.length == 0) {
    //   nextImg = $('.diet-slider .diet:first');
    // }
    if (nextImg.length) {
      $(".diet.active").removeClass("active");
      nextImg.addClass("active");
    }
    checkActiveClass();
  });

  $(".arrows .slider-prev").on("click", function() {
    var prevImg = $(".diet.active").prev(".diet");
    // if (prevImg.length == 0) {
    //   prevImg = $('.diet-slider .diet:last');
    // }
    if (prevImg.length) {
      $(".diet.active").removeClass("active");
      prevImg.addClass("active");
    }
    checkActiveClass();
  });

  // check the active class on diet and change the title
  function checkActiveClass() {
    if ($(".diet:first").hasClass("active")) {
      $(".diet-plan-header h3").text("Paleo Diet");
      $(".left-content h2 span").text("Mona");
    }
    if (
      $(".diet")
        .eq(1)
        .hasClass("active")
    ) {
      $(".diet-plan-header h3").text("Ketogenic Diet");
      $(".left-content h2 span").text("Nada");
    }
    if ($(".diet:last").hasClass("active")) {
      $(".diet-plan-header h3").text("Vegeterian Diet");
      $(".left-content h2 span").text("Ali");
    }
  }

  // increase and decreace the quantity of product by custom input type number
  $(".quantity .button").on("click", function() {
    var $button = $(this);
    var oldValue = $button
      .parent()
      .find("input")
      .val();
    var newVal;

    if ($button.text() == "+") {
      newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 1) {
        newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }

    $button
      .parent()
      .find("input")
      .val(newVal);
  });

  // new Chart(document.getElementById("doughnut-chart"), {
  //   type: "doughnut",

  //   data: {
  //     labels: ["Protein", "Fats", "Carbs"],

  //     datasets: [
  //       {
  //         // label: "Macro Nutrients indgredients",
  //         backgroundColor: ["#2a338f", "#ef5fa2", "#8f94b8"],
  //         data: [30, 20, 50],
  //         borderWidth: 0
  //       }
  //     ]
  //   },
  //   options: {
  //     responsive: false,
  //     cutoutPercentage: 80,
  //     legend: {
  //       labels: {
  //         // display: false,
  //         boxWidth: 10
  //       }
  //     },
  //     title: {
  //       display: false,
  //       text: "Macro Nutrients"
  //     },
  //     layout: {
  //       padding: {
  //         left: 20,
  //         right: 0,
  //         top: 20,
  //         bottom: 0
  //       }
  //     }
  //   }
  // });

  $(".fact .read-more").on("click", function() {
    $(this)
      .prev(".more")
      .toggleClass("hide");
  });

  // $(".show-more button").on("click", function() {
  //   console.log("clicked");
  //   $(this)
  //     .text("View 10 Less")
  //     .parent()
  //     .siblings(".table-content")
  //     .find(".row-hidden")
  //     .toggleClass("hide");
  // });

  if ($("html").attr("lang") == "en") {
    $(".show-more button").on("click", function() {
      if ($(".row-hidden").hasClass("hide")) {
        $(this)
          .html("<button>View 10 Less <i class='fa fa-arrow-up'></i></button>")
          .parent()
          .siblings(".table-content")
          .find(".row-hidden")
          .removeClass("hide");
      } else {
        $(this)
          .html(
            "<button>View 10 More <i class='fa fa-arrow-down'></i></button>"
          )
          .parent()
          .siblings(".table-content")
          .find(".row-hidden")
          .addClass("hide");
      }
    });
  }

  if ($("html").attr("lang") == "en") {
    $(".choose .view-more").on("click", function() {
      if ($(".label-hidden").hasClass("hide")) {
        $(this)
          .html("<button class='view-more'>Show 5-</button>")
          .siblings(".label-hidden")
          .removeClass("hide");
      } else {
        $(this)
          .html("<button class='view-more'>Show 5+</button>")
          .siblings(".label-hidden")
          .addClass("hide");
      }
    });
  }

  if ($("html").attr("lang") == "ar") {
    $(".choose .view-more").on("click", function() {
      if ($(".label-hidden").hasClass("hide")) {
        $(this)
          .html("<button class='view-more'>اعرض 5 اقل</button>")
          .siblings(".label-hidden")
          .removeClass("hide");
      } else {
        $(this)
          .html("<button class='view-more'>اعرض 5 اكثر</button>")
          .siblings(".label-hidden")
          .addClass("hide");
      }
    });
  }

  if ($("html").attr("lang") == "ar") {
    $(".show-more button").on("click", function() {
      if ($(".row-hidden").hasClass("hide")) {
        $(this)
          .html("<button>عرض 10 أقل <i class='fa fa-arrow-up'></i></button>")
          .parent()
          .siblings(".table-content")
          .find(".row-hidden")
          .removeClass("hide");
      } else {
        $(this)
          .html("<button>عرض 10 أكثر <i class='fa fa-arrow-down'></i></button>")
          .parent()
          .siblings(".table-content")
          .find(".row-hidden")
          .addClass("hide");
      }
    });
  }

  $(".nutrients .nutrient .protein").hover(
    function() {
      $(".chart .bie-chart").css({
        "border-right-width": "10px",
        "border-top-width": "10px"
      });
    },
    function() {
      $(".chart .bie-chart").css({
        "border-right-width": "6px",
        "border-top-width": "6px"
      });
    }
  );

  $(".nutrients .nutrient .fats").hover(
    function() {
      $(".chart .bie-chart").css({
        "border-bottom-width": "10px"
      });
    },
    function() {
      $(".chart .bie-chart").css({
        "border-bottom-width": "6px"
      });
    }
  );

  $(".nutrients .nutrient .carbs").hover(
    function() {
      $(".chart .bie-chart").css({
        "border-left-width": "10px"
      });
    },
    function() {
      $(".chart .bie-chart").css({
        "border-left-width": "6px"
      });
    }
  );
});

// $(window).on("load", function() {
//   $(".loading-overlay .spinner").fadeOut(5000, function() {
//     $("body").css("overflow-y", "auto");
//     $(this)
//       .parent()
//       .fadeOut(1000);
//   });
// });

// trigger owl carousel two
$("#blogSlider").owlCarousel({
  loop: true,
  nav: true,
  margin: 30,
  dots: false,
  responsive: {
    0: {
      items: 1.3
    },
    600: {
      items: 2.4
    },
    1000: {
      items: 2.5
    },
    1200: {
      items: 3
    }
  },
  navText: ["<div class='left-arrow'></div>", "<div class='right-arrow'></div>"]
});

// owl carousel in diet type page in arabic
$("#blogSlider-arabic").owlCarousel({
  loop: true,
  rtl: true,
  nav: true,
  margin: 30,
  dots: false,
  responsive: {
    0: {
      items: 1.3
    },
    600: {
      items: 2.4
    },
    1000: {
      items: 2.5
    },
    1200: {
      items: 3
    }
  },
  navText: ["<div class='right-arrow'></div>", "<div class='left-arrow'></div>"]
});

$("#blogSlider-single").owlCarousel({
  loop: true,
  nav: true,
  margin: 30,
  dots: false,
  responsive: {
    0: {
      items: 1.3
    },
    600: {
      items: 2.4
    },
    1000: {
      items: 2.5
    },
    1200: {
      items: 3
    }
  },
  navText: ["<div class='left-arrow'></div>", "<div class='right-arrow'></div>"]
});
