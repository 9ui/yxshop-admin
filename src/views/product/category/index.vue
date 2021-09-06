<template>
  <div class="p-4">
    <!-- table -->
    <BasicTable
      @register="register"
      :pagination="{ pageSize: 10, hideOnSinglePage: true, showQuickJumper: true }"
    >
      <template #toolbar>
        <a-button type="primary" class="my-4" preIcon="lucide:plus" @click="openTargetModal()">
          新增分类</a-button
        >
        <a-button type="ghost" class="my-4" preIcon="carbon:delete" @click="openTargetModal()">
          删除分类</a-button
        >
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'clarity:note-edit-line',
              label: '编辑',
              onClick: handleUpdate.bind(null, record),
            },
            {
              icon: 'ant-design:delete-outlined',
              label: '删除',
              color: 'error',
              popConfirm: {
                title: '是否确认删除',
                confirm: handleDelete.bind(null, record),
              },
            },
          ]"
        />
      </template>
    </BasicTable>

    <!-- modal -->
    <BasicModal
      v-bind="$attrs"
      destroyOnClose
      :showCancelBtn="false"
      :showOkBtn="false"
      @register="register1"
      title="新增商品分类"
      :schemas="schemas"
      :helpMessage="['提示1', '提示2']"
      @visible-change="handleShow"
    >
      <BasicForm
        :labelWidth="100"
        ref="formElRef"
        :schemas="schemas"
        :actionColOptions="{ span: 24 }"
        :showSubmitButton="false"
        :showResetButton="false"
        @submit="handleSubmit"
      />
      <template #insertFooter>
        <a-button type="link" @click="closeModal">取消</a-button>
        <a-button type="primary" @click="save">保存</a-button>
      </template>
    </BasicModal>
  </div>
</template>
<script lang="ts" setup>
  import { ref, toRaw } from 'vue';
  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { BasicModal, useModal } from '/@/components/Modal';
  import { BasicForm, FormActionType } from '/@/components/Form';
  import { useMessage } from '/@/hooks/web/useMessage';
  import {
    getCategoryListApi,
    setCategoryApi,
    deleteCateGoryByIdsApi,
  } from '/@/api/product/category';
  import { getBasicColumns } from './tableData';
  import { getCategorySchemas } from './formSchema';

  const [register1, { openModal: openTargetModal, closeModal }] = useModal();
  const { createMessage } = useMessage();
  const formElRef = ref<Nullable<FormActionType>>(null);
  const schemas = getCategorySchemas();
  // 定义表格
  const [register, { reload }] = useTable({
    title: '商品分类',
    isTreeTable: true,
    rowSelection: { type: 'checkbox' },
    titleHelpMessage: '这里可以添加备注文件',
    columns: getBasicColumns(),
    api: getCategoryListApi,
    rowKey: 'id',
    // useSearchForm: true,
    showTableSetting: true,
    bordered: true,
    showIndexColumn: false,
    striped: false,
    actionColumn: {
      width: 280,
      title: '操作',
      dataIndex: 'action',
      slots: { customRender: 'action' },
      fixed: undefined,
    },
  });
  /**
   * @description 打开弹框处理逻辑
   */
  const handleShow = (visible: boolean) => {
    if (visible) {
    }
  };
  /**
   * @description 提交表单
   */
  const handleSubmit = async (values: any) => {
    try {
      await setCategoryApi(values);
      await getCategoryListApi(
        toRaw({
          currPage: 1,
          pageSize: 10,
        })
      );
      createMessage.success('新增成功');
      reload();
      closeModal();
    } catch (error) {
      // createMessage.error('网络异常，请检查您的网络连接是否正常!');
    }
  };
  /**
   * @description 数据提交
   */
  const save = () => {
    const formEl = formElRef.value;
    if (!formEl) return;
    formEl.submit();
  };

  async function handleDelete(record: Recordable) {
    await deleteCateGoryByIdsApi([record.id]);
    await reload();
  }
  const handleUpdate = () => {};
</script>
