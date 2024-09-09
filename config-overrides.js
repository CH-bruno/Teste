console.log('config-overrides.js carregado');
export default function override(config, env) {
  config.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules[/\\](?!react-native-vector-icons)/,
    use: {
      loader: "babel-loader",
      options: {
        babelrc: false,
        configFile: false,
        presets: [
          ["@babel/preset-env", { useBuiltIns: "usage" }],
          "@babel/preset-react",
          "@babel/preset-flow",
          "@babel/preset-typescript"
        ],
        plugins: [
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-proposal-object-rest-spread"
        ]
      }
    }
  });

  return config;
};
