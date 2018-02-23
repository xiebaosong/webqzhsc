angular.module('app')
	.controller('loginController',['$scope','$state','Tip','validForm','formatTime','API',function($scope,$state,Tip,validForm,formatTime,API){

		$scope.goLogin=function(){
			$state.go('start');
		}

		$scope.type='login';

		$scope.approve=function(){
			if($scope.phoneModificationServer()){
				$scope.type='login';
			}else {return}
		}
		$scope.login=function(){
			$scope.type='login';
			//登录验证
			if($scope.type='login'){
				$scope.log();
			}
		};
		$scope.register=function(){
			$scope.type='register';
		};
		$scope.forgetThePad=function(){
			$scope.type='forgetThePad';
		};

		$scope.emailPwd=function(){
			$scope.type='emailPwd';
		};
		$scope.phonePwd=function(){
			$scope.type='phonePwd';
		}

		$scope.userInfo = {
			name:'',
			pwd: '',
			repwd: '',
			phone: '',
			code: '',
			registerTime: '',
			agree: 100
		};

		$scope.code='';
		
		$scope.isPass = false;

		$scope.isPhone=function(){
			$scope.isPass = validForm.validPhone($scope.userInfo.phone);
		}
		//获取注册验证码
		$scope.getCode = function () {
			Tip.loadTips.showLoading();
			API.fetchGet('http://127.0.0.1:9000/message', {phone: $scope.userInfo.phone})
				.then(function (data) {
					$scope.code = data.data.code;
					Tip.loadTips.hideLoading();
					console.log($scope.code);
				})
		}
		//注册验证用户名、手机、密码、验证码
		function isValid() {
			if(!validForm.isNotEmpty($scope.userInfo.name)){
				Tip.showTip('用户名不能为空');
				return false;
			}else if (!validForm.validLength($scope.userInfo.name, 4, 16)) {
				Tip.showTip('用户名长度不正确');
				return false;
			}else if (!validForm.validUserName($scope.userInfo.name)) {
				Tip.showTip('用户名格式不正确');
				return false;
			}else if (!validForm.isNotEmpty($scope.userInfo.phone)) {
				Tip.showTip('手机号码不能为空');
				return false;
			}else if (!validForm.validLength($scope.userInfo.phone, 11, 11)) {
				Tip.showTip('手机号码长度不正确');
				return false;
			} else if (!validForm.validPhone($scope.userInfo.phone)) {
				Tip.showTip('手机号码格式不正确');
				return false;
			} else if (!validForm.isNotEmpty($scope.userInfo.pwd)) {
				Tip.showTip('密码不能为空');
				return false;
			} else if (!validForm.validLength($scope.userInfo.pwd, 6, 16)) {
				Tip.showTip('密码长度6-16位');
				return false;
			} else if (!validForm.isEqual($scope.userInfo.pwd, $scope.userInfo.repwd)) {
				Tip.showTip('两次密码不一致');
				return false;
			} else if (!validForm.isNotEmpty($scope.userInfo.code)) {
				Tip.showTip('验证码不能为空');
				return false;
			} else if (!validForm.isEqual($scope.userInfo.code, $scope.code)) {
				console.log($scope.code);
				Tip.showTip('验证码不正确');
				return false;
			}

			return true;
		}
		
		//注册验证
			$scope.regis=function(){
				console.log($scope.userInfo);
				//启动验证
				// isValid();

				if(isValid()){
				//获取注册时间
					$scope.userInfo.registerTime = formatTime.format(new Date(), 'yyyy-MM-dd hh:mm:ss');
					//启动加载动画
					Tip.loadTips.showLoading();

					API.fetchPost('http://127.0.0.1:9000/register', $scope.userInfo)
						.then(function (data) {
							console.log('resData ==>', data);
							Tip.loadTips.hideLoading();
							if (data.data.statusCode == 200 || data.data.statusCode == 201) {
								$scope.type='login';
								Tip.showTip(data.data.msg);

							} else {
								$state.go('login');
							}
						})
						.catch(function (err) {
							console.log(err);

							//关闭加载动画
							Tip.loadTips.hideLoading();
						})
				}
			}


		//获取用户登录信息
		$scope.loginInfo = {
			pwd: '',
			phone: '',
			loginTime: ''
		};

		//登录前端验证用户名、手机、密码、
		function logi(){
			if (!validForm.isNotEmpty($scope.loginInfo.phone)) {
				Tip.showTip('手机号码不能为空');
				return false;
			}else if (!validForm.validLength($scope.loginInfo.phone, 11, 11)) {
				Tip.showTip('手机号码长度不正确');
				return false;
			} else if (!validForm.validPhone($scope.loginInfo.phone)) {
				Tip.showTip('手机号码格式不正确');
				return false;
			} else if (!validForm.isNotEmpty($scope.loginInfo.pwd)) {
				Tip.showTip('密码不能为空');
				return false;
			} else if (!validForm.validLength($scope.loginInfo.pwd, 6, 16)) {
				Tip.showTip('密码长度6-16位');
				return false;
			}
			return true;
		};

		//登录验证通过发送数据回后台验证
		$scope.log=function(){
			$scope.loginInfo.loginTime = formatTime.format(new Date(), 'yyyy-MM-dd hh:mm:ss');
			// console.log($scope.loginInfo)
			if(logi()){
				Tip.loadTips.showLoading();
				API.fetchPost('http://127.0.0.1:9000/login', $scope.loginInfo)
						.then(function (data) {
							console.log('resData ==>', data);

							if (data.data.statusCode == 300 ) {
								//登录成功跳转到home页面
								$state.go('footer.home')

							} else if(data.data.statusCode == 301) {
								Tip.showTip('该手机号码没注册或密码错误');
								
							}else if(data.data.statusCode == 302){
								Tip.showTip('登录密码错误，请从新输入');
							}
							Tip.loadTips.hideLoading();
							
							
						})
						.catch(function (err) {
							
						})
			}
		}


		//获取用户修改密码信息
		$scope.phoneModificationInfo={
			pwd:'',
			repwd:'',
			phone:'',
			code:'',
			modificationTime:''
		}

		// 验证手机号码
		$scope.verifyPhone=function(){
			$scope.isPass = validForm.validPhone($scope.phoneModificationInfo.phone);
		}

		//手机修改密码获取验证码
		$scope.getCode = function () {
			Tip.loadTips.showLoading();
			API.fetchGet('http://127.0.0.1:9000/message', {phone: $scope.phoneModificationInfo.phone})
				.then(function (data) {
					$scope.code = data.data.code;
					Tip.loadTips.hideLoading();
					console.log($scope.code);
				})
		}

		//手机修改密码前端验证
		$scope.phoneModification=function(){

			if (!validForm.isNotEmpty($scope.phoneModificationInfo.pwd)) {
				Tip.showTip('密码不能为空');
				return false;
			} else if (!validForm.validLength($scope.phoneModificationInfo.pwd, 6, 16)) {
				Tip.showTip('密码长度6-16位');
				return false;
			} else if (!validForm.isEqual($scope.phoneModificationInfo.pwd, $scope.phoneModificationInfo.repwd)) {
				Tip.showTip('两次密码不一致');
				return false;
			} else if (!validForm.isNotEmpty($scope.phoneModificationInfo.code)) {
				Tip.showTip('验证码不能为空');
				return false;
			} else if (!validForm.isEqual($scope.phoneModificationInfo.code, $scope.code)) {
				console.log($scope.code);
				Tip.showTip('验证码不正确');
				return false;
			}else if (!validForm.isNotEmpty($scope.phoneModificationInfo.phone)) {
				Tip.showTip('手机号码不能为空');
				return false;
			}else if (!validForm.validLength($scope.phoneModificationInfo.phone, 11, 11)) {
				Tip.showTip('手机号码长度不正确');
				return false;
			} else if (!validForm.validPhone($scope.phoneModificationInfo.phone)) {
				Tip.showTip('手机号码格式不正确');
				return false;
			} else

			return true;
		}

		//手机修改密码前端验证通过发数据回后台验证

		$scope.phoneModificationServer=function(){
			
			if($scope.phoneModification()){
				console.log('$scope.phoneModificationInfo ==>', $scope.phoneModificationInfo);
			//获修复密码时间
				$scope.phoneModificationInfo.modificationTime=formatTime.format(new Date(), 'yyyy-MM-dd hh:mm:ss')
				Tip.loadTips.showLoading();
					API.fetchPost('http://127.0.0.1:9000/phoneModification', $scope.phoneModificationInfo)
					.then(function (data) {
						console.log('resData ==>', data);

						if (data.data.statusCode == 400 ) {
							$scope.type='login';
							Tip.showTip('修改密码成功');
						} else if(data.data.statusCode == 401) {
							Tip.showTip('修改密码失败，请再次修改');
						}
						
					})
					.catch(function (err) {
						
					})
			}else{return}	
		}




		//获取用户修改邮箱信息
		$scope.emailModificationInfo = {
			email: '',
			pwd: '',
			repwd: '',
			code: '',
			validCode: ''
		};

		// 验证邮箱
		$scope.verifyEmail=function(){
			$scope.isPass = validForm.validEmail($scope.emailModificationInfo.email);
		}

		function isValidEmail () {
			if (!validForm.isNotEmpty($scope.emailModificationInfo.email)) {
				Tip.showTip('邮箱不能为空');
				return false;
			} else if (!validForm.validEmail($scope.emailModificationInfo.email)) {
				Tip.showTip('邮箱格式不正确');
				return false;
			}
			return true;
		}

		function isValid() {
			if(!isValidEmail()) {
				return;
			}
			if (!validForm.isNotEmpty($scope.emailModificationInfo.code)) {
				Tip.showTip('验证码不能为空');
				return false;
			}else if (!validForm.isEqual($scope.emailModificationInfo.code,  $scope.code)) {
				Tip.showTip('验证码不正确');
				return false;
			} else if (!validForm.isNotEmpty($scope.emailModificationInfo.pwd)) {
				Tip.showTip('新密码不能为空');
				return false;
			} else if (!validForm.validLength($scope.emailModificationInfo.pwd, 6, 16)) {
				Tip.showTip('新密码长度不正确');
				return false;
			} else if (!validForm.isEqual($scope.emailModificationInfo.pwd, $scope.emailModificationInfo.repwd)) {
				Tip.showTip('两次密码不一致');
				return false;
			}
			return true;
		}

			$scope.commit = function () {
			console.log($scope.emailModificationInfo)
			if (!isValid()) {return};
			Tip.loadTips.showLoading();
			API.fetchPost('http://127.0.0.1:9000/modifypwd', $scope.emailModificationInfo)
				.then(function (data) {
					Tip.loadTips.hideLoading();
					if (data.data.statusCode == 800) {
						Tip.showTip(data.data.msg);
					}
				})
				.catch(function (err) {
					Tip.loadTips.hideLoading();
					console.log(err);
				})
		}
		$scope.commits=function(){
			console.log('asdf')
			if (isValid()) {
				$scope.commit();
				$scope.type='login';
			}else{return};
			
		}
		
	}])