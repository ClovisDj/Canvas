
  $(window).scroll(function(){
    if($(this).scrollTop() > 215){
      // $('nav').css("top", 230-$(this).scrollTop());
      $('nav').removeClass('hidden');
    }else {
      $('nav').addClass("hidden");
      // $('nav').css("top", 0);
      // $('.navbar-brand').append("<span>{</span> Clovis_Djiometsa <span>}</span>");
    }
  })
