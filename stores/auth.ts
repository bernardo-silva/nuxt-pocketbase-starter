import { defineStore } from "pinia";
import PocketBase from "pocketbase";
import {
  Collections,
  type TypedPocketBase,
  type UsersResponse,
} from "~/types/pocketbase-types";

const pb = new PocketBase("http://127.0.0.1:8090") as TypedPocketBase;

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as UsersResponse | null,
    isLoggedIn: false,
  }),
  getters: {
    userData: (state) => state.isLoggedIn && state.user ? state.user : null,
  },
  actions: {
    async init() {
      pb.authStore.onChange(async () => {
        console.log("auth changed");
        this.isLoggedIn = pb.authStore.isValid;

        if (this.isLoggedIn) {
          await this.fetchUser();
        } else {
          this.user = null;
        }
      });
      try {
        await pb.collection(Collections.Users).authRefresh();
        // this.isLoggedIn = pb.authStore.isValid;
      } catch (error) {
        // console.error("Error initializing auth:", error);
        // showErrorDialog(error);
      }
    },
    async fetchUser() {
      console.log("Fetching user data");
      if (!pb.authStore.record) return;
      try {
        this.user = await pb.collection(Collections.Users).getOne(
          pb.authStore.record.id,
        );
      } catch (error) {
        console.error("Error fetching user data:", error);
        showErrorDialog(error);
        this.logout();
      }
    },
    async login(email: string, password: string) {
      console.log("logging in");
      return pb.collection(Collections.Users).authWithPassword(email, password)
        .catch(
          (error) => {
            console.error("Login failed:", error);
            showErrorDialog(error);
          },
        );
    },
    async logout() {
      pb.authStore.clear();
    },
  },
});
