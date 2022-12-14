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
  TAG: {
    path: "/tags/:id",
    generate: (id) => `/tags/${id}`,
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
