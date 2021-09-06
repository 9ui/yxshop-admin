/**
 * @description 商品类别操作相关的接口
 * @author zzw
 * @date 2021.08.25
 * @email zzw1787044@gamil.com
 */

import { defHttp } from '/@/utils/http/axios';
import {
  CategoryItem,
  CategoryListParam,
  GetCategoryListResult,
  CategoryDeleteByIds,
} from './model/categoryModel';
import { ErrorMessageMode } from '/#/axios';

enum Api {
  // 新增/编辑分类(分类)
  ADD_UPDATE_CATEGORY = '/wxStoreCategory/saveOrUpdate',
  // 分页查询分类(分类)
  GET_CATEGORY_LIST = '/wxStoreCategory/queryPage',
  // 查询所有一级分类(分类【新增编辑时使用】)
  GET_ALL_CATEGORY_LIST = '/wxStoreCategory/queryAllTopCats',
  // 分类删除(分类)
  DELETE_CATEGOEY = '/wxStoreCategory/deleteByIds',
  // 编辑查询分类信息(分类)
  GET_CATEGORY_DETAIL = '/wxStoreCategory/getById',
}

/**
 * @description: 新增/编辑分类
 */
export const saveCategoryApi = (params: CategoryItem, mode: ErrorMessageMode = 'modal') =>
  defHttp.post({ url: Api.ADD_UPDATE_CATEGORY, params }, { errorMessageMode: mode });

/**
 * @description 获取商品分类列表
 */
export const getCategoryListApi = (params: CategoryListParam, mode: ErrorMessageMode = 'modal') =>
  defHttp.get<GetCategoryListResult>(
    { url: Api.GET_CATEGORY_LIST, params },
    { errorMessageMode: mode }
  );

/**
 * @description 获取所有分类
 * @returns
 */
export const getAllCategoryListApi = (
  params: GetCategoryListResult,
  mode: ErrorMessageMode = 'modal'
) => defHttp.get({ url: Api.GET_ALL_CATEGORY_LIST, params }, { errorMessageMode: mode });

/**
 * @description 删除商品分类
 */
export const deleteCateGoryByIdsApi = (params: CategoryDeleteByIds) =>
  defHttp.post({ url: Api.DELETE_CATEGOEY, params });

/**
 *  根据id查询分类详情
 * @param id
 * @param mode
 * @returns
 */
export const getCategoryDetailApi = (id: string, mode: ErrorMessageMode = 'modal') =>
  defHttp.get({ url: Api.GET_CATEGORY_DETAIL, params: { id: id } }, { errorMessageMode: mode });

/**
 * @description: 编辑分类
 */
export const updateCategoryApi = (params: CategoryItem, mode: ErrorMessageMode = 'modal') =>
  defHttp.post({ url: Api.ADD_UPDATE_CATEGORY, params }, { errorMessageMode: mode });
