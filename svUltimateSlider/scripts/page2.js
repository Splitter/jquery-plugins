$(window).load(function(){	

	
	
	
	
	var options = {
				delay:2000,
				type:'fade',
				controls:'.third_controls.one'
			};
	$('.container.fifth_example').svUltimateSlider(options);

		var options = {
				delay:4000,
				type:'left',
				controls:'.third_controls.two'
			};
	$('.container.sixth_example').svUltimateSlider(options);

	
	var options = {
		delay:3000,
		type:['rowthin','columnthin','rowslideright','columndrop','rowfade','columnfade','rowslideleft','columnflyout','rowrandom','columnrandom'],
		controls:'.third_controls.three'
	};
	$('.container.seventh_example').svUltimateSlider(options);

	
	
});