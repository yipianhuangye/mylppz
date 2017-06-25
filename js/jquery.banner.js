;(function($){
	//console.log($)
	$.extend({

		banner:function(opt){

			this.parent = $(opt.parent);
			this.children =this.parent.children();
			this.index =0;
			this.interval = $(opt.interval)
			this.timer = null;
			this.init();
			console.log(this.children)
		},
		init:function(){
			this.opacityChange()
			console.log(1)
		},
		opacityChange:function(){

			var that = this
			this.timer = setInterval(function(){
				if(that.index == that.children.length-1){
					that.index = 0
				}else{

					that.index++
				}

				//console.log(that.index)
			    that.move()
              },3000)
              
		},

		move:function(){
			/*this.children[this.index].stop().animate({
				opacity:1
			}).siblings().stop().animate({
				opacity:0
			})*/

			for(var i = 0 ; i <this.children.length; i++){
				this.children[i].style.display="none"
			}

			this.children[this.index].style.display = "block"
		}
	})

})(jQuery)