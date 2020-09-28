<template>
  <button
    :type="type"
    class="fe-button"
    v-on="$listeners || {}"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script lang="ts">
import {
  Component,
  Vue,
  Prop,
} from 'vue-property-decorator'


@Component
export default class FEButton extends Vue {
  @Prop(String)
  public type!: string;

  @Prop(String)
  public label!: string;
}
</script>

<style lang="scss">
$box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
$box-shadow-hovered: 0 4px 8px rgba(0, 0, 0, 0.2);
$padding-size: 15px;
$min-height: 40px;

.fe-button {
  display: inline-flex;
  align-items: center;
  min-height: $min-height;
  padding-right: $padding-size;
  padding-left: $padding-size;
  font-size: 13px;
  line-height: 15px;
  cursor: pointer;
  background-color: white;
  border: none;
  border-radius: $min-height / 2;
  outline: none;
  box-shadow: $box-shadow;
  transition: $transition;

  &:hover {
    box-shadow: $box-shadow-hovered;
  }
}
</style>
