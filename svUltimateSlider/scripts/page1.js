$(window).load(function(){	
	
	var options = {
				delay: 3000,
				type:['fade','columnflyin','rowgrowin','blockshrink','columndropin','rowslideleft','blockgrow','columnfade','blockrandomin','rowthin','blockdrop','columnrandom','rowrandom','blockflyout','columnthin','blockdropin'],
				controls:'.controls.first_example',
				next:'.next',
				prev:'.prev'
			};
	$('.container.first_example').svUltimateSlider(options);

	
});