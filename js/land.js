$(function(){
	//console.log(jQuery)


//头部鼠标划过显示二维码的js代码开始

	$(".gzlp").mouseover(function(){
		console.log($(this))
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


//登录页面右下角鼠标划过显示二维码js代码开始

$(".tu_favor_phone").mouseover(function(){

	$(".qrcode").css({

		display:"block"
	})
})


$(".tu_favor_phone").mouseout(function(){
	
		$(".qrcode").css({

		display:"none"
		})

	})
})