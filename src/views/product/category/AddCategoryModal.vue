<template>
  <BasicModal
    v-bind="$attrs"
    destroyOnClose
    cancelText="取消"
    okText="保存"
    @register="register"
    title="新增商品分类"
    :helpMessage="['提示1', '提示2']"
    @visible-change="handleShow"
  >
    表单
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref, watch } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  export default defineComponent({
    components: { BasicModal },
    setup() {
      const lines = ref(10);
      const [register, { redoModalHeight }] = useModalInner();

      watch(
        () => lines.value,
        () => {
          redoModalHeight();
        }
      );

      function handleShow(visible: boolean) {
        if (visible) {
        }
      }
      return { register, handleShow, lines };
    },
  });
</script>
<style scoped>
  .empty-tips {
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
</style>
