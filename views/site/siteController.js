angular.module('app',['ionic'])
	.controller('siteController',['$scope','ActionSheet',function($scope,ActionSheet){

		$scope.data=[
			{defaule:'positive',name:'韦小宝',site:'广东省广州市海珠区赤沙村35号',phone:'13445434796',moren:'默认地址'},
			{name:'周星驰',site:'广东省茂名市区赤海沙村35号',phone:'13445434796'},
			{name:'范彬彬',site:'广东省广州市海珠港区村35号',phone:'13445434796'},
			{name:'成龙',site:'广东省广州市海珠区赤沙村35号',phone:'13445434796'},
			{name:'李连杰',site:'广东省广州市海珠区赤沙村35号',phone:'13445434796'},
		];

		$scope.dataAdd=[
			{name:'姓名',value:'韦小宝'},
			{name:'电话',value:'13659685568'},
			{name:'地址',value:'广东省广州市海珠区赤沙村35号'},

		];

		$scope.type='site';
		
		$scope.site=function(){
			$scope.type='site';
		}
		$scope.add=function(){
			$scope.type='add';
		}


		$scope.openSheet=function(){
			$scope.closeSheet=ActionSheet.showSheet({
				title:'平台',
				qq:'腾讯QQ',
				wechat:'小龙微信',
				success:function(i){
					console.log(i);
				}

			});
		}

		$scope.closeSheet=function(){
			$scope.closeSheet();
		}
		
		
	}])