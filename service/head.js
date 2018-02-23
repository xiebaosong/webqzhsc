angular.module('app')
	.factory('modal',['$ionicModal',function($ionicModal){

		return {
			initModal:function(scope){

				$ionicModal.fromTemplateUrl('./views/personalData/head.html',{
					scope:scope,
					anmation:'slide-in-up'
				}).then(function(m){
				scope.m=m;
			})
			},

			openModal:function(scope){
				scope.m.show();
			},
			closeModal:function(scope){
				scope.m.hide();
			}
		}

	}])
	