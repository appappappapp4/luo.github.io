	var score=0
    $(window).scroll(function(){
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        	score = score+5
        	document.getElementById('score').innerHTML="我的积分："+score
        }
    });