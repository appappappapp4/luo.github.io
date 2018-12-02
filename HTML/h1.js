$(function () {   //在文档加载后激活函数 $(function)

var str = window.location.href;

str = str.substring(str.lastIndexOf("/") + 1);   //取得 “/” 后面的文本

if ($.cookie(str)) {

$("html,body").animate({ scrollTop: $.cookie(str) }, 1000);

}

else {

}

})
	//有个History对象 back()加载 history 列表中的前一个 URL。forward() 加载 history 列表中的下一个 URL。和 go() 加载 history 列表中的某个具体页面。

$(window).scroll(function () { //$(selector).scroll(function)将函数绑定到scroll事件

var str = window.location.href;

str = str.substring(str.lastIndexOf("/") + 1);

var top = $(document).scrollTop();

$.cookie(str, top, { path: '/' });

return $.cookie(str);

})


