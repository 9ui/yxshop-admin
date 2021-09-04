/**
 * @description 商品类别操作相关的接口
 * @author zzw
 * @date 2021.08.25
 * @email zzw1787044@gamil.com
 */

import { defHttp } from '/@/utils/http/axios';
import {
  CategoryListParam,
  CategoryItem,
  GetCategoryListResult,
  CategoryDeleteByIds,
} from './model/categoryModel';

enum Api {
  ADD_UPDATE_CATEGORY = '/wxStoreCategory/saveOrUpdate',
  GET_CATEGORY_LIST = '/wxStoreCategory/queryPage',
  GET_ALL_CATEGORY_LIST = '/wxStoreCategory/queryAllTopCats',
  DELETE_CATEGOEY = '/wxStoreCategory/deleteByIds',
}

/**
 * @description: 新增/编辑分类
 */
export const setCategoryApi = (params: CategoryItem) =>
  defHttp.post({ url: Api.ADD_UPDATE_CATEGORY, params });

/**
 * @description 获取商品分类列表
 */
export const getCategoryListApi = (params: CategoryListParam) =>
  defHttp.get<GetCategoryListResult>({ url: Api.GET_CATEGORY_LIST, params });

/**
 * @description 获取所有分类
 * @returns
 */
export const getAllCategoryListApi = () => defHttp.get({ url: Api.GET_ALL_CATEGORY_LIST });

/**
 * @description 删除商品分类
 */
export const deleteCateGoryByIdsApi = (params: CategoryDeleteByIds) =>
  defHttp.post({ url: Api.DELETE_CATEGOEY, params });
