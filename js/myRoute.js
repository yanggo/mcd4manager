//路由
define(["app"],function(app){
	return app.config(["$routeProvider",function($routeProvider){
		$routeProvider
		  .when('/', {
		  	templateUrl: 'view/index_view.html',
		  	controller: 'indexCtrl'
		  })
		  .when('/form', {
		  	templateUrl: 'view/form_view.html',
		  	controller: 'formCtrl'
		  })
		  .when('/result/:department_id/:department', {
		  	templateUrl: 'view/result_view.html',
		  	controller: 'resultCtrl'
		  })
		  .when('/more', {
		  	templateUrl: 'view/more_view.html',
		  	controller: 'moreCtrl'
		  })
		  .when('/rule', {
		  	templateUrl: 'view/rule_view.html'
		  })
		  .otherwise({ redirectTo: '/' });
	}]);
});