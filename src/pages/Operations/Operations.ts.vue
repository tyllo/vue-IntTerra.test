<template>
  <div class="page-operations">
    <h2 class="header-h2">
      Операции на поле 112
    </h2>

    <div class="page-operations__table-header">
      <OperationsTabs
        :current="tab"
        class="page-operations__table-tabs"
      />

      <FEButtonCreate
        label="Добавить операцию"
        class="page-operations__button-create"
        @click="onCreateOperation"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator'
import {
  OperationTabs,
} from './utils'
import OperationsTabs from './components/OperationsTabs.ts.vue'
import FEButtonCreate from '@/components/common/FEButtonCreate.ts.vue'


@Component({
  components: {
    OperationsTabs,
    FEButtonCreate,
  },
})
export default class PageOperations extends Vue {
  @Prop({ tab: String, default: OperationTabs.planned })
  public tab!: OperationTabs;

  // eslint-disable-next-line class-methods-use-this
  public onCreateOperation() {
    // eslint-disable-next-line no-console
    console.log('onCreateOperation')
  }
}
</script>

<style lang="scss">
.page-operations {
  padding: 30px 23px;

  &__table-header {
    display: flex;
    align-items: center;
  }

  &__table-tabs {
    margin-right: auto;
  }
}
</style>
