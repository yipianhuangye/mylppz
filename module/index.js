//console.log(111) //测试ok
define(function(require,exprots,module){
	
//精品活动
	module.exprots = $(".sct_tab").children().on("mouseover",function(){

			for(var i = 0 ; i < $(".sct_tab").children().length ; i++){
				
				$(".act_area").find(".act_area_list").removeClass("active");

				$(".sct_tab").find("a").removeClass("active")

			
			}
		console.log($(this).index())
			$(this).find("a").addClass("active")
			$(".act_area").find(".act_area_list").eq($(this).index()).addClass("active");
			
	})



//1F炒货

	module.exprots = $(".sct_tabs").children().on("mouseover",function(){

			for(var i = 0 ; i < $(".sct_tabs").children().length ; i++){
				
				$(".onsale_tabs").find(".photo_jg_tab").removeClass("active");

				$(".sct_tabs").find("a").removeClass("active")
			
			}
		
			$(".onsale_tabs").find(".photo_jg_tab").eq($(this).index()).addClass("active");
			$(".sct_tabs").find("a").eq($(this).index()).addClass("active")
		
	})


//2F肉脯鱼干

	module.exprots = $(".sct_tabs2").children().on("mouseover",function(){

			for(var i = 0 ; i < $(".sct_tabs2").children().length ; i++){
				
				$(".onsale_tabs2").find(".photo_jg_tab2").removeClass("active");

				$(".sct_tabs2").find("a").removeClass("active")
			
			}
		console.log($(this).index())
			$(".onsale_tabs2").find(".photo_jg_tab2").eq($(this).index()).addClass("active");
			$(".sct_tabs2").find("a").eq($(this).index()).addClass("active")
	})

//3F果脯果干

	module.exprots = $(".sct_tabs3").children().on("mouseover",function(){

			for(var i = 0 ; i < $(".sct_tabs3").children().length ; i++){
				
				$(".onsale_tabs3").find(".photo_jg_tab3").removeClass("active");
				$(".sct_tabs3").find("a").removeClass("active")
			
			}
		console.log($(this).index())
			$(".onsale_tabs3").find(".photo_jg_tab3").eq($(this).index()).addClass("active");
			$(".sct_tabs3").find("a").eq($(this).index()).addClass("active")

})


//4F素食山珍

	module.exprots = $(".sct_tabs4").children().on("mouseover",function(){

			for(var i = 0 ; i < $(".sct_tabs4").children().length ; i++){
				
				$(".onsale_tabs4").find(".photo_jg_tab4").removeClass("active");
				$(".sct_tabs4").find("a").removeClass("active")
			
			}
		console.log($(this).index())
			$(".onsale_tabs4").find(".photo_jg_tab4").eq($(this).index()).addClass("active");
			$(".sct_tabs4").find("a").eq($(this).index()).addClass("active")

})




//5F糕点糖果

	module.exprots = $(".sct_tabs5").children().on("mouseover",function(){

			for(var i = 0 ; i < $(".sct_tabs5").children().length ; i++){
				
				$(".onsale_tabs5").find(".photo_jg_tab5").removeClass("active");
				$(".sct_tabs5").find("a").removeClass("active")
			
			}
		console.log($(this).index())
			$(".onsale_tabs5").find(".photo_jg_tab5").eq($(this).index()).addClass("active");
			$(".sct_tabs5").find("a").eq($(this).index()).addClass("active")

})









//5F糕点糖果

	module.exprots = $(".sct_tabs6").children().on("mouseover",function(){

			for(var i = 0 ; i < $(".sct_tabs6").children().length ; i++){
				
				$(".onsale_tabs6").find(".photo_jg_tab6").removeClass("active");
				$(".sct_tabs6").find("a").removeClass("active")
			
			}
		console.log($(this).index())
			$(".onsale_tabs6").find(".photo_jg_tab6").eq($(this).index()).addClass("active");
			$(".sct_tabs6").find("a").eq($(this).index()).addClass("active")

})







})