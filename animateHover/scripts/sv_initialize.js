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
	
	
	
});

$(window).load(function(){

	
	var opts={
				changes:{'margin-left':'15px'},
				speed:400
			};
	$('.link_nudge > ul > li').svAnimateHover(opts);
	
	var opts={
				changes:{'top':'-260px'},
				selector:'div.overlay',
				easing:'easeInBack',
				speed:400
			};
	$('div.garage_block').svAnimateHover(opts);
	
	var opts={
				changes:{'top':'-80px','height':'40px'},
				selector:'div.overlay',
				easing:'easeOutBack',
				speed:800
			};
	$('div.div_overlay').svAnimateHover(opts);
	
	
	var opts={
				changes:{'opacity':1},
				selector:'ul',
				speed:700,
				onstart:function(){
					$(this).children('ul').css({'display':'block'});
				},
				onend:function(){
					$(this).children('ul').css({'display':'none'});
				}
			};
	$('.menu > ul > li').each(function(){	
		$(this).children('ul').css({ opacity: 0 });
		$(this).svAnimateHover(opts);
	});
	
	
	var opts={
				changes:{
					'top': '-32px',
					'left': '-32px',
					'width': '174px',
					'height': '174px'
				},
				speed:300,
				easing:'easeOutBack',
				onstart:function(){
					$('ul.thumb li').css({'z-index' : '0'})
					$(this).addClass("hover").parent().parent().css({'z-index' : '10'})
				}
			};
	$('ul.thumb li img').svAnimateHover(opts);
	
			
	var opts={
				changes:{'top':'-40px','opacity':'1'},
				selector:'div.overlay',
				speed:400
			};
	var opts2={
				changes:{'top':'20px'},
				selector:'img',
				speed:400
			};
	$('.moving_content').find('div.overlay').css({'opacity':0});		
	$('.moving_content').svAnimateHover(opts)
					.svAnimateHover(opts2);
	
			
	var opts={
				changes:{'top':'-40px','opacity':'1'},
				selector:'div.overlay',
				speed:400
			};
	var opts2={
				changes:{'top':'-10px'},
				selector:'img',
				speed:400
			};
	$('.moving_content2').find('div.overlay').css({'opacity':0});		
	$('.moving_content2').svAnimateHover(opts)
					.svAnimateHover(opts2);
	
	
	
			
	var opts={
				changes:{'top':'40px','opacity':'0'},
				selector:'div.overlay',
				speed:400
			};
	var opts2={
				changes:{'top':'0px'},
				selector:'img',
				speed:400
			};
	$('.moving_content3').svAnimateHover(opts)
					.svAnimateHover(opts2);
					
					
	
			
	var opts={
				changes:{'top':'0px','opacity':'0'},
				selector:'div.overlay',
				speed:400
			};
	var opts2={
				changes:{'top':'0px'},
				selector:'img',
				speed:400
			};
	$('.moving_content4').svAnimateHover(opts)
					.svAnimateHover(opts2);
	
	
	
	$('div#fade_menu a').each(function(){
		$(this).clone()
				.insertAfter($(this))
				.css({
						top:"-"+$(this).height()+"px",
						position:'relative',
						backgroundPosition:"0 -"+$(this).height()+"px",
						opacity:'0'
					 });
	});
	var opts={
				changes:{'opacity':'1'},
				selector:'a:eq(1)',
				speed:400
			};
	$('div#fade_menu li').svAnimateHover(opts)

});
//END SETUP
