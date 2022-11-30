import { DefaultTheme } from 'styled-components';

const dark: DefaultTheme = {
    title: 'dark',
    colors: {
        Background: 'hsl(222, 26%, 31%)',
        BackgroundKeys: 'hsl(223, 31%, 20%)',
        BackgroundInput: 'hsl(224, 36%, 15%)',

        DeleteKey: 'hsl(225, 21%, 49%)',
        DeleteKeyShadow: 'hsl(224, 28%, 35%)',
        DeleteActiveKey: 'hsl(224, 51%, 76%)',

        EqualKey: 'hsl(6, 63%, 50%)',
        EqualKeyShadow: 'hsl(6, 70%, 34%)',
        EqualActiveKey: 'hsl(6, 93%, 67%)',

        Key: 'hsl(30, 25%, 89%)',
        KeyShadow: 'hsl(28, 16%, 65%)',
        KeyActive: 'hsl(0, 0%, 100%)',

        textColor1: 'hsl(0, 0%, 100%)',
        textColor2: 'hsl(221, 14%, 31%)',
        textColor3: 'hsl(0, 0%, 100%)'
    }
}

export default dark;