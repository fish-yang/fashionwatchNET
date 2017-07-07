	//1、自动变换
		//（1）、改变当前图片序号为ord
		//（2）、改变图片（如：滑入滑出效果，淡入淡出效果等等）
		//（3）、改变按钮颜色；
	function SlideShow(obj){
		this.boxId=obj.boxId;
		this.width=obj.width;
		this.height=obj.height;
		//this.direction=obj.direction;
		//this.speed=obj.speed;
		this.imgs=obj.imgs;
		this.ord=obj.ord;//从第ord张图片起;
		this.timeSpace=obj.timeSpace;
		this.btnWidth=obj.btnWidth;
		this.btnHeight=obj.btnHeight;
		this.btnColor=obj.btnColor;
		this.btnHighColor=obj.btnHighColor;
		this.timer=null;
		this.timer1=null;
		this.initUI=function(){
			for(let i=0;i<this.imgs.length;i++){
				let imgobj=document.createElement("img");
				imgobj.style.cssText="position:absolute;width:"+this.width+"px;height:"+this.height+"px;top:50%;left:50%;margin-left:"+(-1*this.width/2)+"px;margin-top:"+(-1*this.height/2)+"px;opacity:0;filter:alpha(opacity=0);cursor:pointer;z-index:2;";
				imgobj.src=this.imgs[i]
				$("#"+this.boxId).append(imgobj);
			}
			$($("#"+this.boxId).children()[0]).css({"opacity":1,"filter":"alpha(opacity=100)"});
			let u1=document.createElement("ul");
			let uw=(16+this.btnWidth)*this.imgs.length;
			u1.style.cssText="list-style:none;position:absolute;top:90%;left:50%;background:rgba(0,0,0,.3);width:"+uw+"px;height:8px;padding:9px 13px;border-radius:13px;z-index:5;";
			$("#"+this.boxId).append(u1);
			for(let i=0;i<this.imgs.length;i++){
				let lis=document.createElement("li");
				lis.style.cssText="width:"+this.btnWidth+"px;height:"+this.btnHeight+"px;border-radius:50%;background-color:"+this.btnColor+";float: left;margin:0 8px;cursor: pointer;";
				u1.appendChild(lis);
			}
			u1.style.marginLeft=-1*u1.offsetWidth/2+"px";
			u1.children[this.ord-1].style.backgroundColor=this.btnHighColor;
			let that=this;
			$("#"+this.boxId)[0].onmouseover=function(){that.stop();}
			$("#"+this.boxId)[0].onmouseout=function(){that.start();}
		}
		this.scaleImg=function(ord,num){
			let that=this;
				for(let i=0;i<that.imgs.length;i++){
					if(i==(ord-1)){
					$("#"+that.boxId+" img").eq(i).css({transition:"all 3s",transform:"scale("+num+")"})
					}
				} 
		}
		this.start=function(){
			let that=this;
			this.timer=setInterval(function(){
				that.goStep();
				that.scaleImg(that.ord,0.95);
			},this.timeSpace)
		}
		this.goStep=function(){
			this.ord++;
			if(this.ord>this.imgs.length){
				this.ord=1;
			}
			let outOrd=this.ord-1;
			if(outOrd<=0){
				outOrd=this.imgs.length;
			}
			this.move(outOrd,this.ord)
			this.changeBtnColor(this.ord)
			this.scaleImg(outOrd,1)
		}
		this.move=function(outOrd,inOrd){
			let that=this;
			let outOp=100;
			let inOp=0;
			$($("#"+that.boxId).children()[outOrd-1]).css({"opacity":1,"filter":"alpha(opacity=100)"});
			$($("#"+that.boxId).children()[inOrd-1]).css({"opacity":0,"filter":"alpha(opacity=0)"});
			clearInterval(this.timer1);
			that.timer1=setInterval(function(){
				outOp=outOp-20;
				inOp=inOp+20;
				if(outOp<=0){
					outOp=0;
					clearInterval(that.timer1);
				}
				if(inOp>=100){
					inOp=100;
					clearInterval(that.timer1);
				}
				$($("#"+that.boxId).children()[outOrd-1]).css({"opacity":outOp/100,"filter":"alpha(opacity="+outOp+")"})
				$($("#"+that.boxId).children()[inOrd-1]).css({"opacity":inOp/100,"filter":"alpha(opacity="+inOp+")"})
			},50)
		}
		this.changeBtnColor=function(ord){
			let lis=$("#"+this.boxId+" ul").children();
			for(let i=0;i<lis.length;i++){
				lis[i].style.backgroundColor=this.btnColor;
			}
			lis[ord-1].style.backgroundColor=this.btnHighColor;
		}
		this.stop=function(){
			let that=this;
			clearInterval(that.timer);
		}
		//3、跳转到指定的图片；
		this.skipImg=function(){
			let lis=$("#"+this.boxId+" ul").children();
			let that=this;
			for(let i=0;i<lis.length;i++){
				lis[i].onmouseover=function(){
					let outOrd=that.ord;
					that.ord=i+1;
					that.move(outOrd,that.ord);
					that.changeBtnColor(that.ord);
					that.scaleImg(that.ord,0.95);
				}
			}
		}
	}	














	