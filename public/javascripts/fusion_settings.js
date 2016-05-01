jQuery().ready(function(){
						
	$('#expandingContainer').accordion({// this is the function that runs accordion based left navigation and content
			header: "h2",
			animated:"easeslide",
			autoHeight:false
	});
	
	 $("#digitalImages").jCarouselLite({//slider for digital work images
     btnNext: ".next",
     btnPrev: ".prev",
	 easing:"easeinout",
	 visible:1
    });
	 $("#digitalInfos").jCarouselLite({//slider for digital work infobars
     btnNext: ".next",
     btnPrev: ".prev",
	 easing:"easeinout",
	 visible:1,
	 vertical:true
    });
	 
	 $("#printImages").jCarouselLite({//slider for print work images
     btnNext: ".pnext",
     btnPrev: ".pprev",
	 easing:"easeinout",
	 visible:1
    });
		 
	$("#printInfos").jCarouselLite({//slider for print work infobars
     btnNext: ".pnext",
     btnPrev: ".pprev",
	 easing:"backin", // as you can see, there're a few more slick easing options you can use
	 speed:400,
	 visible:1,
	 vertical:true
    });
	
	$('.imageContainer a').lightBox();	
	// work images hover fade effects. does not work with IE.
	$('.imageContainer img').fadeTo("fast",0.70);
	$('.imageContainer img').mouseover(function() {
		$(this).fadeTo("fast",1);
		});
	$('.imageContainer img').mouseout(function() {
		$(this).fadeTo("fast",0.70);
		});


	});	//end of page functions