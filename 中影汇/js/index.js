$(function(){
    $('#dowebok').fullpage({
        verticalCentered: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
        navigation: false,
        scrollingSpeed:700,
        afterLoad:function (link,index){
            $('.section').eq(index-1).addClass('now');
            if(index==1){
                $(".navBox").removeClass("now")
                $(".nav_1").css({background:"rgba(0,0,0,0)"})
            }
            if(index==2){
                $(".navBox").addClass("now")
                $(".nav_1").css({background: "rgba(0,0,0,.01)"})
                $(".nav_1").eq(index-1).css({backgroundColor:"#be1e21",transition:"all 0.2s linear 0s"})
                $(".about_rt").addClass("now1").removeClass("now2");
                $(".about_lf_one").addClass("now3").removeClass("now2");
                $(".t1").addClass("now4").removeClass("now2");
                $(".t2").addClass("now5").removeClass("now2");
                $(".clearfix1").css({display:"block"})
            }else{
                $(".about_rt").addClass("now2").removeClass("now1");
                $(".about_lf_one").addClass("now2").removeClass("now3");
                $(".t1").addClass("now2").removeClass("now4");
                $(".t2").addClass("now2").removeClass("now5");
                $(".clearfix1").css({display:"none"})
            }
            if(index==3){
                $(".navBox").addClass("now")
                $(".nav_1").css({background: "rgba(0,0,0,.01)"})
                $(".nav_1").eq(index-1).css({backgroundColor:"#be1e21",transition:"all 0.2s linear 0s"})
                $(".container3").css("display","block");
            }
            if(index==4){
                $(".navBox").addClass("now")
                $(".nav_1").css({background: "rgba(0,0,0,.01)"})
                $(".nav_1").eq(index-1).css({backgroundColor:"#be1e21",transition:"all 0.2s linear 0s"})
                $(".container4").css("display","block");
            }
            if(index==5){
                $(".navBox").addClass("now")
                $(".nav_1").css({background: "rgba(0,0,0,.01)"})
                $(".nav_1").eq(index-1).css({backgroundColor:"#be1e21",transition:"all 0.2s linear 0s"})
                $(".container5").css("display","block");
            }
            if(index==6){
                $(".navBox").addClass("now")
                $(".nav_1").css({background: "rgba(0,0,0,.01)"})
                $(".nav_1").eq(index-1).css({backgroundColor:"#be1e21",transition:"all 0.2s linear 0s"})
                $(".section_six .container").css("display","block");
                $(".section_six .fuwu_tl").addClass("flipInY");
                $(".section_six .fuwu_tl_small").addClass("flipInY");
                $(".section_six .fuwu_tl_text").addClass("flipInY");
                $(".section_six .index_news_lf").addClass("fadeInLeft");
                $(".section_six .index_news_rt").addClass("fadeInRight");
                $(".section_six .more").addClass("fadeInUp");
            }
            if(index==7){
                $(".navBox").addClass("now")
                $(".nav_1").css({background: "rgba(0,0,0,.01)"})
                $(".nav_1").eq(index-1).css({backgroundColor:"#be1e21",transition:"all 0.2s linear 0s"})
                $(".section_seven .container").css("display","block");
                $(".section_seven .fuwu_tl").addClass("flipInY");
                $(".section_seven .fuwu_tl_small").addClass("flipInY");
                $(".section_seven .fuwu_tl_text").addClass("rotateInUpLeft");
                $(".section_seven .index_news_lf").addClass("fadeInLeft");
                $(".section_seven .index_news_rt").addClass("fadeInRight");
                $(".section_seven .more").addClass("fadeInUp");
            }
            if(index==8){
                $(".navBox").addClass("now")
                $(".nav_1").css({background: "rgba(0,0,0,.01)"})
                $(".nav_1").eq(index-1).css({backgroundColor:"#be1e21",transition:"all 0.2s linear 0s"})
                $(".section_eight .container").css("display","block");
                $(".section_eight .fuwu_tl").addClass("fadeIn");
                $(".section_eight .fuwu_tl_small").addClass("fadeIn");
                $(".section_eight .fuwu_tl_text").addClass("fadeIn");
                $(".section_eight .erw").addClass("fadeInLeft");
                $(".section_eight .wow").addClass("fadeInDown");
                $(".section_eight .ly").addClass("fadeInRight");
                $(".section_eight .index_jiaobu").addClass("fadeInUp");
            }
            window.onresize=function () {
                changeDivHeight();
            }
            function changeDivHeight(){
                var width=$(document).width();
                // console.log(width);
                if(width<1000){
                    $(".nav_1").css({background: "none"})
                }else{
                    if(index==1){
                        $(".nav_1").eq(0).css({background:"none"})
                    }else{
                        $(".nav_1").eq(index-1).css({backgroundColor:"#be1e21"})
                    }
                }
                if(width>1280){
                    $(".navbar-collapse").addClass("none")
                }else{
                    $(".navbar-collapse").removeClass("none")
                }
                if(width<768){
                    $(".t2").addClass("now2").removeClass("now5");
                    $(".about_rt").addClass("now2").removeClass("now1");
                }
            }
            changeDivHeight();
        },
        onLeave:function (index,nextIndex,direction){
            if(index==1&&nextIndex==2){
                $(".navBox").addClass("now")
                $(".nav_1").css({background: "rgba(0,0,0,.01)"})
                $(".nav_1").eq(1).css({backgroundColor:"#be1e21",transition:"all 0.2s linear 0s"})
            }
            if(index==2&&nextIndex==1){
                $(".navBox").removeClass("now")
                $(".nav_1").css({background:"rgba(0,0,0,0)"})
            }
            if(index==2&&nextIndex==3){
                $(".navBox").addClass("now")
                $(".nav_1").css({background: "rgba(0,0,0,0.01)"})
                $(".nav_1").eq(2).css({backgroundColor:"#be1e21",transition:"all 0.2s linear 0s"})
            }
            if(index==3&&nextIndex==2){
                $(".navBox").addClass("now")
                $(".nav_1").css({background: "rgba(0,0,0,0.01)"})
                $(".nav_1").eq(1).css({backgroundColor:"#be1e21",transition:"all 0.2s linear 0s"})
            }
            if(index==3&&nextIndex==4){
                $(".navBox").addClass("now")
                $(".nav_1").css({background: "rgba(0,0,0,0.01)"})
                $(".nav_1").eq(3).css({backgroundColor:"#be1e21",transition:"all 0.2s linear 0s"})
            }
            if(index==4&&nextIndex==3){
                $(".navBox").addClass("now")
                $(".nav_1").css({background: "rgba(0,0,0,0.01)"})
                $(".nav_1").eq(2).css({backgroundColor:"#be1e21",transition:"all 0.2s linear 0s"})
            }
            if(index==4&&nextIndex==5){
                $(".navBox").addClass("now")
                $(".nav_1").css({background: "rgba(0,0,0,0.01)"})
                $(".nav_1").eq(4).css({backgroundColor:"#be1e21",transition:"all 0.2s linear 0s"})
            }
            if(index==5&&nextIndex==4){
                $(".navBox").addClass("now")
                $(".nav_1").css({background: "rgba(0,0,0,0.01)"})
                $(".nav_1").eq(3).css({backgroundColor:"#be1e21",transition:"all 0.2s linear 0s"})
            }
            if(index==5&&nextIndex==6){
                $(".navBox").addClass("now")
                $(".nav_1").css({background: "rgba(0,0,0,0.01)"})
                $(".nav_1").eq(5).css({backgroundColor:"#be1e21",transition:"all 0.2s linear 0s"})
            }
            if(index==6&&nextIndex==5){
                $(".navBox").addClass("now")
                $(".nav_1").css({background: "rgba(0,0,0,0.01)"})
                $(".nav_1").eq(4).css({backgroundColor:"#be1e21",transition:"all 0.2s linear 0s"})
            }
            if(index==6&&nextIndex==7){
                $(".navBox").addClass("now")
                $(".nav_1").css({background: "rgba(0,0,0,0.01)"})
                $(".nav_1").eq(6).css({backgroundColor:"#be1e21",transition:"all 0.2s linear 0s"})
            }
            if(index==7&&nextIndex==6){
                $(".navBox").addClass("now")
                $(".nav_1").css({background: "rgba(0,0,0,0.01)"})
                $(".nav_1").eq(5).css({backgroundColor:"#be1e21",transition:"all 0.2s linear 0s"})
            }
            if(index==7&&nextIndex==8){
                $(".navBox").addClass("now")
                $(".nav_1").css({background: "rgba(0,0,0,0.01)"})
                $(".nav_1").eq(7).css({backgroundColor:"#be1e21",transition:"all 0.2s linear 0s"})
            }
            if(index==8&&nextIndex==7){
                $(".navBox").addClass("now")
                $(".nav_1").css({background: "rgba(0,0,0,0.01)"})
                $(".nav_1").eq(6).css({backgroundColor:"#be1e21",transition:"all 0.2s linear 0s"})
            }
            if(index == '3'){
                $(".container3").css("display","none");
            }
            if(index == '4'){
                $(".container4").css("display","none");
            }
            if(index == '5'){
                $(".container5").css("display","none");
            }
            if(index == '6'){
                $(".section_six .container").css("display","none");
                $(".section_six .fuwu_tl").removeClass("flipInY");
                $(".section_six .fuwu_tl_small").removeClass("flipInY");
                $(".section_six .fuwu_tl_text").removeClass("flipInY");
                $(".section_six .index_news_lf").removeClass("fadeInLeft");
                $(".section_six .index_news_rt").removeClass("fadeInRight");
                $(".section_six .more").removeClass("fadeInUp");
            }
            if(index == '7'){
                $(".section_seven .container").css("display","none");
                $(".section_seven .fuwu_tl").removeClass("flipInY");
                $(".section_seven .fuwu_tl_small").removeClass("flipInY");
                $(".section_seven .fuwu_tl_text").removeClass("rotateInUpLeft");
                $(".section_seven .index_news_lf").removeClass("fadeInLeft");
                $(".section_seven .index_news_rt").removeClass("fadeInRight");
                $(".section_seven .more").removeClass("fadeInUp");
            }
        },
        afterRender:function(){
            $(".nav_1").each(function(index,item){
                $(".nav_1").eq(index).on("click",function(){
                    if(index==0){
                        $(".nav_1").css({background:"none"})
                    }else{
                        $(".nav_1").css({background:"none"})
                        $(this).css({background:"#be1e21"})
                    }
                    $.fn.fullpage.moveTo(index+1);
                })
            })
            $(".sideBox").eq(2).on("click",function(){
                $.fn.fullpage.moveTo(1);
            })
        }
    });
    //
    /*头部*/
    $(".btn").on("click",function(){
        // console.log(11);
        if(!$(".navbar-collapse").hasClass("block")){
            $(".navbar-collapse").addClass("block").removeClass("none");
        }else{
            $(".navbar-collapse").addClass("none").removeClass("block");
        }
    });

    /*右边小图标*/
    $(".weixin").on("mouseover",function(){
        $(".weixin .erweima").css({display:"block"})
        $(this).css({border:"none"})
    })
    $(".weixin").on("mouseout",function(){
        $(".weixin .erweima").css({display:"none"})
        $(this).css({borderBottom:"1px solid #000"})
    })
    $(".sideBox").eq(0).on("mouseover",function(){
        $(this).css({background:"#000",opacity:"1"})
        $(this).addClass("leftSlide").removeClass("rightSlide")
    })
    $(".sideBox").eq(0).on("mouseout",function(){
        $(this).addClass("rightSlide").removeClass("leftSlide")
        $(this).css({opacity:"0.5",background:"none"})
        $(".side ul li").css({
            background:"rgba(0,0,0,.5)"
        })
    })
    $(".sideBox").eq(1).on("mouseover",function(){
        $(this).css({background:"#000",opacity:"1"})
        $(this).addClass("leftSlide").removeClass("rightSlide")
    })
    $(".sideBox").eq(1).on("mouseout",function(){
        $(this).addClass("rightSlide").removeClass("leftSlide")
        $(this).css({opacity:"0.5",background:"none"})
        $(".side ul li").css({
            background:"rgba(0,0,0,.5)"
        })
    })
    $(".cha").on("click",function () {
        $(".side").css({
            display:"none"
        })
    })
    /*第一屏*/
    /*调用*/
    carouselFigure(".imgs li",".imgs",".circle b","current")

    /*封装轮播图函数*/
    function carouselFigure(listLi,frame,circle,togglestyle){
        var i = 0;
        var timer;
        //所有的li
        var dots=$(listLi);
        //照片个数
        var size=dots.size();
        $(function(){
            //克隆第一张图片
            $(frame).children(":first").clone(true).appendTo($(frame));
            start();
            $(circle).on("click",function(){
                clearInterval(timer);
                i = $(this).index();
                change();
                start();
            })
        });
        //定时器  开始播放轮播图
        function start(){
            timer = setInterval(function(){
                i++;
                if(i>=$(listLi).length){
                    $(frame).css({right:0});
                    i=1;
                }
                change();
            }, 5000);
        }
        //图片动画  圆点样式切换效果
        function change(){
            $(frame).stop().animate({"right":$(listLi).width()*i});
            //i%size当到最后一张图片(克隆的第一张图片)时,圆点跳到第一个
            $(circle).removeClass(togglestyle).eq(i%size).addClass(togglestyle);
            /*动态图片转换*/
            $(".bak-mask img").removeClass("block2").eq(i%size-1).addClass("none2")
            $(".bak-mask img").eq(i%size).addClass("block2").removeClass("none2");
        }
    }

    /*第三屏*/
    $(function () {
        var oa=$(window).height();
        $(".about_rt_main").height(oa);
        var ob=$(".fuwu_img_main").width();
        $(".fuwu_hover").width(ob);
    })
    $('.fuwu_img_con_main').mouseover(function(){
        var oid=$(this).attr("id");
        $( "." + oid +　"_erg").addClass("xian");
    });
    $('.fuwu_hover').mouseleave(function(){
        // console.log(11);
        $(this).removeClass("xian");
    });
    $('.fuwu_hover').click(function(){
        $(this).removeClass("xian");
    });
    $('.fuwu_btn').mouseleave(function(){

        $('.fuwu_hover').removeClass("xian");
    });

    //第六屏鼠标移入移出图片旋转
    $(".section_six .anli_ul li").each(function (index,item) {
        // console.log(index);
        // console.log(item);
        $(item).mouseover(function () {
            $(".anli_ul li a .img1").eq(index).css({
                transform:" rotateY(180deg)",
                opacity: "0"
            });
            $(".anli_ul li a .img2").eq(index).css({
                transform:" rotateY(0deg)",
                opacity: "1"
            });
        })
        $(item).mouseout(function () {
            $(".anli_ul li a .img1").eq(index).css({
                transform:" rotateY(0deg)",
                opacity: "1"
            });
            $(".anli_ul li a .img2").eq(index).css({
                transform:" rotateY(180deg)",
                opacity: "0"
            });
        })
    })

    //第七屏鼠标移入移出图片旋转
    $(".section_seven .index_news_img").each(function (index,item) {
        // console.log(index);
        // console.log(item);
        $(item).mouseover(function () {
            $(".section_seven .index_news_yin").eq(index).css("display","block")
        })
        $(item).mouseout(function () {
            $(".section_seven .index_news_yin").eq(index).css("display","none")
        })
    })

});