$(function(){
	

		
		





	
$(".li1").mouseover(function(){
	$(".ones").css("display","block");
	$(".twos").css("display","none");
	$(".nan_tu").css("opacity","1");
	$(".nan_tu").css("left","23%");
	$(".nv_tu").css("opacity","0");
	$("#tu1").css("transform","scale(1.05)");
	$("#tu2").css("transform","scale(1.1)");
	
})
$(".li2").mouseover(function(){
	$(".ones").css("display","none");
	$(".twos").css("display","block");
	$(".nan_tu").css("left","75%");
	$(".nan_tu").css("opacity","0");
	$(".nv_tu").css("opacity","1");
	$("#tu1").css("transform","scale(1.1)");
	$("#tu2").css("transform","scale(1.05)");
})



$(".img1").mouseover(function(){
	$(".one1").css("display","block");
})
$(".img1").mouseout(function(){
	$(".one1").css("display","none");
})
$(".img2").mouseover(function(){
	$(".one2").css("display","block");
})
$(".img2").mouseout(function(){
	$(".one2").css("display","none");
})

$(".right11").mouseover(function(){
	$(".bottom").css("display","block");
})
$(".right11").mouseout(function(){
	$(".bottom").css("display","none");
})


$(".nv_33").mouseover(function(){
	$(".nv_3").css("display","block");
})
$(".nv_33").mouseout(function(){
	$(".nv_3").css("display","none");
})


$(".pict").mouseover(function(){
	$(".beijing2").css("display","block");
})
$(".pict").mouseout(function(){
	$(".beijing2").css("display","none");
})




$(".nav_3").mouseover(function(){
	$(".xiala2").css("display","block");
})
$(".nav_3").mouseout(function(){
	$(".xiala2").css("display","none");
})

$(".nav_2").mouseover(function(){
	$(".xiala").css("display","block");
})
$(".nav_2").mouseout(function(){
	$(".xiala").css("display","none");
})


$(".nav_4").mouseover(function(){
	$(".xiala3").css("display","block");
})
$(".nav_4").mouseout(function(){
	$(".xiala3").css("display","none");
})


$(".nav_5").mouseover(function(){
	$(".xiala4").css("display","block");
})
$(".nav_5").mouseout(function(){
	$(".xiala4").css("display","none");
})


$(".nav_6").mouseover(function(){
	$(".xiala5").css("display","block");
})
$(".nav_6").mouseout(function(){
	$(".xiala5").css("display","none");
})

$(".nav_7").mouseover(function(){
	$(".xiala6").css("display","block");
})
$(".nav_7").mouseout(function(){
	$(".xiala6").css("display","none");
})



$(window).scroll(function(){
	let scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
if(scrollTop>0){
	$("header").css({position:"fixed","top":"0","zIndex": 5});
}else if(scrollTop<=0){
	$("header").css({position:"relative","top":"0","zIndex": 5});
}
})

$(".titles").click(function(){
	$(this).next().slideToggle(600);
})

$(".qqw").children().click(function(){
	let str=$(this)
})

})





























