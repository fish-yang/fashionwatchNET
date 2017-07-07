	/*
	  实现对象obj以speed速度向target目标attr位置匀速运动。
	 */
	function move1(obj,target,speed,attr){
		clearInterval(timer);//清除上次定时器
		timer=setInterval(function(){//设置定时器，定时改变物体(元素/标签)的坐标位置来实现运动。
			let attrValue=parseInt(getStyle(obj,attr));//获取物体的属性(位置/大小)的兼容写法
			if(Math.abs(attrValue-target)<Math.abs(speed)){//判定物体停止
				obj.style[attr]=target+"px";//停止后，物体的移动最后位置与目标位置一致
				clearInterval(timer);//清除定时器。
			}else{
				obj.style[attr]=(attrValue+speed)+"px";//运动速度公式
			}

		},30)
	}
	function getStyle(obj,attr){
		if(obj.currentStyle) {
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj,false)[attr];
		}
	}
	/*
	  实现对象obj以speed速度向target目标attr位置加速运动。
	 */
	function move2(obj,target,speed,attr){
		clearInterval(timer);//清除上次定时器
		if(!speed){
			speed=(parseInt(getStyle(obj,attr))>target)?10:-10;
		}
		timer=setInterval(function(){//设置定时器，定时改变物体(元素/标签)的坐标位置来实现运动。
			let attrValue=parseInt(getStyle(obj,attr));//获取物体的属性(位置/大小)的兼容写法
			if(Math.abs(attrValue-target)<Math.abs(speed)){//判定物体停止
				obj.style[attr]=target+"px";//停止后，物体的移动最后位置与目标位置一致
				clearInterval(timer);//清除定时器。
			}else{
				obj.style[attr]=(attrValue+speed)+"px";//运动速度公式
				speed=(speed>0)?++speed:--speed;
				console.log(speed);
			}

		},30)
	}
	/*
	  实现对象obj以speed速度向target目标attr位置减速运动。
	 */
	function move3(obj,target,speed,attr){
		clearInterval(timer);//清除上次定时器
		if(!speed){
			speed=(parseInt(getStyle(obj,attr))>target)?10:-10;
		}
		let x=speed;
		timer=setInterval(function(){//设置定时器，定时改变物体(元素/标签)的坐标位置来实现运动。
			let attrValue=parseInt(getStyle(obj,attr));//获取物体的属性(位置/大小)的兼容写法
			if(Math.abs(attrValue-target)<Math.abs(speed)){//判定物体停止
				obj.style[attr]=target+"px";//停止后，物体的移动最后位置与目标位置一致
				clearInterval(timer);//清除定时器。
			}else{
				obj.style[attr]=(attrValue+speed)+"px";//运动速度公式
				//speed=(speed>0)?--speed:++speed;
				if(speed>0){
						--speed;
				}
				if(speed<0){
						++speed;
				}
				if(speed==0){
					if(x>0){
						++speed;
					}
					if(x<0){
						--speed;
					}
				}
				console.log(speed);
			}
		},30)
	}
	/*
	  实现对象obj向target目标attr位置的缓冲运动。
	 */
	function move4(obj,target,attr){
		clearInterval(timer);//清除上次定时器
		timer=setInterval(function(){//设置定时器，定时改变物体(元素/标签)的坐标位置来实现运动。
			let attrValue=parseInt(getStyle(obj,attr));//获取物体位置，每次定时器启动,都会重新获取差值。
			let speed=(target-attrValue)/7;
			//设置速度:(目标位置-物体位置)固定值;每次定时器启动,根据差值不同重新求得速度,速度会逐渐减小直到1到0停止;
			speed=(target-attrValue)>0?Math.ceil(speed):Math.floor(speed);
			//速度大于0向上取整，速度小于零向下取整（解决不能精确到达目标）
			if(target==attrValue){//判断物体位置
				clearInterval(timer);
			}else{
				obj.style[attr]=(attrValue+speed)+"px";
			}
		},30)
	}
	/*
	  实现对象obj的淡入淡出运动。
	 */
	function move5(obj,target){
		clearInterval(timer);
		timer=setInterval(function(){
			let	attrValue=getStyle(obj,"opacity")*100;
			let speed=(target-attrValue)/7;
			speed=(speed>0)?Math.ceil(speed):Math.floor(speed);
			if(target==attrValue){
				clearInterval(timer);
			}else{
				obj.style["filter"]=`alpha(opacity=${attrValue+speed})`;
				obj.style["opacity"]=(attrValue+speed)/100;
			}
		},30)
	}
	/*
	  实现多对象(物体)obj的淡入淡出运动。
	 */	
	function move6(obj,target){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			let	attrValue=getStyle(obj,"opacity")*100;
			let speed=(target-attrValue)/8;
			speed=(speed>0)?Math.ceil(speed):Math.floor(speed);
			if(target==attrValue){
				clearInterval(obj.timer);
			}else{
				obj.style["filter"]=`alpha(opacity=${attrValue+speed})`;
				obj.style["opacity"]=(attrValue+speed)/100;
			}
		},30)
	}	
	/*
	  实现多对象(物体)obj的多种属性单个运动。
	*/	

	function move7(obj,target,attr){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
				attrValue=0;
			if(attr=="opacity"){
				attrValue=getStyle(obj,"opacity")*100;	
			}else{
				attrValue=parseInt(getStyle(obj,attr));
			}
			let speed=(target-attrValue)/8;
			speed=(speed>0)?Math.ceil(speed):Math.floor(speed);
			if(target==attrValue){
				clearInterval(obj.timer);
			}else{
				if(attr=="opacity"){
					obj.style["filter"]=`alpha(opacity=${attrValue+speed})`;
					obj.style["opacity"]=(attrValue+speed)/100;
				}else{
					obj.style[attr]=(attrValue+speed)+"px";
				}
			}
		},30)
	}
	/*
	  实现多对象(物体)obj的多属性同时运动。
	*/

	function move8(obj,attrs){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			let isEnd=false
			for(let attr in attrs){
				attrValue=0;
				if(attr=="opacity"){
					attrValue=getStyle(obj,"opacity")*100;	
				}else{
					attrValue=parseInt(getStyle(obj,attr));
				}
				let speed=(attrs[attr]-attrValue)/8;
				speed=(speed>0)?Math.ceil(speed):Math.floor(speed);
				if(attrs[attr]==attrValue){
					isEnd=true;
				}else{
					isEnd=false;
					if(attr=="opacity"){
						obj.style["filter"]=`alpha(opacity=${attrValue+speed})`;
						obj.style["opacity"]=(attrValue+speed)/100;
					}else{
						obj.style[attr]=(attrValue+speed)+"px";
					}
				}
			}
			if(isEnd){
				clearInterval(obj.timer);
			}		
		},30)	
	}
	/*
	  实现多对象(物体)obj的多属性链式运动。
	*/
	function move9(obj,attrs,fun){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			let isEnd=false
			for(let attr in attrs){
				attrValue=0;
				if(attr=="opacity"){
					attrValue=getStyle(obj,"opacity")*100;	
				}else{
					attrValue=parseInt(getStyle(obj,attr));
				}
				let speed=(attrs[attr]-attrValue)/8;
				speed=(speed>0)?Math.ceil(speed):Math.floor(speed);
				if(attrs[attr]==attrValue){
					isEnd=true;
				}else{
					isEnd=false;
					if(attr=="opacity"){
						obj.style["filter"]=`alpha(opacity=${attrValue+speed})`;
						obj.style["opacity"]=(attrValue+speed)/100;
					}else{
						obj.style[attr]=(attrValue+speed)+"px";
					}
				}
			}
			if(isEnd){
				clearInterval(obj.timer);
				if(fun){fun();}
			}		
		},30)	
	}




