<script setup lang="ts">
const auth = useAuthStore()
</script>
<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
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
