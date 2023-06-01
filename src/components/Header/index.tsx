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
          <MenuOption
            onClick={onClickToHome}
            aria-labelledby="Home"
            aria-label="button home"
          >
            Home
          </MenuOption>
          <MenuOption
            onClick={onClickToAbout}
            aria-labelledby="Sobre"
            aria-label="button sobre"
          >
            Sobre
          </MenuOption>
          <MenuOption
            onClick={onClickToProjects}
            aria-labelledby="Projetos"
            aria-label="button projetos"
          >
            Projetos
          </MenuOption>
          <MenuOption
            onClick={onClickToContact}
            aria-labelledby="Contato"
            aria-label="button contato"
          >
            Contato
          </MenuOption>
        </MenuHeader>

        <MenuMobile className={active ? "active" : ""}>
          <ButtonMenu
            onClick={() => setActive(!active)}
            aria-labelledby="Menu"
            aria-label="button menu"
          >
            <IconButton />
          </ButtonMenu>
          <ListMenu>
            <ItemMenu>
              <MenuOption
                onClick={onClickToHome}
                aria-labelledby="Home"
                aria-label="button home"
              >
                Home
              </MenuOption>
            </ItemMenu>
            <ItemMenu>
              <MenuOption
                onClick={onClickToAbout}
                aria-label="button sobre"
                aria-labelledby="Sobre"
              >
                Sobre
              </MenuOption>
            </ItemMenu>
            <ItemMenu>
              <MenuOption
                onClick={onClickToProjects}
                aria-labelledby="Projetos"
                aria-label="button projetos"
              >
                Projetos
              </MenuOption>
            </ItemMenu>
            <ItemMenu>
              <MenuOption
                onClick={onClickToContact}
                aria-labelledby="Contato"
                aria-label="button contato"
              >
                Contato
              </MenuOption>
            </ItemMenu>
          </ListMenu>
        </MenuMobile>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
