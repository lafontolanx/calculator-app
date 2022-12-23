import { Container, BoxKey, Key } from "./style"

let color: string;

interface KeysProps {
    onButtonClick: any;
}
export const Keys = ({ onButtonClick }: KeysProps) => {

    return (
        <Container>
            <BoxKey>
                <Key onClick={onButtonClick}>7</Key>
                <Key>8</Key>
                <Key>9</Key>
                <Key>DEL</Key>

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

                <Key>RESET</Key>
                <Key>=</Key>
            </BoxKey>
        </Container>
    )
}