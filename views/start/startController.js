angular.module('app')
	.controller('startController', ['$scope', '$state', function ($scope,$state) {

		$scope.slide = {
			doesContinue: false,
			autoPlay: true,
			// intervalTime: 2000,
			showPager: true
		};

		$scope.data = [
			{img: './images/start1.png',id:1},
			{img: './images/start2.png',id:2},
			{img: './images/start3.png',id:3}
		
		];

		$scope.goPage=function(stateName){
			$state.go(stateName)
		}

		$scope.skip= function(){
			setTimeout(function(){
				$state.go('login')
			},10000)		
		}
		$scope.skip();
		$scope.initImg=function(index){
				if(index==2){
					$scope.goPage('login');
					console.log(index)
				}else{
					return;
				}
		}
		$scope.cutHome=function(index){
			$scope.initImg(index)
		}
	}])