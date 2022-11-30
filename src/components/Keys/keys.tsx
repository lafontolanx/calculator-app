import { Theme } from "../Header/style"
import { Container, BoxKey, Key } from "./style"

let color: string;
export const Keys = () => {

    if (Theme === 'dark') {
        color = '#fff'
    } else {
        color = '#000'
    }

    return (
        <Container>
            <BoxKey>
                <Key>7</Key>
                <Key>8</Key>
                <Key>9</Key>
                <Key style={{
                    backgroundColor:color,
                    color:"{${props => props.theme.colors.textColor1}",
                    fontSize:"16px"
                }}>DEL</Key>

                <Key>4</Key>
                <Key>5</Key>
                <Key>6</Key>
                <Key>+</Key>

                <Key>1</Key>
                <Key>2</Key>
                <Key>3</Key>
                <Key>-</Key>

                <Key>.</Key>
                <Key>0</Key>
                <Key>÷</Key>
                <Key>x</Key>

                <Key style={{
                    backgroundColor:"${props => props.theme.colors.DeleteKey}",
                    color:"${props => props.theme.colors.textColor1}",
                    fontSize:"16px",
                    width:"126.67px"
                }}>RESET</Key>
                <Key style={{
                    backgroundColor:"${props => props.theme.colors.EqualKey}",
                    color:"{${props => props.theme.colors.textColor1}",
                    fontSize:"24px",
                    width:"126.67px"
                }}>=</Key>
            </BoxKey>
        </Container>
    )
}