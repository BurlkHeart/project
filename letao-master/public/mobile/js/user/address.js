$(function(){
    //1.获取地址列表  渲染页面
    getAddressDate(function (data) {
        console.log(data);
        $(".mui-table-view").html(template("addressList",{list:data}));
    })

    //2.删除对应的数据
    $(".mui-table-view").on("tap",".mui-btn-red",function(){
        // console.log(11);
        var id=$(this).attr("data-id");
        deleteAddressDate({id:id},function(data){
            if(data.success==true){
                //重新渲染页面
                getAddressDate(function(data){
                    $(".mui-table-view").html(template("addressList",{list:data}))
                })
            }
        })
    });

    function getAddressDate(callback){
        LT.loginAjax({
            url:"/address/queryAddress",
            type:"get",
            data:"",
            dataType:"json",
            success:function(data){
                callback&&callback(data);
            }
        })
    }

    function deleteAddressDate(parmas,callback){
        LT.loginAjax({
            url:"/address/deleteAddress",
            type:"post",
            data:parmas,
            dataType:"json",
            success:function(data){
                callback&&callback(data);
            }
        })
    }


})