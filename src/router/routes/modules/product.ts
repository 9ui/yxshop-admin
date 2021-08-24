import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/product',
  name: 'Product',
  component: LAYOUT,
  redirect: '/product/category',
  meta: {
    orderNo: 10,
    icon: 'ant-design:shopping-twotone',
    title: '商品管理',
  },
  children: [
    {
      path: 'category',
      name: 'Category',
      component: () => import('/@/views/product/category/index.vue'),
      meta: {
        title: '商品分类',
      },
    },
    {
      path: 'goods',
      name: 'Goods',
      component: () => import('/@/views/product/goods/index.vue'),
      meta: {
        title: '管理商品',
      },
    },
  ],
};

export default dashboard;
