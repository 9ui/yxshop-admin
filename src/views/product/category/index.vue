<template>
  <div class="p-4">
    <!-- table -->
    <BasicTable
      @register="register"
      :pagination="{ pageSize: 10, hideOnSinglePage: true, showQuickJumper: true }"
    >
      <template #toolbar>
        <a-button type="primary" class="my-4" preIcon="lucide:plus" @click="handleInsert()">
          新增分类</a-button
        >
        <!-- <a-button type="ghost" class="my-4" preIcon="carbon:delete" @click="openTargetModal()">
          删除分类</a-button
        > -->
      </template>
      <template #action="{ record }">
        <TableAction
          :actions="[
            {
              icon: 'ant-design:eye-outlined',
              label: '预览',
              onClick: handleRetrieveDetail.bind(null, record),
            },
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

    <!-- detail -->
    <CategoryDetailDrawer @register="registerDetailDrawer" />

    <!-- edit -->
    <CategoryUpdateDrawer @register="registerUpdateDrawer" @success="handleSuccess" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, TableAction, useTable } from '/@/components/Table';
  import { useDrawer } from '/@/components/Drawer';

  import CategoryDetailDrawer from './detail-drawer.vue';
  import CategoryUpdateDrawer from './update-drawer.vue';
  import { getCategoryListApi, deleteCateGoryByIdsApi } from '/@/api/product/category';
  import { getBasicColumns } from './tableData';

  // 查看详情
  const [registerDetailDrawer, { openDrawer: openDetailDrawer }] = useDrawer();

  // 新增/编辑
  const [registerUpdateDrawer, { openDrawer: openUpdateDrawer }] = useDrawer();

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
   * @description 删除分类记录
   */
  async function handleDelete(record: Recordable) {
    await deleteCateGoryByIdsApi([record.id]);
    await reload();
  }

  /**
   * @description 查看分类详情
   */
  function handleRetrieveDetail(record: Recordable) {
    openDetailDrawer(true, { record });
  }
  /**
   * @description 更新分类
   */
  function handleUpdate(record: Recordable) {
    openUpdateDrawer(true, {
      record,
      isUpdateView: true,
    });
  }
  function handleSuccess() {
    reload();
  }
  /**
   * @description 新增分类
   */
  function handleInsert() {
    openUpdateDrawer(true, {
      isUpdateView: false,
    });
  }
</script>
