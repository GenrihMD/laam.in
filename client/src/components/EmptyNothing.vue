<template lang="pug">
#empty(v-if="false")
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class EmptyNothing extends Vue {}
</script>

<style scoped lang="sass">
#empty
  display: none
</style>
