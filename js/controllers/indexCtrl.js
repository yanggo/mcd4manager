define(["app"],function(app){
	return app.controller('indexCtrl',["$scope","$rootScope",function($scope,$rootScope){
		$(function(){
			
			$.ajax({
				url:"http://www.zhigongjiaoyu.com/ajax_api.php?request_encoding=utf-8&request_method=post",  
				data:{
					url:'http://www.tt.zhulijihua.com/index.php?c=mcd&m=get_order_scroll_list&hash=1'
				},
				dataType : "jsonp",
				success : function(data){
					if(data.status == 1){
						var datas = data.data;
						var notice_html='';
						var len = datas.length>20 ? 20 : datas.length;
						for(var i=0; i<len; i++){
							notice_html +='<li class="swiper-slide"><span>'+ datas[i].city_name + datas[i].department +'</span><ins>'+ datas[i].userName.slice(0,1) +'**</ins><time>'+ datas[i].addtime.slice(0,2)+'月'+ datas[i].addtime.slice(3,5) +'日</time>报读了'+ datas[i].major_name +' </li>';
							
						}
						$('#notice_list').html(notice_html);
					}
					
					//逐屏滚插件
					var swiper = new Swiper('.notice_slide .bd', {
						paginationClickable: true,
						direction: 'vertical',
						slidesPerView: 5,
						loop : true,
						autoplayDisableOnInteraction:false,
						autoplay: 2500
					});
					
				},
				error:function(data){
					alert('接口错误！');
				}
			});
			
		});
	}]);
	
});