angular.module('app')
	.controller('discoverController',['$scope','$timeout',function($scope,$timeout){

		$scope.dataNav=[
			{name:'精选',bool:true},
			{name:'搭配',bool:false},
			{name:'好物',bool:false},
			{name:'时尚',bool:false}
		];

		$scope.dataImg=[
			{
				img:'./images/Img_find_4@3x.png',
				presentation:'休闲商务修身jacket青年棒球服外套',
				price:'￥298',discount:'./images/discount1.png'
			},
			{
				img:'./images/Img_find_4@3x.png',
				presentation:'休闲商务修身jacket青年棒球服外套',
				price:'￥298',discount:'./images/discount1.png'
			}
		];
		
		$scope.dataLike=[
			{img:"./images/Img_find_3@3x.png"},
			{img:"./images/Img_find_3@3x.png"},
			{img:"./images/Img_find_3@3x.png"},
			{img:"./images/Img_find_3@3x.png"},
			{img:"./images/Img_find_3@3x.png"},
			{img:"./images/Img_find_3@3x.png"},
			{img:"./images/Img_find_3@3x.png"},
			{img:"./images/Img_find_3@3x.png"},	
		];

		$scope.addItem=function(){
			var index=Math.floor(Math.random()*$scope.dataImg.length)
			for(var i=0;i<2;i++){
				$scope.dataImg.unshift($scope.dataImg[index]);
			}
			$timeout(function(){
				$scope.$broadcast('scroll.refreshComplete')
			},1000);
		}

		 $scope.index=0;
		$scope.initNav=function(index){
			for(var i=0;i<$scope.dataNav.length;i++){
				if(i==index){
					$scope.dataNav[i].bool=true;
					console.log('adsfdf')
				}else{
					$scope.dataNav[i].bool=false;
				}
			}
		}
		$scope.discoverNav=function(index){
			$scope.initNav(index);
		}

		
	}])