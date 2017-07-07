window.onload = function() {
	createM3Lis();
	createM4Lis();
	createM5Lis();
	tabmbBorder("#mbl5tab","#mbl-5-l","#mbl-5-r");
	createM7Lis();
	tabmbBorder("#mbl7tab","#mbl-7-l","#mbl-7-r");
	
}

function createM3Lis() {
	let imgsArr = ["../images/list/list-m3-1.jpg", "../images/list/list-m3-2.jpg", "../images/list/list-m3-3.jpg", "../images/list/list-m3-4.jpg", "../images/list/list-m3-5.jpg"];
	let pArr = ["格拉苏蒂·莫勒 深海蓝 德国海军定制款", "瑞士迪沃斯（DAVOSA）-Diving潜水系列 Ternos Professional TT特勒斯 16155950 机械男表", "法国赫柏林 珍珠系列 女士腕表", "巴塞尔新款上市", "美度MIDO-完美系列 M8330.4.11.13 机械男表"];
	let priceArr = ["￥17600", "￥5700", "￥4600", "￥17316", "￥5016"];
	let SoldArr = ["已售272", "已售83", "已售2672", "已售17", "已售27"];
	let str = "";
	for(let i = 0; i < imgsArr.length; i++) {
		str += "<li><a href='#'><img src='" + imgsArr[i] + "'></a><p><a href='#'>" + pArr[i] + "</a></P><p><span class='l'>" + priceArr[i] + "</span><span class='r'>" + SoldArr[i] + "</span></p></li>"
	}
	$("#mbl-3").html(str);
}

function createM4Lis() {
	let imgsArr = ["../images/list/mb4-comment-1.jpg", "../images/list/mb4-comment-2.jpg", "../images/list/mb4-comment-3.jpg", "../images/list/mb4-comment-4.jpg", "../images/list/mb4-comment-5.jpg"];
	let pArr = ["还没有时间去截表带，不过表确实很漂亮，包装也很好，最满意的是客服了，给我打了几次电话核实信息，而且有问题立马就给我解决了。", "和预期差不多，外观还可以！", "感觉可以，带的蛮好看的！", "支持万表网，觉得美美哒，下次还会再来！", "[cp]第一次在网上买如此贵重的东西，万表网非常好，客服也很耐心。去截取表带的亨吉利名表维修中心，说万表网从不卖假货，都是正品！好评[赞]@万表网​​​[/cp]"];
	let spanArr = ["wxUo****：", "wb17****：", "匿名用户：", "匿名用户：", "wb17****："]
	let str = "";
	for(let i = 0; i < imgsArr.length; i++) {
		str += "<li><a href='#'><img src='" + imgsArr[i] + "'><span>" + spanArr[i] + "</span></a><p><a href='#'>" + pArr[i] + "</a></p></li>"
	}
	let str1 = "";
	for(let j = 0; j < 3; j++) {
		str1 += "</a><a href='#'></a>";
	}
	str += "<div id='mb4-btn'>" + str1 + "</div>";
	$("#mbl-4-1").html(str);
}

function createM5Lis(){
	let imgsArr = ["../images/list/list-m5-1.jpg", "../images/list/list-m5-2.jpg", "../images/list/list-m5-3.jpg"];
	let pArr = ["还没有时间去截表带，不过表确实很漂亮，包装也很好，最满意的是客服了，给我打了几次电话核实信息，而且有问题立马就给我解决了。","和预期差不多，外观还可以！","感觉可以，带的蛮好看的！"];
	let H4Arr = ["wxUo****：", "wb17****：", "匿名用户："];
	let spanArr=["18个好评","291个好评","219个好评"];
	let str = "";
	for(let i=0;i<imgsArr.length;i++){
		str+="<li><a href='#'><img src='"+imgsArr[i]+"'><span>" +spanArr[i]+"</span></a><h4><a href='#'>"+H4Arr[i]+"</a></h4><p><a href='#'>"+pArr[i]+"</a></p></li>"
	}
	let str1 = "";
	for(let j = 0; j < 3; j++) {
		str1 += "</a><a href='#'></a>";
	}
	str += "<div id='mb4-btn'>" + str1 + "</div>";	
	$("#mbl-5-l").html(str);
	let aArr=["rolex","卡地亚手表","手表app","手表品牌大全","手表品牌","dw手表","积家","iwc","CK手表","沛纳海","卡地亚手表","万国手表","浪琴表价格","欧米茄报价","江诗丹顿手表","世界十大名表","十大名表","卡地亚蓝气球","seiko手表是什么牌子","diesel官网","小红书","依百克","muehle手表"];
	let str2="";
	for(let j=0;j<aArr.length;j++){
		str2+="<a href='#'>"+aArr[j]+"</a>";
	}
	$("#mbl-5-r").html(str2);
}
 function tabmbBorder(id1,id2,id3){
 	$(id1+" span").eq(0).mouseover(function(){
		$(id2).toggle();
		$(id3).toggle();
		$(this).css({"font-weight":"bold","color":"#b01330"});
		$(id1+" span").eq(1).css({"font-weight":100,"color":"#666"});
 	});
 	$(id1+" span").eq(1).mouseover(function(){
		$(id2).toggle();
		$(id3).toggle();
		$(this).css({"font-weight":"bold","color":"#b01330"});
	 	$(id1+" span").eq(0).css({"font-weight":100,"color":"#666"});
 	});
 }
function createM7Lis(){
	let aArr=["百达翡丽","江诗丹顿","宝玑","宝珀","伯爵","朗格","爱彼","积家","格拉苏蒂","法兰克穆勒","欧米茄","劳力士","万国","帝舵","豪雅","卡地亚","爱马仕","君皇","沛纳海","名士","赫柏林","天梭","浪琴","DAVOSA","摩纹","梅花","美度","依波路","爱彼特","英纳格","艾美","摩凡陀","时度","百来苏蒂","西铁城","雅克利曼","蔻驰","卡西欧","东方双狮","Police","芬迪","CELINE","精工表"];
	let str="<p>佩戴世界名表，为您加分加魅力！无论是日常生活、情人约会、商务谈判、社交应酬、运动休闲，选择不同款式的手表，让您到哪里都能成为众人瞩目的焦点。"+"<br/>"+"万表网";
	for(let i=0;i<aArr.length;i++){
		str+="<a href='#'>"+aArr[i]+"</a>、";
	}
	str=str.slice(0,str.length-1);
	str+="，提供美国、德国、瑞士、日本名牌<a href='#'>手表排行</a>、价格、图片、手表推荐信息。所有手表均由品牌商直接供货，100%正品，我们支持各银行信用卡分期付款，全球联保，是多家银行的合作伙伴！"+"<br/>"+"买手表，上万表网！万表网是您网上购买名表的第一选择！</p>";
	$("#mbl-7-r").html(str);
}
