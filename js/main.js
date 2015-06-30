$(function () {
	//configuration
	var width = 1500;
	var animationSpeed = 1000;
	var pause = 4000;
	var currentSlide= 1;
	var interval;

	//cache DOM
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');

	function startSlider(){ 
		interval = setInterval(function(){
			$slideContainer.animate({'margin-left':'-='+width},animationSpeed, function(){
				currentSlide++;
				if (currentSlide === $slides.length){
					currentSlide = 1;
					$slideContainer.css('margin-left', 0);
				}
			});
			}, pause);
	}
	function stopSlider() {
		clearInterval(interval);
	}
	$slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);
	startSlider();

});
