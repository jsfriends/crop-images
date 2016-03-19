
(function( $ ) {
 
	var defaults = {
		offMaxWidth : 1,
		AlignImage : 'center',
		overflowParent : 1,
	}


    $.fn.cropImages = function(options) {

		croper = {};
		var el = this;

		var init = function(  ){
	    	el.find('img').each(function(){
				croper.settings = $.extend({}, defaults, options);

	    		var t = $(this);
	    		var imgInfo = infoSize(t);
	    		var parentInfo = infoSize(t.parent());

	    		setup(t);

	    		if(imgInfo[1] == 'horizontal') {
	    			t.css({'height' : parentInfo[3] + 'px'});
	    		} else {
	    			t.css({'width' : parentInfo[2] + 'px'});

	    			if(imgInfo[1] == 'square') {
	    				t.css({'height' : parentInfo[3] + 'px', 'width' : parentInfo[2] + 'px'});
	    			}
	    		}

	    		var imgNewInfo = infoSize(t);

	    		if(imgInfo[1] == 'horizontal') {
    				if(croper.settings.AlignImage == 'center') t.css({'left' : '50%','position' : 'relative', 'margin-left' : '-' + imgNewInfo[2] / 2 + 'px'});
	    		} else {
	    			if(imgInfo[1] == 'vertical') {
    					if(croper.settings.AlignImage == 'center') t.css({'top' : '50%','position' : 'relative', 'margin-top' : '-' + imgNewInfo[3] / 2 + 'px'});
	    			}
	    		}

	    		console.log(imgInfo,parentInfo);
	    	});
    	}

    	var infoSize = function (target) {
    		var $target = target,
    		targetwidth = $target.width(),
    		targetheight = $target.height(),
    		ntargetwidth = $target.naturalWidth;
    		ntargetheight = $target.naturalHeight;
    		aspect = 'none',
    		ratio = 0;

    		if(targetwidth > targetheight) {
    			aspect = 'horizontal';
    		} else {
    			aspect = 'vertical';
    		}

    		if(targetwidth == targetheight) {
    			aspect = 'square';
    		}

    		if(aspect == 'horizontal') {
    			ratio = targetwidth / targetheight;
    		} else {
    			ratio = targetheight / targetwidth;
    		}

    		var info = [ratio, aspect, targetwidth, targetheight];

    		return info;
    	}

    	var setup = function ( target ) {
    		var t = target,
    			twidth = t.width();

    		t.parent().addClass('croped-image');
    		if(croper.settings.offMaxWidth) t.css({'max-width' : 'none'});
    		if(croper.settings.overflowParent) t.parent().css({'overflow': 'hidden'});

    	}

    	init();

        return this;
    };
 
}( jQuery ));