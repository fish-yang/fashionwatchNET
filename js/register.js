		
	$(function(){
		searchDefault("手机号码/会员名/邮箱","userName");
		loginMethod(); 
	})
	function searchDefault(str,id){//搜索框默认事件
		let str1="";
		$("#"+id)[0].onfocus=function(){
			str1=$("#"+id)[0].value;
			if(str1==str){
				$("#"+id)[0].value="";
			}else{
				$("#"+id)[0].value=str1;
			}
		}
		$("#"+id)[0].onblur=function(){
			str1=$("#"+id)[0].value;
			if(str1==""){
				$("#"+id)[0].value=str;
			}else{
				$("#"+id)[0].value=str1;
			}
		}		
	}
	function loginMethod(){//登录方式选择
		$(".Password1").click(function(){
			$(".Password1").css({"display":"none"});
			$(".Dynamic1").css({"display":"block"});
			$("#PasswordLogin").css({"display":"none"});
			$("#DynamicLogging").css({"display":"block"});
		});
		$(".Dynamic1").click(function(){
			$(".Dynamic1").css({"display":"none"});
			$(".Password1").css({"display":"block"});
			$("#DynamicLogging").css({"display":"none"});
			$("#PasswordLogin").css({"display":"block"});
		});
	}
