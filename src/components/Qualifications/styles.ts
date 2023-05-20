import styled from "styled-components";

export const Container = styled.section`
    max-width: 140rem;
    margin: 0 auto;
    padding: 0 2rem;
    padding-top: 9rem;
`;

export const Header = styled.header`
    text-align: center;
    color: #fff;
    margin-bottom: 2rem;
`;

export const Title = styled.h2`
    font-family: 'InterBold';
    font-size: 3.5rem;
    max-width: 60rem;
    margin: 0 auto;

    @media (max-width:430px) {
        font-size: 2.8rem;
    }
`;

interface ButtonProps {
    active: boolean
}

export const Button = styled.button<ButtonProps>`
    width: 100%;
    height: 6rem;
    background-color: transparent;
    color: ${({active}) => active ? '#2ef8a0' : '#ccc'};
    border-bottom: .1rem solid ${({active}) => active ? '#2ef8a0' : '#ccc'};
    cursor: pointer;
    transition: .3s all;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.7rem;
`;

export const Text = styled.p`
    font-family: 'BarlowRegular';
    font-size: 1.7rem;
    letter-spacing: .1rem;
    margin-left: .9rem;
`;

export const ButtonContainer = styled.div`
    max-width: 60rem;
    width: 100%;
    margin: 0 auto;
    display: flex;

    ${Button}:first-child {
        border-right: .1rem solid #ccc;
    }
`;

