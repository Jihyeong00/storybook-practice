import Card from "./Card";


export default {
    title: 'Design System/Card',
    tags: ['autodocs'],
    component: Card,
    argTypes: {
    },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Test1 = {
    args: {
        dataList: [{
            color: "primary",
            label: "test1",
            sx: {color: 'skyblue'},
        }, {
            color: "primary",
            label: "test2",
            sx: {color: 'blue'},
        }, {
            color: "primary",
            label: "test3",
            sx: {color: 'grey'}
        }]
    },
};


export const Test2 = {
    args: {
        dataList: [{
            color: "primary",
            label: "test4",
            sx: {color: 'skyblue'},
        }, {
            color: "primary",
            label: "test5",
            sx: {color: 'blue'},
        }, {
            color: "primary",
            label: "test6",
            sx: {color: 'grey'}
        }]
    },
};



