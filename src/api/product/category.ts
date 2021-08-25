/**
 * @description 商品类别操作相关的接口
 * @author zzw
 * @date 2021.08.25
 * @email zzw1787044@gamil.com
 */

import { defHttp } from '/@/utils/http/axios';
import { CategoryListParam, CategoryParam, GetCategoryListResult } from './model/categoryModel';

enum Api {
  ADD_UPDATE_CATEGORY = '/wxStoreCategory/saveOrUpdate',
  GET_CATEGORY_LIST = '/wxStoreCategory/queryPage',
}

/**
 * @description: 新增/编辑分类
 */
export const setCategory = (params: CategoryParam) =>
  defHttp.post({ url: Api.ADD_UPDATE_CATEGORY, params });

/**
 * @description 获取商品列表分类
 */
export const getCategyList = (params: CategoryListParam) =>
  defHttp.get<GetCategoryListResult>({ url: Api.GET_CATEGORY_LIST, params });
