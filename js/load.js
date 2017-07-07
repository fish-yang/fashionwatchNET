
function checkAll(type,value){
		switch(type){
			case "phone":
				if((/^1[34578]\d{9}$/).test(value)){
					return true;
				}else{
					return false;
				};break;
			case "email":
				if((/^\w+@\w+(\.\w+)+$/).test(value)){
					return true;
				}else{
					return false;
				};break;
			case "postcode":
				if((/^[1-9]\d{5}$/).test(value)){
					return true;
				}else{
					return false;
				};break;
			case "chinese":break;
			case "img":
				if((/^\w+\.(gif|png|jpg)$/).test(value)){
						return true;
				}else{
						return false;
				};break;
			case "username":
				if((/^[a-zA-Z_]\w{5,14}$/).test(value)){
						return true;
				}else{
						return false;
				};break;
			default:break;
		}
	}