$.noConflict();
jQuery(document).ready(function($){

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(document).ready(function() {

    if( $(".avto_slider").length > 0 ) {
        $(".avto_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 4,
            slidesToScroll: 1,
            // fade: true,
            responsive: [
                {
                  breakpoint: 980,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true
                  }
                },
                {
                  breakpoint: 700,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                  }
                },
                {
                  breakpoint: 500,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                  }
                }
              ]
        });
    }

    if( $(".testimonial_slider").length > 0 ) {
        $(".testimonial_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 3,
            slidesToScroll: 1,
            // fade: true,
            responsive: [
                {
                  breakpoint: 950,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                  }
                },
                {
                  breakpoint: 470,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                  }
                }
              ]
        });
    }

    $(".dropdown_title").on("click", function(e) {
      e.preventDefault();
      parent = $(this).closest(".dropdown_box");
      sl = parent.find(".dropdown_content");
      if(sl.is(":hidden")) {
        parent.addClass("active");
        sl.slideDown(300);
      } else {
        parent.removeClass("active");
        sl.slideUp(300);
      }
    });

    // -----------------

  var fileInput = document.querySelector("#myfiles");
  var photoIndex, img, button;
  var dropArea = $("#dropArea");
  var dropAreaWrapp = $("#dropAreaWrapp");
  var photoBox = dropArea.find(".photo_box");
  var photoBoxTempl;
  var photoWrapp;
  if(dropArea.length > 0) {
    $(document).on("click", ".upl_btn", function(e) {
      $("#myfiles").trigger("click");
    });
    var pullfiles=function(){
        var files = fileInput.files;
        var fl=files.length;
        var i=0;      
        var templ = "";
        var file;
        while ( i < fl) {
            file = files[i];
            var fileUrl;
            fileUrl = URL.createObjectURL(file);
            if(fileUrl) {
              photoBoxTempl = "<div class='photo_box_wrapp'>"+
                              "<div class='photo_box'><img src='"+fileUrl+"' alt='' />"+
                              "</div><button type='button'></button></div>";
                            dropArea.addClass("active");
    dropArea.prepend(photoBoxTempl);
              if( dropArea.find(".photo_box_wrapp").length >= 1 ) {
                dropAreaWrapp.addClass("active");
              }
            }
            i++;
        }
    }
    document.querySelector("#myfiles").onchange=pullfiles;
    }


  $(document).on("click", ".photo_box_wrapp button", function(e) {
    e.preventDefault();
    var parent = $(this).closest(".photo_box_wrapp");
    var maxSize = $("#dropArea").attr("data-maxlength");
    parent.remove();
    if( $("#dropArea").find(".photo_box_wrapp").length < 1 ) {
      $("#dropArea").removeClass("active");
      $("#dropAreaWrapp").removeClass("active");
    }
  });

  // --------------

    if( $(".selection_slider").length > 0 ) {
      $(".selection_slider").not(".slick-initialized").slick({
          dots: false,
          arrows: true,
          // autoplay: true,
          autoplaySpeed: 4000,
          speed: 1200,
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/left_blue_arrow.svg" alt="" /></button>',
          nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/right_blue_arrow.svg" alt="" /></button>',
          // fade: true,
          responsive: [
              {
                breakpoint: 700,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  arrows: false
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
                }
              }
            ]
      });
    }

    // ----------------

      if( $(".testimonial_slider_selection").length > 0 ) {
        $(".testimonial_slider_selection").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/left_blue_arrow.svg" alt="" /></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/right_blue_arrow.svg" alt="" /></button>',
            // fade: true,
            responsive: [
              {
                breakpoint: 950,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows: false
                }
              },
              {
                breakpoint: 470,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false
                }
              }
            ]
        });
      }

      if( $(".popular_slider").length > 0 ) {
        $(".popular_slider").not(".slick-initialized").slick({
            dots: false,
            arrows: true,
            // autoplay: true,
            autoplaySpeed: 4000,
            speed: 1200,
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><img src="img/left_orange_arrow.svg" alt="" /></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><img src="img/right_orange_arrow.svg" alt="" /></button>',
            // fade: true,
            responsive: [
                {
                  breakpoint: 950,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 700,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                  }
                }
              ]
        });
      }

    // ---------------

    $(document).on("click", "[data-popup-link]",  function(e) {
      e.preventDefault();
      popupName = $(this).attr("data-popup-link");
      div = document.createElement('div');
      div.style.overflowY = 'scroll';
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.visibility = 'hidden';
      document.body.appendChild(div);
      scrollWidth = div.offsetWidth - div.clientWidth;
      document.body.removeChild(div);
      topCoord = $(document).scrollTop();
      $("body").addClass("fixed");
      $("body").css({
          "top" :  -1 * topCoord + "px",
          "padding-right" : scrollWidth + "px"
      });
      $(".popup_bg").fadeIn(300);
      $("[data-popup = '"+ popupName +"']").fadeIn(300);
    });
    $(document).on("click", ".close, .popup_bg", function(e) {
      e.preventDefault();
      curTop = $("body").css("top");
      curTop = Math.abs(parseInt(curTop, 10));
      $("body").removeClass("fixed");
      if (curTop !== 0) {
          $("html").scrollTop(curTop);
      }
      $("body").attr("style", "");
      $("[data-popup]").fadeOut(300);
      $(".popup_bg").fadeOut(300);
    });
    $(this).keydown(function(eventObject){
      if (eventObject.which == 27 && $("body").hasClass("fixed")) {
        curTop = $("body").css("top");
        curTop = Math.abs(parseInt(curTop, 10));
        $("body").removeClass("fixed");
        if (curTop !== 0) {
            $("html").scrollTop(curTop);
        }
        $("body").attr("style", "");      
        $(".popup_bg").fadeOut(300);
        $("[data-popup]").fadeOut(300);
      }
    });
    $(document).on("mouseup", function(e) {
      if($(".popup").is(":visible")) {
        e.preventDefault();
        hide_element = $(".popup_content");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").removeClass("fixed");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").attr("style", "");    
            $(".popup_bg").fadeOut(300);
            $("[data-popup]").fadeOut(300);
        }
      }
    });

    // -------------

      $(".respmenubtn").click(function(e) {
        e.preventDefault();
        if( $("#resp_nav").is(":hidden") ) {
            $("#resp_nav").fadeIn(300);
            $(this).addClass("active");
            div = document.createElement('div');
            div.style.overflowY = 'scroll';
            div.style.width = '50px';
            div.style.height = '50px';
            div.style.visibility = 'hidden';
            document.body.appendChild(div);
            scrollWidth = div.offsetWidth - div.clientWidth;
            document.body.removeChild(div);
            topCoord = $(document).scrollTop();
            $("body").addClass("fixed");
            $("body").css({
                "top" :  -1 * topCoord + "px",
                "padding-right" : scrollWidth + "px"
            });
        } else {
            $("#resp_nav").fadeOut(300);
            $(this).removeClass("active");
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").removeClass("fixed");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").attr("style", "");
        }
    });
    
    $(this).keydown(function(eventObject){
        if (eventObject.which == 27 &&
            $("#resp_nav").is(":visible") &&
            bodyWidth <= 767) {
            $("#resp_nav").fadeOut(300);
            $(".respmenubtn").removeClass("active");
            curTop = $("body").css("top");
            curTop = Math.abs(parseInt(curTop, 10));
            $("body").removeClass("fixed");
            if (curTop !== 0) {
                $("html").scrollTop(curTop);
            }
            $("body").attr("style", "");
        }
    });

});

});

