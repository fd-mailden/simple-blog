export const ROUTER = {
  MAIN: {
    path: "/",
    name: "Main",
  },
  ABOUT: {
    path: "/about",
    name: "About",
  },
  TAGS: {
    path: "/tags",
    name: "Tags",
  },
  POST: {
    path: "/post/:id",
    generate: (id) => `/post/${id}`,
  },
  LOGIN: {
    path: "/login",
    name: "Login",
  },
};

