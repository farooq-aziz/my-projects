// ----slider----

$(".items").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// -----slider-----

$(document).ready(function () {
  $(".product-card-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// ------slider-------

$(document).ready(function () {
  $(".product-card-slider-2").slick({
    dots: false,
    arrows: false,
    slidesToShow: 2,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// ------slider-------

$(document).ready(function () {
  $(".product-card-slider-3").slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    infinite: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// ------ slider--------

$(".team-slider").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 676,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// -------slider--------

$(".blog-slider").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  infinite: true,
  autoplay: false,
  speed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// ----mega-slider--------

$(document).ready(function () {
  $(".mega-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 4,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

// ----v-slider on nav---

$(".vertical-slider").slick({
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
});

// ----faq slider----

$(".faq").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// --mbl-nav--

$(document).ready(function () {
  var trigger = $(".mbl-hamburger"),
    overlay = $(".mbl-overlay"),
    isClosed = false;

  trigger.click(function () {
    hamburger_cross();
  });

  function hamburger_cross() {
    if (isClosed == true) {
      overlay.hide();
      trigger.removeClass("is-open");
      trigger.addClass("is-closed");
      isClosed = false;
    } else {
      overlay.show();
      trigger.removeClass("is-closed");
      trigger.addClass("is-open");
      isClosed = true;
    }
  }

  $('[data-toggle="offcanvas"]').click(function () {
    $("#wrapper").toggleClass("toggled");
  });
});

// ------zap popup------

$(".Click-here").on("click", function () {
  $(".custom-model-main").addClass("model-open");
});
$(".close-btn, .bg-overlay").click(function () {
  $(".custom-model-main").removeClass("model-open");
});

// ----find area in search box-----

let searchDeliveryInput = document.getElementById("searchDeliveryInput");
let locationSelect = document.querySelector(".location-select").children;
searchDeliveryInput.addEventListener("input", function () {
  Array.from(locationSelect).forEach(function (element) {
    let text = element.children[0].children[0].innerText.toLowerCase();
    let value = searchDeliveryInput.value;
    if (text.includes(value)) {
      element.children[0].style.display = "flex";
    } else {
      element.children[0].style.display = "none";
    }
  });
});

// ------back to top btn and fixed header-------

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    document.getElementById("main-header").classList.add("fixed-top");
    document.getElementById("page-content-wrapper").classList.add("fixed-top");
  } else {
    document.getElementById("main-header").classList.remove("fixed-top");
    document
      .getElementById("page-content-wrapper")
      .classList.remove("fixed-top");
  }

  scrollFunction();
};

mybutton = document.getElementById("myBtn");

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

// ---remove items---

$(".remove").click(function () {
  var parent = $(this).parent().parent();
  parent.remove();
  recalculateCart();
});

// ---add items---

const incrementCount = document.getElementsByClassName("increment-count");
const decrementCount = document.getElementsByClassName("decrement-count");

const totalCount = document.getElementsByClassName("total-qnty");

var count = 0;

totalCount.innerHTML = count;

// Function to increment count
const handleIncrement = () => {
  count++;
  totalCount[0].innerHTML = count;
};

// Function to decrement count
const handleDecrement = () => {
  count--;
  totalCount[0].innerHTML = count;
};

// Add click event to buttons
// incrementCount.addEventListener("click", handleIncrement);
// decrementCount.addEventListener("click", handleDecrement);

// -----range slider------

var rangeSlider = function () {
  var slider = $(".range-slider"),
    range = $(".range-slider-range"),
    value = $(".range-slider-value");

  slider.each(function () {
    value.each(function () {
      var value = $(this).prev().attr("value");
      $(this).html(value);
    });

    range.on("input", function () {
      $(this).next(value).html(this.value);
    });
  });
};

rangeSlider();

// -----------step-tabs-----------

// -------pagination---------

// ----shop modal----------

// $(".click-Here").on('click', function () {
//   $(".shop-modal").addClass('model-open');
// });
// $(".btn-close").click(function () {
//   $(".shop-modal").removeClass('model-open');
// });

// ---- footer menu-------

(function ($) {
  $(function () {
    // Store menu container
    var mobileMenu = "#mobile-menu";
    // Store Trigger
    var mobileBtn = "#mobile-footer-btn";

    var rotation = ".mobile-btn-close";

    $(mobileBtn).on("click", function (e) {
      e.stopPropagation();
      if (
        $(mobileMenu).hasClass("mobile-menu-hide") ||
        $(rotation).hasClass("is-rotating")
      ) {
        $(mobileMenu)
          .removeClass("mobile-menu-hide")
          .addClass("mobile-menu-show");
        $(rotation).removeClass("is-rotating").addClass("is-rotating-back");
      } else {
        $(mobileMenu)
          .removeClass("mobile-menu-show")
          .addClass("mobile-menu-hide");
        $(rotation).removeClass("is-rotating-back").addClass("is-rotating");
      }
    });
  });
})(jQuery);
