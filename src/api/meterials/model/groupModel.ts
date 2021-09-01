/**
 * @description 图片素材分组信息实例
 * @author zzw
 * @date 2021.08.30
 * @email zzw1787044@gamil.com
 */
import { BasicFetchResult } from '/@/api/model/baseModel';

export interface GroupItem {
  id: string; // 文件id
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

export type GroupList = GroupItem[];

export type GetGroupListResult = BasicFetchResult<GroupItem>;
