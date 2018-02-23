(function () {
var app = angular.module('app');

//配置懒加载信息
app.config(["$provide", "$compileProvider", "$controllerProvider", "$filterProvider", function ($provide, $compileProvider, $controllerProvider, $filterProvider) {
 app.controller = $controllerProvider.register;
 app.directive = $compileProvider.directive;
 app.filter = $filterProvider.register;
 app.factory = $provide.factory;
 app.service = $provide.service;
 app.constant = $provide.constant;
}])
	.config(["$ocLazyLoadProvider", function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({
	 		debug: false,
	 		events: false,
	 		modules: [
		 		{
			 		name: 'start',
			 		files: [
			 			'./views/start/startController.js',
			 			'./views/start/start.css'
			 		]
			 	},
			 	{
			 		name: 'footer',
			 		files: [
			 			'./views/footer/footerController.js',
			 			'./views/footer/footer.css'
			 		]
			 	},
			 	{
			 		name: 'login',
			 		files: [
			 			'./views/login/loginController.js',
			 			'./views/login/login.css'
			 		]
			 	},
			 	{
			 		name: 'home',
			 		files: [
			 			'./views/home/homeController.js',
			 			'./views/home/home.css'
			 		]
			 	},
			 	{
			 		name: 'classify',
			 		files: [
			 			'./views/classify/classifyController.js',
			 			'./views/classify/classify.css'
			 		]
			 	},
			 	{
			 		name: 'discover',
			 		files: [
			 			'./views/discover/discoverController.js',
			 			'./views/discover/discover.css'			 			
			 		]
			 	},
			 	{
			 		name: 'shoppingCart',
			 		files: [
			 			'./views/shoppingCart/shoppingCartController.js',
			 			'./views/shoppingCart/shoppingCart.css'			 			
			 		]
			 	},
			 	{
			 		name: 'personalCenter',
			 		files: [
			 			'./views/personalCenter/personalCenterController.js',
			 			'./views/personalCenter/personalCenter.css'			 			
			 		]
			 	},
			 	{
			 		name: 'searchEngine',
			 		files: [
			 			'./views/searchEngine/searchEngineController.js',
			 			'./views/searchEngine/searchEngine.css'			 			
			 		]
			 	},
			 	{
			 		name: 'order',
			 		files: [
			 			'./views/order/orderController.js',
			 			'./views/order/order.css'			 			
			 		]
			 	},
			 	{
			 		name: 'site',
			 		files: [
			 			'./views/site/siteController.js',
			 			'./views/site/site.css'			 			
			 		]
			 	},
			 	{
			 		name: 'personalData',
			 		files: [
			 			'./views/personalData/personalDataController.js',
			 			'./views/personalData/personalData.css'			 			
			 		]
			 	},
			 	{
			 		name: 'record',
			 		files: [
			 			'./views/record/recordController.js',
			 			'./views/record/record.css'			 			
			 		]
			 	},
			 	{
			 		name: 'recordEditor',
			 		files: [
			 			'./views/recordEditor/recordEditorController.js',
			 			'./views/recordEditor/recordEditor.css'			 			
			 		]
			 	},
			 	{
			 		name: 'productList',
			 		files: [
			 			'./views/productList/productListController.js',
			 			'./views/productList/productList.css'			 			
			 		]
			 	},
			 	{
			 		name: 'productDatails',
			 		files: [
			 			'./views/productDatails/productDatailsController.js',
			 			'./views/productDatails/productDatails.css'			 			
			 		]
			 	},
			 	{
			 		name: 'reply',
			 		files: [
			 			'./views/reply/replyController.js',
			 			'./views/reply/reply.css'			 			
			 		]
			 	},
			 	{
			 		name: 'payLoser',
			 		files: [
			 			'./views/payLoser/payLoserController.js',
			 			'./views/payLoser/payLoser.css'			 			
			 		]
			 	},
			 	{
			 		name: 'pay',
			 		files: [
			 			'./views/pay/payController.js',
			 			'./views/pay/pay.css'			 			
			 		]
			 	},
			 	{
			 		name: 'payOrder',
			 		files: [
			 			'./views/payOrder/payOrderController.js',
			 			'./views/payOrder/payOrder.css'			 			
			 		]
			 	},
			 	{
			 		name: 'orderNull',
			 		files: [
			 			'./views/orderNull/orderNullController.js',
			 			'./views/orderNull/orderNull.css'			 			
			 		]
			 	},
			 	{
			 		name: 'logistics',
			 		files: [
			 			'./views/logistics/logisticsController.js',
			 			'./views/logistics/logistics.css'			 			
			 		]
			 	},
			 	{
			 		name: 'classifyList',
			 		files: [
			 			'./views/classifyList/classifyListController.js',
			 			'./views/classifyList/classifyList.css'			 			
			 		]
			 	},
			 	{
			 		name: 'classifyList1',
			 		files: [
			 			'./views/classifyList1/classifyList1Controller.js',
			 			'./views/classifyList1/classifyList1.css'			 			
			 		]
			 	},
	 		]
 		});
	}]);
	
})();