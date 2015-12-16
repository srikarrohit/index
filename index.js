var count =0;
var test=0;
function nodisplay(e){
	if(e.keyCode != 13)
		$(".profile").css("display", "none");
}
function validateForm()
    {

	var name=document.forms["searchform"]["stdname"].value;
		if(name.length == 0)
		{
			 return false;
      }
    }
$(document).keydown(function (e) 
{
    var keycode1 = (e.keyCode ? e.keyCode : e.which);// e.keycode works in some browsers , if it fails e.which is called ? mark is if and : is else
    if (keycode1 == 0 || keycode1 == 9) {
        e.preventDefault();
        e.stopPropagation();
    }
});
var count =0;
var test=0;
 var width=0;
 if($(window).width()<=470)
 {
 	width = 600;
	console.log("fail");
 }
else if($(window).width()>1440)
{
	width = 1400;
	console.log("fail");
}
 else
 {
 	width = 1000;
	//console.log("fail");
 }
t=600;
$(document).ready( function() {
$(window).load(function() {
  	$("#status").fadeOut();
  	$("#preloader").delay(1000).fadeOut("slow");
	});
page=0;
	   $("#fwd").click( function() {
			switch(page)
			{ 
			case 0:
						$("#searchbox").css("opacity",1);
	//						console.log(width);
							$("#searchform").animate( {marginLeft:"-="+width+"px"}, t);
		          $("#searchinput").animate( {marginLeft:"-="+width+"px"}, t);
		          $(".profile").animate( {marginLeft:"-="+width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"-="+width+"px"}, t);
							$("#pag0").animate( {marginLeft:"-="+width+"px"}, t);
	              $("#pag1").animate( {marginLeft:"-="+width+"px"}, t);
		          $("#pag2").animate( {marginLeft:"-="+width+"px"}, t);
		          $("#-1").removeClass("activeCricle",t);
		          $("#-1").addClass("inactiveCricle",t);
		          $("#-2").removeClass("inactiveCricle",t);
		          $("#-2").addClass("activeCricle",t);
		            break;
	     	case 1:
			        $("#searchform").animate( {marginLeft:"-="+width+"px"}, t);
			         $(".profile").animate( {marginLeft:"-="+width+"px"}, t);
			         $("#searchinput").animate( {marginLeft:"-="+width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"-="+width+"px"}, t);
							$("#pag0").animate( {marginLeft:"-="+width+"px"}, t);
		          $("#pag1").animate( {marginLeft:"-="+width+"px"}, t);
	            $("#pag2").animate( {marginLeft:"-="+width+"px"}, t);
	            $("#-2").removeClass("activeCricle",t);
		        $("#-2").addClass("inactiveCricle",t);
		        $("#-3").removeClass("inactiveCricle",t);
		        $("#-3").addClass("activeCricle",t);
              break;
        	case 2:
			        $("#searchform").animate( {marginLeft:"-="+width+"px"}, t);
			         $(".profile").animate( {marginLeft:"-="+width+"px"}, t);
			         $("#searchinput").animate( {marginLeft:"-="+width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"-="+width+"px"}, t);
							$("#pag0").animate( {marginLeft:"-="+width+"px"}, t);
		          $("#pag1").animate( {marginLeft:"-="+width+"px"}, t);
	            $("#pag2").animate( {marginLeft:"-="+width+"px"}, t);
	            $("#-3").removeClass("activeCricle",t);
		          $("#-3").addClass("inactiveCricle",t);
		          $("#-4").removeClass("inactiveCricle",t);
		          $("#-4").addClass("activeCricle",t);
              break;
			case 3:
              $("#pag2").animate( {marginLeft:"-=100px"}, 350);
              $("#pag2").animate( {marginLeft:"+=100px"}, 350);  		
			        break;
			 }
			 if(page < 3)
			 { page = page + 1;} 
	   });
	   $("#-1").click( function() {
	  		page=0;
			if($("#-2").hasClass("activeCricle"))
	        	{
	        		$("#searchform").animate( {marginLeft:"+="+width+"px"}, t);
			        $(".profile").animate( {marginLeft:"+="+width+"px"}, t);
			        $("#searchinput").animate( {marginLeft:"+="+width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"+="+width+"px"}, t);
					$("#pag0").animate( {marginLeft:"+="+width+"px"}, t);
			        $("#pag1").animate( {marginLeft:"+="+width+"px"}, t);
			        $("#pag2").animate( {marginLeft:"+="+width+"px"}, t);
	        		$("#-2").removeClass("activeCricle",t);
					$("#-2").addClass("inactiveCricle",t);
				}
			if($("#-3").hasClass("activeCricle"))
				{
					$("#searchform").animate( {marginLeft:"+="+2*width+"px"}, t);
			        $(".profile").animate( {marginLeft:"+="+2*width+"px"}, t);
			        $("#searchinput").animate( {marginLeft:"+="+2*width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"+="+2*width+"px"}, t);
					$("#pag0").animate( {marginLeft:"+="+2*width+"px"}, t);
			        $("#pag1").animate( {marginLeft:"+="+2*width+"px"}, t);
			        $("#pag2").animate( {marginLeft:"+="+2*width+"px"}, t);	
					$("#-3").removeClass("activeCricle",t);
					$("#-3").addClass("inactiveCricle",t);
				}
			if($("#-4").hasClass("activeCricle"))
				{
					$("#searchform").animate( {marginLeft:"+="+3*width+"px"}, t);
			        $(".profile").animate( {marginLeft:"+="+3*width+"px"}, t);
			        $("#searchinput").animate( {marginLeft:"+="+3*width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"+="+3*width+"px"}, t);
					$("#pag0").animate( {marginLeft:"+="+3*width+"px"}, t);
			        $("#pag1").animate( {marginLeft:"+="+3*width+"px"}, t);
			        $("#pag2").animate( {marginLeft:"+="+3*width+"px"}, t);
					$("#-4").removeClass("activeCricle");
					$("#-4").addClass("inactiveCricle");
				}
			$("#-1").removeClass("inactiveCricle",t);
			$("#-1").addClass("activeCricle",t);
	});
	$("#-2").click( function() {
			page=1;
			if($("#-4").hasClass("activeCricle"))
			{
				$("#searchform").animate( {marginLeft:"+="+2*width+"px"}, t);
			        $(".profile").animate( {marginLeft:"+="+2*width+"px"}, t);
			        $("#searchinput").animate( {marginLeft:"+="+2*width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"+="+2*width+"px"}, t);
					$("#pag0").animate( {marginLeft:"+="+2*width+"px"}, t);
			        $("#pag1").animate( {marginLeft:"+="+2*width+"px"}, t);
			        $("#pag2").animate( {marginLeft:"+="+2*width+"px"}, t);
				$("#-4").removeClass("activeCricle",t);
				$("#-4").addClass("inactiveCricle",t);
			}
			if($("#-3").hasClass("activeCricle"))
			{
				$("#searchform").animate( {marginLeft:"+="+width+"px"}, t);
			        $(".profile").animate( {marginLeft:"+="+width+"px"}, t);
			        $("#searchinput").animate( {marginLeft:"+="+width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"+="+width+"px"}, t);
					$("#pag0").animate( {marginLeft:"+="+width+"px"}, t);
			        $("#pag1").animate( {marginLeft:"+="+width+"px"}, t);
			        $("#pag2").animate( {marginLeft:"+="+width+"px"}, t);
				$("#-3").removeClass("activeCricle",t);
				$("#-3").addClass("inactiveCricle",t);
			}
			if($("#-1").hasClass("activeCricle"))
			{
				test++;
				$("#searchform").animate( {marginLeft:"-="+width+"px"}, t);
			        $(".profile").animate( {marginLeft:"-="+width+"px"}, t);
			        $("#searchinput").animate( {marginLeft:"-="+width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"-="+width+"px"}, t);
					$("#pag0").animate( {marginLeft:"-="+width+"px"}, t);
			        $("#pag1").animate( {marginLeft:"-="+width+"px"}, t);
			        $("#pag2").animate( {marginLeft:"-="+width+"px"}, t);
				$("#-1").removeClass("activeCricle",t);
				$("#-1").addClass("inactiveCricle",t);
			}
			$("#-2").removeClass("inactiveCricle",t);
			$("#-2").addClass("activeCricle",t);
	});
	$("#-3").click( function() {
			page=2;
			if($("#-2").hasClass("activeCricle"))
	        {
						test++;
        		$("#searchform").animate( {marginLeft:"-="+width+"px"}, t);
		        $(".profile").animate( {marginLeft:"-="+width+"px"}, t);
		        $("#searchinput").animate( {marginLeft:"-="+width+"px"}, t);
						$("#txtHint").animate( {marginLeft:"-="+width+"px"}, t);
				$("#pag0").animate( {marginLeft:"-="+width+"px"}, t);
		        $("#pag1").animate( {marginLeft:"-="+width+"px"}, t);
		        $("#pag2").animate( {marginLeft:"-="+width+"px"}, t);
        		$("#-2").removeClass("activeCricle",t);
				$("#-2").addClass("inactiveCricle",t);
			}
			if($("#-1").hasClass("activeCricle"))
				{
					$("#searchform").animate( {marginLeft:"-="+2*width+"px"}, t);
			        $(".profile").animate( {marginLeft:"-="+2*width+"px"}, t);
			        $("#searchinput").animate( {marginLeft:"-="+2*width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"-="+2*width+"px"}, t);
					$("#pag0").animate( {marginLeft:"-="+2*width+"px"}, t);
			        $("#pag1").animate( {marginLeft:"-="+2*width+"px"}, t);
			        $("#pag2").animate( {marginLeft:"-="+2*width+"px"}, t);	
					$("#-1").removeClass("activeCricle",t);
					$("#-1").addClass("inactiveCricle",t);
			}
			if($("#-4").hasClass("activeCricle"))
			{
				$("#searchform").animate( {marginLeft:"+="+width+"px"}, t);
			        $(".profile").animate( {marginLeft:"+="+width+"px"}, t);
			        $("#searchinput").animate( {marginLeft:"+="+width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"+="+width+"px"}, t);
					$("#pag0").animate( {marginLeft:"+="+width+"px"}, t);
			        $("#pag1").animate( {marginLeft:"+="+width+"px"}, t);
			        $("#pag2").animate( {marginLeft:"+="+width+"px"}, t);
				$("#-4").removeClass("activeCricle",t);
				$("#-4").addClass("inactiveCricle",t);
			}
			$("#-3").removeClass("inactiveCricle",t);
			$("#-3").addClass("activeCricle",t);
	});
	$("#-4").click( function() {
			page=3;
			if($("#-3").hasClass("activeCricle"))
			{
				test++;
				$("#searchform").animate( {marginLeft:"-="+width+"px"}, t);
			        $(".profile").animate( {marginLeft:"-="+width+"px"}, t);
			        $("#searchinput").animate( {marginLeft:"-="+width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"-="+width+"px"}, t);
					$("#pag0").animate( {marginLeft:"-="+width+"px"}, t);
			        $("#pag1").animate( {marginLeft:"-="+width+"px"}, t);
			        $("#pag2").animate( {marginLeft:"-="+width+"px"}, t);
				$("#-3").removeClass("activeCricle",t);
				$("#-3").addClass("inactiveCricle",t);
			console.log(test);
			}
			if($("#-2").hasClass("activeCricle"))
			{
				$("#searchform").animate( {marginLeft:"-="+2*width+"px"}, t);
			        $(".profile").animate( {marginLeft:"-="+2*width+"px"}, t);
			        $("#searchinput").animate( {marginLeft:"-="+2*width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"-="+2*width+"px"}, t);
					$("#pag0").animate( {marginLeft:"-="+2*width+"px"}, t);
			        $("#pag1").animate( {marginLeft:"-="+2*width+"px"}, t);
			        $("#pag2").animate( {marginLeft:"-="+2*width+"px"}, t);
				$("#-2").removeClass("activeCricle",t);
				$("#-2").addClass("inactiveCricle",t);
			}
			if($("#-1").hasClass("activeCricle"))
			{
				$("#searchform").animate( {marginLeft:"-="+3*width+"px"}, t);
			        $(".profile").animate( {marginLeft:"-="+3*width+"px"}, t);
			        $("#searchinput").animate( {marginLeft:"-="+3*width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"-="+3*width+"px"}, t);
					$("#pag0").animate( {marginLeft:"-="+3*width+"px"}, t);
			        $("#pag1").animate( {marginLeft:"-="+3*width+"px"}, t);
			        $("#pag2").animate( {marginLeft:"-="+3*width+"px"}, t);
				$("#-1").removeClass("activeCricle",t);
				$("#-1").addClass("inactiveCricle",t);
			}
			$("#-4").removeClass("inactiveCricle",t);
			$("#-4").addClass("activeCricle",t);
	});
	
	  $("#back").click( function() {
		  switch(page)
			{ 
			 case 0:
		     //     $("#searchform").animate( {marginLeft:"+=100px"}, 350);
				 //			$("#searchform").animate( {marginLeft:"-=100px"}, 350); 
		     //     $("#searchinput").animate( {marginLeft:"+=100px"}, 350);
				 //			$("#searchinput").css({"margin-left":"auto !important"});
				//			$('#inputtext').val("",100);
		//					$(".profile").animate( {marginLeft:"+=100px"}, 350);
		//		 			$(".profile").animate( {marginLeft:"-=100px"}, 350); 
		//					$("#txtHint").animate( {marginLeft:"+=100px"}, 350);
		//		 			$("#txtHint").animate( {marginLeft:"-=100px"}, 350); 
	//							$("#searchinput")				//			$("#searchbox").animate( {marginLeft:"+=100px"}, 650);
        //      $("#searchbox").animate( {marginLeft:"-=100px"}, 650); 
	          	break;
	     case 1:
							$("#searchbox").css("opacity",0.9);
			        $("#searchform").animate( {marginLeft:"+="+width+"px"}, t);
			        $(".profile").animate( {marginLeft:"+="+width+"px"}, t);
			        $("#searchinput").animate( {marginLeft:"+="+width+"px"}, t);							
							$("#txtHint").animate( {marginLeft:"+="+width+"px"}, t);
							$("#pag0").animate( {marginLeft:"+="+width+"px"}, t);
			        $("#pag1").animate( {marginLeft:"+="+width+"px"}, t);
	            $("#pag2").animate( {marginLeft:"+="+width+"px"}, t);
	            $("#-2").removeClass("activeCricle",t);
	          	$("#-2").addClass("inactiveCricle",t);
		        $("#-1").removeClass("inactiveCricle",t);
	          	$("#-1").addClass("activeCricle",t);
								$("#searchinput").css({"margin-left":"auto!important"});
								$("#searchform").css({"margin-left":"auto!important"});
								$("#txtHint").css({"margin-left":"auto!important"});
								$(".profile").css({"margin-left":"auto!important"});
			        break;
       case 2:
              $("#searchform").animate( {marginLeft:"+="+width+"px"}, t);
               $(".profile").animate( {marginLeft:"+="+width+"px"}, t);
               $("#searchinput").animate( {marginLeft:"+="+width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"+="+width+"px"}, t);
							$("#pag0").animate( {marginLeft:"+="+width+"px"}, t);
			        $("#pag1").animate( {marginLeft:"+="+width+"px"}, t);
	            $("#pag2").animate( {marginLeft:"+="+width+"px"}, t);
	            $("#-3").removeClass("activeCricle",t);
	          	$("#-3").addClass("inactiveCricle",t);
		        $("#-2").removeClass("inactiveCricle",t);
	          	$("#-2").addClass("activeCricle",t);				
			        break;
		case 3:
              $("#searchform").animate( {marginLeft:"+="+width+"px"}, t);
							 $(".profile").animate( {marginLeft:"+="+width+"px"}, t);
              $("#searchinput").animate( {marginLeft:"+="+width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"+="+width+"px"}, t);
							$("#pag0").animate( {marginLeft:"+="+width+"px"}, t);
			        $("#pag1").animate( {marginLeft:"+="+width+"px"}, t);
	            $("#pag2").animate( {marginLeft:"+="+width+"px"}, t);	
	            $("#-4").removeClass("activeCricle",t);
	          	$("#-4").addClass("inactiveCricle",t);
		        $("#-3").removeClass("inactiveCricle",t);
	          	$("#-3").addClass("activeCricle",t);
				break;
			}
			 if(page > 0)
			  { page = page - 1;}
		  });



	  $("#departments").click( function(){
					$("#searchform").animate( {marginLeft:"-="+width+"px"}, t);
              $("#searchinput").animate( {marginLeft:"-="+width+"px"}, t);
              $(".profile").animate( {marginLeft:"-="+width+"px"}, t);
              $("#txtHint").animate( {marginLeft:"-="+width+"px"}, t);
	  			$("#pag0").animate( {marginLeft:"-="+width+"px"}, t);
	            $("#pag1").animate( {marginLeft:"-="+width+"px"}, t);
		        $("#pag2").animate( {marginLeft:"-="+width+"px"}, t);
						 $("#-2").removeClass("activeCricle",t);
            $("#-2").addClass("inactiveCricle",t);
            $("#-3").removeClass("inactiveCricle",t);
            $("#-3").addClass("activeCricle",t);
					page++;
			});
	  $("#clubs").click( function(){
					$("#searchform").animate( {marginLeft:"-="+2*width+"px"}, 1150);
              $("#searchinput").animate( {marginLeft:"-="+2*width+"px"}, 1150);
              $(".profile").animate( {marginLeft:"-="+2*width+"px"}, 1150);
              $("#txtHint").animate( {marginLeft:"-="+2*width+"px"},1150);
	  			$("#pag0").animate( {marginLeft:"-="+2*width+"px"}, 1150);
	            $("#pag1").animate( {marginLeft:"-="+2*width+"px"}, 1150);
		        $("#pag2").animate( {marginLeft:"-="+2*width+"px"}, 1150);
					$("#-2").removeClass("activeCricle",t);
              $("#-2").addClass("inactiveCricle",t);
              $("#-4").removeClass("inactiveCricle",t);
              $("#-4").addClass("activeCricle",t);
					page=page+2;
			});

	});
