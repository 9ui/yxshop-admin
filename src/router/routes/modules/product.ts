import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';

const product: AppRouteModule = {
  path: '/product',
  name: 'Product',
  component: LAYOUT,
  redirect: '/product/postCategory',
  meta: {
    icon: 'ion:list-outline',
    title: '商品管理',
  },
  children: [
    {
      path: 'category',
      name: 'postCategory',
      component: () => import('/@/views/product/category/index.vue'),
      meta: {
        title: '商品分类',
        icon: 'bx:bx-home',
      },
    },
    {
      path: 'manage',
      name: 'ManagePost',
      component: () => import('/@/views/product/manage/index.vue'),
      meta: {
        title: '商品管理',
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default product;
