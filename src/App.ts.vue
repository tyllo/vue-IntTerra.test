<template>
  <FELayoutDefault>
    <router-view />
  </FELayoutDefault>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator'
import FELayoutDefault from '@/layouts/FELayoutDefault.ts.vue'


@Component({
export default class App extends Vue {
}
</script>
