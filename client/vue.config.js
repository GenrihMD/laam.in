const TerserPlugin = require("terser-webpack-plugin");
const WorkerPlugin = require("worker-plugin");
const path = require("path");

const mode = process.env.NODE_ENV;
const isProdaction = process.env.NODE_ENV === "production";
const isDevelopment = process.env.NODE_ENV === "development";

const vueCliConfig = {
  css: {
    extract: isProdaction ? {
      ignoreOrder: false,
    } : false,
    // sass: {
    //   // additionalData: `@import "~@/variables.sass"`
    // },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule
      .use("vue-svg-loader")
      .loader("vue-svg-loader")
      .options({
        svgo: {
          plugins: [{
              cleanupIDs: false,
            },
            {
              convertShapeToPath: false,
            },
            {
              convertStyleToAttrs: false,
            },
          ],
        },
      });

    const mimeKindRule = config.module.rule("mime-kind");
    mimeKindRule.include
      .add(path.resolve(__dirname, "node_modules/mime-kind"))
      .end()
      .resolve.alias.set(
        "fs",
        path.resolve(__dirname, "src/common/mocks/mock-fs.js")
      );
  },
  configureWebpack: {
    devtool: isDevelopment ? "source-map" : false,
    performance: {
      hints: false,
    },
    optimization: {
      minimize: isProdaction,
      minimizer: [new TerserPlugin()],
    },
    module: {
      rules: [{
          test: /\.vue$/,
          exclude: /node_modules/,
          loader: "vue-pug-lint-loader",
          options: require("./.pug-lintrc.js"),
          enforce: "pre",
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        }
        б {
          test: /\.tmp.html$/,
          loader: "vue-template-loader",
          options: {
            transformToRequire: {
              img: "src",
            },
          },
        },
      ],
    },
    plugins: [
      new WorkerPlugin({
        preserveTypeModule: true,
      }),
    ],
  },
  devServer: {
    disableHostCheck: true,
  },
};

module.exports = vueCliConfig;