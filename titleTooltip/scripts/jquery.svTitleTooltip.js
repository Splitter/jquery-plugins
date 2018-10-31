(function($){
	$.fn.svTitleTooltip = function(opts) {
		var defaults = {offsetX: 0,offsetY: 0,type:1};
		var settings = $.extend({}, defaults, opts);
		this.each(function(){
			var $this=$(this);
			if(settings.type==1){
				var tt=$('<div class="'+settings.tClass+'"/>')
						.append($('<div class="sv_tooltip_top"/>'))
						.append($('<div class="sv_tooltip_content"/>')
								.text($this.attr('title'))					
						)
						.append($('<div class="sv_tooltip_bottom"/>'))
						.append($('<div class="sv_tooltip_arrow"/>'));
			}
			else{
				var tt=$('<div class="'+settings.tClass+'"/>')
						.append($('<div class="sv_tooltip_arrow"/>'))
						.append($('<div class="sv_tooltip_top"/>'))
						.append($('<div class="sv_tooltip_content"/>')
								.text($this.attr('title'))					
						)
						.append($('<div class="sv_tooltip_bottom"/>'));
			
			}
			$this.attr('title','');
			$this.hover(function(){				
				var offset = $this.offset(),
					x = offset.left+settings.offsetX,
					y = (settings.type==1)?offset.top+settings.offsetY:offset.top+$this.height()+settings.offsetY;
				tt.css({
						position:'absolute',
						top: y+"px",
                        left: x+"px",
						display:'none',
						zIndex:10000,
						opacity:1
					}).appendTo('body').fadeIn(350);
			},
			function(){
				$(tt).stop(true).remove();
			});			
		});
		return this;
	}
})(jQuery);
jQuery('document').ready(function(){	
		var opts={
				offsetX:0,
				offsetY:-50,
				tClass:'svtt_lighttop'
			};
		jQuery('.tooltip_lighttop').svTitleTooltip(opts);
			opts.tClass='svtt_darktop';
		jQuery('.tooltip_darktop').svTitleTooltip(opts);
			opts.tClass='svtt_darkbottom';
			opts.type=0;
			opts.offsetY=0;
		jQuery('.tooltip_darkbottom').svTitleTooltip(opts);
			opts.tClass='svtt_lightbottom';
		jQuery('.tooltip_lightbottom').svTitleTooltip(opts);
});
