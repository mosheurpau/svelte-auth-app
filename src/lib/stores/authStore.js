import { writable } from "svelte/store";

function createAuthStore() {
  let user, role, isAuthenticated;

  if (typeof window !== "undefined") {
    // Only run this code on the client side
    user = localStorage.getItem("user");
    role = localStorage.getItem("role");
    isAuthenticated = !!user;
  } else {
    // Placeholder values for server side rendering
    user = null;
    role = null;
    isAuthenticated = false;
  }

  const { subscribe, set } = writable({
    user,
    role,
    isAuthenticated,
  });

  return {
    subscribe,
    login: (username, userRole) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("user", username);
        localStorage.setItem("role", userRole);
      }
      set({
        user: username,
        role: userRole,
        isAuthenticated: true,
      });
    },
    logout: () => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
        localStorage.removeItem("role");
      }
      set({
        user: null,
        role: null,
        isAuthenticated: false,
      });
    },
  };
}

export const authStore = createAuthStore();
