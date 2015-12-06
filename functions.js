new WOW().init();
var count =0;
//var max=document.getElementById('counter').innerHTML;
//console.log(max);
function showHint(str,e) {
//		var max=document.getElementById('counter').innerHTML;
		var value=document.getElementById('inputtext').value;
		if(value=="")
		count=0;
		if(e.keyCode == 40)
		{
		var max=document.getElementById('counter').innerHTML;
		console.log(max);
//		 console.log(document.getElementById('txtHint').scrollTop);
		if(count!=0)
		document.getElementById(count).style.cssText = 'background-color:none;';
		if(count>6)
		document.getElementById('txtHint').scrollTop+=24;
		if(count!=max)
		count++;
		document.getElementById('inputtext').value=document.getElementById(count).innerHTML;
		document.getElementById(count).style.cssText = 'background-color:#ecf0f1;';
		console.log(count);
		}
		else if(e.keyCode == 38){
		document.getElementById(count).style.cssText = 'background-color:none;';
		var scroll = document.getElementById('txtHint').scrollTop;
		count--;
		if(scroll>=24 && count>1)
		document.getElementById('txtHint').scrollTop-=24;
    document.getElementById('inputtext').value=document.getElementById(count).innerHTML;
		if(count!=0)
		document.getElementById(count).style.cssText = 'background-color:#ecf0f1;';
		}
		else
		{
    	if (str.length == 0) { 
        document.getElementById('txtHint').innerHTML = '';
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById('txtHint').innerHTML = xmlhttp.responseText;
            }
        }
        xmlhttp.open('GET', 'search.php?q=' + str, true);
        xmlhttp.send();
    }
		}
}
function submit(x){
	document.getElementById('inputtext').value=document.getElementById(x).innerHTML;
	document.getElementById('searchform').submit();
}
function display(e){
	if(e.keyCode==40)
//	alert(1);
	{
		console.log(1);	
	}
}
