import type { MenuModule } from '/@/router/types';

const menu: MenuModule = {
  orderNo: 2,
  menu: {
    name: '商品管理',
    path: '/product',
    children: [
      {
        path: 'category',
        name: '分类管理',
      },
      {
        path: 'manage',
        name: '商品管理',
      },
    ],
  },
};
export default menu;
