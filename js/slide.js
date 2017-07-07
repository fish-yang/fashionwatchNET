	function getid(id){
		return document.getElementById(id);
	}
	function createhtml(target){
		return document.createElement(target);
	}
	function SlideShow(obj){
		this.boxId=obj.boxId;
		this.width=obj.width;
		this.height=obj.height;
		this.ord=obj.ord;
		this.imgs=obj.imgs;
		this.btnwidth=obj.btnwidth;
		this.btnheight=obj.btnheight;
		this.btncolor=obj.btncolor;
		this.btnheighColor=obj.btnheighColor;
		this.speed=obj.speed;
		this.timespace=obj.timespace;
		this.downbtLeft=obj.downbtLeft;
		this.downbtRight=obj.downbtRight;
		this.timer=null;
		this.timer1=null;

		this.initUI=function(){//初始化
			for(let i=0;i<this.imgs.length;i++){//动态创建img;
				let imgobj=createhtml("img");
				imgobj.style.cssText="position:absolute;width:"+this.width+"px;height:"+this.height+"px;top:50%;left:50%;margin-top:"+(-1*this.height/2)+"px;margin-left:"+(-1*this.width/2)+"px;opacity:0;filter:alpha(opacity=0);cursor:pointer;";
				imgobj.src=this.imgs[i];
				getid(this.boxId).appendChild(imgobj);
			}
			getid(this.boxId).children[this.ord-1].style.opacity=1;
			//动态创建btn;
			let u1=createhtml("ul");
			u1.style.cssText="position:absolute;height:20px;line-height:20px;top:90%;left:50%;display:inline-block;list-style:none;";
			getid(this.boxId).appendChild(u1);
			for(let j=0;j<this.imgs.length;j++){
				let imgobj=createhtml("li");
				imgobj.style.cssText="width:"+this.btnwidth+"px;height:"+this.btnheight+"px;float:left;margin-right:5px;background:"+this.btncolor+";border-radius:50%;cursor:pointer;";
				u1.appendChild(imgobj);
			}
			u1.children[this.ord-1].style.backgroundColor=this.btnheighColor;
			u1.style.marginLeft=-1*u1.offsetWidth/2+"px";
			//动态创建向左向右按钮。
			for(let i=0;i<2;i++){
				let spans=createhtml("span");
				spans.style.cssText="position:absolute;width:30px;height:90px;top:50%;margin-top:-45px;background:url(images/index/indexs.png) no-repeat;;cursor:pointer;display:none;";
				getid(this.boxId).appendChild(spans);
			}
			let sps=getid(this.boxId).getElementsByTagName("span");
			sps[0].style.left=this.downbtLeft-10+"px";
			sps[1].style.right=this.downbtRight-10+"px";
			sps[0].style.backgroundPosition="0 -15px";
			sps[1].style.backgroundPosition="-31px -15px";
			sps[0].onmouseover=function(){ 
					this.style.backgroundPosition="0 -106px";
				}
			sps[1].onmouseover=function(){ 
					this.style.backgroundPosition="-31px -106px";
				}
			sps[0].onmouseout=function(){ 
					this.style.backgroundPosition="0 -15px";
				}
			sps[1].onmouseout=function(){ 
					this.style.backgroundPosition="-31px -15px";
				}
			let that=this;
			//左右按钮点击事件
			sps[1].onclick=function(){
				let outord=that.ord-1;
				if(outord<1){
					outord=that.imgs.length;
				}
				let imgobjs=getid(that.boxId).getElementsByTagName("img");
				imgobjs[outord-1].style.opacity=0;				
				imgobjs[that.ord-1].style.opacity=1;				
				that.gostep();
			};
			sps[0].onclick=function(){
				let outord=that.ord+1;
				if(outord>that.imgs.length){
					outord=1
				}
				let imgobjs=getid(that.boxId).getElementsByTagName("img");
				imgobjs[outord-1].style.opacity=0;				
				imgobjs[that.ord-1].style.opacity=1;				
				that.goup();
			};
			//鼠标覆盖移出事件。
			getid(this.boxId).onmouseover=function(){
				that.stop();
				let sps=getid(that.boxId).getElementsByTagName("span");
				sps[0].style.display="block";
				sps[1].style.display="block";
				sps[0].style.left=that.downbtLeft+"px";
				sps[1].style.right=that.downbtRight+"px";
			};	
			getid(this.boxId).onmouseout=function(){
				that.start();
				let sps=getid(that.boxId).getElementsByTagName("span");
				sps[0].style.display="none";
				sps[1].style.display="none";
				sps[0].style.left=that.downbtLeft-10+"px";
				sps[1].style.right=that.downbtRight-10+"px";
			};	
		}
		this.start=function(){//设置定时器
			let that=this;
			this.timer=setInterval(function(){
				that.gostep();
			},this.timespace)
		}
		this.stop=function(){//清除定时器
			clearInterval(this.timer);
		}
		this.scaleImg=function(ord,num,overtime){
			let imgobjs=getid(this.boxId).getElementsByTagName("img");
			for(let i=0;i<imgobjs.length;i++){
				if(i==(ord-1)){
				imgobjs[i].style.transition="all "+overtime+"s";
				imgobjs[i].style.transform="scale("+num+")";
				}
			} 
		}
		this.goup=function(){//向左走
			this.ord--;
			if(this.ord<1){
				this.ord=this.imgs.length;
			}
			let outord=this.ord+1;
			if(outord>this.imgs.length){
				outord=1;
			}
			this.move(outord,this.ord);
			this.changeBtncolor(this.ord);
			this.scaleImg(outord,1,2);
			this.scaleImg(this.ord,.95,2);
		}
		this.gostep=function(){//向右走
			this.ord++;
			if(this.ord>this.imgs.length){
				this.ord=1;
			}
			let outOrd=this.ord-1;
			if(outOrd<1){
				outOrd=this.imgs.length;
			}
			this.move(outOrd,this.ord);
			this.changeBtncolor(this.ord);
			this.scaleImg(outOrd,1,2);
			this.scaleImg(this.ord,.95,2);
		}
		this.move=function(outord,inord){//移动事件
			let curout=100;
			let currin=0;
			let imgobjs=getid(this.boxId).getElementsByTagName("img");
			let that=this;
			clearInterval(this.timer1);
			this.timer1=setInterval(function(){
				curout=curout-that.speed;
				currin=currin+that.speed;
				if(curout<=0){
					curout=0;
					clearInterval(that.timer1);
				}
				if(currin>=100){
					currin=100;
					clearInterval(that.timer1);
				}
				imgobjs[outord-1].style.opacity=curout/100;				
				imgobjs[inord-1].style.opacity=currin/100;				
			},50)
		}
		this.changeBtncolor=function(ord){//改变按钮颜色
			let lis=getid(this.boxId).getElementsByTagName("li");
			for(let i=0;i<lis.length;i++){
				lis[i].style.backgroundColor=this.btncolor;
			}
			lis[ord-1].style.backgroundColor=this.btnheighColor;
		}
		this.clickBtn=function(){//按钮点击事件
			let lis=getid(this.boxId).getElementsByTagName("li");
			let outord;
			let that=this;
			for(let i=0;i<lis.length;i++){
				lis[i].onclick=function(){
					outord=that.ord;
					that.ord=i+1;
					that.move(outord,that.ord);
					that.changeBtncolor(that.ord);
				}
			}		
		}
	}
