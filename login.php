<?php
	$us=$_POST['user'];
	$pd=$_POST['pass'];
	$tel=$_POST['tel'];
	$flag=$_POST['flag'];
	$sql=new mysqli();
	$sql -> connect('localhost','melodywe','7464jj','melodywe');
	$sql -> set_charset('utf8');
	if($flag==1){
		$res=$sql -> query("INSERT INTO `melodywe`.`readlogin` (`username`, `password`, `phone`) VALUES ('".$us."', '".$pd."', '".$tel."');");

		if($res == 1){
			echo "注册成功";
		}else{
			echo '注册失败';
		}
	}else{
		$res = $sql -> query("SELECT * FROM `readlogin` WHERE `username` = '".$us."' AND `password` = '".$pd."'");
		$row =$res ->fetch_row();
		if($us==$row[0]&&$pd==$row[1]){
			echo "登录成功";
			
		}else{
			echo "登录失败";
		}
		
	}
?>
