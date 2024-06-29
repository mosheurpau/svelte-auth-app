<script>
  import { authStore } from "$lib/stores/authStore";
  import { get } from "svelte/store";
  import { onMount } from "svelte";

  let authState;

  $: authState = get(authStore);

  onMount(() => {
    if (!authState.isAuthenticated) {
      window.location.href = "/login";
    }
  });
</script>

<div class="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
  <h1 class="text-2xl font-bold mb-4">Protected Page</h1>
  <p class="text-gray-700">
    This is a protected page. Only accessible if authenticated.
  </p>
</div>
