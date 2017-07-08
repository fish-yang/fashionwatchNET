<?php
	header("Content-type: text/html; charset=utf-8");
	$userphone=$_GET['userphone'];
	$con=mysql_connect("localhost","root","123456");
	if(!$con){
		die("注册失败:".mysql_error());
	}else{
		mysql_select_db("html703yd",$con);
		$str="select *from userInfomation where userPhone=".$userphone;
		$result=mysql_query($str,$con);
		$Rowscount=mysql_num_rows($result);
		mysql_close($con);
		if($Rowscount>0){
			echo "1";
		}else{
			echo "0";
		}
	}
?>