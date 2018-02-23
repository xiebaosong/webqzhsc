angular.module('app')
	.controller('orderController',['$scope',function($scope){
		$scope.dataNav=[
			{name:'全部订单',bool:true},
			{name:'待付款',bool:false},
			{name:'待发货',bool:false},
			{name:'待收货',bool:false},
			{name:'待评价',bool:false},
		];

		$scope.initNav=function(index){
			for(var i=0;i<$scope.dataNav.length;i++){
				if(index==i){
					$scope.dataNav[i].bool=true;
				}else{
					$scope.dataNav[i].bool=false;
				}
			}
		}

		$scope.cut=function(index){
			$scope.index = index;
			$scope.initNav(index);
		}

		$scope.cutNav=function(index){
			$scope.initNav(index);
			$scope.cut(index);
		}	
	}])