
	/**  
     * @Title: userServiceInter.java
 	 * @Package cn.userCenter.service.inter
 	 * @Description: )
 	 * @author zhugang
 	 * @date 2019年1月12日
 	 * @version V1.0  
 	 */

        
package cn.soa.service.inter;

import java.util.List;

import cn.soa.entity.UserInfo;
import cn.soa.entity.UserOrganization;


/**
 	 * @ClassName: userServiceInter
 	 * @Description: 
 	 * @author zhugang
 	 * @date 2019年1月12日
 	 */

public interface UserServiceInter {
	
	/**   
	  * @Title: getUserOrganById   
	  * @Description: 根据用户id查询用户信息       
	  * @return: UserOrganization        
	  */
	public UserOrganization getUserOrganById( int userId );

	
	 /**   
	  * @Title: getUserInfoByUserId   
	  * @Description: 根据用户唯一标示userid查询用户信息        
	  * @return: UserInfo        
	  */  
	public UserInfo getUserInfoByUserId(int userid);

	
	 /**   
	  * @Title: getUserInfoByNum   
	  * @Description:  根据用户唯一标示usernum查询用户信息         
	  * @return: UserInfo        
	  */  
	UserInfo getUserInfoByNum(int usernum);
	
	
	 /**   
	  * @Title: getUserOrganByUsernum   
	  * @Description:   根据用户唯一标示num查询用户          
	  * @return: UserOrganization        
	  */  
	UserOrganization getUserOrganByUsernum(int usernum);


	
	 /**   
	  * @Title: saveUserServ   
	  * @Description:  新增用户      
	  * @return: int        
	  */  
	int saveUserServ(UserOrganization user);


	
	 /**   
	  * @Title: saveUserInfoServ   
	  * @Description:  新增用户信息              
	  * @return: int   返回数据库受影响的条目            
	  */  
	int saveUserInfoServ(UserInfo userInfo);


	
	 /**   
	  * @Title: getUserAllListServ   
	  * @Description: 查询所有用户       
	  * @return: UserOrganization        
	  */  
	List<UserOrganization> getUserAllListServ();


	
	 /**   
	  * @Title: deleteUserByNumServ   
	  * @Description: 根据usernum删除用户            
	  * @return: int        
	  */  
	int deleteUserByNumServ(int usernum);


	
	


}
