/**
 * @description 商品类别Model
 * @author zzw
 * @date 2021.08.25
 * @email zzw1787044@gamil.com
 */

import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

type CategoryById = {
  id: string; // 商品类别id
};

export interface CategoryItem {
  pid?: number; // 上级ID 只能选择一级分类或者为空
  cateName: string; // 分类名称
  isShow?: boolean; // 是否展示 默认1 展示
  pic?: string; // 图片地址
  id?: string; // 传ID 编辑 / 不传 新增
  sort?: number; // 排序 默认 0
}

export type CategoryDeleteByIds = CategoryById[];

export type CategoryList = CategoryItem[];

export type CategoryListParam = BasicPageParams;

export type GetCategoryListResult = BasicFetchResult<CategoryItem>;
