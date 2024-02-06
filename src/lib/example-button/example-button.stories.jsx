import { ExampleButton } from './example-button';
import { Icon } from '../icon'
import React from 'react';

export default {
    title: 'Examples DSA/Button',
    component: ExampleButton,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
        status: {
            type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
        }
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],

};


export const Primary = {
    args: {
        appearance: 'primary',
        size: 'base',
        text: 'Primary button'
    },
}

export const Secondary = {
    args: {
        appearance: 'secondary',
        size: 'base',
        text: 'Secondary button'
    },
}

export const Inverted = {
    args: {
        appearance: 'inverted',
        size: 'base',
        text: 'Inverted button'
    },
}

export const iconBefore = {
    args: {
        appearance: 'primary',
        size: 'base',
        text: 'Button',
        iconBefore: <Icon iconName='user' />
    },
}

export const iconAfter = {
    args: {
        appearance: 'primary',
        size: 'base',
        text: 'Button',
        iconAfter: <Icon iconName='user' />
    },
}

export const designApi = () => {
    return (<iframe style={{ border: "1px solid rgba(0, 0, 0, 0.1)", borderRadius: "16px", width: "90vw", height: "500px" }} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFlpeqZPKm817NETUlX76E9%2FDSA-Project%3Ftype%3Ddesign%26node-id%3D2858%253A1508%26mode%3Ddesign%26t%3Dv3RtZy9TwoE1wsfu-1" allowfullscreen></iframe>)
}

export const usage = () => {
    return (<iframe style={{ border: "1px solid rgba(0, 0, 0, 0.1)", borderRadius: "16px", width: "90vw", height: "500px" }} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFlpeqZPKm817NETUlX76E9%2FDSA-Project%3Ftype%3Ddesign%26node-id%3D2858%253A1563%26mode%3Ddesign%26t%3Dv3RtZy9TwoE1wsfu-1" allowfullscreen></iframe>)
}

export const examples = () => {
    return (<iframe style={{ border: "1px solid rgba(0, 0, 0, 0.1)", borderRadius: "16px", width: "90vw", height: "500px" }} src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFlpeqZPKm817NETUlX76E9%2FDSA-Project%3Ftype%3Ddesign%26node-id%3D2858%253A1578%26mode%3Ddesign%26t%3Dv3RtZy9TwoE1wsfu-1" allowfullscreen></iframe>)
}