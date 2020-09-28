<template>
  <div class="operations-tabs">
    <router-link
      v-for="item in labels"
      :key="item.value"
      :to="{ params: { tab: item.value }}"
      :class="{ 'is-active': item.active }"
      class="operations-tabs__item"
      v-html="item.label"
    />
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
  getOperationTabLabel,
} from '../utils'


@Component
export default class OperationsTabs extends Vue {
  @Prop({
    type: String,
    default: OperationTabs.planned,
    validator: (prop) => prop in OperationTabs,
  })
  public async current!: OperationTabs

  public get labels() {
    return [
      OperationTabs.planned,
      OperationTabs.completed,
    ].map((value) => ({
      value,
      label: getOperationTabLabel(value),
      active: this.current === value,
    }))
  }
}
</script>

<style lang="scss">
.operations-tabs {
  display: flex;

  &__item {
    font-size: 11px;
    font-weight: 500;
    line-height: 13px;
    color: inherit;
    text-decoration: none;
    text-transform: uppercase;

    &:hover,
    &.is-active {
      color: $color-blue;
    }

    &.is-active {
      pointer-events: none;
      cursor: default;
    }

    & + & {
      margin-left: 18px;
    }
  }
}
</style>
