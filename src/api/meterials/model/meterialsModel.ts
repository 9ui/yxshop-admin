/**
 * @description 图片素材库信息实例
 * @author zzw
 * @date 2021.08.30
 * @email zzw1787044@gamil.com
 */

import { BasicFetchResult, BasicPageParams } from '/@/api/model/baseModel';

export interface MeterialsItem {
  id: string;
  createTime: string;
  createId: number;
  type: number;
  groupId: string;
  name: string;
  url: string;
  updateTime: string;
  isDel: number;
}

export interface DeleteMeterialsParams {
  id: string; // 分组数据主键 ID
}

export type MeterialsListParam = BasicPageParams & {
  groupId?: string;
};

export type GetMeterialsListResult = BasicFetchResult<MeterialsItem>;
