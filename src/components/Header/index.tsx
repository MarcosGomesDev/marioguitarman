import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderContent,
  MenuOption,
  MenuHeader,
  ButtonMenu,
  ListMenu,
  IconButton,
  MenuMobile,
  ItemMenu,
} from "./styles";

interface Props {
  onClickToHome(elementRef: any): void;
  onClickToQuality(): void;
  onClickToAbout(): void;
  onClickToService(): void;
  onClickToKnowledge(): void;
  onClickToProjects(): void;
  onClickToContact(): void;
}

const Header: React.FC<Props> = ({
  onClickToHome,
  onClickToAbout,
  onClickToQuality,
  onClickToService,
  onClickToKnowledge,
  onClickToProjects,
  onClickToContact,
}) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <HeaderContainer>
      <HeaderContent>
        <div style={{ flex: 1 }}></div>
        <MenuHeader>
          <MenuOption onClick={onClickToHome}>Home</MenuOption>
          <MenuOption onClick={onClickToAbout}>Sobre</MenuOption>
          <MenuOption onClick={onClickToProjects}>Projetos</MenuOption>
          <MenuOption onClick={onClickToContact}>Contato</MenuOption>
        </MenuHeader>

        <MenuMobile className={active ? "active" : ""}>
          <ButtonMenu onClick={() => setActive(!active)}>
            <IconButton />
          </ButtonMenu>
          <ListMenu>
            <ItemMenu>
              <MenuOption onClick={onClickToHome}>Home</MenuOption>
            </ItemMenu>
            <ItemMenu>
              <MenuOption onClick={onClickToAbout}>Sobre</MenuOption>
            </ItemMenu>
            <ItemMenu>
              <MenuOption onClick={onClickToProjects}>Projetos</MenuOption>
            </ItemMenu>
            <ItemMenu>
              <MenuOption onClick={onClickToContact}>Contato</MenuOption>
            </ItemMenu>
          </ListMenu>
        </MenuMobile>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
