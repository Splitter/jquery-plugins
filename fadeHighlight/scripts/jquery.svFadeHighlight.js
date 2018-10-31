(function($){
	$.fn.svFadeHighlight = function(opts) {
		var defaults = {
		   opacity: 0.4,
		   speed:600,
		   selector: this.selector
		};
		var opts = $.extend(defaults, opts);    
		return this.each(function() {
			var $this=$(this);
			$this.hover(
					function(){	
						$(opts.selector).not($this).each(function(){
							if($(this).css('display')!='none'){
								$(this).stop(true).fadeTo(opts.speed,opts.opacity);
							}
						});
						$this.stop(true).fadeTo(opts.speed,1);						
					},					
					function(){	
						$(opts.selector).each(function(){
							if($(this).css('display')!='none'){
								$(this).stop(true).fadeTo(opts.speed,1);
							}
						});						
					}
			);
		});
	};
})(jQuery);
