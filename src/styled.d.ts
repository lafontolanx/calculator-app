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
            EqualKey: string;
            EqualKeyShadow: string;
            Key: string;
            KeyShadow: string;
            
            textColor1: string;
            textColor2: string;
        };
    }
}