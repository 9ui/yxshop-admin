import { FormSchema } from '/@/components/Form';
import { uploadApi } from '/@/api/sys/upload';

import { getAllCategoryListApi } from '/@/api/product/category';
import { DescItem } from '/@/components/Description';

import { h } from 'vue';
import { Image } from 'ant-design-vue';

export function getCategorySchemas(): FormSchema[] {
  return [
    {
      field: 'cateName',
      component: 'Input',
      label: '分类名称',
      colProps: {
        span: 20,
      },
      rules: [{ required: true, message: '请填写分类名称' }],
      defaultValue: '',
      componentProps: {
        placeholder: '请填写分类名称',
      },
    },
    {
      field: 'pic',
      component: 'Upload',
      label: '分类图片',
      colProps: {
        span: 20,
      },
      componentProps: {
        api: uploadApi,
        maxSize: 5,
        multiple: false,
        maxNumber: 1,
        emptyHidePreview: true,
      },
    },
    {
      field: 'isShow',
      component: 'RadioGroup',
      label: '是否显示',
      colProps: {
        span: 20,
      },
      defaultValue: 1,
      componentProps: {
        options: [
          {
            label: '显示',
            value: 1,
          },
          {
            label: '隐藏',
            value: 0,
          },
        ],
      },
    },
    {
      field: 'sort',
      component: 'Input',
      label: '排序',
      colProps: {
        span: 20,
      },
      defaultValue: 1,
    },
    {
      field: 'pid',
      component: 'ApiSelect',
      label: '上级分类',
      colProps: {
        span: 20,
      },
      componentProps: {
        api: getAllCategoryListApi,
        placeholder: '请填写上级分类',
        labelField: 'cateName',
        valueField: 'id',
      },
    },
  ];
}

/**
 * 查看详情表单
 */
const commonLinkRender = () => (src) => h(Image, { src });
export const retrieveDetailFormSchema: DescItem[] = [
  {
    field: 'cateName',
    label: '分类名称',
  },
  {
    field: 'pic',
    label: '图片',
    render: commonLinkRender(),
  },
  {
    field: 'sort',
    label: '排序',
  },
  {
    field: 'pid',
    label: '上级分类',
  },
];
