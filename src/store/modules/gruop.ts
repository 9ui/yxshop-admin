/**
 * 图片素材数据
 * @author zzw
 * @date 2021.09.01
 * @email zzw1787044@gamil.com
 */

import { store } from '/@/store';
import { defineStore } from 'pinia';

import { GroupItem, GetGroupListResult } from '/@/api/meterials/model/groupModel';
import { getGroupListApi } from '/@/api/meterials/group';

interface groupState {
  groupList: GroupItem[];
}

export const useGroupStore = defineStore({
  id: 'app-meterials',
  state: (): groupState => ({
    groupList: [],
  }),
  getters: {
    getGroupList(): GroupItem[] {
      return this.groupList.length > 0 ? this.groupList : [];
    },
  },
  actions: {
    setGroupList(groupList: GroupItem[]) {
      this.groupList = groupList;
    },
    /**
     * 请求分组列表
     * @param params
     * @returns
     */
    async fetchGroupList(): Promise<GetGroupListResult> {
      const categoryListInfo = await getGroupListApi();
      const { items } = categoryListInfo;
      const categoryList = items as GroupItem[];
      this.setGroupList(categoryList);
      return categoryListInfo;
    },
    /**
     * 新增/编辑分组
     * @param params
     * @returns
     */
    // async addCategory(params: UpdateGroupParams): Promise<GroupItem> {
    //   const categoryInfo = await setCategoryApi(params);
    //   return categoryInfo;
    // },
  },
});

export function useProductStoreWithOut() {
  return useGroupStore(store);
}
