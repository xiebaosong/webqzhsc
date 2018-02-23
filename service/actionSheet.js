angular.module('app')
	.factory('ActionSheet',['$ionicActionSheet',function($ionicActionSheet){
		return {
			showSheet: function(o){
				var closeSheet=$ionicActionSheet.show({
					titleText:o.title,
					buttons:[
						{text:o.qq},
						{text:o.wechat},
					],
					buttonClicked:function(i){
						o.success && typeof o.success==='function' && o.success(i);
						closeSheet();
					}
				});
				return closeSheet;
			},

			hideSheet: function(fn){
				fn && typeof fn==='function' && fn();
			}
		}
	}])