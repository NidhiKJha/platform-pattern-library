if ( $('.navigation:not(.pl-sub-pattern .navigation)').height() > $(window).height() ) {
    $('.navigation').toggleClass('absolute');
}

$('.hidden-content-trigger').click(function() {
	$(this).toggleClass('open');
    $(this).siblings('.hidden-content').toggleClass('visible');
});
