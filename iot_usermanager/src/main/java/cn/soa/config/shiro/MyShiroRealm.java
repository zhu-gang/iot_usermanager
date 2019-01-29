
	/**  
     * @Title: MyShiroRealm.java
 	 * @Package cn.userCenter.config.shiro
 	 * @Description: )
 	 * @author zhugang
 	 * @date 2019年1月13日
 	 * @version V1.0  
 	 */

        
package cn.soa.config.shiro;

import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.subject.PrincipalCollection;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import cn.soa.entity.UserInfo;
import cn.soa.entity.UserOrganization;
import cn.soa.entity.UserRole;
import cn.soa.service.inter.RoleServiceInter;
import cn.soa.service.inter.UserServiceInter;

import java.util.*;

public class MyShiroRealm extends AuthorizingRealm {
    private static org.slf4j.Logger logger = LoggerFactory.getLogger(MyShiroRealm.class);

    //如果项目中用到了事物，@Autowired注解会使事物失效，可以自己用get方法获取值
    //@Autowired
    //private UserInfoMapper UserInfoMapper;
    
    @Autowired
    private UserServiceInter userService;

    @Autowired
    private RoleServiceInter roleService;
    
     /**   
      * @Title: doGetAuthenticationInfo   
      * @Description:  认证信息.(身份验证) : Authentication 是用来验证用户身份       
      * @return:  AuthenticationInfo       
      */  
    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authcToken) throws AuthenticationException {
        logger.info("---------------- 执行 Shiro 凭证认证 ----------------------");
        UsernamePasswordToken token = (UsernamePasswordToken) authcToken;
        /*
         * 获取请求的用户名和密码
         */
        int userId = Integer.parseInt(token.getUsername());
        String password = String.valueOf(token.getPassword());
        
        /*
         *  从数据库获取对应用户名密码的用户
         */
        UserOrganization user = userService.getUserOrganByUsernum(userId);
		UserInfo userInfo = userService.getUserInfoByNum(user.getUsernum());
		logger.info("---------------- Shiro 凭证认证--------user-" + user);
		logger.info("---------------- Shiro 凭证认证--------userInfo-" + userInfo);
		
        /*
         * 用户名比对
         */
        if ( user != null ) {
        	if ( userInfo == null ) {
                 throw new RuntimeException("登录失败，用户信息不存在");        
        	}
            // 用户为禁用状态
            if (userInfo.getState() != 0) {
                throw new DisabledAccountException();        
            }
            logger.info("---------------- Shiro 凭证认证成功 ----------------------");
            SimpleAuthenticationInfo authenticationInfo = new SimpleAuthenticationInfo(
            		user, //用户
            		user.getUser_password(), //密码
                    getName()  //realm name
            );
            return authenticationInfo;
        }
        throw new UnknownAccountException();
    }

 
    
     /**   
      * @Title: doGetAuthorizationInfo   
      * @Description: 授权        
      * @return:  AuthorizationInfo       
      */  
    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
        logger.info("---------------- 执行 Shiro 权限获取 ---------------------");
        Object principal = principals.getPrimaryPrincipal();
        SimpleAuthorizationInfo authorizationInfo = new SimpleAuthorizationInfo();
        
        /*
         * 查询用户角色和权限
         */
        if (principal instanceof UserOrganization) {
        	UserOrganization userLogin = (UserOrganization) principal;
        	//角色
            Set<String> roles = new HashSet<String>();
            List<UserRole> userRoles = roleService.getUserRoleByNum(userLogin.getOrgid());
            userRoles.forEach(u -> 
            	roles.add(u.getName()) 
            );
            authorizationInfo.addRoles(roles);
            //权限
/*            Set<String> permissions = userService.findPermissionsByUserId(userLogin.getId());
            authorizationInfo.addStringPermissions(permissions);*/
        }
        logger.info("---- 获取到以下权限 ----");
        logger.info(authorizationInfo.getStringPermissions().toString());
        logger.info("---------------- Shiro 权限获取成功 ----------------------");
        return authorizationInfo;
    }

}