function myFunction1(e){   
    x1 = e.clientX;
  //  var y = e.clientY;
 //   var coor = "Coordinates: (" + x1 + "," + y + ")";
  //  document.getElementById("dem1").innerHTML = coor;
}
function myFunction2(e){

    x2 = e.clientX;
  //  var y = e.clientY;

 var dist = x1-x2;
   // var coor = "Coordinates: (" + x2 + "," + y + ")" + "dist: " + dist;
   // document.getElementById("dem2").innerHTML = coor;
	        if(dist>70){
	        	toLeft();
	        }
	        if(dist<-70){
	        	toRight();
	        }
}
function toLeft(){
//width=600;
//t=400;
			switch(page)
			{ 
			case 0:
						$("#searchbox").css("opacity",1);
							$("#searchform").animate( {marginLeft:"-="+width+"px"}, t);
							console.log(width);
		          $("#searchinput").animate( {marginLeft:"-="+width+"px"}, t);
		          $(".profile").animate( {marginLeft:"-="+width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"-="+width+"px"}, t);
							$("#pag0").animate( {marginLeft:"-="+width+"px"}, t);
	              $("#pag1").animate( {marginLeft:"-="+width+"px"}, t);
		          $("#pag2").animate( {marginLeft:"-="+width+"px"}, t);
		          $("#-1").removeClass("activeCricle",t);
		          $("#-1").addClass("inactiveCricle",t);
		          $("#-2").removeClass("inactiveCricle",t);
		          $("#-2").addClass("activeCricle",t);
		            break;
	     	case 1:
			        $("#searchform").animate( {marginLeft:"-="+width+"px"}, t);
			         $(".profile").animate( {marginLeft:"-="+width+"px"}, t);
			         $("#searchinput").animate( {marginLeft:"-="+width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"-="+width+"px"}, t);
							$("#pag0").animate( {marginLeft:"-="+width+"px"}, t);
		          $("#pag1").animate( {marginLeft:"-="+width+"px"}, t);
	            $("#pag2").animate( {marginLeft:"-="+width+"px"}, t);
	            $("#-2").removeClass("activeCricle",t);
		        $("#-2").addClass("inactiveCricle",t);
		        $("#-3").removeClass("inactiveCricle",t);
		        $("#-3").addClass("activeCricle",t);
              break;
        	case 2:
			        $("#searchform").animate( {marginLeft:"-="+width+"px"}, t);
			         $(".profile").animate( {marginLeft:"-="+width+"px"}, t);
			         $("#searchinput").animate( {marginLeft:"-="+width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"-="+width+"px"}, t);
							$("#pag0").animate( {marginLeft:"-="+width+"px"}, t);
		          $("#pag1").animate( {marginLeft:"-="+width+"px"}, t);
	            $("#pag2").animate( {marginLeft:"-="+width+"px"}, t);
	            $("#-3").removeClass("activeCricle",t);
		          $("#-3").addClass("inactiveCricle",t);
		          $("#-4").removeClass("inactiveCricle",t);
		          $("#-4").addClass("activeCricle",t);
              break;
			case 3:
              $("#pag2").animate( {marginLeft:"-=100px"}, 350);
              $("#pag2").animate( {marginLeft:"+=100px"}, 350);  		
			        break;
			 }
			 if(page < 3)
			 { page = page + 1;} 
}


