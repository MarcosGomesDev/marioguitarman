import styled from "styled-components";

interface Props {
  active?: boolean;
}

export const Container = styled.button<Props>`
  z-index: 9999;
  background-color: #ff0000;
  border-radius: 250px;
  width: 6rem;
  height: 6rem;
  position: fixed;
  bottom: 8rem;
  right: 4rem;
  cursor: pointer;
  font-size: 2rem;
  color: #fff;
  display: ${({ active }) => (active ? "block" : "none")};

  @media (max-width: 700px) {
    display: none;
  }
`;
