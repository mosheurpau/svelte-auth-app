<script>
  import { authStore } from "$lib/stores/authStore";
  import { get } from "svelte/store";

  let authState;

  $: authState = get(authStore);

  function handleLogout() {
    authStore.logout();
    window.location.href = "/login";
  }
</script>

<header class="bg-gray-800 p-4 text-white">
  <div class="container mx-auto flex justify-between items-center">
    <div>
      {#if authState.isAuthenticated}
        <p class="inline-block mr-4">Welcome, {authState.user}</p>
        {#if authState.role === "admin"}
          <a
            href="/dashboard"
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >Dashboard</a
          >
        {/if}
        <button
          on:click={handleLogout}
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >Logout</button
        >
        <a
          href="/protected"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >Protected</a
        >
        <a
          href="/shop"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >Shop</a
        >
      {:else}
        <a
          href="/login"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >Login</a
        >
      {/if}
    </div>
  </div>
</header>
