import { Container, BoxKey, Key } from "./style"

export const Keys = () => {
    return (
        <Container>
            <BoxKey>
                <Key>7</Key>
                <Key>8</Key>
                <Key>9</Key>
                <Key style={{
                    backgroundColor:"var(--desaturated-dark-blue)",
                    color:"var(--white)",
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
                    backgroundColor:"var(--desaturated-dark-blue)",
                    color:"var(--white)",
                    fontSize:"16px",
                    width:"126.67px"
                }}>RESET</Key>
                <Key style={{
                    backgroundColor:"var(--red)",
                    color:"var(--white)",
                    fontSize:"24px",
                    width:"126.67px"
                }}>=</Key>
            </BoxKey>
        </Container>
    )
}