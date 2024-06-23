import { create } from '@storybook/theming/create';

export default create({
    base: 'light',
    // Typography
    fontBase: 'Quicksand, "Open Sans", sans-serif',
    fontCode: 'monospace',

    brandTitle: 'Deutsches Jugendrotkreuz',
    brandUrl: 'https://www.jugendrotkreuz.de',
    brandImage: '/img/logo/JRK-Logo.svg',
    brandTarget: '_blank',

    //
    colorPrimary: '#00a0aa',
    colorSecondary: '#28197d',

    // UI
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appPreviewBg: '#ffffff',
    appBorderColor: '#00a0aa',
    appBorderRadius: 0,

    // Text colors
    textColor: '#000000',
    textInverseColor: '#ffffff',
    textSize: '1rem',

    // Toolbar default and active colors
    barTextColor: '#000',
    barSelectedColor: '#585C6D',
    barHoverColor: '#28197d',
    barBg: '#00a0aa',

    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#28197d',
    inputTextColor: '#000000',
    inputBorderRadius: 0,
});