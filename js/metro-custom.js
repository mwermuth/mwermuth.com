$(window).load(function(){ 
  
    var $container = $('.portfolio'); 
    $container.isotope({ 
        filter: '*', 
        animationOptions: { 
            duration: 750, 
            easing: 'linear', 
            queue: false, 
        } 
    }); 
  
   $('nav.primary ul a').click(function(){ 
        var selector = $(this).attr('data-filter'); 
        $container.isotope({ 
            filter: selector, 
            animationOptions: { 
                duration: 750, 
                easing: 'linear', 
                queue: false, 
            } 
        }); 
      return false; 
    }); 

   var $optionSets = $('nav.primary ul'), 
       $optionLinks = $optionSets.find('a'); 
   
       $optionLinks.click(function(){ 
          var $this = $(this); 
      // don't proceed if already selected 
      if ( $this.hasClass('selected') ) { 
          return false; 
      } 
   var $optionSet = $this.parents('nav.primary ul'); 
   $optionSet.find('.selected').removeClass('selected'); 
   $this.addClass('selected');  
}); 


  
}); 


(function(){

  var container = document.documentElement,
		popup = document.querySelector( '.avgrund-popup' ),
		cover = document.querySelector( '.avgrund-cover' ),
		currentState = null;

  addClass( container, 'avgrund-ready' );

	// Deactivate on ESC
	function onDocumentKeyUp( event ) {
		if( event.keyCode === 27 ) {
			deactivate();
		}
	}

	// Deactivate on click outside
	function onDocumentClick( event ) {
		if( event.target === cover ) {
			deactivate();
		}
	}

	function activate( state ) {
		document.addEventListener( 'keyup', onDocumentKeyUp, false );
		document.addEventListener( 'click', onDocumentClick, false );

		removeClass( popup, currentState );
		addClass( popup, 'no-transition' );
		addClass( popup, state );

		setTimeout( function() {
			removeClass( popup, 'no-transition' );
			addClass( container, 'avgrund-active' );
		}, 0 );

		currentState = state;
	}

	function deactivate() {
		document.removeEventListener( 'keyup', onDocumentKeyUp, false );
		document.removeEventListener( 'click', onDocumentClick, false );

		removeClass( container, 'avgrund-active' );
	}

	function disableBlur() {
		addClass( document.documentElement, 'no-blur' );
	}

	function addClass( element, name ) {
		element.className = element.className.replace( /\s+$/gi, '' ) + ' ' + name;
	}

	function removeClass( element, name ) {
		element.className = element.className.replace( name, '' );
	}

	window.avgrund = {
		activate: activate,
		deactivate: deactivate,
		disableBlur: disableBlur
	}

})();