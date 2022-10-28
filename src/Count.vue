<template>
  <div class="example">{{ msg }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return { msg: "Hello Power BI!" };
  },
});
</script>

<style>
.example {
  color: red;
}
</style>