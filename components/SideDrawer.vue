<script setup lang="ts">
const lgCollapsed = ref(false);
</script>
<template>
  <div class="drawer lg:drawer-open">
    <!-- drawer state -->
    <input id="drawer" type="checkbox" class="drawer-toggle" >

    <!-- main content -->
    <div class="drawer-content">
      <slot />
    </div>

    <!-- drawer-content -->
    <div class="drawer-side">
      <label for="drawer" aria-label="close sidebar" class="drawer-overlay"/>
      <div
class="bg-base-100 text-base-content min-h-full w-60 flex flex-col items-center"
        :class="{ 'lg:w-15': lgCollapsed }">
        <!-- avatar -->
        <div class="avatar w-4/5">
          <img class="rounded" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" >
        </div>
        <p class="text-2xl font-bold" :class="{ 'hidden': lgCollapsed }">Hello, there!</p>
        <div class="divider"/>
        <!-- menu -->
        <ul class="menu w-full">
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
          <button class="btn btn-ghost flex-none" @click="lgCollapsed = !lgCollapsed">Collapse</button>
        </ul>
      </div>
    </div>
  </div>
</template>
