import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit();

export const useBearStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      credentials: null,
      projects: [],
      logIn: (email, password) =>
        set(() => ({ isLoggedIn: true, credentials: { email, password } })),
      logOut: () =>
        set(() => ({ isLoggedIn: false, credentials: null, projects: [] })),
      getProjects: async () => {
        const projects = await octokit.rest.repos.listForOrg({
          org: "code-with-ahsan",
          type: "public",
        });
        set({ projects: projects.data });
      },
    }),
    {
      name: "app-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useBearStore;
