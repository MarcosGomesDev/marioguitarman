import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;
  padding-top: 9rem;

  @media (max-width: 1130px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: 450px;
  height: 450px;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 100%;
  box-shadow: 0.1rem 0.1rem 1rem 0.1rem #ff0000;

  @media (max-width: 450px) {
    height: auto;
  }
`;

export const ContainerAbout = styled.div`
  max-width: 60rem;
`;

export const Title = styled.h3`
  font-family: "BarlowRegular";
  font-size: 3.2rem;
  font-display: swap;
  color: #fff;
  margin: 2rem 0;

  @media (max-width: 620px) {
    font-size: 2.3rem;
    font-display: swap;
  }

  @media (max-width: 430px) {
    font-size: 2rem;
    font-display: swap;
  }
`;

export const HighlightText = styled.p`
  font-family: "InterRegular";
  font-size: 1.2rem;
  font-display: swap;
  letter-spacing: 0.3rem;
  align-items: center;
  display: flex;
  gap: 0.5rem;
  color: #fff;
`;

export const Text = styled.p`
  font-size: 1.7rem;
  font-display: swap;
  color: #ccc;
  margin-bottom: 3rem;
  font-family: "InterRegular";
  text-align: justify;
  line-height: 2.5rem;
`;

export const ContainerButton = styled.div`
  width: 60%;
  display: flex;
  gap: 1rem;

  @media (max-width: 900px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Link = styled.a`
  width: 100%;
`;

export const ButtonCV = styled.button`
  width: 100%;
  height: 4.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: ease 500ms;
  background-color: #2ef8a0;

  :hover {
    background-color: rgba(46, 248, 160, 0.6);
    transform: scale(0.9);
  }

  @media (max-width: 900px) {
    :hover {
      transform: none;
      background-color: #2ef8a0;
    }
  }
`;

export const ButtonEmail = styled.button`
  width: 100%;
  height: 4.5rem;
  border-radius: 0.5rem;
  border: 0.1rem solid #2ef8a0;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  background-color: transparent;
  color: #2ef8a0;

  :hover {
    background-color: rgba(46, 248, 160, 1);
    color: #000;
    transform: scale(0.9);
  }

  @media (max-width: 900px) {
    :hover {
      transform: none;
      background-color: transparent;
      color: #2ef8a0;
    }
  }
`;
