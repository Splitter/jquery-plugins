(function($){
	$.fn.svImageTooltip = function(opts) {
		var defaults = {
				border: '0px solid #555',
				offsetX: 20,
				offsetY: 20
			};
		var settings = $.extend({}, defaults, opts);
		this.each(function() {
			var $this=$(this);
			var img;
			if($this.attr('rel') != '') {
				$this.hover(function(ev) {	
					$('div.sv_imgtooltip').stop(true).remove();
					var div=$('<div class="sv_imgtooltip" />').stop(true).hide().prependTo('body');
					$(new Image()).load(function () { 							
							img=$(this);
							img.removeAttr("width").removeAttr("height").css({ width: "", height: "" });
							var pos=getPosition(ev,this.width,this.height);					
							img.css({
								border: settings.border,
								position:'absolute',
								padding:'0',
								margin:'0'
							})
							div.append(this).css({
									position:'absolute',
									display:'block',
									padding:'0',
									margin:'0',
									top: pos[0],
									left: pos[1],
									zIndex:10000
								})
								.fadeIn(450);
							img.attr('sv_loaded','1'); 
					}).attr('src', $this.attr('rel'));					
				}, function() {
					$('div.sv_imgtooltip').stop().remove();
				});
			}
			$this.mousemove(function(ev) {
				if(img.attr('sv_loaded')=='1'){
						var pos=getPosition(ev,img.width(),img.height());					
						$('div.sv_imgtooltip').css({top: pos[0],left: pos[1]});
				}
			});
			var getPosition = function(ev,w,h){
				var pos=[]
				if((ev.pageY+settings.offsetY+h+(parseInt(settings.border)*2))>$(document).height()){
					pos[0] = ev.pageY-settings.offsetY-h;
				}
				else{
					pos[0]= ev.pageY + settings.offsetY;
				}						
				if((ev.pageX+settings.offsetX+w+(parseInt(settings.border)*2))>$(document).width()){
					pos[1] = ev.pageX-settings.offsetX-w;
				}
				else{
					pos[1]= ev.pageX + settings.offsetX;
				}
				return pos;
			}
		});
		return this;
	}
})(jQuery);
