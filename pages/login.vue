<script setup lang="ts">
type LoginForm = {
  email: string;
  password: string;
};

const isLoading = ref(false);
const form = ref<LoginForm>({
  email: "",
  password: "",
});
const errors = ref<Partial<Record<keyof LoginForm, string>>>({});

const auth = useAuthStore();

onBeforeMount(() => {
  if (auth.isLoggedIn) {
    navigateTo("/");
  }
})

const validateForm = (): boolean => {
  let isValid = true;
  errors.value = {};

  if (!form.value.email.trim()) {
    errors.value.email = "Email is required.";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    errors.value.email = "Email is not valid.";
    isValid = false;
  }

  if (!form.value.password.trim()) {
    errors.value.password = "Password is required.";
    isValid = false;
  }

  return isValid;
};

const handleLogin = async () => {
  isLoading.value = true;
  if (validateForm()) {
    await auth.login(
      form.value.email,
      form.value.password,
    );
    navigateTo("/");
  }
  isLoading.value = false;
};
</script>
<template>
  <div class="flex min-h-screen items-center justify-center">
    <fieldset class="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
      <legend class="fieldset-legend">Login</legend>
      <!-- Email Field -->
      <TextInput v-model="form.email" :label='"Email"' :placeholder='"Enter your email"' :type='"email"' required
        :error="errors.email" @change="() => errors.email = undefined" />

      <!-- Password Field -->
      <TextInput v-model="form.password" :label='"Password"' :placeholder='"Enter your password"' :type='"password"'
        :error="errors.password" />
      <p>
        Don't have an account?
        <NuxtLink class="link" to="/register">Register</NuxtLink>
      </p>
      <button class="btn btn-neutral mt-4 relative" :disabled="isLoading" @click="handleLogin">
        <span v-if="isLoading" class="loading loading-spinner"></span>
        <span v-else>Login</span>
      </button>
    </fieldset>
  </div>
</template>
