<template>
  <div class="page-error">
    <h1 class="page-error__title">
      404 Страница не найдена
    </h1>

    <p>
      Извините, страницу которую вы искали, не найдена
    </p>

    <p>
      <router-link :to="homeRoute">
        Перейти на домашнюю страницу
      </router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { Location } from 'vue-router'
import {
  Component,
  Vue,
} from 'vue-property-decorator'
import { Routes } from '@/helpers/enums/routes'


@Component
export default class PageError404 extends Vue {
  public homeRoute: Location = { name: Routes.home }
}
</script>

<style lang="scss">
.page-error {
  &__title {
    font-size: 40px;
    line-height: 1;
  }
}
</style>
