<template>
  <FETable
    :data="data"
    :headers="headers"
    :sort-key="filters.sortKey"
    :sort-direction="filters.sortDirection"
    value-key="id"
    class="operations-table"
    v-on="$listeners || {}"
  >
    <template #td-date="{ value }">
      <span
        class="operations-table__date"
        v-text="value"
      />
    </template>

    <template #td-assessment="{ value }">
      <OperationsAssessment
        :assessment="value"
      />
    </template>

    <template #td-type="{ value }">
      <OperationsType
        :type="value"
      />
    </template>
  </FETable>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator'
import { dateFormatter } from '@/helpers/dateFormatter'
import Operation from '@/models/Operation'
import { OperationsFilters } from '@/typings/common'

import FETable, { TableHeader } from '@/components/ui/FETable.ts.vue'
import OperationsAssessment from './OperationsAssessment.ts.vue'
import OperationsType from './OperationsType.ts.vue'


const TABLE_HEADERS: TableHeader<Operation>[] = [
  {
    name: 'date',
    label: 'Дата',
    field: (data: Operation) => dateFormatter(data.date) || '',
    sortable: true,
    width: '120px',
    class: 'text-bold',
  },
  {
    name: 'comment',
    label: 'Операция',
    value: 'comment',
    sortable: true,
    class: 'text-bold',
  },
  {
    name: 'type',
    label: 'Культура',
    value: 'type',
    sortable: true,
    width: '200px',
  },
  {
    name: 'assessment',
    label: 'Качество',
    value: 'assessment',
    sortable: true,
    width: '200px',
  },
]

@Component({
  components: {
    FETable,
    OperationsAssessment,
    OperationsType,
  },
})
export default class OperationsTable extends Vue {
  @Prop({ type: Array, required: true })
  public data!: Operation[];

  @Prop({ type: Object, required: true })
  public filters!: OperationsFilters;

  public headers = TABLE_HEADERS;
}
</script>

<style lang="scss">
.operations-table {
  &__date {
    opacity: 0.8;
  }
}
</style>
