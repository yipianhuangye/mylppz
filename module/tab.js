//console.log(111) //测试ok
define(function(require,exprots,module){
	

	module.exprots = $(".sct_tab").children().on("mouseover",function(){

			for(var i = 0 ; i < $(".sct_tab").children().length ; i++){
				
				$(".act_area").find(".act_area_list").eq(i).css({
					opacity:0
				})
			}
		
			$(".act_area").find(".act_area_list").eq($(this).index()).stop().animate({
				opacity:1
			},800)

	})


})