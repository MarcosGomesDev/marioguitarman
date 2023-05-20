import styled from "styled-components";

export const Container = styled.div`
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const Icon = styled.p`
    background-color: #0F1117;
    border-radius: 100%;
    padding: 1.5rem;
`;

export const Image = styled.img`
    width: 17rem;
`;

export const Title = styled.p`
    font-family: 'BarlowSemiBold';
    font-weight: 600;
    font-size: 1.5rem;
    color: #818181;
    margin: .4rem 0 2rem;
`;

export const Description = styled.p`
    font-size: 1.5rem;
    color: #ccc;
    /* width: 90%; */
    font-family: 'BarlowRegular';
    text-align: justify;
`;

export const Date = styled.p`
    font-family: 'BarlowSemiBold';
    font-size: 1.3rem;
    font-weight: 600;
    color: #818181;
    margin: 1rem 0 2rem 0;
`;

export const Button = styled.button`
    width: 100%;
    height: 4rem;
    background-color: transparent;
    border: .1rem solid #2ef8a0;
    border-radius: .5rem;
    color: #2ef8a0;
    cursor: pointer;
    transition: all .3s;

    :hover {
        background-color: #2ef8a0;
        color: #000;
        transform: scale(1.1);
    }
`;