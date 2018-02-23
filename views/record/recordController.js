angular.module('app',['ionic'])
	.controller('recordController',['$scope','$ionicActionSheet',function($scope,$ionicActionSheet){

		$scope.data=[
			{time:'今天',img:'./images/Img_wddn_ckwl_1@3x.png',intro:'千纸鹤男士针织衫长袖圆领修身条纹毛衣 青年时尚潮流线衣5053',price:'￥ 188.00',time:'今天'},
			{img:'./images/Img_wddn_ckwl_1@3x.png',intro:'千纸鹤男士针织衫长袖圆领修身条纹毛衣 青年时尚潮流线衣5053',price:'￥ 188.00'},
			{time:'9月17日',img:'./images/Img_wddn_ckwl_1@3x.png',intro:'千纸鹤男士针织衫长袖圆领修身条纹毛衣 青年时尚潮流线衣5053',price:'￥ 188.00'},
		];

		$scope.show=function(){
			var hideSheet=$ionicActionSheet.show({
				titleText:'<span class="balanced">确定要清除所有的购买记录吗？<span>',
				buttons:[
					{ text:'取消'},
				],
				destructiveText:'确定',
				destructiveButtonClicked:function(){
					console.log('asdf');
					hideSheet();
				},
				buttonClicked:function(item){
					console.log(item)
					hideSheet();
				}
			})

			console.log("asddff");
		}
	}])