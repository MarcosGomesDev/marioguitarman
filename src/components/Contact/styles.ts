import styled from "styled-components";

export const Container = styled.section`
  max-width: 140rem;
  margin: 0 auto;
  padding-top: 9rem !important;
  padding: 0 2rem;
  margin-bottom: 10rem !important;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "InterBold";
  font-size: 6rem;
  font-display: swap;
  letter-spacing: 0.2rem;
  color: #ff4040;
  display: inline;
  padding-right: 1rem;

  @media (max-width: 430px) {
    font-size: 4.2rem;
    font-display: swap;
  }
`;

export const Description = styled.p`
  width: 100%;
  max-width: 50rem;
  color: #fff;
  margin: 1rem 0 2rem 0;
  font-size: 1.8rem;
  font-display: swap;
  text-align: center;
  font-family: "BarlowRegular";
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3rem;
`;

export const Link = styled.a`
  width: 29.7rem;
  height: 6rem;
  border-radius: 0.5rem;
  background-color: transparent;
  border: 2px solid #131313;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 2rem;
  font-display: swap;
  transition: all ease 0.3s;
  color: #fff;
  cursor: pointer;

  :hover {
    border-color: #ff0000;
    transform: scale(1.1);
    color: #ff0000;
  }
`;
