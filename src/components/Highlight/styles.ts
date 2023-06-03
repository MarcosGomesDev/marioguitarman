import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
  background-color: #131313;
  padding: 3rem 0;
  margin: 7rem 0;
`;

export const Content = styled.div`
  width: 19rem;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TextNumber = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 900;
  font-size: 5rem;
  letter-spacing: 0.1rem;
  margin-left: 1rem;
  color: #fff;
`;

export const PlusText = styled.span`
  font-family: "Inter", sans-serif;
  font-weight: 900;
  font-size: 6rem;
  color: #2ef8a0;
  margin-top: -1rem;
`;

export const Description = styled.p`
  font-size: 1.7rem;
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  color: #b5b5b5;
  max-width: 20rem;
  text-align: center;
`;
