$(function(){
	//console.log(jQuery)

//头部鼠标划过显示二维码的js代码开始

	$(".gzlp").mouseover(function(){
		$(this).find("a").css({
			color: "#e60012",
			textDecoration:" underline"
		})

		$(".QR_CODE").css({
			display:"block"
		})
	})



	$(".gzlp").mouseout(function(){

		$(this).find("a").css({
			color: "#555",
			textDecoration:"none"
		})

		$(".QR_CODE").css({
			display:"none"
		})
	})

//头部显示二维码的js代码结束


//表单验证开始：

	//用户名验证


//头部我的良品部分鼠标划过显示二级菜单


	$(".mine_lppz").on("mouseover",function(){

			$(".my_lppz_lay").show()

			$(".Occlusion_border").show()
			
	})


	$(".mine_lppz").on("mouseout",function(){

			$(".my_lppz_lay").hide()
			$(".Occlusion_border").hide()
	})	
		
//头部我的良品部分鼠标划过显示二级菜单完事了



//banner部分的竖着的nav  鼠标划过改变li背景颜色并且显示二级菜单  鼠标划出回归
//for(var j = 0 ; j <$(".list_nav").children("li").length; j++){

	$(".list_nav").children("li").on("mouseover",function(){

		//console.log($(this))

		$(this).css({
			background:"#e61f19",
		})
		$(this).find(".top_sort").find("a").css({
			color:"#fff",
			borderBottom:"1px solid #e61f19"
		})
		$(this).find(".sub_sort").show()

	})

//鼠标划出

	$(".list_nav").children("li").on("mouseout",function(){

		//console.log($(this))

		$(this).css({
			background:"",
		})
		$(this).find(".top_sort").find("a").css({
			color:"#333",
			borderBottom:"1px solid #e8e8e8"
		})
		$(this).find(".sub_sort").hide()

	})
//}



//轮播图
	$(function(){

	//affect:1
		$("#banner_slider").slide({
			affect:2,
			time:3000,
			speed:500,
			dot_text:false,
		});	
	})


//轮播图结束


//精选活动部分的选项卡

	require(["./module/index.js"])


//楼梯js开始
//判断啥时候显示楼梯
	$(document).scroll(function(){
		if($("body").scrollTop()>$(".activity").offset().top ){
			$(".lppz_Stairs").show()
		}else{
			$(".lppz_Stairs").hide()
		}
	})


	

	$(".classification").find("li").on("mouseover",function(){
		//console.log(this)
		$(this).css("background","#df2627")
	
		$(this).find("i").css({
		display:"none"
		})

		$(this).find("span").css({
			display:"block",
			color:"#fff"
		})

		$(this).find("a").css("border","1px solid #df2627")

		$(this).on("click",function(){

        $("html,body").stop().animate({
         	scrollTop:$(".Stair_body").children("div").eq($(this).index()).offset().top
        },150)



		})
	})
	$(".classification").find("li").on("mouseout",function(){
		$(this).css("background","")
		$(this).find("i").css({
			display:"block"
		})

		$(this).find("span").css({
			display:"none",
			color:"#333"
		})

		$(this).find("a").css("border","1px solid #dedede")
	})

//楼梯结束了


//右侧导航栏开始了

	$(".rnb_list").find("li").on("mouseover",function(){
		$(this).find("span").css("display","block")
		$(this).find("span").stop().animate({
			opacity:1,
			right:"35px",
			width:"70px"
		})
	})

	$(".rnb_list").find("li").on("mouseout",function(){
		$(this).find("span").css("display","none")
		$(this).find("span").stop().animate({
			opacity:0,
			right:"0px",
			width:"35px"
		},30)
	})



//右侧导航栏显示二维码

	$(".ercode").find("i").on("mouseover",function(){

		$(".cust").css("display","block")

		$(".ercode").find(".cust").on("mouseover",function(){

		$(".cust").css("display","block")
		})

	})

	$(".ercode").find("i").on("mouseout",function(){

		$(".cust").css("display","none")
	})

	
	$(".ercode").find(".cust").on("mouseout",function(){

		$(".cust").css("display","none")
	})



//返回顶部：
	
	$(".goback").find("a").on("mouseover",function(){
	
		$(".goback").find("span").css("display","block")
		$(".goback").find("span").stop().animate({
			opacity:1,
			right:"35px",
			width:"70px"
		})

		$(this).on("click",function(){
			$('body,html').animate({
				scrollTop : 0
			},500)
		})
	})


$(".goback").find("a").on("mouseout",function(){
	
		$(this).find("span").css("display","none")
		$(this).find("span").stop().animate({
			opacity:0,
			right:"0px",
			width:"35px"
		},30)
	})


//图片变换

$(".act_list img").pictureLight(0.3)



//判断用户是否登陆，登陆后把登陆项内容换成用户名   显示退出选项
	function userinland(){
			if(getCookie("user_land")){
			//console.log(getCookie("user_land"))
			//$(".userpas").css("display","none")
			$(".usercome").html("您好"+getCookie("user_land")+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"欢迎来到良品铺子官方商城!")
			$(".left_tool").find("li").not(".usercome").not(".Sign_out").css("display","none")
			$(".Sign_out").css("display","block")
			$(".left_tools").css({
				paddingLeft:"500"
			})
		}
	}
	

	userinland()


	$(".Sign_out").on("click",function(){

		removeCookie("user_land")
		

	})

})