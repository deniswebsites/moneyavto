$.noConflict();
jQuery(document).ready(function($){

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


// $(window).load(function() {



// });

$(window).resize(function() {



});

$(document).scroll(function() {



});

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
            // responsive: [
            //     {
            //       breakpoint: 900,
            //       settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2
            //       }
            //     },
            //     {
            //       breakpoint: 540,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //       }
            //     }
            //   ]
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
            // responsive: [
            //     {
            //       breakpoint: 900,
            //       settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2
            //       }
            //     },
            //     {
            //       breakpoint: 540,
            //       settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //       }
            //     }
            //   ]
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

});

});

