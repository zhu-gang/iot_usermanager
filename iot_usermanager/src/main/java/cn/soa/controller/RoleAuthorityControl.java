
/**
 * <一句话功能描述>
 * <p>
 * @author 陈宇林
 * @version [版本号, 2019年1月31日]
 * @see [相关类/方法]
 * @since [产品/模块版本]
 */
package cn.soa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cn.soa.entity.IotUserAuthority;
import cn.soa.entity.RoleAuthority;
import cn.soa.entity.headResult.UserTableJson;
import cn.soa.service.inter.RoleAuthorityServiceInter;

@RestController
@RequestMapping("/roleAuthority")
public class RoleAuthorityControl {
	
	@Autowired
	private RoleAuthorityServiceInter authorityService;
	
	
	@RequestMapping("/getAuthotityInfo")
	public UserTableJson<List<RoleAuthority>> getAuthorityInfo(){
		List<RoleAuthority>  authorityInfo = authorityService.getAuthorityInfo();
		UserTableJson<List<RoleAuthority>> reObj = new UserTableJson<List<RoleAuthority>>("success", 0, "查询成功", authorityInfo, authorityInfo.size(), true);
		return reObj;
	}

}
