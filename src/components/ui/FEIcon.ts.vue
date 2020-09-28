<template>
  <svg
    :viewBox="settings.viewBox"
    :class="`fe-icon--${settings.id}`"
    :style="{ width: size, height: size }"
    class="fe-icon"
    role="img"
  >
    <use
      :xlink:href="settings.url"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    />
  </svg>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator'
import calendar from '@/assets/icons/calendar.svg'
import chevron from '@/assets/icons/chevron.svg'
import plusCircle from '@/assets/icons/plus-circle.svg'
import triangle from '@/assets/icons/triangle.svg'
import winterWheat from '@/assets/icons/winter-wheat.svg'


// TODO: recursivly import
const ICONS = {
  calendar,
  chevron,
  'plus-circle': plusCircle,
  triangle,
  'winter-wheat': winterWheat,
}

const validatorName = (name: string) => name in ICONS

@Component
export default class FEIcon extends Vue {
  @Prop({ type: String, required: true, validator: validatorName })
  public name!: keyof typeof ICONS;

  @Prop({ type: String, default: '24px' })
  public size!: string;

  public get settings() {
    return ICONS[this.name]
  }
}
</script>

<style lang="scss">

$duration: 2s;

.fe-icon {
  width: 24px;
  transition: transform $transition;

  &.fe-rotate-90 {
    transform: rotate(90deg);
  }

  &.fe-rotate-180 {
    transform: rotate(180deg);
  }

  &.fe-rotate-270 {
    transform: rotate(270deg);
  }

  &.fe-spin {
    animation: fe-icon-spin $duration infinite linear;
  }
}

@keyframes fe-icon-spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(359deg);
  }
}
</style>
