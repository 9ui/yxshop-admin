<template>
  <BasicDrawer
    v-bind="$attrs"
    @register="registerDrawer"
    showFooter
    :title="getTitle"
    width="40%"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref, computed, unref } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';
  import { getCategorySchemas } from './formSchema';
  import { useMessage } from '/@/hooks/web/useMessage';
  // 请求分组列表
  import { getGroupListApi } from '/@/api/meterials/group';
  import { updateCategoryApi, saveCategoryApi } from '/@/api/product/category';
  const { createMessage } = useMessage();
  export default defineComponent({
    name: 'CategoryUpdateDrawer',
    components: { BasicDrawer, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const isUpdateView = ref(true);
      let recordId: string;

      const [registerForm, { resetFields, setFieldsValue, updateSchema, validate }] = useForm({
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 24 - 4,
        },
        schemas: getCategorySchemas(),
        showActionButtonGroup: false,
      });

      const [registerDrawer, { setDrawerProps, closeDrawer }] = useDrawerInner(async (data) => {
        resetFields();
        setDrawerProps({ confirmLoading: false });
        isUpdateView.value = !!data?.isUpdateView;

        if (unref(isUpdateView)) {
          setFieldsValue({
            ...data.record,
          });
        }

        // 主键ID
        recordId = data.record?.id || null;

        // 更新上级部门树状数据
        const parentIdTreeData = await getGroupListApi();
        await updateSchema({
          field: 'parentId',
          componentProps: {
            treeData: parentIdTreeData,
            replaceFields: {
              title: 'title',
              key: 'id',
              value: 'id',
            },
          },
        });
      });

      const getTitle = computed(() => (!unref(isUpdateView) ? '新增' : '编辑'));

      async function handleSubmit() {
        try {
          const values = await validate();
          setDrawerProps({ confirmLoading: true });
          if (recordId) {
            Object.assign(values, { pic: values.pic[0] });
            await updateCategoryApi({ id: recordId, ...values });
            createMessage.success('更新成功');
          } else {
            Object.assign(values, { pic: values.pic[0] });
            await saveCategoryApi(values);
            createMessage.success('新增成功');
          }

          closeDrawer();
          emit('success');
        } finally {
          setDrawerProps({ confirmLoading: false });
        }
      }

      return { registerDrawer, registerForm, getTitle, handleSubmit };
    },
  });
</script>
