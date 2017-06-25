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
	
	
	
	//分页


	function Pagination(res){
		this.res = eval(res);

		this.show = $(".listmsg")

		this.pagemore = $(".pagemore")
   			

		this.upage = $(".uppage")

		this.down = $(".downpage")

		this.index =1 ;
		this.pageNumber = Math.ceil(this.res.length/20)

		this.init(this.res) ;

		this.btnsure = $(".btnsure")
		
		//console.log(this.res)

	}






Pagination.prototype.init = function(res){
	this.rendering(this.res);
	//console.log(res)
	var that = this
	
	this.renderingBtn()

	this.upage.click(function(){
	
			that.upagebtn()
		})	

	this.down.click(function(){
		that.downbtn()
	})

	this.allnum()


	this.blur()

	this.focus()

	this.Jump()

}





Pagination.prototype.blur = function(){
	var that = this
	$(".inputpagnum").on("blur",function(){

	//console.log($(".inputpagnum").val())
	if($(".inputpagnum").val() <= 0 || $(".inputpagnum").val() > that.pageNumber){
		$(".inputpagnum").css({
			background:"#f20"
		})
	}
	})
}

Pagination.prototype.focus = function(){
	$(".inputpagnum").on("focus",function(){
		console.log($(this))
		$(this).css({
			background:"#fff"
		})
	})

}





Pagination.prototype.allnum = function(){
	$(".allnum i").html(this.pageNumber)
}


Pagination.prototype.downbtn = function(){

	if(this.index == this.pageNumber){
		this.index =1
	}else{
		this.index ++
	}

		var that = this

	that.rendering()

	that.renderingBtn()

}


Pagination.prototype.upagebtn = function(){
	if(this.index == 1){
		this.index = this.pageNumber
	}else{
		this.index --
	}

	var that = this

	that.rendering()

	that.renderingBtn()

}




Pagination.prototype.renderingBtn = function(){

	var li = ""
	for(var j = 0 ; j < this.pageNumber ; j++){

		if(j == this.index-1){
			li+= "<li class='active btna'>"+(j+1)+"</li>"
		}else{
			li+="<li class='btna'>"+(j+1)+"</li>"
		}
		
	}

	this.pagemore.html(li)
}





Pagination.prototype.rendering = function(){

	var html = "";

	for(var i = (this.index-1)*20 ; i < this.index *20  ; i++){
			if(i < this.res.length){
				html += `<li data-id="${this.res[i].id}">
 				<a class="photo" href="javascript:;"><img src="${this.res[i].img}" alt=""></a>
				<a href="javascript:;" class="title">${this.res[i].title}</a>
				<p class="Characteristic">${this.res[i].Characteristic}</p>
				<p class="price">￥<span class="maney">${this.res[i].maney}</span>${this.res[i].price}</p>
				<div class="part_last">
					<div class="shopingCar">
						<a class="addcar" href="javascript:;" id=${this.res[i].id}>加入购物车</a>
						<a class="atte" href="javascript:;">加关注</a>
					</div>
					<div class="volume">
						<span>已售:${this.res[i].voluem}</span>
						<div class="score">
							<strong>评分</strong><i></i>
						</div>
					</div>
				</div>
			</li>`
			}	
	}

	$(".listmsg").html(html) 
			
	this.btnli()


}	


Pagination.prototype.btnli = function(){
	
		var that = this
		$(".pagemore").on("click",function(event){

			for(var m = 0 ; m < that.pageNumber; m++){
				if(event.target == $(".pagemore li")[m]){
					//console.log(m)

					that.index = m+1;
				}
			}

			that.rendering()

			that.renderingBtn()


			$(".listmsg .photo,.listmsg .title").on("click",function(){
					var xx = $(this).parent().attr("data-id");
					var that = this;
					$.ajax({
						url:("http://localhost/lppz/data/lppz1.json"),
						success:function(res){
							for (var i in res.list) {
								if(res.list[i].id == xx){
									setCookie("id",xx);
									window.location.href = "http://localhost/lppz/details.html";
								}
							}					
						}
					})	
			})	

		})
	}




Pagination.prototype.Jump = function(){
var that = this
	$(".btnsure").on("click",function(){

		that.index = $(".inputpagnum").val()
		console.log(that.index)

		that.rendering()

		that.renderingBtn()
	})
		
}




/*$.ajax({
		url:("http://localhost/lppz/data/lppz.json"),
		success:function(res){
			//console.log(res)
			new Pagination(res)

		}
	})*/



$.ajax({
		url:("http://localhost/lppz/data/lppz1.json"),
		success:function(res){
			//console.log(res.list)
			new Pagination(res.list)
			for(var i in res.list){
				//console.log(res.list[i].id)
				$(".listmsg .photo,.listmsg .title").on("click",function(){
					setCookie("id",res.list[$(this).parent().index()].id)
					window.location.href="http://localhost/lppz/details.html"
				})
			}
			
		}
	})



//分页终于结束了

//右侧点击x关闭广告

$(".Advertisement").find("span").on("click",function(){

	$(".Advertisement").stop().animate({
		opacity:0
	})
})







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
