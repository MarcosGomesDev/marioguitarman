import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #131313;
  width: 100%;
  height: 8rem;
  z-index: 10000;
  position: fixed;

  top: 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  position: relative;
  padding: 0 2rem;
`;

export const MenuHeader = styled.nav`
  display: flex;
  height: 8rem;
  align-items: center;

  @media (max-width: 1366px) {
    display: none;
  }
`;

export const MenuOption = styled.button`
  font-family: "InterRegular";
  font-size: 2rem;
  color: #fff;
  background: none;
  border: none;
  margin: 0 15px;
  cursor: pointer;

  :hover {
    color: #ff0000;
    transition: ease 500ms;
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  background-color: transparent;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 5rem;
  height: 5rem;
`;

export const ButtonMenu = styled.button`
  font-size: 1.8rem;
  background-color: transparent;
  cursor: pointer;
`;

export const IconButton = styled.span`
  border-top: 0.2rem solid;
  display: block;
  color: #fff;

  ::after,
  ::before {
    content: "";
    display: block;
    width: 3rem;
    height: 0.2rem;
    background-color: currentColor;
    margin-top: 0.5rem;
    transition: 0.7s;
    position: relative;
  }
`;

export const ListMenu = styled.ul`
  overflow-x: hidden;
  width: 25rem;
  height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  background-color: #131313;
  position: absolute;
  top: 7.1rem;
  right: 0rem;
  overflow-y: hidden;
  transition: 0.7s;
  z-index: 10;
`;

export const ItemMenu = styled.li`
  font-family: "BarlowRegular";
  font-size: 2rem;
  color: #fff;
  transition: all 0.3s;

  :hover {
    color: #ff0000;
  }
`;

export const MenuMobile = styled.nav`
  display: none;

  @media (max-width: 1366px) {
    display: block;
  }

  &.active ${ListMenu} {
    height: 28rem;
    padding: 4rem;
    margin-top: 0.9rem;
  }

  &.active ${IconButton} {
    border-top-color: transparent;
  }

  &.active ${IconButton}::before {
    transform: rotate(135deg);
  }

  &.active ${IconButton}::after {
    transform: rotate(-135deg);
    top: -0.7rem;
  }
`;
