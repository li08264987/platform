var noticeVarObj = {
	isLeader: -1,
	flag: 0,
	weiduNum: 0,
	page: 1,
	pageSize:10,
	xxtype: 1,
	preCid: 0,
	tasklist: [],
	userlist: [],
	noticeWebsocket: null,
	noticeWebsocketName: "noticeWebSocket",
	rePushCode:"",
	dd_websocket:null,
	dd_websocket_name:"zhuanfatophone_websocket",
	websocket_xx_state: 1
};
$(function(){
	setInterval(function(){
		noticeVarObj.page=1;
		$("#allList").html("");
		getNoReadCount(); 
		if(noticeVarObj.xxtype===1){
			getXiaoXi();
		}else if(noticeVarObj.xxtype===2){
			getFaSong();
		}else if(noticeVarObj.xxtype===3){
			getTuiSong();
		}else if(noticeVarObj.xxtype===4){
			getHuiZhi();
		}else if(noticeVarObj.xxtype===5){
			getWanCheng();
		}},
		60000);
	getNoReadCount();
	$("#notice").click(function() {
		noticeVarObj.xxtype=1;
		noticeVarObj.page=1;
		noticeVarObj.preCid=1;
		noticeDetailPanelInit();
	});
	noticeWebSocketInit();
	zhuanfatophone_WebSocket();
	yingjiWebSocketInit();
});
function noticeDetailPanelInit(){
	layui.use('layer', function() {
		var layer = layui.layer;
		layer.open({
			type : 1,
			title : "消息列表",
			content : 
					'<div class="refresh-btn" >\n' +
					'<div class="btn-group">'+
						'<button class="btn btn-default" data-id="1">已接收调度令</button>'+
						'<button class="btn btn-default" data-id="2">已发送调度令</button>'+
						'<button class="btn btn-default" data-id="3">接收的推送</button>'+
						'<button class="btn btn-default" data-id="4">接收的回执</button>'+
						'<button class="btn btn-default" data-id="5">完成的调度令</button>'+
					'</div>'+
					'<button class="btn btn-default intertiveBtn thtfButton_normal" id="refresh" style="width:120px;height:32px;position: relative;float: right; right: 20px;color: white;background-color: #005aff;">刷新消息</button>'+ 
                    '</div>'+
					"<div id='allList' style='height: 0;flex-grow: 1;flex-shrink: 1;overflow: auto;'>" + "</div>",
			resize : true,
			maxmin : true,
			skin : 'thtfLayer_normal',
			full : function() {
			},
			restore : function() {
			},
			area : [ '900px', '600px' ],
			success : function() {
				getXiaoXi();
				$(".layui-layer-content").css("height","558px");
                $(".layui-layer-content").css("width","900px");
                $(".layui-layer-content").css("display","flex");
                $(".layui-layer-content").css("flex-direction","column");
				$("#allList").scroll(function(){
					 var viewH =$(this).height();
					 var contentH =$(this).get(0).scrollHeight;
					 var scrollTop =$(this).scrollTop();
					 if(scrollTop/(contentH -viewH)>=0.95){
						 noticeVarObj.page++;
						 if(noticeVarObj.xxtype===1){
								getXiaoXi();
							}else if(noticeVarObj.xxtype===2){
								getFaSong();
							}else if(noticeVarObj.xxtype===3){
								getTuiSong();
							}else if(noticeVarObj.xxtype===4){
								getHuiZhi();
							}else if(noticeVarObj.xxtype===5){
								getWanCheng();
							}
			        }
				});
				$('input[type=radio][name=typeradio]').change(function () {
					$("#allList").html("");
					noticeVarObj.page=1;
                    value = this.value;
                    if(value+""==="jieshou"){
						noticeVarObj.xxtype = 1;
                    	getXiaoXi();
                    }else if(value+""==="fasong"){
						noticeVarObj.xxtype = 2;
                    	getFaSong();
                    }else if(value+""==="tuisong"){
						noticeVarObj.xxtype = 3;
                    	getTuiSong();
                    }else if(value+""==="huizhi"){
						noticeVarObj.xxtype = 4;
                    	getHuiZhi();
                    }else if(value+""==="wancheng"){
						noticeVarObj.xxtype = 5;
                    	getWanCheng();
                    }
                });
				$(".btn-group .btn:first").addClass("btn-active");
				$(".btn-group .btn").click(function (e) {
		            if (noticeVarObj.preCid+"" !== e.currentTarget.dataset.id+"") {
						noticeVarObj.preCid = parseInt(e.currentTarget.dataset.id);
		            	$(".btn-group").children().removeClass("btn-active");
		            	$("#allList").html("");
						noticeVarObj.page=1;
	                    if(noticeVarObj.preCid+""==="1"){
	                    	$(".btn-group .btn:first").addClass("btn-active");
							noticeVarObj.xxtype = 1;
	                    	getXiaoXi();
	                    }else if(noticeVarObj.preCid+""==="2"){
	                    	$(".btn-group .btn").eq(noticeVarObj.preCid-1).addClass("btn-active");
							noticeVarObj.xxtype = 2;
	                    	getFaSong();
	                    }else if(noticeVarObj.preCid+""==="3"){
	                    	$(".btn-group .btn").eq(noticeVarObj.preCid-1).addClass("btn-active");
							noticeVarObj.xxtype = 3;
	                    	getTuiSong();
	                    }else if(noticeVarObj.preCid+""==="4"){
	                    	$(".btn-group .btn").eq(noticeVarObj.preCid-1).addClass("btn-active");
							noticeVarObj.xxtype = 4;
	                    	getHuiZhi();
	                    }else if(noticeVarObj.preCid+""==="5"){
	                    	$(".btn-group .btn").eq(noticeVarObj.preCid-1).addClass("btn-active");
							noticeVarObj.xxtype = 5;
	                    	getWanCheng();
	                    }
		            }
				});
			}
		});
	});
}
function getXiaoXi() {
	$.ajax({
		url : "../../../notice/getNoticeList",
		type : "POST",
		async : true,
		data : {"page":noticeVarObj.page,"pageCountStr":noticeVarObj.pageSize},
		dataType : "json",
		success : function(data) {
			if(data.state==1){
				var arr=[];
				noticeVarObj.isLeader = data.isLeader;
				if(data.msg){
					arr=JSON.parse(data.msg);
				}
				showMore(arr);
				$(".seedetail").unbind();
				$(".seedetail").click(function(e) {
					noticeVarObj.flag = 1;
					seedetailClick(e);
					noticeVarObj.flag = 0;
				});
				$("#refresh").unbind();
				$("#refresh").on('click', function() {
					noticeVarObj.page=1;
					$("#allList").html("");
					getXiaoXi();
				});
			}else{
				console.log(data.msg);
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			return false;
		}
	});
}
function getFaSong() {
	$.ajax({
		url : "../../../notice/getMyCommandList",
		type : "POST",
		async : true,
		data : {"page":noticeVarObj.page,"pageCountStr":noticeVarObj.pageSize},
		dataType : "json",
		success : function(data) {
			var arr=[];
			noticeVarObj.isLeader = data.isLeader;
			arr=JSON.parse(data.msg);
			showMore(arr);
			$(".seedetail").unbind();
			$(".seedetail").click(function(e) {
				noticeVarObj.flag = 1;
				seedetailClick(e);
				noticeVarObj.flag = 0;
			});
			$("#refresh").unbind();
			$("#refresh").on('click', function() {
				noticeVarObj.page=1;
				$("#allList").html("");
				getFaSong();
			});
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			return false;
		}
	});
}
function getTuiSong() {
	var username = sessionStorage.getItem("username");
	$.ajax({
		url : "../../../app/getTuiSongs",
		type : "POST",
		async : true,
		data : {"name":username,"page":noticeVarObj.page,"size":noticeVarObj.pageSize},
		dataType : "json",
		success : function(data) {
			var arr=[];
			noticeVarObj.isLeader = data.isLeader;
			arr=data.tuisong;
			showMore(arr);
			$(".seedetail").unbind();
			$(".seedetail").click(function(e) {
				noticeVarObj.flag = 1;
				seedetailClick(e);
				noticeVarObj.flag = 0;
			});
			$("#refresh").unbind();
			$("#refresh").on('click', function() {
				noticeVarObj.page=1;
				$("#allList").html("");
				getTuiSong();
			});
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			return false;
		}
	});
}
function getHuiZhi() {
	var username = sessionStorage.getItem("username");
	$.ajax({
		url : "../../../huizhi/getNoticeList",
		type : "POST",
		async : true,
		data : {"name":username,"page":noticeVarObj.page,"pageCountStr":noticeVarObj.pageSize},
		dataType : "json",
		success : function(data) {
			if(data.state==1){
				var arr=[];
				if(data.msg){
					arr=JSON.parse(data.msg);
				}
				showMore(arr);
				$(".seedetail").unbind();
				$(".seedetail").click(function(e) {
					noticeVarObj.flag = 1;
					seedetailClick(e);
					noticeVarObj.flag = 0;
				});
				$("#refresh").unbind();
				$("#refresh").on('click', function() {
					noticeVarObj.page=1;
					$("#allList").html("");
					getHuiZhi();
				});
			}else{
				console.log(data.msg);
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			return false;
		}
	});
}
function getWanCheng() {
	var username = sessionStorage.getItem("username");
	$.ajax({
		url : "../../../diaoduling/getNoticeList",
		type : "POST",
		async : true,
		data : {"name":username,"page":noticeVarObj.page,"pageCountStr":noticeVarObj.pageSize},
		dataType : "json",
		success : function(data) {
			if(data.state==1){
				var arr=[];
				if(data.msg){
					arr=JSON.parse(data.msg);
				}
				showMore(arr);
				$(".seedetail").unbind();
				$(".seedetail").click(function(e) {
					noticeVarObj.flag = 1;
					seedetailClick(e);
					noticeVarObj.flag = 0;
				});
				$("#refresh").unbind();
				$("#refresh").on('click', function() {
					noticeVarObj.page=1;
					$("#allList").html("");
					getWanCheng();
				});
			}else{
				console.log(data.msg);
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			return false;
		}
	});
}
function showMore(res_dd) {
	if (res_dd != undefined) {
		var str = "";
		if (res_dd.length == 0 && noticeVarObj.page==1) {
			var tishi = "";
			if(noticeVarObj.xxtype==1){
				tishi="无通知消息";
			}else if(noticeVarObj.xxtype==2){
				tishi="无发送的调度令";
			}else if(noticeVarObj.xxtype==3){
				tishi="无推送消息";
			}else if(noticeVarObj.xxtype==4){
				tishi="无回执消息";
			}else if(noticeVarObj.xxtype==5){
				tishi="无完成的调度令";
			}
			str = '<div style="margin-left:350px;margin-top:200px;font-size:30px;">'
					+ '<p>'+tishi+'</p>' + '</div>';
		}else {
			for (var i = 0; i < res_dd.length; i++) {
				var bh = res_dd[i].BIAN_HAO;
				var isRead = res_dd[i].ViewState;
				var shi = res_dd[i].DONG_ZUO;
				var time = res_dd[i].SUMMIT_TIME;
				var ren = res_dd[i].SUMMIT_NAME;
				if(noticeVarObj.xxtype==1){
					ren += "   发来一条消息   ";
				}else if(noticeVarObj.xxtype==2){
					ren += "   发出一条消息给   " + res_dd[i].FUZEREN_NAME;
					if (isRead == "true") {
						ren+="("+res_dd[i].FUZEREN_NAME+"已确认接收到消息)";
					}else{
						ren+="("+res_dd[i].FUZEREN_NAME+"未确认接收消息)";
					}
				}else if(noticeVarObj.xxtype==3){
					ren=res_dd[i].HZRENYUANNAME+"发来一条推送消息";
					time = res_dd[i].TIME;
					shi = res_dd[i].SECOND;
					bh = res_dd[i].UNIQUE_CODE;
				}else if(noticeVarObj.xxtype==4){
					ren=res_dd[i].HZR+"发来一条回执";
					time = res_dd[i].HZ_TIME;
					shi = "";
					bh = res_dd[i].UNIQUE_CODE;
				}else if(noticeVarObj.xxtype==5){
					ren="已完成一条调度令";
					time = res_dd[i].SUMMIT_TIME;
					shi = "";
					bh = res_dd[i].BIAN_HAO;
				}
				var pstyle = "";
				if (isRead == "true" || noticeVarObj.xxtype==2) {
					pstyle = " style='visibility:hidden;' ";
				}
				var xq = "xq" + i;
				str += '<div class="row-record">'
						+ '<div class="lineleft">'
						+ '<div><span class="redpoint"'
						+ pstyle
						+ '></span><span class="name" style="font-size:16px;">'
						+ ren 
						+ '</span><span>&nbsp;&nbsp;&nbsp;'
						+ time
						+ '</span></div>'
						+ '<div class="name" style="margin-left:30px;font-size:16px;">'
						+ shi + '</div>' + '</div>' + '<div class="lineright">'
						+ '<span class="seedetail" data-index=' + bh
						+ '>查看详情</span>' + '</div>' + '</div>';
			}
		}
		$("#allList").append(str);
	}
}
function seedetailClick(e) {
	//console.log(e.target);
	var bh = e.target.getAttribute("data-index");
	if(noticeVarObj.xxtype==1||noticeVarObj.xxtype==3||noticeVarObj.xxtype==4||noticeVarObj.xxtype==5){
		if ($($(e.target).parent().prev().find(".redpoint")[0]).css("visibility") != "hidden" && noticeVarObj.flag == 1) {
			$($(e.target).parent().prev().find(".redpoint")[0]).css("visibility", "hidden");
			setYiDu(bh);
		}
	}
	layui.use('layer', function () {
        var layer = layui.layer;
        layer.open({
            type: 1,
            title: "消息详情",
            content:  
            			'<div id="detail_content" style="overflow: auto;height: 100%; width: 100%;">' 
            			+ '</div>'
            			,
            resize:false,
            maxmin: true,
            id:"xiangqingkuang",
            scrollbar: true,
            skin: 'thtfLayer_normal',
            full:function(){
            },
            restore:function(){
            },
            area: ['1300px', '805px'],
            success:function(){
            	if(noticeVarObj.xxtype==1||noticeVarObj.xxtype==2){
            		getDetail(bh);
            	}else if(noticeVarObj.xxtype==3){
            		getTSDetail(bh);
            	}else if(noticeVarObj.xxtype==4){
            		getTSDetail(bh);
            	}else if(noticeVarObj.xxtype==5){
            		getDetail(bh.replace("COM_",""));
            	}
            }
        });
    });
}
function getDetail(bh){
	$.ajax({
		url : "../../../notice/getCommandDetail",
		type : "POST",
		async : true,
		data : {"commandId":bh},
		dataType : "json",
		success : function(data) {
			if(data.msg.length>0){
				showDetail(data.msg);
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			return false;
		}
	});
}
function getTSDetail(bh){
	$.ajax({
		url : "../../../app/getHuiZhiDetails",
		type : "POST",
		async : true,
		data : {"code":bh},
		dataType : "json",
		success : function(data) {
			if(data.state==1){
				showTSDetail(data.data[0]);   
			}else{
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			return false;
		}
	});
}
function showTSDetail(data){
		var bh=data.BIAN_HAO;
		var lei="";
		if(noticeVarObj.xxtype==3){
			lei="推送";
    	}else if(noticeVarObj.xxtype==4){
    		lei="回执";
    	}
		var ren = data.HZ_REN_YUAN;   
			ren += "   发来一条"+lei+"消息  ";
		var shi = "执行动作："+data.CLASSFY_SEC_CODE;
		var time = data.HZ_TIME;
		var content = data.HZ_WEN_TI_TYPE==""?"无备注":data.HZ_WEN_TI_TYPE;
		var xiangqing='<div>'
			+ '<div class="lineleft">'
			+ '<div style="margin-left:20px;"><span class="name" style="font-size:20px">'
			+ ren
			+ '</span><span style="color: #5C5F66;font-size:14px;line-height: 19px;">&nbsp;&nbsp;&nbsp;'
			+ time
			+ '</span></div>'
			+ '<div class="name" style="margin-left:20px;font-size:16px">'
			+ shi
			+ '</div>'
			+ '<div class="name" style="margin-left:20px;font-size:16px">'
			+ '备注：'
			+ '</div>'
			+ '<div class="layui-form-item" style="margin-top:9px;margin-left:20px;margin-right:20px;width:100%">'
			+ '<textarea readonly="readonly" name="CONTENTS" class="thtf_scdd_ddgl_nr" style="width:1250px; height:104px;" placeholder="&nbsp;&nbsp;'+content+'"></textarea>'
			+ '</div>'
			+ '</div>'
			+ '</div>'
	    	+ '</div>';
		xiangqing += 
			'<div class="table-container" style="width: 1250px;">'
			+ '<table id="table1" border="1" width="100%" height="82px" align="center" bordercolor="black" margin-top="10px" '
			+ 'style="border-collapse:collapse; table-layout:fixed; border-bottom: solid 1px #FFF; border-color:#A9B8CE;">'
			+ '<tr align="center" style="color: #5C5F66;">'
			+'<th style="width:100px;border-bottom: 0;text-align:center;word-break: break-all; word-wrap:break-word;">调度令编号</th>'
			+ '<th style="width:100px;border-bottom: 0;text-align:center;word-break:break-word;">所属设施类型</th>'
			+ '<th style="width:100px;border-bottom: 0;text-align:center;word-break:break-word;">所属设施编号</th>'
			+ '<th style="width:100px;border-bottom: 0;text-align:center;word-break:break-word;">所属设施名称</th>'
			+ '<th style="width:100px;border-bottom: 0;text-align:center;word-break:break-word;">设备类型</th>'
			+ '<th style="width:100px;border-bottom: 0;text-align:center;word-break:break-word;">设备编号</th>'
			+ '<th style="width:100px;border-bottom: 0;text-align:center;word-break:break-word;">设备名称</th>'
			+
			'</tr>' + '<tr align="center" style="color: #333333;\n' +
        	'text-shadow: 0 0 0;font-size: 16px;">' + '<td style="width:100px;word-break:break-word;">'
			+ data.BIAN_HAO
			+ '</td>'
			+ '<td style="width:100px;word-break:break-word;">'
			+ data.CN_SUO_SHU_LEI_XING
			+ '</td>'
			+ '<td style="width:100px;word-break:break-word;">'
			+ data.SUO_SHU_SHE_SHI_CODE
			+ '</td>'
			+ '<td style="width:100px;word-break:break-word;">'
			+ data.SUO_SHU_SHE_SHI_NAME
			+ '</td>'
			+ '<td style="width:100px;word-break:break-word;">'
			+ data.CN_SHE_SHI_LEI_XING
			+ '</td>'
			+ '<td style="width:100px;word-break:break-word;">'
			+ data.SHE_BEI_CODE
			+ '</td>'
			+ '<td style="width:100px;word-break:break-word;">'
			+ data.SHE_BEI_INFO
			+ '</td>'
			+ '</tr>'
			+ '</table>'
			+ '<table id="table2" border="1" width="100%" height="82px" align="center" bordercolor="black"  margin-bottom="10px" '
			+ 'style="border-collapse:collapse; table-layout:fixed; border-color:#A9B8CE;margin-top:-1px;">'
			+ '<tr align="center" style="color: #5C5F66;">'
			+'<th style="width:100px;text-align:center">回执人</th>'
			+ '<th style="width:100px;text-align:center">回执时间</th>'
			+ '<th style="width:100px;text-align:center">回执类型</th>'
			+ '<th style="width:100px;text-align:center">回执内容</th>'
			+ '<th style="width:100px;text-align:center">附件编号</th>'
			+ '<th style="width:100px;text-align:center">二级事件编号</th>'
			+ '<th style="width:100px;text-align:center">推送人员</th>' + '</tr>'
			+ '<tr align="center" style="color: #333333;\n' +
        	'text-shadow: 0 0 0;font-size: 16px;">'
			+ '<td style="width:100px;word-break:break-word;">'
			+ data.HZ_REN_YUAN
			+ '</td>'
			+ '<td style="width:100px;word-break:break-word;">'
			+ data.HZ_TIME
			+ '</td>'
			+ '<td style="width:100px;word-break:break-word;">'
			+ data.HZ_LEI_XING
			+ '</td>'
			+ '<td style="width:100px;word-break:break-word;">'
			+ data.HZ_CONTENTS
			+ '</td>'
			+ '<td style="width:100px;word-break:break-word;">'
			+ data.HZ_FU_JIAN
			+ '</td>'
			+ '<td style="width:100px;word-break:break-word;">'
			+ data.CLASSFY_SEC_CODE
			+ '</td>'
			+ '<td style="width:100px;word-break:break-word;">'
			+ data.SEND_PERSON
			+ '</td>'
			+ '</tr>'
			+ '</table>'
			+'</div>';
		$("#detail_content").html(xiangqing);
}
function showDetail(datalist){
	var data = datalist[0];
	noticeVarObj.rePushCode=data.BIAN_HAO;
	var ren = '<span style="font-size:20px;font-weight:bold;">' + data.TIJIAOREN_NAME + '</span>';
	if(noticeVarObj.xxtype==1){
		ren += '<span style="font-size:16px;">   发来一条'+data.REN_WU_LEI_XING+'消息  </span>';
	}else if(noticeVarObj.xxtype==2){
		ren += '<span style="font-size:16px;">   发出一条消息给     </span>' +'<span style="font-size:20px;font-weight:bold;">' +  data.FUZEREN_NAME+ '</span>';
	}
	var shi = '<span style="font-size:20px;font-weight:bold;">执行动作：</span>'+'<span style="font-size:16px;border:1px solid #E6E7E8;padding:5px;">'+data.DONG_ZUO+'</span>';
	var time = data.SUMMIT_TIME;
	var content = data.CONTENTS==null?"无备注":data.CONTENTS;
	var xiangqing='<div>'
		+ '<div class="lineleft">'
		+ '<div style="margin-left:20px;">'
		+ '<div class="detail_title" style="font-size:20px">'
		+ '<div>'
		+ ren
		+ '</div>'
		+ '<div style="color: #5C5F66;font-size:14px;line-height: 19px;">&nbsp;&nbsp;&nbsp;'
		+ time
		+ '</div>'
		+ '</div>'
		+ '</div>'
		+ '<div class="detail_title" style="margin-left:20px;margin-top: 10px;font-size:16px">'
		+ shi
		+ '</div>'
		+ '<div style="margin-left:20px;font-size:20px;font-weight:bold;">'
		+ '备注：'
		+ '</div>'
		+ '<div class="layui-form-item" style="margin-top:9px;margin-left:20px;margin-right:20px;width:100%">'
		+ '<textarea readonly="readonly" name="CONTENTS" class="thtf_scdd_ddgl_nr" style="width:1250px; height:104px;font-size:20px;font-weight:bold;color:#000;" placeholder="&nbsp;&nbsp;'+content+'"></textarea>'
		+ '</div>'
		+ '</div>'
		+ '<div class="name" style="margin-left:20px;font-size:20px;font-weight:bold;">'
		+ '执行对象：'
		+ '</div>'
		+ '</div>'
    	+ '</div>';
	var isNeedZhuanfa = false;
	for(var i=0;i<datalist.length;i++){
		var data = datalist[i];
		if(data.ZHI_XING_STATE!=="已完成"){
			isNeedZhuanfa = true;
		}
		var rw_name = $.trim(data.SHE_SHI_NAME)==""?"未知":data.SHE_SHI_NAME;
		var zhuangtai = '';
		if(data.ZHUAN_FA_STATE=="未执行"||data.ZHUAN_FA_STATE=="未转发"){
			zhuangtai = '<font color="red">('+data.ZHUAN_FA_STATE+')</font>';
		}else if(data.ZHUAN_FA_STATE=="已完成"||data.ZHUAN_FA_STATE=="已转发"){
			zhuangtai = '<font color="blue">('+data.ZHUAN_FA_STATE+'，转发给了'+data.ZHUAN_FA_REN+')</font>';
		}else{
			zhuangtai = '<font color="green">('+data.ZHUAN_FA_STATE+')</font>';
		}
		xiangqing += 
				'<div class="table-container" style="width: 1250px;">'
				+ '<input type="checkbox" class="renwu_checkbox" data-index='+i+' checked></input>'
				+ '<span class="name" style="font-size:16px">&nbsp;&nbsp;&nbsp;'+rw_name+zhuangtai+'</span>'
				+ '<table id="table1" border="1" width="100%" height="82px" align="center" bordercolor="black" margin-top="10px" '
				+ 'style="border-collapse:collapse; table-layout:fixed; border-bottom: solid 1px #FFF; border-color:#A9B8CE;">'
				+ '<tr align="center" style="color: #5C5F66;">'
				+'<th style="width:100px;border-bottom: 0;text-align:center;word-break: break-all; word-wrap:break-word;">调度令编号</th>'
				+ '<th style="width:100px;border-bottom: 0;text-align:center;word-break:break-word;">所属设施类型</th>'
				+ '<th style="width:100px;border-bottom: 0;text-align:center;word-break:break-word;">所属设施编号</th>'
				+ '<th style="width:100px;border-bottom: 0;text-align:center;word-break:break-word;">所属设施名称</th>'
				+ '<th style="width:100px;border-bottom: 0;text-align:center;word-break:break-word;">设备类型</th>'
				+ '<th style="width:100px;border-bottom: 0;text-align:center;word-break:break-word;">设备编号</th>'
				+ '<th style="width:100px;border-bottom: 0;text-align:center;word-break:break-word;">设备名称</th>'
				+
				'</tr>' + '<tr align="center" style="color: #333333;\n' +
	        	'text-shadow: 0 0 0;font-size: 16px;">' + '<td style="width:110px;word-break:break-word;">'
				+ data.BIAN_HAO
				+ '</td>'
				+ '<td style="width:100px;word-break:break-word;">'
				+ data.SUO_SHU_NAME
				+ '</td>'
				+ '<td style="width:90px;word-break:break-word;">'
				+ data.SUO_SHU_SHE_SHI_CODE
				+ '</td>'
				+ '<td style="width:100px;word-break:break-word;">'
				+ data.SUO_SHU_SHE_SHI_NAME
				+ '</td>'
				+ '<td style="width:100px;word-break:break-word;">'
				+ data.SHE_SHI_NAME
				+ '</td>'
				+ '<td style="width:100px;word-break:break-word;">'
				+ data.SHE_SHI_CODE
				+ '</td>'
				+ '<td style="width:100px;word-break:break-word;">'
				+ data.SHE_SHI_NAME
				+ '</td>'
				+ '</tr>'
				+ '</table>'
				+ '<table id="table2" border="1" width="100%" height="82px" align="center" bordercolor="black"  margin-bottom="10px" '
				+ 'style="border-collapse:collapse; table-layout:fixed; border-color:#A9B8CE;margin-top:-1px;">'
				+ '<tr align="center" style="color: #5C5F66;">'
				+'<th style="width:100px;text-align:center">执行动作</th>'
				+ '<th style="width:100px;text-align:center">执行状态</th>'
				+ '<th style="width:100px;text-align:center">执行时限</th>'
				+ '<th style="width:100px;text-align:center">主管部门</th>'
				+ '<th style="width:100px;text-align:center">总负责人</th>'
				+ '<th style="width:100px;text-align:center">提交时间</th>'
				+ '<th style="width:100px;text-align:center">提交人员</th>' + '</tr>'
				+ '<tr align="center" style="color: #333333;\n' +
	        	'text-shadow: 0 0 0;font-size: 16px;">'
				+ '<td style="width:110px;;word-break:break-word;">'
				+ data.REN_WU_LEI_XING
				+ '</td>'
				+ '<td style="width:100px;;word-break:break-word;">'
				+ data.ZHI_XING_STATE
				+ '</td>'
				+ '<td style="width:90px;;word-break:break-word;">'
				+ data.ZHI_XING_SHI_XIAN
				+ '</td>'
				+ '<td style="width:100px;;word-break:break-word;">'
				+ data.BU_MEN
				+ '</td>'
				+ '<td style="width:100px;;word-break:break-word;">'
				+ data.FUZEREN_NAME
				+ '</td>'
				+ '<td style="width:100px;;word-break:break-word;">'
				+ data.SUMMIT_TIME
				+ '</td>'
				+ '<td style="width:100px;;word-break:break-word;">'
				+ data.TIJIAOREN_NAME
				+ '</td>'
				+ '</tr>'
				+ '</table>'
				+'</div>'
	}
	xiangqing += 
	 '<div class="layui-form-item" style="margin-top:10px;">'
	+ '<button class="btn btn-default intertiveBtn thtfButton_normal" id="queren" style="width:120px;height:32px;position: relative;float: right; right: 280px;color: white;background-color: #005aff;">确认接收</button>'
	+ '<button class="btn btn-default intertiveBtn thtfButton_normal" id="zhuanfa" style="width:120px;height:32px;position: relative;float: right; right: 50px;color: white;background-color: #005aff;">转发消息</button>'
	+ '<button class="btn btn-default intertiveBtn thtfButton_normal" id="yijianzhuanfa" style="width:120px;height:32px;position: relative;float: right; right: -200px;color: white;background-color: #005aff;">换热站一键转发</button>'
	+ '</div>';
	$("#detail_content").html(xiangqing);
	if(noticeVarObj.isLeader!=1){
		$("#zhuanfa").css("visibility","hidden");
		$("#yijianzhuanfa").css("visibility","hidden");
	}
	if(!isNeedZhuanfa){
		$("#zhuanfa").attr("disabled","disabled");
		$("#zhuanfa").text("已完成无法转发");
		$("#yijianzhuanfa").attr("disabled","disabled");
	}
	var same = isSameCompany(data.SUMMIT_PSERSON);
	if(same==true){
		$("#queren").css("visibility","hidden");
	}
	if(noticeVarObj.xxtype==2){
		$("#zhuanfa").css("visibility","hidden");
		$("#queren").css("visibility","hidden");
	}
	$("#queren").on('click',function(){
		//sendNoticeMsg(data.SUMMIT_PSERSON);
		if(data.SUMMIT_PSERSON) {
			sendNoticeMsg(data.SUMMIT_PSERSON);
		}else{
			toastr.error("非法用户");
		}
		$("#queren").attr("disabled","disabled");
		$("#queren").text("已确认接收");
		var bh = data.BIAN_HAO;
		 $.ajax({
		     url: "../../../notice/confirmReceived",
		     type:"POST",
		     async:false,
		     data:{"commandId":bh},
		     dataType:"json",
		     success:function (data) {
		    	 if(data.state>=1){
		    		 toastr.success("确认接收成功！");
		    	 }else{
		    		 toastr.error(data.msg);
		    	 }
		     },
		     error:function(XMLHttpRequest, textStatus, errorThrown){
	    		 return false;
		     }
		 });
	});
	$("#yijianzhuanfa").on('click',function(){
		noticeVarObj.tasklist=[];
		var isAllHRZ = true;
		$(".renwu_checkbox").each(function(index,element){
			   var index = this.getAttribute("data-index");
			   var isCheck = this.checked;
			   if(isCheck==true){
				   var da = datalist[index];
				   if(da.SHE_SHI_LEI_XING=="2"){
					   var task = {"bh":da.BIAN_HAO,"rw":da.UNIQUE_CODE,"fzr":da.FU_ZE_REN,"code":da.SHE_SHI_CODE};
					   noticeVarObj.tasklist.push(task);
				   }else{
					   isAllHRZ=false;
				   }
			   }
		   });
		if(isAllHRZ==false){
			toastr.error("一键转发的任务必须全为换热站。");
			 return;
		}else{
			if(noticeVarObj.tasklist.length==0){
				toastr.error("请选择需要一键转发的换热站。");
				return;
			}
		}
		var arr=[];
		 for (var i = 0; i < noticeVarObj.tasklist.length; i++) {
			var obj = {};
			obj.bh = noticeVarObj.tasklist[i].rw;
			obj.zxr = "auto"; 
			obj.objid = noticeVarObj.tasklist[i].code;
			arr.push(obj);
		}
		 var jsonCmd = {"jsonCmd":arr};
		 var jsonCmdStr =JSON.stringify(jsonCmd);
		 $.ajax({
		     url: "../../../common/setZhiXingRen",
		     type:"POST",
		     async:true,
		     data:{"ddlbh":noticeVarObj.rePushCode,"jsonCmd":jsonCmdStr},
		     dataType:"text",
		     success:function (data) {
		    	 var json = $.parseJSON(data);
		    	 if(json.state==1){
		    		 toastr.success(json.msg);
		    		 for(var i=0; i<json.userlist.length;i++){
		    			 var user = json.userlist[i];
						 if(user) {
							 sendNoticeMsg(user);
						 }else{
							 toastr.error("非法用户");
						 }
		    		 }
		    	 }else{
		    		 toastr.error(json.msg);
		    	 }
		     },
		     error:function(XMLHttpRequest, textStatus, errorThrown){
	    		 return false;
		     }
		 });
	});
   $("#zhuanfa").on('click',function(){
	   noticeVarObj.tasklist=[];
	   var zhuanfaIsOk = true;
	   $(".renwu_checkbox").each(function(index,element){
		   var index = this.getAttribute("data-index");
		   var isCheck = this.checked;
		   //console.log(index+"-"+isCheck);
		   if(isCheck==true){
			   var da = datalist[index];
			   if(da.ZHI_XING_STATE=="已完成"){
				   zhuanfaIsOk = false;
			   }
			   var task = {"bh":da.BIAN_HAO,"rw":da.UNIQUE_CODE,"fzr":da.FU_ZE_REN};
			   noticeVarObj.tasklist.push(task);
		   }
	   });
	   if(noticeVarObj.tasklist.length==0){
			 toastr.error("请先选择需要转发的任务。");
			 return;
	   }
	   if(!zhuanfaIsOk){
		   toastr.error("请先选择需要转发的任务。");
		   return;
	   }
	   var zhuanfatext = 
			'<div class="layui-form-item" style="height:80%;margin-top: 10px; margin-left: 20px;">'
				+ '<table id="tablezuyuan" border="1" width="90%" height="90%" align="center" bordercolor="black" margin-top="10px" '
				+ 'style="border-collapse:collapse; table-layout:fixed; border-bottom: solid 1px #FFF; border-color:#A9B8CE;">'
				+ '<tr align="center" style="color: #5C5F66;">'
				+'<th style="width:100px;border-bottom: 0;text-align:center;word-break: break-all; word-wrap:break-word;">用户名</th>'
				+ '<th style="width:100px;border-bottom: 0;text-align:center;word-break:break-word;">真实姓名</th>'
				+ '<th style="width:100px;border-bottom: 0;text-align:center;word-break:break-word;">所在部门</th>'
				+ '<th style="width:100px;border-bottom: 0;text-align:center;word-break:break-word;">所属分公司</th>'
				+ '<th style="width:100px;border-bottom: 0;text-align:center;word-break:break-word;">是否转发</th>'
				+ '</table>'
		+'<button class="btn btn-default intertiveBtn thtfButton_normal" id="okzhuanfa" style="width:120px;height:30px;margin-left:50px;margin-top:20px;margin-right:100px;">确认转发</button>'+
	'</div>';
	   layui.use('layer', function () {
	        var layer = layui.layer;
	     var zf_layer = layer.open({
	            type: 1,
	            title: "消息转发",
	            content: zhuanfatext,
	            resize:true,
	            maxmin: true,
	            skin: 'thtfLayer_normal',
	            full:function(){
	            },
	            restore:function(){
	            },
	            area: ['600px', '390px'],
	            success:function(){
	            	$.ajax({
				     url: "../../../common/getZuYuan",
				     type:"POST",
				     async:false,
				     data:{"a":1},
				     dataType:"json",
				     success:function (data) {
				    	 var str="";
				    	 for(var i=0 ;i<data.data.length;i++){
				    		 var line = "<tr align=\"center\"><td>"+data.data[i].USER_NAME+"</td><td>"+data.data[i].REAL_NAME+"</td><td>"+data.data[i].DEPARTMENT+
				    		 "</td><td>"+data.data[i].COMPANY_NAME+"</td><td><input id=\"sd\" type=\"checkbox\" class=\"zuyuan_checkbox\" data-id="+data.data[i].USER_NAME+"></td></tr>";
				    		 $("#tablezuyuan").append(line);
			    		 }
				    	 $("#okzhuanfa").on('click',function(){
				    		 noticeVarObj.userlist = [];
				    		 $(".zuyuan_checkbox").each(function(index,element){
				    			   var user = this.getAttribute("data-id");
				    			   var isCheck = this.checked;
				    			   //console.log(index+"-"+isCheck);
				    			   if(isCheck==true){
									   noticeVarObj.userlist.push(user);
				    			   }
				    		   });
				    		 if(noticeVarObj.userlist.length==0){
				    			 toastr.error("请选择转发人员");
				    			 return;
				    		 }
				    		 var arr=[];
				    		 for (var i = 0; i < noticeVarObj.tasklist.length; i++) {
								var obj = {};
								obj.bh = noticeVarObj.tasklist[i].rw;
								obj.zxr = noticeVarObj.userlist;
								arr.push(obj);
							}
				    		 var jsonCmd = {"jsonCmd":arr};
				    		 var jsonCmdStr =JSON.stringify(jsonCmd);
				    		 $.ajax({
    						     url: "../../../common/setZhiXingRen",
    						     type:"POST",
    						     async:true,
    						     data:{"ddlbh":noticeVarObj.rePushCode,"jsonCmd":jsonCmdStr},
    						     dataType:"text",
    						     success:function (data) {
    						    	 var json = $.parseJSON(data);
    						    		 if(json.state==1){
        						    		 toastr.success(json.msg);
        						    		 for(var i=0; i<noticeVarObj.userlist.length;i++){
        						    			 var user = noticeVarObj.userlist[i];
        						    			 if(user) {
													 sendNoticeMsg(user);
												 }else{
													 toastr.error("非法用户");
												 }
        						    		 }
        						    	 }else{
        						    		 toastr.error(json.msg);
        						    	 }
						    		 layer.close(zf_layer);
    						     },
    						     error:function(XMLHttpRequest, textStatus, errorThrown){
						    		 return false;
    						     }
    						 });
				    	 });
				     },
				     error:function(XMLHttpRequest, textStatus, errorThrown){
			    		 return false;
				     }
				 });
	            }
	        });
	    });
   });
}
function isSameCompany(summitname){
	var isSame = false;
	$.ajax({
		url : "../../../notice/isSameCompany",
		type : "POST",
		async : false,
		data : {"summitname":summitname},
		dataType : "json",
		success : function(data) {
			if(data.state>=1){
				isSame = true;
			}else{
				isSame = false;
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			return false;
		}
	});
	return isSame;
}
function getNoReadCount(){
	$.ajax({
		url : "../../../xiaoxi/getAllXiaoXiCount",
		type : "POST",
		async : true,
		data : null,
		dataType : "json",
		success : function(data) {
			if(data.state==1){
				noticeVarObj.weiduNum=data.msg;
				if(!sessionStorage.getItem("noticnum") && noticeVarObj.weiduNum>0){
					noticePlay();
					sessionStorage.setItem("noticnum",noticeVarObj.weiduNum);
				}else if(noticeVarObj.weiduNum>sessionStorage.getItem("noticnum")){
					noticePlay();
					sessionStorage.setItem("noticnum",noticeVarObj.weiduNum);
				}
				$("#noticenum").text(noticeVarObj.weiduNum);
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			return false;
		}
	});
}
function xx_socketsend(msg) {
	noticeVarObj.noticeWebsocket.send(msg);
}
function noticeWebSocketInit() {
	if ('WebSocket' in window) {
		var host_port = window.location.host;
		var project_name = getContextPath();
		var username = sessionStorage.getItem("username");
		if(!username){
			return false;
		}
		noticeVarObj.noticeWebsocket = new WebSocket("ws://" + host_port + "/" + project_name + "/websocket/xiaoxi/" + username + "");
		noticeVarObj.noticeWebsocket.name = noticeVarObj.noticeWebsocketName;
		for(let i=0;i<thtf.websocketList.length;i++){
			if(thtf.websocketList[i].name===noticeVarObj.noticeWebsocketName){
				thtf.websocketList.splice(i,1)[0].close();
			}
		}
		thtf.websocketList.push(noticeVarObj.noticeWebsocket);
	} else {
		console.log('当前浏览器 Not support websocket');
	}
	noticeVarObj.noticeWebsocket.onerror = function() {
		console.log("消息WebSocket连接发生错误");
	};
	noticeVarObj.noticeWebsocket.onopen = function() {
		console.log("消息WebSocket连接成功");
	};
	noticeVarObj.noticeWebsocket.onmessage = function(event) {
		noticePlay();
		var oldnum=Number($("#noticenum").text());
		sessionStorage.setItem("noticnum",++oldnum);
		getNoReadCount();
		$("#allList").html("");
		if(noticeVarObj.xxtype==1){
			getXiaoXi();
		}else if(noticeVarObj.xxtype==2){
			getFaSong();
		}else if(noticeVarObj.xxtype==3){
			getTuiSong();
		}else if(noticeVarObj.xxtype==4){
			getHuiZhi();
		}else if(noticeVarObj.xxtype==5){
			getWanCheng();
		}
	};
	noticeVarObj.noticeWebsocket.onclose = function() {
		console.log("消息WebSocket连接关闭了");
		if (noticeVarObj.websocket_xx_state == 1 && thtf.webSocketIsNotExiting) {
			var host_port = window.location.host;
			var project_name = getContextPath();
			var username = sessionStorage.getItem("username");
			if(username==null||username==""){
				return;
			}
			noticeVarObj.noticeWebsocket = new WebSocket("ws://" + host_port + "/" + project_name + "/websocket/xiaoxi/" + username + "");
			noticeVarObj.noticeWebsocket.name = noticeVarObj.noticeWebsocketName;
			for(let i=0;i<thtf.websocketList.length;i++){
				if(thtf.websocketList[i].name===noticeVarObj.noticeWebsocketName){
					thtf.websocketList.splice(i,1)[0].close();
				}
			}
			thtf.websocketList.push(noticeVarObj.noticeWebsocket);
		}
	}
}
function socketsend(a){
	noticeVarObj.dd_websocket.send(a);
}
function zhuanfatophone_WebSocket(){
    if ('WebSocket' in window) {
    	var host_port=window.location.host;
    	var project_name=getContextPath();
    	var username = sessionStorage.getItem("username");
		if(username==null||username==""){
			return;
		}
		noticeVarObj.dd_websocket = new WebSocket("ws://"+host_port+"/"+project_name+"/websocket/diaodu/pc");
		noticeVarObj.dd_websocket.name = noticeVarObj.dd_websocket_name;
		thtf.closeWebsocketWithName(noticeVarObj.dd_websocket_name,true);
		thtf.websocketList.push(noticeVarObj.dd_websocket);
    }
    else {
    	console.log('当前浏览器 Not support websocket')
    }
	noticeVarObj.dd_websocket.onerror = function () {
    	console.log("转发消息到手机端WebSocket连接发生错误");
    };
	noticeVarObj.dd_websocket.onopen = function () {
    	console.log("转发消息到手机端WebSocket连接成功");
    };
	noticeVarObj.dd_websocket.onmessage = function (event) {
        console.log("PC收到转发消息到手机端消息了");
    };
	noticeVarObj.dd_websocket.onclose = function () {
    	console.log("转发消息到手机端WebSocket连接关闭了");
    	if(noticeVarObj.websocket_xx_state == 1 && thtf.webSocketIsNotExiting){
    		var host_port=window.location.host;
    		var project_name=getContextPath();
    		var username = sessionStorage.getItem("username");
    		if(username==null||username==""){
    			return;
    		}
			noticeVarObj.dd_websocket = new WebSocket("ws://"+host_port+"/"+project_name+"/websocket/diaodu/pc");
			noticeVarObj.dd_websocket.name = noticeVarObj.dd_websocket_name;
			thtf.closeWebsocketWithName(noticeVarObj.dd_websocket_name,false);
			thtf.websocketList.push(noticeVarObj.dd_websocket);
    	}
    }
}
function sendNoticeMsg(username) {
	var websocket_data = {
		"code" : "",
		"user" : "",
		"state" : "",
		"content" : {
		}
	};
	var sendname = sessionStorage.getItem("username")||"";
	websocket_data.code = "";
	websocket_data.user = username||"";
	websocket_data.state = "10";
	websocket_data.sendperson = sendname||"";
	websocket_Str = JSON.stringify(websocket_data);
	xx_socketsend(websocket_Str);
	socketsend(websocket_Str);
	console.log("消息转发websocket");
	console.log(websocket_Str);
}
function setYiDu(bianhao) {
	$.ajax({
		url : "../../../notice/insertReadInfo",
		type : "POST",
		data : {
			"commandId" : bianhao
		},
		dataType : "json",
		success : function(res) {
			if (res.state == 1) {
				getNoReadCount();
				$("#allList").html("");
				if(noticeVarObj.xxtype==1){
					getXiaoXi();
				}else if(noticeVarObj.xxtype==2){
					getFaSong();
				}else if(noticeVarObj.xxtype==3){
					getTuiSong();
				}else if(noticeVarObj.xxtype==4){
					getHuiZhi();
				}else if(noticeVarObj.xxtype==5){
					getWanCheng();
				}
			} else {
				toastr.warning(res.msg);
				return false;
			}
		},
		error : function(XMLHttpRequest, textStatus, errorThrown) {
			console.log(XMLHttpRequest);
			console.log(textStatus);
			console.log(errorThrown);
			return false;
		}
	});
}

var yingjiVarObj = {
	yingJiWebSocket: null,
	yj_websocket_name: "noticeWebSocket",
	websocket_yj_state: 1
};
function yingjiWebSocketInit() {
	if ('WebSocket' in window) {
		var host_port=window.location.host;
		var project_name=getContextPath();
		var tmp="ws://"+host_port+"/"+project_name+"/websocket/diaodu/pc";
		yingjiVarObj.yingJiWebSocket = new WebSocket(tmp);
		yingjiVarObj.yingJiWebSocket.name = yingjiVarObj.yj_websocket_name;
		thtf.websocketList.push(yingjiVarObj.yingJiWebSocket);
	}
	else {
		console.log('当前浏览器 Not support websocket');
	}
	yingjiVarObj.yingJiWebSocket.onerror = function () {
		console.log("应急WebSocket连接发生错误");
	};
	yingjiVarObj.yingJiWebSocket.onopen = function () {
		console.log("应急WebSocket连接成功");
	};
	yingjiVarObj.yingJiWebSocket.onmessage = function (event) {
		if(sessionStorage.getItem("href").indexOf("YingJiGuanLi") !== -1){
			if(event.data!=null){
				var websocket_data = $.parseJSON(event.data);
				if(websocket_data.state == "30"){
					var sheshiCode=websocket_data.content.SHE_SHI_CODE;
					var suoshusheshiCode=websocket_data.content.SUO_SHU_SHE_SHI_CODE;
					var sheshiType=websocket_data.content.SHE_SHI_LEI_XING;
					var suoshusheshiType=websocket_data.content.SUO_SHU_LEI_XING;
					var bianHao=websocket_data.content.BIAN_HAO;
					var lon,lat;
					lon=lon2WebMercator(Number(websocket_data.content.lon));
					lat=lat2WebMercator(Number(websocket_data.content.lat));
					var poi=new esri.geometry.Point({
						spatialReference:{wkid: 102100},
						type:"point",
						x:lon,
						y:lat
					});
					YingJi.refreshConfirmingHisTable();
					var picUrl="../../images/YingJiGuanLi/confirming.gif";
					var pms = new esri.symbol.PictureMarkerSymbol(picUrl,40,45);
					var gImg = new esri.Graphic(poi,pms);
					var nowAttr={
						CODE:bianHao,
						LONGTITUDE:lon,
						LATITUDE:lat,
						SHE_SHI_CODE:sheshiCode,
						STATE:0
					};
					gImg.attributes=nowAttr;
					gImg.attributes.type="confirming";
					Map.graphics.add(gImg);
					guapai(bianHao);
				}
			}
		}
		yingjiPlay();
	};
	yingjiVarObj.yingJiWebSocket.onclose = function() {
		console.log("应急WebSocket连接关闭了");
		if(yingjiVarObj.websocket_yj_state==1 && thtf.webSocketIsNotExiting){
			var host_port=window.location.host;
			var project_name=getContextPath();
			yingjiVarObj.yingJiWebSocket = new WebSocket("ws://"+host_port+"/"+project_name+"/websocket/diaodu/pc");
			yingjiVarObj.yingJiWebSocket.name = yingjiVarObj.yj_websocket_name;
			for(let i=0;i<thtf.websocketList.length;i++){
				if(thtf.websocketList[i].name===yingjiVarObj.yj_websocket_name){
					thtf.websocketList.splice(i,1);
				}
			}
			thtf.websocketList.push(yingjiVarObj.yingJiWebSocket);
		}
	};
}
function yingjiPlay(){
	var audio = document.createElement('audio');
	audio.controls = true;
	audio.src = '../../images/video/emer_voice.mp3';
	audio.play();
}