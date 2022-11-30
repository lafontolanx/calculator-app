import styled, { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            Background: string;
            BackgroundKeys: string;
            BackgroundInput: string;

            DeleteKey: string;
            DeleteKeyShadow: string;
            DeleteActiveKey: string;

            EqualKey: string;
            EqualKeyShadow: string;
            EqualActiveKey: string;

            Key: string;
            KeyShadow: string;
            KeyActive: string;
            
            textColor1: string;
            textColor2: string;
            textColor3: string;
        };
    }
}