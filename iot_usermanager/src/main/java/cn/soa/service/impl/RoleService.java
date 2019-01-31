
	/**  
     * @Title: userService.java
 	 * @Package cn.userCenter.service.impl
 	 * @Description: )
 	 * @author zhugang
 	 * @date 2019年1月12日
 	 * @version V1.0  
 	 */

        
package cn.soa.service.impl;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.soa.dao.UserRoleMapper;
import cn.soa.entity.UserRole;
import cn.soa.service.inter.RoleServiceInter;


	/**
 	 * @ClassName: userService
 	 * @Description: 用户信息服务  - 业务层
 	 * @author zhugang
 	 * @date 2019年1月12日
 	 */
@Service
public class RoleService implements RoleServiceInter{
	private static Logger logger = LoggerFactory.getLogger( RoleService.class );	
	
	@Autowired
	private UserRoleMapper userRoleMapper;

	
	 /**   
	  * @Title: getUserRoleByUserid   
	  * @Description: 根据用户id查询用户具有的角色           
	  * @return: UserRole        
	  */  
	@Override
	public List<UserRole> getUserRoleByNum( int usernum ) {
		List<UserRole> userRoles = userRoleMapper.findUserRoleByNum(usernum);
		return userRoles;
	}


	@Override
	public List<UserRole> queryAllroles(int page, int pageSize) {
		return userRoleMapper.queryAllroles((page-1)*pageSize,page*pageSize);
	}


	@Override
	public int countRoles() {
		// TODO A.uto-generated method stub
		return userRoleMapper.countRoles();
	}


	@Override
	public int saveUserRole(UserRole userRole) {
		
		return userRoleMapper.saveUserRole(userRole);
	}


	@Override
	public int modifyUserRoleById(UserRole userRole) {
		// TODO Auto-generated method stub
		return userRoleMapper.modifyUserRoleById(userRole);
	}	
	
}
