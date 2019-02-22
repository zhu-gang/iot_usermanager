layui.config({
			base : '/jsPackage/web/design/module/'
		}).extend({
			treetable : 'treetable-lay/treetable'
		}).use(['table', 'laydate', 'treetable', 'form'], function() {
	var $ = layui.jquery;
	var table = layui.table;
	var treetable = layui.treetable;
	var form = layui.form;
	var laydate = layui.laydate;

	// 渲染表格
	layer.load(2);
	loadTable();

	/**
	 * 加载表格
	 */
	function loadTable() {
		treetable.render({
					treeColIndex : 1,
					treeSpid : -1,
					treeIdName : 'modId',
					treePidName : 'parentId',
					elem : '#resource_table',
					/* url : '/resource/getAllResourceInfo', */
					data : [{
								"modId" : "5A85EC3AD44C4D65867AEB57DF6328B3",
								"name" : "首页",
								"url" : "/index.html",
								"describe" : "首页",
								"createTime" : "2019-02-13 16:22:55",
								"lastModifyTime" : "2019-02-13 16:22:55",
								"remark1" : null,
								"parentId" : "-1",
							}, {
								"modId" : "8D44BA94651D4F2F9DF87CE34D0F2E74",
								"name" : "闭环管理",
								"url" : "/test.html",
								"describe" : "闭环管理",
								"createTime" : "2019-02-13 16:23:36",
								"lastModifyTime" : "2019-02-13 16:23:36",
								"remark1" : null,
								"parentId" : "-1",
							}, {
								"modId" : "C35D5C9124FE4BDB8D719F6A534CB331",
								"name" : "闭环管理介绍",
								"url" : "/test.html",
								"describe" : "闭环管理介绍",
								"createTime" : "2019-02-13 16:24:06",
								"lastModifyTime" : "2019-02-13 16:24:06",
								"remark1" : null,
								"parentId" : "8D44BA94651D4F2F9DF87CE34D0F2E74",
							}, {
								"modId" : "E91FFA5DEE9B469FA4BD62E5C87370B4",
								"name" : "问题上报",
								"url" : "/test.html",
								"describe" : "问题上报",
								"createTime" : "2019-02-13 16:24:33",
								"lastModifyTime" : "2019-02-13 16:24:33",
								"remark1" : null,
								"parentId" : "8D44BA94651D4F2F9DF87CE34D0F2E74",
							}, {
								"modId" : "35567A3C44EC4F2EB9E61A7AA9A9FE4A",
								"name" : "问题跟踪",
								"url" : "/test.html",
								"describe" : "问题跟踪",
								"createTime" : "2019-02-13 16:25:05",
								"lastModifyTime" : "2019-02-13 16:25:05",
								"remark1" : null,
								"parentId" : "8D44BA94651D4F2F9DF87CE34D0F2E74",
							}, {
								"modId" : "A7C189D030F5410DAE8A8226B8AEF636",
								"name" : "事故事件汇总查询",
								"url" : "/test.html",
								"describe" : "事故事件汇总查询",
								"createTime" : "2019-02-13 16:25:28",
								"lastModifyTime" : "2019-02-13 16:25:28",
								"remark1" : null,
								"parentId" : "8D44BA94651D4F2F9DF87CE34D0F2E74",
							}, {
								"modId" : "187DECD08549433CA362D8603D7F9AC8",
								"name" : "派工单单据管理",
								"url" : "/test.html",
								"describe" : "派工单单据管理",
								"createTime" : "2019-02-13 16:27:36",
								"lastModifyTime" : "2019-02-13 16:27:36",
								"remark1" : null,
								"parentId" : "8D44BA94651D4F2F9DF87CE34D0F2E74",
							}, {
								"modId" : "3296CD7E555042D38AB92A50B0164C7F",
								"name" : "设备管理",
								"url" : "/test.html",
								"describe" : "设备管理",
								"createTime" : "2019-02-13 16:28:16",
								"lastModifyTime" : "2019-02-13 16:28:16",
								"remark1" : null,
								"parentId" : "-1",
							}, {
								"modId" : "3A2C179E65044937B6C4B29C136AB7DE",
								"name" : "工厂概况",
								"url" : "/test.html",
								"describe" : "工厂概况",
								"createTime" : "2019-02-13 16:28:44",
								"lastModifyTime" : "2019-02-13 16:28:44",
								"remark1" : null,
								"parentId" : "3296CD7E555042D38AB92A50B0164C7F",
							}, {
								"modId" : "AE33D28ACE5742A9A45C4F90AB869ADD",
								"name" : "工厂设计",
								"url" : "/test.html",
								"describe" : "工厂设计",
								"createTime" : "2019-02-13 16:29:06",
								"lastModifyTime" : "2019-02-13 16:29:06",
								"remark1" : null,
								"parentId" : "3296CD7E555042D38AB92A50B0164C7F",
							}, {
								"modId" : "0EFA4672FBB4453E8690D054E61322C1",
								"name" : "技术改造",
								"url" : "/test.html",
								"describe" : "技术改造",
								"createTime" : "2019-02-13 16:29:27",
								"lastModifyTime" : "2019-02-13 16:29:27",
								"remark1" : null,
								"parentId" : "3296CD7E555042D38AB92A50B0164C7F",
							}, {
								"modId" : "F795D3F43EFD4C71BA7E3E170A4E2F62",
								"name" : "设备台账",
								"url" : "/test.html",
								"describe" : "设备台账",
								"createTime" : "2019-02-13 16:31:22",
								"lastModifyTime" : "2019-02-13 16:31:22",
								"remark1" : null,
								"parentId" : "3296CD7E555042D38AB92A50B0164C7F",
							}, {
								"modId" : "986DA563AE4B452B8628170A3D312CF0",
								"name" : "工艺流程图",
								"url" : "/test.html",
								"describe" : "工艺流程图",
								"createTime" : "2019-02-13 16:31:53",
								"lastModifyTime" : "2019-02-13 16:31:53",
								"remark1" : null,
								"parentId" : "3296CD7E555042D38AB92A50B0164C7F",
							}, {
								"modId" : "9E01A7B64B6F40FE86A90A733843D14C",
								"name" : "电子巡检",
								"url" : "/test.html",
								"describe" : "电子巡检",
								"createTime" : "2019-02-13 16:32:59",
								"lastModifyTime" : "2019-02-13 16:32:59",
								"remark1" : null,
								"parentId" : "-1",
								"isParent" : "0"
							}],
					page : false,
					cols : [[{
								field : 'modId',
								title : 'id',
								hide : true
							}, {
								field : 'name',
								minWidth : 200,
								title : '资源名称'
							}, {
								field : 'url',
								title : '资源URL'
							}, {
								field : 'describe',
								title : '资源描述'
							}, {
								field : 'createTime',
								title : '创建时间'
							}, {
								field : 'lastModifyTime',
								title : '最后修改时间'
							}, {
								title : '操作',
								fixed : 'right',
								width : 118,
								align : 'center',
								toolbar : '#barDemo'
							}

					]],
					done : function() {
						layer.closeAll('loading');
					}
				});

	}
	$('#btn-expand').click(function() {
				treetable.expandAll('#resource_table');
			});

	$('#btn-fold').click(function() {
				treetable.foldAll('#resource_table');
			});

	$('#btn-search').click(function() {
		var keyword = $('#edt-search').val();
		var searchCount = 0;
		$('#resource_table').next('.treeTable')
				.find('.layui-table-body tbody tr td').each(function() {
					$(this).css('background-color', 'transparent');
					var text = $(this).text();
					if (keyword != '' && text.indexOf(keyword) >= 0) {
						$(this)
								.css('background-color',
										'rgba(250,230,160,0.5)');
						if (searchCount == 0) {
							treetable.expandAll('#resource_table');
							$('html,body').stop(true);
							$('html,body').animate({
										scrollTop : $(this).offset().top - 150
									}, 500);
						}
						searchCount++;
					}
				});
		if (keyword == '') {
			layer.msg("请输入搜索内容", {
						icon : 5
					});
		} else if (searchCount == 0) {
			layer.msg("没有匹配结果", {
						icon : 5
					});
		}
	});

	// 监听“新增”按钮点击事件
	var add_layer;
	$('#btn-add').click(function() {
		/**
		 * 清除数据
		 */

		$("#parent_resource option").remove();
		$("#resource_name").val(null);
		$("#resource_url").val(null);
		$("#resource_desc").val(null);
		$("#btn_update").css("display", "none");
		$("#btn_commit").css("display", "inline");

		add_layer = layer.open({
					title : '资源新增',
					area : ['30%', '60%'], // 宽高
					type : 1,
					content : $('#resource_add'),
					success:function(layero){
					     var mask = $(".layui-layer-shade");
					     mask.appendTo(layero.parent());
					     //其中：layero是弹层的DOM对象
					}
				});
		$.ajax({
			url : '/resource/getParentResource',
			dataType : 'json',
			success : function(data) {
				// console.log(data);
				var parent_resources = data.data;

				var html = '<option value=""></option><option value="-1">无</option>';
				parent_resources.forEach(function(currentValue, index, arr) {
							html += '<option value = "' + currentValue.MODID
									+ '">' + currentValue.NAME + '</option>'

						});
				$("#parent_resource").append(html);
				console.log(html);
				form.render('select');
			},
			error : function() {

			}
		});

	});

	// 监听更新数据按钮点击事件
	form.on('submit(btn_update)', function(data) {
				// 获取数据
				var resource_name = $("#resource_name").val();// 资源名称
				var parent_resource = $("#parent_resource").val();// 父级资源id
				var is_parent = $("#is_parent").val();// 是否为父级
				var resource_url = $("#resource_url").val();// 资源url
				var resource_desc = $("#resource_desc").val();// 资源描述
				var mod_id = $("#mod_id").val();

				var fdata = {
					name : resource_name,
					parentId : parent_resource,
					isParent : is_parent,
					url : resource_url,
					describe : resource_desc,
					modId : mod_id
				};

				layer.close(add_layer);
				$.ajax({
							url : '/resource/updateResource',
							data : fdata,
							success : function(data) {

								if (data.state == 0) {
									layer.msg("更新数据成功！！");
									loadTable();
								} else {
									layer.msg("更新数据失败，请联系管理员！");
								}

							},
							error : function() {
								layer.msg("更新数据失败，请联系管理员！");
							}
						});
				return false;

			});
	// 监听提交按钮点击事件
	form.on('submit(btn_commit)', function(data) {

				// 获取数据
				var resource_name = $("#resource_name").val();// 资源名称
				var parent_resource = $("#parent_resource").val();// 父级资源id
				var is_parent = $("#is_parent").val();// 是否为父级
				var resource_url = $("#resource_url").val();// 资源url
				var resource_desc = $("#resource_desc").val();// 资源描述

				var fdata = {
					name : resource_name,
					parentId : parent_resource,
					isParent : is_parent,
					url : resource_url,
					describe : resource_desc
				};

				layer.close(add_layer);
				$.ajax({
							url : '/resource/addResource',
							data : fdata,
							success : function(data) {

								if (data.state == 0) {
									layer.msg("添加数据成功！！");
									loadTable();
								} else {
									layer.msg("添加数据失败，请联系管理员！");
								}

							},
							error : function() {
								layer.msg("添加数据失败，请联系管理员！");
							}
						});
				return false;
			});

	// 监听取消按钮事件
	$("#btn_cancel").click(function() {
				layer.close(add_layer);
				return false;
			});

	// 监听行工具事件
	table.on('tool(resource_table)', function(obj) {
		var data = obj.data;
		// console.log(obj)
		if (obj.event === 'del') {
			layer.confirm('若为父级数据，其所有子级数据都将被删除！确定删除该数据吗？', function(index) {
						// obj.del();
						console.log(obj);

						/**
						 * 发送请求，删除数据
						 */
						$.ajax({
									method : "get",
									url : "/resource/delResourceInfoById",
									data : {
										modId : obj.data.modId,
										parentId : obj.data.parentId
									},
									success : function(data) {
										obj.del();
										if (data.data >= 1) {
											layer.msg("删除数据成功");
											loadTable();
										} else {
											layer.msg("删除数据失败，请联系管理员！");
										}

									},
									error : function() {
										layer.msg("删除数据失败，请联系管理员！");
									}
								});

						layer.close(index);
					});
		} else if (obj.event === 'edit') {

			console.log(obj);

			/**
			 * 清除数据
			 */
			$("#parent_resource option").remove();

			/**
			 * 设置样式
			 */
			$("#btn_update").css("display", "inline");
			$("#btn_commit").css("display", "none");

			/**
			 * 表单赋值
			 * 
			 */

			$("#mod_id").val(obj.data.modId);
			$("#resource_name").val(obj.data.name);
			$("#is_parent").val(obj.data.isParent);
			$("#resource_url").val(obj.data.url);
			$("#resource_desc").val(obj.data.describe);

			add_layer = layer.open({
						title : '资源编辑',
						area : ['30%', '60%'], // 宽高
						type : 1,
						content : $('#resource_add'),
						success:function(layero){
						     var mask = $(".layui-layer-shade");
						     mask.appendTo(layero.parent());
						     //其中：layero是弹层的DOM对象
						}
					});
			$.ajax({
				url : '/resource/getParentResource',
				dataType : 'json',
				success : function(data) {
					// console.log(data);
					var parent_resources = data.data;

					var html = '<option value=""></option><option value="-1">无</option>';
					parent_resources.forEach(
							function(currentValue, index, arr) {
								html += '<option value = "'
										+ currentValue.MODID + '">'
										+ currentValue.NAME + '</option>'

							});
					$("#parent_resource").append(html);
					console.log(html);
					$("#parent_resource").val(obj.data.parentId);
					form.render('select');

				},
				error : function() {

				}
			});

		}
	});

});