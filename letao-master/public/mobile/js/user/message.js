$(function(){

    getMessageDate(function(data){
            $(".denglu").html(template("message",{list:data}))
    })


//获取数据
    function getMessageDate(callback){
        LT.loginAjax({
            url:"/user/queryUserMessage",
            type:"get",
            data:"",
            dataType:"json",
            success:function(data){
                    callback&&callback(data);
            }
        })
    }
})