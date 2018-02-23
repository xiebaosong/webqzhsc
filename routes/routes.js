angular.module('app')
	.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('start', {
				url: '/start',
				templateUrl: './views/start/start.html',
				controller: 'startController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('start');
					}]
				}
			})
			.state('login', {
				url: '/login',
				templateUrl: './views/login/login.html',
				controller: 'loginController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('login');
					}]
				}
			})
			.state('searchEngine', {
				url: '/searchEngine',
				templateUrl: './views/searchEngine/searchEngine.html',
				controller: 'searchEngineController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('searchEngine');
					}]
				}
			})
			.state('order', {
				url: '/order',
				templateUrl: './views/order/order.html',
				controller: 'orderController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('order');
					}]
				}
			})
			.state('site', {
				url: '/site',
				templateUrl: './views/site/site.html',
				controller: 'siteController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('site');
					}]
				}
			})
			.state('personalData', {
				url: '/personalData',
				templateUrl: './views/personalData/personalData.html',
				controller: 'personalDataController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('personalData');
					}]
				}
			})
			.state('record', {
				url: '/record',
				templateUrl: './views/record/record.html',
				controller: 'recordController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('record');
					}]
				}
			})
			.state('recordEditor', {
				url: '/recordEditor',
				templateUrl: './views/recordEditor/recordEditor.html',
				controller: 'recordEditorController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('recordEditor');
					}]
				}
			})
			.state('productDatails', {
				url: '/productDatails',
				templateUrl: './views/productDatails/productDatails.html',
				controller: 'productDatailsController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('productDatails');
					}]
				}
			})
			.state('reply', {
				url: '/reply',
				templateUrl: './views/reply/reply.html',
				controller: 'replyController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('reply');
					}]
				}
			})
			.state('payLoser', {
				url: '/payLoser',
				templateUrl: './views/payLoser/payLoser.html',
				controller: 'payLoserController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('payLoser');
					}]
				}
			})
			.state('pay', {
				url: '/pay',
				templateUrl: './views/pay/pay.html',
				controller: 'payController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('pay');
					}]
				}
			})
			.state('payOrder', {
				url: '/payOrder',
				templateUrl: './views/payOrder/payOrder.html',
				controller: 'payOrderController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('payOrder');
					}]
				}
			})
			.state('orderNull', {
				url: '/orderNull',
				templateUrl: './views/orderNull/orderNull.html',
				controller: 'orderNullController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('orderNull');
					}]
				}
			})
			.state('logistics', {
				url: '/logistics',
				templateUrl: './views/logistics/logistics.html',
				controller: 'logisticsController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('logistics');
					}]
				}
			})


			.state('footer', {
				url:'',
				abstract:true,
				templateUrl: './views/footer/footer.html',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('footer');
					}]
				}
			})
			.state('footer.productList', {
				url: '/productList',
				templateUrl: './views/productList/productList.html',
				controller: 'productListController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('productList');
					}]
				}
			})
			.state('footer.home', {
				url: '/home',
				templateUrl: './views/home/home.html',
				controller: 'homeController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('home');
					}]
				}
			})
			.state('footer.classify', {
				url: '',
				abstract: true,
				templateUrl: './views/classify/classify.html',
				controller: 'classifyController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('classify');
					}]
				}
			})
			.state('footer.discover', {
				url: '/discover',
				templateUrl: './views/discover/discover.html',
				controller: 'discoverController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('discover');
					}]
				}
			})
			.state('footer.shoppingCart', {
				url: '/shoppingCart',
				templateUrl: './views/shoppingCart/shoppingCart.html',
				controller: 'shoppingCartController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('shoppingCart');
					}]
				}
			})
			.state('footer.personalCenter', {
				url: '/personalCenter',
				templateUrl: './views/personalCenter/personalCenter.html',
				controller: 'personalCenterController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('personalCenter');
					}]
				}
			})
			.state('footer.classify.classifyList', {
				url: '/classifyList',
				templateUrl: './views/classifyList/classifyList.html',
				controller: 'classifyListController',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('classifyList');
					}]
				}
			})
			.state('footer.classify.classifyList1', {
				url: '/classifyList1',
				templateUrl: './views/classifyList1/classifyList1.html',
				controller: 'classifyList1Controller',
				resolve: {
					des: ['$ocLazyLoad', function ($ocLazyLoad) {
						return $ocLazyLoad.load('classifyList1');
					}]
				}
			})

	}])