<script>
  import { authStore } from "$lib/stores/authStore";

  let username = "";
  let password = "";
  let role = ""; // New field for role

  async function handleLogin() {
    // Replace with actual login logic
    if (username && password) {
      // Here I should validate the credentials and get the role from my backend
      const userRole = role.toLowerCase(); // Replace this with the actual role from my backend
      authStore.login(username, userRole);
      window.location.href = "/";
    } else {
      console.error("Login failed: Invalid credentials");
    }
  }
</script>

<form
  on:submit|preventDefault={handleLogin}
  class="max-w-sm mx-auto mt-20 p-6 bg-white rounded-lg shadow-md"
>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm mb-2" for="username"
      >Username</label
    >
    <input
      id="username"
      type="text"
      bind:value={username}
      class="shadow border rounded w-full py-2 px-3 text-gray-700"
      placeholder="Username"
    />
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 text-sm mb-2" for="password"
      >Password</label
    >
    <input
      id="password"
      type="password"
      bind:value={password}
      class="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3"
      placeholder="Password"
    />
  </div>
  <div class="mb-6">
    <label class="block text-gray-700 text-sm mb-2" for="role">Role</label>
    <input
      id="role"
      type="text"
      bind:value={role}
      class="shadow border rounded w-full py-2 px-3 text-gray-700 mb-3"
      placeholder="Role"
    />
  </div>
  <div class="flex items-center justify-between">
    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >Login</button
    >
  </div>
</form>
