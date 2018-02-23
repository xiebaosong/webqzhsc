angular.module('app')
	.factory('validForm', [function () {
		return {
			//验证用户名
			validUserName:function(val){
				var reg = /^[a-zA-Z0-9_-]{4,16}$/;
				//输出 true
				return reg.test(val);
			},

			//验证手机号码
			validPhone: function (val) {
				var reg = /^1[35678]\d{9}$/;
				return reg.test(val);
			},
			
			//非空
			isNotEmpty: function (val) {
				return val == '' ? false : true;
			},

			//长度验证
			validLength: function (val, min, max) {
				return val.length <= max && val.length >= min ? true : false;
			},

			//两值相等验证
			isEqual: function (v1, v2) {
				return v1 == v2 ? true : false;
			},
			//验证邮箱
			validEmail: function (val) {
				var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
				return reg.test(val);
			}

		};
	}])