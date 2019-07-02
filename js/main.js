//slider
$(function() {
  var display = $('.testimonials__slider'),
      sliders = $('.testimonials__person');

      var scrollToNext = function() {
        if ($('.testimonials__person-active').index()<2) {
          $('.testimonials__person-active').next().addClass('testimonials__person-active')
          .siblings().removeClass('testimonials__person-active');
          console.log($('.testimonials__person-active').index());
        }
        else {
          sliders.first().addClass('testimonials__person-active')
          .siblings().removeClass('testimonials__person-active');
        }

      }

      $('.testimonials__nextbtn').on('click', function(e) {
        e.preventDefault();

        scrollToNext();
      })

})
