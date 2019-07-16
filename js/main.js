$(function () {

	var classe = "atual";
	var mAcima = $('.media-acima');
	var mAbaixo = $('.media-abaixo');
	var mEntre = $('.media-entre');

	$('.media-acima').addClass('mostrar');
	$('.btn-maior').addClass('btn-hover');

	myFunction();
	$(window).on('resize', myFunction);

	function myFunction(x) {

		$('.tags p').removeClass("atual");

		if (window.matchMedia("(min-width: 1200px)").matches) {
			$('.m1200').addClass(classe);
			$('strong').addClass(classe).html($('.mostrar .atual span').html());

		} else if (window.matchMedia("(min-width: 992px)").matches) {
			$('.m992').addClass(classe);
			$('strong').addClass(classe).html($('.mostrar .atual span').html());

		} else if (window.matchMedia("(min-width: 768px)").matches) {
			$('.m768').addClass(classe);
			$('strong').addClass(classe).html($('.mostrar .atual span').html());

		} else if (window.matchMedia("(min-width: 576px)").matches) {
			$('.m576').addClass(classe);
			$('strong').addClass(classe).html($('.mostrar .atual span').html());

		} else {
			$('.m575').addClass(classe);
			$('strong').addClass(classe).html($('.mostrar .atual span').html());
		};
	};
	
	function esconder(elemento1, elemento2) {
		elemento1.removeClass('mostrar');
		elemento2.removeClass('mostrar');
	}

	$('.btn-maior').click(function () {
		$(this).addClass('btn-hover');
		$('.btn-menor, .btn-entre').removeClass('btn-hover');
		mAcima.addClass('mostrar');
		esconder(mAbaixo, mEntre);
		$('strong').html($('.mostrar .atual span').html());
	});
	$('.btn-menor').click(function () {
		$(this).addClass('btn-hover');
		$('.btn-maior, .btn-entre').removeClass('btn-hover');
		mAbaixo.addClass('mostrar');
		esconder(mAcima, mEntre);
		$('strong').html($('.mostrar .atual span').html());
	});
	$('.btn-entre').click(function () {
		$(this).addClass('btn-hover');
		$('.btn-maior, .btn-menor').removeClass('btn-hover');
		mEntre.addClass('mostrar');
		esconder(mAcima, mAbaixo);
		$('strong').html($('.mostrar .atual span').html());
	});

});