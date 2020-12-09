<template lang="pug">
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EmptyNothing from "@/components/EmptyNothing.vue"; // @ is an alias to /src

@Component({
  components: {
    EmptyNothing,
  },
})
export default class Home extends Vue {}
</script>
