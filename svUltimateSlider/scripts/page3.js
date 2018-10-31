$(window).load(function(){	
	
	var options = {
				delay: 10000,
				type:'customTransition',
				controls:'ul.tabs',
				transitions:{
					customTransition:{
							duration:600,
							delay:0,
							css:{left:'+=300'},
							columns:1,
							rows:1,
							order:'normal',
							easing:'easeInBack',
							slide:'current'
					}
				}
			};
	$('ul.slider').svUltimateSlider(options);

	
});