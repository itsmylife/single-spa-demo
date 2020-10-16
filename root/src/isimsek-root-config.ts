import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@isimsek/navbar",
//   app: () => System.import("@isimsek/navbar"),
//   activeWhen: ["/"]
// });

registerApplication({
  name: "@isimsek/mf-home",
  app: () => System.import("@isimsek/mf-home"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
