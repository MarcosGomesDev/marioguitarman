import styled from "styled-components";

export const Container = styled.section`
  padding-top: 9rem;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  font-family: "BarlowBold";
  font-size: 4rem;
  margin-bottom: 5rem;
  color: #ff4040;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  width: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  border-radius: 0.5rem;
`;

export const Description = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  opacity: 0;
`;

export const Card = styled.div`
  width: 45rem;
  min-width: 31rem;
  height: 25rem;
  border: 0.2rem solid #808080;
  background-color: #000;
  border-radius: 0.5rem;
  position: relative;

  @media (max-width: 768px) {
    max-width: 90%;
  }

  :hover ${Image} {
    opacity: 0.2;
    transition: all 0.3s;
  }

  :hover ${Description} {
    opacity: 1;
    animation: Up 0.8s;
  }

  @keyframes Up {
    from {
      opacity: 0;
      transform: translateY(2rem);
    }
    to {
      opacity: 1;
    }
  }
`;

export const CardTitle = styled.h3`
  color: #fff;
  font-size: 2.4rem;
  font-family: "BarlowRegular";
`;

export const CardContent = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  z-index: 2;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
`;

interface ButtonProps {
  bg?: string;
}

export const Button = styled.button<ButtonProps>`
  width: 16rem;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: ${({ bg }) => (bg ? bg : "transparent")};
  border: 1px solid transparent;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  transition: all 0.3s;

  :hover {
    transform: scale(1.1);
  }
`;

export const ButtonOutline = styled.button`
  width: 30rem;
  height: 4rem;
  border-radius: 0.5rem;
  background-color: transparent;
  border: 0.1rem solid #ff0000;
  color: #ff0000;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    background-color: #ff0000;
    transform: scale(1.1);
    color: #000;
  }
`;
