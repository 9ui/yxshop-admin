<template>
  <div class="p-4">
    <BasicTable @register="register">
      <template #toolbar>
        <a-button type="primary" @click="expandAll">展开全部</a-button>
        <a-button type="primary" @click="collapseAll">折叠全部</a-button>
        <a-button type="primary" class="my-4" @click="openTargetModal()"> 新增分类</a-button>
      </template>
    </BasicTable>
    <AddCategoryModal @register="register1" :minHeight="100" />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicTable, useTable } from '/@/components/Table';
  import { getCategyList } from '/@/api/product/category';
  import { useModal } from '/@/components/Modal';
  import { getBasicColumns } from './tableData';
  import AddCategoryModal from './AddCategoryModal.vue';
  export default defineComponent({
    components: { BasicTable, AddCategoryModal },
    setup() {
      const [register1, { openModal: openTargetModal }] = useModal();
      const [register, { expandAll, collapseAll }] = useTable({
        title: '商品分类',
        isTreeTable: true,
        rowSelection: { type: 'checkbox' },
        titleHelpMessage: '这里可以添加备注文件',
        columns: getBasicColumns(),
        api: getCategyList,
        rowKey: 'id',
      });
      return { register, register1, expandAll, collapseAll, openTargetModal };
    },
  });
</script>
