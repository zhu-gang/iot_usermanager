/**
 * 全局变量
 * @type 
 */
var element = layui.element,
	layer = layui.layer,
	logoutUrl = ipPort + "/user/logout",	
	username;
//菜单配置
var menoSon = {
	"userControl" : "用户管理,角色管理,权限管理,系统通知",
	"equipControl" : ""
};
//侧边菜单配置
var navMenoSon = {
	"用户管理" : "userManager" ,
	"角色管理" : "roleManager" ,
	"权限管理" : "authManager" ,
	"系统通知" : "systemNotice"
};
//侧边菜单Url配置
var navMenoSon = {
	"userManager" : ipPort + "/static/userManager",
	"roleManager" : ipPort + "/static/roleManager",
	"authManager" : ipPort + "/static/authManager",
	"systemNotice" : ipPort + "/static/systemNotice"
};

var menoArr = [
	{
		"id" : "1", 
		"first" : "首页", 
		"second" : "快捷导航1,快捷导航2,快捷导航3",
		"url":""		 
	},
	{
		"id" : "2", 
		"first" : "设备管理", 
		"second" : "设备管理1,设备管理2,设备管理3,设备管理4",
		"url":""		 
	},
	{
		"id" : "3", 
		"first" : "用户模块", 
		"second" : "用户管理,角色管理,权限管理,系统通知",
		"url":"/html/userCenter/userManager.html,/html/userCenter/roleManager.html,/html/userCenter/authority_list.html,/html/userCenter/notice.html"		 
	},
	{
		"id" : "4", 
		"first" : "其他", 
		"second" : "其他1,其他2",
		"url":""		 
	}
]
	
/**
 * 初始化加载
 * @type 
 */
