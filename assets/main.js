(function ($) {
   $('document').ready(function ($) {
       console.log('jquery running!!');
       $('.contact-us').click(function (e) {
           $(this).css('display','none');
           $('.support').css('height','48vh');
           $('.support-close').css('height','1.5vw');
       });
       $('.support-close').click(function (e) {
           $('.contact-us').css('display','unset');
           $('.support').css('height','0');
           $('.support-close').css('height','0');
       });
   });
})(jQuery);

console.log('script running!!');
