angular.module('app')
	.controller('classifyController',['$scope','$state','$ionicSideMenuDelegate',function($scope,$state,$ionicSideMenuDelegate){
		
		$scope.dataLi=[
			{font:'聚划算', bool:true, id:1},
			{font:'秋装新品', bool:false, id:2},
			{font:'清仓专区', bool:false, id:3},
			{font:'长袖衬衫', bool:false, id:4},
			{font:'夹克', bool:false, id:5},
			{font:'便西', bool:false, id:6},		
			{font:'卫衣', bool:false, id:7},
			{font:'长袖T恤', bool:false, id:8},
			{font:'针织开衫', bool:false, id:9},
			{font:'休闲裤', bool:false, id:10},
			{font:'牛仔库', bool:false, id:11}
		];
       
		$scope.goList=function(stateName){
			$state.go(stateName);

		}
		$scope.initClassifyList=function(index){
			for(var i=0;i<$scope.dataLi.length;i++){
				if(index==0){
					$scope.goList('footer.classify.classifyList')
				}else if(index==1){
					$scope.goList('footer.classify.classifyList1')
				}else{
					return;
				}
			}
		}
		$scope.initClassifyListColor=function(index){
			for(var i=0;i<$scope.dataLi.length;i++){
				if(index==i){
					$scope.dataLi[i].bool=true;
				}else{
					$scope.dataLi[i].bool=false;
				}
			}
		}
		$scope.goClsaaifyList=function(index){
			$scope.initClassifyList(index);
			$scope.initClassifyListColor(index)
			console.log(index)
		}
		
	}])