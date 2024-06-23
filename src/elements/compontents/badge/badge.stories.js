import template from "./badge.hbs";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
    title: 'Components/Badge',
    tags: ['autodocs'],
    render: (args) => template(args),
    argTypes: {
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
            description: 'Kontext-Klasse'
        },
        pill: {
            control: 'boolean'
        }
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
        label: 'Mein Badge',
        color: 'primary'
    },
};
