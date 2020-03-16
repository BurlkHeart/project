mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    indicators:false
});

window.page=1;
//1.进入搜索页面，关键字显示在搜索框里
var inputKey=LT.getParmas().key;
$(".search_input").val(inputKey);

//2.页面初始化完成之后，根据关键字显示对应的商品 显示4条
// getListDate({
//     proName:LT.getParmas().key,
//     page:1,
//     pageSize:4
//     }, function (data) {
//     $("#product_box").html(template("list",data));
// })

//3.点击当前页面的搜索根据关键字重新再次渲染页面
$(".search_btn").on("tap",function(){
    var key=$.trim($(".search_input").val());
    if(!key){
        mui.toast("请输入关键字");
        return false;
    }
    getListDate({
        proName:key,
        page:1,
        pageSize:4
    }, function (data) {
        $("#product_box").html(template("list",data));
    })
    //触发下拉刷新的效果
    mui('#refreshContainer').pullRefresh().pulldownLoading();
})

//4.点击排序 根据顺序的选项重新进行排序，可以选中的时候默认是升序 再次点击就是降序
$(".lt_commodity .lt_commodity_1").on("tap",function(){
    //改变now的样式  并且改变箭头的方向
    if($(this).hasClass("now")){
        var arrow=$(this).find("span");
        if(arrow.hasClass("fa-angle-down")){
            arrow.removeClass("fa-angle-down").addClass("fa-angle-up");
        }else{
            arrow.removeClass("fa-angle-up").addClass("fa-angle-down");
        }
    }else{
        //给当前的元素加上now 其他元素干掉now
        $(this).addClass("now").siblings().removeClass("now").find("span").removeClass("fa-angle-up").addClass("fa-angle-down");
    }

    /*通过自定义的属性拿到对应数据*/
    var type=$(this).attr("data-type");
    //根据箭头判断到底是升序还是降序
    var value=$(this).find("span").hasClass("fa-angle-down")?2:1;
    //重新渲染也页面
    var key=$.trim($(".search_input").val());
    if(!key){
        mui.toast("请输入关键字");
        return false;
    }

    var obj={
        proName:key,
        page:1,
        pageSize:4
    };
    obj[type]=value;
    getListDate(obj, function (data) {
        $("#product_box").html(template("list",data));
    })
})

//5.下拉刷新
mui.init({
    pullRefresh : {
        container:"#refreshContainer",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
        down : {
            style:'circle',//必选，下拉刷新样式，目前支持原生5+ ‘circle’ 样式
            auto: true,//可选,默认false.首次加载自动上拉刷新一次
            callback :function(){
                var key=$.trim($(".search_input").val());
                if(!key){
                    mui.toast("请输入关键字");
                    return false;
                }
                var _this=this;
                getListDate({
                    proName:key,
                    page:window.page,
                    pageSize:4
                }, function (data) {
                    setTimeout(function () {
                        $(".lt_commodity .lt_commodity").removeClass("now").find("span").removeClass("fa-angle-up").addClass("fa-angle-down");
                        $(".lt_commodity .time").addClass("now");
                        $("#product_box").html(template("list",data));
                        //数据获取完毕页面刷新结束
                        _this.endPulldownToRefresh();
                        //重置上拉加载
                        _this.refresh(true)
                    },1000)

                })
            }//必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
        },
        up : {
            callback :function () {
                window.page++;
                var _this=this;
                var type=$(this).attr("data-type");
                //根据箭头判断到底是升序还是降序
                var value=$(this).find("span").hasClass("fa-angle-down")?2:1;
                var key=$.trim($(".search_input").val());
                if(!key){
                    mui.toast("请输入关键字");
                    return false;
                }
                var obj={
                    proName:key,
                    page:window.page,
                    pageSize:4
                };
                obj[type]=value;
                getListDate(obj, function (data) {
                    setTimeout(function(){
                        $("#product_box").append(template("list",data));
                        //数据获取完毕页面加载结束
                        if(data.data.length>0){
                            _this.endPullupToRefresh();
                        }else{
                            _this.endPullupToRefresh(true);
                        }
                    },1000)
                })
            } //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
        }
    }
});

//上拉加载



//封装获取数据
function getListDate(parmas,callback){
    $.ajax({
        url:"/product/queryProduct",
        type:"get",
        data:parmas,
        dataType:"json",
        success:function(data){
            callback&&callback(data);
        }
    })
}


