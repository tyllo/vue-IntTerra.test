<template>
  <div class="operations-type">
    <FEIcon
      v-if="label"
      size="30px"
      name="winter-wheat"
      class="operations-type__icon"
    />

    {{ label }}
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator'
import { OperationType } from '@/models/Operation'
import locales from '@/../locales/intterra-ru-RU.json'
import FEIcon from '@/components/ui/FEIcon.ts.vue'


@Component({
  components: {
    FEIcon,
  },
})
export default class OperationsType extends Vue {
  @Prop(Number)
  public type!: OperationType;

  public get label() {
    const { type } = this
    if (!type) return ''
    const key = OperationType[type] as keyof typeof OperationType
    return (key in locales) ? locales[key] : type
  }
}
</script>

<style lang="scss">
.operations-type {
  display: flex;
  align-items: center;

  &__icon {
    margin-right: 8px;
  }
}
</style>
