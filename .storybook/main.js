import autoprefixer from 'autoprefixer';
import * as path from 'path';

/** @type { import('@storybook/web-components-webpack5').StorybookConfig } */
const config = {
  stories: ['../docs/**/*.mdx', '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-webpack5-compiler-babel',
    '@storybook/addon-styling-webpack',
    /*{
      name: '@storybook/addon-styling-webpack',
      options: {
        rules: [
          {
            test: /\.hbs$/,
            loader: "handlebars-loader",
          }
        ]
      }
    },*/
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/html-webpack5',
    options: {},
  },
  staticDirs: ['../src/assets'],
  webpackFinal: async (config) => {
    config.module.rules.push(
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [
                    autoprefixer
                  ]
                }
              }
            },
            'sass-loader'
          ],
          include: path.resolve(__dirname, '../src/')
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext][query]'
          },
          include: path.resolve(__dirname, '../src/')
        },
        {
          test: /\.hbs$/,
          loader: 'handlebars-loader',
          options: {
            // Specify Mustache options here
          },
          include: path.resolve(__dirname, '../src/')
        }
    );
    return config;
  }
};
export default config;
