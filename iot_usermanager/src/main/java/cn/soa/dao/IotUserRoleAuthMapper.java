package cn.soa.dao;

import org.apache.ibatis.annotations.Mapper;

import cn.soa.entity.IotUserRoleAuth;

@Mapper
public interface IotUserRoleAuthMapper {
    int deleteByPrimaryKey(String rolAutId);

    int insert(IotUserRoleAuth record);

    int insertSelective(IotUserRoleAuth record);

    IotUserRoleAuth selectByPrimaryKey(String rolAutId);

    int updateByPrimaryKeySelective(IotUserRoleAuth record);

    int updateByPrimaryKey(IotUserRoleAuth record);
}