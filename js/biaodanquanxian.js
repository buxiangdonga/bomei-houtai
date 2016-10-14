//兼容问题

//	点击消息框 关闭此区域,打开消息区域
$("#xiaoxi-tiaozhuang").bind("click", function () {
    $(".qxbiaodan").css("display", "none");
})
$("#qxbd-guanbi").bind("click", function () {
    $(".qxbd-xiaoxi").css("display", "none");
})
//		表单验证
//		var qxbdform=document.getElementsByClassName("qxbdform")[0];
var qxbdform = $(".qxbdform").get(0);
var qxbdinput = $("input");
var yzhengimg = $(".yzhengimg");
var yztishi = $(".yztishi");
//		姓名验证
qxbdinput.get(0).onblur = function () {
    if (!qxbdinput.get(0).value == "") {
        yzhengimg.get(0).src = "img/yanzhengzhengqueqw.png"
    }
}
//		手机号验证
qxbdinput.get(1).onblur = function () {
    if (/^1[34578]\d{9}$/.test(qxbdinput.get(1).value)) {
        yzhengimg.get(1).src = "img/yanzhengzhengqueqw.png"
        yztishi.get(0).innerHTML = ""
    } else if (qxbdinput.get(1).value == "") {
        yzhengimg.get(1).src = "img/yanzhengcuowu23423.png"
        yztishi.get(0).innerHTML = "手机号不能为空"
        return false
    } else {
        yzhengimg.get(1).src = "img/yanzhengcuowu23423.png"
        yztishi.get(0).innerHTML = "您输入的手机号码格式有误"
        return false
    }
}
//		身份证验证
qxbdinput.get(2).onblur = function () {
    var isIDCard1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    if (isIDCard1.test(qxbdinput.get(2).value)) {
        yzhengimg.get(2).src = "img/yanzhengzhengqueqw.png"
        yztishi.get(1).innerHTML = ""
    } else if (qxbdinput.get(2).value == "") {
        yzhengimg.get(2).src = "img/yanzhengcuowu23423.png"
        yztishi.get(1).innerHTML = "身份证号不能为空"
        return false
    } else {
        yzhengimg.get(2).src = "img/yanzhengcuowu23423.png"
        yztishi.get(1).innerHTML = "您输入的身份证号码格式有误"
        return false
    }
}
//		用户名验证   需要后台判断
//		qxbdinput[3].onblur=function(){
//			var yonghuming
//			if (yonghuming.test(qxbdinput[3].value)) {
//				yzhengimg[3].src="img/yanzhengzhengqueqw.png"
//			}else{
//				yzhengimg[3].src="img/yanzhengcuowu23423.png"
//				yztishi[2].innerHTML="用户名已存在"
//			}
//		}
//		密码验证
qxbdinput.get(4).onblur = function () {
    if (qxbdinput.get(4).value.length > 5 & /\d+[a-zA-Z]+[-`=\\\[\];',./~!@#$%^&*()_+|{}:"<>?]/.test(qxbdinput[4].value)) {
        yzhengimg.get(4).src = "img/mimadejigao.png";
        yztishi.get(3).innerHTML = "您输入的密码安全级别高";
        yztishi.get(3).style.color = "#6fbf60";
    } else if (qxbdinput.get(4).value.length > 5 & /\d+[a-zA-Z]+/.test(qxbdinput.get(4).value)) {
        yzhengimg.get(4).src = "img/mimadengjizhong.png";
        yztishi.get(3).innerHTML = "您输入的密码安全级别为中";
        yztishi.get(3).style.color = "#dbc758";
    } else if (qxbdinput.get(4).value.length > 5 & /\d+/.test(qxbdinput.get(4).value)) {
        yzhengimg.get(4).src = "img/mimadengjidi.png";
        yztishi.get(3).innerHTML = "您输入的密码安全级别低";
        yztishi.get(3).style.color = "#b7d5f7";
    } else if (qxbdinput.get(4).value.length == "") {
        yzhengimg.get(4).src = "img/yanzhengcuowu23423.png";
        yztishi.get(3).innerHTML = "密码不能为空";
        yztishi.get(3).style.color = "red";
        return false
    } else if (qxbdinput.get(4).value.length < 6) {
        yzhengimg.get(4).src = "img/yanzhengcuowu23423.png";
        yztishi.get(3).innerHTML = "密码长度不能少于6位";
        yztishi.get(3).style.color = "red";
        return false
    }
}
//		确认密码验证
qxbdinput.get(5).onblur = function () {
    if (qxbdinput.get(5).value == qxbdinput.get(4).value) {
        yzhengimg.get(5).src = "img/yanzhengzhengqueqw.png"
        yztishi.get(4).innerHTML = ""
    } else if (qxbdinput.get(5).value == "") {
        yzhengimg.get(5).src = "img/yanzhengcuowu23423.png"
        yztishi.get(4).innerHTML = "确认密码不能为空"
        return false
    } else {
        yzhengimg.get(5).src = "img/yanzhengcuowu23423.png"
        yztishi.get(4).innerHTML = "两次密码输入不一致"
        return false
    }
}
//		邮箱验证
qxbdinput.get(6).onblur = function () {
    if (/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(qxbdinput.get(6).value)) {
        yzhengimg.get(6).src = "img/yanzhengzhengqueqw.png"
        yztishi.get(5).innerHTML = ""
    } else if (qxbdinput.get(6).value == "") {
        yzhengimg.get(6).src = "img/yanzhengcuowu23423.png"
        yztishi.get(5).innerHTML = "邮箱地址不能为空"
        return false
    } else {
        yzhengimg.get(6).src = "img/yanzhengcuowu23423.png"
        yztishi.get(5).innerHTML = "您输入的邮箱地址格式有误"
        return false
    }
}
//		验证码验证


var cheboxs = $(".qxcheck");
var checkimgs = $(".qxcheckimg");
for (var i = 0; i < cheboxs.length; i++) {
    var checkinput = cheboxs.get(i);
    checkinput.onclick = function () {
        var qxcheck = this;
        //var qxcheckFuji=qxcheck.parentNode;
        var checkimg = $(this).next("img").get(0);
        //qxcheckFuji.getElementsByTagName("img")[0];
        if (!qxcheck.checked) {
            checkimg.src = "img/fangkuang.png";
        } else {
            checkimg.src = "img/fangkuang1.png";
        }
    }
}
var qxgouxuan1 = $(".qx-gouxuan").get(0);
var qxgx = true;
qxgouxuan1.onclick = function () {
    if (qxgx) {
        this.src = "img/fangkuang1.png";
        qxgx = false;
        for (var i = 0; i < 7; i++) {
            cheboxs.get(i).checked = "checked";
            var checkimgs = $(".qxcheckimg");
            //cheboxs[i].parentNode.getElementsByTagName("img")[0];
            checkimgs.get(i).src = "img/fangkuang1.png";
        }
    } else {
        this.src = "img/fangkuang.png";
        qxgx = true;
        for (var i = 0; i < 7; i++) {
            cheboxs.get(i).checked = "";
            var checkimgs = $(".qxcheckimg");
            checkimgs.get(i).src = "img/fangkuang.png";
        }
    }
}

var qxgouxuan2 = $(".qx-gouxuan").get(1);
var qxgx1 = true;
qxgouxuan2.onclick = function () {
    if (qxgx1) {
        this.src = "img/fangkuang1.png";
        qxgx1 = false;
        for (var i = 7; i < 9; i++) {
            cheboxs.get(i).checked = "checked";
            var checkimgs1 = $(".qxcheckimg");
            checkimgs1.get(i).src = "img/fangkuang1.png";
        }
    } else {
        this.src = "img/fangkuang.png";
        qxgx1 = true;
        for (var i = 7; i < 9; i++) {
            cheboxs.get(i).checked = "";
            var checkimgs1 = $(".qxcheckimg");
            checkimgs1.get(i).src = "img/fangkuang.png";
        }
    }
}

var qxgouxuan3 = $(".qx-gouxuan").get(3);
//console.log(qxgouxuan3)
var qxgx3 = true;
qxgouxuan3.onclick = function () {
    if (qxgx3) {
        this.src = "img/fangkuang1.png";
        qxgx3 = false;
        for (var i = 9; i < 12; i++) {
            cheboxs.get(i).checked = "checked";
            var checkimgs2 = $(".qxcheckimg");
            checkimgs2.get(i).src = "img/fangkuang1.png";
        }
    } else {
        this.src = "img/fangkuang.png";
        qxgx3 = true;
        for (var i = 9; i < 12; i++) {
            cheboxs.get(i).checked = "";
            var checkimgs2 = $(".qxcheckimg");
            checkimgs2.get(i).src = "img/fangkuang.png";
        }
    }
}

