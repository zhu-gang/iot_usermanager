/**  
 * @Title: StaticHtmlController.java
 * @Package cn.userCenter.controller
 * @Description: )
 * @author zhugang
 * @date 2019年1月26日
 * @version V1.0  
 */

        
package cn.soa.controller;

import java.util.HashMap;

import org.apache.shiro.authz.annotation.RequiresAuthentication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
  * @ClassName: StaticHtmlController
  * @Description: 
  * @author zhugang
  * @date 2019年1月26日
  */

@Controller
@RequestMapping("/static")
public class StaticHtmlController {
	private static Logger logger = LoggerFactory.getLogger( StaticHtmlController.class );
	
	@RequiresAuthentication
	@RequestMapping("/index")
	public String helloHtml( HashMap<String, Object> map ) {
		 map.put( "hello", "欢迎进入HTML页面" );
		 return "/index";
	}
}