//	个人信息滑动门
	$(function(){
		$(".navli").each(function(index){
			var navli=$(".navli").eq(index);
		 	navli.on("click",qiehuan);
		})
		function qiehuan(){
			var navli=this;
			var navxh=navli.dataset.gxxh;
			xianshi(navxh)
		}
		function xianshi(navxh){
			var navxh=navxh;
			var divcont=$(".li-div");
			var linav=$(".navli");
			for (var i=0;i<divcont.length;i++) {
				if (navxh==i) {
					divcont[i].style.display="block";
					linav[i].className="navli liact";
				} else{
					divcont[i].style.display="none";
					linav[i].className="navli";
				}
			}
		}
		//点击确定关闭弹窗
		$("#gxqding").bind("click",guanbi)
		function guanbi(){
			$(".gxtanchuang").css("display","none");

		}
		$("#gxqdingg").bind("click",guanbi)
		function guanbi(){
			$(".gxtanchuang").css("display","none");

		}
		$("#gxqding1").bind("click",guanbi)
		function guanbi(){
			$(".gxtanchuang").css("display","none");

		}
		$("#gxqding2").bind("click",guanbi)
		function guanbi(){
			$(".gxtanchuang").css("display","none");
		}
		//判断账单类型是提现时	
		$(".zdleixing").each(function(index){
			if($(".zdleixing").eq(index).text()=="提现") {
				$(".zdjine").eq(index).css("color","#666666")
			} 
		})
//		点击账单列表,关闭账单,打开该账单详情
		$(".zhangdan").on("click",function(){
			$(".zdliebiaodiv").css("display","none");
			$(".zdxiangqing").css("display","block");
		})
		$("#gxfanhui2").on("click",function(){
			$(".zdliebiaodiv").css("display","block");
			$(".zdxiangqing").css("display","none");
		})
		$(".qxerweimali").eq(0).on("click",function(){
			$(".xinxi-ct").eq(0).css("display","none");
			$(".gxerwmxq").eq(0).css("display","block");
		})
		$(".qxerweimali").eq(1).on("click",function(){
			$(".xinxi-ct").eq(1).css("display","none");
			$(".gxerwmxq").eq(1).css("display","block");
		})
		$("#gxqding3").on("click",function(){
			$(".xinxi-ct").css("display","block");
			$(".gxerwmxq").css("display","none");
		})
		
		$("#gxqding5").on("click",function(){
			$(".fxiao-gexintc").css("display","none");
		})
		$("#gxqding6").on("click",function(){
			$(".gxerwmxq").css("display","none");
			$(".xinxi-ct").css("display","block");
		})
		
		//是否删除弹窗  
		$("#scqueding").bind("click",function(){
			$(".sfshanchutc").css("display","none");
		})
		$("#scquxiao").bind("click",function(){
			$(".sfshanchutc").css("display","none");
		})
		//是否冻结弹窗  
		$("#djqueding").bind("click",function(){
			$(".sfdongjietc").css("display","none");
		})
		$("#djquxiao").bind("click",function(){
			$(".sfdongjietc").css("display","none");
		})
		
		//详情确定按钮关闭弹窗 
		$("#xiangqingqd").bind("click",function(){
			$(".xiangqing-tc").css("display","none");
			$(".xq1").css("display","none");
		})
//		$(".xiangqing-tc")  详情和退款背景弹窗
//		$(".xq1")	详情内容
//		$(".tuikuan") 退款内容
		//根据退款状态出现按钮
//		(function anniu(){
			
//		}())		
//		$("#zhuangtai").text()==""
		//审核中确定按钮
		$("#tuiqianqd").bind("click",function(){
			$(".xiangqing-tc").css("display","none");
			$(".tuikuan").css("display","none");
			$(".tuiqian").css("display","none");
			$(".tuizhong").css("display","none");
		})
		//退款中确定按钮和取消
		$("#tkqueding").bind("click",function(){
			$(".xiangqing-tc").css("display","none");
			$(".tuikuan").css("display","none");
			//$(".tuiqian").css("display","none");
			//$(".tuizhong").css("display","none");
		})
		$("#tkquxiao").bind("click",function(){
			$(".xiangqing-tc").css("display","none");
			$(".tuikuan").css("display","none");
			//$(".tuiqian").css("display","none");
			//$(".tuizhong").css("display","none");
		})
		$("#xiaoxixiang").bind("click",function(){
			$(".yueding").css("display","none");
			//$(".tuiqian").css("display","none");
			//$(".tuizhong").css("display","none");
		})
		
//		文章确定
		$("#wenzhangqd").bind("click",function(){
			$(".xiangqing-tc").css("display","none");
			$(".wenzhang").css("display","none");
		})
		//联盟确定
		$("#lianmengqd").bind("click",function(){
			$(".xiangqing-tc").css("display","none");
			$(".lianmeng").css("display","none");
			if($(this).text()=="保存"){
				$(".dailiren-con").hide();
				$(this).text("确定");
				$(".l-biangeng").text("变更");
			}
		})
		var daohang=document.getElementById("daohang");
		var lis=daohang.getElementsByTagName("li");
		for (var i=0;i<lis.length;i++) {
			lis[i].style.height=16.5+"px";
		}
//		医生表单
		$("#ysqueding").bind("click",function(){
			$(".xiangqing-tc1").css("display","none");
		})
		$("#ysquxiao").bind("click",function(){
			$(".xiangqing-tc1").css("display","none");
		})
//		添加科室
		$("#tjkeshiqd").bind("click",function(){
			$(".tianjiakeshi").css("display","none");
		})
		$("#tjkeshiqx").bind("click",function(){
			$(".tianjiakeshi").css("display","none");
		})
//		内科
		$("#neikeqd").bind("click",function(){
			$(".neike").css("display","none");
		})
		$("#neikeqx").bind("click",function(){
			$(".neike").css("display","none");
		})
//		约定成功
		$("#yuedingqd").bind("click",function(){
			$(".yueding").css("display","none");
		})
//		预约时间
		$("#yuyuesjqd").bind("click",function(){
			$(".yuyuesj").css("display","none");
		})
		$("#yuyuesjqx").bind("click",function(){
			$(".yuyuesj").css("display","none");
		})
//		时间插件
		//new YMDselect('year1','month1');
		//new YMDselect('year1','month1',1990);
		//new YMDselect('year1','month1',1990,2);
		//new YMDselect('year1','month1','day1');
//		new YMDselect('year1','month1','day1');
		//new YMDselect('year1','month1','day1',1990,2);
		//new YMDselect('year1','month1','day1',1990,2,10);
//		上传图片
		$("#tcshangchuanqd").bind("click",function(){
			$(".tc-shangchuanimg").css("display","none");
		})
		$("#tcshangchuanqx").bind("click",function(){
			$(".tc-shangchuanimg").css("display","none");
		})
	})
