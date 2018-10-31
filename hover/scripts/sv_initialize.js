//SETUP
$('document').ready(function(){	

	
	Cufon.replace('.small_text', {
					textShadow: '1px 2px rgba(0, 0, 0, 0.6)'
				});
	Cufon.replace('.big_text', {
					textShadow: '0px 2px rgba(0, 0, 0, 0.6)',
					color: '-linear-gradient(#ccc, #777)'
				});
	
	Cufon.replace('.heading', {
					textShadow: '1px 2px rgba(0, 0, 0, 0.6)'
				});
	Cufon.replace('h3', {
					textShadow: '1px 2px rgba(0, 0, 0, 0.1)'
				});
	Cufon.replace('.block p');
	//SETUP - Frontpage Garage Door Effect
	$('.front_third').sv_animatehover({selector:'.bottom'});
	//END SETUP - Frontpage Garage Door Effect
	
	var opts={
				change:'15px',
				attr : 'margin-left',
				speed:400
			};
	$('.link_nudge > ul > li').sv_animatehover(opts);
	
	var opts={
				change:'-130px',
				attr : 'top',
				selector:'div.overlay',
				speed:400
			};
	$('.garage div.div_block').sv_animatehover(opts);
	
	var opts={
				change:['-80px','40px'],
				attr : ['top','height'],
				selector:'div.overlay',
				speed:400,
				queue:true
			};
	$('div.div_overlay').sv_animatehover(opts);
	
	
	var opts={
				change:['120px','170px',1],
				attr : ['width','height','opacity'],
				selector:'ul',
				speed:400,
				queue:false
			};
	$('.menu > ul > li').sv_animatehover(opts);
	
			
	//END SETUP - Code Page Ajax functionality
	
});
//END SETUP
