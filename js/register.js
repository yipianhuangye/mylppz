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


})