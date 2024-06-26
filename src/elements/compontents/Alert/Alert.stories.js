import template from "./Alert.hbs";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: 'Components/Alert',
    tags: ['autodocs'],
    render: (args) => template(args),
    argTypes: {
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
            description: 'Kontext-Klasse'
        },
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
        content: 'A simple alert—check it out!',
        color: 'primary'
    },
};
