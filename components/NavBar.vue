<script setup lang="ts">
const auth = useAuthStore()
</script>
<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-none">
      <label for="drawer" aria-label="open sidebar" class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          class="inline-block h-6 w-6 stroke-current">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </label>
    </div>
    <div class="mx-2 flex-1">
      <NuxtLink class="btn btn-ghost text-xl" to="/">My App</NuxtLink>
    </div>
    <div class="flex-none">
      <input type="checkbox" value="light" class="checkbox theme-controller" />
      <ul class="menu menu-horizontal px-1">
        <li v-if="!auth.isLoggedIn">
          <NuxtLink to="/login">Login</NuxtLink>
        </li>
        <li v-else>
          <details>
            <summary>Welcome {{ auth.user?.name }}</summary>
            <ul class="bg-base-100 rounded-t-none p-2">
              <li>
                <NuxtLink to="/profile">Profile</NuxtLink>
              </li>
              <li><a>Link 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>
