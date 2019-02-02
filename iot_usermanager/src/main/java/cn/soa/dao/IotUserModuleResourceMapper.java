package cn.soa.dao;

import org.apache.ibatis.annotations.Mapper;

import cn.soa.entity.IotUserModuleResource;

@Mapper
public interface IotUserModuleResourceMapper {
    int deleteByPrimaryKey(String modid);

    int insert(IotUserModuleResource record);

    int insertSelective(IotUserModuleResource record);

    IotUserModuleResource selectByPrimaryKey(String modid);

    int updateByPrimaryKeySelective(IotUserModuleResource record);

    int updateByPrimaryKey(IotUserModuleResource record);
}