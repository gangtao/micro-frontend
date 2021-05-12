import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/welcome"],
});

registerApplication(
  '@naughty/app',
  () => System.import('@naughty/app'),
  location => location.pathname.startsWith('/app')
);

start({
  urlRerouteOnly: true,
});
