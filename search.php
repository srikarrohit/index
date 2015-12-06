<?php
// Array with names
include 'config.php';
$conn = new PDO("mysql:host=$server;dbname=$db", $user, $pwd);
// set the PDO error mode to exception
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$stmt = $conn->prepare("SELECT * FROM users");
//$stmt->setFetchMode(PDO::FETCH_ASSOC);
$stmt->execute();
$a=[];
while($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
	array_push($a,$row["fullname"]);
}
// get the q parameter from URL
$q = $_REQUEST["q"];
$hint = "";
$i=0;
$list=[];
$arrlen=0;
// lookup all hints from array if $q is different from "" 
if ($q !== "") 
{
    $q = strtolower($q);
    $len=strlen($q);
		if($len>3)
		{
    	foreach($a as $name) 
			{
				$i++;
        if (stristr($name, $q))
				{
						$arrlen++;
						$name=strtolower($name);
						$name[0]=strtoupper($name[0]);
						$name=rtrim($name," ");
						for($j=0;$j<strlen($name);$j++)
						{
							if( $name[$j] === " " )
							{
								$k=$j+1;
								$name[$k]=strtoupper($name[$k]);
							}
						}
						array_push($list,$name);					
          //  $hint .= "<li name='suggestions' class='list' id=".$i." onclick='submit(".$i.");'>".$name."</li>"; 
        }
    	}
		/*	$l=0;
			$m=0;
			for($l=0;$l<$arrlen;$l++)
			{
				for($m=0;$m<$arrlen-$l;$l++)
				{
					if($list[$m][0]>$list[$m+1][0])
					{
						$swap=$list[$m];
						$list[$m]=$list[$m+1];
						$list[$m+1]=$swap;
					}
				}
			}*/
			$id=0;
			sort($list,SORT_STRING);
			foreach($list as $sugg)
			{
				$id++;
				//$sugg=Bold(stristr($sugg,$q),$sugg);
				$hint .= "<li name='suggestions' class='list' id=".$id." onclick='submit(".$id.");'>".$sugg."</li>"; 
			}
			if($hint!="")
			$hint .= "<li name='counter' id='counter' style='display:none'>".$id."</li>";
			if($hint==="")
			echo "No suggestions";
			else
			echo "<ul class='ul' >".nl2br($hint)."</ul>";
		}
		else
		echo "Minimum number of characters is 4";		
}
// Output "no suggestion" if no hint was found or output correct values 
function Bold($text, $str) {
    return str_replace($text, "<strong>".$text."</strong>", $str);
}
?>
