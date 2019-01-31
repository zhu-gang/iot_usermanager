
	/**  
     * @Title: LoginController.java
 	 * @Package cn.userCenter.controller
 	 * @Description: )
 	 * @author zhugang
 	 * @date 2019年1月12日
 	 * @version V1.0  
 	 */

        
package cn.soa.controller;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.AuthenticationException;
import org.apache.shiro.authc.DisabledAccountException;
import org.apache.shiro.authc.IncorrectCredentialsException;
import org.apache.shiro.authc.LockedAccountException;
import org.apache.shiro.authc.UnknownAccountException;
import org.apache.shiro.authc.UsernamePasswordToken;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.web.filter.authc.LogoutFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import cn.soa.entity.UserOrganization;
import cn.soa.entity.UserRole;
import cn.soa.entity.headResult.ResultJson;
import cn.soa.service.impl.RoleService;
import cn.soa.service.inter.RoleServiceInter;
import cn.soa.service.inter.UserServiceInter;
import cn.soa.util.GlobalUtil;

/**
  * @ClassName: LoginController
  * @Description: 角色 - 控制层
  * @author zhugang
  * @date 2019年1月12日
  */

@RestController
@RequestMapping("/role")
public class RoleController{
	@Autowired
	private RoleService roleService;
	private static Logger logger = LoggerFactory.getLogger( RoleController.class );
	
	@RequestMapping("/roles")
	public ResultJson queryAllroles(@RequestParam("page") int page ,@RequestParam("limit") int pageSize) {
		int count =roleService.countRoles();
		return new ResultJson(0,""+count,roleService.queryAllroles(page,pageSize));
	}
	@RequestMapping("/addOrUpdateRole")
	public ResultJson addOrUpdateRoles(UserRole userRole) {
		Integer rid=userRole.getRolid();
		int modifyCount=-1;
		if(rid==null||rid.equals("")) {
			modifyCount=roleService.saveUserRole(userRole);
		}
		modifyCount=roleService.modifyUserRoleById(userRole);
		if(modifyCount>0) {
			return new ResultJson(0,"角色操作成功");
		}
		return new ResultJson(1,"角色操作失败");
		
	}
}
