import { ExampleButtonLink } from './example-button-link';
import { Icon } from '../icon'
import React from 'react';

export default {
    title: 'Examples DSA/Button',
    component: ExampleButtonLink,
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


export const PrimaryLink = {
    args: {
        appearance: 'primary',
        text: 'Primary button'
    },
}
export const InvertedLink = {
    args: {
        appearance: 'inverted',
        text: 'Inverted button'
    },
}

export const iconBeforeLink = {
    args: {
        appearance: 'primary',
        text: 'Button',
        iconBefore: <Icon iconName='user' />
    },
}

export const iconAfterLink = {
    args: {
        appearance: 'primary',
        text: 'Button',
        iconAfter: <Icon iconName='chevronRight' />
    },
}
