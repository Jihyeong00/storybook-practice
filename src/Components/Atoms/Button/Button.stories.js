import MuiButton from "./Button";
import React from "react";


export default {
    title: 'Design System/Button',
    tags: ['autodocs'],
    component: MuiButton,
    argTypes: {
        button:{control: {type:"text"}},
        disabled: { control: 'boolean' },
        size: {
            control: {
                type: 'select',
            },
            options: ['default', 'small', 'medium', 'large'],
        },
    },
};

const Template = args => <MuiButton {...args}/>;

export const Controls = Template.bind({});

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Medium = {
    args: {
        size: 'medium',
        label: 'Error',
    },
};


export const Small = {
    args: {
        size: 'small',
        label: 'send',
    },
};

export const SmallError = {
    args: {
        size: 'small',
        label: 'send',
        color:'error',
        disabled: true
    },
};


