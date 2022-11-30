import React, { useEffect, useState } from "react"

import { Container, Title, Theme, Text } from "./style"

import Switch from 'react-switch'

interface IProps {
    onChange: (checked: boolean) => void
}

export const Header: React.FC<IProps> = ({ onChange }) => {

    const [check, setCheck] = useState(false);

    const toggleSwitch = () => {
        let newValue = !check;
        setCheck(newValue);
        onChange(newValue);
    }

    return (
        <Container>
            <Title>calc</Title>
            <Theme>
                <Text>theme</Text>
                <Switch 
                    onChange={toggleSwitch}
                    checked={check}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={20}
                    width={50}

                    offColor="#d1cccc"
                    offHandleColor="#ca5502"

                    onColor="#182034"
                    onHandleColor="#d03f2f"

                    handleDiameter={14}
                    activeBoxShadow="none"
                />
            </Theme>
        </Container>
    )
}