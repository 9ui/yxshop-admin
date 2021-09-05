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

import { ErrorMessageMode } from '/#/axios';

enum Api {
  // 分页查询分类(分类)
  GET_METERIALS_LIST = '/wxMaterial/queryPage',

  DELETE_METERIALS = '/wxMaterialGroup/deleteByIds',
}

/**
 * @description 获取所有素材
 */
export const getMeterialsListApi = (params: MeterialsListParam, mode: ErrorMessageMode = 'modal') =>
  defHttp.get<GetMeterialsListResult>(
    { url: Api.GET_METERIALS_LIST, params },
    { errorMessageMode: mode }
  );

/**
 * @description 删除素材
 */
export const deleteMeterialsApi = (params: DeleteMeterialsParams) =>
  defHttp.post({ url: Api.DELETE_METERIALS, params });
