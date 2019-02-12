/**  
 * @Title: RoleServiceInter.java
 * @Package cn.userCenter.service.inter
 * @Description: )
 * @author zhugang
 * @date 2019年1月24日
 * @version V1.0  
 */

        
package cn.soa.service.inter;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import cn.soa.entity.UserRole;


/**
  * @ClassName: RoleServiceInter
  * @Description: 
  * @author zhugang
  * @date 2019年1月24日
  */

public interface RoleServiceInter {


	 /**   
	  * @Title: getUserRoleByUserid   
	  * @Description: 根据用户id查询用户具有的角色                 
	  * @return: List<UserRole>        
	  */  
	List<UserRole> getUserRoleByNum(String usernum);
	
    List<UserRole> queryAllroles(int page, int pageSize);
    int countRoles();
    public int saveUserRole( UserRole userRole);
    public int modifyUserRoleById(UserRole userRole);
}
