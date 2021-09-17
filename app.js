const app = require('express')();
const { loadNuxt, build } = require('nuxt');
const helmet = require('helmet');

const isDev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

async function start() {
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  app.use(helmet());
  app.use(nuxt.render);

  if (isDev) {
    build(nuxt)
  }

  app.listen(port, () => {
    console.log(`Server listening on ${port}`);
  });

}

start();
