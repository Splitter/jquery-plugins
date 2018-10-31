(function($){
	$.fn.svInnerBorder = function(opts){
		var defaults = {thickness: 6,color: '#555',opacity: '0.3',replace:true};
		opts = $.extend({}, defaults, opts);
		//In case old innerBorders exist remove if desired
		if(opts.replace){
			this.svInnerBorderRemove();
		}
		//function to position divs to create inner border effect
		var doPosition=function(obj,divs,w,h){
			var o = obj.offset();
			$(divs[0]).css({
				width:	opts.thickness,
				top: 	o.top,
				left: 	o.left,
				height:	h
			});
			$(divs[1]).css({
				width:	opts.thickness,
				top: 	o.top,
				left: 	o.left+w-opts.thickness,
				height:	h
			});
			$(divs[2]).css({
				width:	w-(opts.thickness*2),
				top: 	o.top,
				left: 	o.left+opts.thickness,
				height:	opts.thickness
			});
			$(divs[3]).css({
				width:	w-(opts.thickness*2),
				top: 	o.top+h-opts.thickness,
				left: 	o.left+opts.thickness,
				height:	opts.thickness
			});	
		}		
		this.each(function() {
			var $this = $(this), h = $this.height(), w = $this.width();
			//create divs for inner border
			//alert(h+"|"+w);
			var divs = $('<div /><div /><div /><div />').appendTo('body').css({
							position:'absolute',padding:'0',margin:'0',
							backgroundColor:opts.color,
							opacity:opts.opacity
						});
			//if not replacing old divs, merge with stored divs
			if(!opts.replace &&  typeof $this.data('svInnerBorderDivs')=='object'){
				divs=$.merge(divs,$this.data('svInnerBorderDivs'));
			}
			//store all divs in object
			$this.data('svInnerBorderDivs',divs);
			//position divs over element to simulate inner borderrs
			doPosition($this,divs,w,h);
			//re-position border on window resize
			$(window).resize(function () { 
				doPosition($this,divs,w,h);					
			});		
			//in case resize plugin is used
				//resize border to fit new resized element
			$this.resize(function () { 
				doPosition($this,divs,$this.height(),$this.width());					
			});		
		});
		return this;}
})(jQuery);
(function($){
	$.fn.svInnerBorderRemove = function(){
	$(this).each(function() {
		$($(this).data('svInnerBorderDivs')).each(function(){
			$(this).remove();
		});
	});
	return this;}
})(jQuery);