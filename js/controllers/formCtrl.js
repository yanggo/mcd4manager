define(["app"],function(app){
	return app.controller('formCtrl',["$scope","$rootScope","$location",function($scope,$rootScope,$location){
		$("#loadingToast").show();
		getProvince();
		function getProvince(){
			$.ajax({
					url : "http://www.zhigongjiaoyu.com/ajax_api.php?request_encoding=utf-8&request_method=get", 
		            data:{url:'http://www.tt.zhulijihua.com/index.php?c=mcd&hash=1&m=get_province_list'},
		            dataType : "jsonp",
		            success : function(data){
					$("#loadingToast").hide();
					var provinces = data.data,html = '';
					html += '<option value="">请选择省</option>';
					for(var i = 0,len = provinces.length; i < len; i++){
						html += '<option value="'+ provinces[i].id + '">' + provinces[i].name + '</option>';
					}
					$("#select1").html(html);
					$("#select1").on('change',function(){
						$("#loadingToast").show();
						getCity($("#select1").val());
					});
				},error: function(){
					$("#loadingToast").hide();
				}
			});
		}
		function getCity(province){
			$.ajax({
					url : "http://www.zhigongjiaoyu.com/ajax_api.php?request_encoding=utf-8&request_method=get", 
		            data:{url:'http://www.tt.zhulijihua.com/index.php?c=mcd&hash=1&m=get_city_list&pid=' + province},
		            dataType : "jsonp",
		            success : function(data){
					$("#loadingToast").hide();
					var provinces = data.data,html = '';
					html += '<option value="">请选择市</option>';
					for(var i = 0,len = provinces.length; i < len; i++){
						html += '<option value="'+ provinces[i].id + '">' + provinces[i].name + '</option>';
					}
					$("#select2").html(html);
					$("#select2").on('change',function(){
						$("#loadingToast").show();
						getStore($("#select2").val());
					});
				},error: function(){
					$("#loadingToast").hide();
				}
			});
		}
		//获取指定城市商家
		function getStore(city){
			$.ajax({
					url : "http://www.zhigongjiaoyu.com/ajax_api.php?request_encoding=utf-8&request_method=get", 
		            data:{url:'http://www.tt.zhulijihua.com/index.php?c=mcd&m=get_departments&hash=1&region_id=' + city},
		            dataType : "jsonp",
		            success : function(data){
					$("#loadingToast").hide();
					var provinces = data.data,html = '';
					html += '<option value="">请选择餐厅</option>';
					for(var i = 0,len = provinces.length; i < len; i++){
						html += '<option value="'+ provinces[i].department_id + '">' + provinces[i].department + '</option>';
					}
					$("#select3").html(html);
				},error: function(){
					$("#loadingToast").hide();
				}
			});
		}		
		$(".form-btn").on('click',function(){
			if($("#select3 option:selected").text() == "请选择餐厅"){
				alert('请选择餐厅!');
			}else{
				$location.path("/result/" + $("#select3").val() + "/" + $("#select3 option:selected").text());
				$scope.$apply();
			}
		});
		//店铺排名
		$.ajax({
				url : "http://www.zhigongjiaoyu.com/ajax_api.php?request_encoding=utf-8&request_method=get", 
	            data:{url:'http://www.tt.zhulijihua.com/index.php?c=mcd&m=get_shop_order&hash=1'},
	            dataType : "jsonp",
	            success : function(data){
	            	var html = '';
					for(var i = 0; i < 5; i++){
						html += '<li><i></i><span>' + data.data[i].name + ' ' + data.data[i].department + ' 已有' + data.data[i].num + '人报读</span></li>';
					}
					$('#shoreRank').html(html);
				},error: function(){
				}
			});
	}]);
	
});