function toRight(){
//width=600;
//t=400;
		  switch(page)
			{ 
			 case 0:
		      //    $("#searchform").animate( {marginLeft:"+=100px"}, 350);
				 	//		$("#searchform").animate( {marginLeft:"-=100px"}, 350); 
		          $("#searchinput").animate( {marginLeft:"+=100px"}, 350);
				 			$("#searchinput").animate( {marginLeft:"-=100px"}, 350); 
				//			$('#inputtext').val("",100);
		          $(".profile").animate( {marginLeft:"+=100px"}, 350);
				 			$(".profile").animate( {marginLeft:"-=100px"}, 350); 
							$("#txtHint").animate( {marginLeft:"+=100px"}, 350);
				 			$("#txtHint").animate( {marginLeft:"-=100px"}, 350); 
				//			$("#searchbox").animate( {marginLeft:"+=100px"}, 650);
        //      $("#searchbox").animate( {marginLeft:"-=100px"}, 650); 
	          	break;
	     case 1:
							$("#searchbox").css("opacity",0.9);
			        $("#searchform").animate( {marginLeft:"+="+width+"px"}, t);
			        $(".profile").animate( {marginLeft:"+="+width+"px"}, t);
			        $("#searchinput").animate( {marginLeft:"+="+width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"+="+width+"px"}, t);
							$("#pag0").animate( {marginLeft:"+="+width+"px"}, t);
			        $("#pag1").animate( {marginLeft:"+="+width+"px"}, t);
	            $("#pag2").animate( {marginLeft:"+="+width+"px"}, t);
	            $("#-2").removeClass("activeCricle",t);
	          	$("#-2").addClass("inactiveCricle",t);
		        $("#-1").removeClass("inactiveCricle",t);

	          	$("#-1").addClass("activeCricle",t);
			        $("#searchinput").css ({"margin-left":"auto !important"});
              break;
       case 2:
              $("#searchform").animate( {marginLeft:"+="+width+"px"}, t);
               $(".profile").animate( {marginLeft:"+="+width+"px"}, t);
               $("#searchinput").animate( {marginLeft:"+="+width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"+="+width+"px"}, t);
							$("#pag0").animate( {marginLeft:"+="+width+"px"}, t);
			        $("#pag1").animate( {marginLeft:"+="+width+"px"}, t);
	            $("#pag2").animate( {marginLeft:"+="+width+"px"}, t);
	            $("#-3").removeClass("activeCricle",t);
	          	$("#-3").addClass("inactiveCricle",t);
		        $("#-2").removeClass("inactiveCricle",t);
	          	$("#-2").addClass("activeCricle",t);				
			        break;
		case 3:
              $("#searchform").animate( {marginLeft:"+="+width+"px"}, t);
							 $(".profile").animate( {marginLeft:"+="+width+"px"}, t);
              $("#searchinput").animate( {marginLeft:"+="+width+"px"}, t);
							$("#txtHint").animate( {marginLeft:"+="+width+"px"}, t);
							$("#pag0").animate( {marginLeft:"+="+width+"px"}, t);
			        $("#pag1").animate( {marginLeft:"+="+width+"px"}, t);
	            $("#pag2").animate( {marginLeft:"+="+width+"px"}, t);	
	            $("#-4").removeClass("activeCricle",t);
	          	$("#-4").addClass("inactiveCricle",t);
		        $("#-3").removeClass("inactiveCricle",t);
	          	$("#-3").addClass("activeCricle",t);
				break;
			}
			 if(page > 0)
			  { page = page - 1;}
}




	 
	window.addEventListener('load', function(){
	 
	    var touch = document.getElementById('main')
	  //  var statusdiv = document.getElementById('statusdiv')
	    var startx = 0
	    var startmx = 0
	    var dist = 0
	 	var distm = 0

	    touch.addEventListener('touchstart', function(e){
	        var touchobj = e.changedTouches[0] 
	        startx = parseInt(touchobj.clientX)
	        //statusdiv.innerHTML = 'Status: touchstart<br> ClientX: ' + startx + 'px'
	        e.preventDefault()
	    }, false)


	 
	    touch.addEventListener('touchend', function(e){
	        var touchobj = e.changedTouches[0] 
	     //   statusdiv.innerHTML = 'Status: touchend<br> Resting x coordinate: ' + touchobj.clientX + 'px'
	     	        var dist = parseInt(touchobj.clientX) - startx
	        if(dist>70){
	        	toRight();
	        }
	        if(dist<-70){
	        	toLeft();
	        }
	        e.preventDefault()
	    }, false)
	 
	}, false)

  var i=1;
		function time(){
    var t= new Date();
		var h=t.getHours();
		var m=t.getMinutes();
		var ap="AM";
		if(t.getHours()>12){
			h=h-12;
			ap="PM";
		}
		if(t.getHours()==0)
			h=12;
		if(t.getHours()==12)
			ap="PM";
		if(h>=1 && h<= 9)
			h="0"+h;
		if(t.getMinutes()>=0 && t.getMinutes()<= 9)
			m= "0"+m;
		document.getElementById("clock").innerHTML = h +":"+ m+" "+ap;
 }
