$(".box").mouseover(function(){
 $(".wrap").addClass("pause")
})
$(".box").mouseout(function(){
 $(".wrap").removeClass("pause")
})

$(".box7 .inner>.slide2,.box7 .inner>.slide3 ").hide()
setInterval(lide)
function lide(){
 $(".box7 .inner>.slide").delay(2000)
 $(".box7 .inner>.slide1").fadeOut(1000)
 $(".box7 .inner>.slide2").fadeIn(1000)
 $(".box7 .inner>.slide").delay(2000)
 $(".box7 .inner>.slide2").fadeOut(1000)
 $(".box7 .inner>.slide3").fadeIn(1000)
 $(".box7 .inner>.slide").delay(2000)
 $(".box7 .inner>.slide3").fadeOut(1000)
 $(".box7 .inner>.slide1").fadeIn(1000)
}

$(".box4 .inner>div>.slide2,.box4 .inner>div>.slide3,.box4 .inner>div>.slide4,.box4 .inner>div>.slide5").hide()
setInterval(slide)
function slide(){
 $(".box4 .inner>div>.slide").delay(2000)
 $(".box4 .inner>div>.slide1").fadeOut(1000)
 $(".box4 .inner>div>.slide2").fadeIn(1000)
 $(".box4 .inner>div>.slide").delay(2000)
 $(".box4 .inner>div>.slide2").fadeOut(1000)
 $(".box4 .inner>div>.slide3").fadeIn(1000)
 $(".box4 .inner>div>.slide").delay(2000)
 $(".box4 .inner>div>.slide3").fadeOut(1000)
 $(".box4 .inner>div>.slide4").fadeIn(1000)
 $(".box4 .inner>div>.slide").delay(2000)
 $(".box4 .inner>div>.slide4").fadeOut(1000)
 $(".box4 .inner>div>.slide5").fadeIn(1000)
 $(".box4 .inner>div>.slide").delay(2000)
 $(".box4 .inner>div>.slide5").fadeOut(1000)
 $(".box4 .inner>div>.slide1").fadeIn(1000)
}