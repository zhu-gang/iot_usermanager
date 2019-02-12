/**  
 * @Title: userMapper.java
 * @Package cn.userCenter.dao
 * @Description: TODO(用一句话描述该文件做什么)
 * @author zhugang
 * @date 2019年1月9日
 * @version V1.0  
 */

        
package cn.soa.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import cn.soa.entity.UserOrganization;


/**
 * @ClassName: userMapper
 * @Description: 用户数据dao层
 * @author zhugang
 * @date 2019年1月9日
 *
 */

@Mapper
public interface UserMapper {
	
	/** 
	 * @Title: findUserById 
	 * @Description: 根据用户id查询用户信息
	 */
	public UserOrganization findUserById(@Param("userId") String userId);
	
	
	 /**   
	  * @Title: findUserByUsernum   
	  * @Description: 根据用户唯一标识查询用户信息      
	  * @return: UserOrganization        
	  */  
	public UserOrganization findUserByUsernum(@Param("userNum") String userNum);
	
	
	 /**   
	  * @Title: findUserAll   
	  * @Description: 查询所有用户信息       
	  * @return: UserOrganization        
	  */  
	public List<UserOrganization> findUserAll();
	
	
	 /**   
	  * @Title: findUsersAndState   
	  * @Description: 查询所有用户信息和对应的状态       
	  * @return: List<UserOrganization>        
	  */  
//	public List<UserOrganization> findUsersAndState();
		
	
	 /** 
	 * @Title: saveUser 
	 * @Description: 保存用户信息
	 * @return: int 返回数据库受影响的条数
	 */
	public int saveUser(@Param("userOrgan") UserOrganization userOrgan);
	
	 /** 
	  * @Title: saveUser 
	  * @Description: 保存用户信息
	  * @return: int 返回新增数据id
	  */
	//public int saveUserBackId(@Param("userOrgan") UserOrganization userOrgan);
	public int saveUserBackId(UserOrganization userOrgan);
	
	
	 /** 
	 * @Title: 批量新增用户 
	 * @Description: TODO 
	 */
	public int saveUserByBatch(@Param("userOrgans") List<UserOrganization> userOrgans);
	
	 /** 
	 * @Title: modifyUserById 
	 * @Description: 修改用户信息 
	 */
	public int modifyUserById(@Param("userOrgan") UserOrganization userOrgan);
	
	
	 /** 
	 * @Title: deleteUserById 
	 * @Description: 根据用户id删除用户
	 */
	public int deleteUserById(@Param("userid") String userid);
	
	
	 /**   
	  * @Title: deleteUserByUsernum   
	  * @Description: 根据usernum删除用户       
	  * @return: int        
	  */  
	public int deleteUserByUsernum(@Param("usernum") String usernum);
	
	
}
