import { BasicColumn } from '/@/components/Table/src/types/table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
      fixed: 'left',
      width: 200,
    },
    {
      title: '分类名称',
      dataIndex: 'cateName',
      width: 150,
    },
    {
      title: '状态',
      width: 200,
      dataIndex: 'isShow',
      customRender: ({ record }) => {
        const value = record.isShow;
        let color, text;
        switch (value) {
          case 0:
            color = 'default';
            text = '禁用';
            break;
          case 1:
            color = 'success';
            text = '启用';
            break;
        }
        return h(Tag, { color: color }, () => text);
      },
    },
    {
      title: '排序',
      dataIndex: 'sort',
      width: 150,
      sorter: true,
    },
  ];
}
