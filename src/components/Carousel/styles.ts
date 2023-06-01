import styled from "styled-components";

export const ContainerDesk = styled.div`
  margin: 6rem 4rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerMobile = styled.div`
  margin: 6rem auto;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;

  @media (max-width: 868px) {
    width: 100%;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const ContainerArrow = styled.div`
  display: block;

  @media (max-width: 868px) {
    display: none;
  }
`;
