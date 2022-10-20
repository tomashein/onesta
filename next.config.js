/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });
    const rules = config.module.rules.find((r) => !!r.oneOf);
    rules.oneOf.forEach((loaders) => {
      if (Array.isArray(loaders.use)) {
        loaders.use.forEach((l) => {
          if (typeof l !== 'string' && typeof l.loader === 'string' && /(?<!post)css-loader/.test(l.loader)) {
            if (!l.options.modules) return;
            const { getLocalIdent, ...others } = l.options.modules;
            l.options = {
              ...l.options,
              modules: {
                ...others,
                getLocalIdent: (ctx, localIdentName, localName, options) => {
                  if (localName === 'dark') return localName;
                  return getLocalIdent(ctx, localIdentName, localName, options);
                }
              }
            };
          }
        });
      }
    });
    return config;
  }
};

module.exports = nextConfig;
