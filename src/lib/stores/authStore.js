import { writable } from "svelte/store";

function createAuthStore() {
  let user;
  let isAuthenticated;

  if (typeof window !== "undefined") {
    // Only run this code on the client side
    user = localStorage.getItem("user");
    isAuthenticated = !!user;
  } else {
    // Placeholder values for server side rendering
    user = null;
    isAuthenticated = false;
  }

  const { subscribe, set } = writable({
    user,
    isAuthenticated,
  });

  return {
    subscribe,
    login: (username) => {
      if (typeof window !== "undefined") {
        localStorage.setItem("user", username);
      }
      set({
        user: username,
        isAuthenticated: true,
      });
    },
    logout: () => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
      set({
        user: null,
        isAuthenticated: false,
      });
    },
  };
}

export const authStore = createAuthStore();
