/** @type {import('next').NextConfig} */

function isCssLoader(loader) {
  return Boolean(typeof loader?.loader === 'string' &&
    /(?<!post)css-loader/.test(loader?.loader));
}

function hasGetLocalIdent(loader) {
  return !!loader?.options?.modules?.getLocalIdent;
}

const nextConfig = {
  webpack: (config) => {
    // Workaround for Tailwind dark mode resolution with CSS Modules
    const rules = config.module.rules.find((r) => !!r.oneOf);

    rules.oneOf.forEach((loaders) => {
      if (Array.isArray(loaders.use)) {
        loaders.use.forEach((loader) => {

          if (!(isCssLoader(loader) && hasGetLocalIdent(loader))) return config;

          const {getLocalIdent} = loader.options.modules;

          if (getLocalIdent) {
            loader.options.modules.getLocalIdent = (...args) => {
              if (args.includes('dark')) return 'dark';
              return getLocalIdent(...args);
            }
          }
        });
      }
    })
    return config;
  },
};

export default nextConfig;
