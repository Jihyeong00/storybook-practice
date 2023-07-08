import React from 'react';
import MuiAvatar, {sizeCSS} from "./Avatar";


export default {
    title: 'Design System/Avatar',
    tags: ['autodocs'],
    component: MuiAvatar,
    argTypes: {
        size: {
            control: {
                type: 'select',
            },
            options: ['default', 'small', 'medium', 'large'],
        },
    },
};

// Other Avatar stories
const Template = args => <MuiAvatar src={args.src} alt={args.alt} sx={sizeCSS[args.size]}/>;

export const Controls = Template.bind({});
/*
 * More on args at:
 * https://storybook.js.org/docs/react/writing-stories/args
 */
Controls.args = {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png',
    alt: '대체 이미지',
    size: 'default'
};