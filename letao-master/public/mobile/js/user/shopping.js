

$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        indicators:false
    });


    mui.init({
        pullRefresh : {
            container: "#refreshContainer",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
            down: {
                auto: true,//可选,默认false.首次加载自动上拉刷新一次
                callback: function () {
                    var that=this;
                    setTimeout(function(){
                        getCartDate(function (data) {
                            // console.log(data);
                            $(".mui-table-view").html(template("cart",{list:data}))
                            //关闭下拉刷新
                            that.endPulldownToRefresh();
                    })
                    },200)

                }
            },
        }
    });
    //点击刷新
    $(".fa-refresh").on("tap",function(){
        mui("#refreshContainer").pullRefresh().pulldownLoading();
    });

    //删除
    $(".mui-table-view").on("tap",".mui-btn-red",function(){
        var id=$(this).attr("data-id");
        var $that=$(this);
        mui.confirm('请确认要删除吗？', '商品删除', ['是','否'], function(e) {
            if (e.index == 0) {
                //调接口 删除数据库对应的数据 删除页面当前数据
                LT.loginAjax({
                    url:"/cart/deleteCart",
                    type:"get",
                    data:{
                        id:id
                    },
                    dataType:"json",
                    success:function(data){
                        // console.log(data);
                        if(data.success==true){
                            $that.parent().parent().remove()
                            getPrice()
                        }
                    }
                })
            }else{
                /*mui.swipeoutClose(js对象)*/
                //否定返回原来样式
                mui.swipeoutClose($that.parent().parent()[0]);
            }
        })
    });

    //编辑
    $(".mui-table-view").on("tap",".mui-btn-grey",function(){
        var id=$(this).attr("data-id");
        var $that=$(this);
        var $li=$that.parent().parent();
        //获取所有的自定义属性
        var html=template("edit",this.dataset);
        var sizeP=$(this).parent().next().children().eq(1).children().eq(2).children();//获取当前鞋码的标签
        var oldSize=$(sizeP).html()[3]+$(sizeP).html()[4];
        // console.log(oldSize);
        mui.confirm(html.replace(/\n/g,""), '编辑商品', ['是','否'], function(e) {
            if(e.index==0){
                var size=$(".btn_size.now1").html();
                var num=$(".p_num input").val();
                LT.loginAjax({
                    url:"/cart/updateCart",
                    type:"post",
                    data:{
                        id:id,
                        size:size,
                        num:num
                    },
                    dataType:"json",
                    success:function(data){
                        if(data.success==true){
                           //前端页面的渲染
                           $li.find(".number").html(num+"件");
                           $li.find(".size").html(size);
                           $li.find("input").attr("data-num",num);
                           getPrice()
                           mui.swipeoutClose($that.parent().parent()[0]);
                       }
                    }
                })
            }else{
                mui.swipeoutClose($that.parent().parent()[0]);
            }
        })
        var str=$("span.btn_size").text();
        var index=str.indexOf(oldSize)/2;
        $("span.btn_size").eq(index).addClass("now1");

    });
    //1尺码选择
    $("body").on("tap",".btn_size",function () {
        $(this).addClass("now1").siblings().removeClass("now1")
    })

    //2.数量的选择
    $("body").on("tap",'.p_num span',function () {
        //获取input框中的值
        var num=$(this).siblings("input").val();
        // console.log(num);
        //获取库存值
        var max=parseInt($(this).siblings("input").attr("data-max"));
        if($(this).hasClass("jian")){
            if(num==0){
                mui.toast("该商品的数量只能是正整数");
                return false;
            }
            num--;
        }else{
            if(num>=max){
                setTimeout(function () {
                    mui.toast("该商品库存不足");
                },200);
                return false;
            }
            num++;
        }
        //赋值
        $(this).siblings("input").val(num);
    })

    //计算价格
    $(".mui-table-view").on('change','[type="checkbox"]',function(){
        getPrice()
    })

    //封装计算总价的函数
    function getPrice(){
        var $checkBox=$("[type=\"checkBox\"]:checked")
        var total=0;
        $checkBox.each(function(index,item){
            var num=$(this).attr("data-num");
            var price=$(this).attr("data-price");
            total+=num*price;
        })
        total=total.toFixed(2);
        $(".cart_footer-price").html(total);
    }


    function getCartDate(callback){
        LT.loginAjax({
            url:"/cart/queryCart",
            type:"get",
            data:"",
            dataType:"json",
            success:function(data){
                callback&&callback(data);
            }
        })
    }

})