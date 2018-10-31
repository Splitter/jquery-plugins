(function($){
	$.fn.svAnimateHover = function(opts) {
		var defaults = {changes:{},easing:'linear',speed:600,onstart:null,onend:null}, 
			st = {};
		opts = $.extend(defaults, opts); 		
		return this.each(function() {
			var $this=$(this);
			for (var i in opts.changes) {
				if(opts.selector){		
					st[i] = $this.find(opts.selector).css(i);
				}
				else{
					st[i] = $this.css(i);
				}
			}
			$this.hover(
				function(){
					svAnimateHoverAni.call(this,true);
				},
				function(){		
					svAnimateHoverAni.call(this,false);
				}
			);
			var svAnimateHoverAni = function(o){	
					var $this=this;
					if(o && opts.onstart){						
						opts.onstart.call($this);
					}
					var p=(!o)?st:opts.changes;					
					if(opts.selector){
						$($this).find(opts.selector).stop(true).animate(p,
														opts.speed,
														opts.easing,
														function(){
															if(!o && opts.onend){
																opts.onend.call($this);
															}
														});
					}
					else{
						$($this).stop(true).animate(p,
										opts.speed,
										opts.easing,
										function(){
											if(!o && opts.onend){
												opts.onend.call($this);
											}											
										});
					}
			}
		});
	};	
})(jQuery);