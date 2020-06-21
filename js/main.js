$( document ).ready(function() {
  $(function() {
    // this initializes the dialog (and uses some common options that I do)
    $("#dialog").dialog({
      autoOpen : false, 
      modal : true, 
      show : "puff", 
      hide : "puff",
      width : 500, 
      height : 500,
      closeText : 'X',
      dialogClass: 'ui-dialog-osx',
      create: function (event) {
    $(event.target).parent().css('position', 'fixed'); 
    },
    resizeStart: function (event) {
    $(event.target).parent().css('position', 'fixed'); 
    },
    resizeStop: function (event) {
    $(event.target).parent().css('position', 'fixed'); 
    }
    });
  
    $("#downloaden").click(function() {
      $("#dialog").dialog("open");
      return false;
    });
  });
    
    $('#downloaden').click(function(e) {
    e.preventDefault(); 
    window.location.href = 'download/ReadySetCode.zip';
});

  $('.example-slider').boSlider({ slideShow: false, interval: 3000, animation: "fade" }); 
  
});