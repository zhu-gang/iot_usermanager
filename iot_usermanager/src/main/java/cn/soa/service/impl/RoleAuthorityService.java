
/**
 * <一句话功能描述>
 * <p>权限
 * @author 陈宇林
 * @version [版本号, 2019年1月31日]
 * @see [相关类/方法]
 * @since [产品/模块版本]
 */
package cn.soa.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import cn.soa.dao.IotUserAuthorityMapper;
import cn.soa.dao.RoleAuthorityMapper;
import cn.soa.entity.IotUserAuthority;
import cn.soa.entity.RoleAuthority;
import cn.soa.service.inter.RoleAuthorityServiceInter;

@Service
public class RoleAuthorityService implements RoleAuthorityServiceInter {
	
	
	@Autowired
	private IotUserAuthorityMapper authorityMapper;
	
	
	@Autowired
	private RoleAuthorityMapper roleAuthorityMapper;

	/* (non-Javadoc)
	 * @see cn.soa.service.inter.RoleAuthorityServiceInter#getAuthorityInfo()
	 */
	@Override
	public List<RoleAuthority> getAuthorityInfo() {
		
		List<RoleAuthority> authorityInfo = roleAuthorityMapper.findRoleAuthority();
		
		System.out.println(authorityInfo);
		
		return authorityInfo;
	}

	/* (non-Javadoc)
	 * @see cn.soa.service.inter.RoleAuthorityServiceInter#addAuthorityInfo(java.util.List)
	 */
	@Override
	public int addAuthorityInfo(List<IotUserAuthority> authorityInfo) {
		// TODO Auto-generated method stub
		return 0;
	}

	/* (non-Javadoc)
	 * @see cn.soa.service.inter.RoleAuthorityServiceInter#updateAuthorityInfo(java.util.List)
	 */
	@Override
	public int updateAuthorityInfo(List<IotUserAuthority> authorityInfo) {
		// TODO Auto-generated method stub
		return 0;
	}

	/* (non-Javadoc)
	 * @see cn.soa.service.inter.RoleAuthorityServiceInter#deleteAuthorityInfo(java.util.List)
	 */
	@Override
	public int deleteAuthorityInfo(List<IotUserAuthority> authorityInfo) {
		// TODO Auto-generated method stub
		return 0;
	}

}