<script lang="ts" setup>
// This import works
import message from 'test-lib/test'

// The above import, made in an api function does not work
const { data } = await useAsyncData('test', () => $fetch('/api/test'))
</script>

<template>
  <div>
    Should say "hello hello": "{{ message }} {{ data }}"
  </div>
</template>
