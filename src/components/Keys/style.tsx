import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 310px;
    border-radius: 10px;
    margin-top: 1rem;
    background-color: var(--very-dark-blue);

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
    background-color: var(--light-grayish-orange);

    border: none;
    border-radius: 5px;
    font-size: 24px;
    color: var(--grayish-blue);

    box-shadow: 0px 4px 0px var(--grayish-orange);

    &:active {
    box-shadow: none;
    transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.2s;
    transform: translateY(4px);
}
`

export const Delete = styled.button`
    width: 60px;
    height: 35px;
    background-color: var(--desaturated-dark-blue);

    border: none;
    border-radius: 5px;
    font-size: 24px;
    color: var(--white);

    box-shadow: 0px 4px 0px var(--very-dark-blue-2);

    &:active {
        box-shadow: none;
        transition: cubic-bezier(0.075, 0.82, 0.165, 1) 0.2s;
        transform: translateY(4px);
    }
`


