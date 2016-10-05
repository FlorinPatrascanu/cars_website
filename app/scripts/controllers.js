app.controller('menuCtrl' , function($scope){
	$scope.isCollapsed = true;
	$scope.carTypes = [
		{
			type : 'Muscle'
		},

		{
			type : 'Luxury'
		},

		{
			type : 'Exotic'
		},

		{
			type : 'Tuner'
		}
	]
});

app.controller('carouselCtrl', function ($scope) {
 
    var slides = $scope.slides = [];
    $scope.noWrapSlides = false;
    
    $scope.addSlide = function () {
        slides.push(
            {
                image : 'images/bmw_r.jpg',
                caption : 'BMW'
            },
            
            {
                image : 'images/dodge_srt.jpg',
                caption : 'Fancy a big american muscle thing? Maybe this is your answer.'
            },
            
            {
                image : 'images/aventador_sv.jpg',
                caption : 'Super Veloce'
            },
            
            {
                image : 'images/gtr_front.jpg', 
                caption : 'Nissan GT-R'
            },
            
            {
                image : 'images/mclaren_12c.jpg',
                caption : 'MP4-12C'
            },
            
            {
                image : 'images/r8.png', 
                caption : 'Audi R8'
            },
            
            {
                image : 'images/toyo_supra.jpg',
                caption : 'You can never go wrong with a tuner. Magnificent 2JZ-GTE engine that will take on every supercar.'
            }
        );
    };

    $scope.addSlide();
    
    
});


app.controller('bannerCtrl' , function($scope , $element) {
              $scope.animateElementIn = function($el) {
                  $el.removeClass('gidd');
                  $el.addClass('animated fadeInDown');
              }
              
              $scope.animateElementOut = function($el) {
                  $el.addClass('gidd');
                  $el.removeClass('animated fadeInDown');
              }
              
});


app.controller('stickyCtrl' , function($scope , $location , $anchorScroll) {
    $scope.disableSticking = false; 
    
    $scope.scrollTo = function(scrollLocation) {
        $location.hash(scrollLocation);
        $anchorScroll();
    }
    
  
//    $scope.selectMe = function(event) {
//        angular.element(event.target).addClass('redz');
//    }
});




