<script lang="ts" setup>
const { data } = await useAsyncData('test', () => $fetch('/api/test'))
</script>

<template>
  <div>
    Should say hello: {{ data }}
  </div>
</template>
