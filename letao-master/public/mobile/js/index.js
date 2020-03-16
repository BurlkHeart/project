mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    indicators:false
});
//获得slider插件对象
var gallery = mui('.mui-slider');
gallery.slider({
    interval:3000//自动轮播周期，若为0则不自动播放，默认为0；
});

var height=($(".lt_content").width()-$(".lt_content .lt_goods").width())/2;
var width=$(".lt_content .lt_goods a").height()*2;
// console.log(width);
$(".lt_content .lt_goods").css({
    "height":""+width+"px",
    "margin":""+height+"px"
});


var getFirstData=function(callback){
    //获取后台数据
    $.ajax({
        url:"/category/queryTopCategory",
        type:"get",
        dataType:"json",
        success:function(data){
            callback&&callback(data);
            // console.log(data);
        }
    })
}