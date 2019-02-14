
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
	public UserOrganization getUserOrganById( String userid );

	
	 /**   
	  * @Title: getUserInfoByUserId   
	  * @Description: 根据用户唯一标示userid查询用户信息        
	  * @return: UserInfo        
	  */  
	public UserInfo getUserInfoByUserId( String userid);

	
	 /**   
	  * @Title: getUserInfoByNum   
	  * @Description:  根据用户唯一标示usernum查询用户信息         
	  * @return: UserInfo        
	  */  
	UserInfo getUserInfoByNum( String usernum);
	
	
	 /**   
	  * @Title: getUserOrganByUsernum   
	  * @Description:   根据用户唯一标示num查询用户          
	  * @return: UserOrganization        
	  */  
	UserOrganization getUserOrganByUsernum( String usernum);


	
	 /**   
	  * @Title: saveUserServ   
	  * @Description:  新增用户      
	  * @return: String        
	  */  
	String saveUserServ(UserOrganization user);


	
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
	int deleteUserByNumServ(String usernum);


	/**   
	 * @Title: deleteUserInfoByNumServ   
	 * @Description: 根据num删除用户信息  
	 * @param: @param usernum
	 * @param: @return      
	 * @return: int        
	 */  
	int deleteUserInfoByNumServ(String usernum);


	/**   
	 * @Title: deleteUserAndInfoByNum   
	 * @Description: 根据usernum删除用户和用户信息 
	 * @param: @param usernum
	 * @param: @return      
	 * @return: int        
	 */  
	int deleteUserAndInfoByNum(String usernum);		


}
