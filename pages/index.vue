<script setup lang="ts">

const modalStore = useModalStore();

</script>
<template>
  <h1>HELLO THERE</h1>
  <button class="btn" @click="modalStore.open('Test error')">Show error</button>
</template>
