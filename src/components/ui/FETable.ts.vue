<template>
  <table
    class="fe-table"
  >
    <thead class="fe-table__thead">
      <tr class="fe-table__tr">
        <th
          v-for="(header, index) in headers"
          :key="header.name"
          :width="header.width"
          :style="[header.style, header.headerStyle]"
          :class="[
            header.class,
            header.headerClass,
            { 'is-sortable': header.sortable },
          ]"
          class="fe-table__th"
          @click="changeSort(header)"
        >
          <slot
            :name="`th-${header.name}`"
            :header="header"
            :index="index"
          >
            {{ header.label }}
          </slot>

          <FEIcon
            v-if="header.sortable"
            size="10px"
            :class="{
              'is-active': header.name === sortKey,
              'fe-rotate-180': sortDirection === 'desc',
            }"
            name="triangle"
            class="fe-table__icon-sort"
          />
        </th>
      </tr>
    </thead>

    <tbody class="fe-table__tbody">
      <tr
        v-for="(item, index) in list"
        :key="`${item.data[valueKey]}-${index}`"
        class="fe-table__tr"
      >
        <td
          v-for="header in headers"
          :key="header.name"
          :style="header.style"
          :class="header.class"
          class="fe-table__td"
        >
          <slot
            :name="`td-${header.name}`"
            :header="header"
            :data="item.data"
            :value="item.values[header.name]"
            :index="index"
          >
            {{ item.values[header.name] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator'
import get from 'lodash/get'
import { SortDirection } from '@/helpers/enums/SortDirection'
import FEIcon from '@/components/ui/FEIcon.ts.vue'


type TableHeaderBase = {
  name: string;
  label: string;
  sortable?: boolean;
  width?: string;
  headerStyle?: string | Record<string, string>;
  headerClass?: string | Record<string, string>;
  style?: string | Record<string, string>;
  class?: string | Record<string, string>;
}

export type TableHeader<Data> =
  | {
  value: keyof Data;
} & TableHeaderBase
  | {
  field: (d: Data, h: TableHeader<Data>, index: number) => unknown;
} & TableHeaderBase

@Component({
  components: {
    FEIcon,
  },
})
export default class FETable<Data> extends Vue {
  @Prop({ type: Array, required: true })
  public headers!: TableHeader<Data>[];

  @Prop({ type: Array, required: true })
  public data!: Data[];

  @Prop({ type: String, default: 'id' })
  public valueKey!: keyof Data;

  @Prop(String)
  public sortKey?: string;

  @Prop(String)
  public sortDirection?: SortDirection;

  public get list() {
    const { headers, data: list } = this

    const hasField = headers.some((header) => 'field' in header)
    if (!hasField) return list

    return list.map((data, index) => {
      const values = headers.reduce((acc, header) => {
        if ('field' in header) {
          const value = header.field.call(this, data, header, index)
          acc[header.name] = value
        } else {
          const value = get(data, header.value)
          acc[header.name] = value
        }

        return acc
      }, {} as Record<string, unknown>)

      return { data, values }
    })
  }

  public changeSort(header: TableHeader<Data>) {
    if (header.name !== this.sortKey) {
      const options = { key: header.name, direction: SortDirection.asc }
      this.$emit('sort', options)
      return options
    }

    let direction: SortDirection | void = void 0

    switch (this.sortDirection) {
      case SortDirection.asc:
        direction = SortDirection.desc
        break

      case SortDirection.desc:
        direction = void 0
        break

      default:
    }

    const options = direction
      ? { key: header.name, direction }
      : {}

    this.$emit('sort', options)

    return options
  }
}
</script>

<style lang="scss">
.fe-table {
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;

  &__th,
  &__td {
    padding: 8px 15px;
    text-align: left;
  }

  &__th {
    height: 40px;
    font-weight: bold;
    vertical-align: middle;
    background-color: $color-gray;

    &.is-sortable {
      cursor: pointer;
    }
  }

  &__td {
    height: 50px;
    border-bottom: 1px solid $color-gray;
  }

  &__icon-sort {
    color: $color-gray-dark;

    &.is-active {
      color: $color-blue;
    }
  }
}
</style>
