angular.module('app')
	.controller('homeController',['$scope','$state',function($scope,$state){
		$scope.dataBanner = [
			{img: './images/banner_1@3x.png'},
			{img: './images/banner_2@3x.png'},
			{img: './images/banner_3@3x.png'}
		];

		$scope.dataNav=[
			{
				name:'明星同款',
				img:'./images/icons/home_mxtk_icon_1@3x.png',
				click:'star($index)',
				bool:true
			},
			{
				name:'清仓专区',
				img:'./images/icons/home_qczq_icon_1@3x.png',
				click:'clear($index)',
				bool:false
			},
			{
				name:'新品上市',
				img:'./images/icons/home_xpss_icon_2@3x.png',
				click:'newProduct($index)',
				bool:false
			},
			{
				name:'衣着搭配',
				img:'./images/icons/home_zydp_icon_3@3x.png',
				click:'clothing($index)',
				bool:false
			}

		];

		$scope.dataImg = [
			{
				img: './images/Img_find_1@3x.png',
				name:'圆领上体恤',
				plice:'聚惠价：168RMB'
			},
			{
				img: './images/Img_find_2@3x.png',
				name:'夹克衫外衣',
				plice:'聚惠价：168RMB'
			},
			{
				img: './images/Img_find_1@3x.png',
				name:'简约针织外套',
				plice:'聚惠价：298RMB'
			},
			{
				img: './images/Img_find_2@3x.png',
				name:'短袖圆领体恤',
				plice:'聚惠价：68RMB'
			},
			{
				img: './images/Img_find_1@3x.png',
				name:'修身棉t恤',
				plice:'聚惠价：128RMB'
			},
			{
				img: './images/Img_find_2@3x.png',
				name:'方领男长袖',
				plice:'聚惠价：168RMB'
			}
		];

		$scope.search=function(){
			$state.go('searchEngine')
		}
		$scope.slide = {
			doesContinue: true,
			autoPlay: true,
			intervalTime: 2000,
			showPager: true
		};

		$scope.type='star';
		$scope.clear=function(){
			
			$scope.type='clear';
		}
		$scope.newProduct=function(){
			$scope.type='newProduct';
		}
		$scope.clothing=function(){
			$scope.type='clothing';
		}
		$scope.star=function(){
			if($scope.type='star') {
				return;
			}
			$scope.type='star';
		}

		$scope.index=0;
		$scope.initNav=function(index){
			for(var i=0;i<$scope.dataNav.length;i++){
				if(index==i){
					$scope.dataNav[i].bool=true;

				}else{
					$scope.dataNav[i].bool=false;
				}
			}
		}
		
		$scope.homeNav=function(index){
			$scope.initNav(index)
		}

	}])