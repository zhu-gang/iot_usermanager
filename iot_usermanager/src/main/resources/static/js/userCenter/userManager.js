$(function(){
	/**
	 * 参数定义
	 */
	var table = layui.table,
		layer = layui.layer;
	
	/**
	 * 页面初始化
	 */
	//表格初始化
	table.render({
		elem: '#user_table'
	    ,url:'/test/table/demo3.json'
	    ,toolbar: true
	    ,title: '用户数据表'
	    ,totalRow: true
	    ,cols: [[
	      {field:'id', title:'序号', width:80, fixed: 'left', unresize: true}
	      ,{field:'username', title:'用户编号', width:120, edit: 'text'}
	      ,{field:'email', title:'姓名', width:150, edit: 'text'}
	      ,{field:'experience', title:'状态', width:80, sort: true, totalRow: true}
	      ,{field:'sex', title:'创建时间', width:80, edit: 'text', sort: true}
	    ,page: true
	    ,response: {
	      statusCode: 200 //重新规定成功的状态码为 200，table 组件默认为 0
	    }
	    ,parseData: function(res){ //将原始数据解析成 table 组件所规定的数据
	      return {
	        "code": res.status, //解析接口状态
	        "msg": res.message, //解析提示文本
	        "count": res.total, //解析数据长度
	        "data": res.rows.item //解析数据列表
	      };
	    }
	});
	
	/**
	 * 事件绑定
	 */
	var active = {
			search: function(){
				console.log( '---------搜索事件执行---------' );
				var demoReload = $('#reload');
	      
				//执行重载
				table.reload('testReload', {
			        page: {
			          curr: 1 //重新从第 1 页开始
			        }
			        ,where: {
			        	key: {
			        		id: demoReload.val()
			        	}
			        }
				});
			},
			add: function(){
				console.log( '---------增加用户事件执行---------' );
				layer.open({
			        type: 1,
			        title: '增加用户'
			        ,offset: 'auto' 
			        ,id: 'layerDemo'+ 1 //防止重复弹出
			        ,content: $('#form_add_user')
			        ,btn: ['提交', '取消']
			        ,btnAlign: 'c' //按钮居中
			        ,shade: 0 //不显示遮罩
			        ,yes: function(){
			        	layer.closeAll();
			        },
			        success: function( layero, index ){
			        	//初始化加载
			        	console.log( '---------增加用户页面初始化---------' );
			        	
			        }
			    });
			},
			
		};
		  
	$('.demoTable .layui-btn').on('click', function(){
		var type = $(this).attr('id');
		active[id] ? active[id].call(this) : '';
	});
	
	
	//监听工具条
	table.on('tool(user_table)', function(obj){
	    var data = obj.data;
	    if(obj.event === 'detail'){
	    	layer.msg('ID：'+ data.id + ' 的查看操作');	    	
	    	layer.open({
		        type: 1,
		        title: '用户与组织关系管理'
		        ,offset: 'auto' 
		        ,id: 'layerDemo'+ 1 //防止重复弹出
		        ,content: $('#userOrgan')
		        ,btn: ['确定', '取消']
		        ,btnAlign: 'c' //按钮居中
		        ,shade: 0 //不显示遮罩
		        ,yes: function( index, layero){
		        	//layer.closeAll();
		        	//获取选中值，对比
		        	
		        	//请求
		        },
		        btn2: function(index, layero){
		            //按钮【按钮二】的回调
		            
		            //return false 开启该代码可禁止点击该按钮关闭
		        },
		        success: function( layero, index ){
		        	console.log( '---------打开用户组织管理页面---------' );
		        	var editObj=null,ptable=null,treeGrid=null,tableId='treeTable';
		        	layui.config({
		        	    base: '/jsPackage/web/design/extend/'
		        	}).extend({
		        	    treeGrid:'treeGrid'
		        	}).use(['jquery','treeGrid','layer'], function(){
		        	    var $=layui.jquery;
		        	    treeGrid = layui.treeGrid;//很重要
		        	    ptable=treeGrid.render({
		        	        id:tableId
		        	        ,elem: '#'+tableId
		        	        ,url:ipPort +'/user/list'
		        	        ,cellMinWidth: 100
		        	        ,idField:'usernum'//必須字段
		        	        ,treeId:'usernum'//树形id字段名称
		        	        ,treeUpId:'parent_id'//树形父id字段名称
		        	        ,treeShowName:'name'//以树形式显示的字段
		        	        ,heightRemove:[".dHead",10]//不计算的高度,表格设定的是固定高度，此项不生效
		        	        ,height:'80%'
		        	        ,isFilter:false
		        	        ,iconOpen:true//是否显示图标【默认显示】
		        	        ,isOpenDefault:false//节点默认是展开还是折叠【默认展开】
		        	        ,loading:true
		        	        ,method:'post'
		        	        ,isPage:false
		        	        ,cols: [[
		        	            {type:'numbers'}
		        	            ,{type:'checkbox'}
		        	            ,{field:'name', width:300, title: '人员组织名称',edit:'text'}
		        	            ,{field:'usernum',width:180, title: 'id',edit:'text'}
		        	            ,{field:'parent_id',width:150, title: 'pid'}
	        	                ,templet: function(d){
	        	                }
		        	        ]]
		        	        ,parseData:function (res) {//数据加载后回调
		        	            return res;
		        	        }
		        	        ,onClickRow:function (index, o) {
//		        	            console.log(index,o,"单击！");

		        	        }
		        	        ,onDblClickRow:function (index, o) {
//		        	            console.log(index,o,"双击");
		        	        }
		        	        ,onCheck:function (obj,checked,isAll) {//复选事件
//		        	            console.log(obj,checked,isAll);
		        	        }
		        	        ,onRadio:function (obj) {//单选事件
		        	            console.log(obj);
		        	        }
		        	    });
		        		//操作按钮监听
		        	    treeGrid.on('tool('+tableId+')',function (obj) {
		        	        if(obj.event === 'del'){//删除行
		        	            del(obj);
		        	        }else if(obj.event==="add"){//添加行
		        	            add(obj);
		        	        }else if(obj.event==="save"){//保存
		        	        	save(obj);
		        	        }else if(obj.event==="open"){//启用
		        	        	open(obj);
		        	        }
		        	    });
		        	});
		        	//数据初始化 LAY_CHECKED:true
		        	console.log( '---------用户组织数据初始化---------' );
		        	
		        }
	    	}) 
	    } else if(obj.event === 'del'){
	    	layer.confirm('真的删除行么', function(index){
	    		obj.del();
	    		layer.close(index);
	    	});
	    } else if(obj.event === 'edit'){
	    	layer.alert('编辑行：<br>'+ JSON.stringify(data))
	    }
	});
	
	
	/**
	 *
	 */
	function print() {
	    console.log(treeGrid.cache[tableId]);
	    var loadIndex=layer.msg("对象已打印，按F12，在控制台查看！", {
	        time:3000
	        ,offset: 'auto'//顶部
	        ,shade: 0
	    });
	}
	function openorclose() {
	    var map=treeGrid.getDataMap(tableId);
	    var o= map['102'];
	    treeGrid.treeNodeOpen(tableId,o,!o[treeGrid.config.cols.isOpen]);
	}


	function openAll() {
	    var treedata=treeGrid.getDataTreeList(tableId);
	    treeGrid.treeOpenAll(tableId,!treedata[0][treeGrid.config.cols.isOpen]);
	}

	function getCheckData() {
	    var checkStatus = treeGrid.checkStatus(tableId)
	        ,data = checkStatus.data;
	    layer.alert(JSON.stringify(data));
	}
	function radioStatus() {
	    var data = treeGrid.radioStatus(tableId)
	    layer.alert(JSON.stringify(data));
	}
	function getCheckLength() {
	    var checkStatus = treeGrid.checkStatus(tableId)
	        ,data = checkStatus.data;
	    layer.msg('选中了：'+ data.length + ' 个');
	}

	function reload() {
	    treeGrid.reload(tableId,{
	        page:{
	            curr:1
	        }
	    });
	}
	function query() {
	    treeGrid.query(tableId,{
	        where:{
	            name:'sdfsdfsdf'
	        }
	    });
	}

})