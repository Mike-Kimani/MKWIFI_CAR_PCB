jQuery(document).ready(function($) {
    // Add your custom jQuery here
    //Carousel Swipe  
    
    //LOAD MORE POSTS or LESS with AJAX
    $('body').on('click', '#post-loop .morePosts .nav a' ,function(e){
      e.preventDefault();
      // $( e.target ).replaceWith('<i class="fa fa-spinner fa-pulse  fa-fw"></i>')
      var link = jQuery(this).attr('href');
      var customClass = jQuery(this).parent().attr('link');
      jQuery.get(link, function(data) {
          var post = jQuery("#post-loop."+customClass, data);
          jQuery('#post-loop.'+customClass).replaceWith(post);
          // jQuery('#post-loop.'+customClass).html(post.html());
        });
      });
    
    //LOAD MORE PAGES IN ARCHIVE/SEARCH or LESS with AJAX
    $('body').on('click', '#morePosts a' ,function(e){
      e.preventDefault();
      $( e.target ).replaceWith('<i class="fa fa-spinner fa-pulse fa-fw"></i>')
      var link = jQuery(this).attr('href');
      jQuery.get(link, function(data) {
          var post = jQuery("#content", data);
          var link = jQuery("#nav", data);
          jQuery('#content').append(post.html());
          jQuery('#nav').replaceWith(link);
          // jQuery('#post-loop.'+customClass).html(post.html());
        });
      });

      //PHONE COVER REMOVE
      $('.phone:not(.iframeBlock) .cover').on('click' ,function(e)
      {
        e.preventDefault();
        e.target.remove();
      })

      //IFRAME BLOCK
      $('body').on('click',".iframeBlock a" ,function(e){
      
        if ( $(this).attr('target') || (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()))) 
        {
          return;
        }
        
        e.preventDefault();

        var link = jQuery(this).attr('href');
        jQuery(this).replaceWith($('<iframe>', {
            src: link,
            id:  '',
            class:  '',
            frameborder: 0,
            scrolling: 'no',
            width:$(this).width(),
            height:$(this).height(),
            }));
        return false;
    });

  //SMOOTH SCROLL
  // direct browser to top right away
    if (window.location.hash)
    scroll(0,0);

    // takes care of some browsers issue
    // setTimeout(function(){scroll(0,0);},1);

    $(function(){
    //your current click function
    $('.scroll').on('click',function(e){
    e.preventDefault();
    $('html,body').animate({
        scrollTop:$($(this).attr('href')).offset().top + 'px'
    },1000,'swing');
    });

    $('body a[href*="#"]:not([href="#"],.nav)').on('click', function(e) {
            // e.preventDefault();
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top-55
          }, 1000);
          return false;
        }
    }})

    // if we have anchor on the url (calling from other page)
    if(window.location.hash){
    // smooth scroll to the anchor id
    $('html,body').animate({
        scrollTop:$(window.location.hash).offset().top-55 + 'px'
        },1000,'swing');
    }
});


});
