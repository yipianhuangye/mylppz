$(function(){
	//console.log(jQuery)
	//请求ajax数据拼接活动商品列表
	$.ajax({
		url:("http://localhost/lppz/data/lppz1.json"),
		success:function(res){
			//console.log(res.Tea)
			var li = ""
			for(var i in res.Tea){
				if(res.Tea[i].id <9){
					//console.log(res.Tea[i])
					li+=`<li>
							<div>
								<img src="${res.Tea[i].img}" alt="">
							</div>
							<a href="javascript:;">${res.Tea[i].tit}</a>
							<span></span>
						</li>`
				}

			}

			$(".list").html(li)

			var zj_active =""

			for(var j in res.Tea){
				if(res.Tea[j].id>=9 && res.Tea[j].id <17){
					zj_active+=`<li>
									<div>
										<img src="${res.Tea[j].img}" alt="">
									</div>
									<a href="javascript:;">${res.Tea[j].tit}</a>
									<span></span>
								</li>`
								//console.log(res.Tea[j])
				}
			}

			$(".list2").html(zj_active)

		}
	})



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



//右下角轮播图插件使用(自己封装的)
	$.banner({
		parent:".banner",
		interval:3000
	})
			













//购物车部分开始

	//1.鼠标划过购物车图标显示购物车里的内容
		$(".usershopping").mouseenter(function(){
				$(".cart_list_dropdown").css("display","block")
				//rendraingCookie()
				rendraingCar()
			})
		$(".usershopping").mouseleave(function(){
				$(".cart_list_dropdown").css("display","none")
					
			})

	//2.每个商品的购物车添加点击事件

		$(".listmsg").on("click",".addcar",function(){
			//console.log(this.id)
			//console.log(1)
			if(!getCookie("gools")){//不是第一次向购物车中添加商品
				setCookie("gools","[{'id':"+this.id+",'num':1}]");
				console.log("这是第一次点击添加购物车")
			}else{
				//不是第一次点击添加购物车，取出cookie中的gools数据
				var hasSameGools = false;  //用来判断cookie里是不是有相同的产品
				var arrGools = eval(getCookie("gools"));
				console.log(arrGools)
				//如果商品相同，只让num增加就可以
				for(var k = 0 ; k < arrGools.length ; k++){
					if(this.id == arrGools[k].id){
						arrGools[k].num++

						hasSameGools = true;

						console.log("有相同的物品 只是增加了个数")

						break;
					}
				}
					//新增加的物品
					if(!hasSameGools){
						var newgoods = {id:this.id,num:1}
						arrGools.push(newgoods)
						console.log("没有相同的物品，创建了新的物品对象")
					}
					var strGools = JSON.stringify(arrGools);

					setCookie("gools",strGools)
				}
				
				getGoolsNum()
			
			})

		//更新显示的购物车中物品的数量
		
		function getGoolsNum(){
			var goolsArr = eval(getCookie("gools"))
			//console.log(goolsArr)
			var shoppingNum = 0;

			for(var g = 0 ; g <goolsArr.length; g++){
				//console.log(goolsArr[g].num)
				shoppingNum += goolsArr[g].num
			}
			$(".us_num b").html(shoppingNum)
			$(".carNum").html(shoppingNum)
		}


		//根据ajax请求的数据和cookie保存的id渲染购物车页面
		function rendraingCar(){
			$.ajax("http://localhost/lppz/data/lppz1.json")
			.then(function(msg){
				//console.log(msg)
				var arrCookie = eval(getCookie("gools"))
				//console.log(arrCookie)
				var car_html =""

				for(var u = 0 ; u < arrCookie.length; u++){
					car_html+=`<li>
										<a href="javascript:;" class="innercarimg"> <img src="${msg.list[arrCookie[u].id].img}" alt=""></a>
										<a href="javascript:;" class="innercartit">${msg.list[arrCookie[u].id].title}</a>
										<span class="howmany">${msg.list[arrCookie[u].id].maney}${msg.list[arrCookie[u].id].price}</span>
										<i>x</i><span class="hownum">${arrCookie[u].num}</span>
										<button class="dele_btn" id=${u}>删除</button>
							</li>`
				}
				$(".cart_roll .gools").html(car_html)
			})
		}




		//点击删除按钮删除购物车中当前产品 并让购物车总数减少相应数量

		$(".cart_roll .gools").on("click",".dele_btn",function(){

			var thisOnenum = $(this).siblings(".hownum").html()
			//console.log(thisOnenum)

			//console.log($("us_num b").html())

			var carAll = eval(getCookie("gools"))
			//console.log(carAll)
			//console.log(this.id)
			carAll.splice(this.id,1)
			//console.log(carAll)

			var afterstrGools = JSON.stringify(carAll);

					setCookie("gools",afterstrGools)
					getGoolsNum()
					rendraingCar()
		})
			



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