$(window).load(function(){	

	
	
	var options = {
				delay: 2000,
				type:['fade','columnflyin','rowgrowin','blockshrink','columndropin','rowslideleft','blockgrow','columnfade','blockrandomin','rowthin','blockdrop','columnrandom','rowrandom','blockflyout','columnthin','blockdropin'],
				controls:'.second_controls.one'
			};
	$('.container.second_example').svUltimateSlider(options);

	
	var options = {
				delay: 4000,
				type:['blockfade','blockshrink','blockdrop','blockflyout','blockrandom'],
				controls:'.second_controls.two'
			};
	$('.container.third_example').svUltimateSlider(options);

	
	var options = {
				delay:5000,
				type:['columnfade','columnthin','columndrop','columnflyout','columnrandom'],
				controls:'.second_controls.three'
			};
	$('.container.fourth_example').svUltimateSlider(options);

	
	
});