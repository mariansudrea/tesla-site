app.controller('mainController', ['$rootScope','$log','$interval','$http','$scope','$state', function($rootScope,$log,$interval,$http,$scope,$state){
	$rootScope.sliderStyle = {		"width":			"3600px",
									"margin-left":			$rootScope.sliderPosition + "px"};
	console.log($rootScope.sliderStyle);
	if (!$rootScope.sliderInterval){
		$rootScope.sliderInterval = $interval(function(){/*$scope.$apply(*/$scope.slideRight()},6000);
	}
	$rootScope.sliderPosition = 0;
	$rootScope.sliderPositionMobile = 0;
	
//	angular.element(document).ready(function(){
//		setTimeout(function(){
//		$rootScope.mobileSliderWidth = $('.sliderMobile').css('width').split('px')[0] * 2;
//		},1000);
//	});
	$scope.mobileMenuSize = 60;
	$scope.menuStatus = "+";
	$scope.formData = {
			name: "Name",
			email: "Email",
			message: "Message"
		};
/// TOUCHSTART REGISTERED ! NOW TO MAKE WORK.. NVM, just do Mouse events.
	$scope.$on('$viewContentLoaded', function() {
		$('.sliderImage').on('touchstart', function(e){
			$scope.beginSwipeX = parseInt(e.originalEvent.touches[0]['pageX'] );
			$scope.beginSwipeTime = Date.now();
			return false;
		});
		$('.sliderImage').on('touchend', function(e){
		  $scope.endSwipeTime = Date.now();
		  var a =  $scope.endSwipeTime - $scope.beginSwipeTime;
		  if ( a < 600 ) {
			$scope.endSwipeX = parseInt(e.originalEvent.changedTouches[0]["pageX"]);
			if ( $scope.beginSwipeX > $scope.endSwipeX + 70 ){
				$scope.slideRight('yes');
				
			} else if ( $scope.beginSwipeX < $scope.endSwipeX - 70 ){
				$scope.slideLeft('yes');
			} else if ( a < 100 ) { 
				e.target.click(); 
			}
		  }
		  return false;
		});

// these were outside before, now moved in and working again, maybe move all listeners in here 

	jQuery('#emailContact').focusout(function(){
		if ( $scope.formData.email == "" ) {
			$scope.formData.email = "Email";
			$scope.$digest();
		}
	});
	jQuery('#emailContact').focus(function(){
		if ( $scope.formData.email == "Email" ) {
			$scope.formData.email = "";
			$scope.$digest();
		}
	});
	jQuery('#nameContact').focusout(function(){
		if ( $scope.formData.name == "" ) {
			$scope.formData.name = "Name";
			$scope.$digest();
		}
	});
	jQuery('#nameContact').focus(function(){
		if ( $scope.formData.name == "Name" ) {
			$scope.formData.name = "";
			$scope.$digest();
		}
	});
	jQuery('#messageContact').focusout(function(){
		if ( $scope.formData.message == "" ) {
			$scope.formData.message = "Message";
			$scope.$digest();
		}
	});
	jQuery('#messageContact').focus(function(){
		if ( $scope.formData.message == "Message" ) {
			$scope.formData.message = "";
			$scope.$digest();
		}
	});
   });


// END OF VIEW CONTENT LOADED INITIALIZERS

	$('.navItemFirst').click(function(event){
		if ( window.innerWidth < 910 ) { 
			if ( $(event.target).parent().css('height') == '40px' ) {
				var items_times_thirty = $(event.target).parent().children().length * 60;
				$(event.target).parent().css('height', items_times_thirty + "px");
			} else {
				$(event.target).parent().css('height', "40px");
			}
		}
	});	

	$('.contactSmall,.contactBig').click(function(event){
		if ($(event.target).val() == "Email" || 
			$(event.target).val() == "Name"  ||
			$(event.target).val() == "Message" ) 
			$(event.target).select();
	})

	$scope.go = function(event,a){

		if ( $rootScope.sliderInterval == null) { // restart slider on page leave
	        $rootScope.sliderInterval = $interval(function(){/*$scope.$apply(*/$scope.slideRight()},7000);
		}
		if ( event != null ) {
			jQuery(event.target).parent().css('z-index','0');
			jQuery(event.target).parent().hover(function(){$(this).css('z-index','1')},
											function(){$(this).css('z-index','0')});
		}
		$state.go(a);
//		jQuery(event.target).parent().css('z-index','0');
//		setTimeout(function(){jQuery(event.target).parent().css('display','block');},100);
//		alert(event.target);
	};
	$scope.submit = function(){
		$http.post('./send_email.php', $scope.formData).then(function(response,status){
				alert('Thank you for contacting us. We will get back to you shortly');
				$state.go('about');
		},function(data,status){
				//alert('Server Error. Please try again later.');
				alert('Thank you for contacting us. We will get back to you shortly');
				$state.go('about');
		});
	}
	$scope.toggleMenu = function() {
		if ( $scope.mobileMenuSize == 60 ) {
			$scope.mobileMenuSize = 660;
			$scope.menuStatus = '-';
		} else {
			$scope.mobileMenuSize = 60;
			$scope.menuStatus = "+";
		}
	}
	$scope.navMobile = function(there) {
		$scope.go(null,there);
		$scope.mobileMenuSize = 60;
		$scope.menuStatus = "+";
	}
/*	jQuery('.sliderForward').click(function(){
		if ( $scope.sliderInterval != null ){
			$interval.cancel($scope.sliderInterval);
			$scope.sliderInterval = null;
		}
		$scope.slideRight()
	});
	jQuery('.sliderBack').click(function(){
		if ( $scope.sliderInterval != null ){
			$interval.cancel($scope.sliderInterval);
			$scope.sliderInterval = null;
		}
		$scope.slideLeft();
	});*/
	$scope.slideLeft = function(clicked){
		if(clicked) {
			$interval.cancel($rootScope.sliderInterval);
			$rootScope.sliderInterval = null;
		};
		$rootScope.sliderPosition = $rootScope.sliderPosition == 0 ? -2700 : $rootScope.sliderPosition + 900;
		$rootScope.sliderPositionMobile = ( $rootScope.sliderPositionMobile == 0 ? -300 : $rootScope.sliderPositionMobile + 100 );
		$rootScope.sliderStyle = {		"width":			"3600px",
									"margin-left":			$rootScope.sliderPosition + "px"};
//		if(!clicked) {$scope.$digest()};
		$log.log($rootScope.sliderPosition);
		if (clicked === "yes" ) {
//			alert('dragged');
			$scope.$digest();
		}
	}
	$scope.slideRight = function(clicked){
		if(clicked) {
			$interval.cancel($rootScope.sliderInterval);
			$rootScope.sliderInterval = null;
		};
//		console.log("slider image width: " + $rootScope.mobileSliderWidth);
	//	alert('sliding right');
		$rootScope.sliderPosition = ( $rootScope.sliderPosition == -2700 ? 0 : $rootScope.sliderPosition - 900 );
		$rootScope.sliderPositionMobile = ( $rootScope.sliderPositionMobile == -300 ? 0 : $rootScope.sliderPositionMobile - 100 );
		$rootScope.sliderStyle = {		"width":			"3600px",
									"margin-left":			$rootScope.sliderPosition + "px"};
		
//		if(!clicked) {setTimeout(function(){$log.log('digesting');$rootScope.$digest()},2000)};
		$log.log($rootScope.sliderPosition);
		if (clicked === "yes" ) {
//			alert('dragged');
			$scope.$digest();
		}
	}
	
}]);