$(function(){	
	/*
	 * 初始化echart图
	 */
	// 基于准备好的dom，初始化echarts实例
//	var chart1 = echarts.init( $('#index_ehart_one')[0] );
//	var chart2 = echarts.init( $('#index_ehart_two')[0] );
//	var chart3 = echarts.init( $('#index_ehart_three')[0] );
//	var chart4 = echarts.init( $('#index_ehart_four')[0] );
//	var chart5 = echarts.init( $('#index_ehart_five')[0] );
//	var chart6 = echarts.init( $('#index_ehart_six')[0] );
//
//    // 指定图表的配置项和数据
//    var option1 = {
//    		backgroundColor: '#0B2967',
//    		title: {
//    	        text: '设备异常数量',
//    	        bottom: '0',
//    	        left: 'center',
//    	        textStyle: {
//    	        	color: '#B2FCFB',
//    	        },
//    	    },
//    	    tooltip: {
//    	        trigger: 'item',
//    	        formatter: "{a} <br/>{b}: {c} ({d}%)"
//    	    }, 
//    	    series: [    	        
//    	    	{
//    	            name:'访问来源',
//    	            type:'pie',
//    	            radius: ['45%', '65%'],
//    	            avoidLabelOverlap: false,
//    	            label: {
//    	                show: false,
//    	                position: 'center',
//    	                normal: {
//    	                    show: false,
//    	                    position: 'center'
//    	                },
//    	                emphasis: {
//    	                    show: false,
//    	                    textStyle: {
//    	                        fontSize: '10',
//    	                        fontWeight: 'bold'
//    	                    }
//    	                }
//    	            },
//    	            labelLine: {
//    	                normal: {
//    	                    show: false
//    	                }
//    	            },
//    	            data:[
//    	            	{value:335, name:'32.3%',
//    	                    label: {
//    	                        show: true,
//    	                        position: 'center',
//    	                        fontSize: 22,
//    	                        color: '#14EE3B',
//    	                        fontWeight:'bold',
//    	                    }
//    	                },
//    	                {value:110, name:'4',
//    	                    label: {
//    	                        show: false
//    	                    }}
//    	            ],
//    	            color:['#03CDFD','#3595F5'],
//    	        },
//    	    ]
//    	};
//    
//    var option2 = {
//    		backgroundColor: '#0B2967',
//    		title: {
//    	        text: '设备异常数量',
//    	        bottom: '0',
//    	        left: 'center',
//    	        textStyle: {
//    	        	color: '#B2FCFB',
//    	        },
//    	    },
//    	    tooltip: {
//    	        trigger: 'item',
//    	        formatter: "{a} <br/>{b}: {c} ({d}%)"
//    	    },
//    	    series: [
//    	    	{
//    	            name:'访问来源',
//    	            type:'pie',
//    	            radius: ['45%', '65%'],
//    	            avoidLabelOverlap: false,
//    	            label: {
//    	                show: false,
//    	                position: 'center',
//    	                normal: {
//    	                    show: false,
//    	                    position: 'center'
//    	                },
//    	                emphasis: {
//    	                    show: false,
//    	                    textStyle: {
//    	                        fontSize: '10',
//    	                        fontWeight: 'bold'
//    	                    }
//    	                }
//    	            },
//    	            labelLine: {
//    	                normal: {
//    	                    show: false
//    	                }
//    	            },
//    	            data:[
//    	            	{value:335, name:'32.3%',
//    	                    label: {
//    	                        show: true,
//    	                        position: 'center',
//    	                        fontSize: 22,
//    	                        color: '#14EE3B',
//    	                        fontWeight:'bold',
//    	                    }
//    	                },
//    	                {value:110, name:'4',
//    	                    label: {
//    	                        show: false
//    	                    }}
//    	            ],
//    	            color:['#03CDFD','#3595F5'],
//    	        },
//    	    ]
//    	};
//    
//    var option3 = {
//    		backgroundColor: '#0B2967',
//    		title: {
//    	        text: '设备异常数量',
//    	        bottom: '0',
//    	        left: 'center',
//    	        textStyle: {
//    	        	color: '#B2FCFB',
//    	        },
//    	    },
//    	    tooltip: {
//    	        trigger: 'item',
//    	        formatter: "{a} <br/>{b}: {c} ({d}%)"
//    	    },
//    	    series: [
//    	    	{
//    	            name:'访问来源',
//    	            type:'pie',
//    	            radius: ['45%', '65%'],
//    	            avoidLabelOverlap: false,
//    	            label: {
//    	                show: false,
//    	                position: 'center',
//    	                normal: {
//    	                    show: false,
//    	                    position: 'center'
//    	                },
//    	                emphasis: {
//    	                    show: false,
//    	                    textStyle: {
//    	                        fontSize: '10',
//    	                        fontWeight: 'bold'
//    	                    }
//    	                }
//    	            },
//    	            labelLine: {
//    	                normal: {
//    	                    show: false
//    	                }
//    	            },
//    	            data:[
//    	            	{value:335, name:'32.3%',
//    	                    label: {
//    	                        show: true,
//    	                        position: 'center',
//    	                        fontSize: 22,
//    	                        color: '#14EE3B',
//    	                        fontWeight:'bold',
//    	                    }
//    	                },
//    	                {value:110, name:'4',
//    	                    label: {
//    	                        show: false
//    	                    }}
//    	            ],
//    	            color:['#03CDFD','#3595F5'],
//    	        },
//    	    ]
//    	};
//    
//    var option4 = {
//    		backgroundColor: '#0B2967',
//    		title: {
//    	        text: '设备异常数量',
//    	        bottom: '0',
//    	        left: 'center',
//    	        textStyle: {
//    	        	color: '#B2FCFB',
//    	        },
//    	    },
//    	    tooltip: {
//    	        trigger: 'item',
//    	        formatter: "{a} <br/>{b}: {c} ({d}%)"
//    	    },
//    	    series: [
//    	    	{
//    	            name:'访问来源',
//    	            type:'pie',
//    	            radius: ['45%', '65%'],
//    	            avoidLabelOverlap: false,
//    	            label: {
//    	                show: false,
//    	                position: 'center',
//    	                normal: {
//    	                    show: false,
//    	                    position: 'center'
//    	                },
//    	                emphasis: {
//    	                    show: false,
//    	                    textStyle: {
//    	                        fontSize: '10',
//    	                        fontWeight: 'bold'
//    	                    }
//    	                }
//    	            },
//    	            labelLine: {
//    	                normal: {
//    	                    show: false
//    	                }
//    	            },
//    	            data:[
//    	            	{value:335, name:'32.3%',
//    	                    label: {
//    	                        show: true,
//    	                        position: 'center',
//    	                        fontSize: 22,
//    	                        color: '#14EE3B',
//    	                        fontWeight:'bold',
//    	                    }
//    	                },
//    	                {value:110, name:'4',
//    	                    label: {
//    	                        show: false
//    	                    }}
//    	            ],
//    	            color:['#03CDFD','#3595F5'],
//    	        },
//    	    ]
//    	};
//    
//    var option5 = {
//    		backgroundColor: '#0B2967',
//    		title: {
//    	        text: '设备异常数量',
//    	        bottom: '0',
//    	        left: 'center',
//    	        textStyle: {
//    	        	color: '#B2FCFB',
//    	        },
//    	    },
//    	    tooltip: {
//    	        trigger: 'item',
//    	        formatter: "{a} <br/>{b}: {c} ({d}%)"
//    	    },
//    	   
//    	    series: [
//    	    	{
//    	            name:'访问来源',
//    	            type:'pie',
//    	            radius: ['45%', '65%'],
//    	            avoidLabelOverlap: false,
//    	            label: {
//    	                show: false,
//    	                position: 'center',
//    	                normal: {
//    	                    show: false,
//    	                    position: 'center'
//    	                },
//    	                emphasis: {
//    	                    show: false,
//    	                    textStyle: {
//    	                        fontSize: '10',
//    	                        fontWeight: 'bold'
//    	                    }
//    	                }
//    	            },
//    	            labelLine: {
//    	                normal: {
//    	                    show: false
//    	                }
//    	            },
//    	            data:[
//    	            	{value:335, name:'32.3%',
//    	                    label: {
//    	                        show: true,
//    	                        position: 'center',
//    	                        fontSize: 22,
//    	                        color: '#14EE3B',
//    	                        fontWeight:'bold',
//    	                    }
//    	                },
//    	                {value:110, name:'4',
//    	                    label: {
//    	                        show: false
//    	                    }}
//    	            ],
//    	            color:['#03CDFD','#3595F5'],
//    	        },
//    	    ]
//    	};
//    
//    var option6 = {
//    		backgroundColor: '#0B2967',
//    		title: {
//    	        text: '设备异常数量',
//    	        bottom: '0',
//    	        left: 'center',
//    	        textStyle: {
//    	        	color: '#B2FCFB',
//    	        },
//    	    },
//    	    tooltip: {
//    	        trigger: 'item',
//    	        formatter: "{a} <br/>{b}: {c} ({d}%)"
//    	    },
//    	    series: [
//    	    	{
//    	            name:'访问来源',
//    	            type:'pie',
//    	            radius: ['45%', '65%'],
//    	            avoidLabelOverlap: false,
//    	            label: {
//    	                show: false,
//    	                position: 'center',
//    	                normal: {
//    	                    show: false,
//    	                    position: 'center'
//    	                },
//    	                emphasis: {
//    	                    show: false,
//    	                    textStyle: {
//    	                        fontSize: '10',
//    	                        fontWeight: 'bold'
//    	                    }
//    	                }
//    	            },
//    	            labelLine: {
//    	                normal: {
//    	                    show: false
//    	                }
//    	            },
//    	            data:[
//    	            	{value:335, name:'32.3%',
//    	                    label: {
//    	                        show: true,
//    	                        position: 'center',
//    	                        fontSize: 22,
//    	                        color: '#14EE3B',
//    	                        fontWeight:'bold',
//    	                    }
//    	                },
//    	                {value:110, name:'4',
//    	                    label: {
//    	                        show: false
//    	                    }}
//    	            ],
//    	            color:['#03CDFD','#3595F5'],
//    	        },
//    	    ]
//    	};
//    // 使用刚指定的配置项和数据显示图表。
//    chart1.setOption( option1 );
//    chart2.setOption( option2 );
//    chart3.setOption( option3 );
//    chart4.setOption( option4 );
//    chart5.setOption( option5 );
//    chart6.setOption( option6 );
	
	/*
	 * 初始化加载一级菜单
	 */
	$.grep( menoArr, function( item, index ){
		$('#firstMeno').append(
			'<li class="layui-nav-item" id=' + item.id + '>' +
				'<a href="javaScript:;">' +
					$.trim(item.first) + 
				 '</a>'+
			'</li>'		
		);
	})	
	element.init(); 
	
	
	/*
	 * 初始化加载二级菜单
	 */
	
	/*
	 * 加载用户名
	 */
	//获取usernum
	username = getCookie1("name");
	username = username.substr( 1, username.length-2);
	$('#userName').find('img').after(username);
})

