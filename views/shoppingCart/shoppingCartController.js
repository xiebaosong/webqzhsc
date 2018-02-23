angular.module('app')
	.controller('shoppingCartController',['$scope',function($scope){
		$scope.data=[
			{name:'明星同款', img:'./images/Img_find_4@3x.png', presentation:'千纸鹤男士针织衫长袖圆领修身条纹毛衣', presenta:'青年时尚潮流线衣5053', size:'尺寸：S', clor:'颜色：青黑色',price:'¥ 188.00'},
			{name:'明星同款', img:'./images/Img_find_4@3x.png', presentation:'千纸鹤男士针织衫长袖圆领修身条纹毛衣', presenta:'青年时尚潮流线衣5053', size:'尺寸：S', clor:'颜色：青黑色',price:'¥ 188.00'},
			{name:'明星同款', img:'./images/Img_find_4@3x.png', presentation:'千纸鹤男士针织衫长袖圆领修身条纹毛衣', presenta:'青年时尚潮流线衣5053', size:'尺寸：S', clor:'颜色：青黑色',price:'¥ 188.00'},
			{name:'明星同款', img:'./images/Img_find_4@3x.png', presentation:'千纸鹤男士针织衫长袖圆领修身条纹毛衣', presenta:'青年时尚潮流线衣5053', size:'尺寸：S', clor:'颜色：青黑色',price:'¥ 188.00'}
		];
		$scope.check=function(){
			
		}
	}])