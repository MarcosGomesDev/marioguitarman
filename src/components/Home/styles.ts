import styled from "styled-components";

import Image from "../../assets/IMG_4301.jpeg";

export const Container = styled.section`
  padding: 30rem 0 11rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(${Image});
  background-size: cover, contain;
  background-position: center, center -7rem;
  background-repeat: no-repeat, no-repeat;
`;

export const Title = styled.h2`
  color: #fff;
  font-family: "PoppinsThin";
  text-align: center;
  font-size: 5rem;
  margin-top: 1rem;

  @media (max-width: 900px) {
    font-size: 3rem;
  }
`;

export const SubTitle = styled.p`
  color: #fff;
  font-family: "InterSemiBold";
  font-size: 7.5rem;
  font-weight: 100;
  text-align: center;
  margin-top: 16rem;

  @media (max-width: 900px) {
    font-size: 5rem;
  }

  @media (max-width: 430px) {
    font-size: 2.8rem;
  }
`;

export const InsideText = styled.span`
  color: #ff0000;
`;

export const Description = styled.p`
  color: #fff;
  font-family: "PoppinsLight";
  font-size: 1.4rem;
  max-width: 45rem;
  margin: 1rem auto 3rem auto;
  text-align: center;

  @media (max-width: 430px) {
    font-size: 1.4rem;
    max-width: 90%;
  }
`;

export const Highlight = styled.p`
  display: inline;
  font-family: "PoppinsRegular";
  background-color: #131313;
  color: #fff;
  border-radius: 0.4rem;
  padding: 0.8rem;
  font-size: 1.4rem;
  text-transform: uppercase;
`;

export const Button = styled.button`
  width: 27rem;
  height: 4rem;
  margin-top: 4rem;
  border-radius: 0.5rem;
  background-color: #ff0000;
  color: #000;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background-color: #ff0000;
    opacity: 0.6;
    transform: scale(1.1);
  }
`;

export const MenuSocial = styled.div`
  display: flex;
  margin-top: 10rem;
  gap: 2rem;
`;

export const ButtonIcon = styled.button`
  background-color: transparent;
  font-size: 3rem;
  transition: all 0.3s;
  color: #fff;
  cursor: pointer;
  border-radius: 2rem;
  align-items: center;
  justify-content: center;

  :hover {
    color: #ff0000;
    transform: scale(1.2);
  }
`;
