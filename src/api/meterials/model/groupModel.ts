import { BasicFetchResult } from '/@/api/model/baseModel';

export interface GroupItem {
  name: string; // 文件分组名称
}

export interface AddGroupParams {
  name: string; // 文件分组名称
}

export interface UpdateGroupParams {
  id: string; // 分组数据主键 ID
  name: string; // 分组名称
}

export interface DeleteGroupParams {
  id: string; // 分组数据主键 ID
}

export type GetGroupListResult = BasicFetchResult<GroupItem>;
