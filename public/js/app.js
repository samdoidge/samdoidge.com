$(document).ready(function()
{
	Socialite.setup({
		facebook: {
			lang : 'en_GB',
			appId: 693230797356715
		}
	});





    $(window).scroll(function(){
    		Socialite.load($(this)[0]);
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