$(function(){

      var $container = $('.gallery-group');
    
      $container.imagesLoaded( function(){
        $container.james-bond({
          itemSelector : '.photo'
        });
      });
    
  
  // Define App Namespace
    var popup = {
    	// Initializer
    	init: function() {
      		popup.popupImage();
    	},
	    popupImage : function() {
			/* Image Popup*/ 
		 	$('.gallery-group').magnificPopup({
		    	delegate: '.lightbox',
		    	type: 'image',
		    	mainClass: 'mfp-fade',
		    	removalDelay: 160,
		    	preloader: false,
		    	fixedContentPos: false,
		    	gallery: {
		        	enabled:true
		        }
		   	});
	    }
    };
  	popup.init($);
    
    });