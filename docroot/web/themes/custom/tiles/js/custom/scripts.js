/**
 * Apply imagesLoaded, isotope and infinitescroll for the view.
 *
 * @type {{attach: Drupal.behaviors.isotopeAndInfiniteScroll.attach}}
 */


/**
 * Drupal behaviours for filtering using isotope
 */
(function ($, Drupal) {
  Drupal.behaviors.isotopetiles = {
    attach: function (context, settings) {
      // Using once() to apply the myCustomBehaviour effect when you want to run just one function.
      var masonryContainer = $(".isotope-tiles"),
        filtersMasonry = $(".isotope-filter .filter");
      filtersMasonry.prepend( "<li class=\"active\"><a class=\"btn btn-default\" href=\"#\" data-filter=\"*\"> All </a></li>" );
      $(".isotope-tiles").isotope({
        itemSelector: '.iso-item',
        layoutMode: 'fitRows',
      });

      $('ul.filter a').click(function(){

        $("ul.filter a").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr('data-filter');
        $(".isotope-tiles").isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
          }
        });
        return false;
      });
    }
  };
})(jQuery, Drupal);


/**
 * Js  for popup and informative tiles url passing.
 */
jQuery(document).ready(function(){
  jQuery("a.information").attr("href", jQuery('a.information').attr('urlext'));
  jQuery("#myModal").on("hidden.bs.modal",function(){
    jQuery("#iframeYoutube").attr("src","#");
  })
  jQuery(".popup-video").click(function () {
      changeVideo(jQuery(".popup-video") .attr('setid'));
    }
  );
})

function changeVideo(vId){
  var iframe=document.getElementById("iframeYoutube");
  iframe.src="https://www.youtube.com/embed/"+vId;
  jQuery("#myModal").modal("show");
}
