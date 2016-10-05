app.directive('navbarCustom' , function() {
	return {
		restrict : 'A',
		scope : {},
		templateUrl : 'templates/navbarTemplate.html',
		controller : function($scope , $element) {

		} 
	}
});

app.directive('carousel' , function() {
    return {
        restrict : 'A',
        scope : {},
        templateUrl : 'templates/carouselTemplate.html',
        controller : function($scope , $element) {
        
        }
    }
});


app.directive('hoverImages' , function() {
   return {
        restrict : 'A',
        scope : {},
        templateUrl : 'templates/hoverImageComponent.html',
        controller : function($scope , $element) {
            $scope.cars = [
                {
                    image : 'images/porsche_918_400.png',
                    description : 'Porsche 918'
                },
                
                {
                    image : 'images/ferrari_f12_400.png',
                    description : 'Ferrari F12'
                },
                
                {
                    image : 'images/lexus_lfa_400.png',
                    description : 'Lexus LFA'
                },

                {
                    image : 'images/amg_gts_400.png',
                    description : 'Mercedes AMG GTs'      
                }
            ];
        }
   } 
});


app.component('carList' , {
    templateUrl : 'templates/carListTemplate.html',
    controller : ['$element' , function carListController($element) {
        
        //this is the data to be displayed in the first component ; 
        //car-detail component is the second one , extending the data from this component
        this.cars = [
            {
                name : 'Lambo Aventador',
                id : 'lamborghini-aventador', // be sure that the id matches the json file
                image : 'images/tiles_images/aventador.png',
            },
            
            {
                name : 'Ferrari 458',
                id : 'ferrari-458',
                image : 'http://www.ferrarimaseratiofatlanta.com/webassets/newsletter/images/nw_oct01.png',
            },
            
            {
                name : 'Ford Focus RS',
                id : 'ford-focus-rs',
                image : 'images/tiles_images/focus_rs.png'
            },
            
            {
                name : 'Jaguar F Type',
                id : 'jaguar-f-type',
                image : 'images/tiles_images/f_type.png'
            },
            
            {
                name : 'Mercedes SLS AMG',
                id : 'mercedes-sls-amg',
                image : 'http://www.motortrader.com.my/images/new_cars/mercedes-benz/sls-amg/mbz-sls-class-teaser.png'
            },
            
            {
                name : 'Subaru Impreza STI',
                id : 'subaru-impreza-sti',
                image : 'images/tiles_images/wrx.png'
            },
            
            {
                name : 'Audi RS3',
                id : 'audi-rs3',
                image : 'images/tiles_images/rs3.png'
            },
            
            {
                name : 'Volkswagen Golf VII',
                id : 'vw-golf',
                image : 'images/tiles_images/golf.png'
            }
        ];
        
        
//        this.delete = function(car) {
//            alert("You");
//            var index = this.cars.indexOf(car);
//            this.cars.splice(index , 1);
//        }
        
        this.animate_element_in = function($el) {
            $el.removeClass('gidd');
            $el.addClass('animated zoomIn');
        }
        
        this.animate_element_out = function($el) {
            $el.removeClass('animated zoomIn');
            $el.addClass('gidd');
        }

    }] 
});

app.component('carDetail' , {
    templateUrl : 'templates/carDetailTemplate.html',
    controller : function carDetailController($routeParams , $http , $element , parallaxHelper) {
         
        var self = this;
        
        self.carId = $routeParams.carId; 
        self.showInfo = false;
        
        self.animate_in = function($el) {
            $el.removeClass('gidd');
            $el.addClass('animated fadeInLeft');
        }
        
        
        self.animate_out = function($el) {
            $el.removeClass('animated fadeInLeft');
            $el.addClass('gidd');
        }        
        
        
        self.background = parallaxHelper.createAnimator(-0.4 , 200 , 0 , 0);
        
        
        // here we are getting the data that coresponds to the url location 
        $http.get('data/' + $routeParams.carId + '.json').then(function(response) {
            self.car = response.data;
        })
    }
});

app.directive('tabs' , function() {
    return {
        restrict : 'E',
        template : '  <uib-tabset active="activeJustified" justified="true"><uib-tab index="0" heading="Car">{{$ctrl.car.fullName}}</uib-tab><uib-tab index="1" heading="SJ">Short Labeled Justified content</uib-tab><uib-tab index="2" heading="Long Justified">Long Labeled Justified content</uib-tab></uib-tabset>',
        controller : function($scope , $element) {
        
        }
    }
});


app.directive('enterz' , function() {
    return {
         restrict : 'A',
         link : function(scope , element) {
                element.bind('mouseenter' , function () {
//                console.log("Inside element");
                element.addClass("thumb-hover");
         })
    }    
    }
})  


app.directive('leavez' , function() {
    return {
         restrict : 'A',
         link : function(scope , element) {
                element.bind('mouseleave' , function () {
//                console.log("Outside element");
                element.removeClass("thumb-hover");
         })
    }    
    }
}) 
