<template>
  <div class="layout-default">
    <header class="layout-default__header">
      <!--  -->
    </header>

    <main class="layout-default__main">
      <slot />
    </main>

    <footer class="layout-default__footer">
      <!--  -->
    </footer>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator'


@Component
export default class FELayoutDefault extends Vue {
}
</script>

<style lang="scss">
.layout-default {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: $color-gray-smoke;

  &__header {
    height: $header-height;
    background-color: $color-brand;
  }

  &__main {
    // display: flex;
    flex-grow: 1;
    // flex-wrap: wrap;
    margin-right: 80px;
    margin-left: 80px;
    background-color: white;
    box-shadow: $box-shadow;

    > * {
      min-width: 100%;
    }
  }

  &__footer {
    //
  }
}
</style>
