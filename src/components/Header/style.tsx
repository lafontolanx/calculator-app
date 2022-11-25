import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 300px;
    padding: 1rem 0;
`

export const Title = styled.h1`
    color: var(--white);
    font-size: 1.2rem;
`

export const Theme = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

export const Text = styled.p`
    color: var(--white);
    font-size: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 1px;
`

export const Option = styled.div`
    width: 50px;
    height: 20px;
    border: none;
    background-color: var(--very-dark-blue);
    border-radius: 10px;

    display: flex;
    align-items: center;
`

export const Button = styled.button`
    height: 14px;
    width: 14px;
    border: none;
    background-color: var(--red);
    border-radius: 7px;

    margin-left: 3px;
    cursor: pointer;

    :active {
        transform: translateX(30px);
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
    }
`