angular.module('app',['ionic'])
	.controller('personalDataController',['$scope','modal',function($scope,modal){
		$scope.data=[
			{name:'头像',img:'./images/personal_xggrzl_tx@3x.png',way:'comment()'},
			{name:'会员名',content:'the luck Fary',way:'member()'},
			{name:'会员等级',content:'普通会员',id:3},
			{name:'性别',content:'女',id:4},
			{name:'生日',content:'1996-12-12',id:5},
			{name:'修改密码',content:'未设置',id:6},
		];

		modal.initModal($scope);

		$scope.comment=function(){
			modal.openModal($scope);
		}
		$scope.close=function(){
			modal.closeModal($scope);
		}

		

	}])
