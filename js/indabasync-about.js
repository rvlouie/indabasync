$(document).ready(function(){

  $(function() {
    $("a").click(function() {
       if(this.hash) {
        var hash = this.hash.substr(1);
        var jQuerytoElement = jQuery("div[id="+hash+"]");
        var toPosition = jQuerytoElement.position().top;
        jQuery("body,html").animate({
            scrollTop : toPosition
        }, 800);
        return false;            
       }
    });
    if(location.hash) {
        var hash = location.hash;
        window.scroll(0,0);
        jQuery("a[href="+hash+"]").click();
    }
  });

  $(".arrow a").hover(function() {
    $(this).css("background-color", "rgb(55, 55, 55)")
  }, function() {
    $(this).css("background-color", "rgb(88, 88, 88)")
  });

})