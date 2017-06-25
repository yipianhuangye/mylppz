

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

//头部我的良品部分鼠标划过显示二级菜单


	$(".mine_lppz").on("mouseover",function(){

			$(".my_lppz_lay").show()

			$(".Occlusion_border").show()
			
	})


	$(".mine_lppz").on("mouseout",function(){

			$(".my_lppz_lay").hide()
			$(".Occlusion_border").hide()
	})	



//鼠标划过商品列表显示

	$(".classify").hover(function(){
			$(".nav_sort").css("display","block")
		},function(){
			$(".nav_sort").css("display","none")
		})

 
	$(".list_nav").children("li").on("mouseover",function(){

		console.log($(this))

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



//放大镜
//鼠标划过小图显示大图
/*$(".big_photo").html($(".small_photo").find("li").eq(0).html()) */

$(".small_photo").on("mouseover","li",function(){
 $img = $(this).html()
 		
	$(".big_photo").html($img) 

})









//获取小图图片

$.ajax({
	url:("http://localhost/lppz/data/lppz1.json"),
	success:function(res){
		//console.log(res.photo)
		//console.log(res.info_details)
//拼接小图
		$smalltu = ""
		for(var i in res.photo){
			if(getCookie("id") ==res.photo[i].id){
				//console.log(res.photo[i])
				$smalltu +=`<li>
						<img src="${res.photo[i].img}" alt="">
						</li>
						`
			}
			$(".small_photo").html($smalltu)
		}

//拼接大图的初始图片
		for(var j in res.list){
			$bigtu = ""
			if(getCookie("id") ==res.list[j].id){
				$bigtu =`<img src="${res.list[j].img}" alt="">`
				$(".big_photo").html($bigtu)
			}
		}

		
//拼接右侧的文字信息

		for(var m in res.info_details){
			$textmsg = ""
         	$carmsg = ""
			if(getCookie("id") == res.info_details[m].id){
				$textmsg = `<h2 class="title_info">${res.info_details[m].tit}</h2>
							<h4 class="Promotion_info">${res.info_details[m].act}</h4>
							<div class="integral_info"><em>价格:</em><span>￥<i>${res.info_details[m].price}</i>${res.info_details[m].lq}</span></div>
							<div class="xl_info"><em>月销量:</em><span>${res.info_details[m].Sales}</span></div>
							<div class="score_info"><em>商品评分:</em><strong></strong><a href="">(累计评价:${res.info_details[m].eva})</a></div>
							`



console.log($textmsg)

				$carmsg=`<div class="Discount">
						<em>优惠信息:</em>
						<span>PC官方商城单笔实付满198元送棉麻抱枕</span>
						<p>全场满68元包邮</p>
					</div>
					<div class="sel_num">
						<em>数量:</em>
						<a href="" class="reduce"></a>
						<input type="text" value="1" class="numbera">
						<a href="" class="add"></a>
						件
					</div>
					<div class="sh_car">
						<a href="javascript:;" class="addcar" id=${res.info_details[m].id}></a>
						<a href="javascript:;" class="addcare"></a>
					</div>
				</div>`
console.log($carmsg)
				
				$(".dynamic_info").html($textmsg)
				$(".static_info").html($carmsg)
			}
		}



		for(var p in res.big_photo){
			$dtxq =""
			if(getCookie("id") ==res.big_photo[p].id){
				$dtxq += `<img src="${res.big_photo[p].img}" alt="">`

				$(".lays").html($dtxq)
			}
		}
		


	}
})

//放大镜开始






function MagnifierGlass(){
	//console.log(this)
	this.Slide_zone = $(".Slide_zone")
	this.init()
}

MagnifierGlass.prototype.init = function(){

	this.show()

	this.hide()
	var that = this
	this.Slide_zone.mousemove(function(event){
		var evt = event || window.event
		that.move()
	})

}
//鼠标移入
MagnifierGlass.prototype.show = function(){

	//鼠标划过滑动区域让显示大图的内容等于大图的内容 并且让他显示   让放大镜透明度0.4
	this.Slide_zone.on("mouseover",function(){


		$(".Magnifier").html($(".big_photo").html())
		$(".Magnifier_box").css("display","block")
		$(".Mask").css("opacity","0.4")
	})


}
//鼠标移动
MagnifierGlass.prototype.move = function(event){
	var evt = event || window.event
	this.mouseX = evt.pageX;
	this.mouseY = evt.pageY
	//console.log(this.mouseX) 
	//console.log(this.mouseY)
	this.left = this.mouseX - $(".Slide_zone").offset().left - $(".Mask").innerWidth()/2
	//console.log(this.left)
	this.top = this.mouseY - $(".Slide_zone").offset().top - $(".Mask").innerHeight()/2


	this.left = this.left <= 14 ? 14 : this.left ;
	this.top = this.top <=0 ? 0 : this.top;
	if(this.left >= $(".big_photo").innerWidth() - $(".Mask").innerWidth() +14 ){
		this.left = $(".big_photo").innerWidth() - $(".Mask").innerWidth()+14
	}

	if(this.top >= $(".big_photo").innerHeight() - $(".Mask").innerHeight()){
		this.top = $(".big_photo").innerHeight() - $(".Mask").innerHeight()
	}
//计算移动的比例

	this.leftProprtion = this.left/($(".big_photo").innerWidth() - $(".Mask").innerWidth())


	this.leftchange =-( $(".Magnifier").innerWidth() - $(".Magnifier_box").innerWidth()) * this.leftProprtion
	$(".Magnifier").css({
		left : this.leftchange
	})

	this.topProprtion = this.top/($(".big_photo").innerHeight() - $(".Mask").innerHeight())
	this.topchange = -( $(".Magnifier").innerHeight() - $(".Magnifier_box").innerHeight()) * this.topProprtion
	$(".Magnifier").css({
		top : this.topchange
	})



	$(".Mask").css({
		left:this.left,
		top:this.top
	})
}


//鼠标移出

MagnifierGlass.prototype.hide = function(){
	//鼠标移出滑动区域让右侧大区域display none   让放大镜透明度0
	this.Slide_zone.on("mouseout",function(){


		$(".Magnifier").html()
		$(".Magnifier_box").css("display","none")
		$(".Mask").css("opacity","0")
	})
}



new MagnifierGlass() 



//放大镜结束
//
//右侧竖着的大导航条开始了
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

		$(".static_info").on("click",".addcar",function(){
			//console.log(this.id)
			console.log(1)
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
				if(getCookie("gools")){


				var arrCookie = eval(getCookie("gools"))
				console.log(arrCookie)
				//console.log(arrCookie)
				var car_html =""

				for(var u = 0 ; u < arrCookie.length; u++){
					car_html+=`<li>
										<a href="javascript:;" class="innercarimg"> <img src="${msg.list[arrCookie[u].id-1].img}" alt=""></a>
										<a href="javascript:;" class="innercartit">${msg.list[arrCookie[u].id-1].title}</a>
										<span class="howmany">${msg.list[arrCookie[u].id-1].maney}${msg.list[arrCookie[u].id-1].price}</span>
										<i>x</i><span class="hownum">${arrCookie[u].num}</span>
										<button class="dele_btn" id=${u}>删除</button>
							</li>`
				}
				$(".cart_roll .gools").html(car_html)
			}
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