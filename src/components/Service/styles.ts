import styled from "styled-components";

export const Container = styled.section`
    max-width: 140rem;
    margin: 0 auto;
    padding: 0 2rem;
    padding-top: 9rem;
`;

export const Header = styled.header`
    /* display: flex; */
    width: 100%;
    align-items: center;
    gap: 3rem;
    margin-bottom: 6rem;
    justify-content: center;
`;

export const HeaderTitle = styled.h2`
    font-family: 'PoppinsBold';
    font-size: 3.4rem;
    color: #fff;
    text-align: center;
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 4rem;
    justify-content: center;
`;

export const Card = styled.div`
    width: 100%;
    min-width: 30rem;
    max-width: 32rem;
    height: 25rem;
    padding: 2rem;
    border: .2rem solid #131313;
    border-radius: .5rem;
    transition: all ease .3s;
    cursor: pointer;

    :hover {
        transform: scale(1.1);
        border-color: #2ef8a0;
    }
`;

export const Title = styled.h3`
    color: #ccc;
    font-size: 2rem;
    margin-bottom: 2rem;
    font-family: 'BarlowBold';
`;

export const Text = styled.p`
    font-size: 1.5rem;
    letter-spacing: .1rem;
    color: #818181;
    font-family: 'BarlowRegular';
`;