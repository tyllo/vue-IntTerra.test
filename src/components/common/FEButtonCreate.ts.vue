<template>
  <FEButton
    v-bind="$attrs"
    class="fe-button-create"
    v-on="$listeners || {}"
  >
    <FEIcon
      name="plus-circle"
      size="16px"
      class="fe-button-create__icon-plus"
    />
    <slot>{{ label }}</slot>
  </FEButton>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator'
import FEButton from '@/components/ui/FEButton.ts.vue'
import FEIcon from '@/components/ui/FEIcon.ts.vue'


@Component({
  components: {
    FEButton,
    FEIcon,
  },
})
export default class FEButtonCreate extends Vue {
  @Prop(String)
  public label!: string;
}
</script>

<style lang="scss">

.fe-button-create {
  &__icon-plus {
    margin-right: 7px;
    color: $color-green;
  }
}
</style>
