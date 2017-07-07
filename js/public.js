	$(function(){
		$("#hidt-top")[0].onclick=function(){
			$("#t-top")[0].style.display="none";
		} 
		let str1="搜索 品牌/系列/型号";let str2="";
		$("#searchText")[0].onfocus=function(){
			str2=$("#searchText")[0].value;
			if(str2==str1){
				$("#searchText")[0].value="";
			}else{
				$("#searchText")[0].value=str2;
			}
		}
		$("#searchText")[0].onblur=function(){
			str2=$("#searchText")[0].value;
			if(str2==""){
				$("#searchText")[0].value=str1;
			}else{
				$("#searchText")[0].value=str2;
			}
		}
		$("#searchText")[0].onkeypress=function(){
			$("#search")[0].style.display="inline-block";
		}
		$("#searchText")[0].onkeyup=function(){
			if($("#searchText")[0].value.length<=0){
				$("#search")[0].style.display="none";
			}
		}
	})
	$(function(){
		selectQR("tab","HQRimg1","tabin");
		selectQR("fmQrtab","fmImg","tabin");
		selectQR("fmQrtab1","fmImg1","tabin");
		closeDoor();		
	})
	/*
		函数名：二维码图片切换；
		参数：切换键所在盒子ID，图片所在盒子ID，切换键切换时改变颜色属性
		功能:做到类似选项卡的图片切换。
	 */
	function selectQR(tabId,imgId,tabchange){
		let tabkey=$("#"+tabId,).children();
		let QRimgobj=$("#"+imgId).children();
		for(let i=0;i<tabkey.length;i++){
			tabkey[i].onmouseover=function(){
				for(let j=0;j<QRimgobj.length;j++){
					QRimgobj[j].style.display="none";
					tabkey[j].className="";
				}
				QRimgobj[i].style.display="block";
				tabkey[i].className=tabchange;
			}
		}
	}
	function closeDoor(){
		$("#telephone")[0].onmouseover=function(){
			$("#telborder").css({"display":"block"});
		};
		$("#telborder span").eq(0)[0].onclick=function(){
			$("#telborder").css({"display":"none"});
		};
		$("#colose1").click(function(){
			$("aside").css({"right":"-251px"})
		});
		$("#shopcar").click(function(){
			$("aside").css({"right":"0px"});
			$("#astit").html("购物车");
			$("#compareBorder").css({"display":"none"});
			$("#bgkart").css({"display":"block"});
		});
		$("#compareBtn").click(function(){
			$("aside").css({"right":"0px"});
			$("#astit").html("对比表款");
			$("#bgkart").css({"display":"none"});
			$("#compareBorder").css({"display":"block"});
		});
		$("#gotop").click(function(){
			$("body").css({"scrollTop":"0"})
		});
	}