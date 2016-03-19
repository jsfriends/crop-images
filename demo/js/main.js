
var main = {

    init: function() {
		this.scrollbg();
	},

    scrollbg: function(){
		var heightbody = $('body').height(),
			bgcontent = $('.bg-container'),
			setpos = $(window).scrollTop(),
			windowheight = $(window).height();

		getpos = setpos / heightbody * 300;

		bgcontent.css({'top': '-'+ getpos + '%'});
	}
}

$(function() {
	$('.images-box').cropImages();
	main.init();
});

$(window).on('scroll', function(){
	main.scrollbg();
});