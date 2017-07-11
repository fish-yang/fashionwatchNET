$(function(){
	createElementA();
	masterCheck();
	masterNav();
})
function createElementA(){
	let str="";
	let Aarr=["浪琴","赫柏林","迪沃斯","天梭","美度","菲拉格慕","帝舵","荣汉斯","雍加毕索","康斯登","罗马","瑞士军表","汉米尔顿","飞亚达","优立时","查梅斯","摩纹","爱罗","绮年华","西铁城","时度","梅花","哈伯曼","海鸥","依波路","宝路华","名爵","摩凡陀","豪利时","英纳格","雷达","萨克莱斯","蕾蒙威","雪铁纳","高峯","海亦施","豪度","天铭","廊桥表","上海","北京","dufa","劳特莱","山城","SWISS MILITARY HANOWA瑞士军表","柏莱士","名士","尚维沙","特工","PILO&CO GENEVE","DVH","艾沛勒","AVI-8","积爵"];
	for(let i=0;i<Aarr.length;i++){
		str+="<a href='#'>"+Aarr[i]+"</a>";
	}
	$("#mstlf2Pro").html(str);
}
function masterCheck(){
	let arr=$("#masterCheck").children();
	for(let i=0;i<arr.length;i++){
		$(arr[i]).click(function(){
			for(let j=0;j<arr.length;j++){
				arr[j].className="";
			}
			$(this).addClass("on");
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
