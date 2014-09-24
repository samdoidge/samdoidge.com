$(document).ready(function()
{
	Socialite.setup({
		facebook: {
			lang : 'en_GB',
			appId: 693230797356715
		}
	});

	Socialite.load($(this)[0]);



    $(window).scroll(function(){
    var posTop = $(window).scrollTop() - $('.container').offset().top
    if (posTop > 160)
    {
    	$('.social-buttons').addClass('fixed');
    }
    else if (posTop < 160)
    {
    	$('.social-buttons').removeClass('fixed');
    }
});

});