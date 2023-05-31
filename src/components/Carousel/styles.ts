import styled from "styled-components";

export const Container = styled.div`
  margin: 6rem 5rem;

  @media (max-width: 768px) {
    margin: 6rem auto;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 110vh;

  @media (max-width: 868px) {
    height: 90vh;
  }

  @media (max-width: 450px) {
    height: 46vh;
  }
`;
