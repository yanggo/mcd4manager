//入口文件
require.config({
	baseUrl: "js/",
	paths: {
		"angular": "builds/angular.min",
		"angular-route": "builds/angular-route.min",
		"zepto": "builds/zepto.eenet.min",
		"swiper": "builds/swiper.min",
		"conversion": "builds/conversion",
		"route": "myRoute",
		"app": "app",
		"commonCtrl": "controllers/commonCtrl",
		"formCtrl": "controllers/formCtrl",
		"moreCtrl": "controllers/moreCtrl",
		"indexCtrl": "controllers/indexCtrl",
		"resultCtrl": "controllers/resultCtrl"
	},
	shim: {
		"angular": {
			exports: "angular"
		},
		"angular-route": {
			deps: ["angular"],
			exports: "angular-route"
		},
		zepto: {
          exports: '$'
        }
	}
});
require(['zepto','angular','angular-route','swiper','app','route','conversion','commonCtrl','formCtrl','moreCtrl','indexCtrl','resultCtrl'],function($,angular){
	$(function(){
		angular.bootstrap(document,["myApp"]);
	});
});