/**
 * 事件绑定
 * @type 
 */
$(function(){
	//退出事件绑定
	$('#logout').on('click', logoutCallBack );
	
	//基本资料单击事件
	$('#userInfo').on( 'click', userInfoCE);
	
	//菜单栏单击事件
	$('.layui-nav-item').on('click', menoCallBack );
})

/**
 * 基本资料单击事件函数
 * @type 
 */
function userInfoCE(){
	console.log( '----------基本资料单击事件函数----------');
	
	//打开页面
}

/**
 * 退出事件绑定回调函数
 * @type 
 */
function logoutCallBack(){
	console.log( '----------退出事件绑定回调函数----------');
	//关闭链接请求
	$.ajax({
	    url: logoutUrl,
	    type: 'post',
	    data: {},
	    dataType: 'json',
	    success: function (jsonData) {
	    	console.log( jsonData );
	        if (jsonData.state == 302) {
	            location.href = ipPort +  jsonData.data;
	        }else{
	        	layer.msg("登出失败", {icon:2});
	        }
	    }
	});      
	return false;
}

/**
 * 退出请求成功回调函数
 * @type 
 */
function logoutSucc(){
	console.log( '----------退出请求成功回调函数----------');
	//跳转登录页
}

/**
 * 菜单栏单击事件
 * @type 
 */
