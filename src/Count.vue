<template>
  <div class="example">{{ msg }}</div>
</template>

<script lang="ts">
export default {
  data () : {
    msg: String
  } {
    return {
      msg: 'Hello Power BI!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>