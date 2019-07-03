//slider
$(function() {
  var display = $('.testimonials__slider'),
      sliders = $('.testimonials__slider').find('.testimonials__person');

      var scrollToNext = function() {

        var slideNum = $('.testimonials__person-active').index();
        console.log('slidenume ' + slideNum);
        console.log('array ' + sliders.length);

        if (slideNum < sliders.length - 1) {
          var newPosition = (slideNum * -100 - 100) + '%'; //позиция для показа текущего отзыва
          console.log('next ' + newPosition);
          $('.testimonials__person-active').next().addClass('testimonials__person-active')
            .siblings().removeClass('testimonials__person-active');
        }

        else {
          var newPosition = 0;
          console.log('begin ' + newPosition);
          sliders.first().addClass('testimonials__person-active')
            .siblings().removeClass('testimonials__person-active');
        }

        display.css({
          'left': newPosition
        });

        //if ($('.testimonials__person-active').index()<sliders.lenght {
        //  $('.testimonials__person-active').next().addClass('testimonials__person-active')
          //.siblings().removeClass('testimonials__person-active');
          //console.log($('.testimonials__person-active').index());
        //}
        //else {
          //sliders.first().addClass('testimonials__person-active')
          //.siblings().removeClass('testimonials__person-active');
        //}

      }

      $('.testimonials__nextbtn').on('click', function(e) {
        e.preventDefault();

        scrollToNext();
      })

})
