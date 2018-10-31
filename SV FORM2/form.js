

(function($){ 

//create toolbox namespace if does not exist
	$.toolbox = $.toolbox || function( obj ){ return $( obj ).toolbox(); };
	$.toolbox.fn = $.toolbox.fn || {};
	$.fn.toolbox = $.fn.toolbox || function( method , options ){
						$.extend(this, $.toolbox.fn);
						if ( method && $.toolbox.fn[method] ) {
							return $.toolbox.fn[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
						} 
						else {
							return this;
						}
					}
// 

//form plugin function
	$.toolbox.fn.form = function( opts ){
		var sets = {
			selectClass:   'selector',
			radioClass: 'radio',
			checkboxClass: 'checker',
			fileClass: 'uploader',
			filenameClass: 'filename',
			fileBtnClass: 'action',
			fileDefaultText: 'No file selected',
			fileBtnText: 'Choose File',
			checkedClass: 'checked',
			focusClass: 'focus',
			disabledClass: 'disabled',
			buttonClass: 'button',
			activeClass: 'active',
			hoverClass: 'hover'
		}

		
		$.extend( sets , opts );
		return this.each( function() {
	
			if( !$.browser.msie || $.browser.version >= 7 ){
			
				$t = $( this );
				var type = ( ( $t.is( 'select' ) ) ? 'select' : $t.attr( 'type' ) );
				var cls = sets[ type+ "Class"];
				//alert( cls );
				if( type == 'file' ){
					var d = $('<div />').addClass(sets.fileClass),
						fname = $('<span>'+sets.fileDefaultText+'</span>').addClass(sets.filenameClass),
						btn = $('<span>'+sets.fileBtnText+'</span>').addClass(sets.fileBtnClass); 
					
					$t.wrap(d);
					$t.after(btn);
					$t.after(fname);					
					if(!$t.attr("size")){
						var divWidth = d.width();
						$t.attr("size", divWidth/10);
					}
					var file = ($t.val() || sets.fileDefaultText).split(/[\/\\]+/);						
					fname.text(file[(file.length-1)]);						
				}
				else{
					var d = $('<div />').addClass(cls),
						s = $('<span />');
					$t.wrap(d);
				}
				
				$t.css('opacity', 0);
				
				if($t.is( 'select' )){				
					var selected = $t.find(":selected:first");
					if(selected.length == 0){
						selected = $t.find("option:first");
					}
					s.html(selected.html());
					$t.before(s);
					s = $t.parent('span').attr('name', $t.attr('name')) || $t.siblings("span");
					d = s.parent();
				}
				else if(type != 'file'){
					$t.wrap(s);
					s = $t.parent('span').attr('name', $t.attr('name')) || $t.siblings("span");
					d = s.parent();
				}
				
				
				
				$t.bind({
					"change": function() {
						if( $(this).is('select') )
							s.text($(this).find(":selected").html());
						if( type == 'file' && !$.browser.ie ){
							var filename = ($t.val() || sets.fileDefaultText).split(/[\/\\]+/);	
							fname.text(filename[(filename.length-1)]);
						}
					},
					"focus": function() {
						d.addClass(sets.focusClass);
					},
					"blur": function() {
						d.removeClass(sets.focusClass);
					},
					"click touchend": function(){
						if(type != 'file'){
							
							if(!$(this).attr("checked")){
							//box was just unchecked, uncheck span
								s.removeClass(sets.checkedClass);
							}else{
							//box was just checked, check span.
								if( type == 'radio' ){
									$("." + cls + " span." + sets.checkedClass + ":has([name='" + s.attr('name') + "'])").removeClass(sets.checkedClass);
								}
								s.addClass(sets.checkedClass);
							}
						}
					},
					"mouseenter": function() {
						d.addClass(sets.hoverClass);
					},
					"mouseleave": function() {
						d.removeClass(sets.hoverClass);
					},
					"keyup": function(){
						if( $(this).is('select') )
							s.text($(this).find(":selected").html());
					}
				});
				
				
				if (type == 'file' && $.browser.msie){
					$t.bind('click', function() {
						setTimeout(function(){var filename = ($t.val() || sets.fileDefaultText).split(/[\/\\]+/);	fname.text(filename[(filename.length-1)]);}, 0);
					});
				}
				
				  //handle defaults
				if($t.attr("checked")){
				//box is checked by default, check our box
					s.addClass(sets.checkedClass);
				}

				//handle disabled state
				if($t.attr("disabled")){
				//box is checked by default, check our box
					d.addClass(sets.disabledClass);
				}
				
			}
	
		});	//end return
	
	};// end form function

})(jQuery);
