import { Container, BoxKey, Key, Delete } from "./style"

export const Keys = () => {
    return (
        <Container>
            <BoxKey>
                <Key>7</Key>
                <Key>8</Key>
                <Key>9</Key>
                <Delete>DEL</Delete>

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
                <Key>/</Key>
                <Key>X</Key>
            </BoxKey>
        </Container>
    )
}