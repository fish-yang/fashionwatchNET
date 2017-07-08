require(['jquery-1.8.3.min'], function() {
	$(function() {
		$("#tel").blur(function() {
			if(!checkAll("phone", this.value)) {
				$("form span").eq(0).css({
					display: "block"
				});
				$("form span").eq(0).html("亲，请输入正确手机号码");
				$("#loadbtn")[0].disabled = "disabled";
				return false;
			} else {
				$.ajax({
					url: "../php/load.php",
					type: "get",
					async: "true",
					data: "userphone=" + $("#tel").val(),
					success: function(data) {
						if(data == 1) {
							$("form span").eq(0).css({
								display: "block"
							});
							$("form span").eq(0).html("亲，该电话已经注册过");
							$("#loadbtn")[0].disabled = "disabled";
						} else {
							$("#loadbtn").removeAttr("disabled");
						}
					}
				})
				$("form span").eq(0).css({
					display: "none"
				});
				$("form span").eq(0).html();
				$("#loadbtn").removeAttr("disabled");
			}

		});
		$("#loadcode").click(function() {
			checkcode();

		});
		$("#loadbtn").click(function() {
			$.ajax({
				url: "../php/register.php",
				type: "post",
				async: "true",
				data: "usertel="+$("#tel").val()+"userPass="+$("#password").val()+"codenum="+$("#loadcode").html(),
				success: function(data) {
					
				}
			})
		})
		$("#codebord").focus(function() {
			checkcode();
		})
		$("#codebord").blur(function() {
			let str1 = this.value.toUpperCase();
			let str2 = $("#loadcode").html().toUpperCase();
			if(str1 != str2) {
				$("form span").eq(2).css({
					display: "block"
				});
				$("#loadbtn")[0].disabled = "disabled";
			} else {
				$("form span").eq(2).css({
					display: "none"
				});
				$("#loadbtn").removeAttr("disabled");
			}
		})
		$("#password").blur(function() {
			if(this.value.length < 6 || this.value.length > 20) {
				$("form span").eq(3).css({
					display: "block"
				});
				$("#loadbtn")[0].disabled = "disabled";
			} else {
				$("form span").eq(3).css({
					display: "none"
				});
				$("#loadbtn").removeAttr("disabled");
			}
		})
		$("#password1").blur(function() {
			if(this.value != $("#password").val()) {
				$("form span").eq(4).css({
					display: "block"
				});
				//$("#loadbtn")[0].disabled="disabled";
				istrue = false;
			} else {
				$("form span").eq(4).css({
					display: "none"
				});
				$("#loadbtn").removeAttr("disabled");
			}
		})
	});

	function checkcode() {
		let str = "";
		while(true) {
			let n = parseInt(48 + Math.random() * (123 - 48));
			if((n >= 48 && n <= 57) || (n >= 65 && n <= 90) || (n >= 97 && n <= 122)) {
				str += String.fromCharCode(n);
			}
			if(str.length >= 4) {
				break;
			}
		}
		$("#loadcode").html(str);
	}

	function checkAll(type, value) {
		switch(type) {
			case "phone":
				if((/^1[34578]\d{9}$/).test(value)) {
					return true;
				} else {
					return false;
				};
				break;
			case "email":
				if((/^\w+@\w+(\.\w+)+$/).test(value)) {
					return true;
				} else {
					return false;
				};
				break;
			case "postcode":
				if((/^[1-9]\d{5}$/).test(value)) {
					return true;
				} else {
					return false;
				};
				break;
			case "chinese":
				break;
			case "img":
				if((/^\w+\.(gif|png|jpg)$/).test(value)) {
					return true;
				} else {
					return false;
				};
				break;
			case "username":
				if((/^[a-zA-Z_]\w{5,14}$/).test(value)) {
					return true;
				} else {
					return false;
				};
				break;
			default:
				break;
		}
	}　　
});