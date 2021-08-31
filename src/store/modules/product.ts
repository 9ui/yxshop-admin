import { store } from '/@/store';
import { defineStore } from 'pinia';

import {
  CategoryItem,
  CategoryListParam,
  GetCategoryListResult,
  CategoryParam,
} from '/@/api/product/model/categoryModel';
import { getCategoryListApi, setCategoryApi } from '/@/api/product/category';

interface ProductState {
  categoryList: CategoryItem[];
}

export const useProductStore = defineStore({
  id: 'app-product',
  state: (): ProductState => ({
    categoryList: [],
  }),
  getters: {
    getCategoryList(): CategoryItem[] {
      return this.categoryList.length > 0 ? this.categoryList : [];
    },
  },
  actions: {
    setCategoryList(categoryList: CategoryItem[]) {
      this.categoryList = categoryList;
    },
    /**
     * 请求分类列表
     * @param params
     * @returns
     */
    async fetchCategoryList(params: CategoryListParam): Promise<GetCategoryListResult> {
      const categoryListInfo = await getCategoryListApi(params);
      const { items } = categoryListInfo;
      const categoryList = items as CategoryItem[];
      this.setCategoryList(categoryList);
      return categoryListInfo;
    },
    /**
     * 新增/编辑
     * @param params
     * @returns
     */
    async addCategory(params: CategoryParam): Promise<CategoryItem> {
      const categoryInfo = await setCategoryApi(params);
      return categoryInfo;
    },
  },
});

export function useProductStoreWithOut() {
  return useProductStore(store);
}
