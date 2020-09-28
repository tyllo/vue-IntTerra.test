<template>
  <div
    :class="`is-${type}`"
    class="operations-assessment"
  >
    <span
      class="operations-assessment__text"
      v-text="label"
    />
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator'
import { Assessment } from '@/models/Operation'
import locales from '@/../locales/intterra-ru-RU.json'


@Component
export default class OperationsAssessment extends Vue {
  @Prop(Number)
  public assessment!: Assessment;

  public get type() {
    const { assessment } = this
    if (typeof assessment !== 'number') return 'no-assessment'
    return Assessment[assessment] || assessment
  }

  public get label() {
    const { assessment } = this
    if (typeof assessment !== 'number') return 'Нет оценки'
    const key = Assessment[assessment] as keyof typeof Assessment
    return (key in locales) ? locales[key] : assessment
  }
}
</script>

<style lang="scss">
$width: 20px;
$height: 10px;

.operations-assessment {
  $root: &;

  display: flex;
  align-items: center;

  &::before {
    display: inline-block;
    width: $width;
    height: $height;
    margin-right: 8px;
    content: "";
    background-color: $color-gray;
    border-radius: $height / 2;
  }

  &.is-no-assessment &__text {
    opacity: 0.3;
  }

  &.is-EXCELLENT::before {
    background-color: $color-green;
  }

  &.is-SATISFACTORILY::before {
    background-color: $color-yellow;
  }

  &.is-BADLY::before {
    background-color: $color-red;
  }
}
</style>
