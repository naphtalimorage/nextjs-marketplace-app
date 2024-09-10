/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (isServer) {
        config.externals = [...config.externals, "@node-rs/argon2"];
      }
  
      config.module.rules.push({
        test: /\.node$/,
        loader: "node-loader",
      });
  
      return config;
    },
    experimental: {
      staleTimes: {
        dynamic: 30,
      },
    },
    serverExternalPackages: ["@node-rs/argon2"],
  };
  
  export default nextConfig;
  