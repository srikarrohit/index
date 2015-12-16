<?php
function cutcamel($str){
	$f=$str[0];
	$str=strtolower($str);
	$str[0]=$f;
	$i=0;
	$strs=explode(" ",$str);
	$len1=strlen($strs[0]);
	$len2=strlen($strs[1]);
	$try=$strs[1];
	if(!empty($try))
	{
		$try[0]=strtoupper($try[0]);
		$strs[1]=$try;
		if($len1 <= 3)
			return $strs[1];
		else
			return $strs[0];
	}
	else
	{
		return $strs[0];
	}
}
