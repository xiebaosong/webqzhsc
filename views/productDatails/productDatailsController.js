angular.module('app')
	.controller('productDatailsController',['$scope','$state',function($scope,$state){
		$scope.productNavdata=[
			{name:'商品', bool:true},
			{name:'详情', bool:false},
			{name:'评论', bool:false},
		];

		// 商品详情
		$scope.datails=[
			{name:'修身指数',size1:'紧身',size2:'修身',size3:'标准',size4:'宽松',name1:'弹力指数',size5:'无弹',size6:'微弹',size7:'弹力',size8:'高弹'},
			{name:'厚度指数',size1:'轻薄',size2:'适中',size3:'厚款',size4:'加厚',name1:'柔软指数',size5:'硬挺',size6:'适中',size7:'柔软',size8:'绒软'},
		];

		// 评价
		$scope.dataReply=[
			{name:'时间老人', reply:'质量很好，颜色也和图片一样，穿在身上很舒服，大小合适，真是良心产品，下会还来选购。', number:'产品货号:HMM5053，黑色,L', date:'购买日期：2017-09-17', name1:'千纸商城客服', reply1:'千纸鹤感谢您的好评，我们会一直努力的！'},
		];

		$scope.goPage=function(stateName){
			$state.go(stateName)
		}

		$scope.initProductNav=function(index){
			for(var i=0;i<$scope.productNavdata.length;i++){
				if(index==i){
					$scope.productNavdata[i].bool=true;
				}else{
					$scope.productNavdata[i].bool=false;
				}
			}
		}

		$scope.initCut=function(index){
			for(var i=0;i<$scope.productNavdata.length;i++){
				if(index==0){
					$scope.commodity();
				}else if(index==1){
					$scope.comment();
				}else if(index==2){
					$scope.datail();
				}
			}
		}

		$scope.cut=function(index){
			$scope.initProductNav(index);
			$scope.initCut(index);
		}

		//切换商品 详情 评价
		$scope.type="commodity";

		$scope.commodity=function(){
			if($scope.type="commodity"){
				return;
			}
			$scope.type="commodity";
		};

		$scope.comment=function(){
			$scope.type="comment";
		};

		$scope.datail=function(){
			$scope.type="datail";
			console.log('asdsf');
		};
		//调整商品数量
		$scope.tradeNumber = 1;

		$scope.tradePlus=function(){
			$scope.tradeNumber+=1;
			console.log(typeof $scope.tradeNumber)
		}
		$scope.subtrackNuber=function(){
			if($scope.tradeNumber<=1){
				$scope.tradeNumber = 1;
			}else{
				$scope.tradeNumber-=1;
			}
		}
	}])