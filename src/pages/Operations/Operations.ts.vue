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

    <OperationsTable
      :data="operations"
      :filters="filters"
      class="page-operations__table"
      @sort="onSort"
    />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator'
import { operationsStore } from '@/store/modules/operations'
import { OperationsFilters } from '@/typings/common'
import { SortDirection } from '@/helpers/enums/SortDirection'
import { OperationTab } from '@/helpers/enums/OperationTab'

import FEButtonCreate from '@/components/common/FEButtonCreate.ts.vue'
import OperationsTabs from './components/OperationsTabs.ts.vue'
import OperationsTable from './components/OperationsTable.ts.vue'


@Component({
  components: {
    FEButtonCreate,
    OperationsTabs,
    OperationsTable,
  },
})
export default class PageOperations extends Vue {
  @Prop({ type: String, default: OperationTab.planned })
  public tab!: OperationTab;

  public operationsStore = operationsStore.context(this.$store);

  public isLoading = false;

  public get operations() {
    return this.operationsStore.getters.filteredOperations
  }

  public get filters() {
    return this.operationsStore.state.filters
  }

  private created() {
    const { filters } = this.operationsStore.state
    this.fetch({ ...filters, tab: this.tab })
  }

  public async fetch(filters: OperationsFilters) {
    this.isLoading = true

    try {
      await this.operationsStore.actions.getOperations(filters)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e)
    }

    this.isLoading = true
  }

  // eslint-disable-next-line class-methods-use-this
  public onCreateOperation() {
    // eslint-disable-next-line no-console
    console.log('onCreateOperation')
  }

  public onSort(sort: { key: string; direction: SortDirection }) {
    const filters: OperationsFilters = {
      ...this.operationsStore.state.filters,
      sortKey: sort.key,
      sortDirection: sort.direction,
    }

    this.fetch(filters)
  }
}
</script>

<style lang="scss">
.page-operations {
  padding: 30px 23px;

  &__table-header {
    display: flex;
    align-items: center;
    margin: 15px 0;
  }

  &__table-tabs {
    margin-right: auto;
  }
}
</style>
