/**
 * @description 图片素材库分组信息
 * @author zzw
 * @date 2021.08.29
 * @email zzw1787044@gamil.com
 */

import { defHttp } from '/@/utils/http/axios';
import {
  GetGroupListResult,
  UpdateGroupParams,
  DeleteGroupParams,
  AddGroupParams,
} from './model/GroupModel';

enum Api {
  ADD_GROUP = '/wxMaterialGroup/save',
  UPDATE_GROUP = '/wxMaterialGroup/editById',
  GET_GROUP_LIST = '/wxStoreCategory/queryPage',
  DELETE_GROUP = '/wxMaterialGroup/deleteByIds',
}

/**
 * @description: 新增分组
 * @param params 文件分组名称
 * @returns
 */
export const addGroupApi = (params: AddGroupParams) => defHttp.post({ url: Api.ADD_GROUP, params });

/**
 * @description: 编辑分组
 */
export const updateGroupApi = (params: UpdateGroupParams) =>
  defHttp.post({ url: Api.UPDATE_GROUP, params });

/**
 * @description 获取所有分组
 */
export const getGroupListApi = () => defHttp.get<GetGroupListResult>({ url: Api.GET_GROUP_LIST });

/**
 * @description 删除文件分组
 */
export const deleteGroupApi = (params: DeleteGroupParams) =>
  defHttp.post({ url: Api.DELETE_GROUP, params });
