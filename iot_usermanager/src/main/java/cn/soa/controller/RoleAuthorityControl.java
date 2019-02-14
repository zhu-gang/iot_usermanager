
/**
 * <一句话功能描述>
 * <p>
 * @author 陈宇林
 * @version [版本号, 2019年1月31日]
 * @see [相关类/方法]
 * @since [产品/模块版本]
 */
package cn.soa.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cn.soa.entity.IotUserAuthority;
import cn.soa.entity.RoleAuthority;
import cn.soa.entity.headResult.ResultJson;
import cn.soa.entity.headResult.UserTableJson;
import cn.soa.service.inter.RoleAuthorityServiceInter;

@RestController
@RequestMapping("/roleAuthority")
public class RoleAuthorityControl {
	
	@Autowired
	private RoleAuthorityServiceInter authorityService;
	
	/**
	 * 获取权限数据
	 * @return
	 */
	@RequestMapping("/getAuthotityInfo")
	public UserTableJson<List<RoleAuthority>> getAuthorityInfo(){
		List<RoleAuthority>  authorityInfo = authorityService.getAuthorityInfo();
		//List<RoleAuthority>  authorityInfo = new ArrayList<RoleAuthority>();
		UserTableJson<List<RoleAuthority>> reObj = new UserTableJson<List<RoleAuthority>>("success", 0, "查询成功", authorityInfo, authorityInfo.size(), true);
		return reObj;
	}
	
	/**
	 * 增加权限数据
	 * @param authority
	 * @return
	 */
	@RequestMapping("/addAuthority")
	public ResultJson<Integer> addAuthorityInfo(IotUserAuthority authority){
		List<IotUserAuthority> authorityInfo = new ArrayList<IotUserAuthority>();
		authorityInfo.add(authority);
		Integer result =  authorityService.addAuthorityInfo(authorityInfo);
		ResultJson<Integer> reObj = new ResultJson<Integer>(0, "添加数据成功", result);
		
		return reObj;
		
	}
	
	@RequestMapping("/delAuthority")
	public ResultJson<Integer> delAuthorityInfo(String autid){
		List<String> ids = new ArrayList<String>();
		ids.add(autid);
		Integer result = authorityService.deleteAuthorityInfo(ids);
		ResultJson<Integer> reObj = new ResultJson<Integer>(0, "添加数据成功", result);
		return reObj;
	}
	
	
	

}