function menoCallBack(){
	console.log( '----------菜单栏单击事件----------');	
//	console.log( $(this) );	
	//获取二级子菜单
	var secondMeno = $(this).attr('id');
	console.log( secondMeno );	
	$secondMeno = $('#secondMeno');
	$secondMeno.empty();
	$.grep( menoArr, function( item, index ){
		if( $.trim(item.id) == $.trim(secondMeno) ){
			var secondMenoArr = item.second.split(',');
			var secondMenoUrl = item.url.split(',');
			$.map( secondMenoArr, function( item1, index ){
				$secondMeno.append(
					'<li class="layui-nav-item layui-nav-itemed" '+ 
							' url=' + secondMenoUrl[index] + ' onclick="navClickBack(this);">' + 
				     	'<a class="" href="javascript:;">' + secondMenoArr[index] + '</a>' +
			        '</li>');
			})	
		}
	})	
	element.init(); 
	return false;
}

/**
 * 侧边菜单单击事件函数
 * @type 
 */
function navClickBack(obj){
	console.log( '----------侧边导航栏单击事件函数---------');	
	var url = $(obj).attr('url');
	//http://localhost:8001/html/userCenter/userManager.html
	//动态加载页面
	var a = $( '#indexContent' )
		.load( ipPort + url + ' .loadContent', function(returnDom){
			$( returnDom ).find( 'script' ).appendTo( '#indexContent' );
		});
}

/**
 * ws加载
 */
$(function(){
	/*
	 * ws验证
	 */
	if(typeof(WebSocket)=='undefined'){
    	layer.msg( "你的浏览器不支持消息推送" );
    	return;
    };
//    console.log( '-------------WebSocket------------' );
//    console.log(WebSocket);
	
	//ws连接,打开服务
	socket = new WebSocket( "ws://"+ ipPort.substr(6) + "/push/pushVideoListToWeb" );
	socket.onopen = function(){
		console.log("--------------ws服务已打开----------------");  
		socket.send( JSON.stringify({'test':20}) ); 
	}
	
	socket.onmessage = function( msg ){
		console.log("--------------ws接受到消息----------------");		
		wsMessage = msg.data;
		
		//通知
		if(  msg.data ){
			layer.open({
				type: 2,
				title: '消息提示',
			  	shade: false,
			  	anim: 2,
			  	area: ['400px', '250px'],
			  	maxmin: true,
			  	content: ipPort + '/html/userCenter/noticeMessage.html',
			  	offset: 'rb',
			  	zIndex: layer.zIndex, //重点1
			  	success: function(layero){
//			  		console.log(  $(layero[0]).children('div') );
			  		$( $(layero[0]).children('div')[1] ).empty().css(
			  			{"height":"200","width":"250","font-size":"14px",
			  			 "padding-left":"25px","padding-top":"20px"}
			  			)
			  			.text( msg.data );
//			  		console.log( wsMessage );
//			  		$(layero[0]).children('div').text();
//			  		$( $(layero[0]).children('div')[1] ).find('iframe').text('33333333');
//			  		var sonDom = $( $(layero[0]).children('div')[1] ).find('iframe').contents()[0];
//			  		console.log( $( $(layero[0]).children('div')[1] ).find('iframe').contents()[0] );
//			  		var $div = $( sonDom ).find( '#nmessage' ) ;
			    	layer.setTop(layero); //重点2
			  	}
			});    
		}		
	}
	
	socket.onclose=function(){
		console.log("--------------关闭ws服务--------------");
	}	
})