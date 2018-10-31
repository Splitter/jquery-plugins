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
	Cufon.replace('p.description');

	
	
});
//END SETUP

$(window).load(function(){

	var opts = {
			thickness: 6,
			color: '#333',
			opacity: '0.4'};
	$('.example1 li img').svInnerBorder(opts);
	
	
	var opts2 = {
		thickness: 6,
		color: '#ff1467',
		opacity: '0.4'};
		
	$('.example2 li img').each(function(){
		$(this).hover(
				function(){
					$(this).svInnerBorder(opts2);
				},
				function(){
					$(this).svInnerBorderRemove();
				});
	});
	var opts = {
			thickness: 8,
			color: '#333',
			opacity: '0.4'};
	$('.example3 li img').svInnerBorder(opts);
	var opts = {
			thickness: 3,
			color: '#ff1467',
			opacity: '0.4',
			replace:false};
	$('.example3 li img').svInnerBorder(opts);
	

});
