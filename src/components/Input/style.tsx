import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 70px;
    border-radius: 10px;
    background-color: var(--very-dark-desaturated-blue);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Number = styled.input`
    width: 90%;
    height: 60%;
    border-radius: 10px;
    background-color: transparent;
    border: none;
    text-align: right;

    font-size: 2rem;
    color: var(--white);

    ::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    }
    
`