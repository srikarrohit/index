<?php
include 'functions.php';
include 'config.php';
echo "<!DOCTYPE html>
<html>
<head>
	<meta name='viewport' content='width=device-width, initial-scale=1'/>
	<link type='text/css' rel='stylesheet' href='index.css'/>
	<link type='text/css' rel='stylesheet' href='animate.css'/>
	<link type='text/css' rel='stylesheet' href='font-awesome-4.3.0/css/font-awesome.min.css'/>
	<link href='images/logo.png' rel='shortcut icon' type='image/vnd.microsoft.icon'>
	<script src='jquery-1.11.3.min.js'></script>
	<script src='functions.js'></script>
	<script type='text/javascript' src='index.js'></script>
	<script src='wow.min.js'></script>";
?>
<script>
	window.setInterval("time()", 5000);
</script>
<?php
echo"
	<title>Students Portal</title>
</head>
</head>
<body >
	<div id='preloader'>
  <div id='status'>&nbsp;</div>
	</div>
 <div id='main' class='fadeInDown animated'>
	<div id='pag-1'>
 	<div id='topBar'>
			<p id='clock' class='cloc'>";
			date_default_timezone_set('Asia/Kolkata');
			echo date("h:i A");
			echo "</p>
	</div>

<div id='searchbox' class='searchbox'>
	<form name='searchform' id='searchform' method='GET' action='".htmlspecialchars($_SERVER["PHP_SELF"], ENT_QUOTES, "utf-8")."' style='margin-left:auto;' onsubmit='return validateForm()'>
				<div id='searchinput'>
			<i class='fa fa-search'></i>
			<input name='stdname' id='inputtext' placeholder='Student Search' type='text' autocomplete='off' onkeyup='showHint(this.value,event)' onkeydown='nodisplay(event)'>
		</div>
				<div id='hideInput' style='display: none;'>
			<input type='hidden' name='cx' value='partner-pub-6463892505403669:7150588345'>
			<input type='hidden' value='utf-8' name='ie'>
		</div>
	</form>
 	<div id='txtHint'></div>
	<div class='suggest' style='display: none;'>
	</div>";
//	echo !empty($_GET['stdname']);
	if( isset($_GET['stdname']) && !empty($_GET['stdname']) )
	{
		 try{
      $conn = new PDO("mysql:host=$server;dbname=$db", $user, $pwd);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      }
      catch(PDOException $e)
        {
        echo "Connection failed: " . $e->getMessage();
        }
    $name=$_GET['stdname'];
    $stmt = $conn->prepare("SELECT * FROM users WHERE fullname=:name");
    $stmt->bindParam(':name', $name);
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
		if(!empty($row))
    {
		if($row["email"]=="")
    $row["email"]=strtolower($row["username"])."@smail.iitm.ac.in";
		$conn = null;
		echo	"<div class='profile'>
				<table id='card'>
				<tbody>
				<tr><td class='pro' rowspan='3'><img class='avatar' src='https://photos.iitm.ac.in/byroll.php?roll=".$row["username"]."'/></td>
				<div id='right'>
				<td class='pro' ><div class='fullname'>".cutcamel($row["fullname"])."</div></td></tr>
				<tr><td class='pro' ><div class = 'username'>".strtolower($row["username"])."</div></td>
				</tr>
				<tr><td class='pro' ><div class = 'email'>".strtolower($row["email"])."</div></td>
        </tr>
				</tbody>
				</table>
				<ul class='data'>
					<li><i class='fa fa-map-marker'></i><span> ".$row['hostel']."</li>
				</ul>
				</div>";
	}
	}
	$con = mysqli_connect($server, $user, $pwd, $db);
		if (!$con) {
			die("Connection failed: " . mysqli_connect_error());
		}
echo "
 </div></div>
  <div id='pag0'>";
	         $query = "SELECT * FROM images WHERE div_id=0";
						$out = mysqli_query($con,$query);
						if (mysqli_num_rows($out)) {
							while($row = mysqli_fetch_assoc($out)) {
								echo "<a href='".$row["link"]."' class='pag_img' id=".substr($row["image"],7,-4)."><img src='".$row["image"]."'/></a>";
							}	
						}
 echo " </div>
   <div id='pag1'>";		
						$query = "SELECT * FROM images WHERE div_id=1";
						$out = mysqli_query($con,$query);
						if (mysqli_num_rows($out)) {
							while($row = mysqli_fetch_assoc($out)) {
								echo "<a href='".$row["link"]."' class='pag_img' id=".substr($row["image"],7,-4)."><img src='".$row["image"]."'/></a>";
							}	
						}
	echo "</div>
   <div id='pag2'>";
						$query = "SELECT * FROM images WHERE div_id=2";
						$out = mysqli_query($con,$query);
						if (mysqli_num_rows($out)) {
							while($row = mysqli_fetch_assoc($out)) {
							echo "<a href='".$row["link"]."' class='pag_img' id=".substr($row["image"],7,-4)."><img src='".$row["image"]."'/></a>";
							}	
						}
						mysqli_close($con);
 echo  "</div>
 </div>
   <div id='back'><img id='previous' src='images/previous.png' style='width: 60px; height: 60px; padding: 0;'/></div>
   <div id='fwd'><img id='next' src='images/next.png' style='width: 60px; height: 60px; padding: 0; '/></div>
 <div id='down' class='wow fadeInDown animated'>
   <table id='ftr' class='wow bounce animated' data-wow-delay='2s' data-wow-iteration='2'>
       <thead></thead>
       <tbody>
           <tr>
             <td class='down'><a href='https://students.iitm.ac.in/home'>
								<img src='images/home.png'/></div></a>
									</td>
             <td class='down'><a href='https://students.iitm.ac.in/notification'>
								<img src='images/notification.png'/></a></td>
							<td class='down'><a href='https://students.iitm.ac.in/feedback'>
								<img src='images/feedback.png'/></td>
             <td class='down'><a href='https://students.iitm.ac.in/iportal'>
								<img src='images/iportal.png'/></a></td>

             <td class='down' id='end'><a href='https://students.iitm.ac.in/test'>
							<img src='images/research.png'/></a></td>
           </tr>
       </tbody>
   </table>
 </div>
 <div id='pagesfooter'>
		<div id='pages' style='width: 56px;'>
			<div id='-1' class='circle search activeCricle'></div>
        	<div id='-2' class='circle inactiveCricle'></div>
        	<div id='-3' class='circle inactiveCricle'></div>
        	<div id='-4' class='circle inactiveCricle'></div>
       	</div>
  </div>
<p id='copyrights'>Institute Webops</p>
</body>
</html>";
?>
