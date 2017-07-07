<?php
	header("Content-type: text/html; charset=utf-8");
	$usertel=$_POST['usertel'];
	$userPass=$_POST['userPass'];
	$con=mysql_connect("localhost","root","123456");
	if(!$con){
		die("注册失败:".mysql_error());
	}else{
		mysql_select_db("html703yd",$con);
		$str="insert into userInfomation(userpass,userPhone)values('".$userPass."','".$usertel."')";
		$succ=mysql_query($str,$con);
		mysql_close($con);
		if($succ>0){
			echo "注册成功";
		}else{
			echo "注册失败";
		}
	}
?>