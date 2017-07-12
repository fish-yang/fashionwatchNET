$(function(){
	mirrorCheckcard();
	bigmirror();
	createElementA();
	masterNav();
	createElementP();
	createElementImg();
	createmarket();
	CheckCardthing("#masterCheck","on",".cards");
	CheckCard("#CommentsTop","onselect");
})
function createElementA(){
	let str="";
	let arr=["浪琴","赫柏林","迪沃斯","天梭","美度","菲拉格慕","帝舵","荣汉斯","雍加毕索","康斯登","罗马","瑞士军表","汉米尔顿","飞亚达","优立时","查梅斯","摩纹","爱罗","绮年华","西铁城","时度","梅花","哈伯曼","海鸥","依波路","宝路华","名爵","摩凡陀","豪利时","英纳格","雷达","萨克莱斯","蕾蒙威","雪铁纳","高峯","海亦施","豪度","天铭","廊桥表","上海","北京","dufa","劳特莱","山城","SWISS MILITARY HANOWA瑞士军表","柏莱士","名士","尚维沙","特工","PILO&CO GENEVE","DVH","艾沛勒","AVI-8","积爵"];
	for(let i=0;i<arr.length;i++){
		str+="<a href='#'>"+arr[i]+"</a>";
	}
	$("#mstlf2Pro").html(str);
}
function createElementP(){
	let str="";
	let arr=["品牌: 爱宝时","系列: Emotion情感系列","款式: 男表","机芯: 自动机械机芯","机芯型号: ETA","2892-A2","表壳: 不锈钢表耳: 20mm","纵向表耳间距: 50mm","表盘尺寸: 41mm","厚度: 9mm","表冠: 纹路表冠","表底: 透底","表镜: 蓝宝石水晶玻璃","表盘: 蓝色","表带: 真皮表带","颜色: 黑色","表扣: 针扣","防水: 50米","包装: 精美包装盒、说明书、保修卡等","功能: 日期显示","大三针推出年份: 2014年","联保: 全球联保，两年保修"];
	for(let i=0;i<arr.length;i++){
		str+="<p>"+arr[i]+"<span></span></p>";
	}
	$("#materD1Info").html(str);
}
function createElementImg(){
	let str="<img src='../images/details/master-r-1-1.jpg'><img src='../images/details/infoss.png'>";
	for(let i=2;i<=19;i++){
		str+="<img src='../images/details/master-r-1-"+i+".jpg'>";
	}
	$("#moreImg").html(str);
}
function createmarket(){
	let aArr=["源自星空的浪漫！瑞士艺术制表大师爱宝时（...","瑞士艺术制表大师爱宝时（EPOS）-Or...","瑞士艺术制表大师爱宝时（EPOS）-Em...","瑞士艺术制表大师爱宝时（EPOS）-Or..."]
	let span1Arr=["12880","7050","13350","8120"];
	let span2Arr=["7.9","8.2","7.9","8.2"];
	let h3Arr=["同款式","同价位","同品牌","同功能"]
	let str="";
	let str1="";
	for(let i=0;i<aArr.length;i++){
		str1+="<dd><h1><a href='#'><img src='../images/details/market-"+(i+1)+".jpg' alt=''/></a></h1>";
		str1+="<p><a href='#'>"+aArr[i]+"</a><a href='#'><span class='l'>￥"+span1Arr[i]+"</span><span class='r'>["+span2Arr[i]+"折]</span></a></p></dd>";
	}
	for(let j=0;j<h3Arr.length;j++){
		str+="<li><h3>"+h3Arr[j]+"</h3><dl>"+str1+"</dl></li>";
	}
	$("#masterMarket").html(str);
}
function CheckCard(id,classname){
	let arr=$(id).children();
	for(let i=0;i<arr.length;i++){
		$(arr[i]).click(function(){
			for(let j=0;j<arr.length;j++){
				arr[j].className="";
			}
			$(this).addClass(classname);
		})
	}
}
function CheckCardthing(id,classname,cssName){
	let arr=$(id).children();
	let oft=$("#masterNav").offset().top-$("#masterNav").height();
	let offset=$(cssName).eq(3).offset().top-$("#masterNav").height();
	let scrolltop=document.documentElement.scrollTop+document.body.scrollTop;
//	console.log(scrolltop);
	for(let i=0;i<arr.length;i++){
		$(arr[i]).click(function(){
			for(let j=0;j<arr.length;j++){
				arr[j].className="";
			}
			$(this).addClass(classname);
			if(i==3){
				$(cssName).eq(0).css({"display":"block"});
				$(cssName).eq(3).css({"display":"block"});
				$("body").scrollTop(offset);
//				console.log($("body").scrollTop());
			}else{
				$(cssName).css({"display":"none"});
				$(cssName).eq(i).css({"display":"block"});
				$(cssName).eq(3).css({"display":"block"});
				$("body").scrollTop(oft);
//				console.log($("body").scrollTop());
			}
		})
	}
}
function masterNav(){
		let oft=$("#masterNav").offset().top;
		window.onscroll=function(){
			let scrolltop=document.documentElement.scrollTop+document.body.scrollTop;
			if(scrolltop>=oft){
				$("#masterNav").css({"position":"fixed","top":0});
			}else if(scrolltop<oft){
				$("#masterNav").css({"position":"static"});
			}
		}
		
	}
function mirrorCheckcard(){
	let arr=$("#dtlCheckcard ul").children();
	for(let i=0;i<arr.length;i++){
		$(arr[i]).mouseenter(function(){
			for(let j=0;j<arr.length;j++){
				arr[j].className="";
			}
			$(this).addClass("dtchecked");
			$("#dtlbigbox img").attr("src","../images/details/list-product-1-2-"+(i+1)+"big.jpg");
		})
	}
}
function bigmirror(){
	$("#dtlbigbox img").mouseenter(function(){
		$(this).css("transform","scale(1.2)")
		$("body").mousemove(function(event){
			let e=event || window.event
			let ofx=e.offsetX;
			let ofy=e.offsetY;
			$("#dtlbigbox img").css({"top":-1*ofx+"px","left":-1*ofy+"px"});
		})
	})
}
