angular.module('app')
	.controller('productListController',['$scope','$state',function($scope,$state){
			$scope.data=[
				{img:'./images/Img_wddn_ckwl_1@3x.png',title:'方领绅士衬衣潮流绅士衬衫',price:'￥ 168',cart:'加入购物车'},
				{img:'./images/Img_gwc_2@3x.png',title:'方领绅士衬衣潮流绅士衬衫',price:'￥ 168',cart:'加入购物车'},
				{img:'./images/Img_gwc_3@3x.png',title:'方领绅士衬衣潮流绅士衬衫',price:'￥ 168',cart:'加入购物车'},
				{img:'./images/Img_gwc_4@3x.png',title:'方领绅士衬衣潮流绅士衬衫',price:'￥ 168',cart:'加入购物车'},
				{img:'./images/Img_wddn_ckwl_1@3x.png',title:'方领绅士衬衣潮流绅士衬衫',price:'￥ 168',cart:'加入购物车'},
				{img:'./images/Img_gwc_2@3x.png',title:'方领绅士衬衣潮流绅士衬衫',price:'￥ 168',cart:'加入购物车'},
				{img:'./images/Img_wddn_ckwl_1@3x.png',title:'方领绅士衬衣潮流绅士衬衫',price:'￥ 168',cart:'加入购物车'},
				{img:'./images/Img_gwc_3@3x.png',title:'方领绅士衬衣潮流绅士衬衫',price:'￥ 168',cart:'加入购物车'},
				{img:'./images/Img_gwc_2@3x.png',title:'方领绅士衬衣潮流绅士衬衫',price:'￥ 168',cart:'加入购物车'},
				{img:'./images/Img_gwc_2@3x.png',title:'方领绅士衬衣潮流绅士衬衫',price:'￥ 168',cart:'加入购物车'},
			];
			$scope.goProductDatails=function(){
				$state.go('productDatails')
			}

	}])