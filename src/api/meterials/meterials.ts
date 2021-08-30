/**
 * @description 图片素材库信息
 * @author zzw
 * @date 2021.08.30
 * @email zzw1787044@gamil.com
 */

import { defHttp } from '/@/utils/http/axios';
import {
  DeleteMeterialsParams,
  GetMeterialsListResult,
  MeterialsListParam,
} from './model/meterialsModel';

enum Api {
  GET_METERIALS_LIST = '/wxStoreCategory/queryPage',
  DELETE_METERIALS = '/wxMaterialGroup/deleteByIds',
}

/**
 * @description 获取所有素材
 */
export const getMeterialsListApi = (params: MeterialsListParam) =>
  defHttp.get<GetMeterialsListResult>({ url: Api.GET_METERIALS_LIST, params });

/**
 * @description 删除素材
 */
export const deleteMeterialsApi = (params: DeleteMeterialsParams) =>
  defHttp.post({ url: Api.DELETE_METERIALS, params });
