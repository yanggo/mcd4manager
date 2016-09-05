
define(['zepto','angular'],function($){
	var eleApp = angular.module('eleApp',[]);
		//头部
		eleApp.directive('headerview',function($location){
			return{
				restrict:'E',
				templateUrl:'view/header.html',
				link:function($scope){
					
				}
			}	
		});
		//底部
		eleApp.directive('footerview',function($location){
			return{
				restrict:'E',
				template:'<div class="footer-view"><div class="footer-cont"><span class="footer-icon"></span></div></div>',
				link:function($scope){
					
				}
			}	
		});
		
		//更换标题
		eleApp.directive('ctitle',function(){
			return{
				restrict:'E',//注释
				template:'<span style="display:none;" ng-bind="ctitle"></span>',
				link:function($scope, $element, $attrs){
					setTimeout(function(){
						$scope.ctitle = $attrs.message;
						var $body = $('body');
						document.title = $attrs.message;
						// hack在微信等webview中无法修改document.title的情况
						var $iframe = $('<iframe style="display:none;" src="images/person.png"></iframe>').on('load', function() {
							setTimeout(function() {
								$iframe.off('load').remove()
							}, 0);
						}).appendTo($body);

					},300);
				}
			}	
		});
		//数据加载
		eleApp.directive('dataload',function(){
			return{
				restrict:'E',
				templateUrl:'view/loading.html',
				link:function($scope, $element, $attrs){
				}
			}	
		});
		//百度统计
		eleApp.directive('history',function(){
			return{
				restrict:'E',
				template:'<span></span>',
				link:function($scope, $element, $attrs){
					var _hmt = _hmt || [];
					(function() {
					  var hm = document.createElement("script");
					  hm.src = "//hm.baidu.com/hm.js?738bf02d44d95e8c366f00718c7d8c8d";
					  var s = document.getElementsByTagName("script")[0]; 
					  s.parentNode.insertBefore(hm, s);
					})();
				}
			}	
		});
});


