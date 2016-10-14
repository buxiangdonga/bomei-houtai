/**
 * Created by Administrator on 2016/9/23.
 */
var flag = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var n=[];
$(function () {
    //上来默认显示医疗系统会员中心
    //左侧导航默认显示
    $(".l-nav-y").css({"background-color": "#ffffff", "color": "#333333"});
    $(".l-nav-y").next(".y-con").show();
    $(".l-nav-y").find(".icon-l img").attr("src", "img/yiliaoxitongimg.png");
    $(".l-nav-y").find(".icon-r img").attr("src", "img/jianhao.png");
    //右侧会员中心内容显示
    $(".huiyuanzhongxin-con").show();
    flag[0]=1;
    //有消息时显示，无消息时隐藏
    $(".xiaoxi").show();
    //左侧一级导航点击
    //医疗系统
    $(".r-top-lcon span:nth-child(5)").hide();
    $(".l-nav-y").on("click",function(){
        if(flag[0]==0){
            $("#xitonggg").text("医疗系统");
            $(".r-top-lcon span:nth-child(2)").text("医疗系统");
            $(".r-top-lcon span:nth-child(4)").text("会员中心");
            $(".r-top-lcon span:nth-child(5)").hide();
            $(".r-top-lcon span:nth-child(6)").text("");
            $(".huiyuanzhongxin-con").show();
            //有消息时显示，无消息时隐藏
            $(".xiaoxi").show();
            $(this).css({"background-color": "#ffffff", "color": "#333333"});
            $(this).next(".y-con").show();
            $(".l-nav-f").next(".y-con").hide();
            $(".l-nav-f").css({"background-color": "#f7f7f7", "color": "#a9a9a9"});
            $(".l-nav-f").find(".icon-l img").attr("src", "img/fenxiaoimg.png");
            $(".l-nav-f").find(".icon-r img").attr("src", "img/jiahao.png");
            flag[1]=0;
            $(".l-nav-t").css({"background-color": "#f7f7f7", "color": "#a9a9a9"});
            $(".l-nav-t").find(".icon-l img").attr("src", "img/tiliaoxitong1.png");
            flag[3]=0;
            $(".l-nav-q").next(".y-con").hide();
            $(".l-nav-q").css({"background-color": "#f7f7f7", "color": "#a9a9a9"});
            $(".l-nav-q").find(".icon-l img").attr("src", "img/quanxianfenpeiimg.png");
            $(".l-nav-q").find(".icon-r img").attr("src", "img/jiahao.png");
            flag[2]=0;
            $(this).find(".icon-l img").attr("src", "img/yiliaoxitongimg.png");
            $(this).find(".icon-r img").attr("src", "img/jianhao.png");
            flag[0]=1;
        }else if(flag[0]==1){
            $(this).css({"background-color": "#f7f7f7", "color": "#a9a9a9"});
            $(this).next(".y-con").hide();
            $(this).find(".icon-l img").attr("src", "img/tiliaoxitong1.png");
            $(this).find(".icon-r img").attr("src", "img/jiahao.png");
            flag[0]=0;
        }
    });
    //分销系统
    $(".l-nav-f").on("click",function(){
        if(flag[1]==0){
            $("#xitonggg").text("分销系统");
            $(".r-top-lcon span:nth-child(2)").text("分销系统");
            $(".r-top-lcon span:nth-child(3)").show();
            $(".r-top-lcon span:nth-child(4)").text("分销人员");
            $(".r-top-lcon span:nth-child(5)").hide();
            $(".r-top-lcon span:nth-child(6)").text("");
            $(this).css({"background-color": "#ffffff", "color": "#333333"});
            $(this).next(".y-con").show();
            $(".l-nav-y").next(".y-con").hide();
            $(".l-nav-y").css({"background-color": "#f7f7f7", "color": "#a9a9a9"});
            $(".l-nav-y").find(".icon-l img").attr("src", "img/tiliaoxitong1.png");
            $(".l-nav-y").find(".icon-r img").attr("src", "img/jiahao.png");
            flag[0]=0;
            $(".l-nav-t").css({"background-color": "#f7f7f7", "color": "#a9a9a9"});
            $(".l-nav-t").find(".icon-l img").attr("src", "img/tixianimg.png");
            flag[3]=0;
            $(".l-nav-q").next(".y-con").hide();
            $(".l-nav-q").css({"background-color": "#f7f7f7", "color": "#a9a9a9"});
            $(".l-nav-q").find(".icon-l img").attr("src", "img/quanxianfenpeiimg.png");
            $(".l-nav-q").find(".icon-r img").attr("src", "img/jiahao.png");
            flag[2]=0;
            $(this).find(".icon-l img").attr("src", "img/fenxiaoxitongimg1.png");
            $(this).find(".icon-r img").attr("src", "img/jianhao.png");
            flag[1]=1;
        }else if(flag[1]==1){
            $(this).css({"background-color": "#f7f7f7", "color": "#a9a9a9"});
            $(this).next(".y-con").hide();
            $(this).find(".icon-l img").attr("src", "img/fenxiaoimg.png");
            $(this).find(".icon-r img").attr("src", "img/jiahao.png");
            flag[1]=0;
        }
    });
    //提现系统
    $(".l-nav-t").on("click",function(){
        if(flag[3]==0){
            $("#xitonggg").text("提现系统");
            $(".r-top-lcon span:nth-child(2)").text("提现系统");
            $(".r-top-lcon span:nth-child(3)").hide();
            $(".r-top-lcon span:nth-child(4)").text("");
            $(".r-top-lcon span:nth-child(5)").hide();
            $(".r-top-lcon span:nth-child(6)").text("");
            $(this).css({"background-color": "#ffffff", "color": "#333333"});
            $(this).find(".icon-l img").attr("src", "img/tixianxitongimg1.png");
            $(this).find(".icon-r img").attr("src", "img/jianhao.png");
            $(".l-nav-y").next(".y-con").hide();
            $(".l-nav-y").css({"background-color": "#f7f7f7", "color": "#a9a9a9"});
            $(".l-nav-y").find(".icon-l img").attr("src", "img/tiliaoxitong1.png");
            $(".l-nav-y").find(".icon-r img").attr("src", "img/jiahao.png");
            flag[0]=0;
            $(".l-nav-f").next(".y-con").hide();
            $(".l-nav-f").css({"background-color": "#f7f7f7", "color": "#a9a9a9"});
            $(".l-nav-f").find(".icon-l img").attr("src", "img/fenxiaoimg.png");
            $(".l-nav-f").find(".icon-r img").attr("src", "img/jiahao.png");
            flag[1]=0;
            $(".l-nav-q").next(".y-con").hide();
            $(".l-nav-q").css({"background-color": "#f7f7f7", "color": "#a9a9a9"});
            $(".l-nav-q").find(".icon-l img").attr("src", "img/quanxianfenpeiimg.png");
            $(".l-nav-q").find(".icon-r img").attr("src", "img/jiahao.png");
            flag[2]=0;
            flag[3]=1;
        }else if(flag[3]==1){
            $(this).css({"background-color": "#f7f7f7", "color": "#a9a9a9"});
            $(this).find(".icon-l img").attr("src", "img/tixianimg.png");
            flag[3]=0;
        }
    });
    //权限系统
    $(".l-nav-q").on("click",function(){
        if(flag[2]==0){
            $("#xitonggg").text("权限系统");
            $(".r-top-lcon span:nth-child(2)").text("权限系统");
            $(".r-top-lcon span:nth-child(3)").show();
            $(".r-top-lcon span:nth-child(4)").text("管理员注册");
            $(".r-top-lcon span:nth-child(5)").hide();
            $(".r-top-lcon span:nth-child(6)").text("");
            $(this).css({"background-color": "#ffffff", "color": "#333333"});
            $(this).next(".y-con").show();
            $(".l-nav-y").next(".y-con").hide();
            $(".l-nav-y").css({"background-color": "#f7f7f7", "color": "#a9a9a9"});
            $(".l-nav-y").find(".icon-l img").attr("src", "img/tiliaoxitong1.png");
            $(".l-nav-y").find(".icon-r img").attr("src", "img/jiahao.png");
            flag[0]=0;
            $(".l-nav-t").css({"background-color": "#f7f7f7", "color": "#a9a9a9"});
            $(".l-nav-t").find(".icon-l img").attr("src", "img/tixianimg.png");
            flag[3]=0;
            $(".l-nav-f").next(".y-con").hide();
            $(".l-nav-f").css({"background-color": "#f7f7f7", "color": "#a9a9a9"});
            $(".l-nav-f").find(".icon-l img").attr("src", "img/fenxiaoimg.png");
            $(".l-nav-f").find(".icon-r img").attr("src", "img/jiahao.png");
            flag[1]=0;
            $(this).find(".icon-l img").attr("src", "img/quanxianxitongimg1.png");
            $(this).find(".icon-r img").attr("src", "img/jianhao.png");
            flag[2]=1;
        }else if(flag[2]==1){
            $(this).css({"background-color": "#f7f7f7", "color": "#a9a9a9"});
            $(this).next(".y-con").hide();
            $(this).find(".icon-l img").attr("src", "img/quanxianfenpeiimg.png");
            $(this).find(".icon-r img").attr("src", "img/jiahao.png");
            flag[2]=0;
        }
    });
    //点击字体颜色改变
    $(".y-con>p").on("click",function(){
        $(this).css({"color":"#009bd5"});
        $(".y-con p").not(this).css({"color":"#a9a9a9"});
    });
    $(".d-con>p").on("click",function(){
        $(this).css({"color":"#009bd5"});
        $(".y-con p").not(this).css({"color":"#a9a9a9"});
    });
    //会员中心导航点击
    $(".huiyuan-nav p:first-child").css({"color":"#313131","border-bottom": "none","background-color": "white"});
    $(".huiyuan-nav p").on("click",function(){
        n[1]=$(this).data("num");
        $(this).css({"color":"#313131","border-bottom": "none","background-color": "white"});
        $(".huiyuan-nav p").not(this).css({"color":"#9a9a9a","background-color": "transparent"});
        if(n[1]==21){
            $(".huiyuan").show();
            $(".dongjie-con").hide();
        }else if(n[1]==22){
            $(".huiyuan").hide();
            $(".dongjie-con").show();
        }
    });
    //一级导航点击
    $(".l").on("click",function(){
        n[3]=$(this).data("num");
        $(".y-con   p").css({"color":"rgb(169, 169, 169)"});
        $(".y-con > p:first-child").css({"color":"#009bd5"});
        if(n[3]==111){
            //医疗系统
            $(".xiaoxi").show();
            $(".huiyuanzhongxin-con").show();
            $(".dongjie-con").hide();
            $(".quanbudingdan").hide();
            $(".yuyuedingdan").hide();
            $(".tuikuan-nav").hide();
            $(".xiaoxizhongxin-con").hide();
            $(".keshiliebiao").hide();
            $(".yisheng-con").hide();
            $(".wenzhang1").hide();
            //分销系统
            $(".fxshenqingdingdan").hide();
            $(".fenxiaorenyuan").hide();
            $(".fenxiaoxitongbili").hide();
            //提现系统
            $(".tixian-con").hide();
            //权限系统
            $(".guannliyuanliebiao").hide();
            $(".guanliyuanzhuce").hide();
            $(".guanliyuanquanxain").hide();
        }else if(n[3]==222){
            //医疗系统
            $(".huiyuanzhongxin-con").hide();
            $(".quanbudingdan").hide();
            $(".yuyuedingdan").hide();
            $(".tuikuan-nav").hide();
            $(".xiaoxizhongxin-con").hide();
            $(".keshiliebiao").hide();
            $(".yisheng-con").hide();
            $(".wenzhang1").hide();
            //分销系统
            $(".fxshenqingdingdan").show();
            $(".fenxiaorenyuan").hide();
            $(".fenxiaoxitongbili").hide();
            //提现系统
            $(".tixian-con").hide();
            //权限系统
            $(".guannliyuanliebiao").hide();
            $(".guanliyuanzhuce").hide();
            $(".guanliyuanquanxain").hide();
        }else if(n[3]==333){
//医疗系统
            $(".huiyuanzhongxin-con").hide();
            $(".quanbudingdan").hide();
            $(".yuyuedingdan").hide();
            $(".tuikuan-nav").hide();
            $(".xiaoxizhongxin-con").hide();
            $(".keshiliebiao").hide();
            $(".yisheng-con").hide();
            $(".wenzhang1").hide();
            //分销系统
            $(".fxshenqingdingdan").hide();
            $(".fenxiaorenyuan").hide();
            $(".fenxiaoxitongbili").hide();
            //提现系统
            $(".tixian-con").show();
            //权限系统
            $(".guannliyuanliebiao").hide();
            $(".guanliyuanzhuce").hide();
            $(".guanliyuanquanxain").hide();
        }else if(n[3]==444){
//医疗系统
            $(".huiyuanzhongxin-con").hide();
            $(".quanbudingdan").hide();
            $(".yuyuedingdan").hide();
            $(".tuikuan-nav").hide();
            $(".xiaoxizhongxin-con").hide();
            $(".keshiliebiao").hide();
            $(".yisheng-con").hide();
            $(".wenzhang1").hide();
            //分销系统
            $(".fxshenqingdingdan").hide();
            $(".fenxiaorenyuan").hide();
            $(".fenxiaoxitongbili").hide();
            //提现系统
            $(".tixian-con").hide();
            //权限系统
            $(".guanliyuanzhuce").show();
            $(".guanliyuanquanxain").hide();
            $(".guannliyuanliebiao").hide();
        }
    });
//二级导航点击
    //    订单
    $("#dingdan").on("click",function(){
        $(".d-con > p:first-child").css({"color":"#009bd5"});
        $(".huiyuanzhongxin-con").hide();
        if(flag[4]==0){
            $(".r-top-lcon span:nth-child(3)").show();
            $(".r-top-lcon span:nth-child(4)").text("订单");
            $(this).find("img").attr("src", "img/jianhao.png");
            $(this).next(".d-con").show();
            flag[4]=1;
        }else if(flag[4]==1){
            $(this).css({"color":"#009bd5"});
            $(this).find("img").attr("src", "img/jiahao.png");
            $(this).next(".d-con").hide();
            flag[4]=0;
        }
    });
    $(".d-con p").on("click",function(){
        //医疗系统内容
        $(".r-top-lcon span:nth-child(5)").show();
        n[0]=$(this).data("num");
        $(".huiyuanzhongxin-con").hide();
        $(".yuyuedingdan").hide();
        $(".tuikuan-nav").hide();
        $(".xiaoxizhongxin-con").hide();
        $(".keshiliebiao").hide();
        $(".yisheng-con").hide();
        $(".wenzhang1").hide();
        if(n[0]==10){
            $(".r-top-lcon span:nth-child(6)").text("全部订单");
            //全部订单内容
            $(".quanbudingdan").show();
            $(".tuikuan-dingdan").hide();
            $(".yuyuedingdan").hide();
        }else if(n[0]==11){
            $(".r-top-lcon span:nth-child(6)").text("预约订单");
            $(".yuyuedingdan").show();
            $(".tuikuan-dingdan").hide();
            $(".quanbudingdan").hide();
        }else if(n[0]==12){
            $(".quanbudingdan").hide();
            $(".yuyuedingdan").hide();
            $(".tuikuan-dingdan").show();
            $(".r-top-lcon span:nth-child(6)").text("退款订单");
            $(".tuikuan-nav").next("hr").show();
            $(".tuikuan-nav").show();

        }
    });
//退款订单导航点击
    $(".tuikuan-nav p:first-child").css({"color":"#313131","border-bottom": "none","background-color": "white"});
    $(".tuikuan-nav p").on("click",function(){
        n[1]=$(this).data("num");
        $(this).css({"color":"#313131","border-bottom": "none","background-color": "white"});
        $(".tuikuan-nav p").not(this).css({"color":"#9a9a9a","background-color": "transparent"});
        if(n[1]==21){
            $(".tuikuandingdan").show();
            $(".tuikuanzhong").hide();
            $(".tuikuanwancheng").hide();
            $(".tuikuanjujue").hide();
        }else if(n[1]==22){
            $(".tuikuandingdan").hide();
            $(".tuikuanzhong").show();
            $(".tuikuanwancheng").hide();
            $(".tuikuanjujue").hide();
        }else if(n[1]==23){
            $(".tuikuandingdan").hide();
            $(".tuikuanzhong").hide();
            $(".tuikuanwancheng").show();
            $(".tuikuanjujue").hide();
        }else if(n[1]==24){
            $(".tuikuandingdan").hide();
            $(".tuikuanzhong").hide();
            $(".tuikuanwancheng").hide();
            $(".tuikuanjujue").show();
        }
    });
    //二级导航菜单点击
    $(".y-con > p").on("click",function(){
        var str=$(this).text();
        var re2 = /[\u4e00-\u9fa5]{2,}/g;
        var arr2 = str.match(re2);
        var s;
        if(arr2.length ==1){
            s=arr2[0];
        }else if(arr2.length==2){
            s=arr2[0]+arr2[1];
        }
        $(".r-top-lcon span:nth-child(3)").show();
        $(".r-top-lcon span:nth-child(4)").text(s);
        $(".r-top-lcon span:nth-child(5)").hide();
        $(".r-top-lcon span:nth-child(6)").text("");
        n[2] = $(this).data("num");
        //医疗系统
        if(n[2]==0){
            $(".huiyuanzhongxin-con").show();
            $(".quanbudingdan").hide();
            $(".yuyuedingdan").hide();
            $(".tuikuan-dingdan").hide();
            $(".xiaoxizhongxin-con").hide();
            $(".keshiliebiao").hide();
            $(".yisheng-con").hide();
            $(".wenzhang1").hide();
        }else if(n[2]==1){
            $(".huiyuanzhongxin-con").hide();
            $(".quanbudingdan").show();
            $(".yuyuedingdan").hide();
            $(".tuikuan-dingdan").hide();
            $(".xiaoxizhongxin-con").hide();
            $(".keshiliebiao").hide();
            $(".yisheng-con").hide();
            $(".wenzhang1").hide();
        }else if(n[2]==2){
            $(".huiyuanzhongxin-con").hide();
            $(".quanbudingdan").hide();
            $(".yuyuedingdan").hide();
            $(".tuikuan-dingdan").hide();
            $(".xiaoxizhongxin-con").show();
            $(".x-1").show();
            $(".keshiliebiao").hide();
            $(".yisheng-con").hide();
            $(".wenzhang1").hide();
        }else if(n[2]==3){
            $(".huiyuanzhongxin-con").hide();
            $(".quanbudingdan").hide();
            $(".yuyuedingdan").hide();
            $(".tuikuan-dingdan").hide();
            $(".xiaoxizhongxin-con").hide();
            $(".keshiliebiao").show();
            $(".yisheng-con").hide();
            $(".wenzhang1").hide();
        }else if(n[2]==4){
            $(".huiyuanzhongxin-con").hide();
            $(".quanbudingdan").hide();
            $(".yuyuedingdan").hide();
            $(".tuikuan-dingdan").hide();
            $(".xiaoxizhongxin-con").hide();
            $(".keshiliebiao").hide();
            $(".yisheng-con").show();
            $(".wenzhang1").hide();
        }else if(n[2]==5){
            $(".huiyuanzhongxin-con").hide();
            $(".quanbudingdan").hide();
            $(".yuyuedingdan").hide();
            $(".tuikuan-dingdan").hide();
            $(".xiaoxizhongxin-con").hide();
            $(".keshiliebiao").hide();
            $(".yisheng-con").hide();
            $(".wenzhang1").show();
            //分销系统
        }else if(n[2]==60){
            $(".fxshenqingdingdan").show();
            $(".fenxiaorenyuan").hide();
            $(".fenxiaoxitongbili").hide();
        }else if(n[2]==6){
            $(".fenxiaorenyuan").show();
            $(".fxshenqingdingdan").hide();
            $(".fenxiaoxitongbili").hide();
        }else if(n[2]==7){
            $(".fxshenqingdingdan").hide();
            $(".fenxiaorenyuan").hide();
            $(".fenxiaoxitongbili").show();
        }else if(n[2]==8){
            $(".guanliyuanzhuce").show();
            $(".guanliyuanquanxain").hide();
            $(".guannliyuanliebiao").hide();
        }else if(n[2]==9){
            $(".guanliyuanzhuce").hide();
            $(".guanliyuanquanxain").show();
            $(".guannliyuanliebiao").hide();
        }else if(n[2]==91){
            $(".guanliyuanzhuce").hide();
            $(".guanliyuanquanxain").hide();
            $(".guannliyuanliebiao").show();
        }
    });
    //消息导航点击
    $(".xiaoxi-nav p:first-child").css({"color":"#313131","border-bottom": "none","background-color": "white"});
    $(".xiaoxi-nav p").on("click",function(){
        n[1]=$(this).data("num")
        $(this).css({"color":"#313131","border-bottom": "none","background-color": "white"});
        $(".xiaoxi-nav p").not(this).css({"color":"#9a9a9a","background-color": "transparent"});
        if(n[1]==31){
            $(".x-1").show();
            $(".x-2").hide();
            $(".x-3").hide();
        }else if(n[1]==32){
            $(".x-1").hide();
            $(".x-2").show();
            $(".x-3").hide();
        }else if(n[1]==33){
            $(".x-1").hide();
            $(".x-2").hide();
            $(".x-3").show();
        }
    });
    $(".y-con p:first-child").css({"color":"#009bd5"});
    $(".d-con p:first-child").css({"color":"#009bd5"});
    //会员中心中消息差号点击消息消息
    $(".cha").on("click",function(){
        $(this).parent().hide();
    });
    //会员中心点击删除/冻结按钮
    $(".c-btn img:nth-child(2)").on("mouseover",function(){
        $(this).attr("src","img/shanchubtn.png");
    });
    $(".c-btn img:nth-child(1)").on("mouseover",function(){
        $(this).attr("src","img/dongjieben1.png");
    });
    $(".c-btn img:nth-child(2)").on("mouseout",function(){
        $(this).attr("src","img/shanchubtn1.png");
    });
    $(".c-btn img:nth-child(1)").on("mouseout",function(){
        $(this).attr("src","img/dongjiebtn.png");
    });
    $(".c-btn img:nth-child(2)").on("click",function(){
        //$(".dongjie-con").hide();
        //$(".huiyuan").show();
        $(".sfshanchutc p").text("是否确定删除")
        $(".sfshanchutc").show();
        //console.log(1);
    })
    $(".c-btn img:nth-child(1)").on("click",function(){
        //模仿示例冻结
        if($(".huiyuan .tbody th:first-child img:first-child").attr("src")=="img/fangkuang1.png"){
            $(".huiyuan .tbody th").css({"color":"#cfcece"});
            $(".huiyuan .tbody th:nth-child(7)").css({"color":"#009bd5"});
            $(".huiyuan .tbody th:first-child img:first-child").attr("src","img/dongjiebtnnn.png");
        }
        //console.log(1);
        //$(".dongjie-con").show();
        //$(".huiyuan").hide();
        $(".sfshanchutc p").text("是否确定冻结")
        $(".sfshanchutc").show();

    })
    //会员中心方框点击
    $(".huiyuan .tbody  th:first-child img:first-child").on("click",function(){
        if($(this).attr("src")=="img/fangkuang.png"){
            $(this).attr("src","img/fangkuang1.png");
        }else if($(this).attr("src")=="img/fangkuang1.png"){
            $(this).attr("src","img/fangkuang.png");
        }
    })
    $(".huiyuan .header  th:first-child img:first-child").on("click",function(){
        if($(this).attr("src")=="img/fangkuang.png"){
            $(this).attr("src","img/fangkuang1.png");
            $(".huiyuan  tr th:first-child img:first-child").not(this).attr("src","img/fangkuang1.png");
        }else if($(this).attr("src")=="img/fangkuang1.png"){
            $(this).attr("src","img/fangkuang.png");
            $(".huiyuan  tr th:first-child img:first-child").not(this).attr("src","img/fangkuang.png");
        }
    })
    //科室列表方框点击
    $(".keshiliebiaooo .tbody  th:first-child img:first-child").on("click",function(){
        if($(this).attr("src")=="img/fangkuang.png"){
            $(this).attr("src","img/fangkuang1.png");
        }else if($(this).attr("src")=="img/fangkuang1.png"){
            $(this).attr("src","img/fangkuang.png");
        }
    })
    $(".keshiliebiaooo .header  th:first-child img:first-child").on("click",function(){
        if($(this).attr("src")=="img/fangkuang.png"){
            $(this).attr("src","img/fangkuang1.png");
            $(".keshiliebiaooo  tr th:first-child img:first-child").not(this).attr("src","img/fangkuang1.png");
        }else if($(this).attr("src")=="img/fangkuang1.png"){
            $(this).attr("src","img/fangkuang.png");
            $(".keshiliebiaooo  tr th:first-child img:first-child").not(this).attr("src","img/fangkuang.png");
        }
        //console.log(1);
    });
    //科室列表导航点击
    $(".keshi-nav p:first-child").css({"color":"#313131","border-bottom": "none","background-color": "white"});
    $(".keshi-nav p").on("click",function(){
        n[4]=$(this).data("num");
        $(this).css({"color":"#313131","border-bottom": "none","background-color": "white"});
        $(".keshi-nav p").not(this).css({"color":"#9a9a9a","background-color": "transparent"});
        if(n[4]==31){
            $(".daishenhe").show();
            $(".tixianzhong").hide();
            $(".yiwancheng").hide();
        }else if(n[4]==32){
            $(".daishenhe").hide();
            $(".tixianzhong").show();
            $(".yiwancheng").hide();
        }else if(n[4]==33){
            $(".daishenhe").hide();
            $(".tixianzhong").hide();
            $(".yiwancheng").show();
        }
    });
    //科室列表添加添加科室
    $("#tianjiakeshiii").on("click",function(){
        $(".tianjiakeshi").show();
        $(".tianjiakeshi-con").show();
        $(".bianjichengshi-con").hide();
    });
    //科室列表二级科室点击添加
    $(".keshiliebiaooo tr:first-child th:last-child p").on("click",function(){
        $(".neike").show();
    });
    //科室列表编辑
    $(".keshiliebiaooo .tbody th:last-child p:first-child").on("click",function(){
        $(".neike").show();
    });
    //科室列表移除
    $(".keshiliebiaooo .tbody th:last-child p:last-child").on("click",function(){
        $(".sfshanchutc p").text("是否确定移除此科室");
        $(".sfshanchutc").show();
    });
    $(".k-btn img:first-child").on("mouseover",function(){
        $(this).attr("src","img/xinzeng1.png");
    });
    $(".k-btn img:first-child").on("mouseout",function(){
        $(this).attr("src","img/xinzeng.png");
    });
    //医生列表相关内容点击
    $(".y-btn img:first-child").on("mouseover",function(){
        $(this).attr("src","img/xinzeng1.png");
    });
    $(".y-btn img:nth-child(2)").on("mouseover",function(){
        $(this).attr("src","img/bianji1.png");
    });
    $(".y-btn img:nth-child(3)").on("mouseover",function(){
        $(this).attr("src","img/shanchubtn.png");
    });
    $(".y-btn img:first-child").on("mouseout",function(){
        $(this).attr("src","img/xinzeng.png");
    });
    $(".y-btn img:nth-child(2)").on("mouseout",function(){
        $(this).attr("src","img/bianji.png");
    });
    $(".y-btn img:nth-child(3)").on("mouseout",function(){
        $(this).attr("src","img/shanchubtn1.png");
    });
    $(".y-btn img:first-child").on("click",function(){
        $(".xiangqing-tc1").show();
    });
    $(".y-btn img:nth-child(2)").on("click",function(){
        $(".xiangqing-tc1").show();

    });
    $(".y-btn img:nth-child(3)").on("click",function(){
        $(".sfshanchutc p").text("是否确定删除");
        $(".sfshanchutc").show();

    });
    //医生列表方框点击
    $(".yisheng .tbody  th:first-child img:first-child").on("click",function(){
        if($(this).attr("src")=="img/fangkuang.png"){
            $(this).attr("src","img/fangkuang1.png");
        }else if($(this).attr("src")=="img/fangkuang1.png"){
            $(this).attr("src","img/fangkuang.png");
        }

        //console.log(1);
    });
    $(".yisheng .header  th:first-child img:first-child").on("click",function(){
        if($(this).attr("src")=="img/fangkuang.png"){
            $(this).attr("src","img/fangkuang1.png");
            $(".yisheng  tr th:first-child img:first-child").not(this).attr("src","img/fangkuang1.png");
        }else if($(this).attr("src")=="img/fangkuang1.png"){
            $(this).attr("src","img/fangkuang.png");
            $(".yisheng  tr th:first-child img:first-child").not(this).attr("src","img/fangkuang.png");
        }
        //console.log(1);
    });
    //文章活动相关内容点击
    $(".w-btn img:first-child").on("mouseover",function(){
        $(this).attr("src","img/xinzeng1.png");
    });
    $(".w-btn img:nth-child(2)").on("mouseover",function(){
        $(this).attr("src","img/shanchubtn.png");
    });
    $(".w-btn img:first-child").on("mouseout",function(){
        $(this).attr("src","img/xinzeng.png");
    });
    $(".w-btn img:nth-child(2)").on("mouseout",function(){
        $(this).attr("src","img/shanchubtn1.png");
    });
    $(".w-btn img:first-child").on("click",function(){
        $(".tc-shangchuanimg").show();
    })
    $(".w-btn img:nth-child(2)").on("click",function(){
        $(".sfshanchutc p").text("是否确定删除");
        $(".sfshanchutc").show();
    });
    //文章活动方框点击
    $(".wenzhang1  .tbody  th:first-child img:first-child").on("click",function(){
        if($(this).attr("src")=="img/fangkuang.png"){
            $(this).attr("src","img/fangkuang1.png");
        }else if($(this).attr("src")=="img/fangkuang1.png"){
            $(this).attr("src","img/fangkuang.png");
        }

        //console.log(1);
    });
    $(".wenzhang1  .header  th:first-child img:first-child").on("click",function(){
        if($(this).attr("src")=="img/fangkuang.png"){
            $(this).attr("src","img/fangkuang1.png");
            $(".wenzhang1   tr th:first-child img:first-child").not(this).attr("src","img/fangkuang1.png");
        }else if($(this).attr("src")=="img/fangkuang1.png"){
            $(this).attr("src","img/fangkuang.png");
            $(".wenzhang1   tr th:first-child img:first-child").not(this).attr("src","img/fangkuang.png");
        }
        //console.log(1);
    });
    //分销系统分销人员相关内容点击
    $(".f-btn img:first-child").on("mouseover",function(){
        $(this).attr("src","img/dongjieben1.png");
    });
    $(".f-btn img:nth-child(2)").on("mouseover",function(){
        $(this).attr("src","img/shanchubtn.png");
    });
    $(".f-btn img:first-child").on("mouseout",function(){
        $(this).attr("src","img/dongjiebtn.png");
    });
    $(".f-btn img:nth-child(2)").on("mouseout",function(){
        $(this).attr("src","img/shanchubtn1.png");
    });
    $(".f-btn img:first-child").on("click",function(){
        $(".sfshanchutc p").text("是否确定冻结")
        $(".sfshanchutc").show();
        //模仿示例冻结
        if($(".fenxiaorenyuan  .tbody th:first-child img:first-child").attr("src")=="img/fangkuang1.png"){
            $(".fenxiaorenyuan  .tbody th").css({"color":"#cfcece"});
            $(".fenxiaorenyuan  .tbody th:last-child select").css({"color":"#ffffff","background-color":"#cfcece"});
            $(".fenxiaorenyuan  .tbody th:last-child select").attr("disabled","disabled");
            $(".fenxiaorenyuan  .tbody th:last-child p").css({"color":"#ffffff","background-color":"#cfcece"});
            $(".fenxiaorenyuan  .tbody th:first-child img:first-child").attr("src","img/dongjiebtnnn.png");
        }
    })
    $(".f-btn img:nth-child(2)").on("click",function(){
        $(".sfshanchutc p").text("是否确定删除");
        $(".sfshanchutc").show();

    })
    //分销人员地区编辑
    $(".fx-bian").on("click",function(){
        $(".tianjiakeshi").show();
        $(".bianjichengshi-con").show();
        $(".tianjiakeshi-con").hide();
    });
//分销系统分销人员方框点击
    $(".fenxiaorenyuan   .tbody  th:first-child img:first-child").on("click",function(){
        if($(this).attr("src")=="img/fangkuang.png"){
            $(this).attr("src","img/fangkuang1.png");
        }else if($(this).attr("src")=="img/fangkuang1.png"){
            $(this).attr("src","img/fangkuang.png");
        }

        //console.log(1);
    })
    $(".fenxiaorenyuan   .header  th:first-child img:first-child").on("click",function(){
        if($(this).attr("src")=="img/fangkuang.png"){
            $(this).attr("src","img/fangkuang1.png");
            $(".fenxiaorenyuan    tr th:first-child img:first-child").not(this).attr("src","img/fangkuang1.png");
        }else if($(this).attr("src")=="img/fangkuang1.png"){
            $(this).attr("src","img/fangkuang.png");
            $(".fenxiaorenyuan    tr th:first-child img:first-child").not(this).attr("src","img/fangkuang.png");
        }
        //console.log(1);
    })
    //分销系统申请导航导航点击
    $(".fxsq-nav p:first-child").css({"color":"#313131","border-bottom": "none","background-color": "white"});
    $(".fxsq-nav p").on("click",function(){
        n[4]=$(this).data("num")
        $(this).css({"color":"#313131","border-bottom": "none","background-color": "white"});
        $(".fxsq-nav p").not(this).css({"color":"#9a9a9a","background-color": "transparent"});
        if(n[4]==311){
            $(".fx-shenqing").show();
            $(".fx-jujue").hide();
        }else if(n[4]==312){
            $(".fx-shenqing").hide();
            $(".fx-jujue").show();
        }
    });
    //分销系统我的联盟点击
    $(".l-biangeng").on("click",function(){
        if($(this).text()=="变更"){
            $(".dailiren-con").show();
            $(this).text("取消");
            $("#lianmengqd").text("保存");
        }else if($(this).text()=="取消"){
            $(".dailiren-con").hide();
            $(this).text("变更");
            $("#lianmengqd").text("确定");
        }

    });
    //分销系统申请订单方框点击
    //申请
    $(".fx-shenqing  .tbody  th:first-child img:first-child").on("click",function(){
        if($(this).attr("src")=="img/fangkuang.png"){
            $(this).attr("src","img/fangkuang1.png");
        }else if($(this).attr("src")=="img/fangkuang1.png"){
            $(this).attr("src","img/fangkuang.png");
        }

        //console.log(1);
    });
    $(".fx-shenqing  .header  th:first-child img:first-child").on("click",function(){
        if($(this).attr("src")=="img/fangkuang.png"){
            $(this).attr("src","img/fangkuang1.png");
            $(".fx-shenqing   tr th:first-child img:first-child").not(this).attr("src","img/fangkuang1.png");
        }else if($(this).attr("src")=="img/fangkuang1.png"){
            $(this).attr("src","img/fangkuang.png");
            $(".fx-shenqing   tr th:first-child img:first-child").not(this).attr("src","img/fangkuang.png");
        }
        //console.log(1);
    });
    //拒绝
    $(".fx-jujue  .tbody  th:first-child img:first-child").on("click",function(){
        if($(this).attr("src")=="img/fangkuang.png"){
            $(this).attr("src","img/fangkuang1.png");
        }else if($(this).attr("src")=="img/fangkuang1.png"){
            $(this).attr("src","img/fangkuang.png");
        }

        //console.log(1);
    });
    $(".fx-jujue  .header  th:first-child img:first-child").on("click",function(){
        if($(this).attr("src")=="img/fangkuang.png"){
            $(this).attr("src","img/fangkuang1.png");
            $(".fx-jujue   tr th:first-child img:first-child").not(this).attr("src","img/fangkuang1.png");
        }else if($(this).attr("src")=="img/fangkuang1.png"){
            $(this).attr("src","img/fangkuang.png");
            $(".fx-jujue   tr th:first-child img:first-child").not(this).attr("src","img/fangkuang.png");
        }
        //console.log(1);
    });
    //提现系统导航点击
    $(".tixian-nav p:first-child").css({"color":"#313131","border-bottom": "none","background-color": "white"});
    $(".tixian-nav p").on("click",function(){
        n[4]=$(this).data("num")
        $(this).css({"color":"#313131","border-bottom": "none","background-color": "white"});
        $(".tixian-nav p").not(this).css({"color":"#9a9a9a","background-color": "transparent"});
        if(n[4]==31){
            $(".daishenhe").show();
            $(".tixianzhong").hide();
            $(".yiwancheng").hide();
        }else if(n[4]==32){
            $(".daishenhe").hide();
            $(".tixianzhong").show();
            $(".yiwancheng").hide();
        }else if(n[4]==33){
            $(".daishenhe").hide();
            $(".tixianzhong").hide();
            $(".yiwancheng").show();
        }
    });
    //提现系统方框点击
    //待审核
    $(".daishenhe  .tbody  th:first-child img:first-child").on("click",function(){
        if($(this).attr("src")=="img/fangkuang.png"){
            $(this).attr("src","img/fangkuang1.png");
        }else if($(this).attr("src")=="img/fangkuang1.png"){
            $(this).attr("src","img/fangkuang.png");
        }

        //console.log(1);
    });
    $(".daishenhe  .header  th:first-child img:first-child").on("click",function(){
        if($(this).attr("src")=="img/fangkuang.png"){
            $(this).attr("src","img/fangkuang1.png");
            $(".daishenhe   tr th:first-child img:first-child").not(this).attr("src","img/fangkuang1.png");
        }else if($(this).attr("src")=="img/fangkuang1.png"){
            $(this).attr("src","img/fangkuang.png");
            $(".daishenhe   tr th:first-child img:first-child").not(this).attr("src","img/fangkuang.png");
        }
        //console.log(1);
    });
    //提现中
    $(".tixianzhong  .tbody  th:first-child img:first-child").on("click",function(){
        if($(this).attr("src")=="img/fangkuang.png"){
            $(this).attr("src","img/fangkuang1.png");
        }else if($(this).attr("src")=="img/fangkuang1.png"){
            $(this).attr("src","img/fangkuang.png");
        }

        //console.log(1);
    });
    $(".tixianzhong  .header  th:first-child img:first-child").on("click",function(){
        if($(this).attr("src")=="img/fangkuang.png"){
            $(this).attr("src","img/fangkuang1.png");
            $(".tixianzhong   tr th:first-child img:first-child").not(this).attr("src","img/fangkuang1.png");
        }else if($(this).attr("src")=="img/fangkuang1.png"){
            $(this).attr("src","img/fangkuang.png");
            $(".tixianzhong   tr th:first-child img:first-child").not(this).attr("src","img/fangkuang.png");
        }
        //console.log(1);
    });
    //已完成
    $(".yiwancheng  .tbody  th:first-child img:first-child").on("click",function(){
        if($(this).attr("src")=="img/fangkuang.png"){
            $(this).attr("src","img/fangkuang1.png");
        }else if($(this).attr("src")=="img/fangkuang1.png"){
            $(this).attr("src","img/fangkuang.png");
        }

        //console.log(1);
    });
    $(".yiwancheng  .header  th:first-child img:first-child").on("click",function(){
        if($(this).attr("src")=="img/fangkuang.png"){
            $(this).attr("src","img/fangkuang1.png");
            $(".yiwancheng   tr th:first-child img:first-child").not(this).attr("src","img/fangkuang1.png");
        }else if($(this).attr("src")=="img/fangkuang1.png"){
            $(this).attr("src","img/fangkuang.png");
            $(".yiwancheng   tr th:first-child img:first-child").not(this).attr("src","img/fangkuang.png");
        }
        //console.log(1);
    });
    //弹窗点击
    //会员中心UID内容点击
    $(".huiyuan  .tbody  th:first-child span:nth-child(2)").on("click",function(){
        $(".fxiao-gexintc").show();
        //$(".gxtanchuang").show();
        //$(".tc-cont1").show();
        //$(".tc-cont").hide();
        //$(".tc-cont .nav").hide();
        //$(".huiyuan-till").show();
        //$(".huiyuan-tan").hide();
        //$(".other-tan").show();


    });
    //会员冻结UID内容点击
    $(".dongjie-con  .tbody  th:first-child span:nth-child(1)").on("click",function(){
        $(".fxiao-gexintc").show();
        //$(".tc-cont1").show();
        //$(".tc-cont").hide();
        //$(".huigeren").show();
        //$(".zhangdd").hide();
        //$(".tc-cont .nav").hide();
        //$(".huiyuan-till").show();
        //$(".huiyuan-tan").hide();
        //$(".other-tan").show();
    });
    //会员中心取消冻结点击
    $(".dongjie-con   .tbody  th:nth-child(8) p").on("click",function(){
         console.log(1);
        $(".sfshanchutc p").text("是否取消冻结");
        $(".sfshanchutc").show();
    });
    //全部订单订单号点击
    $(".quanbudingdan   .qd-tbody  th:first-child span:nth-child(1)").on("click",function(){
        console.log(1);
        $(".xiangqing-tc").show();
        $(".xq1").show();
    })
    //预约订单订单号点击
    $(".yuyuedingdan    .qd-tbody  th:first-child span:nth-child(1)").on("click",function(){
        $(".xiangqing-tc").show();
        $(".xq1").show();
    })
    //预约订单变更点击
    $(".yuyuedingdan  .qd-tbody  th:last-child p").on("click",function(){
        $(".yuyuesj").show();
    })
    //退款订单订单号点击
    $(".tuikuandingdan    .qd-tbody  th:first-child span:nth-child(1)").on("click",function(){
        $("#zhuangtai").text("审核中");
        $(".xiangqing-tc").show();
        $(".tuikuan").show();
    })
     //退款订单同意拒绝
    $(".tuikuandingdan    .qd-tbody  th:last-child p:nth-child(1)").on("click",function(){
        $(".sfshanchutc p").text("是否拒绝退款");
        $(".sfshanchutc").show();
    })
    $(".tuikuanzhong     .qd-tbody  th:last-child p:nth-child(1)").on("click",function(){
        $(".sfshanchutc p").text("是否同意退款");
        $(".sfshanchutc").show();
    })
    $(".tuikuandingdan    .qd-tbody  th:last-child p:nth-child(2)").on("click",function(){
        $(".sfshanchutc p").text("是否同意退款");
        $(".sfshanchutc").show();
    })
    //退款中订单订单号点击
    $(".tuikuanzhong     .qd-tbody  th:first-child span:nth-child(1)").on("click",function(){
        $("#zhuangtai").text("退款中");
        $(".xiangqing-tc").show();
        $(".tuikuan").show();
    })
    //已退款订单订单号点击
    $(".tuikuanwancheng     .qd-tbody  th:first-child span:nth-child(1)").on("click",function(){
        $("#zhuangtai").text("已完成");
        $(".xiangqing-tc").show();
        $(".tuikuan").show();
    })
    //已拒绝退款订单订单号点击
    $(".tuikuanjujue     .qd-tbody  th:first-child span:nth-child(1)").on("click",function(){
        $("#zhuangtai").text("已拒绝");
        $(".xiangqing-tc").show();
        $(".tuikuan").show();
    })
    //消息内容点击
    $(".xiaoxi-con .xc span:first-child").on("click",function(){
        $(".yueding").show();

    })
    //文章活动内容点击
    $(".wenzhang1      .tbody  th:first-child span:nth-child(2)").on("click",function(){
        $(".xiangqing-tc").show();
        $(".wenzhang").show();
    })
   //文章活动编辑点击
    $(".wenzhang1      .tbody  th:last-child p").on("click",function(){
        $(".tc-shangchuanimg").show();
    })
    //分销系统内容点击
    $(".fx-shenqing   .tbody  th:first-child span:nth-child(2)").on("click",function(){
        $(".gxtanchuang").show();
        //$(".tc-cont").show();
        //$(".tc-cont1").hide();

        //$(".tc-cont .nav").show();
        //$(".huiyuan-till").hide();
        //$(".huiyuan-tan").show();
        //$(".other-tan").hide();
    })
    $(".fx-jujue  .tbody  th:first-child span:nth-child(2)").on("click",function(){
        $(".gxtanchuang").show();
        //$(".tc-cont").show();
        //$(".tc-cont1").hide();
    })
    $(".fenxiaorenyuan      .tbody  th:first-child span:nth-child(2)").on("click",function(){
        $(".gxtanchuang").show();
        //$(".tc-cont").show();
        //$(".tc-cont1").hide();
    })
    //分销系统分销人员编辑
    $(".fenxiaorenyuan   .fx-bian").on("click",function(){
        //$(".gxtanchuang").show();
    })
    //分销系统联盟点击
    $(".fenxiaorenyuan  .tbody th:last-child p").on("click",function(){
        $(".xiangqing-tc").show();
        $(".lianmeng").show();
    })
    //分销系统身份变更点击
    $(".fenxiaorenyuan  .tbody th:last-child select").on("change",function(){
        $(".sfshanchutc p").text("身份变更成功");
        $(".sfshanchutc").show();
    })
    //分销系统申请订单同意或拒绝按钮点击
    $(".fx-shenqing      .tbody  th:last-child p:nth-child(1)").on("click",function(){
        $(".sfshanchutc p").text("是否同意申请");
        $(".sfshanchutc").show();
    })
    $(".fx-shenqing      .tbody  th:last-child p:nth-child(2)").on("click",function(){
        $(".sfshanchutc p").text("是否拒绝申请");
        $(".sfshanchutc").show();
    })
    //分销系统申请订单拒绝确定按钮点击
    $(".fx-jujue     .tbody  th:last-child p:nth-child(1)").on("click",function(){
        $(".sfshanchutc p").text("是否确定拒绝申请");
        $(".sfshanchutc").show();
    })
    //提现系统同意按钮点击
    $(".daishenhe     .tbody  th:last-child p:nth-child(1)").on("click",function(){
        $(".sfshanchutc p").text("是否同意提现");
        $(".sfshanchutc").show();
    })
    //提现系统结算取消按钮点击
    $(".tixianzhong      .tbody  th:last-child p:nth-child(1)").on("click",function(){
        $(".sfshanchutc p").text("是否确定结算");
        $(".sfshanchutc").show();
    })
    $(".tixianzhong      .tbody  th:last-child p:nth-child(2)").on("click",function(){
        $(".sfshanchutc p").text("是否取消结算");
        $(".sfshanchutc").show();
    })
    //权限系统等级变更点击
    $(".guannliyuanliebiao       .qd-tbody  th:nth-child(5) select").on("change",function(){
        $(".sfshanchutc p").text("是否确定变更管理员级别");
        $(".sfshanchutc").show();
    })
    $(".guannliyuanliebiao       .qd-tbody  th:last-child p").on("click",function(){
        $(".sfshanchutc p").text("是否确定移除此管理员");
        $(".sfshanchutc").show();
    })
    //提现系统用户名点击
    $(".tixian   .tbody  th:first-child span:nth-child(2)").on("click",function(){
        $(".gxtanchuang").show();
        //$(".tc-cont1").show();
        //$(".tc-cont").hide();
    })
    //医生列表科室，等级下拉点击
    $("#keshi").on("click",function(){
        //$("#keshi option:first-child").hide();
        $("#keshitxt").text($(this).find('option:selected').text());
    })
    $("#keshi").on("change",function(){
        //$("#keshi option:first-child").hide();
        $("#keshitxt").text($(this).find('option:selected').text());
    })
    $("#yishengjiebie").on("click",function(){
        //$("#keshi option:first-child").hide();
        $("#yishengjiebietxt").text($(this).find('option:selected').text());
    })
    $("#yishengjiebie").on("change",function(){
        //$("#keshi option:first-child").hide();
        $("#yishengjiebietxt").text($(this).find('option:selected').text());
    })
    //分销人员身份变更点击
    $(".shenfen").on("click",function(){
        console.log($(this).parent().parent().find("p:first-child"))
        $(this).parent().parent().find("p:first-child").text($(this).find('option:selected').text());
        //$(".shenfen option:first-child").hide();
    })
    $(".shenfen").on("chnage",function(){
        console.log($(this).parent().parent().find("p:first-child"))
        $(this).parent().parent().find("p:first-child").text($(this).find('option:selected').text());
        //$(".shenfen option:first-child").hide();
    })
    $(".shenfen").on("mouseover",function(){
        $(this).parent().parent().find("p:first-child").css({"color":"#ffffff","background-color":"#cfcece"});
    })
    $(".shenfen").on("mouseout",function(){
        $(this).parent().parent().find("p:first-child").css({"color":"#009bd5","background-color":"#ffffff"});
    })
    //管理员等级变更下拉点击
    $(".dengjibian").on("click",function(){
        //$(".dengjibian option:first-child").hide();
    })
    $("#zhuangtaii").on("click",function(){

         //$("#zhuangtaii option:first-child").hide();
    })
    $("#zhuangtaii1").on("click",function(){
         //$("#zhuangtaii1 option:first-child").hide();
    })

    //权限设置设置按钮
    $("#sehzhi1").on("click",function(){
        $(".qxshezhi-right").show();
    })
    $("#sehzhi2").on("click",function(){
        $(".qxshezhi-right").show();
    })
    $("#sehzhi3").on("click",function(){
        $(".qxshezhi-right").show();
    })
    $("#qxsh-shanchu1").on("click",function(){
        $(".sfshanchutc p").text("是否确定删除该级别管理员");
        $(".sfshanchutc").show();
    })
    $("#qxsh-shanchu2").on("click",function(){
        $(".sfshanchutc p").text("是否确定删除该级别管理员");
        $(".sfshanchutc").show();
    })
//下拉提示字点击消息
    $("#zhuangtaii1").on("click",function(){
        $("#zhuangtaii1txt").text($(this).find('option:selected').text());
        //$(this).prev().text("");
    })

    $("#zhuangtaii1").on("change",function(){
        $("#zhuangtaii1txt").text($(this).find('option:selected').text());
        //$(this).prev().text("");
    })
    $("#zhuangtaii").on("click",function(){
        console.log($(this).find('option:selected').text())
        $("#zhuangtaiitxt").text($(this).find('option:selected').text());
        //$(this).prev().text("");
    })
    $("#zhuangtaii").on("change",function(){
        console.log($(this).find('option:selected').text())
        $("#zhuangtaiitxt").text($(this).find('option:selected').text());
        //$(this).prev().text("");
    })
    $("#jibieqq").on("click",function(){
        console.log($(this).find('option:selected').text())
        $("#jibieqqtxt").text($(this).find('option:selected').text());
        //$(this).prev().text("");
    })
    $("#jibieqq").on("change",function(){
        console.log($(this).find('option:selected').text())
        $("#jibieqqtxt").text($(this).find('option:selected').text());
        //$(this).prev().text("");
    })
    $("#jibieqq1").on("click",function(){
        console.log($(this).find('option:selected').text())
        $("#jibieqqtxt1").text($(this).find('option:selected').text());
        //$(this).prev().text("");
    })
    $("#jibieqq1").on("change",function(){
        console.log($(this).find('option:selected').text())
        $("#jibieqqtxt1").text($(this).find('option:selected').text());
        //$(this).prev().text("");
    })
    $("#fx-jb").on("click",function(){
        console.log($(this).find('option:selected').text())
        $("#fx-jbtxt").text($(this).find('option:selected').text());
        //$(this).prev().text("");
    })
    $("#fx-jb").on("change",function(){
        console.log($(this).find('option:selected').text())
        $("#fx-jbtxt").text($(this).find('option:selected').text());
        //$(this).prev().text("");
    })
    $("#fx-jb1").on("click",function(){
        console.log($(this).find('option:selected').text())
        $("#fx-jbtxt1").text($(this).find('option:selected').text());
        //$(this).prev().text("");
    })
    $("#fx-jb1").on("change",function(){
        console.log($(this).find('option:selected').text())
        $("#fx-jbtxt1").text($(this).find('option:selected').text());
        //$(this).prev().text("");
    })
    $("#jibieqq2").on("click",function(){
        console.log($(this).find('option:selected').text())
        $("#jibieqqtxt2").text($(this).find('option:selected').text());
        //$(this).prev().text("");
    })
    $("#jibieqq2").on("change",function(){
        console.log($(this).find('option:selected').text())
        $("#jibieqqtxt2").text($(this).find('option:selected').text());
        //$(this).prev().text("");
    })
    $("#jibieqq3").on("click",function(){
        console.log($(this).find('option:selected').text())
        $("#jibieqqtxt3").text($(this).find('option:selected').text());
        //$(this).prev().text("");
    })
    $("#jibieqq3").on("change",function(){
        console.log($(this).find('option:selected').text())
        $("#jibieqqtxt3").text($(this).find('option:selected').text());
        //$(this).prev().text("");
    })
    $("#jibieqq4").on("click",function(){
        console.log($(this).find('option:selected').text())
        $("#jibieqqtxt4").text($(this).find('option:selected').text());
        //$(this).prev().text("");
    })
    $("#jibieqq4").on("change",function(){
        console.log($(this).find('option:selected').text())
        $("#jibieqqtxt4").text($(this).find('option:selected').text());
        //$(this).prev().text("");
    })
    //权限列表身份变更点击
    $(".dengjibian").on("click",function(){
        console.log($(this).parent().parent().find("p:first-child"))
        $(this).parent().find("span:first-child").text($(this).find('option:selected').text());
        //$(".shenfen option:first-child").hide();
    })
    $(".dengjibian").on("chnage",function(){
        console.log($(this).parent().parent().find("p:first-child"))
        $(this).parent().find("span:first-child").text($(this).find('option:selected').text());
        //$(".shenfen option:first-child").hide();
    })
    $(".dengjibian").on("mouseover",function(){
        $(this).parent().find("span:nth-child(2)").css({"color":"#ffffff","background-color":"#cfcece"});
    })
    $(".dengjibian").on("mouseout",function(){
        $(this).parent().find("span:nth-child(2)").css({"color":"#009bd5","background-color":"#ffffff"});
    })
     //退出按钮
    $(".t-btn").on("click",function(){
        location.href="../houtai123/denglu.html";
    })
    //控制左侧导航栏高度
    var num;
    $(window).scroll(function(){
        //下面这句主要是获取网页的总高度，主要是考虑兼容性所以把Ie支持的documentElement也写了，这个方法至少支持IE8
        var htmlHeight=document.body.scrollHeight||document.documentElement.scrollHeight;
        //clientHeight是网页在浏览器中的可视高度，
        var clientHeight=document.body.clientHeight||document.documentElement.clientHeight;
        //scrollTop是浏览器滚动条的top位置，
        var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
        //通过判断滚动条的top位置与可视网页之和与整个网页的高度是否相等来决定是否加载内容；
        console.log("000",scrollTop+clientHeight);
        console.log("111",htmlHeight);
        if(scrollTop+clientHeight<=htmlHeight){
            num=scrollTop+clientHeight-75;
            $(".l-nav").height(num);
            $(".l-nav").css({"min-height":"100%"})
        }
    });
});
