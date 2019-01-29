/**  
 * @Title: UserRegistServiceInter.java
 * @Package cn.userCenter.service.inter
 * @Description: )
 * @author zhugang
 * @date 2019年1月23日
 * @version V1.0  
 */

        
package cn.soa.service.inter;

import cn.soa.entity.UserRegister;

/**
  * @ClassName: UserRegistServiceInter
  * @Description: 
  * @author zhugang
  * @date 2019年1月23日
  */

public interface UserRegistServiceInter {

	
	 /**   
	  * @Title: saveUserRegistServ   
	  * @Description:  保存用户注册信息          
	  * @return: int        
	  */  
	int saveUserRegistServ(UserRegister userRegist);

	
	 /**   
	  * @Title: findRegisterByNumServ   
	  * @Description: 根据注册usernum查询注册用户          
	  * @return: UserRegister        
	  */  
	UserRegister findRegisterByNumServ(int i);

}
