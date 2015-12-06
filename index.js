var count =0;
var test=0;
function nodisplay(e){
//	console.log(1);
	if(e.keyCode != 13)
		$(".profile").css("display", "none");
}
function validateForm()
    {
//	console.log(name);
	var name=document.forms["searchform"]["stdname"].value;
		if(name.length == 0)
		{
	//					console.log(1);
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
$(document).ready( function() {
					 var page = 0;
	   $("#fwd").click( function() {
			switch(page)
			{ 
			case 0:
						$("#searchbox").css("opacity",1);
							$("#searchform").animate( {marginLeft:"-=1000px"}, 850);
		          $("#searchinput").animate( {marginLeft:"-=1000px"}, 850);
		          $(".profile").animate( {marginLeft:"-=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"-=1000px"}, 850);
							$("#pag0").animate( {marginLeft:"-=1000px"}, 850);
	              $("#pag1").animate( {marginLeft:"-=1000px"}, 850);
		          $("#pag2").animate( {marginLeft:"-=1000px"}, 850);
		          $("#-1").removeClass("activeCricle",850);
		          $("#-1").addClass("inactiveCricle",850);
		          $("#-2").removeClass("inactiveCricle",850);
		          $("#-2").addClass("activeCricle",850);
		            break;
	     	case 1:
			        $("#searchform").animate( {marginLeft:"-=1000px"}, 850);
			         $(".profile").animate( {marginLeft:"-=1000px"}, 850);
			         $("#searchinput").animate( {marginLeft:"-=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"-=1000px"}, 850);
							$("#pag0").animate( {marginLeft:"-=1000px"}, 850);
		          $("#pag1").animate( {marginLeft:"-=1000px"}, 850);
	            $("#pag2").animate( {marginLeft:"-=1000px"}, 850);
	            $("#-2").removeClass("activeCricle",850);
		        $("#-2").addClass("inactiveCricle",850);
		        $("#-3").removeClass("inactiveCricle",850);
		        $("#-3").addClass("activeCricle",850);
              break;
        	case 2:
			        $("#searchform").animate( {marginLeft:"-=1000px"}, 850);
			         $(".profile").animate( {marginLeft:"-=1000px"}, 850);
			         $("#searchinput").animate( {marginLeft:"-=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"-=1000px"}, 850);
							$("#pag0").animate( {marginLeft:"-=1000px"}, 850);
		          $("#pag1").animate( {marginLeft:"-=1000px"}, 850);
	            $("#pag2").animate( {marginLeft:"-=1000px"}, 850);
	            $("#-3").removeClass("activeCricle",850);
		          $("#-3").addClass("inactiveCricle",850);
		          $("#-4").removeClass("inactiveCricle",850);
		          $("#-4").addClass("activeCricle",850);
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
	        		$("#searchform").animate( {marginLeft:"+=1000px"}, 850);
			        $(".profile").animate( {marginLeft:"+=1000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"+=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"+=1000px"}, 850);
					$("#pag0").animate( {marginLeft:"+=1000px"}, 850);
			        $("#pag1").animate( {marginLeft:"+=1000px"}, 850);
			        $("#pag2").animate( {marginLeft:"+=1000px"}, 850);
	        		$("#-2").removeClass("activeCricle",850);
					$("#-2").addClass("inactiveCricle",850);
				}
			if($("#-3").hasClass("activeCricle"))
				{
					$("#searchform").animate( {marginLeft:"+=2000px"}, 850);
			        $(".profile").animate( {marginLeft:"+=2000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"+=2000px"}, 850);
							$("#txtHint").animate( {marginLeft:"+=2000px"}, 850);
					$("#pag0").animate( {marginLeft:"+=2000px"}, 850);
			        $("#pag1").animate( {marginLeft:"+=2000px"}, 850);
			        $("#pag2").animate( {marginLeft:"+=2000px"}, 850);	
					$("#-3").removeClass("activeCricle",850);
					$("#-3").addClass("inactiveCricle",850);
				}
			if($("#-4").hasClass("activeCricle"))
				{
					$("#searchform").animate( {marginLeft:"+=3000px"}, 850);
			        $(".profile").animate( {marginLeft:"+=3000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"+=3000px"}, 850);
							$("#txtHint").animate( {marginLeft:"+=3000px"}, 850);
					$("#pag0").animate( {marginLeft:"+=3000px"}, 850);
			        $("#pag1").animate( {marginLeft:"+=3000px"}, 850);
			        $("#pag2").animate( {marginLeft:"+=3000px"}, 850);
					$("#-4").removeClass("activeCricle");
					$("#-4").addClass("inactiveCricle");
				}
			$("#-1").removeClass("inactiveCricle",850);
			$("#-1").addClass("activeCricle",850);
	});
	$("#-2").click( function() {
			page=1;
			if($("#-4").hasClass("activeCricle"))
			{
				$("#searchform").animate( {marginLeft:"+=2000px"}, 850);
			        $(".profile").animate( {marginLeft:"+=2000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"+=2000px"}, 850);
							$("#txtHint").animate( {marginLeft:"+=2000px"}, 850);
					$("#pag0").animate( {marginLeft:"+=2000px"}, 850);
			        $("#pag1").animate( {marginLeft:"+=2000px"}, 850);
			        $("#pag2").animate( {marginLeft:"+=2000px"}, 850);
				$("#-4").removeClass("activeCricle",850);
				$("#-4").addClass("inactiveCricle",850);
			}
			if($("#-3").hasClass("activeCricle"))
			{
				$("#searchform").animate( {marginLeft:"+=1000px"}, 850);
			        $(".profile").animate( {marginLeft:"+=1000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"+=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"+=1000px"}, 850);
					$("#pag0").animate( {marginLeft:"+=1000px"}, 850);
			        $("#pag1").animate( {marginLeft:"+=1000px"}, 850);
			        $("#pag2").animate( {marginLeft:"+=1000px"}, 850);
				$("#-3").removeClass("activeCricle",850);
				$("#-3").addClass("inactiveCricle",850);
			}
			if($("#-1").hasClass("activeCricle"))
			{
				test++;
				$("#searchform").animate( {marginLeft:"-=1000px"}, 850);
			        $(".profile").animate( {marginLeft:"-=1000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"-=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"-=1000px"}, 850);
					$("#pag0").animate( {marginLeft:"-=1000px"}, 850);
			        $("#pag1").animate( {marginLeft:"-=1000px"}, 850);
			        $("#pag2").animate( {marginLeft:"-=1000px"}, 850);
				$("#-1").removeClass("activeCricle",850);
				$("#-1").addClass("inactiveCricle",850);
			}
			$("#-2").removeClass("inactiveCricle",850);
			$("#-2").addClass("activeCricle",850);
	});
	$("#-3").click( function() {
			page=2;
			if($("#-2").hasClass("activeCricle"))
	        {
						test++;
        		$("#searchform").animate( {marginLeft:"-=1000px"}, 850);
		        $(".profile").animate( {marginLeft:"-=1000px"}, 850);
		        $("#searchinput").animate( {marginLeft:"-=1000px"}, 850);
						$("#txtHint").animate( {marginLeft:"-=1000px"}, 850);
				$("#pag0").animate( {marginLeft:"-=1000px"}, 850);
		        $("#pag1").animate( {marginLeft:"-=1000px"}, 850);
		        $("#pag2").animate( {marginLeft:"-=1000px"}, 850);
        		$("#-2").removeClass("activeCricle",850);
				$("#-2").addClass("inactiveCricle",850);
			}
			if($("#-1").hasClass("activeCricle"))
				{
					$("#searchform").animate( {marginLeft:"-=2000px"}, 850);
			        $(".profile").animate( {marginLeft:"-=2000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"-=2000px"}, 850);
							$("#txtHint").animate( {marginLeft:"-=2000px"}, 850);
					$("#pag0").animate( {marginLeft:"-=2000px"}, 850);
			        $("#pag1").animate( {marginLeft:"-=2000px"}, 850);
			        $("#pag2").animate( {marginLeft:"-=2000px"}, 850);	
					$("#-1").removeClass("activeCricle",850);
					$("#-1").addClass("inactiveCricle",850);
			}
			if($("#-4").hasClass("activeCricle"))
			{
				$("#searchform").animate( {marginLeft:"+=1000px"}, 850);
			        $(".profile").animate( {marginLeft:"+=1000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"+=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"+=1000px"}, 850);
					$("#pag0").animate( {marginLeft:"+=1000px"}, 850);
			        $("#pag1").animate( {marginLeft:"+=1000px"}, 850);
			        $("#pag2").animate( {marginLeft:"+=1000px"}, 850);
				$("#-4").removeClass("activeCricle",850);
				$("#-4").addClass("inactiveCricle",850);
			}
			$("#-3").removeClass("inactiveCricle",850);
			$("#-3").addClass("activeCricle",850);
	});
	$("#-4").click( function() {
			page=3;
			if($("#-3").hasClass("activeCricle"))
			{
				test++;
				$("#searchform").animate( {marginLeft:"-=1000px"}, 850);
			        $(".profile").animate( {marginLeft:"-=1000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"-=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"-=1000px"}, 850);
					$("#pag0").animate( {marginLeft:"-=1000px"}, 850);
			        $("#pag1").animate( {marginLeft:"-=1000px"}, 850);
			        $("#pag2").animate( {marginLeft:"-=1000px"}, 850);
				$("#-3").removeClass("activeCricle",850);
				$("#-3").addClass("inactiveCricle",850);
			console.log(test);
			}
			if($("#-2").hasClass("activeCricle"))
			{
				$("#searchform").animate( {marginLeft:"-=2000px"}, 850);
			        $(".profile").animate( {marginLeft:"-=2000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"-=2000px"}, 850);
							$("#txtHint").animate( {marginLeft:"-=2000px"}, 850);
					$("#pag0").animate( {marginLeft:"-=2000px"}, 850);
			        $("#pag1").animate( {marginLeft:"-=2000px"}, 850);
			        $("#pag2").animate( {marginLeft:"-=2000px"}, 850);
				$("#-2").removeClass("activeCricle",850);
				$("#-2").addClass("inactiveCricle",850);
			}
			if($("#-1").hasClass("activeCricle"))
			{
				$("#searchform").animate( {marginLeft:"-=3000px"}, 850);
			        $(".profile").animate( {marginLeft:"-=3000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"-=3000px"}, 850);
							$("#txtHint").animate( {marginLeft:"-=3000px"}, 850);
					$("#pag0").animate( {marginLeft:"-=3000px"}, 850);
			        $("#pag1").animate( {marginLeft:"-=3000px"}, 850);
			        $("#pag2").animate( {marginLeft:"-=3000px"}, 850);
				$("#-1").removeClass("activeCricle",850);
				$("#-1").addClass("inactiveCricle",850);
			}
			$("#-4").removeClass("inactiveCricle",850);
			$("#-4").addClass("activeCricle",850);
	});
	
	  $("#back").click( function() {
		  switch(page)
			{ 
			 case 0:
		          $("#searchform").animate( {marginLeft:"+=100px"}, 350);
				 			$("#searchform").animate( {marginLeft:"-=100px"}, 350); 
//	          $("#searchinput").animate( {marginLeft:"+=100px"}, 350);
//				 			$("#searchinput").animate( {marginLeft:"-=100px"}, 350); 
				//			$('#inputtext').val("",100);
		          $(".profile").animate( {marginLeft:"+=100px"}, 350);
				 			$(".profile").animate( {marginLeft:"-=100px"}, 350);
		//					$(".profile").animate( {margin:"auto"});
				//			$(".profile").css({marginLeft: '+=100px', transition: 'marginLeft 350ms linear',Moztransition: 'marginLeft 350ms linear',Webkittransition: 'marginLeft 350ms linear',mstransform: 'marginLeft 350ms linear'}).delay(1000).css({marginLeft: '-=100px', transition: 'marginLeft 350ms linear',Moztransition: 'marginLeft 350ms linear',Webkittransition: 'marginLeft 350ms linear',mstransform: 'marginLeft 350ms linear'});
	//						 $(".profile").css({transform: 'translateX(-100px)',Moztransform: 'translateX(-100px)',Webkittransform: 'translateX(-100px)',mstransform: 'translateX(-100px)'});
							$("#txtHint").animate( {marginLeft:"+=100px"}, 350);
				 			$("#txtHint").animate( {marginLeft:"-=100px"}, 350); 
				//			$("#searchbox").animate( {marginLeft:"+=100px"}, 650);
        //      $("#searchbox").animate( {marginLeft:"-=100px"}, 650); 
	          	break;
	     case 1:
							$("#searchbox").css("opacity",0.9);
			        $("#searchform").animate( {marginLeft:"+=1000px"}, 850);
			        $(".profile").animate( {marginLeft:"+=1000px"}, 850);
			        $("#searchinput").animate( {marginLeft:"+=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"+=1000px"}, 850);
							$("#pag0").animate( {marginLeft:"+=1000px"}, 850);
			        $("#pag1").animate( {marginLeft:"+=1000px"}, 850);
	            $("#pag2").animate( {marginLeft:"+=1000px"}, 850);
	            $("#-2").removeClass("activeCricle",850);
	          	$("#-2").addClass("inactiveCricle",850);
		        $("#-1").removeClass("inactiveCricle",850);

	          	$("#-1").addClass("activeCricle",850);
			        $("#searchinput").css ({"margin-left":"auto !important"});
              break;
       case 2:
              $("#searchform").animate( {marginLeft:"+=1000px"}, 850);
               $(".profile").animate( {marginLeft:"+=1000px"}, 850);
               $("#searchinput").animate( {marginLeft:"+=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"+=1000px"}, 850);
							$("#pag0").animate( {marginLeft:"+=1000px"}, 850);
			        $("#pag1").animate( {marginLeft:"+=1000px"}, 850);
	            $("#pag2").animate( {marginLeft:"+=1000px"}, 850);
	            $("#-3").removeClass("activeCricle",850);
	          	$("#-3").addClass("inactiveCricle",850);
		        $("#-2").removeClass("inactiveCricle",850);
	          	$("#-2").addClass("activeCricle",850);				
			        break;
		case 3:
              $("#searchform").animate( {marginLeft:"+=1000px"}, 850);
							 $(".profile").animate( {marginLeft:"+=1000px"}, 850);
              $("#searchinput").animate( {marginLeft:"+=1000px"}, 850);
							$("#txtHint").animate( {marginLeft:"+=1000px"}, 850);
							$("#pag0").animate( {marginLeft:"+=1000px"}, 850);
			        $("#pag1").animate( {marginLeft:"+=1000px"}, 850);
	            $("#pag2").animate( {marginLeft:"+=1000px"}, 850);	
	            $("#-4").removeClass("activeCricle",850);
	          	$("#-4").addClass("inactiveCricle",850);
		        $("#-3").removeClass("inactiveCricle",850);
	          	$("#-3").addClass("activeCricle",850);
				break;
			}
			 if(page > 0)
			  { page = page - 1;}
		  });



	  $("#departments").click( function(){
					$("#searchform").animate( {marginLeft:"-=1000px"}, 850);
              $("#searchinput").animate( {marginLeft:"-=1000px"}, 850);
              $(".profile").animate( {marginLeft:"-=1000px"}, 850);
              $("#txtHint").animate( {marginLeft:"-=1000px"}, 850);
	  			$("#pag0").animate( {marginLeft:"-=1000px"}, 850);
	            $("#pag1").animate( {marginLeft:"-=1000px"}, 850);
		        $("#pag2").animate( {marginLeft:"-=1000px"}, 850);
						 $("#-2").removeClass("activeCricle",850);
            $("#-2").addClass("inactiveCricle",850);
            $("#-3").removeClass("inactiveCricle",850);
            $("#-3").addClass("activeCricle",850);
					page++;
			});
	  $("#clubs").click( function(){
					$("#searchform").animate( {marginLeft:"-=2000px"}, 1150);
              $("#searchinput").animate( {marginLeft:"-=2000px"}, 1150);
              $(".profile").animate( {marginLeft:"-=2000px"}, 1150);
              $("#txtHint").animate( {marginLeft:"-=2000px"},1150);
	  			$("#pag0").animate( {marginLeft:"-=2000px"}, 1150);
	            $("#pag1").animate( {marginLeft:"-=2000px"}, 1150);
		        $("#pag2").animate( {marginLeft:"-=2000px"}, 1150);
					$("#-2").removeClass("activeCricle",850);
              $("#-2").addClass("inactiveCricle",850);
              $("#-4").removeClass("inactiveCricle",850);
              $("#-4").addClass("activeCricle",850);
					page=page+2;
			});
	});
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
