	window.onload=function(){
		shadowImg("artShadow",220,206,"#fff");
		showSpan();
		Countdown();
		let a=new SlideShow({
			boxId:"banner",
			width:1578,
			height:452,
			ord:1,
			imgs:["images/index/banner-1.jpg","images/index/banner-2.jpg","images/index/banner-3.png","images/index/banner-4.png","images/index/banner-5.png","images/index/banner-6.jpg","images/index/banner-7.jpg"],
			btnwidth:20,
			btnheight:20,
			btncolor:"#000",
			btnheighColor:"#fff",
			downbtLeft:240,
			downbtRight:20,
			speed:50,
			timespace:4000		
		});
		a.initUI();
		a.scaleImg(a.ord,.95,2);
		a.start();
		a.clickBtn();

		let b=new SlideShow({
			boxId:"mLeft",
			width:422,
			height:394,
			ord:1,
			imgs:["images/index/main-1.jpg","images/index/main-2.jpg","images/index/main-3.jpg","images/index/main-4.jpg"],
			timespace:4000,
			btnwidth:20,
			btnheight:20,
			btncolor:"#ccc",
			btnheighColor:"#fff",
			downbtLeft:20,
			downbtRight:20,
			speed:50
		});
		b.initUI();
		b.scaleImg(b.ord,0.95,2);
		b.start();
		b.clickBtn();

		let c=new SlideShow({
			boxId:"mLeft1",
			width:422,
			height:394,
			imgs:["images/index/main-5.jpg","images/index/main-6.jpg","images/index/main-7.jpg","images/index/main-8.jpg"],
			ord:1,
			timespace:4000,
			btnwidth:20,
			btnheight:20,
			btncolor:"#ccc",
			btnheighColor:"#fff",
			downbtLeft:20,
			downbtRight:20,
			speed:50
		});
		c.initUI();
		c.scaleImg(c.ord,0.95,2);
		c.start();
		c.clickBtn();

		let d=new SlideShow({
			boxId:"mLeft2",
			width:422,
			height:394,
			imgs:["images/index/main-9.jpg","images/index/main-10.jpg","images/index/main-11.jpg","images/index/main-12.jpg"],
			ord:1,
			timespace:4000,
			btnwidth:20,
			btnheight:20,
			btncolor:"#ccc",
			btnheighColor:"#fff",
			downbtLeft:20,
			downbtRight:20,
			speed:50
		});
		d.initUI();
		d.scaleImg(d.ord,0.95,2);
		d.start();
		d.clickBtn();
	}
	function shadowImg(parentId,selWidth,selfHeight,shadowColor){
		let Obj=$("#"+parentId).children();
		for(let i=0;i<Obj.length;i++){
			let shadow=document.createElement("div")
			shadow.style.cssText="width:"+selWidth+"px;height:"+selfHeight+"px;background:"+shadowColor+";position:absolute;top:0;left:0;z-index:5;cursor:pointer;opacity:0;filter:alpha(opacity=0)";
			shadow.className="shadow";
			$(Obj[i]).append(shadow);
		}
		for(let j=0;j<Obj.length;j++){
			Obj[j].onmouseover=function(){
				$(".shadow").css({"opacity":0.5,"filter":"alpha(opacity=50)"});
				$($(".shadow")[j]).css({"opacity":0,"filter":"alpha(opacity=0)"});
			}
			Obj[j].onmouseout=function(){
				$(".shadow").css({"opacity":0,"filter":"alpha(opacity=0)"});
			}
		}	
	}
	function showSpan(){
		let aObj=$(".m1-bottom").children();
		for(let i=0;i<aObj.length;i++){
			let spans=document.createElement("span");
			spans.style.cssText="width:122px; height:39px; position:absolute; background:#fff; top:17px; left:38px; border:1px solid #f60; border-radius:6px; text-align:center; line-height:39px; font-size: 14px;color:#000;display:none;"
			spans.value="天梭";
			spans.className="sps";
			$(aObj[i]).append(spans);
		}
		let arr=["天梭","浪琴","欧米茄","GUCCI","优立时","DAVOSA","天梭","赫柏林","泰格豪雅","依波路","劳特莱","罗马表","DW","荣汉斯","菲拉格慕","诺美纳","爱罗","飞亚达"];
		for(let j=0;j<aObj.length;j++){
			aObj[j].onmouseover=function(){
				$($(".sps")[j]).css({"display":"block"});
				$(".sps")[j].innerHTML=arr[j];
			}
			aObj[j].onmouseout=function(){
				$($(".sps")[j]).css({"display":"none"});
			}
		}
	}
	function Countdown(){
		setInterval(function(){
			let date1=new Date();
			let date2=new Date("2017-7-1");
			let time=date2.getTime()-date1.getTime();
			let hours=parseInt(time/3600000);
			let minutes=parseInt(time/(1000*60)%60);
			let seconds=parseInt(time/1000%60);
			let str="仅剩"+"&nbsp;&nbsp;"+hours+":"+minutes+":"+seconds;
			$(".Countdown1")[0].innerHTML=str;
			$(".Countdown1")[1].innerHTML=str;
			$(".Countdown1")[2].innerHTML=str;
			$(".Countdown1")[3].innerHTML=str;
		},1000)
	}
