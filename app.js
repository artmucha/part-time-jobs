const { loadNuxt, build } = require('nuxt');
const app = require('express')();
const helmet = require('helmet');
const config = require('./nuxt.config.js');

async function start() {
  const nuxt = await loadNuxt(config.dev ? 'dev' : 'start');

  // app.use(helmet());
  app.use(nuxt.render);

  if (config.dev) {
    build(nuxt)
  }

  app.listen(3000, () => {
    console.log(`Server is listening`)
  });
}

start();