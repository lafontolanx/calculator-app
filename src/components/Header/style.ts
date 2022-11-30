import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 300px;
    padding: 1rem 0;
`

export const Title = styled.h1`
    color: ${props => props.theme.colors.textColor1};
    font-size: 1.2rem;
`

export const Theme = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Text = styled.p`
    color: ${props => props.theme.colors.textColor1};
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 1px;
`