import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 310px;
    border-radius: 10px;
    margin-top: 1rem;
    background-color: ${props => props.theme.colors.BackgroundKeys};

    display: flex;
    align-items: center;
    justify-content: center;
`

export const BoxKey = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    width: 260px;
    height: 260px;
`

export const Key = styled.button`
    width: 60px;
    height: 35px;
    background-color: ${props => props.theme.colors.Key};

    border: none;
    border-radius: 5px;
    font-size: 24px;
    color: var(--grayish-blue);

    box-shadow: 0px 4px 0px ${props => props.theme.colors.KeyShadow};

    transition: all 0.3s;

    cursor: pointer;

    :nth-child(4), :nth-child(17) {
        box-shadow: 0px 4px 0px ${props => props.theme.colors.DeleteKeyShadow};
        background-color: ${props => props.theme.colors.DeleteKey};
        color: ${props => props.theme.colors.textColor1};
        font-size: 16px;
    }

    :nth-child(17), :nth-child(18) {
        width: 126.67px;
    }

    :nth-child(18) {
        box-shadow: 0px 4px 0px ${props => props.theme.colors.EqualKeyShadow};
        background-color: ${props => props.theme.colors.EqualKey};
        color: var(--white);
    }

    &:active {
    box-shadow: 0px 2px 0px ${props => props.theme.colors.KeyShadow};
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.2s;
    transform: translateY(2px);
    background-color: ${props => props.theme.colors.KeyActive};

    :nth-child(4), :nth-child(17) {
        background-color: ${props => props.theme.colors.DeleteActiveKey};
        box-shadow: 0px 2px 0px ${props => props.theme.colors.DeleteKeyShadow};
    }

    :nth-child(18) {
        background-color: ${props => props.theme.colors.EqualActiveKey};
        box-shadow: 0px 2px 0px ${props => props.theme.colors.EqualKeyShadow};
    }
    }



`



