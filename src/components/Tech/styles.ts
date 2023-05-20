import styled from "styled-components";

export const Container = styled.section`
    max-width: 140rem;
    margin: 0 auto;
    padding-top: 9rem !important;
    padding: 0 2rem;
`;

export const Title = styled.h2`
    font-family: 'BarlowBold';
    font-size: 3rem;
    margin-bottom: 5rem;
    color: #2ef8a0;
    text-align: center;
`;

export const Content = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
`;

export const Card = styled.div`
    width: 29.7rem;
    height: 6rem;
    border-radius: .5rem;
    background-color: #131313;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-left: 2rem;
    font-size: 3rem;
    transition: all ease .3s;
    
    :hover {
        border: 1px solid #2ef8a0;
        transform: scale(1.1);
    }
`;

export const Text = styled.p`
    color: #ccc;
    font-family: 'BarlowRegular';
    font-size: 2rem;
`;