define(["app"],function(app){
	return app.controller('resultCtrl',["$scope","$rootScope","$routeParams",function($scope,$rootScope,$routeParams){
		var arr = ['快发送入学邀请，挑战300元团建基金吧','学习使你快乐，距离300元建设基金一步之遥','300元团建基金已是囊中之物，继续向1200元发起冲击','得到1200元团建基金，2400元在前方等待您','洪荒之力天上来，2400元团建基金伴您继续畅游学海'];
		$.ajax({
				url : "http://www.zhigongjiaoyu.com/ajax_api.php?request_encoding=utf-8&request_method=get", 
	            data:{url:'http://www.tt.zhulijihua.com/index.php?c=mcd&m=get_shop_count&hash=1&department_id=' + $routeParams.department_id + '&department=' + $routeParams.department},
	            dataType : "jsonp",
	            success : function(data){
	            	var num = data.data.num;
					if(num == 0){
						$(".result-f1").text('全国80.5%的门店学习力超过您所在餐厅！');
						$("#resultFont").html(arr[0]);
						$(".result-header").html('<img src="images/result_img0.jpg" class="img"/>');
					}else if(num == 1){
						$(".result-f1").text('您的餐厅有' + num + '人报读！');
						$("#resultFont").html(arr[1]);
						$(".result-header").html('<img src="images/result_img1.jpg" class="img"/>');
					}else if(num >= 2 && num < 5){
						$(".result-f1").text('您的餐厅有' + num + '人报读！');
						$("#resultFont").html(arr[2]);
						$(".result-header").html('<img src="images/result_img2.jpg" class="img"/>');
					}else if(num >= 5 && num < 8){
						$(".result-f1").text('您的餐厅有' + num + '人报读！');
						$("#resultFont").html(arr[3]);
						$(".result-header").html('<img src="images/result_img3.jpg" class="img"/>');
					}else if(num >= 8){
						$(".result-f1").text('您的餐厅有' + num + '人报读！');
						$("#resultFont").html(arr[4]);
						$(".result-header").html('<img src="images/result_img4.jpg" class="img"/>');
					}else {
						$(".result-f1").text('全国80.5%的门店学习力超过您所在餐厅！');
						$("#resultFont").html(arr[0]);
						$(".result-header").html('<img src="images/result_img0.jpg" class="img"/>');
					}
				},error: function(){
				}
		});
		$("#goShare").on('click',function(){
			$(".share-popup").show();
		});
	}]);
	
});