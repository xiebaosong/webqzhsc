angular.module('app')
	.controller('shoppingCartController',['$scope','Tip',function($scope,Tip){
		$scope.data=[
			{
				name:'明星同款',
				 img:'./images/Img_find_4@3x.png',
				 presentation:'千纸鹤男士针织衫长袖圆领修身条纹毛衣',
				 presenta:'青年时尚潮流线衣5053', size:'尺寸：S', 
				 clor:'颜色：青黑色',
				 price:188.00,
				 check:false,
				 numb:1
			},
			{
				name:'明星同款', 
				img:'./images/Img_find_4@3x.png', 
				presentation:'千纸鹤男士针织衫长袖圆领修身条纹毛衣', 
				presenta:'青年时尚潮流线衣5053', 
				size:'尺寸：S', 
				clor:'颜色：青黑色',
				price:188.00,
				check:false,
				numb:1
			},
			{
				name:'明星同款', 
				img:'./images/Img_find_4@3x.png', 
				presentation:'千纸鹤男士针织衫长袖圆领修身条纹毛衣', 
				presenta:'青年时尚潮流线衣5053', 
				size:'尺寸：S', clor:'颜色：青黑色',
				price:188.00,
				check:false,
				numb:1
			}
		];
		$scope.reduce=function(index){
				if($scope.data[index].numb<=1){
					$scope.data[index].numb=1;
				}else{
					$scope.data[index].numb-=1;
				}	
				$scope.data[index].check=true;
				$scope.shoppingSum();

		}	
		$scope.add=function(index){
					$scope.data[index].numb+=1;
					console.log(index)
					$scope.data[index].check=true;
					$scope.shoppingSum();
		}
		//删除选项
		$scope.delete=function(index){
			$scope.data.splice(index,1)
			console.log(index)
			$scope.shoppingSum();
		}

		$scope.allCheck = false;
		$scope.sum=0;
		//全选金额
		$scope.shoppingSum=function(){
			console.log($scope.sum)
			$scope.sum=0;
			for(var i=0;i<$scope.data.length;i++){
				var t=0;
				if($scope.data[i].check){
					t=$scope.data[i].price*$scope.data[i].numb
					$scope.sum+=t
					console.log("==>",$scope.sum)
				}	
			}
		}
				
		$scope.changeCheckbox = function(bool){
			$scope.shoppingSum();
			for(var i=0;i<$scope.data.length;i++){
				 if(!$scope.data[i].check){
				 	console.log(!$scope.data[i].check)
					$scope.allCheck = false;
					return;
				}		
			}
			$scope.allCheck = true;
		};
		
		$scope.allSelect = function(bool){
			if(bool){
				for(var i=0;i<$scope.data.length;i++){
					$scope.data[i].check = true;
				}
				$scope.shoppingSum();
			}else{
				for(var i=0;i<$scope.data.length;i++){
					$scope.data[i].check = false;
				}
				$scope.sum=0.00;
			}
		};


	}])