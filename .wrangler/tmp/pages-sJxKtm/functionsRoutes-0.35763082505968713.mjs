import { onRequest as __counter_js_onRequest } from "/Users/chris/dev/scout/hello-world-pages/functions/counter.js"

export const routes = [
    {
      routePath: "/counter",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [__counter_js_onRequest],
    },
  ]