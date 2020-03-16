$(function () {
    //点击确认按钮 获取数据
    $(".mui-btn-primary").on("tap",function () {
        // console.log($("form").serialize());
        var dataObj=LT.strObj($("#form").serialize());

        //前台验证
        if(!dataObj.username){
            mui.toast("请输入用户名");
            return false;
        }
        if(!dataObj.password){
            mui.toast("请输入密码");
            return false;
        }
        //后台验证
        $.ajax({
            url:"/user/login",
            type:"post",
            data:$("#form").serialize(),
            dataType:"json",
            success:function (data,e) {
                // console.log(data);
                if(data.success==true){
                    //获取传过来的地址 在跳回去
                    var returnUrl=location.search.replace("?returnURL=","");
                    if(returnUrl){
                        location.href=returnUrl;
                        //组织默认事件
                        e.preventDefault();
                    }else{
                        location.href="./index.html";
                    }
                }else if(data.error==403){
                    /*将后台返回的错误信息提示用户*/
                    mui.toast(data.message);
                }
            }
        })
    })
    $(".mui-btn-danger").on("tap",function(){
        location.href="javascript:history.back()";
    })
});