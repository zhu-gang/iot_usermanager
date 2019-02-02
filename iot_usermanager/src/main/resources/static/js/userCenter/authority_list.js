layui.config({
			base : '../../module/'
		}).extend({
			treetable : 'treetable-lay/treetable'
		}).use(['table', 'treetable'], function() {
	var $ = layui.jquery;
	var table = layui.table;
	var treetable = layui.treetable;

	// 渲染表格
	layer.load(2);
	treetable.render({
		treeColIndex : 0,
		treeSpid : -1,
		treeIdName : 'modId',
		treePidName : 'parentId',
		elem : '#auth-table',
		url: '/roleAuthority/getAuthotityInfo',
		page : false,
		cols : [[/*
					 * { type : 'numbers' },
					 */{
					field : 'name',
					minWidth : 200,
					title : '权限名称'
				}, {
					field : 'resouceName',
					title : '资源名称'
				}, {
					field : 'url',
					title : '资源URL'
				}, {
					field : 'describe',
					title : '资源描述'
				}, {
					field : 'note',
					title : '权限备注'
				},{
					field : 'type',
					width : 80,
					align : 'center',
					templet : function(d) {
						if (d.type == 0) {
							return '<span class="layui-badge layui-bg-gray">模块</span>';
						}
						else if (d.type == 1) {
							return '<span class="layui-badge layui-bg-blue">菜单</span>';
						} else {
							return '<span class="layui-badge-rim">其他</span>';
						}
					},
					title : '类型'
				},{
					field : 'role',
					title : '角色'
				}

		]],
		done : function() {
			layer.closeAll('loading');
		}
	});

	$('#btn-expand').click(function() {
				treetable.expandAll('#auth-table');
			});

	$('#btn-fold').click(function() {
				treetable.foldAll('#auth-table');
			});

	$('#btn-search').click(function() {
		var keyword = $('#edt-search').val();
		var searchCount = 0;
		$('#auth-table').next('.treeTable')
				.find('.layui-table-body tbody tr td').each(function() {
					$(this).css('background-color', 'transparent');
					var text = $(this).text();
					if (keyword != '' && text.indexOf(keyword) >= 0) {
						$(this)
								.css('background-color',
										'rgba(250,230,160,0.5)');
						if (searchCount == 0) {
							treetable.expandAll('#auth-table');
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
});