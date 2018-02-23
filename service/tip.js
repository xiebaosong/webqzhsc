angular.module('app')
	.factory('Tip', ['$ionicPopup', '$ionicLoading', function ($ionicPopup, $ionicLoading) {
		return {

			showTip: function (msg) {
				$ionicPopup.show({
			    template: '<div class="text-center">' + msg + '</div>',
			    buttons: [
			      {
			        text: '<span>确认</span>',
			        type: 'button-balanced'
			      }
			    ]
			  });
			},

			loadTips: {
				showLoading: function () {
					$ionicLoading.show({
		      	template: '<ion-spinner icon="spiral"  class="spinner-balanced"></ion-spinner>'
		    	});
				},
				hideLoading: function () {
					$ionicLoading.hide();
				}
			}

		};

	}])