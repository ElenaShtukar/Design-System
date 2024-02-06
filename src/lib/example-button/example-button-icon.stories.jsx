import { ExampleButtonIcon } from "./example-button-icon";
import React from 'react';

export default {
    title: 'Examples DSA/Button',
    component: ExampleButtonIcon,
    parameters: {

        layout: 'centered',
        status: {
            type: 'stable', // 'beta' | 'stable' | 'deprecated' | 'releaseCandidate'
        }
    },

    tags: ['autodocs'],

};


export const IconButton = {
    args: {
        appearance: 'primary',
        size: 'base',
        iconName: "user"
    },
}
