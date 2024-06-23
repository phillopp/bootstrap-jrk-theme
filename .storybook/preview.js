import '!style-loader!css-loader!sass-loader!../src/scss/styles.scss';
import JugendrotkreuzTheme from "./JugendrotkreuzTheme";

/** @type { import('@storybook/web-components').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: JugendrotkreuzTheme
    }
  },
};

export default preview;
