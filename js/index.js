function closeNav(){
  	document.getElementById("mySidebar").style.width="0" ;
  	document.getElementById("main").style.marginLeft="0" ;

  }
 function openNav(){
  	document.getElementById("mySidebar").style.width="250px" ;
  	document.getElementById("main").style.marginLeft= "250px";
  }

$(function(){

  window.sr = ScrollReveal();

  if ($(window).width() < 768) {

  	if ($('.timeline-content').hasClass('js--fadeInLeft')) {
  		$('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
  	}

  	sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  } else {
  	
  	sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });

  }
  /*function openNav(){
  	document.getElementById("hide-nav").style.width="25px" ;
  	document.getElementById("main").style.marginLeft= "25px";
  }
  function closeNav(){
  	document.getElementById("hide-nav").style.width="0" ;
  	document.getElementById("main").style.marginLeft="0" ;

  }
	*/
  
  /*sr.reveal('.js--fadeInLeft', {
	    origin: 'left',
	    distance: '300px',
		easing: 'ease-in-out',
	    duration: 800,
	  });

	  sr.reveal('.js--fadeInRight', {
	    origin: 'right',
	    distance: '300px',
	    easing: 'ease-in-out',
	    duration: 800,
	  });*/


});
